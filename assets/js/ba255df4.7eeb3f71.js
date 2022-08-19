"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[3680],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2435:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={title:"Configure Download Services",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themeservices"],layout:"help-detail",language:"en"},i=void 0,c={unversionedId:"setup-hc/config-services/2015-02-01-theme-edit-download-service",id:"setup-hc/config-services/2015-02-01-theme-edit-download-service",title:"Configure Download Services",description:"As for View Services, all data sets linked to a theme share a common configuration for the creation of download services, such as OGC Web Feature Services or INSPIRE Predefined Dataset Download Services. In the Download Service configuration, you can adjust aspects such as the type of service and the supported file formats and coordinate reference systems.",source:"@site/docs/setup-hc/config-services/2015-02-01-theme-edit-download-service.md",sourceDirName:"setup-hc/config-services",slug:"/setup-hc/config-services/2015-02-01-theme-edit-download-service",permalink:"/docs/setup-hc/config-services/2015-02-01-theme-edit-download-service",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure Download Services",categories:["help-page-category-setup-haleconnect","help-page-subcategory-setup-haleconnect-themeservices"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Edit metadata configuration",permalink:"/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"},next:{title:"Configure View Services",permalink:"/docs/setup-hc/config-services/2015-02-01-theme-edit-view-service"}},s={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As for View Services, all data sets linked to a theme share a common configuration for the creation of download services, such as OGC Web Feature Services or INSPIRE Predefined Dataset Download Services. In the Download Service configuration, you can adjust aspects such as the type of service and the supported file formats and coordinate reference systems."),(0,r.kt)("p",null,"To edit this configuration, follow these steps as a logged in theme manager or organisation superuser:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ","\xab","Themes","\xbb"),(0,r.kt)("li",{parentName:"ol"},"Pick the theme you'd like to change the configuration for"),(0,r.kt)("li",{parentName:"ol"},"Go to ","\xab","Download Services","\xbb"),(0,r.kt)("li",{parentName:"ol"},"Pick the type of service you'd like to publish. Click the ","\xab","+","\xbb"," button to add an additional type of service.",(0,r.kt)("img",{src:o(6271).Z,alt:"",title:"Configuring download services",className:"img-responsive img-inline-help"})),(0,r.kt)("li",{parentName:"ol"},"Choose at least one coordinate reference system (CRS) that should be supported. You can add additional CRS by clicking the ","\xab","+","\xbb"," button."),(0,r.kt)("li",{parentName:"ol"},"Choose at least one file format that should be supported. Datasets will be included for download in the selected formats in published atom feeds. Supported formats are ","*",".gml, ","*",".shp and ","*",".gpkg. You can add more than one supported format by clicking the ","\xab","+","\xbb"," button."),(0,r.kt)("li",{parentName:"ol"},"Activate the ",(0,r.kt)("em",{parentName:"li"},"Include attachment links in Predefined Dataset download services")," toggle to include attachment links in the atom feed. The attachment links enable users to download the attachments directly from the published predefined dataset download service.")))}u.isMDXComponent=!0},6271:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/configure_download_services1-4366ed78470eceaad96a5ff14561498c.png"}}]);