import{y as N,t as b,cq as q,N as w,O as A,z as I,Y as S,K as T,L as x,I as s,o as _,D as H,S as a,p as L,A as P,F as R,H as l,J as i,G as d,C as n,q as F,cr as h,a7 as f}from"./index.4a448694.js";import{s as U}from"./index.4fddcf38.js";const V=F("div",null,"\u6807\u7B7E\u9875\u590D\u7528\uFF0C\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED\uFF08\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531\uFF09",-1),$=i("\u5173\u95ED\u6807\u7B7E"),K=N({setup(z){let r=b(()=>q(w(A().menusTree),0,{disabled:!0}));const{t:p}=I(),v=S(),E=T(),c=x([]);function g(t){f().handleTags("push",{path:"/tabs/detail",parentPath:v.matched[0].path,name:"tabDetail",query:{id:String(t)},meta:{title:{zh:`No.${t} - \u8BE6\u60C5\u4FE1\u606F`,en:`No.${t} - DetailInfo`},showLink:!1,dynamicLevel:3}}),E.push({name:"tabDetail",query:{id:String(t)}})}function C(){c.value.forEach(t=>{var u;let o=(u=h(r.value,t).redirect)!=null?u:h(r.value,t).path;f().handleTags("splice",o)})}return(t,o)=>{const u=s("el-button"),D=s("el-divider"),B=s("el-tag"),k=s("el-card");return _(),H(k,null,{header:a(()=>[V]),default:a(()=>[(_(),L(R,null,P(6,e=>l(u,{key:e,onClick:m=>g(e)},{default:a(()=>[i(" \u6253\u5F00"+d(e)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64)),l(D),l(n(U),{class:"w-300px",value:c.value,"onUpdate:value":o[0]||(o[0]=e=>c.value=e),"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"\u8BF7\u9009\u62E9\u8981\u5173\u95ED\u7684\u6807\u7B7E",fieldNames:{children:"children",key:"uniqueId",value:"uniqueId"},"allow-clear":"",multiple:"","tree-default-expand-all":"","tree-data":n(r)},{tagRender:a(({closable:e,onClose:m,option:y})=>[l(B,{class:"mr-3px",closable:e,onClose:m},{default:a(()=>[i(d(n(p)(y.meta.title)),1)]),_:2},1032,["closable","onClose"])]),title:a(({data:e})=>[F("span",null,d(n(p)(e.meta.title)),1)]),_:1},8,["value","tree-data"]),l(u,{class:"ml-2",onClick:C},{default:a(()=>[$]),_:1})]),_:1})}}});export{K as default};