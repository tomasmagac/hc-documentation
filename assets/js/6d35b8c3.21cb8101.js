"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[8076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),d=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?s.createElement(h,n(n({ref:t},c),{},{components:a})):s.createElement(h,n({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var d=2;d<i;d++)n[d]=a[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(7462),r=(a(7294),a(3905));const i={title:"Create new dataset series",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedatasetseries"],layout:"help-detail",language:"en"},n=void 0,o={unversionedId:"create-manage-datasets/create-dataset-series/2014-01-01-dataset-series",id:"create-manage-datasets/create-dataset-series/2014-01-01-dataset-series",title:"Create new dataset series",description:"A dataset series is a collection of datasets sharing the same product specification [ISO 19115]. All files in a dataset series have the same schema and the same spatial coordinate reference system. It is also possible to create derived dataset series by means of transformation projects. A dataset series has its own INSPIRE, ISO or national metadata.",source:"@site/docs/create-manage-datasets/create-dataset-series/2014-01-01-dataset-series.md",sourceDirName:"create-manage-datasets/create-dataset-series",slug:"/create-manage-datasets/create-dataset-series/2014-01-01-dataset-series",permalink:"/docs/create-manage-datasets/create-dataset-series/2014-01-01-dataset-series",draft:!1,editUrl:"https://github.com/wetransform/hc-documentation/tree/master/docs/create-manage-datasets/create-dataset-series/2014-01-01-dataset-series.md",tags:[],version:"current",frontMatter:{title:"Create new dataset series",categories:["help-page-category-datasetworkflow","help-page-subcategory-datasetworkflowcreatedatasetseries"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Edit metadata for a data set",permalink:"/docs/create-manage-datasets/edit-metadata/2015-01-05-dataset-enter-metadata"},next:{title:"Publish Services for a data set",permalink:"/docs/create-manage-datasets/publish-services/2015-01-01-dataset-publish-services"}},l={},d=[{value:"Vector data",id:"vector-data",level:3},{value:"Non-spatial data",id:"non-spatial-data",level:3},{value:"Raster data",id:"raster-data",level:3},{value:"Attachments",id:"attachments",level:3},{value:"A combination of these data resources",id:"a-combination-of-these-data-resources",level:3},{value:"<strong>Creating a new dataset series</strong>",id:"creating-a-new-dataset-series",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A dataset series is a collection of datasets sharing the same product specification ","[ISO 19115]",". All files in a dataset series have the same schema and the same spatial coordinate reference system. It is also possible to create derived dataset series by means of transformation projects. A dataset series has its own INSPIRE, ISO or national metadata."),(0,r.kt)("p",null,"hale\xbbconnect supports the creation of dataset series and enables customers to upload multiple datasets easily using batch upload."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dataset series are enabled on a per organisation basis. Please contact us at ",(0,r.kt)("a",{parentName:"em",href:"mailto:info@wetransform.to"},"info@wetransform.to")," for more information about dataset series.")),(0,r.kt)("p",null,"A range of file formats can be used to create a dataset series. A dataset series may contain:"),(0,r.kt)("h3",{id:"vector-data"},"Vector data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported vector data formats include ","*",".gml and ","*",".shp"),(0,r.kt)("li",{parentName:"ul"},"Multiple ","*",".shp files can be uploaded to create a dataset"),(0,r.kt)("li",{parentName:"ul"},"Series which use ","*",".shp files can be created on hale\xbbconnect and used to transform data into ","*",".gml series that can be published. Series which use ","*",".shp files cannot be published."),(0,r.kt)("li",{parentName:"ul"},"Currently the upload of one ","*",".gml file per dataset is supported",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"INSPIRE, 3A, CityGML, XPlanung and ISYBAU are fully supported"))),(0,r.kt)("li",{parentName:"ul"},"*",".gml files containing the element gml:GenericMetaData, an empty gml:boundedBy element or arc geometries are currently not supported")),(0,r.kt)("h3",{id:"non-spatial-data"},"Non-spatial data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported data formats include ","*",".xml")),(0,r.kt)("h3",{id:"raster-data"},"Raster data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported formats include ","*",".png, and ","*",".GeoTIFF"),(0,r.kt)("li",{parentName:"ul"},"Currently the upload of one raster data resource per dataset is supported"),(0,r.kt)("li",{parentName:"ul"},"Publishing raster resources without vector resources is not supported. A dummy vector file needs to be added in this case"),(0,r.kt)("li",{parentName:"ul"},"A separate raster layer is published in the view and download services")),(0,r.kt)("h3",{id:"attachments"},"Attachments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported file attachment formats include ","*",".pdf, ","*",".png, ","*",".GeoTIFF, or even textures for 3D data"),(0,r.kt)("li",{parentName:"ul"},"Attachments with dots in their file name are not supported"),(0,r.kt)("li",{parentName:"ul"},"There are multiple ways to upload and associate attachments to your dataset"),(0,r.kt)("li",{parentName:"ul"},"Attachments uploaded during dataset creation are added to the attachments section automatically"),(0,r.kt)("li",{parentName:"ul"},"The attachment files uploaded to hale\xbbconnect have a publicly available link to the attachment file. The links to attachment files can be included in your Predefined dataset download service. The links to attachment files and external URLs can also be viewed in the Feature Explorer Tool."),(0,r.kt)("li",{parentName:"ul"},"Separate service layers are not created for attachment files"),(0,r.kt)("li",{parentName:"ul"},"Visit our help page for ",(0,r.kt)("a",{parentName:"li",href:"/docs/references/data/2018-03-10-reference-data-files"},"more information about working with attachments"))),(0,r.kt)("h3",{id:"a-combination-of-these-data-resources"},"A combination of these data resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datasets can include ","*",".gml, raster and attachment data resources. View and download services for vector and raster data are published as separate layers."),(0,r.kt)("li",{parentName:"ul"},"Currently the upload of ","*",".shp with combined data resources is not supported")),(0,r.kt)("h3",{id:"creating-a-new-dataset-series"},(0,r.kt)("strong",{parentName:"h3"},"Creating a new dataset series")),(0,r.kt)("p",null,"Follow this workflow to publish a dataset series, logged in as a theme manager or superuser:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a schema based on your source data and toggle the switch to create a theme."),(0,r.kt)("li",{parentName:"ol"},"Navigate to your newly created theme, and click on the dataset series section."),(0,r.kt)("li",{parentName:"ol"},"In the dataset series section of your theme, toggle the switch to ",(0,r.kt)("em",{parentName:"li"},"Publish aggregate services for all datasets using this theme"),"."),(0,r.kt)("li",{parentName:"ol"},"Make sure to activate WFS in the download service section of your theme because it is currently not possible to publish series if there is no WFS configured."),(0,r.kt)("li",{parentName:"ol"},"If you plan to add data to your series using batch upload, click on the metadata section in the theme and add a dataset name pattern using the autofill assistant to provide your datasets with pre-configured names. This step is optional and recommended for batch upload if you need a special naming pattern for your datasets.")),(0,r.kt)("p",null,"Once the theme is configured, any user belonging to your organisation or a sub-organisation of your organisation can create and publish a dataset series."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ","\xab","Data","\xbb"," on the main toolbar")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ","\xab","Create new dataset","\xbb"," at the bottom of the dataset list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a series enabled theme to link to your dataset. The option to use batch upload appears when a series enabled theme is selected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users have the option to create a dataset series that contains a single dataset, or a dataset series that contains any number of datasets. Dataset series are automatically named using the following pattern: User organisaton (Theme name)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dataset series with a single dataset:"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the data sources for the individual dataset. There are a few ways to upload the files belonging to your dataset:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click ","\xab","Select file(s)","\xbb"," and navigate to the desired dataset."),(0,r.kt)("li",{parentName:"ul"},"Click ","\xab","Enter URL(s)","\xbb"," and navigate to the desired URL or WFS."),(0,r.kt)("li",{parentName:"ul"},"Drag a dataset to ","\xab","Drop file(s) here","\xbb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name your dataset and enter any required metadata elements. Metadata entry is determined by the metadata configuration in the theme associated with your dataset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When a dataset series using individual files is created, the dataset series, the dataset belonging to the series and the dataset series metadata and dataset metadata are published. In the final step of dataset series creation, toggle ",(0,r.kt)("em",{parentName:"p"},"Create services")," to publish dataset series services. Navigate to the dataset contained in your series to publish the individual dataset's services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Execution rules are displayed in the final step of the workflow if your theme contains a transformation configuration. You can activate toggles to execute the transformation and create services for a series enabled target theme."))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dataset series using batch upload:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Toggle the switch to use batch upload. There is only one way to upload files using batch upload. Creating a dataset series using batch upload requires the upload of a zip that directly contains the datasets as zips.",(0,r.kt)("img",{src:a(1329).Z,alt:"batch upload",title:"Dataset series using batch upload",className:"img-responsive img-inline-help"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The dataset name and metadata steps are not available for dataset series creation using batch upload. We recommend configuring a ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup-hc/edit-metadata-config/2015-02-10-theme-edit-metadata"},"dataset name pattern autofill rule")," in your theme to automatically name datasets belonging to a series. You can edit the metadata on a per dataset basis after series creation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The mass publishing of services for dataset series using batch upload is not currently supported. When a dataset series using batch upload is created, the dataset series, the datasets belonging to the series and the dataset series metadata and dataset metadata are published. You can navigate to the resources to publish services after series creation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The final step in the data series using batch upload workflow displays a list of the datasets added to the series.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dataset series can be viewed in the dataset resource list. Dataset series are identified by a 'Series' label. Click on the chevron next to the 'Series' label to expand the series and view the individual dataset resources which belong to the series. Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/create-manage-datasets/create-dataset/2015-01-08-viewing-resource-list"},"Viewing datasets in the resource list")," documentation page for more information about working with the resource list and optimizing the display of fields to best suit your needs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the dataset series to navigate to the resource. Dataset series are organized similarly to datasets. The overview panel of a dataset series provides a summary overview of the resource including ownership information and a status panel which displays the system status of the series metadata and services. Users can edit series metadata in the metadata section, and series services in the view and download services sections. The dataset series section contains a list of all datasets which belong to a series. Every dataset that is published using a series enabled theme is added to the same dataset series.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To delete a dataset series, navigate to the series and click ","\xab","Delete","\xbb",". The dataset series and all sub-datasets are deleted."))))}p.isMDXComponent=!0},1329:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/batch_upload-be9b3f5355642637b0e07d66fa31b02a.png"}}]);