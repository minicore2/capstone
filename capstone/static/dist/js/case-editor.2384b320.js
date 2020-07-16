(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={"case-editor":0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([10,"chunk-common"]),a()})({10:function(t,e,a){t.exports=a("1a45")},"1a45":function(t,e,a){"use strict";a.r(e);var r=a("a4b5"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row metadata",attrs:{id:"metadata-box"}},[a("div",{staticClass:"col-8 offset-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metadata.name,expression:"metadata.name"}],attrs:{type:"text",placeholder:"case name"},domProps:{value:t.metadata.name},on:{input:function(e){e.target.composing||t.$set(t.metadata,"name",e.target.value)}}})]),a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metadata.decision_date_original,expression:"metadata.decision_date_original"}],attrs:{type:"text",placeholder:"decision date string"},domProps:{value:t.metadata.decision_date_original},on:{input:function(e){e.target.composing||t.$set(t.metadata,"decision_date_original",e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metadata.docket_number,expression:"metadata.docket_number"}],attrs:{type:"text",placeholder:"docket number"},domProps:{value:t.metadata.docket_number},on:{input:function(e){e.target.composing||t.$set(t.metadata,"docket_number",e.target.value)}}})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 pl-3 pr-3"},[a("div",{staticClass:"sticky-top pt-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"save-button-box"},[a("button",{staticClass:"btn-secondary",attrs:{id:"save_button"},on:{click:function(e){return t.saveCase(e)}}},[t._v("(^s)ave case to DB")])])])]),a("div",{staticClass:"row mt-5 mb-3"},[a("div",{staticClass:"col"},[t.currentWord?a("div",{style:{"background-image":"url("+t.currentPage.page.image_url+")","background-size":t.currentPage.page.width+"px",width:t.currentWord.w+"px",height:t.currentWord.h+"px","background-position":"-"+t.currentWord.x+"px -"+t.currentWord.y+"px"}},[t._v(" ")]):a("div",{style:{width:"20rem",height:"2rem"}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[t.currentWord?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentWord.string,expression:"currentWord.string"}],ref:"currentWord",attrs:{type:"text",id:"current_word"},domProps:{value:t.currentWord.string},on:{input:function(e){e.target.composing||t.$set(t.currentWord,"string",e.target.value)}}}):a("input",{attrs:{type:"text",disabled:"",placeholder:"current word"}})]),a("div",{staticClass:"col-2"},[a("button",{attrs:{disabled:null===t.currentWord},on:{click:function(e){return t.addSoftHyphen()}}},[t._v("⧟")])])]),a("div",{staticClass:"edits-container row mt-5"},[t._m(0),a("div",{staticClass:"button-box col-7 pt-0"},[a("button",{staticClass:"btn-secondary",on:{click:t.clearEdits}},[t._v("Clear All Edits")])]),a("div",{staticClass:"row edited-word-list mt-3"},[a("div",{staticClass:"col-12 "},t._l(t.savedWordEdits,function(e,r){return a("div",{key:r},t._l(e,function(e,n){return a("div",{key:n},[a("div",t._l(e,function(e,i){return a("div",{key:i,staticClass:"row edit-entry"},[a("div",{staticClass:"col-5 word",on:{click:function(a){return t.scrollToWord(n+"_"+e[1])}}},[t._v(t._s(e[0]))]),a("div",{staticClass:"col-6 word",on:{click:function(a){return t.scrollToWord(n+"_"+e[1])}}},[t._v(t._s(e[1]))]),a("div",{staticClass:"col-1 edit-controls"},[a("span",{staticClass:"edit-delete",on:{click:function(e){return t.removeEdit(r,n,i)}}},[t._v("⊗")])])])}),0)])}),0)}),0)])])])]),a("div",{staticClass:"col-8",attrs:{id:"canvas_div"}},t._l(t.pages,function(e){return a("page",{key:e.id,ref:"pageComponents",refInFor:!0,attrs:{page:e,savedWordEdits:t.savedWordEdits[e.id]}})}),1),a("div",{staticClass:"col-1",attrs:{id:"controls"}},[a("div",{staticClass:"sticky-top pt-6 row"},[a("div",{staticClass:"col viz-controls"},[t.showOcr?a("div",{staticClass:"row ocr-toggle"},[a("button",{staticClass:"toggle-btn on",on:{click:function(e){t.showOcr=!1}}},[t._v("(^O)CR")])]):a("div",{staticClass:"row ocr-toggle"},[a("button",{staticClass:"toggle-btn off",on:{click:function(e){t.showOcr=!0}}},[t._v("(^O)CR")])]),t.showConfidence?a("div",{staticClass:"row wc-toggle"},[a("button",{staticClass:"toggle-btn on",on:{click:function(e){t.showConfidence=!1}}},[t._v("W(^C)")])]):a("div",{staticClass:"row wc-toggle"},[a("button",{staticClass:"toggle-btn off",on:{click:function(e){t.showConfidence=!0}}},[t._v("W(^C)")])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-5 pt-1"},[a("h4",{staticClass:"edits-title"},[t._v("edits")])])}],s=(a("a0c4"),a("e9de"),a("1a43"),a("c1c3"),a("477f")),o=(a("67c8"),a("e1a2"),a("fa38"),a("0012"),a("8430")),c=(a("baa4"),a("5b54"),a("2bf3"),a("ef92"),a("45bc")),l=a("a881"),d=a.n(l),u=(a("ba72"),a("8df7")),f=a.n(u),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{page:!0,"show-ocr":t.$parent.showOcr}},[a("img",{attrs:{src:t.page.image_url,width:t.page.width*t.scale,height:t.page.height*t.scale}}),t._l(t.words,function(e,r){return a("span",{key:r,class:t.wordClass(e),style:t.wordStyle(e),attrs:{"scroll-to-here":e.blockId+"_"+e.string},on:{click:function(a){return t.wordClicked(e)}}},[t._v("\n    "+t._s(e.string)+"\n  ")])})],2)},h=[],p=(a("6ac6"),a("d2d3")),g="­",m="⧟",y={props:["page","savedWordEdits"],data:function(){return{scale:1,words:[]}},computed:{fontScale:function(){return 300*this.scale/72}},watch:{words:{handler:function(){this.$parent.saveStateToStorage()},deep:!0}},beforeMount:function(){var t=this,e=[],a=!0,r=!1,n=void 0;try{for(var i,s=function(){var a=i.value;if(!a.tokens)return"continue";var r=null,n=-1,s=t.savedWordEdits&&t.savedWordEdits[a.id]?t.savedWordEdits[a.id]:{},c=!0,l=!1,d=void 0;try{for(var u,f=a.tokens.entries()[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var v=Object(o["a"])(u.value,2),h=v[0],y=v[1];if("string"!==typeof y){var b=Object(o["a"])(y,2),w=b[0],C=b[1];if("ocr"===w){var _=C.rect;r={blockId:a.id,wordConfidence:C.wc,font:t.$parent.fonts[n],strings:[],x:_[0],y:_[1],w:_[2],h:_[3]}}else if("/ocr"===w){if(!r)continue;if(r.strings.length){var k=e.length;r.originalString=r.strings.map(function(t){return t.value}).join("").replace(g,m),k in s&&s[k][0]===r.originalString?r.string=s[k][1]:r.string=r.originalString,r.lineHeight=t.$parent.getFontLineHeight(n),r.yOffset=Math.min.apply(Math,Object(p["a"])(r.string.split("").map(function(e){return r.lineHeight-t.$parent.getCharAscent(e,n)}))),e.push(r)}r=null}else"font"===w?n=C.id:"/font"===w&&(n=-1)}else r&&r.strings.push({index:h,value:y})}}catch(S){l=!0,d=S}finally{try{c||null==f.return||f.return()}finally{if(l)throw d}}},c=this.page.blocks[Symbol.iterator]();!(a=(i=c.next()).done);a=!0)s()}catch(l){r=!0,n=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw n}}this.words=e},mounted:function(){this.scale=document.getElementById("canvas_div").offsetWidth/this.page.width},methods:{wordStyle:function(t){var e=t.font;return{left:"".concat(t.x*this.scale,"px"),top:"".concat(t.y*this.scale-t.yOffset*this.fontScale-1,"px"),"background-color":this.$parent.showConfidence?this.wordConfidenceColor(t):"unset",font:"".concat(e.styles," ").concat(e.size*this.fontScale,"px/").concat(t.lineHeight*this.fontScale,"px ").concat(e.family)}},wordClass:function(t){return{"current-word":this.$parent.currentWord===t,edited:t.string!==t.originalString}},wordClicked:function(t){var e=this;this.$parent.currentWord=t,this.$parent.currentPage=this,this.$nextTick(function(){e.$parent.$refs.currentWord.focus()})},wordConfidenceColor:function(t){var e=100*(.6-t.wordConfidence),a=255*t.wordConfidence+127;return"rgba(".concat(a,", 0, 0, ").concat(e,"%)")}}},b=y,w=(a("54bf"),a("a6c2")),C=Object(w["a"])(b,v,h,!1,null,"afa0125c",null),_=C.exports,k={components:{Page:_},data:function(){return{currentWord:null,currentPage:null,showOcr:!0,showConfidence:!0,metadata:null,savedWordEdits:{}}},watch:{metadata:{handler:function(){this.saveStateToStorage()},deep:!0},savedWordEdits:function(){return this.savedWordEdits}},mounted:function(){var t=this;window.onkeyup=function(e){if(e.ctrlKey)switch(e.key){case"o":t.showOcr=!t.showOcr;break;case"c":t.showConfidence=!t.showConfidence;break;case"s":t.saveCase();break;default:break}}},beforeMount:function(){this.urls=templateVars.urls,this.metadata=templateVars.metadata,this.serverMetadata=Object(c["a"])({},this.metadata),this.pages=templateVars.pages,this.fonts=templateVars.fonts;for(var t=0,e=Object.keys(this.fonts);t<e.length;t++){var a=e[t];this.fonts[a]=this.processFont(this.fonts[a])}this.fonts[-1]={styles:"",family:"Times New Roman",size:12},this.charAscentCache={},this.storageKey="caseedit-".concat(this.metadata.id),this.savedWordEdits={};var r=localStorage.getItem(this.storageKey);if(r)try{var n=JSON.parse(r);if(this.savedWordEdits=n.edit_list,Object.keys(n.metadata).length>0)for(var i=0,s=Object.entries(n.metadata);i<s.length;i++){var l=Object(o["a"])(s[i],2),d=l[0],u=Object(o["a"])(l[1],2),f=u[0],v=u[1];this.metadata[d]===f&&(this.metadata[d]=v)}}catch(h){console.log("Error applying edit_list to server state",h),localStorage.removeItem(this.storageKey)}},methods:{scrollToWord:function(t){document.body.querySelector('span[scroll-to-here="'+t+'"]').scrollIntoView()},removeEdit:function(t,e,a){var r=!0,n=!1,i=void 0;try{for(var s,o=this.$refs.pageComponents[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var c=s.value,l=c.page.id.toString();if(l===t){var d=c.words[a];c.$set(d,"string",d.originalString),this.$delete(this.savedWordEdits[t][e],a),this.saveStateToStorage()}}}catch(u){n=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}},clearEdits:function(){confirm("CONFIRM: permanently discard your edits?\nThere is no undo for this command.")&&(localStorage.removeItem(this.storageKey),this.savedWordEdits={})},getMetadataEdits:function(){for(var t={},e=0,a=Object.entries(this.metadata);e<a.length;e++){var r=Object(o["a"])(a[e],2),n=r[0],i=r[1],s=this.serverMetadata[n];i!==s&&(t[n]=[s,i])}return t},getTokenEdits:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e={},a=!0,r=!1,n=void 0;try{for(var i,s=this.$refs.pageComponents[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var c=i.value,l=c.page.id,d=!0,u=!1,f=void 0;try{for(var v,h=c.words.entries()[Symbol.iterator]();!(d=(v=h.next()).done);d=!0){var p=Object(o["a"])(v.value,2),y=p[0],b=p[1];if(b.string!==b.originalString)if(e[l]||(e[l]={}),e[l][b.blockId]||(e[l][b.blockId]={}),t)e[l][b.blockId][y]=[b.originalString,b.string];else{var w=b.string.replace(m,g),C=!0,_=!1,k=void 0;try{for(var S,x=b.strings.entries()[Symbol.iterator]();!(C=(S=x.next()).done);C=!0){var O=Object(o["a"])(S.value,2),W=O[0],E=O[1];e[l][b.blockId][E.index]=[E.value,0===W?w:""]}}catch(j){_=!0,k=j}finally{try{C||null==x.return||x.return()}finally{if(_)throw k}}}}}catch(j){u=!0,f=j}finally{try{d||null==h.return||h.return()}finally{if(u)throw f}}}}catch(j){r=!0,n=j}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return e},getState:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{metadata:this.getMetadataEdits(),edit_list:this.getTokenEdits(t)}},saveStateToStorage:f()(function(){var t=this.getState(!0);localStorage.setItem(this.storageKey,JSON.stringify(t)),this.savedWordEdits=t["edit_list"]},500),saveCase:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(confirm("CONFIRM: permanently overwrite "+this.metadata.name+" in the CAP database with your edited version?\nThere is no undo for this command.")){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,d.a.ajax("",{type:"POST",data:JSON.stringify(this.getState()),contentType:"application/json"}).promise();case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](2),alert("error saving:",t.t0),t.abrupt("return");case 11:this.flashSave(),localStorage.removeItem(this.storageKey),window.location.href=this.urls.case;case 14:case"end":return t.stop()}},t,this,[[2,7]])}));function e(){return t.apply(this,arguments)}return e}(),getCharAscent:function(t,e){var a="".concat(e,"-").concat(t);if(!this.charAscentCache.hasOwnProperty(a)){var r=document.createElement("canvas"),n=r.getContext("2d"),i=this.fonts[e];n.font="".concat(i.styles," ").concat(i.size,"pt ").concat(i.family),this.charAscentCache[a]=3*n.measureText(t).actualBoundingBoxAscent/4}return this.charAscentCache[a]},getFontLineHeight:function(t){return this.getCharAscent("T",t)},addSoftHyphen:function(){this.currentWord.string=this.currentWord.string+m},processFont:function(t){var e=[];return t.style.includes("italics")&&e.push("italic"),t.style.includes("smallcaps")&&e.push("small-caps"),t.style.includes("bold")&&e.push("bold"),{family:'"'.concat(t.family,'",').concat(t.type),size:parseFloat(t.size),styles:e.join(" ")}},flashSave:function(){var t=document.getElementById("save_button"),e=setInterval(function(){t.classList.toggle("saving")},75);setTimeout(function(){clearInterval(e),t.classList.remove("saving")},400)}}},S=k,x=Object(w["a"])(S,n,i,!1,null,null,null),O=x.exports;r["default"].config.devtools=!0,r["default"].config.productionTip=!1,new r["default"]({el:"#app",components:{Main:O},template:"<Main/>"})},4396:function(t,e,a){},"54bf":function(t,e,a){"use strict";var r=a("4396"),n=a.n(r);n.a}});
//# sourceMappingURL=case-editor.2384b320.js.map