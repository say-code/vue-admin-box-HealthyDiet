import{_ as n,d as l,C as i,o as u,c as d,G as v,a as _,f}from"./index.121f0641.js";const h={mounted(o,e){e.value?e.value:e.value={},p(e.value.text,o,e.value.font,e.value.textColor)}};function p(o,e,r,s){var t=document.createElement("canvas");e.appendChild(t),t.width=200,t.height=150,t.style.display="none";var a=t.getContext("2d");a.rotate(-20*Math.PI/180),a.font=r||"16px Microsoft JhengHei",a.fillStyle=s||"rgba(180, 180, 180, 0.3)",a.textAlign="left",a.textBaseline="middle",a.fillText(o||"vue-admin-box",t.width/10,t.height/2),e.style.backgroundImage="url("+t.toDataURL("image/png")+")"}const x=l({directives:{WaterMarker:h},setup(){}}),m={class:"layout-container"},k={class:"layout-container-table"},M=f(" \u6211\u662F\u4E00\u4E2A\u6C34\u5370\u9875\u9762 "),w=[M];function y(o,e,r,s,t,a){const c=i("waterMarker");return u(),d("div",m,[v(_("div",k,w,512),[[c]])])}var g=n(x,[["render",y]]);export{g as default};