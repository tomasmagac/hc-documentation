"use strict";(self.webpackChunkhc_documentation=self.webpackChunkhc_documentation||[]).push([[9036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Creating Styled Layer Descriptor files (SLDs) for hale\xbbconnect",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},o=void 0,l={unversionedId:"tutorials/2018-05-03-sld-tutorial",id:"tutorials/2018-05-03-sld-tutorial",title:"Creating Styled Layer Descriptor files (SLDs) for hale\xbbconnect",description:"Styled Layer Descriptor files",source:"@site/docs/tutorials/2018-05-03-sld-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/2018-05-03-sld-tutorial",permalink:"/docs/tutorials/2018-05-03-sld-tutorial",draft:!1,tags:[],version:"current",frontMatter:{title:"Creating Styled Layer Descriptor files (SLDs) for hale\xbbconnect",categories:["help-page-category-tutorials","help-page-subcategory-tutorials"],layout:"help-detail",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Using hale\xbbconnect resources in ArcGIS Online",permalink:"/docs/tutorials/2018-05-02-arcGisOnline-tutorial"},next:{title:"Preparing ESRI shapefiles for online transformation",permalink:"/docs/tutorials/2018-05-04-shp-tutorial"}},i={},p=[{value:"<strong>Styled Layer Descriptor files</strong>",id:"styled-layer-descriptor-files",level:3},{value:"<strong>INSPIRE SLDs</strong>",id:"inspire-slds",level:3},{value:"<strong>Creating a Styled Layer Descriptor file for upload to hale\xbbconnect</strong>",id:"creating-a-styled-layer-descriptor-file-for-upload-to-haleconnect",level:3},{value:"<strong>Adding layer names, layer titles and rule titles to a Styled Layer Descriptor file</strong>",id:"adding-layer-names-layer-titles-and-rule-titles-to-a-styled-layer-descriptor-file",level:3}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"styled-layer-descriptor-files"},(0,r.kt)("strong",{parentName:"h3"},"Styled Layer Descriptor files")),(0,r.kt)("p",null,"The OGC standard Styled Layer Descriptor (SLD) defines an XML format to encode cartographic rules by which to display features. It reuses the OGC standards Symbology Encoding (SE) and Filter Encoding (FE). The SLD standard extends the OGC Web Map Service (WMS). A basic WMS supports named layers and styles which do not enable end-users to define custom symbology. The SLD standard extends the WMS standard to allow users to provide styling rules in a Styled Layer Descriptor file."),(0,r.kt)("p",null,"Symbology encoding offers standard cartographic styling options. Surface features can be styled using color or graphic fill options, and opacity. Line features can be styled in various ways by applying color and opacity, line casing, dashed lines and line join options which control how line features are symbolized where they join. Point features can be symbolized using graphic symbols, such as icons, or the WellKnownName element that includes the values square, circle, triangle, star, cross, and x."),(0,r.kt)("p",null,"The Symbology Encoding standard (SE) also supports the styling of text labels. Font family, style and size selection are all supported. Label placement rules enable the user to control how labels are displayed in relation to the geometry they describe, including offsets, rotation and splining."),(0,r.kt)("p",null,"Filter encoding (FE) can be used to make selections and apply symbology to different geometries, or attributes. Many INSPIRE SLDs are based on INSPIRE codelist values. Datasets are filtered based on codelist values to obtain the desired feature sets, and symbology is applied to only those features matching the filter criteria. In other cases, SLDs are based on geometry type."),(0,r.kt)("p",null,"At wetransform, we use the open source framework deegree to provide OGC- and INSPIRE-compliant view and download services. deegree view services (Web Map Services) support the use of SLDs. Like most web map servers, deegree supports several server-specific custom functions which extend the SLD, SE and FE standards to enhance styling."),(0,r.kt)("h3",{id:"inspire-slds"},(0,r.kt)("strong",{parentName:"h3"},"INSPIRE SLDs")),(0,r.kt)("p",null," hale\xbbconnect has an extensive library of INSPIRE compliant SLDs across all 34 Annex themes. When a dataset is published on the hale\xbbconnect platform, the feature type contained in the uploaded data set is identified and the hale\xbbconnect INSPIRE SLD library is searched for a matching style layer. INSPIRE SLDs are then applied if available. A default style layer is applied to all datasets for which a matching style layer does not exist."),(0,r.kt)("p",null," If you have published INSPIRE compliant GML on the hale\xbbconnect platform and an INSPIRE SLD is not applied, please ",(0,r.kt)("a",{parentName:"p",href:"https://wetransform.atlassian.net/servicedesk/customer/portal/1"},"contact support"),"."),(0,r.kt)("h3",{id:"creating-a-styled-layer-descriptor-file-for-upload-to-haleconnect"},(0,r.kt)("strong",{parentName:"h3"},"Creating a Styled Layer Descriptor file for upload to hale\xbbconnect")),(0,r.kt)("p",null,"Styled Layer Descriptor files can be uploaded to the View Services section of a theme."),(0,r.kt)("img",{src:n(3475).Z,alt:"",title:"Uploading an SLD to a theme",className:"img-responsive img-inline-help"}),(0,r.kt)("p",null,"When you upload a dataset to hale\xbbconnect, the feature type in the dataset is identified and matched against the feature type referenced in the uploaded SLD. The SLD is applied when a match is identified."),(0,r.kt)("p",null,"In order to upload an SLD to hale\xbbconnect, it must be a fully valid SLD file with ",(0,r.kt)("inlineCode",{parentName:"p"},"StyledLayerDescriptor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UserStyle")," outer tags. In the example below, the ",(0,r.kt)("inlineCode",{parentName:"p"},"StyledLayerDescriptor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UserStyle")," elements are unqualified because the default namespace of the document is ",(0,r.kt)("inlineCode",{parentName:"p"},'xmlns="http://www.opengis.net/sld"'),"."),(0,r.kt)("p",null,"An SLD for a shapefile must contain a namespace declaration which points to the shapefile schema. The shapefile namespace declaration follows the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},'xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/<nameOfShapefile>"'),". The shapefile name used in the SLD should correspond to the name of the shapefile that was uploaded to create the schema on hale\xbbconnect."),(0,r.kt)("p",null,"hale\xbbconnect searches the SLD for a ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeName")," attribute, which it uses to match against the uploaded dataset.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeName")," attribute must be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeStyle")," element. The attribute must contain the shapefile namespace prefix, and the name of the shapefile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  <se:FeatureTypeName>ns:nameOfShapefile</se:FeatureTypeName>\n")),(0,r.kt)("p",null,"The shapefile namespace prefix must be added to any shapefile property that is referenced. For example, if you want to use the shapefile attribute 'name' to label your polygons, it must have the shapefile namespace prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"ns"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  <se:Label>\n      <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n  </se:Label>\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must add '/text()' after the referenced property in TextSymbolizer Label tags to display text in view services.")),(0,r.kt)("h3",{id:"adding-layer-names-layer-titles-and-rule-titles-to-a-styled-layer-descriptor-file"},(0,r.kt)("strong",{parentName:"h3"},"Adding layer names, layer titles and rule titles to a Styled Layer Descriptor file")),(0,r.kt)("p",null,"Layer names and layer titles can be added to SLDs. Layer names cannot contain white spaces. The INSPIRE layer name for the Protected Sites feature type is ",(0,r.kt)("inlineCode",{parentName:"p"},"PS.ProtectedSite"),". Layer names can be added to the NamedLayer.Name element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name> ...\n    ...\n</NamedLayer>\n")),(0,r.kt)("p",null,"The INSPIRE layer title for the Protected Sites feature type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected Sites"),". Layer titles can be added to the NamedLayer.Description.Title element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name>\n    <se:Description>\n        <se:Title>Protected Sites</se:Title>\n    </se:Description>...\n    ...\n</NamedLayer>\n")),(0,r.kt)("p",null,"Rule titles control the text displayed in the WMS legend. Rule titles can be added to the Rule.Description.Title element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<se:Rule>\n    <se:Description>\n    <se:Title>protected sites: polygon</se:Title>\n    </se:Description>...\n    ...\n</se:Rule>\n")),(0,r.kt)("p",null,"Now, let's take a look at an example of a fully valid SLD file which can be published on hale\xbbconnect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"SLD for shapefile"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  <?xml version="1.0" encoding="UTF-8"?>\n  <StyledLayerDescriptor\n  version="1.1.0"  \n  xmlns="http://www.opengis.net/sld"\n  xmlns:ogc="http://www.opengis.net/ogc"\n  xmlns:se="http://www.opengis.net/se"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  xmlns:gml="http://www.opengis.net/gml/3.2"\n  xmlns:sld="http://www.opengis.net/sld"\n  xmlns:ns="http://www.esdi-humboldt.eu/hale/shp/myShapefile"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n  <NamedLayer>\n    <se:Name>MyShapefileLayer</se:Name>\n    <UserStyle>\n      <se:Name>MyStyle</se:Name>\n      <se:Description>\n        <se:Title>MyStyle</se:Title>\n      </se:Description>\n      <se:FeatureTypeStyle>\n        <se:Name>Default Polygon Style</se:Name>  \n        <se:FeatureTypeName>ns:myShapefile</se:FeatureTypeName>   \n          <se:Rule>\n            <se:Description>\n              <se:Title>Shapefile Polygons</se:Title>\n            </se:Description>\n            <se:PolygonSymbolizer>\n              <se:Fill>\n                <se:SvgParameter name="fill">#78C46E</se:SvgParameter>\n                <se:SvgParameter name="fill-opacity">0.5</se:SvgParameter>\n              </se:Fill>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#38A800</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1.5</se:SvgParameter>\n              </se:Stroke>\n            </se:PolygonSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:MaxScaleDenominator>40000</se:MaxScaleDenominator>\n            <se:TextSymbolizer>\n              <se:Label>\n                <ogc:PropertyName>ns:name/text()</ogc:PropertyName>\n              </se:Label>\n              <se:Font>\n                <se:SvgParameter name="font-family">Arial</se:SvgParameter>\n                <se:SvgParameter name="font-size">14</se:SvgParameter>\n                <se:SvgParameter name="font-style">normal</se:SvgParameter>\n                <se:SvgParameter name="font-weight">bold</se:SvgParameter>\n              </se:Font>\n              <se:Halo>\n                <se:Radius>3</se:Radius>\n                <se:Fill>\n                  <se:SvgParameter name="fill">#ffffff</se:SvgParameter>\n                </se:Fill>\n              </se:Halo>\n              <se:Fill>\n                <se:SvgParameter name="fill">#38A800</se:SvgParameter>\n              </se:Fill>\n          </se:TextSymbolizer>          \n        </se:Rule>\n      </se:FeatureTypeStyle>\n    </UserStyle>\n  </NamedLayer>\n</StyledLayerDescriptor>\n')),(0,r.kt)("p",null,"The next example is the Protected Sites INSPIRE SLD. In this example, the INSPIRE Protected Sites schema is declared as ",(0,r.kt)("inlineCode",{parentName:"p"},'xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"')),(0,r.kt)("p",null,"hale\xbbconnect searches the SLD for a ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeName")," attribute, which it uses to match against the uploaded dataset.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeName")," attribute must be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureTypeStyle")," element. The attribute must contain the INSPIRE schema namespace prefix, and the name of the feature type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n")),(0,r.kt)("p",null,"The schema namespace prefix must be added to any attribute that is referenced. For example, if you want to use the attribute 'geometry' to filter your features, it must have the namespace prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"ps"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    <ogc:Filter>\n      <ogc:PropertyIsEqualTo>\n        <ogc:Function name="IsCurve">\n          <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n        </ogc:Function>\n        <ogc:Literal>true</ogc:Literal>\n      </ogc:PropertyIsEqualTo>\n    </ogc:Filter>\n')),(0,r.kt)("p",null,"In the filter example above, the deegree function ",(0,r.kt)("inlineCode",{parentName:"p"},"IsCurve")," is used to filter feature geometry, so that the symobology rule is applied only to line features. For more information about deegree functions which extend the SLD specification, visit the ",(0,r.kt)("a",{parentName:"p",href:"http://download.deegree.org/documentation/3.4.5/html/renderstyles.html#deegree-specific-extensions"},"deegree documentation pages"),"."),(0,r.kt)("p",null,"Here is an example of a fully valid INSPIRE SLD file which can be published on hale\xbbconnect. Protected Site features may be point, line or polygon and the SLD applies a different symbology rule to each geometry type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"SLD for GML"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  <?xml version="1.0" encoding="UTF-8"?>\n  <StyledLayerDescriptor\n  version="1.1.0"  \n  xmlns="http://www.opengis.net/sld"\n  xmlns:ogc="http://www.opengis.net/ogc"\n  xmlns:se="http://www.opengis.net/se"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  xmlns:gml="http://www.opengis.net/gml/3.2"\n  xmlns:sld="http://www.opengis.net/sld"\n  xmlns:ps="http://inspire.ec.europa.eu/schemas/ps/4.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sldAll.xsd http://www.opengis.net/se http://schemas.opengis.net/se/1.1.0/FeatureStyle.xsd">\n  <NamedLayer>\n    <se:Name>PS.ProtectedSite</se:Name>\n    <se:Description>\n        <se:Title>Protected Sites</se:Title>\n    </se:Description>\n    <UserStyle>\n      <se:Name>PS.ProtectedSite.Default</se:Name>\n      <se:FeatureTypeStyle>\n        <se:Description>\n          <se:Title>Protected Sites Default Style</se:Title>\n          <se:Abstract>Point geometries are rendered as a square with a size of 6 pixels, with a 50% grey (#808080) fill and a black (#000000) outline. Line geometries are rendered as a solid black line with a stroke width of 1 pixel. Polygon geometries are rendered using a 50% grey (#808080) fill and a solid black outline with a stroke width of 1 pixel.</se:Abstract>\n        </se:Description>\n        <se:FeatureTypeName>ps:ProtectedSite</se:FeatureTypeName>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: polygon</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsSurface">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n                </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:PolygonSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Fill>\n                <se:SvgParameter name="fill">#808080</se:SvgParameter>\n              </se:Fill>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n              </se:Stroke>\n            </se:PolygonSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: line</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsCurve">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n              </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:LineSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Stroke>\n                <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n              </se:Stroke>\n            </se:LineSymbolizer>\n          </se:Rule>\n          <se:Rule>\n            <se:Description>\n              <se:Title>protected sites: point</se:Title>\n            </se:Description>\n            <ogc:Filter>\n              <ogc:PropertyIsEqualTo>\n                <ogc:Function name="IsPoint">\n                  <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n                </ogc:Function>\n                <ogc:Literal>true</ogc:Literal>\n              </ogc:PropertyIsEqualTo>\n            </ogc:Filter>\n            <se:PointSymbolizer>\n              <se:Geometry>\n                <ogc:PropertyName>ps:geometry</ogc:PropertyName>\n              </se:Geometry>\n              <se:Graphic>\n                <se:Mark>\n                  <se:WellKnownName>square</se:WellKnownName>\n                  <se:Fill>\n                    <se:SvgParameter name="fill">#808080</se:SvgParameter>\n                  </se:Fill>\n                  <se:Stroke>\n                    <se:SvgParameter name="stroke">#000000</se:SvgParameter>\n                    <se:SvgParameter name="stroke-width">1</se:SvgParameter>\n                  </se:Stroke>\n                </se:Mark>\n                <se:Size>6</se:Size>\n              </se:Graphic>\n            </se:PointSymbolizer>\n          </se:Rule>\n        </se:FeatureTypeStyle>\n      </UserStyle>\n    </NamedLayer>\n  </StyledLayerDescriptor>\n')))}d.isMDXComponent=!0},3475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tutorial_SLD_ViewServices-1aaaf6ec0fd879c6d0be1e887bcb15e0.png"}}]);