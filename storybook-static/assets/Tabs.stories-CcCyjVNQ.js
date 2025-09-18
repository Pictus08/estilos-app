import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-QQMyt9Ur.js";import{c as r}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function c({items:o,defaultIndex:m=0,className:p}){var a;const[s,u]=b.useState(m);return e.jsxs("div",{className:p,children:[e.jsx("div",{className:"flex gap-2 border-b border-slate-200",children:o.map((x,t)=>e.jsxs("button",{className:r("relative px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors",t===s&&"text-secondary"),onClick:()=>u(t),children:[x.label,e.jsx("span",{className:r("absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-transparent transition-colors",t===s&&"bg-secondary")})]},t))}),e.jsx("div",{className:"pt-3",children:(a=o[s])==null?void 0:a.content})]})}c.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},defaultIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Layout/Tabs",component:c,tags:["autodocs"]},n={args:{items:[{label:"Uno",content:e.jsx("div",{children:"Contenido 1"})},{label:"Dos",content:e.jsx("div",{children:"Contenido 2"})},{label:"Tres",content:e.jsx("div",{children:"Contenido 3"})}]}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Uno",
      content: <div>Contenido 1</div>
    }, {
      label: "Dos",
      content: <div>Contenido 2</div>
    }, {
      label: "Tres",
      content: <div>Contenido 3</div>
    }]
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,g as default};
