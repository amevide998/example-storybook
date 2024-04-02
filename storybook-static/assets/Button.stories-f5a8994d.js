import{M as P}from"./Button-06d8357e.js";const B={title:"Example/Core/Button",component:P,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"inline-radio"},options:["small","medium","large"]},label:{control:"text",description:"Overwritten description"}},args:{label:"Default Button"}},e={component:P,args:{primary:!0,label:"Primary"}},r={args:{label:"Secondary"}},a={args:{size:"large",label:"Large"}},o={args:{size:"small",label:"small"}},s={parameters:{backgrounds:{values:[{name:"light",value:"#faa"},{name:"dark",value:"#3dd"}]},viewport:{defaultViewport:"mobile1"}}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  component: MyButton,
  args: {
    primary: true,
    label: 'Primary'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'small'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,v,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      values: [{
        name: 'light',
        value: '#faa'
      }, {
        name: 'dark',
        value: '#3dd'
      }]
    },
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const _=["Primary","Secondary","Large","Small","CustomParameter"],z=Object.freeze(Object.defineProperty({__proto__:null,CustomParameter:s,Large:a,Primary:e,Secondary:r,Small:o,__namedExportsOrder:_,default:B},Symbol.toStringTag,{value:"Module"}));export{z as B,e as P,r as S};
