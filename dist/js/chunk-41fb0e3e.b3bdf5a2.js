(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fb0e3e"],{"0d6c":function(e,t,a){},4580:function(e,t,a){"use strict";var s=a("dfaa"),n=a.n(s);n.a},7059:function(e,t,a){"use strict";var s=a("0d6c"),n=a.n(s);n.a},"76e1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Main",[a("div",{staticClass:"complete"},[a("Title",{staticStyle:{"font-size":"0.8rem","letter-space":"0.08rem"},attrs:{title:e.title}}),a("sub-title",{attrs:{txt:e.subTitle}})],1),a("div",{staticClass:"complete-container"},[a("special-container",{staticStyle:{padding:"0.2rem"}},[a("div",{staticClass:"complete-container__inner"},[a("h4",{staticClass:"title"},[e._v("MISSION COMPLETED")]),a("div",{staticClass:"inner-img"},[a("img",{attrs:{src:e.awardSrc,alt:"",srcset:""}}),a("span",[e._v(e._s(e.awardName))])]),a("div",{staticClass:"inner-tip"},[e._v(" Please fill in the content ")]),a("div",{staticClass:"inner-form native-form"},[a("van-form",{attrs:{"validate-first":""},on:{failed:e.onFailed}},[a("van-field",{attrs:{name:"email",autocomplete:"off",disabled:"",placeholder:"E-mail",rules:[{required:!0,message:"",pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:""}]},model:{value:e.postdata.email,callback:function(t){e.$set(e.postdata,"email",t)},expression:"postdata.email"}}),a("van-field",{attrs:{name:"name",autocomplete:"off",disabled:"",placeholder:"Name",rules:[{required:!0,message:""}]},model:{value:e.postdata.name,callback:function(t){e.$set(e.postdata,"name",t)},expression:"postdata.name"}}),a("van-field",{attrs:{name:"phone",autocomplete:"off",disabled:!!e.userInfo.userPhone,type:"number",placeholder:"Phone",rules:[{required:!0,message:""}]},model:{value:e.postdata.phone,callback:function(t){e.$set(e.postdata,"phone",t)},expression:"postdata.phone"}}),a("van-field",{attrs:{name:"orderId",autocomplete:"off",disabled:"",placeholder:"Amazon Orderld",rules:[{required:!0,message:""}]},model:{value:e.postdata.orderId,callback:function(t){e.$set(e.postdata,"orderId",t)},expression:"postdata.orderId"}}),a("van-field",{attrs:{name:"address",autocomplete:"off",placeholder:"Address",rules:[{required:!0,message:""}]},model:{value:e.postdata.address,callback:function(t){e.$set(e.postdata,"address",t)},expression:"postdata.address"}}),a("van-field",{staticStyle:{height:"1.78rem",padding:"0"},attrs:{name:"taskImg",rules:[{required:!0,message:""}]},scopedSlots:e._u([{key:"input",fn:function(){return[a("ImgUpload",{attrs:{value:e.postdata.taskImg},on:{"update:value":function(t){return e.$set(e.postdata,"taskImg",t)},"upload-success":e.onUploadSuccess}})]},proxy:!0}]),model:{value:e.postdata.taskImg,callback:function(t){e.$set(e.postdata,"taskImg",t)},expression:"postdata.taskImg"}}),a("div",{staticStyle:{width:"100%"}},[a("Button",{staticClass:"inner-form__button",attrs:{disabled:!e.postdata.taskImg,long:"",theme:"longDark","native-type":"submit"},on:{click:e.handleSubmit}},[e._v(" CONFIRM ")]),a("Button",{staticClass:"inner-form__button",attrs:{long:"",theme:"longLight"},on:{click:e.handleReset}},[e._v(" RESELECT TASK ")])],1)],1)],1)])])],1)])},n=[],i=a("d4ec"),r=a("bee2"),o=a("262e"),l=a("2caf"),c=a("9ab4"),d=a("60a3"),u=a("8551"),p=a("b09b"),m=a("79f6"),f=a("d399"),v=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.title="Lucky draw",e.subTitle=["Welcome to the lucky draw. Good luck!"],e.file=null,e.postdata={orderId:e.userInfo.userOrderId,name:e.userInfo.userName,email:e.userInfo.userEmail,phone:e.userInfo.userPhone,address:"",taskImg:""},e}return Object(r["a"])(a,[{key:"onFailed",value:function(){p["a"].open()}},{key:"onUploadSuccess",value:function(e){this.file=e}},{key:"handleSubmit",value:function(){for(var e in this.postdata){var t=this.postdata[e];if(!t)return}this.warrantySubmit()}},{key:"warrantySubmit",value:function(){var e=this,t=new FormData;t.append("address",this.postdata.address),t.append("mission_file",this.file),m["a"].warrantySubmit(t).then((function(t){0===t.code&&(f["a"].success(t.message),setTimeout((function(){e.$router.push("/succeed")}),500))}))}},{key:"handleReset",value:function(){this.$router.push("/draw?mission=".concat(this.$route.query.mission))}},{key:"awardSrc",get:function(){return this.$route.query.awardSrc}},{key:"awardName",get:function(){return this.$route.query.awardName}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),a}(d["e"]);v=Object(c["a"])([Object(d["a"])({components:{ImgUpload:u["a"]}})],v);var h=v,b=h,g=(a("7059"),a("2877")),k=Object(g["a"])(b,s,n,!1,null,"22a34501",null);t["default"]=k.exports},8551:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img-upload"},[a("Upload",{ref:"upload",attrs:{action:"/",format:["jpg","jpeg","png"],accept:"image/*","before-upload":e.handleUpload,"show-upload-list":!1}},[a("div",{staticClass:"img-upload__inner"},[e.imgSrc?a("img",{attrs:{src:e.imgSrc,alt:""}}):a("div",{staticClass:"desc",class:{"pc-desc":e.isPc}},[a("div",{class:{"pc-plus":e.isPc,"mobile-plus":!e.isPc}},[a("van-icon",{attrs:{name:"plus"}})],1),a("div",[e._v("Upload task picture")])])])])],1)},n=[],i=a("d4ec"),r=a("bee2"),o=a("262e"),l=a("2caf"),c=a("9ab4"),d=a("60a3"),u=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.imgSrc="",e}return Object(r["a"])(a,[{key:"handleUpload",value:function(e){var t=this;this.imgFile=e,this.$emit("upload-success",e);var a=new FileReader;a.onload=function(e){t.imgSrc=e.target.result},a.readAsDataURL(e)}}]),a}(d["e"]);Object(c["a"])([Object(d["d"])("value")],u.prototype,"imgFile",void 0),Object(c["a"])([Object(d["c"])({default:!1})],u.prototype,"isPc",void 0),u=Object(c["a"])([Object(d["a"])({})],u);var p=u,m=p,f=(a("4580"),a("2877")),v=Object(f["a"])(m,s,n,!1,null,null,null);t["a"]=v.exports},dfaa:function(e,t,a){}}]);
//# sourceMappingURL=chunk-41fb0e3e.b3bdf5a2.js.map