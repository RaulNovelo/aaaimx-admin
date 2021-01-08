(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["event-form"],{"1e84":function(t,e,a){"use strict";var s=a("5db8"),i=a.n(s);i.a},"5ac0":function(t,e,a){},"5db8":function(t,e,a){},7185:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-link",class:{"is-active":"RECOGNITION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="RECOGNITION"}}},[t._v(" RECOGNITION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"APPRECIATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="APPRECIATION"}}},[t._v(" APPRECIATION ")]),a("button",{staticClass:"button is-link",class:{"is-active":"PARTICIPATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="PARTICIPATION"}}},[t._v(" PARTICIPATION ")])]),a("form",{attrs:{slot:"right"},slot:"right"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[a("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[a("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[a("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[a("small",[t._v(t._s(e.row.to))])])]]}}])}),a("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{label:"Event",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?a("small",[t._v(t._s(e.row.event.title.length>15?e.row.event.title.slice(0,30)+"...":e.row.event.title))]):a("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),a("b-table-column",{attrs:{label:"Date",sortable:"",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),a("b-table-column",{attrs:{field:"published",label:"Status",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[a("b-tooltip",{attrs:{type:"is-info",label:"View online"}},[a("b-icon",{attrs:{icon:"open-in-new",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.generateCert(e.row)}}},[a("b-tooltip",{attrs:{type:"is-link",label:"Generate image"}},[a("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.sendCertMessage(e.row)}}},[a("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[a("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-tooltip",{attrs:{type:"is-danger",label:"Delete"}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column is-one-third-desktop"},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:s?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Publish selected")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Mark as draft")])])],1)])],1)],1),a("div",{staticClass:"column"},[a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])])],1)],1)],1)},i=[],l=(a("ddb0"),a("a6c5")),o=a("b743"),n=a("fa9b"),r=a("8644"),c=a("fab6"),d=a.n(c),u={name:"CertificatesTable",components:{ModalBox:n["a"],Preview:r["a"]},props:{event:{type:Number,default:null}},mixins:[d.a],data(){return{listQuery:{type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc",action:""}},methods:{handleClick(t){console.log(t),this.listQuery.type=t},clearFilters(){this.listQuery={type:"",event:this.event,ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample(){this.$router.push("/certificates/new")},getData(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(l["c"])(this.listQuery).then(t=>{this.list=t.results,this.total=t.count,this.isLoading=!1})},async generateCert(t){this.isLoading=!0;try{await Object(l["g"])(t.uuid,t),this.getData()}catch(e){console.log(e),this.$buefy.dialog.alert({title:"Something went wrong :(",message:"Please navigate to the certificate detail and cofirm the required information not be empty",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}finally{this.isLoading=!1}},async onAction(t){switch(console.log(t),t){case"certs":this.isLoading=!0;try{const t=this.checkedRows.map(t=>Object(l["g"])(t.uuid,t));Promise.all(t).then(t=>{this.getData()})}catch(e){console.log(e)}finally{this.isLoading=!1}break;default:break}},async sendCertMessage(t){this.isLoading=!0;try{await Object(o["b"])(t),this.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1})}catch(e){console.log(e),this.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1})}finally{this.isLoading=!1}},async trashConfirm(){this.isModalActive=!1;try{await Object(l["f"])(this.trashObject.uuid)}catch(t){console.log(t)}finally{this.getData()}this.$buefy.snackbar.open({message:"Confirmed",queue:!1})}}},b=u,p=a("2877"),m=Object(p["a"])(b,s,i,!1,null,null,null);e["a"]=m.exports},"71c3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" "+t._s(t.heroTitle)+" ")]),a("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"calendar-edit"}},[t.event.id?a("EventForm",{attrs:{event:t.event}}):t._e()],1),t.event.title?a("card-component",{staticClass:"tile is-child",attrs:{title:"Event details",icon:"calendar"}},[a("EventPreview",{attrs:{event:t.event}})],1):t._e()],1),t.event.id?a("ParticipantsTable",{attrs:{event:t.event}}):t._e(),t.event.id?a("CertTable",{attrs:{event:t.event.id}}):t._e()],1)],1)},i=[],l=a("1e1d"),o=a("503b"),n=a("9e7c"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table",attrs:{title:t.total+" Participants",icon:"account-multiple","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"account-plus",label:"Create participant"},on:{"button-click":function(e){t.isEmailModalActive=!0}},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("form",{attrs:{slot:"left"},slot:"left"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("EmailModal",{attrs:{event:t.event,"is-active":t.isEmailModalActive,"checked-rows":t.checkedRows},on:{cancel:function(e){t.isEmailModalActive=!1}}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!1,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort}},[t._l(t.headers,(function(e){return a("b-table-column",{key:e.field,attrs:{label:e.label,field:e.field,sortable:e.sortable},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row[e.field])+" ")]}}],null,!0)})})),a("b-table-column",{attrs:{"custom-key":"actions",centered:"","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("button",{staticClass:"button is-small is-success",attrs:{type:"button"}},[a("b-tooltip",{attrs:{type:"is-success",label:"Validate hours"}},[a("b-icon",{attrs:{icon:"check-circle",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(e.row)}}},[a("b-tooltip",{attrs:{type:"is-danger",label:"Remove"}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])}),a("template",{slot:"detail"}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("template",{staticStyle:{padding:"1%"},slot:"footer"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third-desktop"},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:s?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media"},[a("b-icon",{staticClass:"has-text-success media-left",attrs:{icon:"check-circle"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Mark as responsible")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){t.isEmailModalActive=!0}}},[a("div",{staticClass:"media"},[a("b-icon",{staticClass:"has-text-info media-left",attrs:{icon:"email-send"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Send confirmation")])])],1)]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:t.export2Excel}},[a("div",{staticClass:"media"},[a("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"file-excel-box"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Export as Excel")])])],1)])],1)],1),a("Pagination",{staticClass:"column",attrs:{listQuery:t.listQuery,total:t.total}})],1)])],2)],1)],1)},c=[],d=(a("5319"),a("780a"));function u(t){return Object(d["a"])({url:"/participants/",method:"GET",params:t})}function b(t){return Object(d["a"])({url:`/participants/${t}/`,method:"DELETE"})}var p=a("fa9b"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"","full-screen":"","can-cancel":!1},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title title is-5"},[t._v("Send email to participants")])]),a("section",{staticClass:"modal-card-body email-card"},[a("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),a("b-field",{attrs:{label:"Recipients"}},[a("b-taginput",{attrs:{ellipsis:"",icon:"email-plus",placeholder:"Add email","aria-close-label":"Delete this email"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),a("b-field",{attrs:{label:"Message"}},[a("ckeditor",{attrs:{editor:t.editor,value:t.body,config:t.editorConfig}})],1)],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-primary",on:{click:t.confirm}},[t._v("Enviar")])])])])},h=[],f=a("fb3d"),v=a.n(f),g={name:"EmailModal",props:{event:{type:Object,default:null},isActive:{type:Boolean,default:!1},checkedRows:{type:Array,default:null}},data(){return{isModalActive:!1,isLoading:!1,tags:[],body:`<p>Nos da gusto que nos estén acompañando en el <strong>${this.event.title}</strong> que será impartido el día <strong>${new Date(this.event.date_start).toLocaleDateString()}</strong> al <strong>${new Date(this.event.date_start).toLocaleDateString()}</strong>, a las <strong>HORA INICIAL - HORA FINAL</strong> a través de nuestro canal de <strong>Discord</strong> donde estarás participando con nuestros talleristas, para poder acceder es necesario que tengas una cuenta en esta plataforma y acceder con el <strong>link</strong> que se encuentra a continuación:</p><p><br><a href="https://discord.gg/N7eZzK9">https://discord.gg/N7eZzK9</a>&nbsp;</p><p><br data-cke-filler="true"></p><p>Cuando entres es necesario que te identifiques con tu <strong>Nombre(s) y Apellido(s)</strong> y te dirijas al canal exclusivo para talleres (<strong>#room-1</strong> o <strong>#room-2</strong>), es necesario que entres <strong>10 minutos antes</strong> para confirmar tu asistencia, ¡muchas gracias por acompañarnos!.&nbsp;</p><p><br data-cke-filler="true"></p><p><strong>AAAIMX Student Chapter México.</strong></p>`,editor:v.a,editorConfig:{}}},methods:{cancel(){this.$emit("cancel")},confirm(){this.isLoading=!0,a.e("chunk-2d0a386f").then(a.t.bind(null,"030f",7)).Email.send({SecureToken:"9bae29bc-1cbc-41c5-a289-6156d9190086",To:this.tags,From:"contact@aaaimx.org",Subject:this.event.title,Body:this.body}).then(t=>{this.isLoading=!1,this.$buefy.toast.open({message:"Email sent to particpants!",type:"is-success",queue:!1}),this.$emit("confirm")})}},watch:{isActive(t){this.tags=this.checkedRows.map(t=>t.email),this.isModalActive=t},isModalActive(t){t||this.cancel()}}},y=g,C=(a("1e84"),a("2877")),k=Object(C["a"])(y,m,h,!1,null,null,null),_=k.exports,w=a("fab6"),A=a.n(w),O={name:"ParticipantsTable",components:{ModalBox:p["a"],EmailModal:_},mixins:[A.a],props:{event:{default:null}},data(){return{headers:[{label:"Email",field:"email",sortable:!0},{label:"Name",field:"fullname",sortable:!0},{label:"Adscription",field:"adscription",sortable:!0},{label:"Career",field:"career",sortable:!0},{label:"Enroll",field:"enrollment",sortable:!0}],listQuery:{event:this.event.id,ordering:null,page:1,limit:10,offset:0},key:"id",sortField:"name",isEmailModalActive:!1}},methods:{getData(){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),u(this.listQuery).then(t=>{this.list=t.results,this.total=t.count,this.isLoading=!1})},async trashConfirm(){this.isModalActive=!1;try{await b(this.trashObject.id)}catch(t){console.log(t)}finally{this.getData()}this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},handleClick(t){console.log(t),this.listQuery.type=t},export2Excel(){this.isLoading=!0,a.e("chunk-5b7bd8d5").then(a.bind(null,"4bf8")).then(t=>{const e=["Participantes","Email","Carrera"],a=["fullname","email","career"],s=this.checkedRows.map(t=>a.map(e=>t[e]));t.export_json_to_excel({header:e,data:s,filename:this.event.title.replace(" ","_"),autoWidth:!0,bookType:"xlsx"}),this.isLoading=!1})}}},M=O,E=Object(C["a"])(M,r,c,!1,null,null,null),x=E.exports,I=a("7185"),L=a("aa38"),S=a("6882"),D=a("1962"),T={name:"EventDetail",components:{Tiles:n["a"],HeroBar:o["a"],TitleBar:l["a"],EventPreview:L["a"],EventForm:S["a"],ParticipantsTable:x,CertTable:I["a"]},props:{id:{default:null}},data(){return{isLoading:!1,isModalActive:!1,event:this.getClearFormObject(),createdReadable:null}},computed:{titleStack(){let t;return t=this.id?this.event.title:"New event",["Admin","Events",t]},heroTitle(){return this.id?this.event.title:"Create event"},heroRouterLinkTo(){return this.id?{name:"event.new"}:"/"},heroRouterLinkLabel(){return this.id?"New event":"Dashboard"},formCardTitle(){return this.id?"Edit event":"New event"}},created(){this.getData()},methods:{getClearFormObject(){return{}},getData(){this.id&&(this.isLoading=!0,Object(D["b"])(this.id).then(t=>{this.event=t,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+t,type:"is-danger",queue:!1})}))}}},j=T,P=Object(C["a"])(j,s,i,!1,null,null,null);e["default"]=P.exports},"85b4":function(t,e,a){"use strict";var s=a("5ac0"),i=a.n(s);i.a},8644:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{model:{value:t.isImageModalActive,callback:function(e){t.isImageModalActive=e},expression:"isImageModalActive"}},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),"card"===t.styleMode?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("ImagePreview",{attrs:{size:.35,cert:t.cert},on:{click:function(e){t.isImageModalActive=!0}}})],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(t.cert.to)+" ")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])]),"card"===t.styleMode?a("footer",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-footer-item",attrs:{to:{name:"certificate.edit",params:{id:t.cert.uuid}}}},[a("b-icon",{attrs:{size:"is-small",icon:"pencil"}})],1),a("a",{staticClass:"card-footer-item",attrs:{href:t.cert.QR,target:"_blank"}},[a("b-icon",{attrs:{size:"is-small",icon:"qrcode"}})],1),a("a",{staticClass:"card-footer-item"},[a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1)],1)],1):t._e()]):a("div",{staticClass:"card"},[a("div",{staticClass:"card-image is-hidden-desktop"},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left is-hidden-mobile",on:{click:function(e){t.isImageModalActive=!0}}},[a("ImagePreview",{attrs:{width:"200px",size:.23,cert:t.cert}})],1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("strong",{on:{click:function(e){t.isImageModalActive=!0}}},[t._v(t._s(t.cert.to))]),t._v(" "),a("small",[t._v(t._s(t.cert.uuid))]),a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),a("div",{domProps:{textContent:t._s(t.cert.description)}}),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])])])])],1)},i=[],l=a("bfa4"),o={props:{cert:{type:Object},styleMode:{type:String,default:"card"}},components:{ImagePreview:l["a"]},data(){return{isImageModalActive:!1}}},n=o,r=(a("85b4"),a("2877")),c=Object(r["a"])(n,s,i,!1,null,"1f409f33",null);e["a"]=c.exports},aa38:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),a("b-field",{attrs:{label:"Aditional information"}},[a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),a("b-field",{attrs:{label:"Availability (Participants)"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},i=[],l={props:["event"]},o=l,n=a("2877"),r=Object(n["a"])(o,s,i,!1,null,null,null);e["a"]=r.exports},fa9b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},i=[],l={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isModalActive:!1}},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}},watch:{isActive(t){this.isModalActive=t},isModalActive(t){t||this.cancel()}}},o=l,n=a("2877"),r=Object(n["a"])(o,s,i,!1,null,null,null);e["a"]=r.exports},fab6:function(t,e){t.exports={data(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},mounted(){this.getData()},watch:{listQuery:{handler(){this.getData()},deep:!0}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},methods:{onSort(t,e){let a=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(a="-"+t),this.listQuery.ordering=a},onCollapse(t){this.defaultOpenedDetails=[t[this.key]]},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashCancel(){this.isModalActive=!1}}}}}]);
//# sourceMappingURL=event-form.181fa097.js.map