(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["events"],{aa38:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),s("b-field",{attrs:{label:"Aditional information"}},[s("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),s("b-field",{attrs:{label:"Availability (Participants)"}},[s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},i=[],l={props:["event"]},n=l,o=s("2877"),r=Object(o["a"])(n,a,i,!1,null,null,null);e["a"]=r.exports},aa9c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":t.titleStack}}),s("hero-bar",[t._v(" Events "),s("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),s("section",{staticClass:"section is-main-section"},[s("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[s("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Events",icon:"calendar-multiple","has-button-slot":!0}},[s("action-button",{attrs:{slot:"button"},on:{click:t.actionSample},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[s("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" All time ")]),s("button",{staticClass:"button",attrs:{disabled:""}},[t._v("This month")]),s("button",{staticClass:"button",attrs:{disabled:""}},[t._v("This year")])]),s("form",{attrs:{slot:"right"},slot:"right"},[s("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),s("div",[s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.events,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","opened-detailed":t.openedEvents,detailed:"","detail-key":"id","show-detail-icon":!0,"default-sort":"date_start"},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse},scopedSlots:t._u([{key:"detail",fn:function(e){return[s("EventPreview",{attrs:{event:e.row}}),s("hr"),s("CertList",{ref:"certlist",attrs:{event:t.current_event}})]}}])},[s("b-table-column",{attrs:{label:"Event",field:"title",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title.slice(0,50))+"... ")]}}])}),s("b-table-column",{attrs:{label:"Type",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.type)+" ")]}}])}),s("b-table-column",{attrs:{label:"Place",field:"place",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.place)+" ")]}}])}),s("b-table-column",{attrs:{label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_start}},[t._v(t._s(new Date(e.row.date_start).toLocaleString()))])]}}])}),s("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons is-right"},[s("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"event.edit",params:{id:e.row.id}}}},[s("b-icon",{attrs:{icon:"calendar-edit",size:"is-small"}})],1),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("EmptyData",{attrs:{isLoading:t.isLoading}})],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)],1)],1)],1)},n=[],o=s("1962"),r=s("fa9b"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"columns is-multiline is-desktop"},t._l(t.certificates,(function(t){return s("div",{key:t.uuid,staticClass:"column is-half-tablet is-one-quarter-desktop"},[s("CertPreview",{attrs:{cert:t,"hide-description":""}})],1)})),0),s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)},u=[],d=s("8644"),b=s("a6c5"),h={props:["event"],components:{CertPreview:d["a"]},data(){return{certificates:[],total:0,isLoading:!1,listQuery:{page:1,limit:10,offset:0}}},mounted(){this.getData(this.event)},watch:{listQuery:{handler(t){this.getData(this.event)},deep:!0}},methods:{getData(t){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(b["c"])({event:t,...this.listQuery}).then(t=>{this.certificates=t.results,this.total=t.count})}}},p=h,v=s("2877"),f=Object(v["a"])(p,c,u,!1,null,null,null),m=f.exports,y=s("aa38"),_=s("fab6"),g=s.n(_),k={name:"EventsTable",components:{ModalBox:r["a"],CertList:m,EventPreview:y["a"]},mixins:[g.a],data(){return{certificates:[],current_event:"",events:[]}},methods:{actionSample(){this.$buefy.toast.open({message:"Everything OK!",type:"is-info",queue:!1})},getEvents(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(o["c"])(this.listQuery).then(t=>{this.isLoading=!1,this.total=t.count,this.events=t.results}).catch(t=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+t.message,type:"is-danger"})})},trashModal(t){this.trashObject=t,this.isModalActive=!0},async trashConfirm(){await Object(o["e"])(this.trashObject.id),this.$buefy.snackbar.open({message:"Event deleted",queue:!1}),this.isModalActive=!1,this.getEvents()},trashCancel(){this.isModalActive=!1}}},w=k,C=Object(v["a"])(w,l,n,!1,null,null,null),E=C.exports,Q=s("1e1d"),S=s("503b"),j={name:"Events",components:{HeroBar:S["a"],TitleBar:Q["a"],ClientsTableSample:E},computed:{titleStack(){return["Admin","Events"]}},methods:{actionSample(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},L=j,A=Object(v["a"])(L,a,i,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=events.6094fce0.js.map