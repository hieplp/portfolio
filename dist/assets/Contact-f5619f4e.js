import{C as f,_ as g,S as m}from"./AnimatedLink.vue_vue_type_script_setup_true_lang-722724f7.js";import{d as x,i as w,o as a,e as c,j as v,b as t,n as k,c as b,w as l,a as r,u as n,C as e,t as u,F as C,r as y}from"./index-1085b303.js";const $={class:"flex items-center justify-center h-6 w-6 text-xs text-neutral-300 group-hover:text-neutral-500 group"},T={key:0,class:"w-3 h-3 text-green-500 stroke-current",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24","x-cloak":"",xmlns:"http://www.w3.org/2000/svg"},j=t("path",{d:"M4.5 12.75l6 6 9-13.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),B=[j],S={key:1,class:"w-4 h-4 stroke-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},M=t("g",{fill:"none",stroke:"none"},[t("path",{d:"M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),t("path",{d:"M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})],-1),L=[M],h=x({__name:"CopyText",props:{textToCopy:{type:String,required:!0}},setup(d){const i=d,o=w(!1),p=()=>{o.value=!0,navigator.clipboard.writeText(i.textToCopy),setTimeout(()=>{o.value=!1},1e3)};return(s,_)=>(a(),c("div",{class:k([{"tooltip tooltip-open":o.value},"relative w-fit tooltip-right flex items-center group hover:cursor-pointer"]),"data-tip":"Copied!",onClick:p},[v(s.$slots,"default"),t("button",$,[o.value?(a(),c("svg",T,B)):(a(),c("svg",S,L))])],2))}}),N={class:"w-full space-y-12"},V=t("p",{class:"text-3xl md:mb-16 pb-2 border-b-4"}," /*my contact*/ ",-1),z={class:"grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0"},A={class:"col-span-1 flex flex-col gap-5"},F={class:"flex flex-row gap-2 text-lg"},q=t("p",{class:""},"e-mail:",-1),D={class:"font-bold text-white"},E={class:"flex flex-row gap-2 text-lg"},O=t("p",{class:""},"phone:",-1),P={class:"font-bold text-white"},G={class:"flex flex-col md:flex-row col-span-1 gap-2 md:gap-12"},H=t("p",{class:"text-lg"},"social media",-1),I={class:"flex flex-col gap-5"},Q=x({__name:"Contact",setup(d){const i=[e.github,e.facebook];return(o,p)=>(a(),b(m,{class:"bg-[url('src/assets/b3.jpg')] bg-cover bg-center"},{default:l(()=>[r(f,null,{default:l(()=>[t("div",N,[V,t("div",z,[t("div",A,[r(h,{"text-to-copy":n(e).gmail.label},{default:l(()=>[t("div",F,[q,t("p",D,u(n(e).gmail.label),1)])]),_:1},8,["text-to-copy"]),r(h,{"text-to-copy":n(e).phone.label},{default:l(()=>[t("div",E,[O,t("p",P,u(n(e).phone.label),1)])]),_:1},8,["text-to-copy"])]),t("div",G,[H,t("div",I,[(a(),c(C,null,y(i,(s,_)=>r(g,{key:_,"data-tip":s.url,icon:["fas","arrow-right"],"is-external":!0,text:s.label,to:s.url,class:"font-bold text-white text-lg tooltip"},null,8,["data-tip","text","to"])),64))])])])])]),_:1})]),_:1}))}});export{Q as default};