import{j as te}from"./jsx-runtime-DFKZ3ixi.js";import{g as ve,r as he}from"./index-SSXOyoI7.js";var re={};/*! For license information please see index.js.LICENSE.txt */(function(R){(()=>{var q={365:(t,o,i)=>{i.d(o,{A:()=>n});var c=i(601),f=i.n(c),y=i(314),m=i.n(y)()(f());m.push([t.id,`.vi {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  color: transparent;
  background: transparent;
  caret-color: transparent;
  outline: none;
  border: 0 none transparent;
}

.vi::-ms-reveal,
.vi::-ms-clear {
  display: none;
}

.vi::selection {
  background: transparent;
}

/* :where() gives the styles specificity 0, which makes them overridable */
:where(.vi__container) {
  position: relative;
  display: flex;
  gap: 8px;
  height: 50px;
  width: 300px;
}

:where(.vi__character) {
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  color: black;
  background-color: white;
  border: 1px solid black;
  cursor: default;
  user-select: none;
  box-sizing: border-box;
}

:where(.vi__character--inactive) {
  color: dimgray;
  background-color: lightgray;
}

:where(.vi__character--selected) {
  outline: 2px solid cornflowerblue;
  color: cornflowerblue;
}
`,""]);const n=m},314:t=>{t.exports=function(o){var i=[];return i.toString=function(){return this.map(function(c){var f="",y=c[5]!==void 0;return c[4]&&(f+="@supports (".concat(c[4],") {")),c[2]&&(f+="@media ".concat(c[2]," {")),y&&(f+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),f+=o(c),y&&(f+="}"),c[2]&&(f+="}"),c[4]&&(f+="}"),f}).join("")},i.i=function(c,f,y,m,n){typeof c=="string"&&(c=[[null,c,void 0]]);var d={};if(y)for(var g=0;g<this.length;g++){var E=this[g][0];E!=null&&(d[E]=!0)}for(var S=0;S<c.length;S++){var l=[].concat(c[S]);y&&d[l[0]]||(n!==void 0&&(l[5]===void 0||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),f&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=f),m&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=m):l[4]="".concat(m)),i.push(l))}},i}},601:t=>{t.exports=function(o){return o[1]}},942:(t,o)=>{var i;(function(){var c={}.hasOwnProperty;function f(){for(var n="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(n=m(n,y(g)))}return n}function y(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return f.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var d="";for(var g in n)c.call(n,g)&&n[g]&&(d=m(d,g));return d}function m(n,d){return d?n?n+" "+d:n+d:n}t.exports?(f.default=f,t.exports=f):(i=(function(){return f}).apply(o,[]))===void 0||(t.exports=i)})()}},P={};function v(t){var o=P[t];if(o!==void 0)return o.exports;var i=P[t]={id:t,exports:{}};return q[t](i,i.exports,v),i.exports}v.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return v.d(o,{a:o}),o},v.d=(t,o)=>{for(var i in o)v.o(o,i)&&!v.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},v.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),v.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var k={};(()=>{v.r(k),v.d(k,{default:()=>ne});const t=he;var o=v.n(t),i=v(942),c=v.n(i),f=v(365),y=["className","type"],m=["className"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var u=1;u<arguments.length;u++){var r=arguments[u];for(var p in r)({}).hasOwnProperty.call(r,p)&&(e[p]=r[p])}return e},n.apply(null,arguments)}function d(e,u){if(e==null)return{};var r,p,h=function(w,j){if(w==null)return{};var _={};for(var b in w)if({}.hasOwnProperty.call(w,b)){if(j.includes(b))continue;_[b]=w[b]}return _}(e,u);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(e);for(p=0;p<x.length;p++)r=x[p],u.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(h[r]=e[r])}return h}function g(e,u){return function(r){if(Array.isArray(r))return r}(e)||function(r,p){var h=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(h!=null){var x,w,j,_,b=[],A=!0,C=!1;try{if(j=(h=h.call(r)).next,p!==0)for(;!(A=(x=j.call(h)).done)&&(b.push(x.value),b.length!==p);A=!0);}catch(T){C=!0,w=T}finally{try{if(!A&&h.return!=null&&(_=h.return(),Object(_)!==_))return}finally{if(C)throw w}}return b}}(e,u)||E(e,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function E(e,u){if(e){if(typeof e=="string")return S(e,u);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,u):void 0}}function S(e,u){(u==null||u>e.length)&&(u=e.length);for(var r=0,p=Array(u);r<u;r++)p[r]=e[r];return p}var l=(0,t.forwardRef)(function(e,u){var r=e.value,p=e.length,h=p===void 0?6:p,x=e.validChars,w=x===void 0?"A-Za-z0-9":x,j=e.placeholder,_=j===void 0?"·":j,b=e.autoFocus,A=b!==void 0&&b,C=e.passwordMode,T=C!==void 0&&C,L=e.passwordChar,oe=L===void 0?"*":L,U=e.inputProps,I=U===void 0?{}:U,V=e.containerProps,$=V===void 0?{}:V,H=e.classNames,N=H===void 0?{}:H,K=e.onChange,Z=e.onFocus,G=e.onBlur,J=e.onComplete,Q=g((0,t.useState)(""),2),ae=Q[0],ie=Q[1],W=g((0,t.useState)(!1),2),ce=W[0],z=W[1],M=(0,t.useRef)(null);(0,t.useEffect)(function(){A&&M.current.focus()},[A]),(0,t.useEffect)(function(){I.disabled&&z(!1)},[I.disabled]);var F,le=function(){M.current.focus()},O=function(){return r??ae},X=function(a){var s=O();return(s.length===a||s.length===a+1&&h===a+1)&&ce},Y=function(a){return O().length<a},ee=function(a){return O().length>a},ue=I.className,se=I.type,fe=d(I,y),de=$.className,pe=d($,m);return o().createElement(o().Fragment,null,o().createElement("div",n({"data-testid":"container",className:c()("vi__container",N.container,de),onClick:function(){return M.current.focus()}},pe),o().createElement("input",n({"aria-label":"verification input",spellCheck:!1,value:O(),onChange:function(a){var s=a.target.value.replace(/\s/g,"");RegExp("^[".concat(w,"]{0,").concat(h,"}$")).test(s)&&(K==null||K(s),ie(s),s.length===h&&(J==null||J(s)))},ref:function(a){M.current=a,typeof u=="function"?u(a):u&&(u.current=a)},className:c()("vi",ue),onKeyDown:function(a){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.key)&&a.preventDefault()},onFocus:function(){z(!0),Z==null||Z()},onBlur:function(){z(!1),G==null||G()},onSelect:function(a){var s=a.target.value;a.target.setSelectionRange(s.length,s.length)},type:T?"password":se},fe)),(F=Array(h),function(a){if(Array.isArray(a))return S(a)}(F)||function(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}(F)||E(F)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()).map(function(a,s){return o().createElement("div",{className:c()("vi__character",N.character,{"vi__character--selected":X(s),"vi__character--inactive":Y(s),"vi__character--filled":ee(s)},X(s)&&N.characterSelected,Y(s)&&N.characterInactive,ee(s)&&N.characterFilled),onClick:le,id:"field-".concat(s),"data-testid":"character-".concat(s),key:s},T&&O()[s]?oe:O()[s]||_)})),o().createElement("style",{dangerouslySetInnerHTML:{__html:f.A}}))});l.displayName="VerificationInput";const ne=l})();var D=R;for(var B in k)D[B]=k[B];k.__esModule&&Object.defineProperty(D,"__esModule",{value:!0})})()})(re);const ge=ve(re);function ye({length:R,validCharacters:q,onComplete:P}){return te.jsx("div",{className:" ",children:te.jsx(ge,{length:R,validChars:q,placeholder:" ",autoFocus:!0,onComplete:P,classNames:{character:"token-character"}})})}ye.__docgenInfo={description:"",methods:[],displayName:"TokenInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},length:{required:!0,tsType:{name:"number"},description:""},validCharacters:{required:!0,tsType:{name:"string"},description:""}}};export{ye as T};
