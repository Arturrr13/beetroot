(function(){"use strict";var e={1285:function(e,t,a){var n=a(9242),s=a(3396);function r(e,t,a,n,r,i){const o=(0,s.up)("site-header"),l=(0,s.up)("router-view"),d=(0,s.up)("site-footer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(o),(0,s.Wm)(l),(0,s.Wm)(d)])}var i=a(7139);const o=e=>((0,s.dD)("data-v-e04caa18"),e=e(),(0,s.Cn)(),e),l={class:"nav__block--left"},d={key:0,class:"nav__block--right"},u={id:"registration"},c={key:1,class:"userMenu"},f={key:0},v=o((()=>(0,s._)("li",null,[(0,s._)("span",null,"Выход")],-1)));function b(e,t,a,n,r,o){const b=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",null,[(0,s._)("ul",null,[(0,s._)("div",l,[(0,s._)("li",null,[(0,s.Wm)(b,{id:"logo",rel:"nofollow",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Xdice")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(b,{id:"home",rel:"nofollow",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Главная")])),_:1})])]),""===e.getUserData.userEmail?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("li",null,[(0,s.Wm)(b,{id:"login",rel:"nofollow",to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Войти")])),_:1})]),(0,s._)("li",u,[(0,s.Wm)(b,{rel:"nofollow",to:"/registration"},{default:(0,s.w5)((()=>[(0,s.Uk)("Регистрация")])),_:1})])])):(0,s.kq)("",!0),""!==e.getUserData.userEmail?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("ul",null,[(0,s._)("li",{class:"userEmail",onClick:t[0]||(t[0]=()=>{!1===this.active?this.active=!0:this.active=!1})},[(0,s.Uk)((0,i.zw)(o.reversedMessage)+" ",1),this.getUserData.userEmail.length>=20?((0,s.wg)(),(0,s.iD)("span",f,"...")):(0,s.kq)("",!0)]),(0,s._)("ul",{class:(0,i.C_)([{active:r.active},"display"])},[(0,s._)("li",null,[(0,s.Wm)(b,{rel:"nofollow",to:"/user-wallet",onClick:t[1]||(t[1]=()=>{!1===this.active?this.active=!0:this.active=!1})},{default:(0,s.w5)((()=>[(0,s.Uk)("Кошелек")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(b,{rel:"nofollow",to:"/user-profile",onClick:t[2]||(t[2]=()=>{!1===this.active?this.active=!0:this.active=!1})},{default:(0,s.w5)((()=>[(0,s.Uk)("Профиль")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(b,{rel:"nofollow",to:"/user-security",onClick:t[3]||(t[3]=()=>{!1===this.active?this.active=!0:this.active=!1})},{default:(0,s.w5)((()=>[(0,s.Uk)("Безопасность")])),_:1})]),v],2)])])):(0,s.kq)("",!0)])])])}var p=a(65),m={name:"SiteHeader",data(){return{active:!1,activePoints:!1,email:""}},computed:{...(0,p.Se)("UserModules",["getUserData"]),reversedMessage:function(){return this.getUserData.userEmail.slice(0,19)}}},g=a(89);const h=(0,g.Z)(m,[["render",b],["__scopeId","data-v-e04caa18"]]);var y=h,A=a.p+"img/trx1.9c3e0a47.svg",w=a.p+"img/icon18.1dc90e4d.svg";const C=e=>((0,s.dD)("data-v-be2f38f2"),e=e(),(0,s.Cn)(),e),k={class:"footer__wrapper"},_={class:"footer__block--left"},D=C((()=>(0,s._)("span",{class:"copyright"}," © 2022 XDICE.SBS ",-1))),E=(0,s.uE)('<div class="footer__block--right" data-v-be2f38f2><img src="'+A+'" alt="" style="margin-right:22px;" data-v-be2f38f2><span data-v-be2f38f2> TRX </span><span class="TRX" data-v-be2f38f2> TRON </span><span class="FAIR__GAME" data-v-be2f38f2> FAIR GAME </span><img src="'+w+'" alt="" style="margin-left:22px;" data-v-be2f38f2></div>',1);function U(e,t){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("footer",null,[(0,s._)("div",k,[(0,s._)("div",_,[D,(0,s.Wm)(a,{id:"home",rel:"nofollow",to:"/privacy-policy"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Политика конфиденциальности ")])),_:1}),(0,s.Wm)(a,{id:"home",rel:"nofollow",to:"/terms-of-use"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Пользовательское соглашение ")])),_:1})]),E])])}const T={},x=(0,g.Z)(T,[["render",U],["__scopeId","data-v-be2f38f2"]]);var S=x,B={components:{SiteHeader:y,SiteFooter:S}};const F=(0,g.Z)(B,[["render",r]]);var L=F,P=a(2483);a(7658);const W=e=>((0,s.dD)("data-v-b7043174"),e=e(),(0,s.Cn)(),e),H={class:"spin__block"},N=W((()=>(0,s._)("h1",null,"XDICE RANDOM GENERATOR",-1))),X={key:0,class:"button__block"},j=W((()=>(0,s._)("span",null,"Bet",-1))),R={class:"amount"},M={key:1,class:"button__block--ActiveUser"},I={class:"amount"},V={class:"balance"},Q=W((()=>(0,s._)("span",null,"Баланс",-1))),q={class:"input__balance"},Z={class:"bet"},G=W((()=>(0,s._)("span",null,"Bet",-1))),O={class:"bet__buttons"},J={class:"buttons__play"},K={class:"play__wrapper"},z={key:0,class:"timerActive"};function Y(e,t,a,r,o,l){const d=(0,s.up)("home-user-list"),u=(0,s.up)("home-spin"),c=(0,s.up)("deposit-modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("main",null,[(0,s.Wm)(d,{bet:o.bet},null,8,["bet"]),(0,s._)("div",H,[N,(0,s.Wm)(u),""===e.getUserData.userEmail?((0,s.wg)(),(0,s.iD)("div",X,[j,(0,s._)("div",R,[(0,s._)("button",{class:"button__down",onClick:t[0]||(t[0]=(...e)=>l.decrement&&l.decrement(...e))},"down"),(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>o.bet=e),min:"1"},null,512),[[n.nr,o.bet]]),(0,s._)("button",{class:"button__up",onClick:t[2]||(t[2]=(...e)=>l.increment&&l.increment(...e))},"up")]),(0,s._)("button",{class:"button__play",onClick:t[3]||(t[3]=()=>{this.$router.push("/registration")})},"Регистрация")])):(0,s.kq)("",!0),""!==e.getUserData.userEmail?((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",I,[(0,s._)("div",V,[Q,(0,s._)("div",q,[(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>o.balance=e),min:"0"},null,512),[[n.nr,o.balance]])])]),(0,s._)("div",Z,[G,(0,s._)("div",O,[(0,s._)("button",{class:"button__down",onClick:t[5]||(t[5]=(...e)=>l.decrement&&l.decrement(...e))},"down"),(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=e=>o.bet=e),min:"1"},null,512),[[n.nr,o.bet]]),(0,s._)("button",{class:"button__up",onClick:t[7]||(t[7]=(...e)=>l.increment&&l.increment(...e))},"up")])])]),(0,s._)("div",J,[(0,s._)("div",K,[(0,s._)("button",{style:(0,i.j5)({background:o.backgroundPlay}),class:"button__play",onClick:t[8]||(t[8]=(...e)=>l.play&&l.play(...e))},(0,i.zw)(o.ButtonTextPlay),5),o.timerActive?((0,s.wg)(),(0,s.iD)("span",z,"waiting..."+(0,i.zw)(o.playTimer),1)):(0,s.kq)("",!0)]),(0,s._)("button",{style:(0,i.j5)({background:o.backgroundAutostart}),class:"button__autostart",onClick:t[9]||(t[9]=(...e)=>l.autostart&&l.autostart(...e))},(0,i.zw)(o.ButtonTextAutostart),5)])])):(0,s.kq)("",!0)])]),(0,s.Wm)(c)],64)}var $=a(9877);const ee=e=>((0,s.dD)("data-v-e9f431fe"),e=e(),(0,s.Cn)(),e),te={class:"table"},ae=(0,s.uE)('<ul class="table__head" data-v-e9f431fe><li class="number" style="font-size:20px;" data-v-e9f431fe>№</li><li class="players" data-v-e9f431fe>Players</li><li class="bet" data-v-e9f431fe>Bet</li><li class="win" data-v-e9f431fe>Win <img src="'+$+'" alt="" style="margin-left:8px;" data-v-e9f431fe></li><li class="status" style="font-size:18px;" data-v-e9f431fe>Status</li></ul>',1),ne={class:"number"},se=(0,s.uE)('<li class="players" data-v-e9f431fe><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e9f431fe><path d="M15.4784 2.63856C13.7659 0.937042 11.489 0 9.06706 0C6.64514 0 4.36823 0.937042 2.65571 2.63856C0.943118 4.34012 0 6.6024 0 9.00864C0 11.4149 0.943118 13.6772 2.65571 15.3787C4.36823 17.0802 6.64514 18.0173 9.06706 18.0173C11.489 18.0173 13.7659 17.0802 15.4784 15.3787C17.191 13.6772 18.1341 11.4149 18.1341 9.00864C18.1341 6.6024 17.191 4.34012 15.4784 2.63856ZM14.9675 14.8711C13.3915 16.4371 11.296 17.2995 9.06706 17.2995C6.83815 17.2995 4.74265 16.4371 3.16657 14.8711C1.59046 13.3051 0.722475 11.2232 0.722475 9.00864C0.722475 6.79409 1.59046 4.71213 3.16657 3.14613C4.74265 1.58021 6.83815 0.71782 9.06706 0.71782C11.296 0.71782 13.3915 1.58021 14.9675 3.14613C16.5437 4.71213 17.4116 6.79409 17.4116 9.00864C17.4116 11.2232 16.5437 13.3051 14.9675 14.8711Z" fill="black" data-v-e9f431fe></path><path d="M9.06764 2.18066C5.27822 2.18066 2.19531 5.24371 2.19531 9.00871C2.19531 12.7737 5.27822 15.8368 9.06764 15.8368C12.8571 15.8368 15.94 12.7737 15.94 9.00871C15.94 5.24371 12.8571 2.18066 9.06764 2.18066ZM9.06764 15.1189C5.67659 15.1189 2.91779 12.3779 2.91779 9.00871C2.91779 5.63951 5.67659 2.89848 9.06764 2.89848C12.4587 2.89848 15.2175 5.63951 15.2175 9.00871C15.2175 12.3779 12.4587 15.1189 9.06764 15.1189Z" fill="black" data-v-e9f431fe></path><path d="M12.3907 8.72153H9.3924V3.84036C9.3924 3.64213 9.23063 3.48145 9.03116 3.48145C8.83168 3.48145 8.66992 3.64213 8.66992 3.84036V9.08044C8.66992 9.27867 8.83168 9.43935 9.03116 9.43935H12.3907C12.5901 9.43935 12.7519 9.27867 12.7519 9.08044C12.7519 8.88221 12.5901 8.72153 12.3907 8.72153Z" fill="black" data-v-e9f431fe></path><path d="M9.03143 13.8179C7.10625 13.8179 5.38011 12.6785 4.63379 10.9152C4.55641 10.7324 4.34455 10.6467 4.16079 10.7234C3.97684 10.8003 3.89043 11.0107 3.96781 11.1934C4.82709 13.2238 6.81473 14.5357 9.03143 14.5357C9.23091 14.5357 9.39267 14.375 9.39267 14.1768C9.39267 13.9786 9.23091 13.8179 9.03143 13.8179Z" fill="black" data-v-e9f431fe></path><path d="M4.00896 10.1893C4.20634 10.1603 4.3426 9.97776 4.31334 9.78168C4.27895 9.5513 4.26154 9.31539 4.26154 9.08059C4.26154 8.88236 4.09978 8.72168 3.9003 8.72168C3.70083 8.72168 3.53906 8.88236 3.53906 9.08059C3.53906 9.35053 3.55911 9.62179 3.59867 9.88695C3.62522 10.0652 3.77947 10.1933 3.95553 10.1933C3.9732 10.1933 3.99104 10.192 4.00896 10.1893Z" fill="black" data-v-e9f431fe></path></svg></li>',1),re={class:"bet"},ie={class:"win"},oe=ee((()=>(0,s._)("li",{class:"status"},"Ожидание",-1)));function le(e,t,a,n,r,o){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",te,[ae,((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(10,(e=>(0,s._)("ul",{key:e},[(0,s._)("li",ne,(0,i.zw)(e),1),se,(0,s._)("li",re,(0,i.zw)(a.bet),1),(0,s._)("li",ie,(0,i.zw)((a.bet/10).toFixed(2)),1),oe]))),64))])])}var de={name:"UserList",props:{bet:Number}};const ue=(0,g.Z)(de,[["render",le],["__scopeId","data-v-e9f431fe"]]);var ce=ue,fe="data:image/png;base64,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";const ve={class:"chart__wrapper"},be=(0,s.uE)('<div class="chart" data-v-4fb8970e><div class="center" data-v-4fb8970e><svg width="61" height="37" viewBox="0 0 61 37" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4fb8970e><path d="M26.0641 0.811901C26.8213 -0.143573 28.2498 -0.205153 29.0864 0.68162L59.6113 33.038C61.0336 34.5456 59.5057 36.9552 57.5355 36.3116L28.1796 26.722C27.7401 26.5784 27.2645 26.5916 26.8336 26.7591L2.87151 36.0777C0.970537 36.817 -0.687668 34.5701 0.579129 32.9716L26.0641 0.811901Z" fill="#42239A" data-v-4fb8970e></path></svg><span data-v-4fb8970e>GOOD LUCK</span><img src="'+fe+'" alt="" data-v-4fb8970e></div><div class="triangle" style="transform:rotate(0deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>7</span></div></div><div class="triangle" style="transform:rotate( 36deg);" data-v-4fb8970e><div class="circle" style="background:#F6F7F9;" data-v-4fb8970e><span style="color:#000000;" data-v-4fb8970e>4</span></div></div><div class="triangle" style="transform:rotate(72deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>5</span></div></div><div class="triangle" style="transform:rotate(108deg);" data-v-4fb8970e><div class="circle" style="background:#F6F7F9;" data-v-4fb8970e><span style="color:#000000;" data-v-4fb8970e>6</span></div></div><div class="triangle" style="transform:rotate(144deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>7</span></div></div><div class="triangle" style="transform:rotate(180deg);" data-v-4fb8970e><div class="circle" style="background:#F6F7F9;" data-v-4fb8970e><span style="color:#000000;" data-v-4fb8970e>8</span></div></div><div class="triangle" style="transform:rotate(216deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>9</span></div></div><div class="triangle" style="transform:rotate(252deg);" data-v-4fb8970e><div class="circle" style="background:#F6F7F9;" data-v-4fb8970e><span style="color:#000000;left:7px;" data-v-4fb8970e>10</span></div></div><div class="triangle" style="transform:rotate(288deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>1</span></div></div><div class="triangle" style="transform:rotate(324deg);" data-v-4fb8970e><div class="circle" style="background:#F6F7F9;" data-v-4fb8970e><span style="color:#000000;" data-v-4fb8970e>2</span></div></div><div class="triangle" style="transform:rotate(360deg);" data-v-4fb8970e><div class="circle" style="background:#42239A;" data-v-4fb8970e><span data-v-4fb8970e>3</span></div></div></div>',1),pe=[be];function me(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("section",ve,pe)}var ge={name:"UserList"};const he=(0,g.Z)(ge,[["render",me],["__scopeId","data-v-4fb8970e"]]);var ye=he,Ae=a(7875);const we=e=>((0,s.dD)("data-v-2a70fd66"),e=e(),(0,s.Cn)(),e),Ce=we((()=>(0,s._)("div",{class:"blur"},null,-1))),ke={class:"modal__wrapper"},_e=we((()=>(0,s._)("img",{src:$,alt:""},null,-1))),De=we((()=>(0,s._)("h1",null,"Пополнить баланс",-1))),Ee=we((()=>(0,s._)("p",null,"Для того чтобы начать играть, пополните пожалуйста свой баланс!",-1)));function Ue(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[Ce,(0,s._)("div",ke,[(0,s._)("img",{class:"close",src:Ae,alt:"",onClick:t[0]||(t[0]=(...e)=>i.display&&i.display(...e))}),_e,De,Ee,(0,s._)("button",{type:"button",onClick:t[1]||(t[1]=()=>{this.$router.push("/user-wallet")})},"Пополнить баланс")])],64)}var Te={methods:{display(){document.querySelector(".modal__wrapper").style.display="none",document.querySelector(".blur").style.display="none"}}};const xe=(0,g.Z)(Te,[["render",Ue],["__scopeId","data-v-2a70fd66"]]);var Se=xe,Be={components:{HomeUserList:ce,HomeSpin:ye,depositModal:Se},data(){return{bet:1,balance:0,backgroundAutostart:"#42239A",ButtonTextAutostart:"Autostart",backgroundPlay:"#26A17B",ButtonTextPlay:"Играть",playTimer:5,timerActive:!1}},computed:{...(0,p.Se)("UserModules",["getUserData"])},mounted(){""===this.getUserData.userEmail&&(document.querySelector(".nav__block--right").style.display="flex")},methods:{autostart(){"black"!==this.backgroundAutostart?(this.backgroundAutostart="black",this.ButtonTextAutostart="Stop"):(this.backgroundAutostart="#42239A",this.ButtonTextAutostart="Autostart")},play(){if(this.balance<1)document.querySelector(".modal__wrapper").style.display="flex",document.querySelector(".blur").style.display="flex";else if("#B1B1B1"!==this.backgroundPlay){this.backgroundPlay="#B1B1B1",this.ButtonTextPlay="Ожидание",this.timerActive=!0,this.playTimer=5;const e=setInterval((()=>{this.playTimer>0&&this.playTimer--}),1e3);setTimeout((()=>{this.backgroundPlay="#26A17B",this.ButtonTextPlay="Играть",clearInterval(e),this.timerActive=!1}),5e3)}},increment(){this.bet<1e3&&(this.bet<10?this.bet++:this.bet>9&&this.bet<100?this.bet+=10:this.bet>99&&(this.bet+=100))},decrement(){this.bet>1&&(this.bet<=10?this.bet--:this.bet>10&&this.bet<=100?this.bet-=10:this.bet>100&&(this.bet-=100))}}};const Fe=(0,g.Z)(Be,[["render",Y],["__scopeId","data-v-b7043174"]]);var Le=Fe;const Pe=[{path:"/",name:"home",component:Le},{path:"/registration",name:"Registration",component:()=>a.e(97).then(a.bind(a,7097))},{path:"/confirmation",name:"Confirmation",component:()=>a.e(821).then(a.bind(a,7821))},{path:"/confirmation-done",name:"ConfirmationDone",component:()=>a.e(201).then(a.bind(a,9383))},{path:"/login",name:"login",component:()=>a.e(91).then(a.bind(a,2091))},{path:"/password-update",name:"PasswordUpdate",component:()=>a.e(729).then(a.bind(a,5037))},{path:"/user-:afterUser(.*)",name:"UserMenu",component:()=>a.e(815).then(a.bind(a,6009))},{path:"/security",name:"SecurityView",component:()=>a.e(46).then(a.bind(a,4046))},{path:"/security-done",name:"SecurityDone",component:()=>a.e(469).then(a.bind(a,469))},{path:"/terms-of-use",name:"TermsOfUse",component:()=>a.e(616).then(a.bind(a,9616))},{path:"/privacy-policy",name:"PrivacyPolicy",component:()=>a.e(941).then(a.bind(a,3941))}],We=(0,P.p7)({history:(0,P.r5)(),routes:Pe,base:"/xd/"});var He=We;const Ne={namespaced:!0,actions:{},mutations:{setEmailAndPassword(e,t){e.UserData.userEmail=t.email,e.UserData.userPassword=t.password,e.UserData.userNickName=t.nickname}},state:{UserData:{userEmail:"",userPassword:"",userNickName:""}},getters:{getUserData(e){return e.UserData}}};var Xe=Ne;const je={namespaced:!0,actions:{},mutations:{setEmailAndPassword(e,t){e.UserData.userEmail=t.email,e.UserData.userPassword=t.password,e.UserData.userNickName=t.nickname}},state:{HistoryOperation:[{number:"0000001",date:"10.10.21 13:59",barter:"XDE / USDT",xde:130,usdt:130,status:"Выполнено"},{number:"0000002",date:"10.10.21 13:59",barter:"USDT / XDE",xde:30,usdt:30,status:"Выполнено"},{number:"0000003",date:"10.10.21 13:59",barter:"XDE / USDT",xde:30,usdt:30,status:"Выполнено"},{number:"0000004",date:"10.10.21 13:59",barter:"USDT / XDE",xde:50,usdt:50,status:"Просрочено"},{number:"0000005",date:"10.10.21 13:59",barter:"USDT / XDE",xde:30,usdt:30,status:"Выполнено"},{number:"0000006",date:"10.10.21 13:59",barter:"XDE / USDT",xde:30,usdt:30,status:"Выполнено"},{number:"0000007",date:"10.10.21 13:59",barter:"USDT / XDE",xde:80,usdt:80,status:"Просрочено"},{number:"0000008",date:"10.10.21 13:59",barter:"XDE / USDT",xde:110,usdt:110,status:"Выполнено"},{number:"0000009",date:"10.10.21 13:59",barter:"XDE / USDT",xde:310,usdt:310,status:"Выполнено"},{number:"0000010",date:"10.10.21 13:59",barter:"USDT / XDE",xde:10,usdt:10,status:"В ожидании"}]},getters:{getHistoryOperation(e){return e.HistoryOperation.reverse()}}};var Re=je,Me=(0,p.MT)({modules:{UserModules:Xe,historyOperationModules:Re}});(0,n.ri)(L).use(He).use(Me).mount("#app")},9877:function(e,t,a){e.exports=a.p+"img/Coin.9c5d36cc.svg"},7875:function(e,t,a){e.exports=a.p+"img/closeBtn.37474c41.svg"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{46:"29f2edd6",91:"43d33a8c",97:"ac6e7927",201:"1dc0725b",469:"3549655e",616:"fcda1681",729:"0d70703a",815:"7b5fd852",821:"2b36f695",941:"69ffa099"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{46:"e23016b2",91:"939048eb",97:"4c2d106e",201:"17ed42ee",469:"46d1786f",616:"1509682b",729:"59053e2a",815:"ca3c176e",821:"fefdc9eb",941:"66d03d82"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="xd:";a.l=function(n,s,r,i){if(e[n])e[n].push(s);else{var o,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+r){o=c;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var f=function(t,a){o.onerror=o.onload=null,clearTimeout(v);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/xd/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=i,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var s=a[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){s=i[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=function(n){return new Promise((function(s,r){var i=a.miniCssF(n),o=a.p+i;if(t(i,o))return s();e(n,o,null,s,r)}))},s={143:0};a.f.miniCss=function(e,t){var a={46:1,91:1,97:1,201:1,469:1,616:1,729:1,815:1,821:1,941:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=r);var i=a.p+a.u(t),o=new Error,l=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],l=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(t&&t(n);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkxd"]=self["webpackChunkxd"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1285)}));n=a.O(n)})();
//# sourceMappingURL=app.5a11e6f9.js.map