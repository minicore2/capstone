import csv
import re
from collections import defaultdict, Counter
from difflib import get_close_matches
from math import log
from pathlib import Path

from django.conf import settings
from django.db import connections
from tqdm import tqdm

from capdb.models import Citation, EditLog, Reporter, CaseMetadata

"""
    Usage: fab run_script:scripts.link_scdb
    
    This script attempts to link up CAP cases with SCDB cases.
    
    Inputs:
        - test_data/zips/us_cites.csv, which collects our cite data
            generated by this sql query: 
                \copy (select m.id, m.volume_id, cite, name, name_abbreviation, decision_date 
                from capdb_casemetadata m, capdb_citation c where c.case_id=m.id and c.cite like '%U.S.%') 
                To 'us_cites.csv' With CSV
        - test_data/zips/SCDB_2019_01_caseCentered_Citation.csv, downloaded from http://scdb.wustl.edu/
        - test_data/zips/SCDB_Legacy_05_caseCentered_Citation.csv, downloaded from http://scdb.wustl.edu/
        
    The script also requires access to CaseMetadata to fetch additional information about volumes.
    
    Outputs:
        - test_data/zips/scdb_cite_matchup.csv, a listing of all matched and unmatched SCDB cites
"""

# HELPERS

def tokenize(s):
    """ Return unique words from s, stripping punctuation from words. """
    return set(w.strip(',.;:\'\"”“') for w in s.lower().split())

def tf_idf_sum(s1, s2, word_counts, document_count):
    """ Return summed inverse document frequency of all words that appear in both s1 and s2. """
    overlap = tokenize(s1) & tokenize(s2)
    return sum(log(document_count/word_counts[w]) for w in overlap)

def top_tf_idf_sums(s1, candidates, word_counts, document_count, threshold=5):
    """ Return all strings from candidates whose tf_idf_sum exceeds threshold, in decreasing order. """
    matches = sorted(((tf_idf_sum(s1, c, word_counts, document_count), c) for c in candidates), reverse=True)
    return [m[1] for m in matches if m[0] >= threshold]

def group_by(collection, key):
    """ Return dict grouping collection by key function. """
    out = defaultdict(list)
    for item in collection:
        out[key(item)].append(item)
    return out

def get_best_match(targets, candidates, word_counts, document_count, tf_threshold=5):
    """
        Return best matches in candidates, comparing to targets, in decreasing order. This uses a few different
        heuristics in order, and returns the first success:
            - difflib's get_close_matches
            - one string contained within another, or vice versa
            - top_tf_idf_sums
        Return None if no good matches found
    """
    for target in targets:
        best = get_close_matches(target, candidates, 1) or \
               [c for c in candidates if c in target or target in c] or \
               top_tf_idf_sums(target, candidates, word_counts, document_count, threshold=tf_threshold)
        if best:
            return best

def get_cite_reporter(cite):
    """ Return "U.S." from "123 U.S. 456" by stripping off leading and trailing digits and whitespace. """
    return re.sub(r'^\d+\s+|\s+\d+$', '', cite)

# correct matches found while writing script
manual_matches = {
    '2007-061': '3677184',
}

base_path = Path(settings.BASE_DIR, 'test_data/zips')
# columns in us_cites.csv
exported_columns = ['id', 'volume_id', 'cite', 'name', 'name_abbreviation', 'decision_date']

def manual_pre_edits(dry_run='true'):
    """
        These fixes were determined from inspecting the initial output of main() for error messages.
    """

    ## delete "U. S." cites and manually detected typo cites

    to_delete = []
    changed_cites = []
    to_reindex = []
    potential_matches = list(Citation.objects.filter(cite__contains=' U. S. '))
    actual_matches = [c for c in potential_matches if ';' not in c.cite and re.match(r'\d+ U\. S\. \d+', c.cite)]
    actual_matches += [
        Citation.objects.get(case_id=1493694, cite="822 F.2d 52"),
        Citation.objects.get(case_id=6210086, cite="For"),
    ]
    for cite in actual_matches:
        print("Would delete %s" % cite)
        to_delete.append(cite)
        changed_cites.append(cite.cite)
        to_reindex.append(cite.case)

    if dry_run == 'false':
        with EditLog(
            description='Delete incorrectly identified cites matching "\d+ U. S. \d+" (extra space). '
            'These all refer to prior history of the case.'
        ).record():
            for cite in to_delete:
                cite.delete()
            CaseMetadata.update_frontend_urls(changed_cites)
            CaseMetadata.reindex_cases(to_reindex)

def main(dry_run='true', output_missing='false'):
    # download data
    cap_cites_path = base_path / 'us_cites.csv'
    if not cap_cites_path.exists():
        print("pre-loading cap cites")
        us_reporter = Reporter.objects.get(short_name='U.S.')
        with connections['capdb'].cursor() as cursor:
            cursor.execute("""
                select m.id, m.volume_id, cite, name, name_abbreviation, decision_date 
                from capdb_casemetadata m, capdb_citation c where m.reporter_id=%s and c.case_id=m.id and c.cite like '%%U.S.%%'
            """, [us_reporter.id])
            with cap_cites_path.open('w') as out_file:
                csv_writer = csv.writer(out_file)
                for row in cursor.fetchall():
                    csv_writer.writerow(row)

    # load data
    print("loading data")
    scdb_new_cites_path = base_path / 'SCDB_2019_01_caseCentered_Citation.csv'
    scdb_old_cites_path = base_path / 'SCDB_Legacy_05_caseCentered_Citation.csv'
    cap_cites = list(csv.DictReader((l.replace('\xad', '') for l in cap_cites_path.open()), exported_columns))
    scdb_cites = list(csv.DictReader(scdb_new_cites_path.open(encoding='iso-8859-1'))) + list(csv.DictReader(scdb_old_cites_path.open(encoding='iso-8859-1')))
    scdb_cites = [c for c in scdb_cites if c['usCite']]
    cap_cites_by_id = {c['id']:c for c in cap_cites}
    scdb_cites_by_id = {c['caseId']:c for c in scdb_cites}
    scdb_cites_lookup = group_by(scdb_cites, lambda c: c['usCite'])

    # count terms for tf_idf
    print("counting terms")
    word_counts = Counter()
    word_counts.update(i for c in cap_cites for i in tokenize(c['name']))
    word_counts.update(i for c in scdb_cites for i in tokenize(c['caseName']))
    document_count = len(cap_cites)+len(scdb_cites)

    ### first pass at checking for matches -- find all cases where cites are the same and titles are similar.
    # These are "strong" matches.
    print("checking for matches")
    matched_cap_case_ids = set()
    for cap_cite in tqdm(cap_cites):
        cite = cap_cite['cite']

        # strip nominatives from CAP cites
        cite = re.sub(r'\(.*\) ', '', cite)

        # skip CAP cites that don't look like "123 U.S. 456"
        if not re.match(r'\w+ U\.S\. \w+$', cite):
            continue

        if cite in scdb_cites_lookup:
            candidates = scdb_cites_lookup[cite]
            candidates_by_name = {c['caseName'].lower(): c for c in candidates}
            best = get_best_match(
                [cap_cite['name'].lower(), cap_cite['name_abbreviation'].lower()],
                candidates_by_name.keys(),
                word_counts, document_count
            )
            if best:
                c = candidates_by_name[best[0]]
                c['cap_cite'] = cap_cite
                c['match_quality'] = 'strong'
                matched_cap_case_ids.add(cap_cite['id'])
            else:
                for c in candidates:
                    c.setdefault('failed_matches', []).append(cap_cite)

    # apply manual_matches overrides
    for k, v in manual_matches.items():
        c = scdb_cites_by_id[k]
        c['cap_cite'] = cap_cites_by_id[v]
        c['match_quality'] = 'confirmed'
        matched_cap_case_ids.add(c['cap_cite']['id'])

    # write SCDB cites to database
    print("Applying corrections")
    edit_out = csv.writer((base_path / 'scdb_cite_edits.csv').open('w'))
    cite_objs = Citation.objects.filter(case_id__in=matched_cap_case_ids).select_related('case')
    cite_objs_by_case_id = group_by(cite_objs, lambda c: c.case_id)
    to_create = []
    to_update = []
    for scdb_cite in scdb_cites:
        if 'cap_cite' not in scdb_cite:
            continue
        case_id = int(scdb_cite['cap_cite']['id'])
        existing_cite_objs_by_reporter = {get_cite_reporter(c.cite): c for c in cite_objs_by_case_id[case_id]}
        expected_cites = [['SCDB', 'SCDB %s' % scdb_cite['caseId'], 'vendor']]
        for scdb_key, cite_type in [["usCite", "official"], ["sctCite", "parallel"], ["ledCite", "parallel"], ["lexisCite", "vendor"]]:
            cite_val = scdb_cite[scdb_key]
            if cite_val:
                expected_cites.append([get_cite_reporter(cite_val), cite_val, cite_type])
        for reporter, cite_val, cite_type in expected_cites:
            if reporter in existing_cite_objs_by_reporter:
                new_cite = existing_cite_objs_by_reporter.pop(reporter)
                if new_cite.cite == cite_val:
                    edit_out.writerow([case_id, 'skip', new_cite.id, cite_val])
                else:
                    edit_out.writerow([case_id, 'update', new_cite.id, new_cite.cite, cite_val])
                    new_cite.cite = cite_val
                    to_update.append(new_cite)
            else:
                new_cite = Citation(cite=cite_val, type=cite_type, case_id=case_id, normalized_cite=Citation.normalize_cite(cite_val))
                to_create.append(new_cite)
                edit_out.writerow([case_id, 'create', new_cite.type, new_cite.cite])
        if existing_cite_objs_by_reporter:
            edit_out.writerow([case_id, 'warning', 'ignored cite']+[c.cite for c in existing_cite_objs_by_reporter.values()])

    if dry_run == 'false':
        with EditLog(description='Add SCDB cites').record():
            Citation.objects.bulk_create(to_create)
            Citation.objects.bulk_update(to_update, ['cite'])
            if settings.MAINTAIN_ELASTICSEARCH_INDEX:
                CaseMetadata.reindex_cases(CaseMetadata.objects.filter(id__in=[c.case_id for c in to_create]+[c.case_id for c in to_update]))

    if output_missing != 'true':
        return

    ### second pass at checking for matches -- for all SCDB cites that don't have matches, fetch all cases we have for the
    # same volume, and look for similar titles. These are "weak" matches.
    print("checking for fallback matches")
    no_match = [c for c in scdb_cites if 'cap_cite' not in c]
    missing_by_volume = group_by(no_match, lambda c: c['usCite'].split()[0])
    cap_cites_by_volume = group_by(cap_cites, lambda c: c['cite'].split()[0])

    # fetch all cases from the DB that belong to volumes where SCDB cases are missing
    target_volumes = set(c['volume_id'] for v in missing_by_volume for c in cap_cites_by_volume[v])
    db_cites = Citation.objects.filter(cite__contains='U.S.', case__volume_id__in=target_volumes).select_related('case')
    db_cases = []
    for cite in db_cites:
        # skip cases already affirmatively matched
        if str(cite.id) in matched_cap_case_ids:
            continue

        # conform DB objects to export format from csv
        c = cite.case
        c.cite = cite
        c.decision_date = c.decision_date.strftime("%Y-%m-%d")
        c.name = c.name.replace('\xad', '')
        c.name_abbreviation = c.name_abbreviation.replace('\xad', '')
        db_cases.append(c)
    db_cases_by_volume_id = group_by(db_cases, lambda d: d.volume_id)

    # check each missing SCDB cite for cases in the same volume with similar titles
    for v, missing in tqdm(missing_by_volume.items()):
        if v in cap_cites_by_volume:
            cases = sum((db_cases_by_volume_id[vol_id] for vol_id in set(c['volume_id'] for c in cap_cites_by_volume[v])), [])
            cases_by_name = {}
            for c in cases:
                cases_by_name[c.name.lower()] = c
                cases_by_name[c.name_abbreviation.lower()] = c

            for m in missing:
                if re.match(r'131 U\.S\. [a-z]+$', m['usCite']):
                    # special case -- skip cites like "131 U.S. lxxxiii", as we know we don't have them
                    continue
                best = get_best_match([m['caseName']], cases_by_name.keys(), word_counts, document_count, tf_threshold=10)
                if not best:
                    continue
                c = cases_by_name[best[0]]
                m['cap_cite'] = {k: getattr(c, k) for k in exported_columns}
                m['match_quality'] = 'weak'

    # output
    csv_out = csv.writer((base_path / 'scdb_cite_matchup.csv').open('w'))
    csv_out.writerow(['match quality', 'volume number', 'SCDB name', 'SCDB cite', 'SCDB date', 'SCDB ID', 'CAP name', 'CAP cite', 'CAP date', 'CAP ID', 'CAP vol id'])
    for c in scdb_cites:
        match = c.get('cap_cite')
        match_row = [match['name'], match['cite'], match['decision_date'], match['id'], match['volume_id']] if match else []
        csv_out.writerow([c.get('match_quality', 'none'), c['usCite'].split()[0], c['caseName'], c['usCite'], c['dateDecision'], c['caseId']]+match_row)
