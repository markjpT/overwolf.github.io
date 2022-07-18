"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3438],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return b},useMDXComponents:function(){return c},withMDXComponents:function(){return l}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){return function(t){var r=c(t.components);return n.createElement(e,i({},t,{components:r}))}},c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65099:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"subscriptions-overview",title:"Subscriptions overview",sidebar_label:"Subscriptions overview"},u=void 0,p={unversionedId:"start/monetize-with-subs/subscriptions-overview",id:"start/monetize-with-subs/subscriptions-overview",title:"Subscriptions overview",description:"Overwolf ads are crafted for gamers, showing in the most appropriate times when there are breaks in the action, and never bothering gamers while playing. Even so, some users still prefer to remove ads entirely regardless of timing and location. To address these requests and to generate more revenue for app creators, we\u2019ve set up a new tool in your monetization arsenal - app subscription.",source:"@site/pages/docs/start/monetize-with-subs/subscriptions-overview.mdx",sourceDirName:"start/monetize-with-subs",slug:"/start/monetize-with-subs/subscriptions-overview",permalink:"/start/monetize-with-subs/subscriptions-overview",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-subs/subscriptions-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"subscriptions-overview",title:"Subscriptions overview",sidebar_label:"Subscriptions overview"},sidebar:"start",previous:{title:"Integrate subscriptions",permalink:"/start/monetize-with-subs/subscriptions-integration"},next:{title:"Request an app plan",permalink:"/start/monetize-with-subs/subscriptions-request-form"}},l={},c=[{value:"Subscription Basics",id:"subscription-basics",level:2},{value:"Who can sub?",id:"who-can-sub",level:2},{value:"The overwolf.profile.subscription API",id:"the-overwolfprofilesubscription-api",level:2},{value:"We&#39;re here to help",id:"were-here-to-help",level:2},{value:"Request a Subscription plan",id:"request-a-subscription-plan",level:2},{value:"Can I integrate external payment solutions?",id:"can-i-integrate-external-payment-solutions",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Overwolf ads are crafted for gamers, showing in the most appropriate times when there are breaks in the action, and never bothering gamers while playing. Even so, some users still prefer to remove ads entirely regardless of timing and location. To address these requests and to generate more revenue for app creators, we\u2019ve set up a new tool in your monetization arsenal - app subscription. "),(0,i.mdx)("p",null,"Gamers are now able to pay a monthly fee to become premium users of your app, getting special perks and services in return. We encourage you to think of cool ways to reward premium users and improve their experience beyond just removing all ads from the subscribed app. "),(0,i.mdx)("p",null,"Subscriptions provide you with a stable source of income, but even more importantly bring your users closer and increases their engagement with your project - they are supporting you to keep working on an app they enjoy remember to show them some love!"),(0,i.mdx)("h2",{id:"subscription-basics"},"Subscription Basics"),(0,i.mdx)("p",null,"A complete user flow can be found ",(0,i.mdx)("a",{parentName:"p",href:"subscriptions-flow"},"here"),".  "),(0,i.mdx)("p",null,"Detailed instructions on how to implement subscriptions in your app can be found ",(0,i.mdx)("a",{parentName:"p",href:"subscriptions-integration"},"here"),"."),(0,i.mdx)("p",null,"Any application can launch a subscription program based on removing ads, but we strongly recommend producing new perks and benefits for Premium users to ensure they feel like they got good returns for their investment."),(0,i.mdx)("h2",{id:"who-can-sub"},"Who can sub?"),(0,i.mdx)("p",null,"Any of your users with a Paypal account or international credit card can subscribe to an app."),(0,i.mdx)("h2",{id:"the-overwolfprofilesubscription-api"},"The overwolf.profile.subscription API"),(0,i.mdx)("p",null,"Read full API documentation for the subscriptions API ",(0,i.mdx)("a",{parentName:"p",href:"/api/profile/subscriptions"},"here"),"."),(0,i.mdx)("h2",{id:"were-here-to-help"},"We're here to help"),(0,i.mdx)("p",null,"Our developer success team is ready to help implement your first subscription program! If you\u2019re not certain about the features you want to add or how to implement them, don\u2019t hesitate to ",(0,i.mdx)("a",{parentName:"p",href:"/support/contact-us"},"reach out via Slack, email or Discord"),"."),(0,i.mdx)("h2",{id:"request-a-subscription-plan"},"Request a Subscription plan"),(0,i.mdx)("p",null,"Please fill ",(0,i.mdx)("a",{parentName:"p",href:"subscriptions-request-form"},"this form")," in order to get an app subscription plan."),(0,i.mdx)("h2",{id:"can-i-integrate-external-payment-solutions"},"Can I integrate external payment solutions?"),(0,i.mdx)("p",null,"Yes, but you\u2019ll have to get approval first.\nLonger answer - Overwolf offers ads and subscriptions as a service for creators to monetize their apps. Overwolf\u2019s revenue is generated through a revenue share from those ads and subscriptions and as a result, Patreon, direct PayPal, or any other payment solutions services that are outside of Overwolf\u2019s ecosystem, creates complexity. And still, we understand that this might be important for some.You can do that by sending us an ",(0,i.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"email"),", or by contacting your direct Developer Relations Manager. We\u2019re continuously improving our subscription service to make sure it\u2019ll fit all your needs. If you have any suggestions for us on how to improve, we\u2019d love to hear by requesting a new feature ",(0,i.mdx)("a",{parentName:"p",href:"https://discuss.overwolf.com/"},"here"),"."),(0,i.mdx)("p",null,"To read more about Overwolf\u2019s business model ",(0,i.mdx)("a",{parentName:"p",href:"https://medium.com/overwolf/how-does-overwolf-make-money-f70a195a4ea9#:~:text=So%20how%20DO%20we%20make,subscription%20plans%20to%20their%20apps.&text=A%20little%20over%2085%25%20of,passed%20on%20to%20app%20creators."},"click here"),"."))}d.isMDXComponent=!0}}]);