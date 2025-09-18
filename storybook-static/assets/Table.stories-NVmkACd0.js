import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as T}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";function a({children:s,className:m}){return e.jsx("div",{className:T("overflow-x-auto",m),children:e.jsx("table",{className:"min-w-full divide-y divide-slate-200",children:s})})}function l({children:s}){return e.jsx("thead",{className:"bg-slate-50 text-left text-sm text-slate-600",children:s})}function p({children:s}){return e.jsx("tbody",{className:"divide-y divide-slate-200 text-sm text-slate-800",children:s})}function d({children:s}){return e.jsx("tr",{className:"odd:bg-white even:bg-slate-50/50 hover:bg-slate-50",children:s})}function t({children:s}){return e.jsx("th",{className:"px-4 py-2 font-semibold text-slate-700",children:s})}function r({children:s}){return e.jsx("td",{className:"px-4 py-2",children:s})}a.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"THead",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"TBody",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"TR",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"TH",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"TD",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const f={title:"Datos/Table",component:a,tags:["autodocs"]},n={render:()=>e.jsxs(a,{children:[e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(t,{children:"Nombre"}),e.jsx(t,{children:"Edad"})]})}),e.jsxs(p,{children:[e.jsxs(d,{children:[e.jsx(r,{children:"Ana"}),e.jsx(r,{children:"28"})]}),e.jsxs(d,{children:[e.jsx(r,{children:"Juan"}),e.jsx(r,{children:"34"})]})]})]})};var i,o,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Table>\r
      <THead>\r
        <TR>\r
          <TH>Nombre</TH>\r
          <TH>Edad</TH>\r
        </TR>\r
      </THead>\r
      <TBody>\r
        <TR>\r
          <TD>Ana</TD>\r
          <TD>28</TD>\r
        </TR>\r
        <TR>\r
          <TD>Juan</TD>\r
          <TD>34</TD>\r
        </TR>\r
      </TBody>\r
    </Table>
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const y=["Basic"];export{n as Basic,y as __namedExportsOrder,f as default};
