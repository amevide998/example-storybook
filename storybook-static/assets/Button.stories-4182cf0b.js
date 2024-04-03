import{M}from"./Button-1f1b7278.js";const w={title:"Example/Core/Button",component:M,tags:["autodocs"],argTypes:{onClick:{},size:{control:{type:"inline-radio"},options:["small","medium","large"]},label:{control:"text",description:"Overwritten description"}},args:{label:"Default Button"}},e={component:M,args:{primary:!0,label:"Primary"}},r={args:{label:"Secondary"}},a={args:{size:"large",label:"Large"}},o={args:{size:"small",label:"small"}},s={parameters:{viewport:{defaultViewport:"mobile1"}}},t={decorators:[P=>({components:{story:P},template:'<div style="margin: 3em; border= 1px solid red"><story /></div>'})]};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  component: MyButton,
  args: {
    primary: true,
    label: 'Primary'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'small'
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var B,v,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,x,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [story => ({
    components: {
      story
    },
    template: '<div style="margin: 3em; border= 1px solid red"><story /></div>'
  })]
}`,...(z=(x=t.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const L=["Primary","Secondary","Large","Small","MobileScreen","DecoratorButton"],D=Object.freeze(Object.defineProperty({__proto__:null,DecoratorButton:t,Large:a,MobileScreen:s,Primary:e,Secondary:r,Small:o,__namedExportsOrder:L,default:w},Symbol.toStringTag,{value:"Module"}));export{D as B,e as P,r as S};
