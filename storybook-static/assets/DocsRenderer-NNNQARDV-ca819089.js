import{_ as d}from"./iframe-fce08bd4.js";import{r as h,R as o,d as a,C as E,A as R,H as x,D as y}from"./index-176c597d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-c42b9be3.js";import"./_baseIsEqual-88fc2696.js";import"./uniq-031a84a2.js";import"./index-356e4a49.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:o.createElement(o.Fragment,null,e)}},B=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},i=y;return new Promise((u,p)=>{d(()=>import("./index-1215ef55.js"),["./index-1215ef55.js","./index-1f14c2e2.js","./index-176c597d.js","./iframe-fce08bd4.js","./_commonjsHelpers-725317a4.js","./index-11d98b33.js","./index-c42b9be3.js","./_baseIsEqual-88fc2696.js","./uniq-031a84a2.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(i,{context:t,docsParameter:e}))),r)).then(()=>u())})},this.unmount=t=>{v(t)}}};export{B as DocsRenderer,f as defaultComponents};