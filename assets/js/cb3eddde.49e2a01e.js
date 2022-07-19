"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7891],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=o,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},21131:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"sample-app",title:"Basic Sample App",sidebar_label:"The Basic Sample App"},p=void 0,s={unversionedId:"start/basic-app/sample-app",id:"start/basic-app/sample-app",title:"Basic Sample App",description:"In this article, we'll use an example in order to learn how to build Overwolf (OW) apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project.",source:"@site/pages/docs/start/basic-app/sample-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/sample-app",permalink:"/start/basic-app/sample-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/basic-app/sample-app.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1658208748,formattedLastUpdatedAt:"7/19/2022",frontMatter:{id:"sample-app",title:"Basic Sample App",sidebar_label:"The Basic Sample App"},sidebar:"start",previous:{title:"UX/UI Best Practices",permalink:"/start/basic-app/front-app"},next:{title:"UI Components",permalink:"/start/basic-app/ui-components"}},d={},m=[{value:"Sample App Functionality",id:"sample-app-functionality",level:2},{value:"Setting up",id:"setting-up",level:2},{value:"1. Install Overwolf Client",id:"1-install-overwolf-client",level:3},{value:"2. Install NodeJS",id:"2-install-nodejs",level:3},{value:"3. Download the source code",id:"3-download-the-source-code",level:3},{value:"4. Build the app",id:"4-build-the-app",level:3},{value:"5. Install the app as &quot;unpacked extension&quot;",id:"5-install-the-app-as-unpacked-extension",level:3},{value:"Screenshots",id:"screenshots",level:2}],c={toc:m};function u(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this article, we'll use an example in order to learn how to build Overwolf (OW) apps that respond to real time game events and display content in an overlay while playing. If you are new to the concept of Overwolf apps, this is a great place to get started, and you can use it as a base for your own project."),(0,i.mdx)("p",null,"The sample app's functionality is pretty straightforward, it auto-launches when the user launches one of the supported games: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Fortnite, CSGO, League of Legends, Escape From Tarkov, Minecraft, Overwatch, PUBG, Rainbow Six Siege, Splitgate: Arena Warfare, Path of Exile, Valorant, Dota 2, Call of Duty: Warzone, Rocket League, or Warframe.")),(0,i.mdx)("p",null,"The app reads all real time game events as you play. To demonstrate overlay features, the sample app prints all in-game event data collected into an overlay-based component."),(0,i.mdx)("p",null,"The sample app is built with JS code and TypeScript. An official Vue, React, and Angular version will be added soon. Until then, check our ",(0,i.mdx)("a",{parentName:"p",href:"/topics/community-help/snippets"},"community snippets")," page for an unofficial Vue version and other code samples, like React boilerplate for Overwolf apps and more."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Download")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"It's highly recommended to follow the below steps for setting up the sample app, including downloading the source code and building it manually. "),(0,i.mdx)("p",{parentName:"div"},"For those who need it, here is a direct download link to the latest version:",(0,i.mdx)("br",{parentName:"p"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://www.overwolf.com/app/Overwolf-Sample_App"},"Download here"),".  "))),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Video guide")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"You can find a ",(0,i.mdx)("a",{parentName:"p",href:"/topics/community-help/creators-content#video-tutorials"},"video tutorial")," that guides you on downloading, building, and using the sample app."))),(0,i.mdx)("h2",{id:"sample-app-functionality"},"Sample App Functionality"),(0,i.mdx)("p",null,"For demonstration purposes, the sample app has been configured for one of the supported games listed above. It loads when Fortnite starts and reads Fortnite in-game events. You can easily customize this example to fit other games."),(0,i.mdx)("p",null,"The basic functions our sample app demonstrates:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Automatically launch when the game is loaded.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"After registering to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"overwolf.games.events")," API, the app can receive real time events from the game.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Identify specific events and respond as defined.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Define a custom hotkey to be used in-game.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Interact between app windows.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Background controller that manages data transfer."))),(0,i.mdx)("h2",{id:"setting-up"},"Setting up"),(0,i.mdx)("p",null,"In order to run the app, you must first complete several steps."),(0,i.mdx)("h3",{id:"1-install-overwolf-client"},"1. Install Overwolf Client"),(0,i.mdx)("p",null,"Download and install the ",(0,i.mdx)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download"},"Overwolf desktop client"),"."),(0,i.mdx)("h3",{id:"2-install-nodejs"},"2. Install NodeJS"),(0,i.mdx)("p",null,"Download and install ",(0,i.mdx)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS"),".  "),(0,i.mdx)("p",null,"After installing, run the following commands in your favorite IDE terminal (",(0,i.mdx)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is free and easy to use)"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"node -v //returns your node version, if installed\nnpm -v  //returns your npm version, if installed\n")),(0,i.mdx)("p",null,"If they run successfully, proceed to the next steps."),(0,i.mdx)("h3",{id:"3-download-the-source-code"},"3. Download the source code"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/sample-app/"},"This repository")," contains the Overwolf sample app.",(0,i.mdx)("br",{parentName:"p"}),"\n","Download the app's source code from the repository as a zip file, and extract it to a new folder on your machine."),(0,i.mdx)("h3",{id:"4-build-the-app"},"4. Build the app"),(0,i.mdx)("p",null,"In your terminal, run the following commands:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"cd ts //the path to your extracted 'ts' folder here\nnpm install //install all modules listed as dependencies in package.json\nnpm run build //create a \"dist\" folder with the compiled components\n")),(0,i.mdx)("h3",{id:"5-install-the-app-as-unpacked-extension"},'5. Install the app as "unpacked extension"'),(0,i.mdx)("p",null,"Usually, all the apps in the Overwolf app store are OPK packages that can be installed with a double-click.\nUnlike OPK Packages, while you are developing an app, you want to load the unpacked code, change it, and test it regularly.  "),(0,i.mdx)("p",null,'For this reason, in addition to the OPK installation, you can load the app as an "unpacked extension":',(0,i.mdx)("br",{parentName:"p"}),"\n","(Note that to do that you have to ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../getting-started/sdk-introduction#whitelist-as-a-developer"},"whitelist"))," your OW username as a developer)."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},'Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages"',(0,i.mdx)("br",{parentName:"p"}),"\n",'Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},'Click on "Development options".')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},'In the opened window, click on "Load unpacked extension" and select the extracted ',(0,i.mdx)("inlineCode",{parentName:"p"},"ts/dist")," folder.",(0,i.mdx)("br",{parentName:"p"}),"\n","This will add the app to your Overwolf dock.  ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Make sure you are logged in to the OW client"),'. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Click on the app's icon in your OW dock to run the app."))),(0,i.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},'Each app has a unique id (UID) that is generated using the "name" and "author" strings. Once an app is published on the Appstore, its UID can\'t be changed.\nThe same goes for the sample app, so make sure not to edit the author or app name in the manifest. It will prevent loading the app as an unpacked app. '))),(0,i.mdx)("h2",{id:"screenshots"},"Screenshots"),(0,i.mdx)("p",null,"This is how the sample app's main window looks like: a desktop window displaying some textual information."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"alt-text",src:a(73002).Z,width:"1212",height:"699"})),(0,i.mdx)("p",null,"The real action will take place in the in-game window - once you launch Fortnite, the desktop window will be replaced with this in-game window:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"alt-text",src:a(30786).Z,width:"1210",height:"697"})),(0,i.mdx)("p",null,"This is the injected in-game window overlayed on your game screen.  The window displays game events, collected data, and a sample advertisement for monetization."),(0,i.mdx)("p",null,"When you hit the close button, the app will close itself."))}u.isMDXComponent=!0},73002:function(e,t,a){t.Z=a.p+"assets/images/desktop-window-14ea4b0eb60595bfee09d9e678f3a860.png"},30786:function(e,t,a){t.Z=a.p+"assets/images/in-game-window-0bba65fab95a92636c48be941025347f.png"}}]);