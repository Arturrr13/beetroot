import{g as p,L as i,r as l,u as m,i as f,c as r,a as e,t as o,x as c,F as v,z as g,o as n,_ as y}from"./entry.6fcdd752.js";import{u as d}from"./users.9ccf2738.js";const b={class:"content"},h={class:"posts__wrapper"},x=p({__name:"[id]",setup(U){const s=i(),_=l();m({title:`User №${s.params.id}`}),f(async()=>{const t=d();await t.getUser(s.params.id),_.value=t.user[0].userId});const u=d();return u.getUser(s.params.id),(t,S)=>(n(),r("div",b,[e("h1",null,"User №"+o(c(_)),1),e("div",h,[(n(!0),r(v,null,g(c(u).user,a=>(n(),r("div",{class:"post__wrapper",key:a.id},[e("h3",null,o(a.title),1),e("p",null,o(a.body),1)]))),128))])]))}});const B=y(x,[["__scopeId","data-v-bbe443a4"]]);export{B as default};
