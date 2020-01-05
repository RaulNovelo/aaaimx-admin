(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-797d7c7e"],{"0792":function(e,t,o){"use strict";o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return i}));var n=o("61f7"),s={required:!0,message:"This field is required",trigger:"blur"},a={validator:function(e,t,o){Object(n["d"])(t)?o():o(new Error("Please enter the correct email"))}},i={validator:function(e,t,o){t.length?o():o(new Error("The password can not be less than 6 digits"))}}},"407f":function(e,t,o){"use strict";var n={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},s=n,a=o("532b"),i=void 0,r={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[s],created:function(){this.$store.commit("app/SET_STEPS",a["a"])},methods:{validateRequire:function(e,t,o){""===t?(i.$message({message:e.field+" is required",type:"error"}),o(new Error("Required field"))):o()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,o){t?validURL(t)?o():(i.$message({message:"Invalid URL format",type:"error"}),o(new Error("Invalid URL"))):o()}}};t["a"]=r},"532b":function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return s}));var n=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],s=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},"640e":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[o("WebSite",{attrs:{label:"Website"},model:{value:e.postForm.site,callback:function(t){e.$set(e.postForm,"site",t)},expression:"postForm.site"}}),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deletePartner}},[e._v("Delete "+e._s(e.namespace))])],1),e._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8,lg:7,xs:24}},[o("Upload",{model:{value:e.postForm.logoFile,callback:function(t){e.$set(e.postForm,"logoFile",t)},expression:"postForm.logoFile"}})],1),e._v(" "),o("el-col",{attrs:{span:16,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Name:",prop:"name"}},[o("el-input",{attrs:{placeholder:"Partner complete name",type:"text"},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Alias:",prop:"alias"}},[o("el-input",{attrs:{placeholder:"Partner short name",type:"text"},model:{value:e.postForm.alias,callback:function(t){e.$set(e.postForm,"alias",t)},expression:"postForm.alias"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Type:",prop:"type"}},[o("br"),e._v(" "),o("el-select",{attrs:{filterable:"","allow-create":"",placeholder:"Select type"},model:{value:e.postForm.type,callback:function(t){e.$set(e.postForm,"type",t)},expression:"postForm.type"}},e._l(e.types,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1)],1)],1)])],1)],1)],1)],1)},s=[],a=(o("28a5"),o("db72")),i=o("2f62"),r=o("11d4"),l=o("0792"),c={name:[l["c"]],alias:[l["c"]],type:[l["c"]]},p=o("407f"),u={name:"",alias:"",site:"",logoFile:"",type:""},d={name:"PartnerDetail",mixins:[p["a"]],components:{WebSite:function(){return o.e("chunk-76f6a8a8").then(o.bind(null,"46c3"))},Upload:function(){return o.e("chunk-c1c0cdbe").then(o.bind(null,"70a2"))},MDinput:function(){return o.e("chunk-6790f463").then(o.bind(null,"1aba"))},Sticky:function(){return o.e("chunk-2d210590").then(o.bind(null,"b804"))}},data:function(){return{loading:!1,rules:c,tempRoute:{},photo:"",id:null}},computed:Object(a["a"])({},Object(i["c"])("partners",["postForm","types"])),created:function(){this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("partners/SET_PARTNER",u),this.tempRoute=Object.assign({},this.$route)},methods:{getPhoto:function(e){try{var t=e.split("https://drive.google.com/file/d/");return t=t[1],t=t.split("/view?usp=drivesdk"),"https://drive.google.com/uc?id="+t[0]}catch(o){return""}},fetchData:function(e){var t=this,o=this.loadingFullPage();Object(r["b"])(e).then((function(e){o.close(),e.logoFile=t.getPhoto(e.logoFile),t.$store.commit("partners/SET_PARTNER",e)})).catch((function(e){o.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var o;e.loading=!0,delete e.postForm.logoFile,o=e.isEdit?Object(r["e"])(e.id,e.postForm):Object(r["a"])(e.postForm),o.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.alias,"</b> was sucessfully saved")),e.loading=!1,e.$router.push("/partners/"+e.id)})).catch((function(t){e.loading=!1,e.handleError()}))}))},deletePartner:function(){this.handleDelete(),this.postForm.active=!1}}},m=d,f=o("2877"),h=Object(f["a"])(m,n,s,!1,null,null,null);t["a"]=h.exports},"94c0":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Detail",{attrs:{"is-edit":!1,namespace:"Partner"}})},s=[],a=o("640e"),i={name:"CreateForm",components:{Detail:a["a"]}},r=i,l=o("2877"),c=Object(l["a"])(r,n,s,!1,null,null,null);t["default"]=c.exports}}]);