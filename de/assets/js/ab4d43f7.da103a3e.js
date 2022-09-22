"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3781],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(t),h=a,p=f["".concat(s,".").concat(h)]||f[h]||d[h]||i;return t?r.createElement(p,c(c({ref:n},l),{},{components:t})):r.createElement(p,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"},c=void 0,o={unversionedId:"faq/faq_hc/faq-hc-schema-1",id:"faq/faq_hc/faq-hc-schema-1",title:"Questions and answers on hale\xbbconnect",description:"Die URL der Schemadatei hat sich ge\xe4ndert. Was muss ich tun, damit bei der Validierung auf das neue Schema bzw. die ver\xe4nderte URL des Schemas zugegriffen werden kann ?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hc/faq-hc-schema-1.md",sourceDirName:"faq/faq_hc",slug:"/faq/faq_hc/faq-hc-schema-1",permalink:"/de/docs/faq/faq_hc/faq-hc-schema-1",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hc/faq-hc-schema-1.md",tags:[],version:"current",frontMatter:{title:"Questions and answers on hale\xbbconnect",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"}},s={},u=[],l={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Die URL der Schemadatei hat sich ge\xe4ndert. Was muss ich tun, damit bei der Validierung auf das neue Schema bzw. die ver\xe4nderte URL des Schemas zugegriffen werden kann ?"),(0,a.kt)("p",null,"Bei der Validierung der Datens\xe4tze in hale\xbbconnect wird gegen die Schema-Lokation der Objektarten, die im Schema referenziert sind, validiert.\nAls Validierungsgrundlage wird dabei das Schema, das mit dem Thema verbunden ist, herangezogen und nicht das Schema, welches im GML-Datensatz hinterlegt ist.\nWenn die Lokation eines Schemas ver\xe4ndert wurde, f\xfchrt dies zu einem Fehler bei der Validierung der Datens\xe4tze. "),(0,a.kt)("p",null,"Dieser Fehler kann durch folgende Schritte behoben werden: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ein neues Schema mit neuer Schema-Lokation anlegen "),(0,a.kt)("li",{parentName:"ol"},"Objektarten in den jeweiligen Themen austauschen; dabei auf neues Schema zugreifen")),(0,a.kt)("p",null,"Danach sollten die Datens\xe4tze wieder validieren.\nEine Neupublizierung der Dienste ist nur dann erforderlich, wenn Daten ausgetauscht werden."))}d.isMDXComponent=!0}}]);