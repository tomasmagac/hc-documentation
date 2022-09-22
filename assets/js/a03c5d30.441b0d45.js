"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Automation",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:6},i=void 0,s={unversionedId:"references/themes/2018-04-04-reference-themes-automation",id:"references/themes/2018-04-04-reference-themes-automation",title:"Automation",description:"The Automation section allows you to set up an automated workflow to perform service updates and transformations.",source:"@site/docs/references/themes/2018-04-04-reference-themes-automation.md",sourceDirName:"references/themes",slug:"/references/themes/2018-04-04-reference-themes-automation",permalink:"/docs/references/themes/2018-04-04-reference-themes-automation",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/references/themes/2018-04-04-reference-themes-automation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Automation",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Transformation",permalink:"/docs/references/themes/2018-04-05-reference-themes-transformation"},next:{title:"Dataset series",permalink:"/docs/references/themes/2018-04-03-reference-themes-datasetseries"}},c={},u=[],l={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Automation section allows you to set up an automated workflow to perform service updates and transformations."),(0,a.kt)("p",null,"An automated workflow performs service publishing and data transformation as a background process that does not require any user interaction. The automated workflow responds to events including data and configuration updates and transformations. When events occur, external data or metadata is retrieved, services are created and published, and transformation projects are executed."),(0,a.kt)("p",null,"Set the execution rules for service updates and transformations. Decide when the execution should happen - manually, immediately or with a delay. Click the dropdown menu to make a selection."),(0,a.kt)("p",null,"If you\u2019ve selected \xabLater\xbb, proceed to set up when exactly the transformation and publishing should be executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Daily: Pick the time of the day at which the transformation and publishing should be executed."),(0,a.kt)("li",{parentName:"ul"},"Weekly: Pick the weekday and the time of the day at which the transformation and publishing should be executed."),(0,a.kt)("li",{parentName:"ul"},"Monthly: Pick the day of the month and the time of the day at which the transformation and publishing should be executed.")))}m.isMDXComponent=!0}}]);