"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[208],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return u},withMDXComponents:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){return function(t){var r=u(t.components);return n.createElement(e,l({},t,{components:r}))}},u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,b=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},60758:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"webserver",image:"/img/embed/api-docs.jpg",title:"overwolf.web.webserver API"},d=void 0,s={unversionedId:"api/web/webserver",id:"api/web/webserver",title:"overwolf.web.webserver API",description:"An instance of a web server.",source:"@site/pages/docs/api/web/webserver.mdx",sourceDirName:"api/web",slug:"/api/web/webserver",permalink:"/api/web/webserver",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/web/webserver.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"webserver",image:"/img/embed/api-docs.jpg",title:"overwolf.web.webserver API",sidebar_position:0,sidebar_label:"Webserver"},sidebar:"api",previous:{title:"Web",permalink:"/api/web/"},next:{title:"Websocket",permalink:"/api/web/websocket"}},c={},u=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"listen(callback)",id:"listencallback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"close()",id:"close",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"onRequest",id:"onrequest",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"RequestEvent Object",id:"requestevent-object",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4}],m={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"An instance of a web server."),(0,l.mdx)("p",null,"The OW webserver is CORS enabled and sends the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"},"Access-Control-Allow-Origin")," headers to clients.  "),(0,l.mdx)("p",null,"Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.  "),(0,l.mdx)("p",null,"It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#listencallback"},"overwolf.web.webserver.listen()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#close"},"overwolf.web.webserver.close()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onrequest"},"overwolf.web.webserver.onRequest"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#requestevent-object"},"overwolf.web.websocket.RequestEvent")," Object")),(0,l.mdx)("h2",{id:"listencallback"},"listen(callback)"),(0,l.mdx)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Listens for requests on the given port. ")),(0,l.mdx)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,l.mdx)("p",null,"A callback function which will be called with the status of the request"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "url": "http://localhost:7707/"\n}\n')),(0,l.mdx)("h2",{id:"close"},"close()"),(0,l.mdx)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Closes the web server. It can be re-opened again. ")),(0,l.mdx)("h2",{id:"onrequest"},"onRequest"),(0,l.mdx)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the web server receives an incoming request, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#requestevent-object"},"RequestEvent")," Object.")),(0,l.mdx)("h2",{id:"requestevent-object"},"RequestEvent Object"),(0,l.mdx)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for the Requestevent object.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"url"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"content"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"contentType"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);