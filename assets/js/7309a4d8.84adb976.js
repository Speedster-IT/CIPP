"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[2583],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4980:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var a,r=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],s={id:"conditionalaccesspolicies",title:"Conditional Access Policies",description:"Review all Conditional Access Polcies per tenant",slug:"/usingcipp/tenantadministration/conditionalaccesspolicies"},c=void 0,p={unversionedId:"usingcipp/tenantadministration/conditionalaccesspolicies",id:"usingcipp/tenantadministration/conditionalaccesspolicies",title:"Conditional Access Policies",description:"Review all Conditional Access Polcies per tenant",source:"@site/docs/user/usingcipp/tenantadministration/conditionalaccesspolicies.mdx",sourceDirName:"usingcipp/tenantadministration",slug:"/usingcipp/tenantadministration/conditionalaccesspolicies",permalink:"/docs/user/usingcipp/tenantadministration/conditionalaccesspolicies",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/docs/docs/user/usingcipp/tenantadministration/conditionalaccesspolicies.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644777980,formattedLastUpdatedAt:"13/02/2022",frontMatter:{id:"conditionalaccesspolicies",title:"Conditional Access Policies",description:"Review all Conditional Access Polcies per tenant",slug:"/usingcipp/tenantadministration/conditionalaccesspolicies"},sidebar:"userSidebar",previous:{title:"Tenants",permalink:"/docs/user/usingcipp/tenantadministration/tenants"},next:{title:"Standards",permalink:"/docs/user/usingcipp/tenantadministration/standards"}},d=[{value:"Details",id:"details",children:[],level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",children:[],level:2}],u=(a="NoKnownIssues",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}),m={toc:d};function g(t){var e=t.components,n=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page lists all the Conditional Access Policies on the selected tenant. This lists everything that's available in the Microsoft Endpoint Manager (MEM) portal, including the applications the CA applies to and used built-in controls."),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the policy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"State"),(0,l.kt)("td",{parentName:"tr",align:null},"The current state of the policy, for example enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Last Modified"),(0,l.kt)("td",{parentName:"tr",align:null},"The date the policy was last modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client App Types"),(0,l.kt)("td",{parentName:"tr",align:null},"Any client applications targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Platform Inc"),(0,l.kt)("td",{parentName:"tr",align:null},"Any platforms/operating systems targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Platform Exc"),(0,l.kt)("td",{parentName:"tr",align:null},"Any platforms/operating systems excluded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Include Locations"),(0,l.kt)("td",{parentName:"tr",align:null},"Any locations targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exclude Locations"),(0,l.kt)("td",{parentName:"tr",align:null},"Any locations excluded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Include Users"),(0,l.kt)("td",{parentName:"tr",align:null},"Any users targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exclude Users"),(0,l.kt)("td",{parentName:"tr",align:null},"Any users excluded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Include Groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Any groups targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exclude Groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Any groups excluded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Include Applications"),(0,l.kt)("td",{parentName:"tr",align:null},"Any Azure AD applications targeted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exclude Applications"),(0,l.kt)("td",{parentName:"tr",align:null},"Any Azure AD applications excluded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Control Operator"),(0,l.kt)("td",{parentName:"tr",align:null},"The operator used to combine the filters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Built-in Controls"),(0,l.kt)("td",{parentName:"tr",align:null},"Any built-in controls applied.")))),(0,l.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,l.kt)(u,{mdxType:"NoKnownIssues"}))}g.isMDXComponent=!0}}]);