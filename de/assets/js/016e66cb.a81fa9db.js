"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[963],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,p=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return t?r.createElement(p,o(o({ref:n},c),{},{components:t})):r.createElement(p,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Thema anlegen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"de"},o=void 0,s={unversionedId:"setup-hc/create-a-theme/2015-02-10-theme-create",id:"setup-hc/create-a-theme/2015-02-10-theme-create",title:"Thema anlegen",description:"Das Thema ist ein Konfigurationsobjekt, mit dem s\xe4mtliche Ressourcen verkn\xfcpft werden k\xf6nnen, und f\xfcr das Nutzende in der Rolle &laquo;Themenmanager&raquo; verantwortlich sind. \xdcber das Thema lassen sich die Publikation von Diensten, die Eingabe von Metadaten, zugeordnete Schemas, die Ausf\xfchrung von Transformationsprojekten sowie zahlreiche weitere Parameter konfigurieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/create-a-theme/2015-02-10-theme-create.md",sourceDirName:"setup-hc/create-a-theme",slug:"/setup-hc/create-a-theme/2015-02-10-theme-create",permalink:"/de/docs/setup-hc/create-a-theme/2015-02-10-theme-create",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/i18n/de/docusaurus-plugin-content-docs/current/setup-hc/create-a-theme/2015-02-10-theme-create.md",tags:[],version:"current",frontMatter:{title:"Thema anlegen",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"de"},sidebar:"tutorialSidebar",previous:{title:"Objektarten zuordnen",permalink:"/de/docs/setup-hc/create-a-theme/2015-02-05-theme-add-feature-types"},next:{title:"Komplexe Nutzungsbedingungen konfigurieren",permalink:"/de/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions"}},l={},u=[],c={toc:u};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Das Thema ist ein Konfigurationsobjekt, mit dem s\xe4mtliche Ressourcen verkn\xfcpft werden k\xf6nnen, und f\xfcr das Nutzende in der Rolle ","\xab","Themenmanager","\xbb"," verantwortlich sind. \xdcber das Thema lassen sich die Publikation von Diensten, die Eingabe von Metadaten, zugeordnete Schemas, die Ausf\xfchrung von Transformationsprojekten sowie zahlreiche weitere Parameter konfigurieren."),(0,a.kt)("p",null,"Der Ablauf zur Erstellung eines Themas ist typischerweise:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Schema anlegen,"),(0,a.kt)("li",{parentName:"ol"},"Transformationsprojekt anlegen,"),(0,a.kt)("li",{parentName:"ol"},"Thema anlegen,"),(0,a.kt)("li",{parentName:"ol"},"Thema anpassen.")),(0,a.kt)("p",null,"Sind das Schema und das Transformationsprojekt angelegt, kann das Thema erstellt werden. Folgen sie in der Rolle ","\xab","Superanwender","\xbb"," oder ","\xab","Themenmanager","\xbb"," diesem Ablauf, um ein Thema anzulegen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Gehen sie auf ","\xab","Themen","\xbb","."),(0,a.kt)("li",{parentName:"ol"},"Gehen sie auf ","\xab","Neues Thema erstellen","\xbb"," unterhalb der Liste."),(0,a.kt)("li",{parentName:"ol"},"Basisthema ausw\xe4hlen: Sie k\xf6nnen das neue Thema aus der Konfiguration eines bestehenden Themas ableiten. Falls sie in diesem Schritt ein Thema ausw\xe4hlen, werden alle Konfigurationswerte aus diesem Thema \xfcbernommen \u2013 diese k\xf6nnen aber beliebig angepasst werden. Klicken sie auf ","\xab","Weiter","\xbb","."),(0,a.kt)("li",{parentName:"ol"},'Name und Typ bestimmen: Geben sie dem Thema einen Namen und ordnen sie ihm Thementyp, Version und Beschreibung zu. Sie k\xf6nnen einen bestehenden, vorkonfigurierten Thementyp aus dem Aufklappmen\xfc ausw\xe4hlen oder "Benutzerdefiniert" w\xe4hlen, um Ihren eigenen Thementyp zu erstellen. Klicken sie auf ',"\xab","Weiter","\xbb",".",(0,a.kt)("img",{src:t(4140).Z,alt:"",title:"Thema erstellen",className:"img-responsive img-inline-help"})),(0,a.kt)("li",{parentName:"ol"},"Objektarten hinzuf\xfcgen: Klicken sie auf ","\xab","Objektart hinzuf\xfcgen","\xbb",' um dem Thema Objektarten zuzuordnen. W\xe4hlen sie den "\xbb"-Knopf um das Schema auszuw\xe4hlen, in dem die gew\xfcnschten Objektarten enthalten sind. W\xe4hlen sie den "\xbb"-Knopf um einzelne Objektarten hinzuzuf\xfcgen oder ',"\xab","Alle hinzuf\xfcgen","\xbb"," um alle aufgelisteten Objektarten zu dem Thema hinzuzuf\xfcgen. Klicken sie auf ","\xab","Weiter","\xbb",".\nSie k\xf6nnen einem Thema beliebig viele Objektarten zuordnen. Eine Objektart kann mehreren Themen zugeordnet sein. Wenn sie die Zuordnung einer Objektart aufheben m\xf6chten, klicken sie auf das rote ","\xab","L\xf6schen","\xbb","-Symbol in der rechten oberen Ecke der entsprechenden Objektart. Wenn sie die Zuordnung aller Objektarten zu einem Thema aufgeben m\xf6chten, klicken sie auf das rote ","\xab","L\xf6schen","\xbb","-Symbol in der rechten oberen Ecke des Schemas. Wenn sie alle gew\xfcnschten Objektarten hinzugef\xfcgt haben, klicken sie auf ","\xab","Weiter","\xbb","."),(0,a.kt)("li",{parentName:"ol"},"Anlegen best\xe4tigen: \xdcberpr\xfcfen sie die Angaben zu dem Thema und klicken sie ","\xab","Anlegen","\xbb"," um dieses zu speichern.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Bei einem abgeleiteten Thema werden sp\xe4tere \xc4nderungen des Eltern-Themas nicht auf die abgeleiteten Themen \xfcbertragen.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Wenn sie ein Thema l\xf6schen, werden dem Thema zugeordnete Datens\xe4tze nicht gel\xf6scht. Es wird lediglich die Zuordnung aufgehoben.")))}m.isMDXComponent=!0},4140:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/create_theme-39d506420200a59871dc1f9e8f726710.png"}}]);