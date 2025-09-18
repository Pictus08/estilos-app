import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-QQMyt9Ur.js";import{c as v}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function u({name:m,options:p,value:d,onChange:s,className:c}){const n=f.useId();return a.jsx("div",{className:v("flex flex-col gap-2",c),role:"radiogroup",children:p.map(e=>{const t=`${n}-${e.value}`;return a.jsxs("label",{htmlFor:t,className:"inline-flex items-center gap-2",children:[a.jsx("input",{id:t,type:"radio",name:m||n,value:String(e.value),checked:d===e.value,onChange:g=>s==null?void 0:s(g.target.value),className:"h-4 w-4 border-slate-300 text-secondary focus:ring-secondary"}),a.jsx("span",{className:"text-sm text-slate-700",children:e.label})]},e.value)})})}u.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Base/RadioGroup",component:u,tags:["autodocs"]},r={args:{options:[{label:"Uno",value:"1"},{label:"Dos",value:"2"}]}};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Uno",
      value: "1"
    }, {
      label: "Dos",
      value: "2"
    }]
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,R as default};
