import{d,M as l,P as j,e as h,f as m}from"./index-2f0905ea.js";import{B as y,P as _,S as b}from"./Button.stories-4182cf0b.js";import{u as f}from"./index-42365cce.js";import"./iframe-67de4314.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-38ad35d1.js";import"./index-356e4a49.js";import"./Button-1f1b7278.js";import"./vue.esm-bundler-00a9792d.js";import"./_plugin-vue_export-helper-c27b6911.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=d,P=Symbol.for("react.element"),S=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function x(n,r,p){var o,e={},i=null,a=null;p!==void 0&&(i=""+p),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)v.call(r,o)&&!R.hasOwnProperty(o)&&(e[o]=r[o]);if(n&&n.defaultProps)for(o in r=n.defaultProps,r)e[o]===void 0&&(e[o]=r[o]);return{$$typeof:P,type:n,key:i,ref:a,props:e,_owner:E.current}}s.Fragment=S;s.jsx=x;s.jsxs=x;u.exports=s;var t=u.exports;function c(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},f(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:y}),`
`,t.jsx(r.h1,{id:"button",children:"Button"}),`
`,t.jsx(r.p,{children:"A button is ..."}),`
`,t.jsx(j,{}),`
`,t.jsx(r.h2,{id:"props",children:"Props"}),`
`,t.jsx(h,{}),`
`,t.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,t.jsx(r.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(r.p,{children:"A button can be of primary importance."}),`
`,t.jsx(m,{of:_}),`
`,t.jsx(r.p,{children:"A button can be of secondary importance."}),`
`,t.jsx(m,{of:b}),`
`]})}function T(n={}){const{wrapper:r}=Object.assign({},f(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(c,n)})):c(n)}export{T as default};
