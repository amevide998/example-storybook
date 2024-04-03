import{T as b}from"./TaskList-f0a0f0ce.js";import{d as y,e as o,q as T,g as e,o as n}from"./vue.esm-bundler-00a9792d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{w as S,f as i}from"./index-14a6cef8.js";import"./PureTaskList-c58a19c0.js";import"./Task-ddff5ec8.js";import"./pinia-8f634dc1.js";const h={name:"PureInboxScreen",components:{TaskList:b},props:{error:{type:Boolean,default:!1}}},E={key:0,class:"page lists-show"},I=e("div",{class:"wrapper-message"},[e("span",{class:"icon-face-sad"}),e("p",{class:"title-message"},"Oh no!"),e("p",{class:"subtitle-message"},"Something went wrong")],-1),B=[I],L={key:1,class:"page lists-show"},P=e("nav",null,[e("h1",{class:"title-page"},"Taskbox")],-1);function N(c,r,v,V,$,O){const x=y("TaskList");return n(),o("div",null,[v.error?(n(),o("div",E,B)):(n(),o("div",L,[P,T(x)]))])}const D=w(h,[["render",N]]);h.__docgenInfo={displayName:"PureInboxScreen",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/vidi/Documents/storybook/example/src/components/task/PureInboxScreen.vue"]};const G={component:D,title:"PureInboxScreen",tags:["autodocs"]},s={},a={args:{error:!0}},t={play:async({canvasElement:c})=>{const r=S(c);await i.click(r.getByLabelText("pinTask-1")),await i.click(r.getByLabelText("pinTask-3"))}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,_;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};var f,g,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const H=["Default","Error","WithInteractions"];export{s as Default,a as Error,t as WithInteractions,H as __namedExportsOrder,G as default};
