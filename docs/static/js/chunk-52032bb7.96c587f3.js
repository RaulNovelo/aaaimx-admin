(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52032bb7"],{"1ff4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"","remote-method":t.getData,loading:t.loading,clearable:"",placeholder:"Selector author"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}},t._l(t.options,(function(t){return n("el-option",{key:t.fullname,attrs:{label:t.fullname,value:t.id}})})),1),t._v(" "),n("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){return t.addAuthor()}}},[t._v("Add author")]),t._v(" "),n("div",{staticClass:"editor-container"},[n("dnd-list",{attrs:{list1:t.authors,list2:t.list2,"list1-title":"Authors","list2-title":""}})],1)],1)},r=[],a=(n("6b54"),n("96cf"),n("3b8d")),s=n("db72"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dndList"},[n("div",{staticClass:"dndList-list",style:{width:t.width1}},[n("draggable",{staticClass:"dragArea",attrs:{"set-data":t.setData,list:t.list1,group:"article"}},[t._l(t.list1,(function(e,i){return n("div",{key:e.id,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle"},[t._v("\n          "+t._s(++i)+".- "+t._s(e.fullname)+"\n        ")]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"0px"}},[n("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(n){return t.deleteEle(e)}}},[n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])})),t._v(" "),t.list1.length?t._e():n("aside",[t._v("No data")])],2),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{icon:"el-icon-circle-check-outline",size:"small",type:"success"},on:{click:function(e){return t.saveAuthors()}}},[t._v("Save authors")]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",size:"small",type:"primary"},on:{click:function(e){return t.sort()}}},[t._v("Reset order")])],1)])},l=[],u=(n("ac4d"),n("8a81"),n("5df3"),n("ac6a"),n("55dd"),n("1980")),c=n.n(u),d=n("780a");function h(t){return Object(d["a"])({url:"/authors/",method:"POST",data:t})}function f(t){return Object(d["a"])({url:"/authors/".concat(t.id,"/"),method:"PATCH",data:t})}function p(t,e){return Object(d["a"])({url:"/authors/".concat(t,"/"),method:"DELETE",data:e})}var v={name:"DndList",components:{draggable:c.a},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"100%"}},data:function(){return{loading:!1}},mounted:function(){this.sort()},methods:{sort:function(){var t=function(t,e){return t.position>e.position?1:-1};this.list1.sort(t)},isNotInList1:function(t){return this.list1.every((function(e){return t.id!==e.id}))},isNotInList2:function(t){return this.list2.every((function(e){return t.id!==e.id}))},saveAuthors:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],this.loading=!0,this.list1.forEach((function(t,n,i){t.id&&(console.log(t.id),e.push(f({id:t.id,position:++n})))})),Promise.all(e).then((function(t){console.log(t),n.loading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteEle:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,i,r,a,s,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=!0,i=!1,r=void 0,t.prev=3,a=this.list1[Symbol.iterator]();case 5:if(n=(s=a.next()).done){t.next=17;break}if(o=s.value,o.id!==e.id){t.next=14;break}if(l=this.list1.indexOf(o),this.list1.splice(l,1),!o.id){t.next=13;break}return t.next=13,p(o.id);case 13:return t.abrupt("break",17);case 14:n=!0,t.next=5;break;case 17:t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](3),i=!0,r=t.t0;case 23:t.prev=23,t.prev=24,n||null==a.return||a.return();case 26:if(t.prev=26,!i){t.next=29;break}throw r;case 29:return t.finish(26);case 30:return t.finish(23);case 31:this.isNotInList2(e)&&this.list2.unshift(e);case 32:case"end":return t.stop()}}),t,this,[[3,19,23,31],[24,,26,30]])})));function e(e){return t.apply(this,arguments)}return e}(),pushEle:function(t){var e=!0,n=!1,i=void 0;try{for(var r,a=this.list2[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var s=r.value;if(s.id===t.id){var o=this.list2.indexOf(s);this.list2.splice(o,1);break}}}catch(l){n=!0,i=l}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}this.isNotInList1(t)&&this.list1.push(t)},setData:function(t){t.setData("Text","")}}},m=v,b=(n("3adb"),n("2877")),g=Object(b["a"])(m,o,l,!1,null,"4c894aa3",null),y=g.exports,x=n("8194"),k=n("2f62"),_={name:"DndListDemo",components:{DndList:y},props:{title:{type:String,default:"list1"},authors:{type:Array,default:function(){return[]}}},data:function(){return{list1:[],list2:[],options:[],loading:!1,author:""}},created:function(){this.getData()},computed:Object(s["a"])({},Object(k["c"])("members",["collaborators"])),methods:{getData:function(t){var e=this;this.loading=!0,Object(x["c"])({fullname:t}).then((function(t){e.options=t.results,e.loading=!1}))},addAuthor:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,i,r,a,s,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.author.toString().trim()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(x["b"])(this.author);case 4:if(e=t.sent,n=e.fullname,i=e.id,r=this.$route.params.id,a=this.authors.filter((function(t){return t.fullname==n})),a.length){t.next=17;break}return s={fullname:n,member:i,research:r,position:this.authors.length+1},t.next=12,h(s);case 12:o=t.sent,l=Object.assign({},s,o),this.authors.push(l),console.log(l),console.log(this.authors);case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},w=_,O=Object(b["a"])(w,i,r,!1,null,null,null);e["default"]=O.exports},"3adb":function(t,e,n){"use strict";var i=n("7378"),r=n.n(i);r.a},7378:function(t,e,n){}}]);