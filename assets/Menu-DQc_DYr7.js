import{N as y}from"./NavTitle-CK0RrZJR.js";import{_ as p,o as a,c as n,a as t,h as w,t as d,p as f,b as g,r as u,F as $,i as k,w as I,v as M,d as m,n as S}from"./index-Dgm2w1J3.js";const b={props:{id:{type:Number,default:null},title:{type:String,default:"Название"},img:{type:String,default:"empty"},price:{type:String,default:"110"}},computed:{getImg(){return{"--image":`url('/keik-coffeeshop/src/assets/img/menu/${this.img}.png')`}}}},B=e=>(f("data-v-5ed5949e"),e=e(),g(),e),N={class:"menu__item"},C={class:"menu__item-info"},L={class:"menu__item-info__text"},V={class:"menu__item-title"},x={class:"menu__item-price"},T=B(()=>t("div",{class:"add"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1));function z(e,v,i,h,o,c){return a(),n("div",N,[t("div",{class:"menu__item-img",style:w(c.getImg)},null,4),t("div",C,[t("div",L,[t("div",V,d(i.title),1),t("div",x,d(i.price)+" ₽",1)]),T])])}const D=p(b,[["render",z],["__scopeId","data-v-5ed5949e"]]),F={props:{value:{type:String,default:"all"}},components:{MenuItem:D}},H={class:"menu-list"};function j(e,v,i,h,o,c){const l=u("MenuItem");return a(),n("ul",H,[(a(!0),n($,null,k(e.$store.getters.getMenu,(s,r)=>I((a(),n("li",{class:"menu-list__item",key:r},[m(l,{price:s.price,title:s.title,img:s.img,id:s.id},null,8,["price","title","img","id"])])),[[M,i.value==="all"||s.type===i.value]])),128))])}const E=p(F,[["render",j],["__scopeId","data-v-dc871b54"]]),q={components:{NavTitle:y,MenuBoard:E},data(){return{categories:[{name:"Все",value:"all"},{name:"Напитки",value:"drink"},{name:"Круассаны",value:"croissant"},{name:"Выпечка",value:"bakery"},{name:"Завтраки",value:"breakfast"},{name:"Салаты",value:"salad"},{name:"Десерты",value:"desert"}],selected:0,selectedValue:"all"}},methods:{select(e){this.selected=e,this.selectedValue=this.categories[e].value}}},A=e=>(f("data-v-6fc6112b"),e=e(),g(),e),G={class:"menu"},J={class:"filter"},K={class:"filter__wrapper"},O=A(()=>t("div",{class:"filter__title"},"Категория:",-1)),P={class:"filter__categories"},Q=["onClick"];function R(e,v,i,h,o,c){const l=u("NavTitle"),s=u("MenuBoard");return a(),n("div",G,[m(l,{title:"Наш ассортимент"}),t("div",J,[t("div",K,[O,t("ul",P,[(a(!0),n($,null,k(o.categories,(r,_)=>(a(),n("li",{key:_,class:S(["filter__category",{active:_===o.selected}]),onClick:U=>c.select(_)},d(r.name),11,Q))),128))])])]),m(s,{value:o.selectedValue},null,8,["value"])])}const Y=p(q,[["render",R],["__scopeId","data-v-6fc6112b"]]);export{Y as default};
