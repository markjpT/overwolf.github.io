"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6828],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return o}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){return function(n){var t=p(n.components);return a.createElement(e,l({},n,{components:t}))}},p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(t),c=r,g=o["".concat(d,".").concat(c)]||o[c]||s[c]||l;return t?a.createElement(g,m(m({ref:n},u),{},{components:t})):a.createElement(g,m({ref:n},u))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,d=new Array(l);d[0]=g;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var u=2;u<l;u++)d[u]=t[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},77992:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return p}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),d=["components"],m={id:"launchers",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers API",sidebar_position:-1},i=void 0,u={unversionedId:"api/games/launchers/launchers",id:"api/games/launchers/launchers",title:"overwolf.games.launchers API",description:"Returns an object with events and functions related to game launcher status.",source:"@site/pages/docs/api/games/launchers/launchers.mdx",sourceDirName:"api/games/launchers",slug:"/api/games/launchers/",permalink:"/api/games/launchers/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/launchers/launchers.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:-1,frontMatter:{id:"launchers",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers API",sidebar_position:-1,sidebar_label:"Launchers"},sidebar:"api",previous:{title:"World of Warships",permalink:"/api/games/events/world-of-warships"},next:{title:"Launchers IDs",permalink:"/api/games/launchers/ids"}},o={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getRunningLaunchersInfo(callback)",id:"getrunninglaunchersinfocallback",level:2},{value:"Version added: 0.103",id:"version-added-0103",level:4},{value:"onUpdated",id:"onupdated",level:2},{value:"Version added: 0.103",id:"version-added-0103-1",level:4},{value:"onLaunched",id:"onlaunched",level:2},{value:"Version added: 0.103",id:"version-added-0103-2",level:4},{value:"onTerminated",id:"onterminated",level:2},{value:"Version added: 0.103",id:"version-added-0103-3",level:4},{value:"GetRunningLaunchersInfoResult Object",id:"getrunninglaunchersinforesult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"LauncherInfo Object",id:"launcherinfo-object",level:2},{value:"Position Object",id:"position-object",level:2},{value:"UpdatedEvent Object",id:"updatedevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4}],c={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Returns an object with events and functions related to game launcher status."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getrunninglaunchersinfocallback"},"overwolf.games.launchers.getRunningLaunchersInfo()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onupdated"},"overwolf.games.launchers.onUpdated")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onlaunched"},"overwolf.games.launchers.onLaunched")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onterminated"},"overwolf.games.launchers.onTerminated"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getrunninglaunchersinforesult-object"},"overwolf.games.launchers.GetRunningLaunchersInfoResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#updatedevent-object"},"overwolf.games.launchers.UpdatedEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#launcherinfo-object"},"overwolf.games.launchers.LauncherInfo")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#position-object"},"overwolf.games.launchers.Position")," Object")),(0,l.mdx)("h2",{id:"getrunninglaunchersinfocallback"},"getRunningLaunchersInfo(callback)"),(0,l.mdx)("h4",{id:"version-added-0103"},"Version added: 0.103"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns an object with information about currently running launchers.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#getrunninglaunchersinforesult-object"},"(Result:GetRunningLaunchersInfoResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the currently running detected launchers")))),(0,l.mdx)("h2",{id:"onupdated"},"onUpdated"),(0,l.mdx)("h4",{id:"version-added-0103-1"},"Version added: 0.103"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when launcher info is updated, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#updatedevent-object"},"UpdatedEvent")," Object.")),(0,l.mdx)("h2",{id:"onlaunched"},"onLaunched"),(0,l.mdx)("h4",{id:"version-added-0103-2"},"Version added: 0.103"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when a launcher has launched, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#launcherinfo-object"},"LauncherInfo")," Object.")),(0,l.mdx)("h2",{id:"onterminated"},"onTerminated"),(0,l.mdx)("h4",{id:"version-added-0103-3"},"Version added: 0.103"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when a launcher is closed, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#launcherinfo-object"},"LauncherInfo")," Object.")),(0,l.mdx)("h2",{id:"getrunninglaunchersinforesult-object"},"GetRunningLaunchersInfoResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"success"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"null if success is true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"launchers"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#launcherinfo-object"},"LauncherInfo"),"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"an array of currently running detected launchers")))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{  \n   "success": true,\n   "launchers":[  \n      {  \n         "title":"League of Legends Launcher",\n         "id":54271,\n         "classId":5427,\n         "isInFocus":false,\n         "position":{  \n            "top":252,\n            "left":2066,\n            "width":1280,\n            "height":720\n         },\n         "handle":329882,\n         "commandLine":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe "--release=0.0.0.35" "--remoting-auth-token=scIN957coAwcbo0WW78nzg" "--rads-product-directory=E:/Games/RADS/solutions/league_client_sln/releases/0.0.0.35/deploy/" "--respawn-command=LeagueClient.exe" "--respawn-display-name=League of Legends" "--app-port=57610" "--install-directory=E:/Games/" "--app-name=LeagueClient" "--ux-name=LeagueClientUx" "--ux-helper-name=LeagueClientUxHelper" "--log-dir=LeagueClient Logs" "--bugsplat-name=league_client_riotgames_com" "--bugsplat-platform-id=EUW1" "--project=LeagueClient" "--app-log-file-path=E:/Games/Logs/LeagueClient Logs/2017-04-20T11-12-28_9576_LeagueClient.log" "--app-pid=9576"",\n         "processId":1468,\n         "path":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe"\n      }\n   ]\n}\n')),(0,l.mdx)("h2",{id:"launcherinfo-object"},"LauncherInfo Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"title"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"classId"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"isInFocus"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"position"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#position-object"},"Position")," object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"handle"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"commandLine"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"processId"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"path"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"position-object"},"Position Object"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns the launcher\u2019s window position")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"height"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"left"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"top"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"width"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"updatedevent-object"},"UpdatedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"info"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#launcherinfo-object"},"LauncherInfo")," Object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Launcher info data"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"changeType"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"New game info data"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'"info":\n   {  \n         "title":"League of Legends Launcher",\n         "id":54271,\n         "classId":5427,\n         "isInFocus":false,\n         "position":{  \n            "top":252,\n            "left":2066,\n            "width":1280,\n            "height":720\n         },\n         "handle":329882,\n         "commandLine":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe",\n         "processId":1468,\n         "path":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe"\n   },\n"changeType":\n   {\n     //including game name, game running, game terminated, game changing focus, etc.\n   }\n')))}s.isMDXComponent=!0}}]);