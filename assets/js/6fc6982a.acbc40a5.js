"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Profile feature types",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-ft"],layout:"help-detail",language:"en"},o=void 0,l={unversionedId:"define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types",id:"define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types",title:"Profile feature types",description:"The Feature types section displays the feature types contained in the profile's schema. For each feature type, hale\xbbconnect displays its name and properties.",source:"@site/docs/define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types.md",sourceDirName:"define-schema-profile/define-type-constraints",slug:"/define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types",permalink:"/docs/define-schema-profile/define-type-constraints/2015-02-13-profile-feature-types",draft:!1,tags:[],version:"current",frontMatter:{title:"Profile feature types",categories:["help-page-category-profileworkflow","help-page-subcategory-profileworkflow-ft"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Download a profile as a test suite or an example XML document",permalink:"/docs/define-schema-profile/download-profile-as/2015-02-14-profile-files"},next:{title:"Define profile consistency conditions",permalink:"/docs/define-schema-profile/define-consistency-conds/2015-02-12-profile-consistency-conditions"}},s={},p=[{value:"Setting type level constraints",id:"setting-type-level-constraints",level:3},{value:"Setting property level constraints",id:"setting-property-level-constraints",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Feature types section displays the feature types contained in the profile's schema. For each feature type, hale\xbbconnect displays its name and properties."),(0,i.kt)("p",null,"The search box at the top of the page allows you to filter feature types by name. Toggle the ",(0,i.kt)("em",{parentName:"p"},"Show inherited properties")," switch to view additional, inherited properties for each feature type. Toggle the ",(0,i.kt)("em",{parentName:"p"},"Show diff")," switch to view the feature types that are extended by the profile."),(0,i.kt)("p",null,"For each property in a feature type, the name and data type are listed. Click the \xbb button to view additional information on the property, such as constraints defined on it. ",(0,i.kt)("img",{src:n(5847).Z,alt:"",title:"Profile details",className:"img-responsive img-inline-help"})),(0,i.kt)("h3",{id:"setting-type-level-constraints"},"Setting type level constraints"),(0,i.kt)("p",null,"To make a single feature type mandatory, toggle the switch in the feature type header. A mandatory feature type has to occur at least once in any document. This is particularly useful in GML Feature Collections, when you want to state which types of objects have to be present."),(0,i.kt)("img",{src:n(9187).Z,alt:"",title:"Setting type level constraints",className:"img-responsive img-inline-help"}),(0,i.kt)("h3",{id:"setting-property-level-constraints"},"Setting property level constraints"),(0,i.kt)("p",null,"Click the \xabEdit\xbb icon next to the name of the feature type to add property level constraints."),(0,i.kt)("p",null,"Required fields, range values, cardinality and tagged values can each be defined on the property level. Click the \xbb button next to the property's data type to expand the panel.",(0,i.kt)("img",{src:n(7376).Z,alt:"",title:"Setting property level constraints",className:"img-responsive img-inline-help"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content required")," Click the drop down menu to make the property optional or mandatory. This is only possible if the property was not previously mandatory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Allowed values")," This function can be used to restrict which values \u200b\u200bmay be present in the data. This restriction can narrow down an already existing restriction or define a new restriction. A typical use case is when only one code list value in the context of the profile should be allowed."),(0,i.kt)("p",null,"To specify valid values \u200b\u200bfor any string, enter them in the text box, separated by a comma."),(0,i.kt)("p",null,"To select valid values \u200b\u200bfor a field with a code list or enumeration, select them from the list of options."),(0,i.kt)("p",null,"To set a value range for a numeric field, enter an upper and a lower limit. This must be narrower than existing limitations at the schema level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Minimum and Maximum count")," The cardinality can be restricted on the property level, e.g. from ","[1..n]"," to ","[1..1]",". Enter the minimum and maximum values in the text boxes. Only narrower values \u200b\u200bare allowed than defined at the schema level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tagged values")," This function can be used to identify profile elements that will be used to generate test suites and example files. To specify a tagged value, select a tag name from the drop down menu. Enter the value in the text box provided. Multiple tagged values for the same tag name are not possible."),(0,i.kt)("p",null,"There are a number of different tagged values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Testcase-label (ATS-Titel): The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"ATS-Titel")," can be used to label the test case in the ETF test suite."),(0,i.kt)("li",{parentName:"ol"},"Testcase-description (ATS-Beschreibung): The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"ATS-Beschreibung")," can be used to describe the test case in the ETF test suite, or to describe the manual check required when a ",(0,i.kt)("inlineCode",{parentName:"li"},"Manuelle Pr\xfcfung")," tag is added."),(0,i.kt)("li",{parentName:"ol"},"Module-id: The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"module-id")," can be used to signify that a test case belongs to a module, or group of tests, that are grouped together in the ETS file."),(0,i.kt)("li",{parentName:"ol"},"Example: The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"example")," can be used to provide an example of a valid value for the element."),(0,i.kt)("li",{parentName:"ol"},"Example XML: The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"example-xml")," enables users to provide an XML fragment as an example value in the example XML document export. The ",(0,i.kt)("inlineCode",{parentName:"li"},"example-xml")," tag is available for any feature type and any property. First, add a tagged value and select the ",(0,i.kt)("inlineCode",{parentName:"li"},"example-xml")," tag from the available options in the dropdown list. Next, enter a valid XML code block in the editable field. Fragments must be valid, parsable XML. If the fragment includes namespaces, the namespaces must be defined in the fragment."),(0,i.kt)("li",{parentName:"ol"},"Manual check (Manuelle Pr\xfcfung): The reserved tag ",(0,i.kt)("inlineCode",{parentName:"li"},"Manuelle Pr\xfcfung")," enables users to require a manual check of test results. ETS files which contain tests labeled with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Manuelle Pr\xfcfung")," tag are displayed in yellow when executed. A description of the manual check required by end-users can be provided in a Testcase-description (ATS-Beschreibung) tag.")),(0,i.kt)("p",null,"Examples of valid fragments:"),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},'<gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Example-text</gco:CharacterString>')),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"<CharacterString>Example-text</CharacterString>")),(0,i.kt)("p",null,"Example of an invalid fragment:"),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"<gco:CharacterString>Example-text</gco:CharacterString>")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"example-xml")," tag is used to provide a character string value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gmd:language")," element."),(0,i.kt)("img",{src:n(655).Z,alt:"",title:"Using the example tag",className:"img-responsive img-inline-help"}),(0,i.kt)("p",null,"The file below is the example XML document export which contains the character string value provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example-xml")," tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  <gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/csw/2.0.2/profiles/apiso/1.0.0/apiso.xsd">\n    <gmd:language>\n      <gco:CharacterString>ger</gco:CharacterString>\n    </gmd:language>\n    <gmd:contact>\n      <gmd:CI_ResponsibleParty>\n        <gmd:role>\n          <gmd:CI_RoleCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="custodian"/>\n        </gmd:role>\n      </gmd:CI_ResponsibleParty>\n    </gmd:contact>\n    <gmd:dateStamp>\n      <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>\n    </gmd:dateStamp>\n    <gmd:identificationInfo>\n      <gmd:MD_DataIdentification>\n        <gmd:citation>\n          <gmd:CI_Citation>\n            <gmd:title>\n              <gco:CharacterString>example string</gco:CharacterString>\n            </gmd:title>\n            <gmd:date>\n              <gmd:CI_Date>\n                <gmd:date>\n                  <gco:DateTime>2018-05-30T09:00:00</gco:DateTime>\n                </gmd:date>\n                <gmd:dateType>\n                  <gmd:CI_DateTypeCode codeList="http://schemas.opengis.net/iso/19139/20070417/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode codeListValue="creation"/>\n                </gmd:dateType>\n              </gmd:CI_Date>\n            </gmd:date>\n          </gmd:CI_Citation>\n        </gmd:citation>\n        <gmd:abstract>\n          <gco:CharacterString>example string</gco:CharacterString>\n        </gmd:abstract>\n        <gmd:language>\n          <gco:CharacterString>example string</gco:CharacterString>\n        </gmd:language>\n      </gmd:MD_DataIdentification>\n    </gmd:identificationInfo>\n  </gmd:MD_Metadata>\n')),(0,i.kt)("p",null,"When you are finished adding constraints to the selected feature type, click ","\xab","Update","\xbb"))}d.isMDXComponent=!0},5847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2018-10-23 Profile details-fef66a6cfb58449cfdc0ff9ea1a6876f.png"},7376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/allowedValues-e4ad77a36cf4c84e2e43d3e3d2379b8a.png"},655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exampleTag-af03a1a15d06d49bc13e3b9f0941a16b.png"},9187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/typeLevel-1cab0b5ee5c41f73f68100a3be536287.png"}}]);