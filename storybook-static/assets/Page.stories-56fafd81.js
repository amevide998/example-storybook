import{w,e as r,u as f}from"./index-14a6cef8.js";import{M as _}from"./Header-055ec413.js";import{d as B,e as b,q as k,m as L,o as x}from"./vue.esm-bundler-00a9792d.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./Button-1f1b7278.js";const d={name:"my-page",components:{MyHeader:_},data(){return{user:null}},methods:{onLogin(){this.user={name:"Jane Doe"}},onLogout(){this.user=null},onCreateAccount(){this.user={name:"Jane Doe"}}}},D=L('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function S(s,n,e,c,y,a){const v=B("my-header");return x(),b("article",null,[k(v,{user:y.user,onLogin:a.onLogin,onLogout:a.onLogout,onCreateAccount:a.onCreateAccount},null,8,["user","onLogin","onLogout","onCreateAccount"]),D])}const h=I(d,[["render",S]]);d.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{},sourceFiles:["/home/vidi/Documents/storybook/example/src/components/page/Page.vue"]};const P={title:"Example/Page",component:h,parameters:{layout:"fullscreen"}},o={},t={render:()=>({components:{MyPage:h},template:"<my-page />"}),play:async({canvasElement:s})=>{const n=w(s),e=n.getByRole("button",{name:/Log in/i});await r(e).toBeInTheDocument(),await f.click(e),await r(e).not.toBeInTheDocument();const c=n.getByRole("button",{name:/Log out/i});await r(c).toBeInTheDocument()}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MyPage
    },
    template: '<my-page />'
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const R=["LoggedOut","LoggedIn"];export{t as LoggedIn,o as LoggedOut,R as __namedExportsOrder,P as default};
