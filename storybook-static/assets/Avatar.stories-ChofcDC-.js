import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{c as l}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";function x(e){var t,r;if(!e)return"";const s=e.trim().split(/\s+/),a=((t=s[0])==null?void 0:t[0])??"",n=((r=s[s.length-1])==null?void 0:r[0])??"";return(a+n).toUpperCase()}function h({src:e,alt:s,name:a,size:n=40,className:t}){const r={width:n,height:n};return e?c.jsx("img",{src:e,alt:s||a||"avatar",className:l("rounded-full object-cover",t),style:r}):c.jsx("div",{className:l("flex items-center justify-center rounded-full bg-slate-200 text-slate-700",t),style:r,children:c.jsx("span",{className:"text-sm font-medium",children:x(a)})})}h.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Extras/Avatar",component:h,tags:["autodocs"]},i={args:{src:"https://i.pravatar.cc/80",alt:"Usuario",size:48}},o={args:{name:"Ada Lovelace",size:48}};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/80",
    alt: "Usuario",
    size: 48
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "Ada Lovelace",
    size: 48
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["WithImage","WithInitials"];export{i as WithImage,o as WithInitials,A as __namedExportsOrder,q as default};
