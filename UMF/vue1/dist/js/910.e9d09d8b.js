"use strict";(self["webpackChunkvue1"]=self["webpackChunkvue1"]||[]).push([[910],{2910:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(3396),r=a(7139),n=a(9242);const l=e=>((0,s.dD)("data-v-13eb3c81"),e=e(),(0,s.Cn)(),e),o=l((()=>(0,s._)("h1",null,"Registration",-1))),i=l((()=>(0,s._)("span",null,null,-1))),u=["type","name","placeholder"],c={key:0,class:"userErr"},h=l((()=>(0,s._)("button",{type:"submit",title:"Submit",class:"button btn__style click"},"Continue",-1))),d={class:"login"},p=(0,s.Uk)(" Have an account? "),m=(0,s.Uk)(" Log in now ");function g(e,t,a,l,g,v){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"register__wrapper",style:(0,r.j5)({height:g.height+"px"})},[o,(0,s._)("form",{action:"#",method:"post",onSubmit:t[1]||(t[1]=(0,n.iM)(((...e)=>v.checkingForm&&v.checkingForm(...e)),["prevent"]))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.inputData,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"input__wrapper",key:a},[i,(0,s._)("input",{type:e.type,name:e.name,placeholder:e.placeholder,onBlur:t[0]||(t[0]=(...e)=>v.validation&&v.validation(...e))},null,40,u)])))),128)),null!==g.userFind?((0,s.wg)(),(0,s.iD)("span",c,(0,r.zw)(g.userFind),1)):(0,s.kq)("",!0),h],32),(0,s._)("span",d,[p,(0,s.Wm)(w,{title:"Login",rel:"nofollow",to:"/login"},{default:(0,s.w5)((()=>[m])),_:1})])],4)}var v=a(6265),w=a.n(v),k=a(65),y={data(){return{name:"",mail:"",password:"",passwordCheck:"",error:!1,userFind:null,height:0,inputData:[{type:"text",name:"name",placeholder:"Name"},{type:"text",name:"mail",placeholder:"E-mail"},{type:"text",name:"password",placeholder:"Password"},{type:"password",name:"password-check",placeholder:"Password again"}]}},mounted(){this.height=document.querySelector(".site__header").clientHeight+document.querySelector("footer").clientHeight+660<document.body.clientHeight?document.body.clientHeight-(document.querySelector(".site__header").clientHeight+document.querySelector("footer").clientHeight):660},methods:{...(0,k.nv)("UserModules",["postUser"]),...(0,k.OI)("UserModules",["setStatus"]),validation(e){const t=t=>{e.target.parentElement.classList.add("activeErr"),e.target.parentElement.children[0].innerHTML=t,this.error=!0,e.target.focus()},a=()=>{e.target.parentElement.classList.remove("activeErr"),this.error=!1};if("name"!==e.target.name)if("mail"!==e.target.name)if("password"!==e.target.name)"password-check"===e.target.name&&(e.target.value!==document.querySelector("input[name='password']").value?t("Passwords must match"):(this.passwordCheck=e.target.value,a()));else{const s=e=>!(e===e.toLowerCase());e.target.value.length>=8&&e.target.value.length<=40&&s(e.target.value)&&/[0-9]/.test(e.target.value)?(this.password=e.target.value,a()):e.target.value.length>1&&(e.target.value.length<8?t("Min 8 symbols"):e.target.value.length>40?t("Max 40 symbols"):/[0-9]/.test(e.target.value)?t("Password must contain a capital letter"):t("Password must contain a number"))}else e.target.value.length>0&&!1!==Boolean(e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))?w().post("http://localhost:5050/api/users",{mail:e.target.value}).then((()=>{this.mail=e.target.value,a()})).catch((e=>t(e.response.data.message))):t("Incorrect mail");else e.target.value.length<2?t("Incorrect name"):e.target.value.length>0&&w().post("http://localhost:5050/api/users",{name:e.target.value}).then((()=>{this.name=e.target.value,a()})).catch((e=>t(e.response.data.message)))},checkingForm(){this.error||""===this.name||""===this.mail||""===this.password||""===this.passwordCheck?console.log("bad"):w().post("http://localhost:5050/api/users",{name:this.name,mail:this.mail,password:this.password}).then((e=>{this.$cookies.set("UserToken",e.data.token,"30d"),this.setStatus(!0),this.userFind=null,this.$router.push("/")})).catch((e=>this.userFind=e.response.data.message))}}},_=a(89);const b=(0,_.Z)(y,[["render",g],["__scopeId","data-v-13eb3c81"]]);var f=b}}]);
//# sourceMappingURL=910.e9d09d8b.js.map