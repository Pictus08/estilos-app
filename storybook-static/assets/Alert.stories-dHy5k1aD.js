import{j as S}from"./jsx-runtime-Cf8x2fCZ.js";import{c as h}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";function v({variant:b="info",children:x,className:y}){const w={info:"bg-sky-50 text-sky-800 border-sky-200",success:"bg-emerald-50 text-emerald-800 border-emerald-200",warning:"bg-amber-50 text-amber-800 border-amber-200",error:"bg-danger/10 text-danger border-danger/30"};return S.jsx("div",{className:h("rounded-lg border px-4 py-3 text-sm shadow-sm",w[b],y),children:x})}v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Feedback/Alert",component:v,args:{children:"Mensaje de alerta"},tags:["autodocs"]},r={args:{variant:"info"}},e={args:{variant:"success"}},a={args:{variant:"warning"}},s={args:{variant:"error"}};var n,o,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "info"
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const _=["Info","Success","Warning","Error"];export{s as Error,r as Info,e as Success,a as Warning,_ as __namedExportsOrder,N as default};
