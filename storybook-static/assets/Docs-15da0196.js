import{d,M as l,P as j,e as h,f as a}from"./index-176c597d.js";import{B as y,P as _,S as b}from"./Button.stories-f5a8994d.js";import{u as f}from"./index-1f14c2e2.js";import"./iframe-fce08bd4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-c42b9be3.js";import"./_baseIsEqual-88fc2696.js";import"./uniq-031a84a2.js";import"./index-356e4a49.js";import"./Button-06d8357e.js";import"./vue.esm-bundler-1e5d12c2.js";import"./_plugin-vue_export-helper-c27b6911.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=d,P=Symbol.for("react.element"),S=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function x(o,r,p){var n,e={},i=null,m=null;p!==void 0&&(i=""+p),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(m=r.ref);for(n in r)v.call(r,n)&&!R.hasOwnProperty(n)&&(e[n]=r[n]);if(o&&o.defaultProps)for(n in r=o.defaultProps,r)e[n]===void 0&&(e[n]=r[n]);return{$$typeof:P,type:o,key:i,ref:m,props:e,_owner:E.current}}s.Fragment=S;s.jsx=x;s.jsxs=x;u.exports=s;var t=u.exports;function c(o){const r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},f(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:y}),`
`,t.jsx(r.h1,{id:"button",children:"Button"}),`
`,t.jsx(r.p,{children:"A button is ..."}),`
`,t.jsx(j,{}),`
`,t.jsx(r.h2,{id:"props",children:"Props"}),`
`,t.jsx(h,{}),`
`,t.jsx(r.h2,{id:"stories",children:"Stories"}),`
`,t.jsx(r.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(r.p,{children:"A button can be of primary importance."}),`
`,t.jsx(a,{of:_}),`
`,t.jsx(r.p,{children:"A button can be of secondary importance."}),`
`,t.jsx(a,{of:b}),`
`]})}function $(o={}){const{wrapper:r}=Object.assign({},f(),o.components);return r?t.jsx(r,Object.assign({},o,{children:t.jsx(c,o)})):c(o)}export{$ as default};
