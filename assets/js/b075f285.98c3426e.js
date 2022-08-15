"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return o},MDXProvider:function(){return c},mdx:function(){return b},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){return function(t){var n=s(t.components);return a.createElement(e,l({},t,{components:n}))}},s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,x=u["".concat(d,".").concat(c)]||u[c]||p[c]||l;return n?a.createElement(x,i(i({ref:t},o),{},{components:n})):a.createElement(x,i({ref:t},o))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=x;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<l;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},25843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),d=["components"],i={id:"tray",image:"/img/embed/api-docs.jpg",title:"overwolf.os.tray API"},m=void 0,o={unversionedId:"api/os/tray",id:"api/os/tray",title:"overwolf.os.tray API",description:"Use this API for windows system tray related functionalities.",source:"@site/pages/docs/api/os/tray.mdx",sourceDirName:"api/os",slug:"/api/os/tray",permalink:"/api/os/tray",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/os/tray.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"tray",image:"/img/embed/api-docs.jpg",title:"overwolf.os.tray API",sidebar_position:0,sidebar_label:"Tray"},sidebar:"api",previous:{title:"OS",permalink:"/api/os/"},next:{title:"Profile",permalink:"/api/profile/"}},u={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"setMenu(menu, callback)",id:"setmenumenu-callback",level:2},{value:"Version added: 0.131",id:"version-added-0131",level:4},{value:"Permissions required: Tray",id:"permissions-required-tray",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"Notes",id:"notes",level:4},{value:"destroy()",id:"destroy",level:2},{value:"Version added: 0.173",id:"version-added-0173",level:4},{value:"Permissions required: Tray",id:"permissions-required-tray-1",level:4},{value:"ExtensionTrayMenu Object",id:"extensiontraymenu-object",level:2},{value:"menu_item Object",id:"menu_item-object",level:2},{value:"onMenuItemClicked",id:"onmenuitemclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-1",level:4},{value:"Event data example",id:"event-data-example",level:4},{value:"onTrayIconClicked",id:"ontrayiconclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-2",level:4},{value:"onTrayIconDoubleClicked",id:"ontrayicondoubleclicked",level:2},{value:"Version added: 0.131",id:"version-added-0131-3",level:4},{value:"onMenuItemClickedEvent Object",id:"onmenuitemclickedevent-object",level:2}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API for windows system tray related functionalities."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setmenumenu-callback"},"overwolf.os.tray.setMenu()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#destroy"},"overwolf.os.tray.destroy()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onmenuitemclicked"},"overwolf.os.tray.onMenuItemClicked")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#ontrayiconclicked"},"overwolf.os.tray.onTrayIconClicked")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#ontrayicondoubleclicked"},"overwolf.os.tray.onTrayIconDoubleClicked"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#extensiontraymenu-object"},"ExtensionTrayMenu")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onmenuitemclickedevent-object"},"overwolf.os.tray.onMenuItemClickedEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#menu_item-object"},"overwolf.os.tray.menu_item")," Object")),(0,l.mdx)("h2",{id:"setmenumenu-callback"},"setMenu(menu, callback)"),(0,l.mdx)("h4",{id:"version-added-0131"},"Version added: 0.131"),(0,l.mdx)("h4",{id:"permissions-required-tray"},"Permissions required: Tray"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Create a tray icon for the calling extension with the supplied context menu object.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"menu"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#extensiontraymenu-object"},"ExtensionTrayMenu")," object"),(0,l.mdx)("td",{parentName:"tr",align:null},"The menu object")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,l.mdx)("h4",{id:"usage-example"},"Usage Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const trayMenu = {\n    "menu_items": [{\n            "label": "View main window",\n            "id": "view_window"\n        }\n    ]\n}\n\noverwolf.os.tray.setMenu(trayMenu, (res) => {\n    console.log("setMenu -> res", res) \n});\n')),(0,l.mdx)("h4",{id:"notes"},"Notes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A ",(0,l.mdx)("a",{parentName:"li",href:"../manifest#meta-launcher_icon"},"launcher_icon")," must be set in the manifest."),(0,l.mdx)("li",{parentName:"ul"},"Calling setMenu() is mandatory to get a tray icon.")),(0,l.mdx)("h2",{id:"destroy"},"destroy()"),(0,l.mdx)("h4",{id:"version-added-0173"},"Version added: 0.173"),(0,l.mdx)("h4",{id:"permissions-required-tray-1"},"Permissions required: Tray"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Destroys the tray icon immediately.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"none"),(0,l.mdx)("td",{parentName:"tr",align:null},"none"),(0,l.mdx)("td",{parentName:"tr",align:null},"no params")))),(0,l.mdx)("h2",{id:"extensiontraymenu-object"},"ExtensionTrayMenu Object"),(0,l.mdx)("p",null,"A container object for a menu."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"menu_items"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#menu_item-object"},"menu_item"),"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"array of menu items")))),(0,l.mdx)("p",null,"An example for a menu with sub items:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n    "menu_items": [{\n            "label": "View main window",\n            "id": "view_window"\n        },\n        {\n            "label": "More...",\n            "enabled": true,\n            "sub_items": [{\n                "label": "Version 1.0.0",\n                "id": "more_version",\n                "enabled": false\n            }]\n        },\n        {\n            "label": "-"\n        },\n        {\n            "label": "Visit website",\n            "id": "more_website"\n        }\n\n    ]\n}\n')),(0,l.mdx)("h2",{id:"menu_item-object"},"menu_item Object"),(0,l.mdx)("p",null,"A container object for a menu item."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'must be set for items without "sub_items". (Separators and items with sub_items don\'t need ids)')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"label"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'in order to create a separator, use the label "-"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"set to true by default")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sub_items"),(0,l.mdx)("td",{parentName:"tr",align:null},"menu_item[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"you can nest an array of menu items under this item")))),(0,l.mdx)("p",null,"An example of a menu objects with sub items:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "label": "More...",\n    "enabled": true,\n    "sub_items": [{\n        "label": "Version 1.0.0",\n        "id": "more_version",\n        "enabled": false\n    }]\n}\n')),(0,l.mdx)("h2",{id:"onmenuitemclicked"},"onMenuItemClicked"),(0,l.mdx)("h4",{id:"version-added-0131-1"},"Version added: 0.131"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when an item from the tray icon\u2019s context menu is selected, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#onmenuitemclickedevent-object"},"onMenuItemClickedEvent")," Object")),(0,l.mdx)("h4",{id:"event-data-example"},"Event data example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{ "item": "id" }\n')),(0,l.mdx)("h2",{id:"ontrayiconclicked"},"onTrayIconClicked"),(0,l.mdx)("h4",{id:"version-added-0131-2"},"Version added: 0.131"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the tray icon is left clicked.")),(0,l.mdx)("h2",{id:"ontrayicondoubleclicked"},"onTrayIconDoubleClicked"),(0,l.mdx)("h4",{id:"version-added-0131-3"},"Version added: 0.131"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the tray icon is double clicked.")),(0,l.mdx)("h2",{id:"onmenuitemclickedevent-object"},"onMenuItemClickedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"item"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);