(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setPromise=void 0;var n,o=(n=r(25))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Promise;var p="undefined"==typeof window;t.setPromise=function(e){return e};var y=function(e){var t=e.makeStore,r=e.initialState,n=e.config,o=e.ctx,a=void 0===o?{}:o,i=n.storeKey,u=function(){return t(n.deserializeState(r),s({},a,n,{isServer:p}))};return p?u():(window[i]||(window[i]=u()),window[i])};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=s({storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},t),function(r){var n,i,s,f;return i=n=function(n){function o(r,n){var a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,r,n));var i=r.initialState,u=r.store,c=u&&"dispatch"in u&&"getState"in u;return u=c?u:y({makeStore:e,initialState:i,config:t}),t.debug&&console.log("4. WrappedApp.render",c?"picked up existing one,":"created new store with","initialState",i),a.store=u,a}var i,s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.Component),i=o,(s=[{key:"render",value:function(){var e=this.props,t=e.initialProps,n=(e.initialState,e.store,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["initialProps","initialState","store"]));return a.default.createElement(r,u({},n,t,{store:this.store}))}}])&&c(i.prototype,s),f&&c(i,f),o}(),Object.defineProperty(n,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"withRedux(".concat(r.displayName||r.name||"App",")")}),Object.defineProperty(n,"getInitialProps",{configurable:!0,enumerable:!0,writable:!0,value:(s=o.default.mark(function n(a){var i,u;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}throw new Error("No app context");case 2:if(a.ctx){n.next=4;break}throw new Error("No page context");case 4:if(i=y({makeStore:e,config:t,ctx:a.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),a.ctx.store=i,a.ctx.isServer=p,u={},!("getInitialProps"in r)){n.next=13;break}return n.next=12,r.getInitialProps.call(r,a);case 12:u=n.sent;case 13:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),n.abrupt("return",{store:i,isServer:p,initialState:t.serializeState(i.getState()),initialProps:u});case 15:case"end":return n.stop()}},n,this)}),f=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=s.apply(e,t);function a(e,t){try{var a=o[e](t),c=a.value}catch(e){return void n(e)}a.done?r(c):Promise.resolve(c).then(i,u)}function i(e){a("next",e)}function u(e){a("throw",e)}i()})},function(e){return f.apply(this,arguments)})}),i}}},222:function(e,t,r){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=r(223),{page:e.exports.default}})},223:function(e,t,r){"use strict";r.r(t);var n=r(25),o=r.n(n),a=r(84),i=r.n(a),u=r(0),c=r.n(u),l=r(52),s=r(41),f=r(126),p=r.n(f);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var r,n,u,s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a),r=t,n=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps,n=e.store;return c.a.createElement(a.Container,null,c.a.createElement(l.a,{store:n},c.a.createElement(t,r)))}}],u=[{key:"getInitialProps",value:(s=o.a.mark(function e(t){var r,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,n=t.ctx,!r.getInitialProps){e.next=7;break}return e.next=4,r.getInitialProps(n);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:return a=e.t0,e.abrupt("return",{pageProps:a});case 10:case"end":return e.stop()}},e,this)}),f=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=s.apply(e,t);function a(e){d(o,r,n,a,i,"next",e)}function i(e){d(o,r,n,a,i,"throw",e)}a(void 0)})},function(e){return f.apply(this,arguments)})}],n&&b(r.prototype,n),u&&b(r,u),t}();t.default=p()(s.c)(g)},224:function(e,t,r){"use strict";var n=r(26),o=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=P,t.Container=t.default=void 0;var a=o(r(47)),i=o(r(48)),u=o(r(225)),c=o(r(8)),l=o(r(9)),s=o(r(22)),f=o(r(23)),p=o(r(24)),y=o(r(17)),d=n(r(0)),b=o(r(3)),h=r(31),v=r(76),m=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}var r;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=P(t);return d.default.createElement(g,null,d.default.createElement(r,(0,u.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:(r=(0,i.default)(a.default.mark(function e(t){var r,n,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,t.router,n=t.ctx,e.next=3,(0,h.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})}]),t}(d.Component);t.default=m,(0,y.default)(m,"childContextTypes",{headManager:b.default.object,router:b.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=g;var w=(0,h.execOnce)(function(){0});function P(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return w(),n},get pathname(){return w(),t},get asPath(){return w(),r},back:function(){w(),e.back()},push:function(t,r){return w(),e.push(t,r)},pushTo:function(t,r){w();var n=r?t:null,o=r||t;return e.push(n,o)},replace:function(t,r){return w(),e.replace(t,r)},replaceTo:function(t,r){w();var n=r?t:null,o=r||t;return e.replace(n,o)}}}},225:function(e,t,r){var n=r(80);function o(){return e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}e.exports=o},84:function(e,t,r){e.exports=r(224)}},[[222,1,0]]]);