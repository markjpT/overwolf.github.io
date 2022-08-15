"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[357],{3905:function(e,t,o){o.r(t),o.d(t,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return m},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function A(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){return function(t){var o=d(t.components);return n.createElement(e,a({},t,{components:o}))}},d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),p=d(o),c=r,v=p["".concat(i,".").concat(c)]||p[c]||u[c]||a;return o?n.createElement(v,s(s({ref:t},l),{},{components:o})):n.createElement(v,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=v;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}v.displayName="MDXCreateElement"},58325:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return A},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={id:"submit-a-new-version",image:"/img/embed/api-best-practices.jpg",title:"Submit a new version of your app",sidebar_label:"Submit a new version"},A=void 0,l={unversionedId:"topics/developers-console/submit-a-new-version",id:"topics/developers-console/submit-a-new-version",title:"Submit a new version of your app",description:"Alright, so your app is published on the Overwolf Appstore, and it's time to release a new version. That's awesome!",source:"@site/pages/docs/topics/developers-console/submit-a-new-version.mdx",sourceDirName:"topics/developers-console",slug:"/topics/developers-console/submit-a-new-version",permalink:"/topics/developers-console/submit-a-new-version",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/developers-console/submit-a-new-version.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"submit-a-new-version",image:"/img/embed/api-best-practices.jpg",title:"Submit a new version of your app",sidebar_label:"Submit a new version"},sidebar:"topics",previous:{title:"Release notes",permalink:"/topics/developers-console/release-notes"},next:{title:"Submit for review",permalink:"/topics/developers-console/submit-for-review"}},p={},d=[{value:"Upload new app version",id:"upload-new-app-version",level:2},{value:"1. Create an OPK package",id:"1-create-an-opk-package",level:3},{value:"2. Login to the developers console",id:"2-login-to-the-developers-console",level:3},{value:"3. Upload the new OPK",id:"3-upload-the-new-opk",level:3},{value:"4. Submit your OPK for QA review",id:"4-submit-your-opk-for-qa-review",level:3},{value:"5. Set the phasing rate",id:"5-set-the-phasing-rate",level:3},{value:"6. Increase or Halt the phasing rate",id:"6-increase-or-halt-the-phasing-rate",level:3},{value:"Release history",id:"release-history",level:2}],c={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Alright, so your app is published on the Overwolf Appstore, and it's time to release a new version. That's awesome!",(0,a.mdx)("br",{parentName:"p"}),"\n","In this article we'll go over the process of submitting an updated version of your app using the Overwolf developers console."),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The process described in this article is only available for apps already published on the Overwolf app store. If you\u2019re looking for guidance on publishing your very first app version, you\u2019re in the wrong place - ",(0,a.mdx)("a",{parentName:"p",href:"/start/submit-your-app/submit-your-app-to-the-store"},"try this article")," instead."))),(0,a.mdx)("h2",{id:"upload-new-app-version"},"Upload new app version"),(0,a.mdx)("p",null,"Don't forget to update your manifest ",(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#meta-object"},"build version"),", once the version has been changed."),(0,a.mdx)("h3",{id:"1-create-an-opk-package"},"1. Create an OPK package"),(0,a.mdx)("p",null,"To get started, you first need an OPK file with the latest version you wish to upload."),(0,a.mdx)("p",null,"Please follow the OPK creation process as described ",(0,a.mdx)("a",{parentName:"p",href:"/start/submit-your-app/submit-your-app-to-the-store#opk-package-overview"},"here"),"."),(0,a.mdx)("h3",{id:"2-login-to-the-developers-console"},"2. Login to the developers console"),(0,a.mdx)("p",null,"Once you have a valid OPK with the latest version, to get the update cycle started, upload the new version to ",(0,a.mdx)("a",{parentName:"p",href:"https://console.overwolf.com/"},"OW developers console"),"."),(0,a.mdx)("p",null,"From the developers console you can:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"welcome-screen",src:o(43292).Z,width:"1501",height:"932"})),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Choose an OPK and upload it."),(0,a.mdx)("li",{parentName:"ol"},"See which versions are public and live, and their rollout status."),(0,a.mdx)("li",{parentName:"ol"},"See the release history of previous versions.")),(0,a.mdx)("h3",{id:"3-upload-the-new-opk"},"3. Upload the new OPK"),(0,a.mdx)("p",null,"Drag your OPK to upload it. Once it's ready, you can set the rollout percentage."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"opk-upload",src:o(17963).Z,width:"916",height:"214"})),(0,a.mdx)("h3",{id:"4-submit-your-opk-for-qa-review"},"4. Submit your OPK for QA review"),(0,a.mdx)("p",null,"Before you can start deploying your new app's version to the production environment (which is the OW app store), you can send your app for an Overwolf QA review.",(0,a.mdx)("br",{parentName:"p"}),"\n","We created a separate guide on ",(0,a.mdx)("a",{parentName:"p",href:"submit-for-review"},"how to submit your OPK for QA review")," by the Overwolf team."),(0,a.mdx)("h3",{id:"5-set-the-phasing-rate"},"5. Set the phasing rate"),(0,a.mdx)("p",null,"After uploading a new version of your app, you can choose the phasing (rollout) rate - meaning what percentage of your app's users will get this new version."),(0,a.mdx)("p",null,"We highly recommend starting with a low phasing rate (like 15%), to get some feedback on compatibility issues, bug reports and other issues that you might have missed in your QA process."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"rollout",src:o(78973).Z,width:"885",height:"385"})),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The 'Installs' and 'Active Installs' statistics only update once per day. "))),(0,a.mdx)("h3",{id:"6-increase-or-halt-the-phasing-rate"},"6. Increase or Halt the phasing rate"),(0,a.mdx)("p",null,"After the new version was rolled out to production and is working as expected, you can gradually increase the phasing rate until it reaches %100 - meaning all of your users got the new version."),(0,a.mdx)("p",null,"If you find any issues, you can immediately halt the rollout."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"rollout",src:o(89498).Z,width:"883",height:"591"})),(0,a.mdx)("h2",{id:"release-history"},"Release history"),(0,a.mdx)("p",null,"You can easily view the release history of all the previous versions:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"rollout",src:o(13904).Z,width:"885",height:"632"})))}u.isMDXComponent=!0},89498:function(e,t,o){t.Z=o.p+"assets/images/increase-phasing-3931ff3d7304f8f3beb490cac82eb8e0.png"},17963:function(e,t){t.Z="data:image/png;base64,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OB4s18ZOvE4Mhdo+w52Te21yD7fZ+57A8JwArId4TTTidaE1xes0ScfX7Ytt5JUAPXhwYnbk2p3XduVeSu7pyvVwXF4Zr+NPcSCgxSsA4jXTiNeF1havpefayJvEawm+ccHBg1PbENz5zmuJ4zFktzX5+XZsPy3n7pvFa/s8u7eeXHxs1p149bUBgDUSr4lGvC600q8N3H8+tF3bgt2/RdUpXwY4eLDrvzEHu43SzpCVXafeby7bKZ26jddtPja33u3U8cFG01ze2Xndv/W0jLtPm9ftDzgzuQIAKyFeE414XWitv7A16jp1d8vz4MHrTDr1GpvH97/04gAQIF4TzZJ4ff369U8//VTefPr06tWrH3/8sbw5HvEad0vjdXP6wCYoADWI10SzJF7rEK9xtzReAaCSpodIpPy1/b+J17ga8QoAwIR4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVidc48QoAUJl4jROvAACVide4/s/u3wAA1CJe4/o/u/JfAQAAfH3iNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNU68AgBUJl7jxCsAQGXiNa7/szPGGGOMMZWn1NixiVdjjDHGGHP8KTV2bLc8XgEAuE3EKwAAaYhXAADSEK8AAKQhXgEASEO8AgCQhngFACAN8QoAQBriFQCANMQrAABpiFcAANIQrwAApCFeAQBIQ7wCAJCGeAUAIA3xCgBAGuIVAIA0xCsAAGmIVwAA0hCvAACkIV4BAEhDvAIAkIZ4BQAgDfEKAEAa4hUAgDTEKwAAaYhXAADSEK8AAKQhXgEASEO8AgCQhngFACAN8QoAQBriFQCANMQrAABpiFcAANL4U8TrxcVFeRwAALha042lIKOOEK+bzebZs2e//PLLPwAA4JCmFZtibLqxFGTUEeL18vKyeY7z8/N/AQDAIU0rNsXYdGMpyKgjxOuHDx/ev3//rtM8EAAATPWh2BRj042lIKOOEK+95lEAAOAqpRpv5mjxCgAAX5t4BQAgDfEKAEAa4hUAgDTEKwAAaYhXAADSEK8AACTx++//A5yu4D4pm8x0AAAAAElFTkSuQmCC"},13904:function(e,t,o){t.Z=o.p+"assets/images/release-hostory-67333921a88f6c66adeebdcaf788cdee.png"},78973:function(e,t,o){t.Z=o.p+"assets/images/rollout-9c5dfc99939fa6f8c00f7300c779210a.png"},43292:function(e,t,o){t.Z=o.p+"assets/images/welcome-screen-4f81b17d19c5bf96cf06e87149540f04.png"}}]);