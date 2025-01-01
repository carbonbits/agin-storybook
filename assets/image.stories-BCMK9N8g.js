import{j as R}from"./jsx-runtime-DFKZ3ixi.js";import"./index-SSXOyoI7.js";function l({src:n,alt:F,width:P,height:z,className:V,rounded:_="none",objectFit:N="cover",objectPosition:O="center",border:$,boxShadow:B,placeholder:c,loading:D="lazy",hoverEffect:H=!1,aspectRatio:d}){const k={none:"",small:"rounded-sm",medium:"rounded-md",large:"rounded-lg",full:"rounded-full"}[_],A={objectFit:N,objectPosition:O,border:$,boxShadow:B,aspectRatio:d?`calc(${d})`:void 0};return R.jsx("img",{src:n,alt:F,width:P,height:z,className:`${V} ${k} ${H?"transition-transform hover:scale-105":""}`,style:A,onError:L=>{c&&(L.target.src=c)},loading:D})}l.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'none' | 'scale-down'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'none'"},{name:"literal",value:"'scale-down'"}]},description:"",defaultValue:{value:"'cover'",computed:!1}},objectPosition:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'center'",computed:!1}},border:{required:!1,tsType:{name:"string"},description:""},boxShadow:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}]},description:"",defaultValue:{value:"'lazy'",computed:!1}},hoverEffect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Components/Image",component:l,argTypes:{src:{control:"text",description:"The image source URL."},alt:{control:"text",description:"The alt text for the image."},width:{control:"text",description:"The width of the image (inline or CSS-controlled)."},height:{control:"text",description:"The height of the image (inline or CSS-controlled)."},className:{control:"text",description:"CSS class to apply to the image."},rounded:{control:"select",options:["none","small","medium","large","full"],description:"The border radius of the image."},objectFit:{control:"select",options:["cover","contain","fill","none","scale-down"],description:"Defines how the image should fit within its dimensions."},objectPosition:{control:"text",description:'Sets the alignment of the image inside its container (e.g., "center", "top left").'},border:{control:"text",description:"Custom border styling for the image."},boxShadow:{control:"text",description:"Custom box shadow styling for the image."},placeholder:{control:"text",description:"URL of the fallback placeholder image."},loading:{control:"select",options:["eager","lazy"],description:"Specifies the loading behavior of the image."},hoverEffect:{control:"boolean",description:"Enable hover effect to scale the image slightly."},aspectRatio:{control:"text",description:'Maintains the aspect ratio of the image (e.g., "16 / 9").'}}},e=n=>R.jsx(l,{...n}),r=e.bind({});r.args={src:"https://via.placeholder.com/150",alt:"Placeholder Image",width:150,height:150};const a=e.bind({});a.args={src:"https://via.placeholder.com/150",alt:"Rounded Image",width:150,height:150,rounded:"medium"};const t=e.bind({});t.args={src:"https://via.placeholder.com/300",alt:"Object Fit Cover",width:300,height:150,objectFit:"cover"};const o=e.bind({});o.args={src:"https://via.placeholder.com/150",alt:"Hover Effect Image",width:150,height:150,hoverEffect:!0};const s=e.bind({});s.args={src:"https://invalid-url.com",alt:"Fallback Placeholder",placeholder:"https://via.placeholder.com/150",width:150,height:150};const i=e.bind({});i.args={src:"https://via.placeholder.com/150",alt:"Custom Border and Shadow",width:150,height:150,border:"2px solid #000",boxShadow:"0px 4px 10px rgba(0,0,0,0.2)"};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Image {...args} />",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Image {...args} />",...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,b,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Image {...args} />",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,x,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Image {...args} />",...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,I,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Image {...args} />",...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var C,j,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Image {...args} />",...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const G=["Default","RoundedImage","ObjectFitCover","WithHoverEffect","PlaceholderImage","CustomBorderAndShadow"];export{i as CustomBorderAndShadow,r as Default,t as ObjectFitCover,s as PlaceholderImage,a as RoundedImage,o as WithHoverEffect,G as __namedExportsOrder,M as default};
