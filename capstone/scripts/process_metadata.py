from datetime import datetime
from scripts.helpers import parse_xml, resolve_namespace


def get_case_metadata(case_xml):
    parsed = parse_xml(case_xml)

    # duplicative cases won't have a case section, so rather than using case.caseid we get the volume barcode from the
    # first alto file entry, and the case number from the casebody:
    volume_barcode = parsed('mets|fileGrp[USE="alto"] mets|FLocat')[0].attrib[resolve_namespace('xlink|href')].split('/')[-1].split('_')[0]
    case_number = parsed('mets|fileGrp[USE="casebody"] > mets|file').attr["ID"].split('_')[1]
    case_id = "%s_%s" % (volume_barcode, case_number)

    metadata = {
        'volume_barcode': volume_barcode,
        'case_id': case_id
    }
    if parsed('duplicative|casebody'):
        first_page = parsed('duplicative|casebody').attr.firstpage
        last_page = parsed('duplicative|casebody').attr.lastpage
        return dict(metadata, **{
            'duplicative': True,
            'first_page': first_page,
            'last_page': last_page,
        })

    citation_entries = parsed('case|case').find('case|citation')
    citations = {cite.attrib['category']: cite.text for cite in citation_entries}
    jurisdiction = parsed('case|court').attr('jurisdiction').strip()


    name = parsed('case|name').text()
    name_abbreviation = parsed('case|name').attr('abbreviation')

    first_page = parsed('casebody|casebody').attr.firstpage
    last_page = parsed('casebody|casebody').attr.lastpage

    decision_date_original = parsed('case|decisiondate').text()
    decision_date = decision_datetime(decision_date_original)

    docket_number = parsed('case|docketnumber').text()

    court = {
        'name_abbreviation': parsed('case|court').attr.abbreviation,
        'name': parsed('case|court').text(),
    }

    return dict(metadata, **{
        'name': name,
        'name_abbreviation': name_abbreviation,
        'jurisdiction': jurisdiction,
        'citations': citations,
        'first_page': first_page,
        'last_page': last_page,
        'decision_date_original': decision_date_original,
        'decision_date': decision_date,
        'court': court,
        'docket_number': docket_number,
        'duplicative': False,
    })


def decision_datetime(decision_date_text):
    try:
        return datetime.strptime(decision_date_text, '%Y-%m-%d')
    except ValueError:
        try:
            return datetime.strptime(decision_date_text, '%Y-%m')
        except ValueError:
            return datetime.strptime(decision_date_text, '%Y')
