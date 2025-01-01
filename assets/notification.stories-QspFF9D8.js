import{j as e}from"./jsx-runtime-DFKZ3ixi.js";import"./index-SSXOyoI7.js";function n(t){return e.jsx("div",{className:"flex flex-col p-8 bg-white shadow-md hover:shadow-lg rounded-2xl",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex flex-col ml-3",children:[e.jsx("div",{className:"font-medium leading-none text-black",id:`title-${t.id}`,children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 leading-none mt-1",children:t.message})]})}),e.jsx("button",{onClick:t.onClose,className:"flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full",children:"Close"})]})})}n.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const a={onClose:()=>{}},c={component:n,title:"Design System/v1/Atoms/Notifications",tags:["autodocs"],excludeStories:/.*Data$/,args:{...a}},s={args:{id:"1",title:"Important Notification",message:"You have a new Notification"}};var i,o,r;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "1",
    title: "Important Notification",
    message: "You have a new Notification"
  }
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["ActionData","Default"];export{a as ActionData,s as Default,m as __namedExportsOrder,c as default};
