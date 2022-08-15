"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Fragen und Antworten f\xfcr hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"},o=void 0,l={unversionedId:"faq/faq_hs/faq-hs-mapview-3",id:"faq/faq_hs/faq-hs-mapview-3",title:"Fragen und Antworten f\xfcr hale\xbbstudio",description:"Wie werden Geometrien korrekt abgebildet?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hs/faq-hs-mapview-3.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-mapview-3",permalink:"/de/docs/faq/faq_hs/faq-hs-mapview-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hs/faq-hs-mapview-3.md",tags:[],version:"current",frontMatter:{title:"Fragen und Antworten f\xfcr hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"}},u={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Wie werden Geometrien korrekt abgebildet?"),(0,a.kt)("p",null,"Abh\xe4ngig vom Typ der Geometrie gibt es verschiedene Wege, Geometrien in hale\xbbstudio korrekt abzubilden."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quelldaten enthalten JTS (Java Topology Suite)-Geometrien (beispielsweise bei Shapefiles)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Es wird ein Wert in der Eigenschaft, die mit dem Geometrie-Symbol gekennzeichnet ist, angezeigt.\nDieser dient jedoch lediglich der internen Repr\xe4sentation (er w\xe4re in einer exportierten xml-Datei nicht vorhanden)."),(0,a.kt)("li",{parentName:"ul"},"JTS-Geometrien werden in hale\xbbstudio f\xfcr alle geometriebezogenen Funktionen genutzt. Wenn es in den Quelldaten\nein Geometrie-Objekt (gekennzeichnet mit dem Geometrie-Symbol) gibt, wird empfohlen, es f\xfcr Mappings zu nutzen."),(0,a.kt)("li",{parentName:"ul"},"Wenn eine JTS-Geometrie aus hale\xbbstudio exportiert wird, werden alle Informationen auf niedrigeren Ebenen der Eigenschaft ignoriert.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quelldaten enthalten Geometrien in xml-Struktur")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Geometrie wird aus der xml-Datei geladen wie dort repr\xe4sentiert."),(0,a.kt)("li",{parentName:"ul"},"hale\xbbstudio versucht, eine JTS-Geometrie aus den Angaben abzuleiten.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Komplexes Geometrie-Attribut im Quell-Schema (repr\xe4sentiert durch ein Symbol mit drei Punkten)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Es gibt keinen Geometrie-Wert auf dieser Ebene."),(0,a.kt)("li",{parentName:"ul"},"Ein solches Attribut sollte nie f\xfcr ein Mapping verwendet werden.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Komplexes Attribut im Ziel-Schema")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kann f\xfcr Abbildungen verwendet werden."),(0,a.kt)("li",{parentName:"ul"},"Die JTS-Geometrie wird auf diesem Level abgelegt und kann im Map View dargestellt werden."),(0,a.kt)("li",{parentName:"ul"},"Wenn die Daten exportiert werden wird nach dem besten Weg gesucht, die JTS-Geometrie in die unter dem komplexen Attribut verf\xfcgbare XML-Struktur zu schreiben.")))}c.isMDXComponent=!0}}]);