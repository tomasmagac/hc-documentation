"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[6982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Automatischer Ablauf bei Neuanlage und \xc4nderungen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themetransformation-automation"],layout:"help-detail",language:"de"},o=void 0,s={unversionedId:"setup-hc/config-transformations/2015-02-01-theme-automation",id:"setup-hc/config-transformations/2015-02-01-theme-automation",title:"Automatischer Ablauf bei Neuanlage und \xc4nderungen",description:"Der automatische Ablauf erm\xf6glicht es, Dienstepublikation und Datentransformation ohne Eingreifen durch Nutzende automatisch als Hintergrund-Prozess auszuf\xfchren. Diese werden ausgel\xf6st, wenn bestimmte Aktionen, wie beispielsweise Service-Updates oder Transformationen, durchgef\xfchrt werden. So k\xf6nnen Dienste zum gerade bearbeiteten Datensatz publiziert, abgeleitete Datens\xe4tze mittels Transformation erzeugt und zu diesen wiederum Dienste publiziert werden. Ein typischer Ablauf sieht wie folgt aus:",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-transformations/2015-02-01-theme-automation.md",sourceDirName:"setup-hc/config-transformations",slug:"/setup-hc/config-transformations/2015-02-01-theme-automation",permalink:"/de/docs/setup-hc/config-transformations/2015-02-01-theme-automation",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/config-transformations/2015-02-01-theme-automation.md",tags:[],version:"current",frontMatter:{title:"Automatischer Ablauf bei Neuanlage und \xc4nderungen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themetransformation-automation"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Darstellungsdienste konfigurieren",permalink:"/de/docs/setup-hc/config-services/2015-02-01-theme-edit-view-service"},next:{title:"Transformationsprojekt zuordnen und konfigurieren",permalink:"/de/docs/setup-hc/config-transformations/2015-02-01-theme-transformation"}},u={},l=[],c={toc:l};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Der automatische Ablauf erm\xf6glicht es, Dienstepublikation und Datentransformation ohne Eingreifen durch Nutzende automatisch als Hintergrund-Prozess auszuf\xfchren. Diese werden ausgel\xf6st, wenn bestimmte Aktionen, wie beispielsweise Service-Updates oder Transformationen, durchgef\xfchrt werden. So k\xf6nnen Dienste zum gerade bearbeiteten Datensatz publiziert, abgeleitete Datens\xe4tze mittels Transformation erzeugt und zu diesen wiederum Dienste publiziert werden. Ein typischer Ablauf sieht wie folgt aus:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Anlegen eines Datensatzes mit lokalen, nicht-INSPIRE konformen Daten,"),(0,a.kt)("li",{parentName:"ol"},"Publikation von Diensten zum lokalen Datensatz,"),(0,a.kt)("li",{parentName:"ol"},"Transformation der Daten zu INSPIRE GML,"),(0,a.kt)("li",{parentName:"ol"},"Publikation von INSPIRE-Diensten auf Basis des INSPIRE GML.")),(0,a.kt)("p",null,"Folgen sie in der Rolle ","\xab","Superanwender","\xbb"," oder ","\xab","Administrator","\xbb"," diesem Ablauf, um die automatische Ausf\xfchrung zu diesem Thema zu konfigurieren:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Gehen sie auf ","\xab","Themen","\xbb","."),(0,a.kt)("li",{parentName:"ol"},"W\xe4hlen sie das Thema aus, das sie bearbeiten wollen."),(0,a.kt)("li",{parentName:"ol"},"Gehen sie auf ","\xab","Automatisierung","\xbb","."),(0,a.kt)("li",{parentName:"ol"},"Legen sie die Ausf\xfchrungsregeln f\xfcr Service-Updates und Transformationen fest. Bestimmen Sie, wann das Projekt ausgef\xfchrt werden soll, sowohl bei Neuanlage eines Datensatzes als auch bei Aktualisierung. Wir empfehlen eine sofortige Ausf\xfchrung bei Neuanlage sowie eine manuelle Ausf\xfchrung bei Aktualisierung."),(0,a.kt)("li",{parentName:"ol"},"Haben sie bei einer der beiden Optionen ","\xab","Sp\xe4ter","\xbb"," ausgew\xe4hlt, k\xf6nnen sie nun festlegen, wann genau das Transformationsprojekt ausgef\xfchrt werden soll. Sie haben die folgenden Optionen zur Verf\xfcgung:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T\xe4glich:")," W\xe4hlen sie die Uhrzeit aus, zu welcher die Transformation durchgef\xfchrt werden soll."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"W\xf6chentlich:")," Bestimmen sie den Wochentag und die Uhrzeit, zu welcher die Transformation durchgef\xfchrt werden soll."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monatlich:")," Bestimmen sie das Datum und die Uhrzeit, zu welcher die Transformation durchgef\xfchrt werden soll.",(0,a.kt)("br",null),(0,a.kt)("img",{src:n(3820).Z,alt:"",title:"Automating publishing",className:"img-responsive img-inline-help"}))))}m.isMDXComponent=!0},3820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/automated_publishing-3bfe67f4386847b72a52fb1d4e076170.png"}}]);