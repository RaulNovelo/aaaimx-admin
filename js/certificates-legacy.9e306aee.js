(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certificates"],{"41f3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Certificates "),a("router-link",{attrs:{slot:"right",to:"/certificates/new"},slot:"right"},[a("b-button",{attrs:{"icon-left":"pencil-plus",type:"is-success"}},[t._v(" New certificate ")])],1)],1),a("section",{staticClass:"section is-main-section"},[a("card-component",{staticClass:"has-table"},[a("Table")],1)],1)],1)},i=[],n=a("7185"),r=a("1e1d"),o=a("503b"),c={name:"Certificates",components:{HeroBar:o["a"],TitleBar:r["a"],Table:n["a"]},computed:{titleStack:function(){return["Admin","Certificates"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},l=c,u=a("2877"),d=Object(u["a"])(l,s,i,!1,null,null,null);e["default"]=d.exports},"5ac0":function(t,e,a){},7185:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-link",class:{"is-active":"RECOGNITION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="RECOGNITION"}}},[t._v(" RECOGNITION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"APPRECIATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="APPRECIATION"}}},[t._v(" APPRECIATION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"PARTICIPATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="PARTICIPATION"}}},[t._v(" PARTICIPATION ")])]),a("form",{attrs:{slot:"right"},slot:"right"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[a("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[a("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[a("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[a("small",[t._v(t._s(e.row.to))])])]]}}])}),a("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{label:"Event",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?a("small",[t._v(t._s(e.row.event.title.length>15?e.row.event.title.slice(0,30)+"...":e.row.event.title))]):a("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),a("b-table-column",{attrs:{label:"Date",sortable:"",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),a("b-table-column",{attrs:{field:"published",label:"Status",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[a("b-tooltip",{attrs:{type:"is-info",label:"View online"}},[a("b-icon",{attrs:{icon:"open-in-new",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.generateCert(e.row)}}},[a("b-tooltip",{attrs:{type:"is-link",label:"Generate image"}},[a("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.sendCertMessage(e.row)}}},[a("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[a("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-tooltip",{attrs:{type:"is-danger",label:"Delete"}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column is-one-third-desktop"},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:s?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Publish selected")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Mark as draft")])])],1)])],1)],1),a("div",{staticClass:"column"},[a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])])],1)],1)],1)},i=[],n=(a("d81d"),a("a9e3"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),r=a("a6c5"),o=a("b743"),c=a("fa9b"),l=a("8644"),u=a("fab6"),d=a.n(u),f={name:"CertificatesTable",components:{ModalBox:c["a"],Preview:l["a"]},props:{event:{type:Number,default:null}},mixins:[d.a],data:function(){return{listQuery:{type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc",action:""}},methods:{handleClick:function(t){console.log(t),this.listQuery.type=t},clearFilters:function(){this.listQuery={type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample:function(){this.$router.push("/certificates/new")},getData:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(r["c"])(this.listQuery).then((function(e){t.list=e.results,t.total=e.count,t.isLoading=!1}))},generateCert:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,a.next=4,Object(r["g"])(t.uuid,t);case 4:e.getData(),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](1),console.log(a.t0),e.$buefy.dialog.alert({title:"Something went wrong :(",message:"Please navigate to the certificate detail and cofirm the required information not be empty",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0});case 11:return a.prev=11,e.isLoading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,7,11,14]])})))()},onAction:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(t),a.t0=t,a.next="certs"===a.t0?4:7;break;case 4:e.isLoading=!0;try{s=e.checkedRows.map((function(t){return Object(r["g"])(t.uuid,t)})),Promise.all(s).then((function(t){e.getData()}))}catch(i){console.log(i)}finally{e.isLoading=!1}return a.abrupt("break",8);case 7:return a.abrupt("break",8);case 8:case"end":return a.stop()}}),a)})))()},sendCertMessage:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,a.next=4,Object(o["b"])(t);case 4:e.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1}),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](1),console.log(a.t0),e.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1});case 11:return a.prev=11,e.isLoading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,7,11,14]])})))()},trashConfirm:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isModalActive=!1,e.prev=1,e.next=4,Object(r["f"])(t.trashObject.uuid);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:return e.prev=9,t.getData(),e.finish(9);case 12:t.$buefy.snackbar.open({message:"Confirmed",queue:!1});case 13:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()}}},b=f,p=a("2877"),m=Object(p["a"])(b,s,i,!1,null,null,null);e["a"]=m.exports},"85b4":function(t,e,a){"use strict";var s=a("5ac0"),i=a.n(s);i.a},8644:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{model:{value:t.isImageModalActive,callback:function(e){t.isImageModalActive=e},expression:"isImageModalActive"}},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),"card"===t.styleMode?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("ImagePreview",{attrs:{size:.35,cert:t.cert},on:{click:function(e){t.isImageModalActive=!0}}})],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(t.cert.to)+" ")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])]),"card"===t.styleMode?a("footer",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-footer-item",attrs:{to:{name:"certificate.edit",params:{id:t.cert.uuid}}}},[a("b-icon",{attrs:{size:"is-small",icon:"pencil"}})],1),a("a",{staticClass:"card-footer-item",attrs:{href:t.cert.QR,target:"_blank"}},[a("b-icon",{attrs:{size:"is-small",icon:"qrcode"}})],1),a("a",{staticClass:"card-footer-item"},[a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1)],1)],1):t._e()]):a("div",{staticClass:"card"},[a("div",{staticClass:"card-image is-hidden-desktop"},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left is-hidden-mobile",on:{click:function(e){t.isImageModalActive=!0}}},[a("ImagePreview",{attrs:{width:"200px",size:.23,cert:t.cert}})],1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("strong",{on:{click:function(e){t.isImageModalActive=!0}}},[t._v(t._s(t.cert.to))]),t._v(" "),a("small",[t._v(t._s(t.cert.uuid))]),a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),a("div",{domProps:{textContent:t._s(t.cert.description)}}),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])])])])],1)},i=[],n=a("bfa4"),r={props:{cert:{type:Object},styleMode:{type:String,default:"card"}},components:{ImagePreview:n["a"]},data:function(){return{isImageModalActive:!1}}},o=r,c=(a("85b4"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,"1f409f33",null);e["a"]=l.exports},fa9b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},i=[],n={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},r=n,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},fab6:function(t,e,a){a("b0c0"),t.exports={data:function(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},mounted:function(){this.getData()},watch:{listQuery:{handler:function(){this.getData()},deep:!0}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},methods:{onSort:function(t,e){var a=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(a="-"+t),this.listQuery.ordering=a},onCollapse:function(t){this.defaultOpenedDetails=[t[this.key]]},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashCancel:function(){this.isModalActive=!1}}}}}]);
//# sourceMappingURL=certificates-legacy.9e306aee.js.map