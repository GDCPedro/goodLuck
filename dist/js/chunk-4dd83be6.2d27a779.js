(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd83be6"],{4580:function(e,t,a){"use strict";var s=a("dfaa"),n=a.n(s);n.a},"5cf0":function(e,t,a){e.exports=a.p+"img/airpods-large.ce97ff94.png"},"76e1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Main",[a("div",{staticClass:"complete"},[a("Title",{staticStyle:{"font-size":"0.8rem","letter-space":"0.08rem"},attrs:{title:e.title}}),a("sub-title",{attrs:{txt:e.subTitle}})],1),a("div",{staticClass:"complete-container"},[a("special-container",{staticStyle:{padding:"0.2rem"}},[a("div",{staticClass:"complete-container__inner"},[a("h4",{staticClass:"title"},[e._v("MISSON COMPLETED")]),a("div",{staticClass:"inner-img"},[a("img",{attrs:{src:e.awardSrc,alt:"",srcset:""}}),a("span",[e._v(e._s(e.awardName))])]),a("div",{staticClass:"inner-tip"},[e._v(" Please fill in the content ")]),a("div",{staticClass:"inner-form native-form"},[a("van-form",{attrs:{"validate-first":""},on:{failed:e.onFailed}},[a("van-field",{attrs:{name:"email",autocomplete:"off",disabled:"",placeholder:"E-mail",rules:[{required:!0,message:"",pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:""}]},model:{value:e.postdata.email,callback:function(t){e.$set(e.postdata,"email",t)},expression:"postdata.email"}}),a("van-field",{attrs:{name:"name",autocomplete:"off",disabled:"",placeholder:"Name",rules:[{required:!0,message:""}]},model:{value:e.postdata.name,callback:function(t){e.$set(e.postdata,"name",t)},expression:"postdata.name"}}),a("van-field",{attrs:{name:"phone",autocomplete:"off",disabled:!!e.userInfo.userPhone,type:"number",placeholder:"Phone",rules:[{required:!0,message:""}]},model:{value:e.postdata.phone,callback:function(t){e.$set(e.postdata,"phone",t)},expression:"postdata.phone"}}),a("van-field",{attrs:{name:"orderId",autocomplete:"off",disabled:"",placeholder:"Amazon Orderld",rules:[{required:!0,message:""}]},model:{value:e.postdata.orderId,callback:function(t){e.$set(e.postdata,"orderId",t)},expression:"postdata.orderId"}}),a("van-field",{attrs:{name:"address",autocomplete:"off",placeholder:"Address",rules:[{required:!0,message:""}]},model:{value:e.postdata.address,callback:function(t){e.$set(e.postdata,"address",t)},expression:"postdata.address"}}),a("van-field",{staticStyle:{height:"1.78rem",padding:"0"},attrs:{name:"taskImg",rules:[{required:!0,message:""}]},scopedSlots:e._u([{key:"input",fn:function(){return[a("ImgUpload",{attrs:{value:e.postdata.taskImg},on:{"update:value":function(t){return e.$set(e.postdata,"taskImg",t)},"upload-success":e.onUploadSuccess}})]},proxy:!0}]),model:{value:e.postdata.taskImg,callback:function(t){e.$set(e.postdata,"taskImg",t)},expression:"postdata.taskImg"}}),a("div",{staticStyle:{width:"100%"}},[a("Button",{staticClass:"inner-form__button",attrs:{long:"",theme:"longDark","native-type":"submit"},on:{click:e.handleSubmit}},[e._v(" CONFIRM ")]),a("Button",{staticClass:"inner-form__button",attrs:{long:"",theme:"longLight"},on:{click:e.handleReset}},[e._v(" RESELECT TASK ")])],1)],1)],1)])])],1)])},n=[],o=a("d4ec"),r=a("bee2"),i=a("262e"),l=a("2caf"),d=a("9ab4"),c=a("60a3"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img-upload"},[a("Upload",{ref:"upload",attrs:{action:"/",format:["jpg","jpeg","png"],"before-upload":e.handleUpload}},[a("div",{staticClass:"img-upload__inner"},[e.imgSrc?a("img",{attrs:{src:e.imgSrc,alt:""}}):a("div",{staticClass:"desc"},[a("div",{staticStyle:{"font-size":"0.5rem"}},[a("van-icon",{attrs:{name:"plus"}})],1),a("div",[e._v("Upload task picture")])])])])],1)},p=[],m=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.imgSrc="",e}return Object(r["a"])(a,[{key:"handleUpload",value:function(e){var t=this;this.imgFile=e,this.$emit("upload-success",e);var a=new FileReader;a.onload=function(e){t.imgSrc=e.target.result},a.readAsDataURL(e)}}]),a}(c["e"]);Object(d["a"])([Object(c["d"])("value")],m.prototype,"imgFile",void 0),m=Object(d["a"])([Object(c["a"])({})],m);var f=m,v=f,b=(a("4580"),a("2877")),h=Object(b["a"])(v,u,p,!1,null,null,null),g=h.exports,k=a("b09b"),y=a("79f6"),O=a("d399"),I=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.title="Lucky draw",e.subTitle=["Welcome to the lucky draw. Good luck!"],e.file=null,e.postdata={orderId:e.userInfo.userOrderId,name:e.userInfo.userName,email:e.userInfo.userEmail,phone:e.userInfo.userPhone,address:"",taskImg:""},e}return Object(r["a"])(a,[{key:"onFailed",value:function(){k["a"].open()}},{key:"onUploadSuccess",value:function(e){this.file=e}},{key:"handleSubmit",value:function(){for(var e in this.postdata){var t=this.postdata[e];if(!t)return}this.warrantySubmit()}},{key:"warrantySubmit",value:function(){var e=this,t=new FormData;t.append("address",this.postdata.address),t.append("mission_file",this.file),y["a"].warrantySubmit(t).then((function(t){0===t.code?(O["a"].success(t.message),setTimeout((function(){e.$router.push("/succeed")}),500)):k["a"].open()}))}},{key:"handleReset",value:function(){this.$router.push("/draw?mission=".concat(this.$route.query.mission))}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),a}(c["e"]);Object(d["a"])([Object(c["c"])({default:function(){return a("5cf0")}})],I.prototype,"awardSrc",void 0),Object(d["a"])([Object(c["c"])({default:"Air Pods"})],I.prototype,"awardName",void 0),I=Object(d["a"])([Object(c["a"])({components:{ImgUpload:g}})],I);var _=I,S=_,j=(a("a292"),Object(b["a"])(S,s,n,!1,null,"09484b1c",null));t["default"]=j.exports},a292:function(e,t,a){"use strict";var s=a("cb37"),n=a.n(s);n.a},cb37:function(e,t,a){},dfaa:function(e,t,a){}}]);
//# sourceMappingURL=chunk-4dd83be6.2d27a779.js.map