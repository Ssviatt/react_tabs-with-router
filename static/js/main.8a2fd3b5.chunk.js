(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var c=a(9),n=a.n(c),s=a(4),i=(a(14),a(15),a(16),a(2)),b=a(6),r=a.n(b),j=a(1),d=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},l=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},o=(a(0),function(t){var e=t.tabs,a=t.tabId;return Object(j.jsx)("div",{"data-cy":"TabsComponent",children:Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{className:r()({"is-active":a===t.id}),"data-cy":"Tab",children:Object(j.jsx)(s.b,{to:"../".concat(t.id),"data-cy":"TabLink",id:t.id,children:t.title})},t.title)}))})})})}),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var t=Object(i.g)().tabId,e=h.find((function(e){return e.id===t}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(o,{tabs:h,tabId:t}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:t?null===e||void 0===e?void 0:e.content:"Please select a tab"})]})},O=function(){var t=Object(i.f)();return"#/home"===window.location.hash&&t("/"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.b,{to:"/",className:function(t){var e=t.isActive;return r()("navbar-item",{"is-active":e})},children:"Home"}),Object(j.jsx)(s.b,{to:"/tabs",className:function(t){var e=t.isActive;return r()("navbar-item",{"is-active":e})},children:"Tabs"})]})})}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsxs)(i.a,{path:"tabs",children:[Object(j.jsx)(i.a,{index:!0,element:Object(j.jsx)(x,{})}),Object(j.jsx)(i.a,{path:":tabId",element:Object(j.jsx)(x,{})})]}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(l,{})})]})})})]})};n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8a2fd3b5.chunk.js.map