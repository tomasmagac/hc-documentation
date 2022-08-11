"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={title:"Define complex usage conditions",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-thememetadata"],layout:"help-detail",language:"en"},o=void 0,c={unversionedId:"setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",id:"setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",title:"Define complex usage conditions",description:"In some cases, it might be necessary to formally define complex usage rights on a data set. The system provides a specific syntax for expressing such licenses.",source:"@site/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions.md",sourceDirName:"setup-hc/edit-metadata-config",slug:"/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",permalink:"/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions.md",tags:[],version:"current",frontMatter:{title:"Define complex usage conditions",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-thememetadata"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Create theme",permalink:"/docs/setup-hc/create-a-theme/2015-02-10-theme-create"},next:{title:"Edit metadata configuration",permalink:"/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some cases, it might be necessary to formally define complex usage rights on a data set. The system provides a specific syntax for expressing such licenses."),(0,i.kt)("p",null,"Such complex licenses can be used in the path \u201emd-dataset.identification.constraints.mdConstraintPredefined\u201c. As a theme manager or organisation superuser, you provide such licenses to the data managers, who can then pick the appropriate license from a select field. You define these licenses as an enumeration, for which you provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," and a license definition in the field ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,i.kt)("p",null,"The license definition needs to be built using the following grammar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"('constraint' '['\n  ('useLimitation='<TEXT>)?\n   (\n     ('useConstraint=' <TEXT>)\n     |('accessConstraint=' iso:RestrictionCode)\n     |('otherConstraint=' <TEXT>)\n     |('otherConstraint-opendata='\n       '['  \n           'id=' <TEXT>\n           'name=' <TEXT>\n           'source=' <TEXT>\n           'url=' <TEXT>\n       ']'\n   )*\n']')*\n")),(0,i.kt)("p",null,"Explanation of the syntax:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'abc'"),":  Keywords, provided without quotes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"( content )?"),": optional content, content can be skipped when entering"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"( content )*"),": high-cardinality content, content can be entered multiple times"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(content-1 | content-2)"),": logical or, value needs to be either ",(0,i.kt)("inlineCode",{parentName:"li"},"content-1")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"content-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<TEXT>"),": Text placeholders, insert text without angle brackets")),(0,i.kt)("p",null,"The following characters are permitted in TEXT: ",(0,i.kt)("inlineCode",{parentName:"p"},"'+'|':'|'-'|','|'.'|';'|'?'|'!'|'\u201e'|'\xf6'|'\xe4'|'\xfc'|'\xd6'|'\xc4'|'\xdc'|'\xdf'|'\u201c'|'('|')'|'@'|'/'|'#'|'{'|'}'|'\xa9'")),(0,i.kt)("p",null,"Note that no new lines or breaks are permitted in the license definition. We thus recommend creating the license in a text editor first, then to compact it and then to copy it into the metadata editor."))}d.isMDXComponent=!0}}]);