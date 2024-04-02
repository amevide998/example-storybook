import{r as M,l as T,d as I,e as o,g as B,n as j,o as N}from"./vue.esm-bundler-1e5d12c2.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{d as L}from"./index-356e4a49.js";const x={name:"Task",props:{task:{type:Object,required:!0,default:()=>({id:"",state:"",title:""}),validator:t=>["id","state","title"].every(e=>e in t)}},emits:["archive-task","pin-task"],setup(t,{emit:e}){return t=M(t),{classes:T(()=>({"list-item TASK_INBOX":t.task.state==="TASK_INBOX","list-item TASK_PINNED":t.task.state==="TASK_PINNED","list-item TASK_ARCHIVED":t.task.state==="TASK_ARCHIVED"})),isChecked:T(()=>t.task.state==="TASK_ARCHIVED"),archiveTask(){e("archive-task",t.task.id)},pinTask(){e("pin-task",t.task.id)}}}},G=["for","aria-label"],z=["checked","name","id"],F=["for","aria-label"],X=["value","id"],Y=["id","aria-label"],$=o("span",{class:"icon-star"},null,-1),q=[$];function J(t,e,a,n,i,u){return N(),I("div",{class:j(n.classes)},[o("label",{for:"checked"+a.task.id,"aria-label":"archiveTask-"+a.task.id,class:"checkbox"},[o("input",{type:"checkbox",checked:n.isChecked,disabled:"",name:"checked"+a.task.id,id:"archiveTask-"+a.task.id},null,8,z),o("span",{class:"checkbox-custom",onClick:e[0]||(e[0]=(...c)=>n.archiveTask&&n.archiveTask(...c))})],8,G),o("label",{for:"title-"+a.task.id,"aria-label":a.task.title,class:"title"},[o("input",{type:"text",readonly:"",value:a.task.title,id:"title-"+a.task.id,name:"title",placeholder:"Input title"},null,8,X)],8,F),n.isChecked?B("",!0):(N(),I("button",{key:0,class:"pin-button",onClick:e[1]||(e[1]=(...c)=>n.pinTask&&n.pinTask(...c)),id:"pinTask-"+a.task.id,"aria-label":"pinTask-"+a.task.id},q,8,Y))],2)}const Q=H(x,[["render",J]]);x.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:`{
  id: '',
  state: '',
  title: ''
}`}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/home/vidi/Documents/storybook/example/src/components/task/Task.vue"]};let E;const Z=new Uint8Array(16);function tt(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(Z)}const s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));function et(t,e=0){return s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]}const at=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),D={randomUUID:at};function nt(t,e,a){if(D.randomUUID&&!e&&!t)return D.randomUUID();t=t||{};const n=t.random||(t.rng||tt)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){a=a||0;for(let i=0;i<16;++i)e[a+i]=n[i];return e}return et(n)}var st=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){let t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},it=(t=>(t.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",t.PREVIEW_CHANNELS="PREVIEW_CHANNELS",t.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",t.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",t.PREVIEW_API="PREVIEW_API",t.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",t.PREVIEW_ROUTER="PREVIEW_ROUTER",t.PREVIEW_THEMING="PREVIEW_THEMING",t.RENDERER_HTML="RENDERER_HTML",t.RENDERER_PREACT="RENDERER_PREACT",t.RENDERER_REACT="RENDERER_REACT",t.RENDERER_SERVER="RENDERER_SERVER",t.RENDERER_SVELTE="RENDERER_SVELTE",t.RENDERER_VUE="RENDERER_VUE",t.RENDERER_VUE3="RENDERER_VUE3",t.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",t))(it||{}),ot=class extends st{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return L`
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
    `}};const{addons:rt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var ct="storybook/actions",dt=`${ct}/action-event`,Et={depth:10,clearOnStoryChange:!0,limit:50},U=(t,e)=>{let a=Object.getPrototypeOf(t);return!a||e(a)?a:U(a,e)},lt=t=>!!(typeof t=="object"&&t&&U(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),Rt=t=>{if(lt(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let a=Object.getOwnPropertyDescriptor(e,"view"),n=a==null?void 0:a.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...a,value:Object.create(n.constructor.prototype)}),e}return t},ut=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?nt():Date.now().toString(36)+Math.random().toString(36).substring(2);function S(t,e={}){let a={...Et,...e},n=function(...i){var m,p;if(e.implicit){let k=(m="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(k){let d=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),h=new ot({phase:k.phase,name:t,deprecated:d});if(d)console.warn(h);else throw h}}let u=rt.getChannel(),c=ut(),w=5,_=i.map(Rt),C=i.length>1?_:_[0],K={id:c,count:0,data:{name:t,args:C},options:{...a,maxDepth:w+(a.depth||3),allowFunction:a.allowFunction||!1}};u.emit(dt,K)};return n.isAction=!0,n.implicit=e.implicit,n}const kt={component:Q,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},ht={onPinTask:S("pin-task"),onArchiveTask:S("archive-task")},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},l={args:{task:{...r.args.task,state:"TASK_PINNED"}}},R={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var y,A,O;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var V,P,b;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(b=(P=l.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var v,f,W;R.parameters={...R.parameters,docs:{...(v=R.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(W=(f=R.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const Tt=["actionsData","Default","Pinned","Archived"];export{R as Archived,r as Default,l as Pinned,Tt as __namedExportsOrder,ht as actionsData,kt as default};
