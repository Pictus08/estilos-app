import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-QQMyt9Ur.js";import{c as o}from"./clsx-B-dksMZM.js";import{B as f}from"./Button-B98vyqz6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function a({open:t,side:r="right",onClose:h,children:g,className:x}){return t?e.jsxs("div",{className:o("fixed inset-0 z-50",x),children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px]",onClick:h}),e.jsx("div",{className:o("absolute top-0 h-full w-80 bg-white shadow-xl transition-transform duration-200",r==="right"?"right-0 translate-x-0":"left-0 translate-x-0"),children:g})]}):null}a.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Layout/Drawer",component:a,tags:["autodocs"]},n={render:()=>{const[t,r]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>r(!0),children:"Abrir"}),e.jsx(a,{open:t,onClose:()=>r(!1),side:"right",children:e.jsx("div",{className:"p-4",children:"Contenido del Drawer"})})]})}},s={render:()=>{const[t,r]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>r(!0),children:"Abrir"}),e.jsx(a,{open:t,onClose:()=>r(!1),side:"left",children:e.jsx("div",{className:"p-4",children:"Contenido del Drawer"})})]})}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)} side="right">\r
          <div className="p-4">Contenido del Drawer</div>\r
        </Drawer>\r
      </>;
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)} side="left">\r
          <div className="p-4">Contenido del Drawer</div>\r
        </Drawer>\r
      </>;
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["Right","Left"];export{s as Left,n as Right,O as __namedExportsOrder,N as default};
