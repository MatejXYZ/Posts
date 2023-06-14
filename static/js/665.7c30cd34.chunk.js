"use strict";(self.webpackChunkposts=self.webpackChunkposts||[]).push([[665],{9665:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(1413),o=t(1933),i=t(1470),u=t(6990),l=t(4087),c=t(7689),a=t(4435),s=t(3729),p=t(2791),f=t(184),x=(0,p.memo)((function(n){var e=n.email,t=n.name,r=n.body;return(0,f.jsxs)(l.xu,{py:"0.5em",color:s.Z.gray,bg:s.Z.offWhite,children:[(0,f.jsxs)(l.xu,{children:[(0,f.jsxs)(l.xu,{color:s.Z.green,fontSize:["10px","14px"],children:[e,":"]}),(0,f.jsx)(l.xu,{fontSize:["14px","20px"],lineHeight:"1",children:t})]}),(0,f.jsx)(l.xu,{fontSize:["10px","14px"],lineHeight:"1.25",children:r})]})})),d=t(5850),h=t(3874),g=t(6663),v=function(){var n=(0,c.UO)().id,e=void 0===n?null:n,t=(0,o.useQuery)({queryKey:["post"],queryFn:function(){return e?(0,a.xl)({id:e}):null},enabled:null!==e}).data,p=null!==t&&void 0!==t?t:{},v=p.title,m=p.body,y=p.userId,j=(0,o.useQuery)({queryKey:["author",y],queryFn:function(){return y?(0,a.PR)({id:y}):null},enabled:void 0!==y}).data,b=(0,o.useQuery)({queryKey:["postComments",e],queryFn:function(){return e?(0,a.w8)({id:e}):null},enabled:null!==e}).data,w=(0,c.s0)();return(0,f.jsxs)(i.g,{bg:s.Z.offWhite,w:"full",spacing:"0",children:[(0,f.jsxs)(u.K,{direction:["column","row"],spacing:["16px","24px"],align:["start","center"],bg:s.Z.green,p:"24px",w:"full",children:[(0,f.jsx)(l.xu,{w:["24px","44px"],color:s.Z.white,_hover:{color:s.Z.black},cursor:"pointer",onClick:function(){return w("/".concat(g.x.list))},transition:"color 0.06125s",children:(0,f.jsx)(h.AD,{style:{transform:"rotate(180deg)"}})}),(0,f.jsxs)(i.g,{w:"full",align:["start","center"],children:[(0,f.jsx)(l.xu,{fontWeight:"900",fontSize:["24px","44px"],lineHeight:"1.125",color:s.Z.white,maxW:"640px",textAlign:["start","center"],children:(0,d.f)(null!==v&&void 0!==v?v:"")}),(0,f.jsx)(l.xu,{color:s.Z.white,fontSize:["12px","16px"],children:null===j||void 0===j?void 0:j.name})]}),(0,f.jsx)(l.xu,{w:"32px"})]}),(0,f.jsxs)(i.g,{maxW:"800px",p:"24px",align:"center",children:[(0,f.jsx)(l.xu,{fontSize:["16px","20px"],lineHeight:"1.25",pt:"24px",pb:["36px","80px"],w:"full",children:m}),(0,f.jsxs)(l.xu,{maxW:"640px",children:[(0,f.jsx)(l.xu,{fontWeight:"900",fontSize:["16px","24px"],lineHeight:"1.125",color:s.Z.black,children:"Comments"}),null===b||void 0===b?void 0:b.map((function(n){return(0,f.jsx)(x,(0,r.Z)({},n),n.id)}))]})]})]})}},4435:function(n,e,t){t.d(e,{Jq:function(){return u},PR:function(){return c},w8:function(){return a},xl:function(){return l}});var r=t(1243),o=t(3357),i=function(n){var e=n.path;return r.Z.get("".concat(o.T5,"/").concat(e)).then((function(n){return n.data}))},u=function(){return i({path:o.QZ})},l=function(n){var e=n.id;return i({path:"".concat(o.QZ,"/").concat(e)})},c=function(n){var e=n.id;return i({path:"".concat(o._H,"/").concat(e)})},a=function(n){var e=n.id;return i({path:"".concat(o.QZ,"/").concat(e,"/").concat(o.Y3)})}},3874:function(n,e,t){t.d(e,{AD:function(){return a}});var r=t(2791);t.p;t.p;var o,i=["title","titleId"];function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function c(n,e){var t=n.title,c=n.titleId,a=l(n,i);return r.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,o||(o=r.createElement("g",{id:"Complete"},r.createElement("g",{id:"arrow-right"},r.createElement("g",null,r.createElement("polyline",{"data-name":"Right",fill:"none",id:"Right-2",points:"16.4 7 21.5 12 16.4 17",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),r.createElement("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,x1:2.5,x2:19.2,y1:12,y2:12}))))))}var a=r.forwardRef(c);t.p;t.p},3357:function(n,e,t){t.d(e,{IV:function(){return r},QZ:function(){return i},T5:function(){return o},Y3:function(){return l},_H:function(){return u}});var r=5,o="https://jsonplaceholder.typicode.com",i="posts",u="users",l="comments"},5850:function(n,e,t){t.d(e,{f:function(){return r}});var r=function(n){var e=n[0];return e?e.toUpperCase().concat(n.slice(1)):n}}}]);
//# sourceMappingURL=665.7c30cd34.chunk.js.map