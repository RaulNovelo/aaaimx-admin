(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certificates"],{1962:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return l}));var s=a("780a");function i(t){return Object(s["a"])({url:"/events/",method:"GET",params:t})}function n(t){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"GET"})}function o(t){return Object(s["a"])({url:"/events/",method:"POST",data:t})}function r(t,e){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"PUT",data:e})}function l(t){return Object(s["a"])({url:"/events/".concat(t,"/"),method:"DELETE"})}},"1e1d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e)+" ")])})),0)])]),a("EventModal",{attrs:{"is-active":t.isModalActive},on:{cancel:t.cancel}}),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-light",on:{click:function(e){t.isModalActive=!0}}},[a("b-icon",{attrs:{icon:"calendar","custom-size":"default"}}),a("span",[t._v("Create event")])],1)])])])],1)])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"",width:700,scroll:"keep"},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("New Event")])]),a("section",{staticClass:"modal-card-body"},[a("EventForm",{ref:"form"})],1),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.confirm(e)}}},[t._v(" Create event")]),a("button",{staticClass:"button is-danger",on:{click:t.cancel}},[t._v("Cancel")])],1)])])},o=[],r=(a("96cf"),a("1da1")),l=a("6882"),c={name:"EventModal",components:{EventForm:l["a"]},props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isLoading:!1,isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$refs.form.submit();case 3:t.isLoading=!1,t.isModalActive=!1,t.$emit("confirm");case 6:case"end":return e.stop()}}),e)})))()}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},u=c,d=(a("f572"),a("2877")),f=Object(d["a"])(u,n,o,!1,null,null,null),m=f.exports,p={name:"TitleBar",components:{EventModal:m},data:function(){return{isModalActive:!1}},props:{titleStack:{type:Array,default:function(){return[]}}},methods:{cancel:function(){this.isModalActive=!1}}},v=p,b=Object(d["a"])(v,s,i,!1,null,null,null);e["a"]=b.exports},"2b9d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},i=[],n={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);e["a"]=l.exports},"41f3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Certificates "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table. ")],1)]),a("card-component",{staticClass:"has-table has-thead-hidden"},[a("Table")],1)],1)],1)},i=[],n=a("2b9d"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Certificates",icon:"certificate","has-button-slot":!0}},[a("refresh-button",{attrs:{slot:"button",icon:"pen-plus",label:"New certificate"},on:{"button-click":t.actionSample},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-link",class:{"is-active":"RECOGNITION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="RECOGNITION"}}},[t._v(" RECOGNITION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"APPRECIATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="APPRECIATION"}}},[t._v(" APPRECIATION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"PARTICIPATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="PARTICIPATION"}}},[t._v(" PARTICIPATION ")])]),a("form",{attrs:{slot:"right"},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.search,expression:"listQuery.search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.listQuery.search},on:{input:function(e){e.target.composing||t.$set(t.listQuery,"search",e.target.value)}}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])])]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:!1,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","opened-detailed":t.defaultOpenedDetails,detailed:"","detail-key":"uuid","show-detail-icon":!0},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse},scopedSlots:t._u([{key:"detail",fn:function(e){return[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",[a("img",{attrs:{width:"200px",src:e.row.file}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.row.to))]),t._v(" "),a("small",[t._v(t._s(e.row.uuid))]),a("copy-to-clipboard",{attrs:{text:e.row.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),t._v(" "+t._s(e.row.description)+" "),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(e.row.type))])],1)])])])]}}])},[a("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.to)+" ")]}}])}),a("b-table-column",{attrs:{label:"Type",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.type)+" ")]}}])}),a("b-table-column",{attrs:{label:"Event",field:"event",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.event)+" ")]}}])}),a("b-table-column",{attrs:{label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleString()))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons is-right"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"certificate.edit",params:{id:e.row.uuid}}}},[a("b-icon",{attrs:{icon:"pencil",size:"is-small"}})],1),a("button",{staticClass:"button is-small",class:{"is-success":e.row.published},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"web",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[t._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])]],2)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)],1)],1)],1)},r=[],l=(a("b0c0"),a("96cf"),a("1da1")),c=a("a6c5"),u=a("fa9b"),d={name:"CertificatesTable",components:{ModalBox:u["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,defaultOpenedDetails:[],list:[],total:0,listQuery:{type:null,page:1,limit:10,offset:0},trashObject:null,events:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){this.getList()},watch:{listQuery:{handler:function(t){this.getList()},deep:!0}},methods:{handleClick:function(t){console.log(t),this.listQuery.type=t},actionSample:function(){this.$router.push("/certificates/new")},onCollapse:function(t){console.log(t),this.defaultOpenedDetails=[t.uuid]},getList:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(c["c"])(this.listQuery).then((function(e){t.list=e.results,t.total=e.count,t.isLoading=!1}))},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isModalActive=!1,e.prev=1,e.next=4,Object(c["f"])(t.trashObject.uuid);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:return e.prev=9,t.getList(),e.finish(9);case 12:t.$buefy.snackbar.open({message:"Confirmed",queue:!1});case 13:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()},trashCancel:function(){this.isModalActive=!1}}},f=d,m=a("2877"),p=Object(m["a"])(f,o,r,!1,null,null,null),v=p.exports,b=a("1e1d"),h=a("503b"),y={name:"Certificates",components:{HeroBar:h["a"],TitleBar:b["a"],Table:v,Notification:n["a"]},computed:{titleStack:function(){return["Admin","Certificates"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},_=y,g=Object(m["a"])(_,s,i,!1,null,null,null);e["default"]=g.exports},"503b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title is-3"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},i=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);e["a"]=l.exports},"5f5f":function(t,e,a){},6882:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"Title",message:"Event name"}},[a("b-input",{attrs:{readonly:t.event,placeholder:"e.g. SINABIA 2019",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-field",{attrs:{horizontal:"",label:"Place",message:"Event location"}},[a("b-select",{attrs:{placeholder:"Select location",expanded:""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}},[a("option",{attrs:{value:"Online"}},[t._v("Online")]),a("option",{attrs:{value:"ITM"}},[t._v("ITM")]),a("option",{attrs:{value:"G4"}},[t._v("G4")]),a("option",{attrs:{value:"Norte"}},[t._v("Norte")]),a("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Type",message:"Event type"}},[a("b-select",{attrs:{placeholder:"Select a type",expanded:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),a("option",{attrs:{value:"Course"}},[t._v("Course")]),a("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),a("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Division",message:"Division event"}},[a("b-select",{attrs:{placeholder:"Select division",expanded:""},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}},t._l(t.$store.state.divisions,(function(t){return a("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1),t.form.isPublic?t._e():a("b-field",{attrs:{label:"Corum",message:"Number of particpants",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"1",max:"100",type:"number"},model:{value:t.form.corum,callback:function(e){t.$set(t.form,"corum",e)},expression:"form.corum"}})],1),a("b-field",{attrs:{horizontal:""}},[a("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"},model:{value:t.form.isPublic,callback:function(e){t.$set(t.form,"isPublic",e)},expression:"form.isPublic"}},[t._v(" Open to the public ")])],1),a("b-field",{attrs:{horizontal:"",label:"Date start",message:"Event start"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1),a("b-field",{attrs:{horizontal:"",label:"Date end",message:"Event end"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}})],1),a("b-field",{attrs:{label:"Hours",message:"Total hours (CC)",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"1",max:"100",type:"number"},model:{value:t.form.hours,callback:function(e){t.$set(t.form,"hours",e)},expression:"form.hours"}})],1),a("b-field",{attrs:{label:"Description"}},[a("b-input",{attrs:{rows:10,type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t.event?a("b-field",[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Save changes")])],1):t._e()],1)},i=[],n=(a("96cf"),a("1da1")),o=a("1962"),r={title:"",date_start:null,date_end:null,description:"",type:"",place:"",flyer:"",division:null},l={name:"EventForm",props:["event"],data:function(){return{form:{},isLoading:!1,hourFormat:void 0,locale:void 0,date_start:null,date_end:null}},created:function(){this.event&&(this.date_start=new Date(this.event.date_start),this.date_end=new Date(this.event.date_end)),this.form=this.event||r},methods:{submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading=!0,e.prev=1,t.form.date_start=t.date_start,t.form.date_end=t.date_end,!t.event){e.next=10;break}return e.next=7,Object(o["e"])(t.event.id,t.form);case 7:t.$buefy.snackbar.open({message:"Event updated",queue:!1}),e.next=16;break;case 10:return e.next=12,Object(o["a"])(t.form);case 12:a=e.sent,t.$buefy.snackbar.open({message:"Event created",queue:!1}),t.form=r,t.$router.push("/events/"+a.id);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](1),console.log(e.t0),t.$buefy.toast.open({message:"Something went wrong :(... Try again!",type:"is-danger",queue:!1});case 22:return e.prev=22,t.isLoading=!1,e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[1,18,22,25]])})))()}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null);e["a"]=d.exports},a6c5:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"g",(function(){return l})),a.d(e,"h",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return d}));var s=a("780a");function i(){return Object(s["a"])({url:"/storage/?folder=certificates",method:"GET"})}function n(t){return Object(s["a"])({url:"/certificates/",method:"GET",params:t})}function o(t){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"GET"})}function r(t){return Object(s["a"])({url:"/certificates/",method:"POST",data:t})}function l(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"PUT",data:e})}function c(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/upload/"),method:"PATCH",headers:{"Content-Type":"multipart/form-data"},data:e})}function u(t,e){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"PATCH",data:{published:e}})}function d(t){return Object(s["a"])({url:"/certificates/".concat(t,"/"),method:"DELETE"})}},f572:function(t,e,a){"use strict";var s=a("5f5f"),i=a.n(s);i.a},fa9b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},i=[],n={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=certificates-legacy.958888a1.js.map