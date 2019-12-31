(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db19664"],{"793a":function(e,t,s){"use strict";var o={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}};t["a"]=o},"7f17":function(e,t,s){"use strict";var o=s("eda6"),a=s.n(o);a.a},"874a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Detail",{attrs:{"is-edit":!1,namespace:"Member"}})},a=[],i=s("8888"),n={name:"CreateForm",components:{Detail:i["a"]}},r=n,l=s("2877"),c=Object(l["a"])(r,o,a,!1,null,null,null);t["default"]=c.exports},8888:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"createPost-container"},[s("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[s("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[s("StatusDropdown",{model:{value:e.postForm.active,callback:function(t){e.$set(e.postForm,"active",t)},expression:"postForm.active"}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteMember}},[e._v("Delete member")])],1),e._v(" "),s("div",{staticClass:"createPost-main-container"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"postInfo-container"},[s("el-row",[s("el-col",{attrs:{span:8,lg:7,xs:24}},[s("Upload",{model:{value:e.postForm.thumbnailFile,callback:function(t){e.$set(e.postForm,"thumbnailFile",t)},expression:"postForm.thumbnailFile"}})],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Name:",prop:"name"}},[s("el-input",{attrs:{placeholder:"Nombre(s)",type:"text"},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Surname:",prop:"surname"}},[s("el-input",{attrs:{placeholder:"apellidoP-apellidoM",type:"text"},model:{value:e.postForm.surname,callback:function(t){e.$set(e.postForm,"surname",t)},expression:"postForm.surname"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Email (Optional):",prop:"email"}},[s("el-input",{attrs:{type:"email",placeholder:"Enter valid email"},model:{value:e.postForm.email,callback:function(t){e.$set(e.postForm,"email",t)},expression:"postForm.email"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Adscription:",prop:"adscription"}},[s("br"),e._v(" "),s("el-select",{attrs:{clearable:"",placeholder:"Select institute"},model:{value:e.postForm.adscription,callback:function(t){e.$set(e.postForm,"adscription",t)},expression:"postForm.adscription"}},e._l(e.partners,(function(t){return s("el-option",{key:t.uuid,attrs:{label:t.alias,value:t.uuid}},[s("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:24,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Role / Charge:",prop:"charge"}},[s("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.board,callback:function(t){e.$set(e.postForm,"board",t)},expression:"postForm.board"}},[e._v("Board")]),e._v(" "),s("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.committee,callback:function(t){e.$set(e.postForm,"committee",t)},expression:"postForm.committee"}},[e._v("Committee")]),e._v(" "),s("el-input",{attrs:{placeholder:"Co-Chair / ITM Researcher",type:"text"},model:{value:e.postForm.charge,callback:function(t){e.$set(e.postForm,"charge",t)},expression:"postForm.charge"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Divisions:",prop:"divisions"}},[s("br"),e._v(" "),s("el-select",{attrs:{multiple:"",placeholder:"Select divisions"},model:{value:e.postForm.divisions,callback:function(t){e.$set(e.postForm,"divisions",t)},expression:"postForm.divisions"}},e._l(e.divisions,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1)],1)])],1)],1)],1)],1)},a=[],i=(s("7f7f"),s("28a5"),s("db72")),n=s("2f62"),r=s("8194"),l={name:[{required:!0,message:"Please enter name",trigger:"blur"}],surname:[{required:!0,message:"Please enter surname",trigger:"blur"}],email:[{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},c=s("793a"),m={name:"",surname:"",email:"",active:!1,board:!1,committee:!1,thumbnailUrl:"",thumbnailFile:null,charge:"",adscription:null,membership:null,divisions:[],roles:[]},u={name:"MemberDetail",mixins:[c["a"]],components:{StatusDropdown:function(){return s.e("chunk-2d216eda").then(s.bind(null,"c50b"))},Upload:function(){return s.e("chunk-c1c0cdbe").then(s.bind(null,"70a2"))},MDinput:function(){return s.e("chunk-6790f463").then(s.bind(null,"1aba"))},Sticky:function(){return s.e("chunk-2d210590").then(s.bind(null,"b804"))}},props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},data:function(){return{loading:!1,rules:l,tempRoute:{},id:null,photo:""}},computed:Object(i["a"])({},Object(n["c"])("members",["postForm","partners","divisions","roles"])),created:function(){this.divisions.length||this.$store.dispatch("members/fetchDivisions"),this.partners.length||this.$store.dispatch("members/fetchPartners"),this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("members/SET_MEMBER",m),this.tempRoute=Object.assign({},this.$route)},methods:{getPhoto:function(e){try{var t=e.split("https://drive.google.com/file/d/");return t=t[1],t=t.split("/view?usp=drivesdk"),"https://drive.google.com/uc?id="+t[0]}catch(s){return""}},fetchData:function(e){var t=this,s=this.loadingFullPage();Object(r["b"])(e).then((function(e){s.close(),e.thumbnailFile=t.getPhoto(e.thumbnailFile),t.$store.commit("members/SET_MEMBER",e)})).catch((function(e){s.close(),console.log(e)}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;var s;e.loading=!0,delete e.postForm.thumbnailFile,s=e.isEdit?Object(r["e"])(e.postForm):Object(r["a"])(e.postForm),s.then((function(t){e.$notify({title:" ".concat(e.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:"".concat(e.namespace," <b>").concat(e.postForm.name," ").concat(e.postForm.surname,"</b> was sucessfully saved"),type:"success",duration:2e3}),console.log(t),e.loading=!1,e.$router.push("/members/"+t.id)})).catch((function(t){e.loading=!1,console.log(t),e.$message({message:"Something went wrong:( Try again",type:"error"})}))}))},deleteMember:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3}),this.postForm.active=!1}}},p=u,d=(s("7f17"),s("2877")),h=Object(d["a"])(p,o,a,!1,null,"205afa4d",null);t["a"]=h.exports},eda6:function(e,t,s){}}]);