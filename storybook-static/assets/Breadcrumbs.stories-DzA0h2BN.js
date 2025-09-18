import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function o({items:s,separator:m="/"}){return e.jsx("nav",{"aria-label":"Breadcrumb",className:"text-sm text-slate-600",children:e.jsx("ol",{className:"flex items-center gap-2",children:s.map((a,t)=>e.jsxs("li",{className:"flex items-center gap-2",children:[a.href?e.jsx("a",{href:a.href,className:"hover:text-slate-900",children:a.label}):e.jsx("span",{className:"text-slate-900",children:a.label}),t<s.length-1&&e.jsx("span",{className:"opacity-60",children:m})]},t))})})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}}}};const p={title:"Layout/Breadcrumbs",component:o,tags:["autodocs"]},r={args:{items:[{label:"Inicio",href:"#"},{label:"Usuarios",href:"#"},{label:"Detalle"}]}};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Inicio",
      href: "#"
    }, {
      label: "Usuarios",
      href: "#"
    }, {
      label: "Detalle"
    }]
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,p as default};
