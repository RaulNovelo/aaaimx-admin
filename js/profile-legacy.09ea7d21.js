(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"057f":function(t,e,a){var s=a("fc6a"),i=a("241c").f,r={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==r.call(t)?o(t):i(s(t))}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var s=a("428f"),i=a("5135"),r=a("e538"),n=a("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});i(e,t)||n(e,t,{value:r.f(t)})}},"808f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:t.newUserAvatar,alt:t.userName}})])},i=[],r=(a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(r["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(n["b"])(["userAvatar","userName"]))},c=o,l=a("2877"),u=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=u.exports},8644:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{model:{value:t.isImageModalActive,callback:function(e){t.isImageModalActive=e},expression:"isImageModalActive"}},[a("figure",{staticClass:"is-4by3"},[a("img",{attrs:{title:t.cert.uuid,src:t.cert.file}})])]),"card"===t.styleMode?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"is-4by3",on:{click:function(e){t.isImageModalActive=!0}}},[a("img",{attrs:{src:t.cert.file,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(t.cert.to)+" ")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])]),"card"===t.styleMode?a("footer",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-footer-item",attrs:{to:{name:"certificate.edit",params:{id:t.cert.uuid}}}},[a("b-icon",{attrs:{size:"is-small",icon:"pencil"}})],1),a("a",{staticClass:"card-footer-item",attrs:{href:t.cert.QR,target:"_blank"}},[a("b-icon",{attrs:{size:"is-small",icon:"qrcode"}})],1),a("a",{staticClass:"card-footer-item"},[a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1)],1)],1):t._e()]):a("div",{staticClass:"card"},[a("div",{staticClass:"card-image is-hidden-desktop"},[a("figure",{staticClass:"is-4by3",on:{click:function(e){t.isImageModalActive=!0}}},[a("img",{attrs:{src:t.cert.file,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left is-hidden-mobile"},[a("figure",{on:{click:function(e){t.isImageModalActive=!0}}},[a("img",{attrs:{width:"200px",src:t.cert.file}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",{on:{click:function(e){t.isImageModalActive=!0}}},[t._v(t._s(t.cert.to))]),t._v(" "),a("small",[t._v(t._s(t.cert.uuid))]),a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),t._v(" "+t._s(t.cert.description)+" "),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])])])])])],1)},i=[],r={props:{cert:{type:Object},styleMode:{type:String,default:"card"}},data:function(){return{isImageModalActive:!1}}},n=r,o=(a("9b9d"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"7c1ae25c",null);e["a"]=c.exports},"9b9d":function(t,e,a){"use strict";var s=a("b153"),i=a.n(s);i.a},a4d3:function(t,e,a){"use strict";var s=a("23e7"),i=a("da84"),r=a("d066"),n=a("c430"),o=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),m=a("861d"),b=a("825a"),p=a("7b0b"),v=a("fc6a"),h=a("c04e"),g=a("5c6c"),y=a("7c73"),_=a("df75"),w=a("241c"),C=a("057f"),O=a("7418"),j=a("06cf"),k=a("9bf2"),E=a("d1e7"),P=a("9112"),S=a("6eeb"),A=a("5692"),x=a("f772"),N=a("d012"),M=a("90e3"),T=a("b622"),$=a("e538"),L=a("746f"),Q=a("d44e"),D=a("69f3"),z=a("b727").forEach,q=x("hidden"),R="Symbol",U="prototype",I=T("toPrimitive"),B=D.set,F=D.getterFor(R),H=Object[U],J=i.Symbol,Y=r("JSON","stringify"),G=j.f,W=k.f,K=C.f,X=E.f,V=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),at=A("wks"),st=i.QObject,it=!st||!st[U]||!st[U].findChild,rt=o&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=G(H,e);s&&delete H[e],W(t,e,a),s&&t!==H&&W(H,e,s)}:W,nt=function(t,e){var a=V[t]=y(J[U]);return B(a,{type:R,tag:t,description:e}),o||(a.description=e),a},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},ct=function(t,e,a){t===H&&ct(Z,e,a),b(t);var s=h(e,!0);return b(a),d(V,s)?(a.enumerable?(d(t,q)&&t[q][s]&&(t[q][s]=!1),a=y(a,{enumerable:g(0,!1)})):(d(t,q)||W(t,q,g(1,{})),t[q][s]=!0),rt(t,s,a)):W(t,s,a)},lt=function(t,e){b(t);var a=v(e),s=_(a).concat(bt(a));return z(s,(function(e){o&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=h(t,!0),a=X.call(this,e);return!(this===H&&d(V,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(V,e)||d(this,q)&&this[q][e])||a)},ft=function(t,e){var a=v(t),s=h(e,!0);if(a!==H||!d(V,s)||d(Z,s)){var i=G(a,s);return!i||!d(V,s)||d(a,q)&&a[q][s]||(i.enumerable=!0),i}},mt=function(t){var e=K(v(t)),a=[];return z(e,(function(t){d(V,t)||d(N,t)||a.push(t)})),a},bt=function(t){var e=t===H,a=K(e?Z:v(t)),s=[];return z(a,(function(t){!d(V,t)||e&&!d(H,t)||s.push(V[t])})),s};if(c||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),a=function(t){this===H&&a.call(Z,t),d(this,q)&&d(this[q],e)&&(this[q][e]=!1),rt(this,e,g(1,t))};return o&&it&&rt(H,e,{configurable:!0,set:a}),nt(e,t)},S(J[U],"toString",(function(){return F(this).tag})),S(J,"withoutSetter",(function(t){return nt(M(t),t)})),E.f=dt,k.f=ct,j.f=ft,w.f=C.f=mt,O.f=bt,$.f=function(t){return nt(T(t),t)},o&&(W(J[U],"description",{configurable:!0,get:function(){return F(this).description}}),n||S(H,"propertyIsEnumerable",dt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:J}),z(_(at),(function(t){L(t)})),s({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=J(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:bt}),s({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(p(t))}}),Y){var pt=!c||u((function(){var t=J();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));s({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,a){var s,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(s=e,(m(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!ot(e))return e}),i[1]=e,Y.apply(null,i)}})}J[U][I]||P(J[U],I,J[U].valueOf),Q(J,R),N[q]=!0},a6c5:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return l})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return d}));var s=a("780a");function i(){return Object(s["a"])({url:"/storage/?folder=certificates",method:"GET"})}function r(t){return Object(s["a"])({url:"/certificates/",method:"GET",params:t})}function n(t){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"GET"})}function o(t){return Object(s["a"])({url:"/certificates/",method:"POST",data:t})}function c(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"PUT",data:e})}function l(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/upload/"),method:"PATCH",headers:{"Content-Type":"multipart/form-data"},data:e})}function u(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"PATCH",data:{published:e}})}function d(t){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"DELETE"})}},aa38:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),a("b-field",{attrs:{label:"Aditional information"}},[a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),a("b-field",{attrs:{label:"Availability (Participants)"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},i=[],r={props:["event"]},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},b153:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar-main"),a("section",{staticClass:"section is-main-section"},[a("EventsTable")],1)],1)},i=[],r=a("1e1d"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Events",icon:"calendar-multiple","has-button-slot":!0}},[a("refresh-button",{attrs:{slot:"button"},on:{click:t.actionSample},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" All time ")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("This month")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("This year")])]),a("form",{attrs:{slot:"right"},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.search,expression:"listQuery.search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.listQuery.search},on:{input:function(e){e.target.composing||t.$set(t.listQuery,"search",e.target.value)}}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])])]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.events,striped:!0,hoverable:!0,"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","opened-detailed":t.openedEvents,detailed:"","detail-key":"id","show-detail-icon":!0,"default-sort":"date_start"},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse},scopedSlots:t._u([{key:"detail",fn:function(e){return[a("EventPreview",{attrs:{event:e.row}}),a("hr"),a("CertList",{ref:"certlist",attrs:{event:t.current_event}})]}}])},[a("b-table-column",{attrs:{label:"Event",field:"title",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title.slice(0,50))+"... ")]}}])}),a("b-table-column",{attrs:{label:"Type",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.type)+" ")]}}])}),a("b-table-column",{attrs:{label:"Place",field:"place",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.place)+" ")]}}])}),a("b-table-column",{attrs:{label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_start}},[t._v(t._s(new Date(e.row.date_start).toLocaleString()))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons is-right"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"event.edit",params:{id:e.row.id}}}},[a("b-icon",{attrs:{icon:"calendar-edit",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[t._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])]],2)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)],1)],1)],1)},o=[],c=(a("b0c0"),a("96cf"),a("1da1")),l=a("1962"),u=a("fa9b"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns is-multiline is-desktop"},t._l(t.certificates,(function(t){return a("div",{key:t.uuid,staticClass:"column is-half-tablet is-one-quarter-desktop"},[a("CertPreview",{attrs:{cert:t,"hide-description":""}})],1)})),0),a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)},f=[],m=a("5530"),b=a("8644"),p=a("a6c5"),v={props:["event"],components:{CertPreview:b["a"]},data:function(){return{certificates:[],total:0,isLoading:!1,listQuery:{page:1,limit:10,offset:0}}},mounted:function(){this.getData(this.event)},watch:{listQuery:{handler:function(t){this.getData(this.event)},deep:!0}},methods:{getData:function(t){var e=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(p["c"])(Object(m["a"])({event:t},this.listQuery)).then((function(t){e.certificates=t.results,e.total=t.count}))}}},h=v,g=a("2877"),y=Object(g["a"])(h,d,f,!1,null,null,null),_=y.exports,w=a("aa38"),C={name:"EventsTable",components:{ModalBox:u["a"],CertList:_,EventPreview:w["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,openedEvents:[],certificates:[],total:0,listQuery:{limit:10,offset:0},current_event:"",trashObject:null,events:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},created:function(){this.getEvents()},watch:{listQuery:{handler:function(t){this.getEvents()},deep:!0}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Everything OK!",type:"is-info",queue:!1})},onCollapse:function(t){this.openedEvents=[t.id],this.current_event=t.title},getEvents:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(l["c"])(this.listQuery).then((function(e){t.isLoading=!1,t.total=e.count,t.events=e.results})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger"})}))},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["d"])(t.trashObject.id);case 2:t.$buefy.snackbar.open({message:"Event deleted",queue:!1}),t.isModalActive=!1,t.getEvents();case 5:case"end":return e.stop()}}),e)})))()},trashCancel:function(){this.isModalActive=!1}}},O=C,j=Object(g["a"])(O,n,o,!1,null,null,null),k=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar is-main-hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item is-hero-avatar-item"},[a("div",{staticClass:"image is-user-avatar"},[a("img",{attrs:{src:t.userAvatar}})])]),a("div",{staticClass:"level-item is-hero-content-item"},[a("div",[a("h1",{staticClass:"title is-spaced"},[t._v("Howdy, "),a("b",[t._v(t._s(t.userName))])]),a("h3",{staticClass:"subtitle"},[t._v("Last login "),a("b",[t._v(t._s(t.lastLoginTimeString))]),t._v(" from "),a("b",[t._v(t._s(t.lastLoginIpString))])]),t._m(0)])])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("router-link",{staticClass:"button is-light",attrs:{to:"/profile",title:"Profile"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("Profile")])],1)],1)])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("You have "),a("b",[t._v("6 tasks")]),t._v(" due today and "),a("b",[t._v("84 inquiries")])])}],S=a("2f62"),A={name:"HeroBarMain",data:function(){return{lastLoginTimeString:"12 mins ago",lastLoginIpString:"192.168.1.1"}},computed:Object(m["a"])({},Object(S["b"])(["userName","userAvatar"]))},x=A,N=Object(g["a"])(x,E,P,!1,null,null,null),M=N.exports,T={name:"home",components:{HeroBarMain:M,EventsTable:k,TitleBar:r["a"]},data:function(){return{}},computed:{titleStack:function(){return["Admin","Dashboard"]}},mounted:function(){this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{}},$=T,L=Object(g["a"])($,s,i,!1,null,null,null);e["default"]=L.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Profile "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("user-avatar",{staticClass:"has-max-width is-aligned-center"}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]})],1)],1)},i=[],r=a("5530"),n=a("2f62"),o=a("1e1d"),c=a("503b"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},u=[],d=(a("b0c0"),{name:"ProfileUpdateForm",data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:Object(r["a"])({},Object(n["b"])(["userName","userEmail"])),mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$buefy.snackbar.open({message:"Updated",queue:!1})}),500)}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}}),f=d,m=a("2877"),b=Object(m["a"])(f,l,u,!1,null,null,null),p=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},h=[],g={name:"PasswordUpdateForm",data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Updated",queue:!1},500)}))}}},y=g,_=Object(m["a"])(y,v,h,!1,null,null,null),w=_.exports,C=a("9e7c"),O=a("808f"),j={name:"Profile",components:{UserAvatar:O["a"],Tiles:C["a"],PasswordUpdateForm:w,ProfileUpdateForm:p,HeroBar:c["a"],TitleBar:o["a"]},computed:Object(r["a"])({titleStack:function(){return["Admin","Profile"]}},Object(n["b"])(["userName","userEmail"]))},k=j,E=Object(m["a"])(k,s,i,!1,null,null,null);e["default"]=E.exports},dbb4:function(t,e,a){var s=a("23e7"),i=a("83ab"),r=a("56ef"),n=a("fc6a"),o=a("06cf"),c=a("8418");s({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,a,s=n(t),i=o.f,l=r(s),u={},d=0;while(l.length>d)a=i(s,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var s=a("23e7"),i=a("d039"),r=a("fc6a"),n=a("06cf").f,o=a("83ab"),c=i((function(){n(1)})),l=!o||c;s({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return n(r(t),e)}})},e538:function(t,e,a){var s=a("b622");e.f=s},fa9b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},i=[],r={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=profile-legacy.09ea7d21.js.map