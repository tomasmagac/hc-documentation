"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[5499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"View services",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:3},s=void 0,i={unversionedId:"references/themes/2018-04-07-reference-themes-view-services",id:"references/themes/2018-04-07-reference-themes-view-services",title:"View services",description:"The View services section displays several configuration options for your published view services.",source:"@site/docs/references/themes/2018-04-07-reference-themes-view-services.md",sourceDirName:"references/themes",slug:"/references/themes/2018-04-07-reference-themes-view-services",permalink:"/docs/references/themes/2018-04-07-reference-themes-view-services",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"View services",categories:["help-page-category-reference","help-page-subcategory-reference-themes"],layout:"help-detail",language:"en",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/docs/references/themes/2018-04-08-reference-themes-metadata"},next:{title:"Download services",permalink:"/docs/references/themes/2018-04-06-reference-themes-download-services"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The View services section displays several configuration options for your published view services."),(0,a.kt)("p",null,"You can select the service type of your view services. Currently, the only view service types supported are WMS (1.1.1) and WMS (1.3.0). Please note that an implicit tile cache is always generated, but not externally accessible. To remove a service type, click the red \u201c-\u201d sign next to the service."),(0,a.kt)("p",null,"You can select the spatial reference systems that are supported by your published services. Click the \u201c+\u201d button to add additional spatial reference systems. Users of your service can request views of your data set in the spatial reference systems you select. To remove a spatial reference system, click the red \u201c-\u201d sign next to the service."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: To add more choices to the list of spatial reference systems, ask your administrator to configure these for you.")),(0,a.kt)("p",null,'You can activate and deactivate GetFeatureInfo for your WMS using the dropdown menu. GetFeatureInfo is an optional operation which allows users of your WMS to query layers. GetFeatureInfo is only supported by layers with the attribute queryable="1" (true).'),(0,a.kt)("p",null,"By default, hale\xbbconnect will generate a style for your data. Currently, services contain all layers for which a style is defined - regardless of whether or not the dataset contains relevant objects. On the hale\xbbconnect platform, there are default styles defined for most INSPIRE layers. Thus, these layers are created even if they are empty. If you want to specifically control the appearance of your data and avoid empty layers being created, upload a Styled Layer Descriptor file (SLD). To apply it to your theme, click on \u201cSelect file(s)\u201d and pick an XML SLD file. Please note that it is currently not possible to exchange the SLD used for a series' publication if it has been published once."),(0,a.kt)("p",null,"Activate the ",(0,a.kt)("em",{parentName:"p"},"Allow additional layers from raster sources")," toggle to enable raster data upload during dataset creation. The toggle enables users to upload and publish PNG or GeoTIFF raster data, in addition to vector data, during dataset creation. The raster data will be published in a separate raster layer."))}p.isMDXComponent=!0}}]);