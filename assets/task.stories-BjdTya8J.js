import{j as r}from"./jsx-runtime-DFKZ3ixi.js";import"./index-SSXOyoI7.js";function u(t){return r.jsx("div",{className:"list-item",children:r.jsx("label",{htmlFor:`title-${t.id}`,"aria-label":t.title,children:r.jsx("input",{type:"text",value:t.title,readOnly:!0,name:"title",id:`title-${t.id}`})})})}u.__docgenInfo={description:"",methods:[],displayName:"Task",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},state:{required:!0,tsType:{name:"string"},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const p={onArchiveTask:()=>{},onPinTask:()=>{}},g={component:u,title:"Composites/Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...p}},e={args:{task:{id:"1",title:"Task Task",state:"TASK_PINNED"}}},s={args:{task:{...e.args.task,state:"TASK_ARCHIVED"}}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Task Task",
      state: "TASK_PINNED"
    }
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["ActionsData","Default","Archived"];export{p as ActionsData,s as Archived,e as Default,T as __namedExportsOrder,g as default};
