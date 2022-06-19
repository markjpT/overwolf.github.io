"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6649],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,f=u["".concat(i,".").concat(c)]||u[c]||p[c]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},95572:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"validate-your-manifest",title:"Validate your manifest.json",sidebar_label:"Validate your manifest"},s=void 0,m={unversionedId:"api/validate-your-manifest",id:"api/validate-your-manifest",title:"Validate your manifest.json",description:"To help you make sure that your manifest file is correct and complete, validate it against our schema file.",source:"@site/pages/docs/api/validate-your-manifest.mdx",sourceDirName:"api",slug:"/api/validate-your-manifest",permalink:"/docs/api/validate-your-manifest",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/validate-your-manifest.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"validate-your-manifest",title:"Validate your manifest.json",sidebar_label:"Validate your manifest"},sidebar:"api",previous:{title:"manifest.json",permalink:"/docs/api/manifest-json"},next:{title:"Games IDs",permalink:"/docs/api/games-ids"}},u={},d=[{value:"Online validation",id:"online-validation",level:2},{value:"Validate your JSON structure",id:"validate-your-json-structure",level:4},{value:"Validate your schema",id:"validate-your-schema",level:4},{value:"Automated schema validation",id:"automated-schema-validation",level:2},{value:"1. Install the npm package",id:"1-install-the-npm-package",level:3},{value:"2. Pull the latest manifest",id:"2-pull-the-latest-manifest",level:3},{value:"3. Validate the data",id:"3-validate-the-data",level:3}],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To help you make sure that your manifest file is correct and complete, validate it against our schema file."),(0,o.mdx)("p",null,"You can find the most updated schema in our ",(0,o.mdx)("a",{href:"https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json",target:"_blank"},"GitHub repository")," (and you are welcome to suggest changes/updates)."),(0,o.mdx)("h2",{id:"online-validation"},"Online validation"),(0,o.mdx)("h4",{id:"validate-your-json-structure"},"Validate your JSON structure"),(0,o.mdx)("p",null,"Make sure that your ",(0,o.mdx)("strong",{parentName:"p"},"manifest.json")," file is a strictly valid JSON, without trailing commas, etc.",(0,o.mdx)("br",{parentName:"p"}),"\n","You can use ",(0,o.mdx)("a",{href:"https://jsonlint.com/",target:"_blank"},"jsonlint.com")," or any other similar services."),(0,o.mdx)("h4",{id:"validate-your-schema"},"Validate your schema"),(0,o.mdx)("p",null,"Make sure that your ",(0,o.mdx)("strong",{parentName:"p"},"manifest.json")," file contains only valid Overwolf flags, properties, etc."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Go to ",(0,o.mdx)("a",{href:"http://www.jsonschemavalidator.net",target:"_blank"},"jsonschemavalidator.net")," or similar service like ",(0,o.mdx)("a",{href:"http://www.jsonschemalint.com",target:"_blank"},"jsonschemalint.com"),"."),(0,o.mdx)("li",{parentName:"ol"},"Copy-paste the ",(0,o.mdx)("a",{parentName:"li",href:"https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"},"schema's"),' and your manifest.json code into the "Schema" and "Input JSON" windows, respectively.'),(0,o.mdx)("li",{parentName:"ol"},"Check for any errors or missing data.")),(0,o.mdx)("h2",{id:"automated-schema-validation"},"Automated schema validation"),(0,o.mdx)("p",null,"To better follow the modern practices of CI and CD, we strongly recommend you to automate the validation process using your preferred tools."),(0,o.mdx)("p",null,"We demonstrate here how to do that using one of the popular npm schema validation packages, called ",(0,o.mdx)("a",{href:"https://www.npmjs.com/package/ajv-cli",target:"_blank"},"ajv-cli"),".  Also, ",(0,o.mdx)("strong",{parentName:"p"},"the examples here are tested in the terminal of Visual Studio Code"),"."),(0,o.mdx)("p",null,"The steps which developers should take to validate their manifest.json automatically:"),(0,o.mdx)("h3",{id:"1-install-the-npm-package"},"1. Install the npm package"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"> npm install -g ajv-cli\n")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"g- install this package globally and make it available for all your projects.")),(0,o.mdx)("h3",{id:"2-pull-the-latest-manifest"},"2. Pull the latest manifest"),(0,o.mdx)("p",null,"Download the schema from GitHub and save it as overwolf-manifest-schema.json: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'> curl -o overwolf-manifest-schema.json "https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"\n')),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"o - output name.")),(0,o.mdx)("h3",{id:"3-validate-the-data"},"3. Validate the data"),(0,o.mdx)("p",null,"Validate your manifest.json against the local schema file that you just downloaded (overwolf-manifest-schema.json):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},">  ajv validate -s overwolf-manifest-schema.json -d manifest.json\n")))}p.isMDXComponent=!0}}]);