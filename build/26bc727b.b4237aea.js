(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},v=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),v=t,b=p["".concat(i,".").concat(v)]||p[v]||u[v]||s;return a?r.a.createElement(b,o(o({ref:n},l),{},{components:a})):r.a.createElement(b,o({ref:n},l))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,i=new Array(s);i[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"},81:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return s})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return l}));var t=a(3),r=(a(0),a(111));const s={id:"nav",title:"Navigation",slug:"/navi"},i={unversionedId:"nav",id:"nav",isDocsHomePage:!1,title:"Navigation",description:"`javascript live",source:"@site/docs/nav.md",slug:"/navi",permalink:"/Indigo-Design-System/build/docs/navi",version:"current",sidebar:"docs",previous:{title:"Footer",permalink:"/Indigo-Design-System/build/docs/footer"},next:{title:"Container",permalink:"/Indigo-Design-System/build/docs/container"}},o=[{value:"Guidelines",id:"guidelines",children:[]}],c={toc:o};function l({components:e,...n}){return Object(r.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"live",live:!0},'<nav class="sgds-navbar" role="navigation">\n  <div class="sgds-navbar-brand">\n    <a class="sgds-navbar-item">\n      <img src="/img/logo.png" alt="URA Logo" />\n    </a>\n    <div class="sgds-navbar-burger" data-target="mainnav-2">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <div id="mainnav-2" class="sgds-navbar-menu">\n    <div class="sgds-navbar-start">\n      <div class="sgds-navbar-item has-dropdown is-hoverable">\n        <a class="sgds-navbar-link is-uppercase is-active">Who we are</a>\n        <div class="sgds-navbar-dropdown">\n          <a class="sgds-navbar-item is-active">Sub Link 1</a>\n          <a class="sgds-navbar-item">Sub Link 2</a>\n          <a class="sgds-navbar-item">Sub Link 3</a>\n        </div>\n      </div>\n      <div class="sgds-navbar-item has-dropdown is-hoverable">\n        <a class="sgds-navbar-link is-uppercase">Link 2</a>\n        <div class="sgds-navbar-dropdown">\n          <a class="sgds-navbar-item">\n            External Link 1<i class="sgds-icon sgds-icon-external"></i>\n          </a>\n          <a class="sgds-navbar-item">\n            External Link 2<i class="sgds-icon sgds-icon-external"></i>\n          </a>\n          <a class="sgds-navbar-item">\n            External Link 3<i class="sgds-icon sgds-icon-external"></i>\n          </a>\n        </div>\n      </div>\n      <a class="sgds-navbar-item is-uppercase is-tab">External Link 3</a>\n    </div>\n  </div>\n</nav>\n')),Object(r.b)("h3",{id:"guidelines"},"Guidelines"),Object(r.b)("p",null,"Footers should:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Be positioned below the masthead of every page"),Object(r.b)("li",{parentName:"ol"},"Contain the service's name and logo"),Object(r.b)("li",{parentName:"ol"},"Have the logo hyperlinked to the service's homepage")),Object(r.b)("hr",null))}l.isMDXComponent=!0}}]);