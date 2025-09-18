import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-QQMyt9Ur.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-B98vyqz6.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function n({open:s,onClose:t,children:d,className:c}){return s?e.jsxs("div",{className:p("fixed inset-0 z-50 flex items-center justify-center",c),children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:t}),e.jsx("div",{className:"relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl",children:d})]}):null}n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Layout/Modal",component:n,tags:["autodocs"]},r={render:()=>{const[s,t]=m.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>t(!0),children:"Abrir modal"}),e.jsxs(n,{open:s,onClose:()=>t(!1),children:[e.jsx("h3",{className:"mb-2 text-base font-semibold",children:"Modal"}),e.jsx("p",{className:"mb-4 text-sm text-slate-600",children:"Contenido del modal."}),e.jsx("div",{className:"text-right",children:e.jsx(a,{variant:"secondary",onClick:()=>t(!1),children:"Cerrar"})})]})]})}};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>\r
        <Modal open={open} onClose={() => setOpen(false)}>\r
          <h3 className="mb-2 text-base font-semibold">Modal</h3>\r
          <p className="mb-4 text-sm text-slate-600">Contenido del modal.</p>\r
          <div className="text-right">\r
            <Button variant="secondary" onClick={() => setOpen(false)}>\r
              Cerrar\r
            </Button>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Basic"];export{r as Basic,C as __namedExportsOrder,j as default};
