import{T as w}from"./Task-ddff5ec8.js";import{d as f}from"./index-356e4a49.js";import"./vue.esm-bundler-00a9792d.js";import"./_plugin-vue_export-helper-c27b6911.js";let E;const M=new Uint8Array(16);function x(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(M)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function $(t,e=0){return r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]}const L=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:L};function j(t,e,n){if(m.randomUUID&&!e&&!t)return m.randomUUID();t=t||{};const o=t.random||(t.rng||x)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=o[s];return e}return $(o)}var B=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){let t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},H=(t=>(t.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",t.PREVIEW_CHANNELS="PREVIEW_CHANNELS",t.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",t.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",t.PREVIEW_API="PREVIEW_API",t.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",t.PREVIEW_ROUTER="PREVIEW_ROUTER",t.PREVIEW_THEMING="PREVIEW_THEMING",t.RENDERER_HTML="RENDERER_HTML",t.RENDERER_PREACT="RENDERER_PREACT",t.RENDERER_REACT="RENDERER_REACT",t.RENDERER_SERVER="RENDERER_SERVER",t.RENDERER_SVELTE="RENDERER_SVELTE",t.RENDERER_VUE="RENDERER_VUE",t.RENDERER_VUE3="RENDERER_VUE3",t.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",t))(H||{}),K=class extends B{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return f`
      We detected that you use an implicit action arg while ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};const{addons:G}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__;var C="storybook/actions",Y=`${C}/action-event`,z={depth:10,clearOnStoryChange:!0,limit:50},A=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:A(n,e)},F=t=>!!(typeof t=="object"&&t&&A(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),X=t=>{if(F(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(o.constructor.prototype)}),e}return t},q=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?j():Date.now().toString(36)+Math.random().toString(36).substring(2);function T(t,e={}){let n={...z,...e},o=function(...s){var p,u;if(e.implicit){let l=(p="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(l){let i=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),_=new K({phase:l.phase,name:t,deprecated:i});if(i)console.warn(_);else throw _}}let k=G.getChannel(),W=q(),b=5,R=s.map(X),U=s.length>1?R:R[0],v={id:W,count:0,data:{name:t,args:U},options:{...n,maxDepth:b+(n.depth||3),allowFunction:n.allowFunction||!1}};k.emit(Y,v)};return o.isAction=!0,o.implicit=e.implicit,o}const et={component:w,title:"Example/Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},nt={onPinTask:T("pin-task"),onArchiveTask:T("archive-task")},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...a.args.task,state:"TASK_PINNED"}}},d={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var I,g,D;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var N,O,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var y,P,V;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const rt=["actionsData","Default","Pinned","Archived"];export{d as Archived,a as Default,c as Pinned,rt as __namedExportsOrder,nt as actionsData,et as default};
