(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7045],{10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(92648).Z,o=r(17273).Z,l=n(r(67294)),u=r(41003),a=r(67795),i=r(54465),c=r(72692),s=r(48245),f=r(69246),d=r(10227),p=r(33468);let y=new Set;function m(e,t,r,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:a.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:y,children:g,prefetch:h,passHref:b,replace:C,shallow:x,scroll:_,locale:j,onClick:w,onMouseEnter:O,onTouchStart:E,legacyBehavior:k=!1}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,k&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let P=!1!==h,N=l.default.useContext(c.RouterContext),R=l.default.useContext(s.AppRouterContext),S=null!=N?N:R,I=!N,{href:G,as:L}=l.default.useMemo(()=>{if(!N){let e=v(a);return{href:e,as:y?v(y):e}}let[e,t]=u.resolveHref(N,a,!0);return{href:e,as:y?u.resolveHref(N,y):t||e}},[N,a,y]),T=l.default.useRef(G),A=l.default.useRef(L);k&&(n=l.default.Children.only(r));let z=k?n&&"object"==typeof n&&n.ref:t,[D,K,U]=f.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(A.current!==L||T.current!==G)&&(U(),A.current=L,T.current=G),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[L,z,G,U,D]);l.default.useEffect(()=>{S&&K&&P&&m(S,G,L,{locale:j})},[L,G,K,j,P,null==N?void 0:N.locale,S]);let B={ref:q,onClick(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,o,a,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(y):y()}(e,S,G,L,C,x,_,j,I,P)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(P||!I)&&m(S,G,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(P||!I)&&m(S,G,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(L,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);B.href=t||p.addBasePath(i.addLocale(L,e,null==N?void 0:N.defaultLocale))}return k?l.default.cloneElement(n,B):l.default.createElement("a",Object.assign({},M,B),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!l,[s,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,r,t,s,d.current]);let y=n.useCallback(()=>{f(!1)},[]);return[p,s,y]};var n=r(67294),o=r(44686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,r){e.exports=r(31551)},88357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function i(e){return function(t){return n.createElement(c,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,i=e.title,c=a(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}},33951:function(e,t,r){"use strict";r.d(t,{XQ:function(){return o}});var n=r(25432);function o(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,n.Kn)(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},31708:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(35059),o=r(79513),l=r(85893),u=(0,n.G)(function(e,t){let{templateAreas:r,gap:n,rowGap:u,columnGap:a,column:i,row:c,autoFlow:s,autoRows:f,templateRows:d,autoColumns:p,templateColumns:y,...m}=e;return(0,l.jsx)(o.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:u,gridColumnGap:a,gridAutoColumns:p,gridColumn:i,gridRow:c,gridAutoFlow:s,gridAutoRows:f,gridTemplateRows:d,gridTemplateColumns:y},...m})});u.displayName="Grid"},23100:function(e,t,r){"use strict";r.d(t,{xu:function(){return u}});var n=r(79513),o=r(35059),l=r(85893),u=(0,n.m)("div");u.displayName="Box";var a=(0,o.G)(function(e,t){let{size:r,centerContent:n=!0,...o}=e;return(0,l.jsx)(u,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});a.displayName="Square",(0,o.G)(function(e,t){let{size:r,...n}=e;return(0,l.jsx)(a,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"},776:function(e,t,r){"use strict";r.d(t,{P:function(){return c}});var n=r(35059),o=r(79513),l=r(20888),u=r(33951),a=r(85893);function i(e){return(0,u.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var c=(0,n.G)(function(e,t){let{area:r,colSpan:n,colStart:u,colEnd:c,rowEnd:s,rowSpan:f,rowStart:d,...p}=e,y=(0,l.oA)({gridArea:r,gridColumn:i(n),gridRow:i(f),gridColumnStart:u,gridColumnEnd:c,gridRowStart:d,gridRowEnd:s});return(0,a.jsx)(o.m.div,{ref:t,__css:y,...p})});c.displayName="GridItem"},36979:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(35059),o=r(33179),l=r(91639),u=r(79513),a=r(25432),i=r(85893),c=(0,n.G)(function(e,t){let{className:r,centerContent:n,...c}=(0,o.Lr)(e),s=(0,l.mq)("Container",e);return(0,i.jsx)(u.m.div,{ref:t,className:(0,a.cx)("chakra-container",r),...c,__css:{...s,...n&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});c.displayName="Container"}}]);