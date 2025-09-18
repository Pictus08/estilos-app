import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-QQMyt9Ur.js";import{c as x}from"./clsx-B-dksMZM.js";import{c as A}from"./styles-A_eUlop0.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=S.forwardRef(({className:u,options:l,children:d,multiple:b,...g},v)=>n.jsx("select",{ref:v,multiple:b,className:x(A,u),...g,children:l?l.map((s,f)=>n.jsx("option",{value:s.value,children:s.label},f)):d}));r.displayName="Select";r.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["SelectHTMLAttributes"]};const _={title:"Base/Select",component:r,tags:["autodocs"]},e={args:{options:[{label:"Opción A",value:"A"},{label:"Opción B",value:"B"}]}},a={args:{multiple:!0,options:[{label:"Rojo",value:"red"},{label:"Azul",value:"blue"},{label:"Verde",value:"green"}]}};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Opción A",
      value: "A"
    }, {
      label: "Opción B",
      value: "B"
    }]
  }
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    multiple: true,
    options: [{
      label: "Rojo",
      value: "red"
    }, {
      label: "Azul",
      value: "blue"
    }, {
      label: "Verde",
      value: "green"
    }]
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const h=["Single","Multiple"];export{a as Multiple,e as Single,h as __namedExportsOrder,_ as default};
