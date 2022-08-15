"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9773],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){return function(n){var t=m(n.components);return i.createElement(e,a({},n,{components:t}))}},m=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=m(e.components);return i.createElement(l.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=o,c=p["".concat(r,".").concat(u)]||p[u]||w[u]||a;return t?i.createElement(c,d(d({ref:n},l),{},{components:t})):i.createElement(c,d({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},63065:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i,o=t(87462),a=t(63366),r=(t(67294),t(3905)),d=["components"],s={id:"windows-resolution-size-position",image:"/img/embed/api-best-practices.jpg",title:"Windows Resolution Size and Position",sidebar_label:"Resolution Size and Position"},l=void 0,p={unversionedId:"topics/using-windows-api/windows-resolution-size-position",id:"topics/using-windows-api/windows-resolution-size-position",title:"Windows Resolution Size and Position",description:"Window resolution",source:"@site/pages/docs/topics/using-windows-api/windows-resolution-size-position.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/windows-resolution-size-position",permalink:"/topics/using-windows-api/windows-resolution-size-position",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-windows-api/windows-resolution-size-position.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"windows-resolution-size-position",image:"/img/embed/api-best-practices.jpg",title:"Windows Resolution Size and Position",sidebar_label:"Resolution Size and Position",sidebar_position:0},sidebar:"topics",previous:{title:"Using Overwolf windows",permalink:"/topics/using-windows-api/using-overwolf-windows"},next:{title:"General Tips",permalink:"/topics/using-windows-api/windows-tips"}},m={},u=[{value:"Window resolution",id:"window-resolution",level:2},{value:"Detecting screen resolution",id:"detecting-screen-resolution",level:3},{value:"Logical resolution",id:"logical-resolution",level:3},{value:"Detecting resolution changes",id:"detecting-resolution-changes",level:3},{value:"Window sizes",id:"window-sizes",level:2},{value:"Set default window size",id:"set-default-window-size",level:3},{value:"Enable user resolution choices",id:"enable-user-resolution-choices",level:3},{value:"DPI scaling with overwolf windows",id:"dpi-scaling-with-overwolf-windows",level:3},{value:"Window position",id:"window-position",level:2},{value:"Window coordinates overview",id:"window-coordinates-overview",level:3},{value:"X note",id:"x-note",level:4},{value:"Y note",id:"y-note",level:4},{value:"Set a default position",id:"set-a-default-position",level:3},{value:"Change window position",id:"change-window-position",level:3},{value:"Identify when the window is dragged between monitors",id:"identify-when-the-window-is-dragged-between-monitors",level:3},{value:"determine which monitor the window is displayed",id:"determine-which-monitor-the-window-is-displayed",level:3}],w=(i="ImageSlider",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={toc:u};function h(e){var n=e.components,i=(0,a.Z)(e,d);return(0,r.mdx)("wrapper",(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"window-resolution"},"Window resolution"),(0,r.mdx)("p",null,"Setting window resolution and position whether it's in-game or in desktop requires you to first get the user's current screen resolution. "),(0,r.mdx)("h3",{id:"detecting-screen-resolution"},"Detecting screen resolution"),(0,r.mdx)("p",null,"Users have two relevant resolutions to consider:  "),(0,r.mdx)("p",null,'"Screen resolution", which is the operating system\'s default desktop resolution, and "game resolution" which is the resolution in which they play their game and can be different from the desktop setting.'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Desktop resolution can be detected by using ",(0,r.mdx)("a",{parentName:"p",href:"/api/utils"},"overwolf.utils.getMonitorsList()"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Game resolution can be detected by using ",(0,r.mdx)("a",{parentName:"p",href:"/api/games#getrunninggameinfocallback"},"overwolf.games.getRunningGameInfo()"),".",(0,r.mdx)("br",{parentName:"p"}),"\n","In addition, it returns also the monitorHandle, which can be used to get the monitor the game runs in."))),(0,r.mdx)("h3",{id:"logical-resolution"},"Logical resolution"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/api/games#gameinfo-object"},"GameInfo")," object sent by the getRunningGameInfo() function has, in addition to the expected ",(0,r.mdx)("inlineCode",{parentName:"p"},"width")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"height")," fields, two more properties called ",(0,r.mdx)("inlineCode",{parentName:"p"},"logicalWidth")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"logicalHeight"),". These fields return the game's reported logical pixel dimensions.",(0,r.mdx)("br",{parentName:"p"}),"\n","If your screen is scaled by a DPI factor, you should work with logical sizes, as the regular sizes will wound up being scaled in proportion, while the logical is not DPI aware."),(0,r.mdx)("h3",{id:"detecting-resolution-changes"},"Detecting resolution changes"),(0,r.mdx)("p",null,"In order to detect whether a user has changed their resolution:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"In-game resolution change \u2013 Register to the ",(0,r.mdx)("a",{parentName:"p",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated()")," event to get updated in-game resolution.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Desktop /out-of-game resolution change \u2013 There's no way to detect a change in desktop resolution, you\u2019ll have to check each time your app launches by using ",(0,r.mdx)("a",{parentName:"p",href:"/api/utils"},"getMonitorsList()"),"."))),(0,r.mdx)("h2",{id:"window-sizes"},"Window sizes"),(0,r.mdx)("p",null,"Correct planning is critical for your app's development process. While Overwolf is handling the huge variety of user specs and screen resolutions, it's still important to pick the optimal size for your app\u2019s windows.  "),(0,r.mdx)("p",null,"While the most commonly used window size would be 1366\xd7768, the optimal size would be 1200\xd7700, which better supports a wider variety of resolutions."),(0,r.mdx)("p",null,"You can also do the following when handling window sizes:"),(0,r.mdx)("h3",{id:"set-default-window-size"},"Set default window size"),(0,r.mdx)("p",null,"As the ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#windows-size"},"size")," flag only applies during the first time you open the window, you can force create the new window using the default size/position. "),(0,r.mdx)("p",null,"you can set ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#windows-min_size"},"min_size")," and ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#windows-max_size"},"max_size")," to the same values and force your app window to always load with identical dimensions, or you can set the ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows"},(0,r.mdx)("inlineCode",{parentName:"a"},"useDefaultSizeAndLocation"))," to true, when calling the ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback"},"obtainDeclaredWindow()")," function."),(0,r.mdx)("p",null,"In addition, if you want to dynamically set your window size according to the ",(0,r.mdx)("a",{parentName:"p",href:"#detecting-screen-resolution"},"user's desktop resolution")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/api/Window/devicePixelRatio"},"DPI"),", you can use ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#setminsizewindowid-width-height-callback"},"setMinSize()"),"."),(0,r.mdx)("h3",{id:"enable-user-resolution-choices"},"Enable user resolution choices"),(0,r.mdx)("p",null,"You can allow users to choose their preferred window size in the app's settings. Some Examples for common and optimal window sizes, as well as apps that let the user choose their preferred app window size:"),(0,r.mdx)(w,{mdxType:"ImageSlider"},(0,r.mdx)("img",{src:t(18763).Z,alt:"Examples for app that let the user choose his preferred app window size:"}),(0,r.mdx)("img",{src:t(93874).Z,alt:"Examples for common and optimal app window sizes: 1280\xd7775"}),(0,r.mdx)("img",{src:t(39115).Z,alt:"Examples for common and optimal app window sizes: 1366\xd7775"}),(0,r.mdx)("img",{src:t(55915).Z,alt:"Examples for common and optimal app window sizes: 1680\xd7980"})),(0,r.mdx)("h3",{id:"dpi-scaling-with-overwolf-windows"},"DPI scaling with overwolf windows"),(0,r.mdx)("p",null,"This section explains the DPI-related behavior of each of the relevant overwolf.windows API methods.",(0,r.mdx)("br",{parentName:"p"}),"\n","Please note that we will release an improved and more consistent (DPI-wise) window management API soon."),(0,r.mdx)("p",null,"To summarize, these are the main differences between native and non-native windows:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"+"),' means DPI-aware: "width" / "height" returned in the function\'s callback without DPI scaling.'),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"-"),' means not-DPI-aware: "width" / "height" returned in the function\'s callback already WITH DPI scaling.')),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"function"),(0,r.mdx)("th",{parentName:"tr",align:null},"native window"),(0,r.mdx)("th",{parentName:"tr",align:null},"non-native window"),(0,r.mdx)("th",{parentName:"tr",align:null},"notes"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"From 0.170 this function will be DPI-aware")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/api/windows#changepositionwindowid-left-top-callback"},"overwolf.windows.changePosition()")),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},'Gets the "left"/"top" values and calculates the new required window position based on the screen\'s DPI. (accepts values as they are returned from getCurrentWindow - without DPI scaling)')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/api/windows#changesizechangesizeparams-callback"},"overwolf.windows.changeSize()")),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},'gets the "width"/"height" values (via the "ChangeWindowSizeParams" object)  and calculates the new required window size based on the screen\u2019s DPI.  (accepts values as they are returned from getCurrentWindow - without DPI scaling) ',(0,r.mdx)("br",null),(0,r.mdx)("br",null)," ",(0,r.mdx)("strong",{parentName:"td"},"Known issue")," - For non-native windows the DPI calculations are affected only by the DPI of the primary window, regardless of which monitor you opened the window on. i.e., if the window is on a 100% DPI monitor but the main monitor is 125% - it will resize based on 125%.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/api/Window/screen"},"window.screen")),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"HTML element size"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null},"+"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"window-position"},"Window position"),(0,r.mdx)("h3",{id:"window-coordinates-overview"},"Window coordinates overview"),(0,r.mdx)("p",null,"The windows API using X and Y coordinates to define the position of a window.  "),(0,r.mdx)("h4",{id:"x-note"},"X note"),(0,r.mdx)("p",null,"X returns the pixel distance of your currently active monitor from your primary monitor.\nFor example, if your primary monitor is 1920px wide, and the currently active window is on another monitor located to the left of your primary, X will return 1920 or -1920 based on their relative positions."),(0,r.mdx)("h4",{id:"y-note"},"Y note"),(0,r.mdx)("p",null,"Y returns the pixel distnace of your currently active monitor from your primary monitor.\nFor Example, if your primary monitor and secondary monitor are side by side, Y will return 0, if your displays are one on top of the other and the primary monitor is 1200px tall, Y will return 1200 or -1200 based on their relative positions."),(0,r.mdx)("h3",{id:"set-a-default-position"},"Set a default position"),(0,r.mdx)("p",null,"As the ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#windows-start_position"},"start_position")," flag only applies the first time you open a windows, you can use ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#changepositionwindowid-left-top-callback"},"changePosition()")," if you want to change the position of the window dynamically. For example, if you'd like to place the window in the middle of the screen after you ",(0,r.mdx)("a",{parentName:"p",href:"#detecting-screen-resolution"},"calculate the user's resolution"),"."),(0,r.mdx)("h3",{id:"change-window-position"},"Change window position"),(0,r.mdx)("p",null,"In order to position your window in a specific location, you'll first need to ",(0,r.mdx)("a",{parentName:"p",href:"#detect-the-resolution"},"get the current user's screen resolution"),'. As explained above, there are two types of resolutions \u2013 "Screen resolution" (the resolution of the user\'s OS) and "game resolution" which is the actual in-game resolution used.'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"To reposition a desktop window of your app, get the user desktop resolution by using ",(0,r.mdx)("a",{parentName:"p",href:"/api/utils"},"getMonitorsList()")," and calculate the required location in pixels.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"To reposition an in-game window of your app, get the in-game resolution by using ",(0,r.mdx)("a",{parentName:"p",href:"/api/games#getrunninggameinfocallback"},"getRunningGameInfo()")," and calculate the required location in pixels."))),(0,r.mdx)("p",null,"Note that for non-native windows the DPI calculations are affected only by the DPI of the primary window, regardless of which monitor you opened the window on. i.e.,  if the window is on a 100% DPI monitor but the main monitor is 125% - it will resize based on 125%."),(0,r.mdx)("h3",{id:"identify-when-the-window-is-dragged-between-monitors"},"Identify when the window is dragged between monitors"),(0,r.mdx)("p",null,"To identify if your app window was dragged from one monitor to another, you can follow these steps:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Identify when the drag is completed using the ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#dragmovewindowid-callback"},"dragMove()")," function.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Get the position of the window (window.screenX, window.screenY)."))),(0,r.mdx)("p",null,"Note that when you move a ",(0,r.mdx)("strong",{parentName:"p"},"native window")," between monitors with different DPIs, the window will automatically resize according to the new DPI (can be disabled with the ",(0,r.mdx)("a",{parentName:"p",href:"/api/manifest#disable_auto_dpi_sizing"},"disable_auto_dpi_sizing")," manifest flag). "),(0,r.mdx)("p",null,'Hybrid/non-native windows are not "DPI awarded" and will not auto-resize when moved between monitors with different DPIs.'),(0,r.mdx)("h3",{id:"determine-which-monitor-the-window-is-displayed"},"determine which monitor the window is displayed"),(0,r.mdx)("p",null,"Once you get the X & Y coordinates of a window (at the end of dragMove(), using getCurrentWindow(), etc.), With a simple calculation, you can determine which monitor the window is displayed. (For example, if you know that the 1st monitor has 1080px width, and the current window position start beyond that, it means that the window is displayed on the second monitor, etc.)"),(0,r.mdx)("p",null,"Update: now you can get the monitor id of the current window using ",(0,r.mdx)("a",{parentName:"p",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")))}h.isMDXComponent=!0},93874:function(e,n,t){n.Z=t.p+"assets/images/size-example-screen-1-49b7f967e8964bd767bbc24a21ecf1b9.jpg"},39115:function(e,n,t){n.Z=t.p+"assets/images/size-example-screen-2-d555799d75fbaf5a4cb1d292d5c472e7.jpg"},55915:function(e,n,t){n.Z=t.p+"assets/images/size-example-screen-3-4f142569cac91fe6a39987326304e2f5.jpg"},18763:function(e,n,t){n.Z=t.p+"assets/images/size-example-user-custom-254060e9a5ea7e4db0b14873ac6ed39e.jpg"}}]);