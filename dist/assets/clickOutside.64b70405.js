import{_ as o,d as i,k as n,C as d,o as _,c as r,a as c,f as u,t as l,G as p,p as v,e as f}from"./index.121f0641.js";const k={mounted(e,t){if(typeof t.value!="function")throw"callback must be a function";e.__handleClick__=function(s){e.contains(s.target)?t.value(!1):t.value(!0)},document.addEventListener("click",e.__handleClick__)},beforeUnmount(e){document.removeEventListener("click",e.__handleClick__)}};const h=i({directives:{clickoutside:k},setup(){const e=n("");return{sideStr:e,setData:s=>{s?e.value="outSide":e.value="inSide"}}}}),m=e=>(v("data-v-6f279eca"),e=e(),f(),e),S={class:"layout-container"},y={class:"layout-container-table"},B={class:"box"},D=m(()=>c("span",null,"InSide",-1)),x=[D];function C(e,t,s,I,$,b){const a=d("clickoutside");return _(),r("div",S,[c("div",y,[u(" \u70B9\u51FB\u72B6\u6001\uFF1A"+l(e.sideStr)+" ",1),p(c("div",B,x,512),[[a,e.setData]])])])}var E=o(h,[["render",C],["__scopeId","data-v-6f279eca"]]);export{E as default};