"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1215],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,v=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},24399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"events-overview",image:"/img/embed/api-best-practices.jpg",title:"JavaScript events overview",sidebar_label:"JavaScript events overview"},l=void 0,d={unversionedId:"topics/using-events/events-overview",id:"topics/using-events/events-overview",title:"JavaScript events overview",description:"In this basic overview we'll discuss javaScript events which fuel various Overwolf's APIs.",source:"@site/pages/docs/topics/using-events/events-overview.mdx",sourceDirName:"topics/using-events",slug:"/topics/using-events/events-overview",permalink:"/topics/using-events/events-overview",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-events/events-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"events-overview",image:"/img/embed/api-best-practices.jpg",title:"JavaScript events overview",sidebar_label:"JavaScript events overview"},sidebar:"topics",previous:{title:"Using game events in your app",permalink:"/topics/using-events/"},next:{title:"Verifying event status",permalink:"/topics/using-events/how-to-check-events-status-from-app"}},c={},m=[{value:"JS Events Basics",id:"js-events-basics",level:2},{value:"addListener(callback)",id:"addlistenercallback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"removeListener(callback)",id:"removelistenercallback",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this basic overview we'll discuss javaScript events which fuel various Overwolf's APIs.  "),(0,i.mdx)("p",null,"If you are familiar with JS events, and you want to learn how to use Overwolf game events, you can skip directly to the ",(0,i.mdx)("a",{parentName:"p",href:"../using-events"},"how to use Overwolf game events")," guide."),(0,i.mdx)("h2",{id:"js-events-basics"},"JS Events Basics"),(0,i.mdx)("p",null,"An event is an object that reacts when something interesting to you happens. Here\u2019s an example of using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onStopStreaming")," event to be notified whenever a stream has stopped:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.streaming.onStopStreaming.addListener(\n    function (value) {\n        alert("a stream with id " + value.stream_id + " had stopped");\n    }\n);\n')),(0,i.mdx)("p",null,"As the example shows, you register for these alerts using addListener()."),(0,i.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"We\u2019ve seen situations where apps would register addListener multiple times for the same event \u2013 this caused the event to be triggered multiple times and causes unexpected bugs and memory leaks. Please pay attention when registering to events and prevent it."),(0,i.mdx)("p",{parentName:"div"},"You can also unregister from an event using the removeListener() function."))),(0,i.mdx)("h2",{id:"addlistenercallback"},"addListener(callback)"),(0,i.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Registers a listener to an event. When the event occurs, all registered listeners are called.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"The callback function to call when the event occurs")))),(0,i.mdx)("h2",{id:"removelistenercallback"},"removeListener(callback)"),(0,i.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Unregister a listener to an event.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"The callback should be the same function that was passed to addListener()",(0,i.mdx)("br",null),(0,i.mdx)("strong",{parentName:"td"},"so this won\u2019t work with anonymous function"))))))}p.isMDXComponent=!0}}]);