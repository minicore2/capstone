(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],h=0,d=[];h<s.length;h++)o=s[h],i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={case:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([8,"chunk-common"]),n()})({8:function(e,t,n){e.exports=n("ee26")},d8b9:function(e,t,n){
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
(function(t,n){e.exports=n()})(0,function(){"use strict";var e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=i,this.iframesTimeout=a}return n(e,[{key:"getContexts",value:function(){var e=void 0,t=[];return e="undefined"!==typeof this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"===typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[],e.forEach(function(e){var n=t.filter(function(t){return t.contains(e)}).length>0;-1!==t.indexOf(e)||n||t.push(e)}),t}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var i=e.contentWindow;if(r=i.document,!i||!r)throw new Error("iframe inaccessible")}catch(a){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t="about:blank",n=e.getAttribute("src").trim(),r=e.contentWindow.location.href;return r===t&&n!==t&&n}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,i=!1,a=null,o=function o(){if(!i){i=!0,clearTimeout(a);try{r.isIframeBlank(e)||(e.removeEventListener("load",o),r.getIframeContents(e,t,n))}catch(s){n()}}};e.addEventListener("load",o),a=setTimeout(o,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(r){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var i=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=t.querySelectorAll("iframe"),s=o.length,c=0;o=Array.prototype.slice.call(o);var l=function(){--s<=0&&a(c)};s||l(),o.forEach(function(t){e.matches(t,i.exclude)?l():i.onIframeReady(t,function(e){n(t)&&(c++,r(e)),l()},l)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){var r=e.compareDocumentPosition(n),i=Node.DOCUMENT_POSITION_PRECEDING;if(r&i){if(null===t)return!0;var a=t.compareDocumentPosition(n),o=Node.DOCUMENT_POSITION_FOLLOWING;if(a&o)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode(),n=void 0;return n=null===t?e.nextNode():e.nextNode()&&e.nextNode(),{prevNode:t,node:n}}},{key:"checkIframeFilter",value:function(e,t,n,r){var i=!1,a=!1;return r.forEach(function(e,t){e.val===n&&(i=t,a=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==i||a?!1===i||a||(r[i].handled=!0):r.push({val:n,handled:!0}),!0):(!1===i&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var i=this;e.forEach(function(e){e.handled||i.getIframeContents(e.val,function(e){i.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,i){var a=this,o=this.createIterator(t,e,r),s=[],c=[],l=void 0,u=void 0,h=function(){var e=a.getIteratorNode(o);return u=e.prevNode,l=e.node,l};while(h())this.iframes&&this.forEachIframe(t,function(e){return a.checkIframeFilter(l,u,e,s)},function(t){a.createInstanceOnIframe(t).forEachNode(e,function(e){return c.push(e)},r)}),c.push(l);c.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(s,e,n,r),i()}},{key:"forEachNode",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=this.getContexts(),o=a.length;o||i(),a.forEach(function(a){var s=function(){r.iterateThroughNodes(e,a,t,n,function(){--o<=0&&i()})};r.iframes?r.waitForIframes(a,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"===typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var i=!1;return n.every(function(t){return!r.call(e,t)||(i=!0,!1)}),i}return!1}}]),e}(),a=function(){function a(e){t(this,a),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(a,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===("undefined"===typeof r?"undefined":e(r))&&"function"===typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e),e}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in t)if(t.hasOwnProperty(i)){var a=t[i],o="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),s="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(a):this.escapeStr(a);""!==o&&""!==s&&(e=e.replace(new RegExp("("+this.escapeStr(o)+"|"+this.escapeStr(s)+")","gm"+n),r+"("+this.processSynomyms(o)+"|"+this.processSynomyms(s)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""}),e.replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(i){n.every(function(n){if(-1!==n.indexOf(i)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",r=this.opt.accuracy,i="string"===typeof r?r:r.value,a="string"===typeof r?[]:r.limiters,o="";switch(a.forEach(function(e){o+="|"+t.escapeStr(e)}),i){case"partially":default:return"()("+e+")";case"complementary":return o="\\s"+(o||this.escapeStr(n)),"()([^"+o+"]*"+e+"[^"+o+"]*)";case"exactly":return"(^|\\s"+o+")("+e+")(?=$|\\s"+o+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var i=t.callNoMatchOnInvalidRanges(e,r),a=i.start,o=i.end,s=i.valid;s&&(e.start=a,e.length=o-a,n.push(e),r=o)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,i=!1;return e&&"undefined"!==typeof e.start?(n=parseInt(e.start,10),r=n+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:i}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,i=!0,a=n.length,o=t-a,s=parseInt(e.start,10)-o;return s=s>a?a:s,r=s+parseInt(e.length,10),r>a&&(r=a,this.log("End range automatically set to the max value of "+a)),s<0||r-s<0||s>a||r>a?(i=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:i}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),a=i.splitText(n-t),o=document.createElement(r);return o.setAttribute("data-markjs","true"),this.opt.className&&o.setAttribute("class",this.opt.className),o.textContent=i.textContent,i.parentNode.replaceChild(o,i),a}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,i){var a=this;e.nodes.every(function(o,s){var c=e.nodes[s+1];if("undefined"===typeof c||c.start>t){if(!r(o.node))return!1;var l=t-o.start,u=(n>o.end?o.end:n)-o.start,h=e.value.substr(0,o.start),d=e.value.substr(u+o.start);if(o.node=a.wrapRangeInTextNode(o.node,l,u),e.value=h+d,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=u),e.nodes[n].end-=u)}),n-=u,i(o.node.previousSibling,o.start),!(n>o.end))return!1;t=o.end}return!0})}},{key:"wrapMatches",value:function(e,t,n,r,i){var a=this,o=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){t=t.node;var i=void 0;while(null!==(i=e.exec(t.textContent))&&""!==i[o])if(n(i[o],t)){var s=i.index;if(0!==o)for(var c=1;c<o;c++)s+=i[c].length;t=a.wrapRangeInTextNode(t,s,s+i[o].length),r(t.previousSibling),e.lastIndex=0}}),i()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,i){var a=this,o=0===t?0:t+1;this.getTextNodes(function(t){var s=void 0;while(null!==(s=e.exec(t.value))&&""!==s[o]){var c=s.index;if(0!==o)for(var l=1;l<o;l++)c+=s[l].length;var u=c+s[o].length;a.wrapRangeInMappedTextNode(t,c,u,function(e){return n(s[o],e)},function(t,n){e.lastIndex=n,r(t)})}i()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var i=this;this.getTextNodes(function(a){var o=a.value.length;e.forEach(function(e,r){var s=i.checkWhitespaceRanges(e,o,a.value),c=s.start,l=s.end,u=s.valid;u&&i.wrapRangeInMappedTextNode(a,c,l,function(n){return t(n,e,a.value.substring(c,l),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){var t=e.parentNode,n=document.createDocumentFragment();while(e.firstChild)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)while(e.nextSibling&&3===e.nextSibling.nodeType)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,i="wrapMatches",a=function(e){r++,n.opt.each(e)};this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),this[i](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},a,function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,i="wrapMatches",a=this.getSeparatedKeywords("string"===typeof e?[e]:e),o=a.keywords,s=a.length,c=this.opt.caseSensitive?"":"i",l=function e(t){var a=new RegExp(n.createRegExp(t),"gm"+c),l=0;n.log('Searching with expression "'+a+'"'),n[i](a,1,function(e,i){return n.opt.filter(i,t,r,l)},function(e){l++,r++,n.opt.each(e)},function(){0===l&&n.opt.noMatch(t),o[s-1]===t?n.opt.done(r):e(o[o.indexOf(t)+1])})};this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),0===s?this.opt.done(r):l(o[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,i=this.checkRanges(e);i&&i.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(i)),this.wrapRangeFromIndex(i,function(e,t,r,i){return n.opt.filter(e,t,r,i)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),a=t.matchesExclude(e);return!r||a?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),a}();function o(e){var t=this,n=new a(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}return o})},ee26:function(e,t,n){"use strict";n.r(t);var r=n("a4b5"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e.opinions?n("div",{staticClass:"sidebar-section outline"},[n("h3",[e._v("Case Outline")]),n("div",{staticClass:"sidebar-section-contents"},[n("ul",{staticClass:"bullets"},e._l(e.opinions,function(t){return n("li",[n("a",{attrs:{href:"#"+t.id}},[e._v(e._s(t.type))]),t.author?n("span",[e._v(" — "+e._s(t.author))]):e._e()])}),0)])]):e._e(),n("div",{staticClass:"sidebar-section"},[n("h3",[e._v("Other Formats")]),n("div",{staticClass:"sidebar-section-contents"},[n("ul",{staticClass:"bullets"},[e.templateVars.urls.casePdf?n("li",[n("a",{attrs:{href:e.templateVars.urls.casePdf}},[e._v("PDF")])]):e._e(),n("li",[n("a",{attrs:{href:e.templateVars.urls.caseApi}},[e._v("API")])])])])]),n("div",{staticClass:"sidebar-section"},[n("h3",[e._v("Selection Tools")]),n("div",{staticClass:"sidebar-section-contents"},[e.selectedText?n("ul",{staticClass:"bullets"},[n("li",[n("a",{attrs:{href:e.linkToSelection()}},[e._v('Link to "'+e._s(e.selectedTextShort)+'"')])]),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.copyCiteToSelection(t)}}},[e._v('Copy "'+e._s(e.selectedTextShort)+'" with cite')]),e.copyStatus?n("span",[e._v(e._s(e.copyStatus))]):e._e()]),n("li",[n("a",{attrs:{href:e.searchForSelection()}},[e._v('Search cases for "'+e._s(e.selectedTextShort)+'"')])]),e.templateVars.isStaff?n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.elideOrRedactSelection("elide")}}},[e._v('⚠️ Elide "'+e._s(e.selectedTextShort)+'"')])]):e._e(),e.templateVars.isStaff?n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.elideOrRedactSelection("redact")}}},[e._v('⚠️ Redact "'+e._s(e.selectedTextShort)+'"')])]):e._e()]):n("span",[e._v("Select text to link, cite, or search")])])]),e.templateVars.isStaff?n("div",{staticClass:"sidebar-section admin-tools"},[n("h3",[e._v("Admin Tools")]),e._m(1)]):e._e(),n("div",{staticClass:"sidebar-section explainer"},[n("h3",[e._v("What is this page?")]),n("div",{staticClass:"sidebar-section-contents"},[e._v("\n      Every document on this site is part of the official caselaw of a court within the\n      United States, scanned from the collection of the Harvard Law School Library. This is a\n      "+e._s(e.templateVars.jurisdictionName)+" case from "+e._s(e.templateVars.caseYear)+".\n      "),n("a",{attrs:{href:e.templateVars.urls.about}},[e._v("Learn more")]),e._v(".\n    ")])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-section"},[n("h2",[e._v("Tools")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-section-contents"},[n("ul",{staticClass:"bullets"},[n("li",[n("a",{attrs:{href:"{% url 'admin:capdb_casemetadata_change' db_case.id %}"}},[e._v("Django admin")])]),n("li",[n("a",{attrs:{href:"{% url 'case_editor' db_case.id host 'cite' %}"}},[e._v("Case editor")])])])])}],o=(n("6ac6"),n("67c8"),n("8ade"),n("fa38"),n("0012"),n("5b54"),n("9ec6"),n("e1a2"),n("8df7")),s=n.n(o),c=n("d8b9"),l=n.n(c),u=n("a881"),h=n.n(u);function d(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var i=n[r].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}var f=d("csrftoken");function p(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}h.a.ajaxSetup({beforeSend:function(e,t){p(t.type)||this.crossDomain||e.setRequestHeader("X-CSRFToken",f)}});var v={name:"Sidebar",beforeMount:function(){this.templateVars=templateVars},mounted:function(){var e=this,t=document.querySelector(".case-container");document.addEventListener("selectionchange",s()(function(){var n=window.getSelection();if(t.contains(n.anchorNode)){var r=n.getRangeAt(0).toString();r&&(e.selectedText=r,e.lastSelection=n)}}));var n=new URLSearchParams(window.location.search).get("highlight");if(n){var r=new l.a(t);r.mark(n,{separateWordSearch:!1,diacritics:!0,acrossElements:!0}),window.scrollTo({top:document.querySelector("mark").getBoundingClientRect().top-100})}function i(e){var t=h()(e);t.text()===t.attr("data-hidden-text")?t.text(t.attr("data-orig-text")):(t.attr("data-orig-text",t.text()),t.text(t.attr("data-hidden-text")))}document.addEventListener("keydown",function(t){if((t.ctrlKey||t.metaKey)&&"/"===t.key)document.querySelector("#sidebar-menu").focus();else if("Escape"===t.key){var n=!0,r=!1,i=void 0;try{for(var a,o=document.querySelectorAll(".focusable-element")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.remove()}}catch(l){r=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}if(e.lastSelection){var c=e.lastSelection.getRangeAt(0);c.insertNode(c.createContextualFragment("<span class='focusable-element' tabindex='-1'></span>")),document.querySelector(".focusable-element").focus()}}}),h()(".elided-text").on("click",function(e){i(e.target)}).on("keypress",function(e){13===e.which&&i(e.target)});var a=[],o=!0,c=!1,u=void 0;try{for(var d,f=t.querySelectorAll(".opinion")[Symbol.iterator]();!(o=(d=f.next()).done);o=!0){var p=d.value,v="",g=p.querySelector(".author");if(g){var m=h()(g).clone();m.find(".page-label").remove(),v=m.text().toLowerCase().replace(/^[^\w.]|[^\w.]$/g,"")}a.push({id:p.firstChild.id,type:p.getAttribute("data-type").toLowerCase(),author:v})}}catch(y){c=!0,u=y}finally{try{o||null==f.return||f.return()}finally{if(c)throw u}}this.opinions=a},data:function(){return{selectedText:null,lastSelection:null,copyStatus:null,opinions:null}},watch:{selectedText:function(){this.copyStatus=null}},computed:{selectedTextShort:function(){var e=2,t=this.selectedText.split(/\s+/),n=t.slice(0,e).join(" ");return t.length>e&&(n+=" ..."),n}},methods:{linkToSelection:function(){var e=new URL(window.location.href);return e.searchParams.delete("highlight"),e.searchParams.append("highlight",this.selectedText),e.toString()},searchForSelection:function(){return templateVars.urls.search+"?search="+encodeURIComponent(this.selectedText)},copyCiteToSelection:function(){var e=this,t='"'+this.selectedText+'" '+full_cite;navigator.clipboard.writeText(t).then(function(){return e.copyStatus="done"},function(){return e.copyStatus="failed"})},elideOrRedactSelection:function(e){confirm("Really ".concat(e,' "').concat(this.selectedText,'"?'))&&h.a.post(templateVars.urls.redact,{kind:e,text:this.selectedText},function(){window.location.reload()})}}},g=v,m=n("a6c2"),y=Object(m["a"])(g,i,a,!1,null,null,null),x=y.exports;new r["default"]({el:"#sidebar-menu-content",components:{Sidebar:x},template:"<Sidebar/>"})}});
//# sourceMappingURL=case.db3162f8.js.map