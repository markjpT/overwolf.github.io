"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8356],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,h=c["".concat(o,".").concat(p)]||c[p]||u[p]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"twitch-events-sdk-for-game-developers",image:"/img/embed/api-best-practices.jpg",title:"Twitch Extensions and game events",sidebar_label:"Twitch Extensions"},l=void 0,d={unversionedId:"topics/integrations/twitch-events-sdk-for-game-developers",id:"topics/integrations/twitch-events-sdk-for-game-developers",title:"Twitch Extensions and game events",description:"Overview",source:"@site/pages/docs/topics/integrations/twitch-events-sdk-for-game-developers.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/twitch-events-sdk-for-game-developers",permalink:"/topics/integrations/twitch-events-sdk-for-game-developers",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/integrations/twitch-events-sdk-for-game-developers.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"twitch-events-sdk-for-game-developers",image:"/img/embed/api-best-practices.jpg",title:"Twitch Extensions and game events",sidebar_label:"Twitch Extensions"},sidebar:"topics",previous:{title:"Login with Twitch",permalink:"/topics/integrations/login-with-twitch"},next:{title:"App terms",permalink:"/topics/legal/legal-app-terms"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Sample App",id:"sample-app",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Connecting to the PubSub",id:"connecting-to-the-pubsub",level:2},{value:"Authenticating",id:"authenticating",level:2},{value:"Special Endpoints",id:"special-endpoints",level:2},{value:"Get Streamer Game",id:"get-streamer-game",level:3},{value:"Get Game Info",id:"get-game-info",level:3},{value:"Get Streamer Connected",id:"get-streamer-connected",level:3},{value:"Notes",id:"notes",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"Twitch enables developers to build extensions, interactive web apps that run in the broadcaster\u2019s channel and provide added value. The extension\u2019s front-end runs in an iframe, and extensions can communicate with a Backend Service (EBS). To learn more about Twitch extensions visit ",(0,i.mdx)("a",{parentName:"p",href:"https://dev.twitch.tv/docs/extensions/"},"https://dev.twitch.tv/docs/extensions/")," ."),(0,i.mdx)("p",null,"Overwolf\u2019s Twitch Game Events allows a Twitch extension to receive game events that occur in a specific broadcaster's streaming session for supported games. "),(0,i.mdx)("p",null,"The streamer must run Overwolf\u2019s Twitch Game Events app while playing and log-in to Twitch from the app. The app will relay in-game events to an Overwolf\u2019s PubSub server, creating a \u201croom\u201d identified by the streamer\u2019s twitch id. These are the same events received from Overwolf\u2019s Game Events Provider (overwolf.games.events). For more information about Game Events visit ",(0,i.mdx)("a",{parentName:"p",href:"/api/games/events"},"here"),"."),(0,i.mdx)("p",null,"Use Twitch's Backend solution (EBS) to connect to the PubSub server and subscribe to the same generated \u201croom\u201d in order to receive the events related to the streamer's game."),(0,i.mdx)("h2",{id:"sample-app"},"Sample App"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/twitch-game-events-ebs-sample"},"Sample code for Twitch extensions")," game events backend services.")),(0,i.mdx)("h2",{id:"preconditions"},"Preconditions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The streamer must run the Twitch game events app while in game and log in to Twitch from the app."),(0,i.mdx)("li",{parentName:"ul"},"In order to connect to the Overwolf\u2019s events PubSub, extension developers must obtain a client id and choose a secret that will be used for authentication for the PubSub.")),(0,i.mdx)("h2",{id:"connecting-to-the-pubsub"},"Connecting to the PubSub"),(0,i.mdx)("p",null,"The PubSub address is ",(0,i.mdx)("a",{parentName:"p",href:"https://twitchge.overwolf.com"},"https://twitchge.overwolf.com"),"."),(0,i.mdx)("h2",{id:"authenticating"},"Authenticating"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST /auth/backend")),(0,i.mdx)("p",null,"Providing the credentials obtained from Overwolf:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"{\n broadcaster: OUR_STREAMER_ID, //the Twitch channel ID that you get from the Twitch API\n client_key: CLIENT_KEY,\n client_secret: CLIENT_SECRET\n}\n")),(0,i.mdx)("p",null,"If authentication is successful the response will contain a JSON with a token property. This token should be used to connect to the PubSub socket and as a token for authorization from other game event Pubsub endpoints."),(0,i.mdx)("h2",{id:"special-endpoints"},"Special Endpoints"),(0,i.mdx)("p",null,"The PubSub server has 3 special endpoints that can be used to retrieve game state information. These endpoints must be called with Authorization: Bearer token header providing the token obtained from the /auth/backend call."),(0,i.mdx)("h3",{id:"get-streamer-game"},"Get Streamer Game"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET /info/:streamer_id/game")),(0,i.mdx)("p",null,"This will return the streamer's currently played game id."),(0,i.mdx)("h3",{id:"get-game-info"},"Get Game Info"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET /info/:streamer_id")),(0,i.mdx)("p",null,"This will return a summary of events/updates which happened in the streamer\u2019s game. This corresponds to the ",(0,i.mdx)("a",{parentName:"p",href:"/api/games/events#getinfocallback"},"getInfo()")," method for Game Events."),(0,i.mdx)("h3",{id:"get-streamer-connected"},"Get Streamer Connected"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET /info/:streamer_id/connected")),(0,i.mdx)("p",null,"This checks whether the streamer is logged in and connected to the Twitch Game Extension service:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'{ "connected": true/false }')),(0,i.mdx)("h2",{id:"notes"},"Notes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Call ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET /info/{streamerId}")," when the EBS connects to Overwolf\u2019s Pubsub and when a ",(0,i.mdx)("inlineCode",{parentName:"p"},"publish")," event with ",(0,i.mdx)("inlineCode",{parentName:"p"},'["sessionStart"]')," data is received."),(0,i.mdx)("p",{parentName:"li"},"There are two scenarios in which your EBS connects to the Overwolf\u2019s Twitch Extensions PubSub server: Before the streamer starts playing, or after."),(0,i.mdx)("p",{parentName:"li"},"If your EBS connected after the streamer started playing, there is probably already information about the game currently being played. You should call the streamer info endpoint to retrieve the current information and listen to the PubSub socket for new game events and updates."),(0,i.mdx)("p",{parentName:"li"},"If your EBS connected before the streamer started playing, events will be sent via the PubSub socket events. However, the streamer\u2019s Game Events App may start when there is already some information accumulated by Overwolf\u2019s Game Events Provider. In that case the streamer\u2019s app will post the available information and it will be available for the EBS via the streamer info endpoint. "),(0,i.mdx)("p",{parentName:"li"},"This information will not be sent over the PubSub socket and instead a \u201cpublish\u201d event with ","[\u201csessionStart\u201d]"," payload will be sent. This will mark to the EBS that a new information set is available for retrieval.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"When the information includes ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ UPDATING: true }"),", it means that the info for the broadcaster is being written with new data and you should probably retry the call. You should retry until you have a non-UPDATING state, but avoid spamming - use exponentially longer wait times between attempts or limit the number of calls per second."))))}u.isMDXComponent=!0}}]);