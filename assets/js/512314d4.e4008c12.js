"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8348],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return V},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){return function(t){var n=c(t.components);return r.createElement(e,s({},t,{components:n}))}},c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function V(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},22835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a=["components"],o={id:"manage-subscriptions",image:"/img/embed/api-best-practices.jpg",title:"Manage your subscriptions",sidebar_label:"Manage your subscriptions"},l=void 0,p={unversionedId:"topics/developers-console/manage-subscriptions",id:"topics/developers-console/manage-subscriptions",title:"Manage your subscriptions",description:"In this article, we'll go over the process of updating the different aspects of your app\u2019s subscription plan.",source:"@site/pages/docs/topics/developers-console/manage-subscriptions.mdx",sourceDirName:"topics/developers-console",slug:"/topics/developers-console/manage-subscriptions",permalink:"/topics/developers-console/manage-subscriptions",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/developers-console/manage-subscriptions.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"manage-subscriptions",image:"/img/embed/api-best-practices.jpg",title:"Manage your subscriptions",sidebar_label:"Manage your subscriptions"},sidebar:"topics",previous:{title:"Crash reports",permalink:"/topics/developers-console/crash-reports"},next:{title:"Rating and reviews",permalink:"/topics/developers-console/rating-and-reviews"}},u={},c=[{value:"Log in to the developers console",id:"log-in-to-the-developers-console",level:2},{value:"Plans Tab",id:"plans-tab",level:2},{value:"Title, ID, Price, Period, Status",id:"title-id-price-period-status",level:2},{value:"Customize the app\u2019s subscription listing in the app store",id:"customize-the-apps-subscription-listing-in-the-app-store",level:2},{value:"Subscribers tab",id:"subscribers-tab",level:2}],m={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,a);return(0,s.mdx)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"In this article, we'll go over the process of updating the different aspects of your app\u2019s subscription plan."),(0,s.mdx)("p",null,"If you don\u2019t yet have a subscription plan enabled, follow ",(0,s.mdx)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"our guide first"),"."),(0,s.mdx)("h2",{id:"log-in-to-the-developers-console"},"Log in to the developers console"),(0,s.mdx)("p",null,"After logging in to the Overwolf developers console, navigate to the subscriptions tab."),(0,s.mdx)("p",null,"2 new tabs will then be shown in the dropdown menu:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Plans"),(0,s.mdx)("li",{parentName:"ul"},"Subscribers")),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"subs_tab",src:n(60214).Z,width:"1899",height:"700"})),(0,s.mdx)("h2",{id:"plans-tab"},"Plans Tab"),(0,s.mdx)("p",null,"In this tab you can edit the subscription plans you already own: title, price, description, period, status and assets (that will be shown in the Overwolf app store)."),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"plans_tab",src:n(37726).Z,width:"1919",height:"570"})),(0,s.mdx)("p",null,"To edit your plan, simply press the \u201cEDIT\u201d button for your plan."),(0,s.mdx)("h2",{id:"title-id-price-period-status"},"Title, ID, Price, Period, Status"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Title: How your subscriptions plan will be called on the dev console - this is not visible to users on the app store"),(0,s.mdx)("li",{parentName:"ul"},"ID: Your plan\u2019s ID number. This is a read-only item and cannot be changed."),(0,s.mdx)("li",{parentName:"ul"},"Price: in USD, can be edited."),(0,s.mdx)("li",{parentName:"ul"},"Period (Months): The recurrence of the subscription plan. Can be edited."),(0,s.mdx)("li",{parentName:"ul"},"Status: Configure whether your app subscription plan is Disabled, in Test mode, or Active on the app store.")),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"plan_details",src:n(26105).Z,width:"1090",height:"527"})),(0,s.mdx)("h2",{id:"customize-the-apps-subscription-listing-in-the-app-store"},"Customize the app\u2019s subscription listing in the app store"),(0,s.mdx)("p",null,"Control the assets you\u2019d like to be shown on the app\u2019s subscription listing in the app store."),(0,s.mdx)("p",null,"*Note: The minimum requirement is to have 1 plan title, 1 plan description and 1 plan image."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Title: Short and concise, up to 50 characters."),(0,s.mdx)("li",{parentName:"ul"},"Description: What will this subscription offer the app\u2019s users. Up to 200 characters."),(0,s.mdx)("li",{parentName:"ul"},"Image: ",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"Size must be 2250x96 pixels"),(0,s.mdx)("li",{parentName:"ul"},"Must include 15 frames"),(0,s.mdx)("li",{parentName:"ul"},"Frame size should be 150x96 (no padding)")))),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"plan_details2",src:n(13315).Z,width:"740",height:"921"})),(0,s.mdx)("p",null,"*Example for an image:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"plan_ad",src:n(86378).Z,width:"2250",height:"96"})),(0,s.mdx)("h2",{id:"subscribers-tab"},"Subscribers tab"),(0,s.mdx)("p",null,"Control and monitor you app's subscribers through this tab."),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"subscriber_tab",src:n(16527).Z,width:"1891",height:"888"})),(0,s.mdx)("p",null,"For each subscriber, you\u2019ll be able to see their user name, which plan is activated for this user, what is the status of their subscription and the expiration date for this subscriber."),(0,s.mdx)("p",null,"You will also be able to edit the users subscription and monitor their activity through the \u201cEDIT\u201d button: "),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"subscriber_details",src:n(23957).Z,width:"896",height:"797"})),(0,s.mdx)("p",null,"In the EDIT section you\u2019ll be able to change the user\u2019s subscription expiration date and the status of the user\u2019s subscription: "),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Active: The subscription is currently enabled."),(0,s.mdx)("li",{parentName:"ul"},"Cancelled: The subscription is either cancelled by the user or expired."),(0,s.mdx)("li",{parentName:"ul"},"Revoked: The subscription is cancelled by the dev (e.g in order to refund the account)."),(0,s.mdx)("li",{parentName:"ul"},"Invalid: The Subscription is cancelled due to a transaction error (failed to recharge).")))}d.isMDXComponent=!0},86378:function(e,t){t.Z="data:image/png;base64,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"},26105:function(e,t,n){t.Z=n.p+"assets/images/plan_details-402cc64348c18ad38db0838d630d8a61.png"},13315:function(e,t,n){t.Z=n.p+"assets/images/plan_details2-bd236c1a834c334a5d3205e4927c4fc4.png"},37726:function(e,t,n){t.Z=n.p+"assets/images/plans_tab-b8d68a5b72795953c7a254fab67f8cf3.png"},60214:function(e,t,n){t.Z=n.p+"assets/images/subs_tab-b6b88629b97ed00e93ef5469f7569b6b.png"},23957:function(e,t,n){t.Z=n.p+"assets/images/subscriber_details-a8d39ce9ffe9629afaf4701283c57c5a.png"},16527:function(e,t,n){t.Z=n.p+"assets/images/subscriber_tab-705663c3e26c929eeeb3ad0d7f0fb3a2.png"}}]);