var x=Object.defineProperty,E=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(o,e,t)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,m=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&_(o,t,e[t]);if(u)for(var t of u(e))C.call(e,t)&&_(o,t,e[t]);return o},p=(o,e)=>E(o,k(e));import{y as I,L as J,r as h,I as n,ar as D,o as s,D as N,S as l,q as U,H as r,a1 as f,p as v,J as B}from"./index.4a448694.js";const y={class:"card-header"},A=B("\u53EA\u6709admin\u53EF\u770B"),F=[A],S=B("\u53EA\u6709test\u53EF\u770B"),T=[S],q={name:"permissionButton"},H=I(p(m({},q),{setup(o){const e=J(h.getItem("info").username||"admin");function t(a){h.setItem("info",{username:a,accessToken:`eyJhbGciOiJIUzUxMiJ9.${a}`}),window.location.reload()}return(a,c)=>{const i=n("el-radio-button"),g=n("el-radio-group"),V=n("el-card"),d=D("auth");return s(),N(V,null,{header:l(()=>[U("div",y,[r(g,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=b=>e.value=b),onChange:t},{default:l(()=>[r(i,{label:"admin"}),r(i,{label:"test"})]),_:1},8,["modelValue"])])]),default:l(()=>[f((s(),v("p",null,F)),[[d,"v-admin"]]),f((s(),v("p",null,T)),[[d,"v-test"]])]),_:1})}}}));export{H as default};