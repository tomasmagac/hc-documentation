"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,d=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Create theme",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"en"},i=void 0,c={unversionedId:"setup-hc/create-a-theme/2015-02-10-theme-create",id:"setup-hc/create-a-theme/2015-02-10-theme-create",title:"Create theme",description:"A theme is a re-usable configuration object used to define common settings for data set metadata, service publishing and transformation. The theme manager manages themes and the associated schemas and transformation projects.",source:"@site/docs/setup-hc/create-a-theme/2015-02-10-theme-create.md",sourceDirName:"setup-hc/create-a-theme",slug:"/setup-hc/create-a-theme/2015-02-10-theme-create",permalink:"/docs/setup-hc/create-a-theme/2015-02-10-theme-create",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/setup-hc/create-a-theme/2015-02-10-theme-create.md",tags:[],version:"current",frontMatter:{title:"Create theme",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themecreate"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Add Feature Types",permalink:"/docs/setup-hc/create-a-theme/2015-02-05-theme-add-feature-types"},next:{title:"Define complex usage conditions",permalink:"/docs/setup-hc/edit-metadata-config/2015-02-01-theme-edit-usage-conditions"}},s={},l=[],m={toc:l};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A theme is a re-usable configuration object used to define common settings for data set metadata, service publishing and transformation. The theme manager manages themes and the associated schemas and transformation projects."),(0,r.kt)("p",null,"The process for the creation of a theme is typically:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create Schema"),(0,r.kt)("li",{parentName:"ol"},"Upload transformation project"),(0,r.kt)("li",{parentName:"ol"},"Create theme"),(0,r.kt)("li",{parentName:"ol"},"Edit theme")),(0,r.kt)("p",null,"Once you have created the schema and transformation project, follow these steps as a logged in theme manager or organisation superuser to create a new theme:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ","\xab","Themes","\xbb"),(0,r.kt)("li",{parentName:"ol"},"Go to ","\xab","Create new theme","\xbb"," at the bottom of the theme list"),(0,r.kt)("li",{parentName:"ol"},"Select base theme. In the first step, decide whether you want to re-use an existing theme configuration by deriving your new theme from the selected one. You will be able to edit the configuration later on. Click ","\xab","Continue","\xbb"),(0,r.kt)("li",{parentName:"ol"},"Select name and type. In the second step, select your theme type and assign a name, version and description to your theme. You can choose from one of the existing, preconfigured theme types in the dropdown menu, or choose Custom to create your own theme type. Click ","\xab","Continue","\xbb",(0,r.kt)("img",{src:a(2860).Z,alt:"",title:"Creating a theme",className:"img-responsive img-inline-help"})),(0,r.kt)("li",{parentName:"ol"},"Add feature types. In the third step, click ","\xab","Add new type","\xbb"," to add feature types to your theme.\nClick on the \xbb button to select a schema that contains the feature types you would like to add. Next, click the \xbb button to select a single feature type or click ","\xab","Add all","\xbb"," to add all of the listed feature types to your theme. When you are finished, click ","\xab","Continue","\xbb")),(0,r.kt)("p",null,"You can assign as many features types as you want to a theme. A single feature type can be associated with many themes. If you want to remove the assignment of a single feature type, click the red \xabremove\xbb icon in the top right corner of the feature type. If you want to remove all feature types of a single schema currently associated to the theme, click the red \xabremove\xbb icon in the top right corner of the schema. When you are finished adding feature types, click ","\xab","Continue","\xbb","\n6. Confirm creation. In the fourth step, review your theme and click ","\xab","Create","\xbb"," to save the theme."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you derive your theme from an existing one, later changes to the original theme do not influence your derived theme.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can only delete a theme when no data sets are associated with it anymore.")))}h.isMDXComponent=!0},2860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_theme-f5022fcc08476c5185e4b20a65c0481c.png"}}]);