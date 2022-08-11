"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[4169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"Fragen und Antworten f\xfcr hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"},s=void 0,i={unversionedId:"faq/faq_hs/faq-hs-mapping-1",id:"faq/faq_hs/faq-hs-mapping-1",title:"Fragen und Antworten f\xfcr hale\xbbstudio",description:"Elemente vom Typ AnyType abbilden",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/faq_hs/faq-hs-mapping-1.md",sourceDirName:"faq/faq_hs",slug:"/faq/faq_hs/faq-hs-mapping-1",permalink:"/de/docs/faq/faq_hs/faq-hs-mapping-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq_hs/faq-hs-mapping-1.md",tags:[],version:"current",frontMatter:{title:"Fragen und Antworten f\xfcr hale\xbbstudio",categories:["help-page-category-faq","help-page-subcategory-faq"],layout:"help-detail",language:"de"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Elemente vom Typ ",(0,a.kt)("i",null,"AnyType")," abbilden"),(0,a.kt)("p",null,"Der XML-Schematyp ",(0,a.kt)("i",null,"anyType")," erlaubt es, dass der Inhalt des Elements alles sein kann.\nDies ist ein Problem f\xfcr hale\xbbstudio, da es nicht wei\xdf, welche Art von Wert oder Struktur dort erwartet wird.\nWir haben dies f\xfcr solche F\xe4lle konfigurierbar gemacht.\nDas Anpassen eines Hale-Projekts f\xfcr die Verwendung von ",(0,a.kt)("i",null,"anyType")," ist jedoch ein manueller Prozess, es gibt keine Unterst\xfctzung in der Benutzeroberfl\xe4che."),(0,a.kt)("p",null,"Sie m\xfcssen in der hale Projektdatei das Setting ",(0,a.kt)("i",null,"customTypeContent")," zu den Settings des XML Schema Reader hinzuzuf\xfcgen (XML-Format, zum Bearbeiten als .halex speichern).\nIm Folgenden ein Beispiel f\xfcr die Konfiguration des Schema Reader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<resource action-id="eu.esdihumboldt.hale.io.schema.read.target" provider-id="eu.esdihumboldt.hale.io.xsd.reader">\n    <complex-setting name="customTypeContent">\n        <xsd:typeContentConfig xmlns:xsd="http://www.esdi-humboldt.eu/hale/io/xsd">\n            <core:list xmlns:core="http://www.esdi-humboldt.eu/hale/core">\n                <core:entry>\n                    <xsd:association>\n                        <xsd:property>\n                            <core:list>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">OM_ObservationType</core:name>\n                                </core:entry>\n                                <core:entry>\n                                    <core:name namespace="http://www.opengis.net/om/2.0">result</core:name>\n                                </core:entry>\n                            </core:list>\n                        </xsd:property>\n                        <xsd:config>\n                            <xsd:typeContent mode="elements">\n                                <xsd:elements>\n                                    <core:list>\n                                        <core:entry>\n                                            <core:name namespace="http://www.opengis.net/swe/2.0">Quantity</core:name>\n                                        </core:entry>\n                                    </core:list>\n                                </xsd:elements>\n                            </xsd:typeContent>\n                        </xsd:config>\n                    </xsd:association>\n                </core:entry>\n            </core:list>\n        </xsd:typeContentConfig>\n    </complex-setting>\n    <setting name="resourceId">110e79da-ba08-4759-8cea-8102b0850dc0</setting>\n    <setting name="source">resource1/EF_OF_4.xsd</setting>\n    <setting name="charset">UTF-8</setting>\n    <setting name="contentType">eu.esdihumboldt.hale.io.xsd</setting>\n</resource>\n')),(0,a.kt)("p",null,"Im obigen Beispiel ist die Eigenschaft result vom Typ ",(0,a.kt)("i",null,"ObservationType")," so konfiguriert,\ndass sie das Element ",(0,a.kt)("i",null,"Quantity")," enthalten kann."))}u.isMDXComponent=!0}}]);