import{s as l,u,e as f}from"./index-14a6cef8.js";import{e as c,g as o,t as v,l as k,o as m}from"./vue.esm-bundler-00a9792d.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-11d98b33.js";const w={data(){return{loading:!1,errorMessage:""}},methods:{goToNext(){this.loading=!0,setTimeout(()=>{},2e3)}},props:{redirect:{type:Function}}},O=o("div",null,[o("h3",null,"Login")],-1),h=o("div",null,[o("label",{for:"email"},"email"),o("input",{id:"email",type:"email"})],-1),S=o("div",null,[o("label",{for:"password"},"password"),o("input",{id:"password",type:"password"})],-1),R={key:0},I={key:0},C={key:1};function D(t,e,i,a,n,s){return m(),c("div",null,[O,h,S,o("div",null,[!n.errorMessage!=""?(m(),c("p",R,v(n.errorMessage),1)):k("",!0)]),o("div",null,[o("button",{id:"button",class:"submit",onClick:e[0]||(e[0]=H=>s.goToNext())},[n.loading?(m(),c("text",C,"Loading...")):(m(),c("text",I,"Submit"))])])])}const B=T(w,[["render",D]]);w.__docgenInfo={exportName:"default",displayName:"Login",description:"",tags:{},props:[{name:"redirect",type:{name:"func"}}],sourceFiles:["/home/vidi/Documents/storybook/example/src/components/login/Login.vue"]};const{global:N}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:M,addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:P,SELECT_STORY:Y}=__STORYBOOK_MODULE_CORE_EVENTS__;var A="links",{document:b,HTMLElement:K}=N,r=t=>E.getChannel().emit(Y,t),V=t=>e=>typeof e=="function"?e(...t):e,U=(t,e)=>(...i)=>{let a=V(i),n=a(t),s=e?a(e):!1;n!=null&&n.match(/--/)&&!s?r({storyId:n}):s&&n?r({kind:n,story:s}):n?r({kind:n}):s&&r({story:s})},x=t=>{let{target:e}=t;if(!(e instanceof K))return;let i=e,{sbKind:a,sbStory:n}=i.dataset;(a||n)&&(t.preventDefault(),r({kind:a,story:n}))},d=!1,F=()=>{d||(d=!0,b.addEventListener("click",x))},G=()=>{d&&(d=!1,b.removeEventListener("click",x))};M({name:"withLinks",parameterName:A,wrapper:(t,e)=>(F(),E.getChannel().once(P,G),t(e))});const z={title:"Example/Login",component:B,tags:["autodocs"]};function _(t){return new Promise(e=>setTimeout(e,t))}const p={args:{redirect:U("Example/Core/Button","Primary")},component:B,play:async()=>{const t=l.getByLabelText("password"),e=l.getByLabelText("email"),i=l.getByRole("button",{name:/Submit/i});await _(1e3),await u.type(e,"example.@mail.com",{delay:200}),await _(1e3),await u.type(t,"example",{delay:200}),await _(1e3),await u.click(i);const a=l.getByRole("button",{name:/Loading.../i});await f(a).toBeInTheDocument()}};var g,y,L;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    redirect: linkTo('Example/Core/Button', 'Primary')
  },
  component: Login,
  play: async () => {
    const passwordInput = screen.getByLabelText('password');
    const emailInput = screen.getByLabelText('email');
    const submitBtn = screen.getByRole('button', {
      name: /Submit/i
    });
    await sleep(1000);
    await userEvent.type(emailInput, 'example.@mail.com', {
      delay: 200
    });
    await sleep(1000);
    await userEvent.type(passwordInput, 'example', {
      delay: 200
    });
    await sleep(1000);
    await userEvent.click(submitBtn);
    const loadingButton = screen.getByRole('button', {
      name: /Loading.../i
    });
    await expect(loadingButton).toBeInTheDocument();
  }
}`,...(L=(y=p.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const J=["SuccessLogin"];export{p as SuccessLogin,J as __namedExportsOrder,z as default};
