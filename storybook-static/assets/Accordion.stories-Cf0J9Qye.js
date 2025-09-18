import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-QQMyt9Ur.js";import{c as u}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function a({items:d,className:l}){const[s,m]=p.useState(null);return e.jsx("div",{className:u("divide-y rounded-md border",l),children:d.map((o,t)=>e.jsxs("div",{children:[e.jsxs("button",{className:"flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium hover:bg-slate-50",onClick:()=>m(s===t?null:t),children:[o.title,e.jsx("span",{className:"text-slate-400",children:s===t?"−":"+"})]}),s===t&&e.jsx("div",{className:"px-4 py-3 text-sm text-slate-700",children:o.content})]},t))})}a.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemProps"}],raw:"AccordionItemProps[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Layout/Accordion",component:a,tags:["autodocs"]},n={args:{items:[{title:"Sección 1",content:e.jsx("div",{children:"Contenido 1"})},{title:"Sección 2",content:e.jsx("div",{children:"Contenido 2"})}]}};var r,i,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Sección 1",
      content: <div>Contenido 1</div>
    }, {
      title: "Sección 2",
      content: <div>Contenido 2</div>
    }]
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,y as default};
