(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a95458"],{"0792":function(e,t,s){"use strict";s.d(t,"c",(function(){return r})),s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return a}));var o=s("61f7"),r={required:!0,message:"This field is required",trigger:"blur"},n={validator:function(e,t,s){Object(o["d"])(t)?s():s(new Error("Please enter the correct email"))}},a={validator:function(e,t,s){t.length?s():s(new Error("The password can not be less than 6 digits"))}}},"1c1f":function(e,t,s){"use strict";var o={methods:{compare:function(e,t){return e.position>t.position?1:-1}}};t["a"]=o},"407f":function(e,t,s){"use strict";var o={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},r=o,n=s("532b"),a=void 0,i={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[r],created:function(){this.$store.commit("app/SET_STEPS",n["a"])},methods:{validateRequire:function(e,t,s){""===t?(a.$message({message:e.field+" is required",type:"error"}),s(new Error("Required field"))):s()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,s){t?validURL(t)?s():(a.$message({message:"Invalid URL format",type:"error"}),s(new Error("Invalid URL"))):s()}}};t["a"]=i},"532b":function(e,t,s){"use strict";s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return r}));var o=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],r=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},"672a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Detail",{attrs:{"is-edit":!0,namespace:"Research"}})},r=[],n=s("abd9"),a={name:"EditForm",components:{Detail:n["a"]}},i=a,l=s("2877"),c=Object(l["a"])(i,o,r,!1,null,null,null);t["default"]=c.exports},"828d":function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return n}));var o=s("780a");function r(e){return Object(o["a"])({url:"/projects/",method:"GET",params:{title:e}})}function n(e){return Object(o["a"])({url:"/members/",method:"GET",params:{name:e}})}},abd9:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"createPost-container"},[s("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[s("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.type}},[s("TypeDropdown",{model:{value:e.postForm.type,callback:function(t){e.$set(e.postForm,"type",t)},expression:"postForm.type"}}),e._v(" "),s("BannerUrlDropdown",{model:{value:e.postForm.link,callback:function(t){e.$set(e.postForm,"link",t)},expression:"postForm.link"}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteResearch}},[e._v("Delete")])],1),e._v(" "),s("div",{staticClass:"createPost-main-container"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content bg-purple-dark"})])],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple"})]),e._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content bg-purple-light"})])],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"postInfo-container"},[s("el-row",[s("el-col",{attrs:{span:24,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Title:",prop:"title"}},[s("el-input",{attrs:{placeholder:"i.e: Segmentación de tumores cerebrales utilizando optimización...",type:"textarea",rows:"3"},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:24,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Resume/Abstract:",prop:"resume"}},[s("el-input",{attrs:{placeholder:"",type:"textarea",rows:"7"},model:{value:e.postForm.resume,callback:function(t){e.$set(e.postForm,"resume",t)},expression:"postForm.resume"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Year:",prop:"year"}},[s("br"),e._v(" "),s("el-input",{staticClass:"filter-item",attrs:{type:"number",min:"2018",placeholder:"Year",clearable:""},model:{value:e.postForm.year,callback:function(t){e.$set(e.postForm,"year",t)},expression:"postForm.year"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Related projects:",prop:"projects"}},[s("br"),e._v(" "),s("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"","remote-method":e.fetchProjects,loading:e.searching,clearable:"",placeholder:"Search and select projects"},model:{value:e.postForm.projects,callback:function(t){e.$set(e.postForm,"projects",t)},expression:"postForm.projects"}},e._l(e.projects,(function(t){return s("el-option",{key:t.uuid,attrs:{label:t.title.slice(0,30).concat("..."),value:t.uuid}},[s("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.title.slice(0,100).concat("...")))])])})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Áreas de interés:",prop:"lines"}},[s("br"),e._v(" "),s("el-select",{attrs:{multiple:"",placeholder:"Select interest areas"},model:{value:e.postForm.lines,callback:function(t){e.$set(e.postForm,"lines",t)},expression:"postForm.lines"}},e._l(e.lines,(function(t){return s("el-option",{key:t.id,attrs:{label:t.topic.slice(0,30).concat("..."),value:t.id}},[e._v(e._s(t.topic))])})),1),e._v(" "),s("LineModal")],1)],1),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},["Thesis"==e.postForm.type?s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Grade:",prop:"grade"}},[s("br"),e._v(" "),s("el-select",{staticClass:"filter-item",attrs:{placeholder:"Licenciatura",clearable:"","allow-create":"",filterable:""},model:{value:e.postForm.grade,callback:function(t){e.$set(e.postForm,"grade",t)},expression:"postForm.grade"}},e._l(["Licenciatura","Maestría","Doctorado","Postdoctorado"],(function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):e._e()],1),e._v(" "),"Presentation"==e.postForm.type?s("el-col",{attrs:{span:24,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Event:",prop:"event"}},[s("br"),e._v(" "),s("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.event,callback:function(t){e.$set(e.postForm,"event",t)},expression:"postForm.event"}})],1)],1):e._e(),e._v(" "),s("el-col",{attrs:{span:12,xs:24}},["Article"==e.postForm.type?s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Article type:",prop:"pub_type"}},[s("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.pub_type,callback:function(t){e.$set(e.postForm,"pub_type",t)},expression:"postForm.pub_type"}})],1):e._e()],1),e._v(" "),"Article"==e.postForm.type?s("el-col",{attrs:{span:12,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Published in:",prop:"púb_in"}},[s("el-input",{staticClass:"filter-item",attrs:{clearable:""},model:{value:e.postForm.pub_in,callback:function(t){e.$set(e.postForm,"pub_in",t)},expression:"postForm.pub_in"}})],1)],1):e._e()],1)],1)])],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{span:12,lg:12,xs:24}},[s("Authors",{attrs:{authors:e.postForm.authors,title:"Authors"}})],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:"Thesis"===e.postForm.type&&e.isEdit,expression:"postForm.type === 'Thesis' && isEdit"}],attrs:{span:12,lg:12,xs:24}},[s("Advisors",{attrs:{advisors:e.postForm.advisors,title:"Advisors"}})],1)],1)],1)},r=[],n=(s("5df3"),s("ac6a"),s("55dd"),s("96cf"),s("3b8d")),a=s("db72"),i=(s("61f7"),s("2f62")),l=s("896b"),c=s("24d2"),p=s("828d"),u=s("0792"),d={title:[u["c"]],year:[u["c"]],type:[u["c"]]},m=s("407f"),f=s("1c1f"),h={title:"",resume:"",year:2018,grade:"",event:"",pub_in:"",pub_type:"",type:"",link:"",lines:[],projects:[]},b={name:"ResearchDetail",mixins:[f["a"],m["a"]],components:{MDinput:function(){return s.e("chunk-6790f463").then(s.bind(null,"1aba"))},Sticky:function(){return s.e("chunk-2d210590").then(s.bind(null,"b804"))},TypeDropdown:function(){return s.e("chunk-2d21de80").then(s.bind(null,"d2fb"))},BannerUrlDropdown:function(){return s.e("chunk-76f6a8a8").then(s.bind(null,"46c3"))},LineModal:function(){return s.e("chunk-2d0e13f0").then(s.bind(null,"7a2b"))},Authors:function(){return Promise.all([s.e("chunk-70f339e8"),s.e("chunk-5d791e60")]).then(s.bind(null,"1ff4"))},Advisors:function(){return Promise.all([s.e("chunk-70f339e8"),s.e("chunk-39e4e855")]).then(s.bind(null,"f9dc"))}},data:function(){return{rules:d,tempRoute:{},id:null,projects:[]}},computed:Object(a["a"])({},Object(i["c"])("members",["partners","collaborators","divisions","roles"]),{},Object(i["c"])("research",["postForm"]),{},Object(i["c"])("projects",["lines"])),created:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.lines.length){e.next=3;break}return e.next=3,this.$store.dispatch("projects/fetchLines");case 3:this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("research/SET_RESEARCH_FORM",h),this.tempRoute=Object.assign({},this.$route);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{fetchProjects:function(e){var t=this;this.searching=!0,Object(p["b"])(e).then((function(e){t.projects=e.results,t.searching=!1}))},sortAuthors:function(e){return e.sort(this.compare),e},fetchData:function(e){var t=this,s=this.loadingFullPage();Object(l["b"])(e).then((function(e){e.authors.sort(t.compare),e.advisors.sort(t.compare);var o=[];e.projects.forEach((function(e){o.push(Object(c["e"])(e))})),Promise.all(o).then((function(e){t.projects=e,s.close()})),t.$store.commit("research/SET_RESEARCH_FORM",e)})).catch((function(e){s.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var s,o=e.loadingFullPage();s=e.isEdit?Object(l["e"])(e.postForm):Object(l["a"])(e.postForm);var r=new Date(e.postForm.start),n=new Date(e.postForm.end);e.postForm.start="".concat(r.getFullYear(),"-").concat(r.getMonth(),"-").concat(r.getDate()),e.postForm.end="".concat(n.getFullYear(),"-").concat(n.getMonth(),"-").concat(n.getDate()),s.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.title,"</b> was sucessfully saved")),o.close(),e.isEdit||e.$store.dispatch("tagsView/delAllVisitedViews"),e.$router.push("/research/"+t.uuid)})).catch((function(e){o.close()}))}))},deleteResearch:function(){var e=this;Object(l["d"])(this.$route.params.id).then((function(t){e.handleError(),e.$store.dispatch("tagsView/delAllVisitedViews"),e.$router.push({name:"ResearchList"})}),(function(e){}))}}},v=b,g=s("2877"),F=Object(g["a"])(v,o,r,!1,null,null,null);t["a"]=F.exports}}]);