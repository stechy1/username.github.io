(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Udum:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),a=t("pMnS"),r=t("DYzW"),o=t("2J/E"),i=function(){function n(){this.dataChanged=new e.m}return n.prototype.ngOnInit=function(){var n=this;this.query.subscribe(function(l){n._query=l})},n.prototype.nameChanged=function(n){this._query.name!==n&&(this._query.name=n,this.dataChanged.emit(this._query))},Object.defineProperty(n.prototype,"name",{get:function(){return this._query?this._query.name:""},enumerable:!0,configurable:!0}),n}(),s=e.qb({encapsulation:0,styles:[[""]],data:{}});function c(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["N\xe1zev dotazu"])),(n()(),e.sb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(n,l,t){var e=!0;return"valueChanged"===l&&(e=!1!==n.component.nameChanged(t)&&e),e},r.b,r.a)),e.rb(5,114688,null,0,o.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(n,l){n(l,5,0,l.component.name)},null)}var d=t("gIcY"),b=t("Ip0R"),p=function(){function n(){this.dataChanged=new e.m,this.updateContentOnly=new e.m}return n.prototype._recalculateTextAreaHeight=function(){var n=this;this.loading=!0,setTimeout(function(){var l=n._textArea.nativeElement;l.style.height="1px",l.style.height=25+l.scrollHeight+"px",l.disabled=!1,n.loading=!1},500)},n.prototype.ngOnInit=function(){var n=this;this.loading=!0,this.query.subscribe(function(l){n._query=l,n._content=n._query.content,n._recalculateTextAreaHeight()})},n.prototype.handleUpdateContent=function(){this._query.content!==this.content&&(this._recalculateTextAreaHeight(),this.updateContentOnly.emit(this.content))},n.prototype.handleSaveContent=function(){this._query.content!==this.content&&(this._query.content=this.content,this.dataChanged.emit(this._query))},Object.defineProperty(n.prototype,"content",{get:function(){return this._content},set:function(n){this._content=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"contentChanged",{get:function(){return!!this._query&&this._query.content!==this._content},enumerable:!0,configurable:!0}),n}(),h=e.qb({encapsulation:0,styles:[["#autorenew[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite rotate360;animation:2s linear infinite rotate360}"]],data:{}});function g(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"i",[["class","material-icons"],["id","autorenew"],["style","position: absolute; left: 50%; top: 30%;"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["autorenew"]))],null,null)}function f(n){return e.Mb(0,[e.Ib(402653184,1,{_textArea:0}),(n()(),e.sb(1,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,10,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Editor SPARQL dotazu"])),(n()(),e.sb(5,0,[[1,0],["query_content",1]],null,5,"textarea",[["cols","30"],["disabled",""],["id","query-content"],["name","query-content"],["rows","30"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,a=n.component;return"input"===l&&(u=!1!==e.Cb(n,6)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Cb(n,6).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Cb(n,6)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Cb(n,6)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(a.content=t)&&u),u},null,null)),e.rb(6,16384,null,0,d.d,[e.E,e.k,[2,d.a]],null,null),e.Hb(1024,null,d.m,function(n){return[n]},[d.d]),e.rb(8,671744,null,0,d.q,[[8,null],[8,null],[8,null],[6,d.m]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,d.n,null,[d.q]),e.rb(10,16384,null,0,d.o,[[4,d.n]],null,null),(n()(),e.hb(16777216,null,null,1,null,g)),e.rb(12,16384,null,0,b.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(13,0,null,null,6,"div",[["class","card-action"]],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(15,0,null,null,4,"div",[["class","col s12"]],null,null,null,null,null)),(n()(),e.sb(16,0,null,null,1,"button",[["class","btn btn-tiny blue left"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleSaveContent()&&e),e},null,null)),(n()(),e.Kb(-1,null,["Ulo\u017eit"])),(n()(),e.sb(18,0,null,null,1,"button",[["class","btn btn-tiny right"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleUpdateContent()&&e),e},null,null)),(n()(),e.Kb(-1,null,["Aktualizovat"]))],function(n,l){var t=l.component;n(l,8,0,"query-content","",t.content),n(l,12,0,t.loading)},function(n,l){var t=l.component;n(l,5,0,e.Cb(l,10).ngClassUntouched,e.Cb(l,10).ngClassTouched,e.Cb(l,10).ngClassPristine,e.Cb(l,10).ngClassDirty,e.Cb(l,10).ngClassValid,e.Cb(l,10).ngClassInvalid,e.Cb(l,10).ngClassPending),n(l,18,0,!t.contentChanged)})}var m=t("yhfL"),v=t("sQle"),y=function(){function n(n,l,t,u){this._endpointCommunicator=n,this._qservice=l,this._toaster=t,this._router=u,this.doQuery=new e.m,this._responceFormats=Object.keys(m.b)}return n.prototype.ngOnInit=function(){var n=this;this.ignoreStatistics=!1,this.query.subscribe(function(l){n._query=l})},n.prototype.handleDoQuery=function(){this.doQuery.emit(this.ignoreStatistics)},n.prototype.handleDuplicate=function(){var n=this;this._qservice.duplicate(this._query).then(function(l){n._toaster.info("Dotaz byl \xfasp\u011b\u0161n\u011b zduplikov\xe1n"),n._router.navigate(["browse-query"]).then(function(){setTimeout(function(){n._router.navigate(["edit",l])},500)})})},Object.defineProperty(n.prototype,"working",{get:function(){return this._endpointCommunicator.working},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"responceFormat",{get:function(){return this._endpointCommunicator.responceFormat},set:function(n){this._endpointCommunicator.responceFormat=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"responceFormats",{get:function(){return this._responceFormats},enumerable:!0,configurable:!0}),n}(),C=t("SZbH"),_=t("ZYCi"),q=e.qb({encapsulation:0,styles:[["@-webkit-keyframes rotate360{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate360{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotating{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.rotating[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite rotating;animation:2s linear infinite rotating}"]],data:{}});function k(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.rb(1,147456,null,0,d.r,[e.k,e.E,[2,d.u]],{value:[0,"value"]},null),e.rb(2,147456,null,0,d.y,[e.k,e.E,[8,null]],{value:[0,"value"]},null),(n()(),e.Kb(3,null,["",""]))],function(n,l){n(l,1,0,e.ub(1,"",l.context.$implicit,"")),n(l,2,0,e.ub(1,"",l.context.$implicit,""))},function(n,l){n(l,3,0,l.context.$implicit)})}function w(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,34,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Akce"])),(n()(),e.sb(4,0,null,null,30,"div",[["class","card-action"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,7,"div",[["class","col s12 l4"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,4,"button",[["class","btn btn-tiny green"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleDoQuery()&&e),e},null,null)),e.Eb(131072,b.b,[e.h]),(n()(),e.Kb(-1,null,[" Vykonat "])),(n()(),e.sb(10,0,null,null,1,"i",[["class","material-icons right rotating"]],[[4,"display",null]],null,null,null,null)),(n()(),e.Kb(-1,null,["autorenew"])),(n()(),e.sb(12,0,null,null,1,"button",[["class","btn btn-tiny blue right"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleDuplicate()&&e),e},null,null)),(n()(),e.Kb(-1,null,["Duplikovat"])),(n()(),e.sb(14,0,null,null,10,"div",[["class","col s6 l4"],["style","display: flex;"]],null,null,null,null,null)),(n()(),e.sb(15,0,null,null,1,"label",[["for","selectResponceFormat"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Form\xe1t odpov\u011bdi"])),(n()(),e.sb(17,0,null,null,7,"select",[["id","selectResponceFormat"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var u=!0,a=n.component;return"change"===l&&(u=!1!==e.Cb(n,18).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e.Cb(n,18).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(a.responceFormat=t)&&u),u},null,null)),e.rb(18,16384,null,0,d.u,[e.E,e.k],null,null),e.Hb(1024,null,d.m,function(n){return[n]},[d.u]),e.rb(20,671744,null,0,d.q,[[8,null],[8,null],[8,null],[6,d.m]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,d.n,null,[d.q]),e.rb(22,16384,null,0,d.o,[[4,d.n]],null,null),(n()(),e.hb(16777216,null,null,1,null,k)),e.rb(24,278528,null,0,b.k,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(25,0,null,null,9,"div",[["class","col s6 l4"]],null,null,null,null,null)),(n()(),e.sb(26,0,null,null,8,"label",[["class","right"],["style","margin-left: 8px"]],null,null,null,null,null)),(n()(),e.sb(27,0,null,null,5,"input",[["class","filled-in"],["type","checkbox"],["value","alphabeticaly"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var u=!0,a=n.component;return"change"===l&&(u=!1!==e.Cb(n,28).onChange(t.target.checked)&&u),"blur"===l&&(u=!1!==e.Cb(n,28).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(a.ignoreStatistics=t)&&u),u},null,null)),e.rb(28,16384,null,0,d.b,[e.E,e.k],null,null),e.Hb(1024,null,d.m,function(n){return[n]},[d.b]),e.rb(30,671744,null,0,d.q,[[8,null],[8,null],[8,null],[6,d.m]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,d.n,null,[d.q]),e.rb(32,16384,null,0,d.o,[[4,d.n]],null,null),(n()(),e.sb(33,0,null,null,1,"span",[["class","group-by-select primary-text-color"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Nezapo\u010d\xedt\xe1vat do statistik"]))],function(n,l){var t=l.component;n(l,20,0,t.responceFormat),n(l,24,0,t.responceFormats),n(l,30,0,t.ignoreStatistics)},function(n,l){var t=l.component,u=null;n(l,7,0,t.working||0===(null==(u=e.Lb(l,7,0,e.Cb(l,8).transform(t.query)))?null:u.content.length)),n(l,10,0,t.working?"block":"none"),n(l,17,0,e.Cb(l,22).ngClassUntouched,e.Cb(l,22).ngClassTouched,e.Cb(l,22).ngClassPristine,e.Cb(l,22).ngClassDirty,e.Cb(l,22).ngClassValid,e.Cb(l,22).ngClassInvalid,e.Cb(l,22).ngClassPending),n(l,27,0,e.Cb(l,32).ngClassUntouched,e.Cb(l,32).ngClassTouched,e.Cb(l,32).ngClassPristine,e.Cb(l,32).ngClassDirty,e.Cb(l,32).ngClassValid,e.Cb(l,32).ngClassInvalid,e.Cb(l,32).ngClassPending)})}var P=t("4Zd5"),x=(t("/lDG"),function(){function n(n){this._toaster=n}return n.prototype.ngOnInit=function(){},n.prototype.ngAfterViewInit=function(){var n=this;setTimeout(function(){return n.windowHeight=window.innerHeight-200},500)},n.prototype.handleCopyResult=function(){Object(P.a)(this.result),this._toaster.success("Zpr\xe1va byla zkop\xedrov\xe1na")},n.prototype.handleCloseResponce=function(){this.result=void 0},n}()),O=e.qb({encapsulation:0,styles:[[".q-result[_ngcontent-%COMP%]{overflow:auto}"]],data:{}});function M(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"pre",[["class","q-result"]],[[4,"max-height","px"]],null,null,null,null)),(n()(),e.Kb(1,null,["      ","\n    "]))],null,function(n,l){var t=l.component;n(l,0,0,t.windowHeight),n(l,1,0,t.result.result)})}function S(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,17,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["V\xfdsledek dotazu"])),(n()(),e.hb(16777216,null,null,1,null,M)),e.rb(5,16384,null,0,b.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(6,0,null,null,11,"div",[["class","card-action"]],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,6,"div",[["class","col s8"]],null,null,null,null,null)),(n()(),e.sb(9,0,null,null,1,"button",[["class","btn btn-tiny default-primary-color"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleCopyResult()&&e),e},null,null)),(n()(),e.Kb(-1,null,["Zkop\xedrovat"])),(n()(),e.sb(11,0,null,null,3,"a",[["class","btn btn-tiny"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.rb(12,671744,null,0,_.n,[_.k,_.a,b.i],{routerLink:[0,"routerLink"]},null),e.Db(13,2),(n()(),e.Kb(-1,null,["Zobrazit samostatn\u011b"])),(n()(),e.sb(15,0,null,null,2,"div",[["class","col s4 right-align"]],null,null,null,null,null)),(n()(),e.sb(16,0,null,null,1,"button",[["class","btn btn-tiny red"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleCloseResponce()&&e),e},null,null)),(n()(),e.Kb(-1,null,["Zav\u0159\xedt odpov\u011b\u010f"]))],function(n,l){n(l,5,0,void 0!==l.component.result);var t=n(l,13,0,"/result-viewer","last");n(l,12,0,t)},function(n,l){var t=l.component;n(l,9,0,void 0===t.result),n(l,11,0,e.Cb(l,12).target,e.Cb(l,12).href),n(l,16,0,void 0===t.result)})}var K=t("b1TM"),I=function(){function n(n){this._settings=n,this.content="",this._params={}}return n.getIndicesOf=function(n,l){var t=n.length;if(0===t)return[];for(var e,u=0,a=[];(e=l.indexOf(n,u))>-1;)a.push(e),u=e+t;return a},n.prototype.ngOnInit=function(){var n=this;this.params.subscribe(function(l){n._params=l})},n.prototype.findVariables=function(l,t){if(0!==l.length){var e=n.getIndicesOf(this._settings.queryParameterFormat.prefix,l),u=this._settings.queryParameterFormat.suffixIsPrefix,a=[];if(u||(a=n.getIndicesOf(this._settings.queryParameterFormat.suffix,l)),(e.length+a.length)%2==0){for(var r=0,o=0;r<e.length;r+=u?2:1,o++){var i=u?e[r+1]:a[o];if(void 0!==i){var s=l.substring(e[r]+1,i);this._params[s]?t[s]&&(this._params[s]=t[s]):this._params[s]={defaultValue:"",usedValue:""}}else prompt(o+". parametr nebyl rozpozn\xe1n!")}return this.content=l,this._params}prompt("V\u0161echny parametry mus\xed m\xedt prefix "+this._settings.queryParameterFormat.prefix+" a suffix "+this._settings.queryParameterFormat.suffix+"!")}},n.prototype.isParameterToRemove=function(n){return void 0===this.variablesWithoutUnused[n]},n.prototype.handleDefaultValueChange=function(n,l){this._params[l].defaultValue=n},n.prototype.handleUsedValueChange=function(n,l){this._params[l].usedValue=n},Object.defineProperty(n.prototype,"keys",{get:function(){return Object.keys(this._params)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"variablesWithoutUnused",{get:function(){var n={};for(var l in this._params)-1!==this.content.indexOf(""+this._settings.queryParameterFormat.prefix+l+this._settings.queryParameterFormat.suffix)&&(n[l]=this._params[l]);return n},enumerable:!0,configurable:!0}),n}(),j=e.qb({encapsulation:0,styles:[[""]],data:{}});function A(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[],[[4,"text-decoration",null]],null,null,null,null)),(n()(),e.Kb(3,null,["",""])),(n()(),e.sb(4,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(n,l,t){var e=!0;return"valueChanged"===l&&(e=!1!==n.component.handleDefaultValueChange(t,n.context.$implicit)&&e),e},r.b,r.a)),e.rb(6,114688,null,0,o.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"}),(n()(),e.sb(7,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(n,l,t){var e=!0;return"valueChanged"===l&&(e=!1!==n.component.handleUsedValueChange(t,n.context.$implicit)&&e),e},r.b,r.a)),e.rb(9,114688,null,0,o.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(n,l){var t=l.component;n(l,6,0,t.params[l.context.$implicit].defaultValue),n(l,9,0,t.params[l.context.$implicit].usedValue)},function(n,l){n(l,2,0,l.component.isParameterToRemove(l.context.$implicit)?"line-through":"inherit"),n(l,3,0,l.context.$implicit)})}function F(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,12,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,11,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Parametry dotazu"])),(n()(),e.sb(4,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["N\xe1zev"])),(n()(),e.sb(7,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["V\xfdchoz\xed hodnota"])),(n()(),e.sb(9,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Aktu\xe1ln\xed hodnota"])),(n()(),e.hb(16777216,null,null,1,null,A)),e.rb(12,278528,null,0,b.k,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,12,0,l.component.keys)},null)}var z=function(){function n(){this.dataChanged=new e.m}return n.prototype.ngOnInit=function(){var n=this;this.query.subscribe(function(l){n._query=l})},n.prototype.endpointChanged=function(n){this._query.endpoint!==n&&(this._query.endpoint=n,this.dataChanged.emit(this._query))},Object.defineProperty(n.prototype,"endpoint",{get:function(){return this._query?this._query.endpoint:""},enumerable:!0,configurable:!0}),n}(),D=e.qb({encapsulation:0,styles:[[""]],data:{}});function Q(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["URL Endpoint"])),(n()(),e.sb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(n,l,t){var e=!0;return"valueChanged"===l&&(e=!1!==n.component.endpointChanged(t)&&e),e},r.b,r.a)),e.rb(5,114688,null,0,o.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(n,l){n(l,5,0,l.component.endpoint)},null)}var V=function(){function n(){this.dataChanged=new e.m}return n.prototype.ngOnInit=function(){var n=this;this.query.subscribe(function(l){n._query=l})},n.prototype.descriptionChanged=function(n){this._query.description!==n&&(this._query.description=n,this.dataChanged.emit(this._query))},Object.defineProperty(n.prototype,"description",{get:function(){return this._query?this._query.description:""},enumerable:!0,configurable:!0}),n}(),T=e.qb({encapsulation:0,styles:[[""]],data:{}});function R(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["Popis dotazu"])),(n()(),e.sb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(n,l,t){var e=!0;return"valueChanged"===l&&(e=!1!==n.component.descriptionChanged(t)&&e),e},r.b,r.a)),e.rb(5,114688,null,0,o.a,[],{useTextarea:[0,"useTextarea"],value:[1,"value"]},{valueChanged:"valueChanged"})],function(n,l){n(l,5,0,!0,l.component.description)},null)}var U=t("thvK"),E=t("Jfap"),H=t("R9bk"),$=t("K9Ia"),L=function(){function n(n,l,t,e,u,a,r){this._qservice=n,this._settings=l,this._navService=t,this._endpointCommunicator=e,this._toaster=u,this._route=a,this._router=r,this._querySubject=new $.a,this._paramsSubject=new $.a}return n.prototype.ngOnInit=function(){var n=this,l=this._route.snapshot.paramMap.get("id");this._qservice.byId(l).then(function(l){n._query=l,n._params=l.params,n._querySubject.next(l),n._paramsSubject.next(n._query.params)}).catch(function(){n._toaster.error("Nelze editovat p\u0159\xedmo z\xe1znam z Firebase"),n._router.navigate(["browse-query"])}),this.saveProgress="notSaved",this._navService.setNavbar(null),this._navService.setSidebar(null)},n.prototype.handleSaveQuery=function(){"notSaved"!==this.saveProgress&&(this._params=this.paramsComponent.variablesWithoutUnused,this._query.params=this._params,this._qservice.performSave(),this.saveProgress="notSaved",this._toaster.success("Dotaz byl ulo\u017een"))},n.prototype.handleQueryChange=function(){var n=this;this.saveProgress="notSaved",this._settings.useSaveDelay?setTimeout(function(){n.saveProgress="saved"},this._settings.saveDelay):this.handleManualQuerySave()},n.prototype.handleManualQuerySave=function(){this.saveProgress="notSaved",this._params=this.paramsComponent.variablesWithoutUnused,this._query.params=this._params,this._qservice.performSave(),this._toaster.success("Dotaz byl ulo\u017een")},n.prototype.handleUpdateParams=function(n){this._params=this.paramsComponent.findVariables(n,this._params)},n.prototype.handleDoQuery=function(n){var l=this;n||(this._query.runCount++,this._query.lastRun=Date.now(),this._qservice.performSave()),this._endpointCommunicator.makeRequest(this._query,n).then(function(n){l.queryResult=n})},Object.defineProperty(n.prototype,"query",{get:function(){return this._querySubject},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"params",{get:function(){return this._paramsSubject},enumerable:!0,configurable:!0}),n}(),Z=e.qb({encapsulation:0,styles:[["#saveBar[_ngcontent-%COMP%]{height:1px;background-color:orange;visibility:hidden}#save-query[_ngcontent-%COMP%]{position:fixed;right:15px;bottom:15px}"]],data:{animation:[{type:7,name:"saveProgress",definitions:[{type:0,name:"notSaved",styles:{type:6,styles:{width:"0%",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"saved",styles:{type:6,styles:{width:"100%",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"notSaved => saved",animation:{type:4,styles:null,timings:"1s"},options:null},{type:1,expr:"saved => notSaved",animation:{type:4,styles:null,timings:"0s"},options:null}],options:{}}]}});function N(n){return e.Mb(0,[e.Ib(402653184,1,{paramsComponent:0}),(n()(),e.sb(1,0,null,null,0,"div",[["id","saveBar"]],[[24,"@saveProgress",0]],[[null,"@saveProgress.done"]],function(n,l,t){var e=!0;return"@saveProgress.done"===l&&(e=!1!==n.component.handleSaveQuery()&&e),e},null,null)),(n()(),e.sb(2,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,8,"div",[["class","col s12 m7 offset-l1"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,1,"app-q-name",[],null,[[null,"dataChanged"]],function(n,l,t){var e=!0;return"dataChanged"===l&&(e=!1!==n.component.handleQueryChange()&&e),e},c,s)),e.rb(5,114688,null,0,i,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(n()(),e.sb(6,0,null,null,1,"app-q-content",[],null,[[null,"dataChanged"],[null,"updateContentOnly"]],function(n,l,t){var e=!0,u=n.component;return"dataChanged"===l&&(e=!1!==u.handleQueryChange()&&e),"updateContentOnly"===l&&(e=!1!==u.handleUpdateParams(t)&&e),e},f,h)),e.rb(7,114688,null,0,p,[],{query:[0,"query"]},{dataChanged:"dataChanged",updateContentOnly:"updateContentOnly"}),(n()(),e.sb(8,0,null,null,1,"app-q-actions",[],null,[[null,"doQuery"]],function(n,l,t){var e=!0;return"doQuery"===l&&(e=!1!==n.component.handleDoQuery(t)&&e),e},w,q)),e.rb(9,114688,null,0,y,[m.a,v.a,C.j,_.k],{query:[0,"query"]},{doQuery:"doQuery"}),(n()(),e.sb(10,0,null,null,1,"app-q-result",[],null,null,null,S,O)),e.rb(11,4308992,null,0,x,[C.j],{result:[0,"result"]},null),(n()(),e.sb(12,0,null,null,10,"div",[["class","col s12 m5 l3"]],null,null,null,null,null)),(n()(),e.sb(13,0,null,null,2,"app-q-params",[],null,null,null,F,j)),e.rb(14,114688,[[1,4]],0,I,[K.a],{params:[0,"params"],content:[1,"content"]},null),e.Eb(131072,b.b,[e.h]),(n()(),e.sb(16,0,null,null,1,"app-q-endpoint",[],null,[[null,"dataChanged"]],function(n,l,t){var e=!0;return"dataChanged"===l&&(e=!1!==n.component.handleQueryChange()&&e),e},Q,D)),e.rb(17,114688,null,0,z,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(n()(),e.sb(18,0,null,null,1,"app-q-description",[],null,[[null,"dataChanged"]],function(n,l,t){var e=!0;return"dataChanged"===l&&(e=!1!==n.component.handleQueryChange()&&e),e},R,T)),e.rb(19,114688,null,0,V,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(n()(),e.sb(20,0,null,null,2,"app-q-tags",[],null,[[null,"dataChanged"]],function(n,l,t){var e=!0;return"dataChanged"===l&&(e=!1!==n.component.handleQueryChange()&&e),e},U.b,U.a)),e.rb(21,114688,null,0,E.a,[],{tags:[0,"tags"]},{dataChanged:"dataChanged"}),e.Eb(131072,b.b,[e.h]),(n()(),e.sb(23,0,null,null,2,"a",[["class","btn-floating btn-large waves-effect waves-light red"],["id","save-query"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.handleManualQuerySave()&&e),e},null,null)),(n()(),e.sb(24,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["save"]))],function(n,l){var t,u,a=l.component;n(l,5,0,a.query),n(l,7,0,a.query),n(l,9,0,a.query),n(l,11,0,a.queryResult),n(l,14,0,a.params,null==(t=e.Lb(l,14,1,e.Cb(l,15).transform(a.query)))?null:t.content),n(l,17,0,a.query),n(l,19,0,a.query),n(l,21,0,null==(u=e.Lb(l,21,0,e.Cb(l,22).transform(a.query)))?null:u.tags)},function(n,l){n(l,1,0,l.component.saveProgress)})}function W(n){return e.Mb(0,[(n()(),e.sb(0,0,null,null,1,"app-edit-query",[],null,null,null,N,Z)),e.rb(1,114688,null,0,L,[v.a,K.a,H.a,m.a,C.j,_.a,_.k],null,null)],function(n,l){n(l,1,0)},null)}var J=e.ob("app-edit-query",L,W,{},{},[]),Y=t("ADsi"),B=function(){return function(){}}(),G=t("7q5b");t.d(l,"EditQueryModuleNgFactory",function(){return X});var X=e.pb(u,[],function(n){return e.zb([e.Ab(512,e.j,e.cb,[[8,[a.a,J]],[3,e.j],e.y]),e.Ab(4608,b.n,b.m,[e.v,[2,b.v]]),e.Ab(4608,d.w,d.w,[]),e.Ab(4608,d.e,d.e,[]),e.Ab(1073742336,b.c,b.c,[]),e.Ab(1073742336,d.v,d.v,[]),e.Ab(1073742336,d.k,d.k,[]),e.Ab(1073742336,d.s,d.s,[]),e.Ab(1073742336,Y.a,Y.a,[]),e.Ab(1073742336,_.o,_.o,[[2,_.u],[2,_.k]]),e.Ab(1073742336,B,B,[]),e.Ab(1073742336,G.a,G.a,[]),e.Ab(1073742336,u,u,[]),e.Ab(1024,_.i,function(){return[[{path:":id",component:L}]]},[])])})}}]);