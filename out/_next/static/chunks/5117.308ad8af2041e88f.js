(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5117],{40926:function(t,n,r){"use strict";function o(){return(null===r.g||void 0===r.g?void 0:r.g.crypto)||(null===r.g||void 0===r.g?void 0:r.g.msCrypto)||{}}function e(){let t=o();return t.subtle||t.webkitSubtle}Object.defineProperty(n,"__esModule",{value:!0}),n.isBrowserCryptoAvailable=n.getSubtleCrypto=n.getBrowerCrypto=void 0,n.getBrowerCrypto=o,n.getSubtleCrypto=e,n.isBrowserCryptoAvailable=function(){return!!o()&&!!e()}},88618:function(t,n,r){"use strict";var o=r(83454);function e(){return"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product}function i(){return void 0!==o&&void 0!==o.versions&&void 0!==o.versions.node}Object.defineProperty(n,"__esModule",{value:!0}),n.isBrowser=n.isNode=n.isReactNative=void 0,n.isReactNative=e,n.isNode=i,n.isBrowser=function(){return!e()&&!i()}},1468:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});let o=r(34308);o.__exportStar(r(40926),n),o.__exportStar(r(88618),n)},34308:function(t,n,r){"use strict";r.r(n),r.d(n,{__assign:function(){return i},__asyncDelegator:function(){return m},__asyncGenerator:function(){return g},__asyncValues:function(){return _},__await:function(){return h},__awaiter:function(){return f},__classPrivateFieldGet:function(){return E},__classPrivateFieldSet:function(){return O},__createBinding:function(){return p},__decorate:function(){return u},__exportStar:function(){return R},__extends:function(){return e},__generator:function(){return l},__importDefault:function(){return U},__importStar:function(){return b},__makeTemplateObject:function(){return w},__metadata:function(){return a},__param:function(){return c},__read:function(){return v},__rest:function(){return s},__spread:function(){return y},__spreadArrays:function(){return J},__values:function(){return d}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(t,n){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function e(t,n){function r(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)};function s(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)0>n.indexOf(o[e])&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(r[o[e]]=t[o[e]]);return r}function u(t,n,r,o){var e,i=arguments.length,s=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,r,o);else for(var u=t.length-1;u>=0;u--)(e=t[u])&&(s=(i<3?e(s):i>3?e(n,r,s):e(n,r))||s);return i>3&&s&&Object.defineProperty(n,r,s),s}function c(t,n){return function(r,o){n(r,o,t)}}function a(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)}function f(t,n,r,o){return new(r||(r=Promise))(function(e,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function u(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?e(t.value):((n=t.value)instanceof r?n:new r(function(t){t(n)})).then(s,u)}c((o=o.apply(t,n||[])).next())})}function l(t,n){var r,o,e,i,s={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(e=2&i[0]?o.return:i[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,i[1])).done)return e;switch(o=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(e=(e=s.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){s.label=i[1];break}if(6===i[0]&&s.label<e[1]){s.label=e[1],e=i;break}if(e&&s.label<e[2]){s.label=e[2],s.ops.push(i);break}e[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{r=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function p(t,n,r,o){void 0===o&&(o=r),t[o]=n[r]}function R(t,n){for(var r in t)"default"===r||n.hasOwnProperty(r)||(n[r]=t[r])}function d(t){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&t[n],o=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,e,i=r.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return s}function y(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(v(arguments[n]));return t}function J(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),e=0,n=0;n<r;n++)for(var i=arguments[n],s=0,u=i.length;s<u;s++,e++)o[e]=i[s];return o}function h(t){return this instanceof h?(this.v=t,this):new h(t)}function g(t,n,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,e=r.apply(t,n||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(t){e[t]&&(o[t]=function(n){return new Promise(function(r,o){i.push([t,n,r,o])>1||u(t,n)})})}function u(t,n){try{var r;(r=e[t](n)).value instanceof h?Promise.resolve(r.value.v).then(c,a):f(i[0][2],r)}catch(t){f(i[0][3],t)}}function c(t){u("next",t)}function a(t){u("throw",t)}function f(t,n){t(n),i.shift(),i.length&&u(i[0][0],i[0][1])}}function m(t){var n,r;return n={},o("next"),o("throw",function(t){throw t}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(o,e){n[o]=t[o]?function(n){return(r=!r)?{value:h(t[o](n)),done:"return"===o}:e?e(n):n}:e}}function _(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,r=t[Symbol.asyncIterator];return r?r.call(t):(t=d(t),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(r){n[r]=t[r]&&function(n){return new Promise(function(o,e){!function(t,n,r,o){Promise.resolve(o).then(function(n){t({value:n,done:r})},n)}(o,e,(n=t[r](n)).done,n.value)})}}}function w(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}function b(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}function U(t){return t&&t.__esModule?t:{default:t}}function E(t,n){if(!n.has(t))throw TypeError("attempted to get private field on non-instance");return n.get(t)}function O(t,n,r){if(!n.has(t))throw TypeError("attempted to set private field on non-instance");return n.set(t,r),r}},35885:function(t,n,r){"use strict";r.d(n,{IJsonRpcProvider:function(){return e.x0}});var o=r(74057);r.o(o,"IJsonRpcProvider")&&r.d(n,{IJsonRpcProvider:function(){return o.IJsonRpcProvider}}),r.o(o,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return o.isHttpUrl}}),r.o(o,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return o.isJsonRpcError}}),r.o(o,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return o.isJsonRpcRequest}}),r.o(o,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return o.isJsonRpcResponse}}),r.o(o,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return o.isJsonRpcResult}}),r.o(o,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return o.isLocalhostUrl}}),r.o(o,"isReactNative")&&r.d(n,{isReactNative:function(){return o.isReactNative}}),r.o(o,"isWsUrl")&&r.d(n,{isWsUrl:function(){return o.isWsUrl}});var e=r(73416),i=r(71948);r.o(i,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return i.isHttpUrl}}),r.o(i,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return i.isJsonRpcError}}),r.o(i,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return i.isJsonRpcRequest}}),r.o(i,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return i.isJsonRpcResponse}}),r.o(i,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return i.isJsonRpcResult}}),r.o(i,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return i.isLocalhostUrl}}),r.o(i,"isReactNative")&&r.d(n,{isReactNative:function(){return i.isReactNative}}),r.o(i,"isWsUrl")&&r.d(n,{isWsUrl:function(){return i.isWsUrl}})},74057:function(){},73416:function(t,n,r){"use strict";r.d(n,{XR:function(){return e},x0:function(){return s}});class o{}class e extends o{constructor(t){super()}}class i extends o{constructor(){super()}}class s extends i{constructor(t){super()}}},71948:function(){},79806:function(t,n,r){"use strict";r.d(n,{CA:function(){return e},JV:function(){return u},O4:function(){return o},dQ:function(){return i},xK:function(){return s}});let o="INTERNAL_ERROR",e="SERVER_ERROR",i=[-32700,-32600,-32601,-32602,-32603],s={PARSE_ERROR:{code:-32700,message:"Parse error"},INVALID_REQUEST:{code:-32600,message:"Invalid Request"},METHOD_NOT_FOUND:{code:-32601,message:"Method not found"},INVALID_PARAMS:{code:-32602,message:"Invalid params"},[o]:{code:-32603,message:"Internal error"},[e]:{code:-32e3,message:"Server error"}},u=e},9698:function(t,n,r){"use strict";var o=r(1468);r.o(o,"IJsonRpcProvider")&&r.d(n,{IJsonRpcProvider:function(){return o.IJsonRpcProvider}}),r.o(o,"formatJsonRpcError")&&r.d(n,{formatJsonRpcError:function(){return o.formatJsonRpcError}}),r.o(o,"formatJsonRpcRequest")&&r.d(n,{formatJsonRpcRequest:function(){return o.formatJsonRpcRequest}}),r.o(o,"formatJsonRpcResult")&&r.d(n,{formatJsonRpcResult:function(){return o.formatJsonRpcResult}}),r.o(o,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return o.isHttpUrl}}),r.o(o,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return o.isJsonRpcError}}),r.o(o,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return o.isJsonRpcRequest}}),r.o(o,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return o.isJsonRpcResponse}}),r.o(o,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return o.isJsonRpcResult}}),r.o(o,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return o.isLocalhostUrl}}),r.o(o,"isReactNative")&&r.d(n,{isReactNative:function(){return o.isReactNative}}),r.o(o,"isWsUrl")&&r.d(n,{isWsUrl:function(){return o.isWsUrl}}),r.o(o,"payloadId")&&r.d(n,{payloadId:function(){return o.payloadId}})},90110:function(t,n,r){"use strict";r.d(n,{CX:function(){return u},L2:function(){return s},by:function(){return i},i5:function(){return e}});var o=r(79806);function e(t){return o.dQ.includes(t)}function i(t){return Object.keys(o.xK).includes(t)?o.xK[t]:o.xK[o.JV]}function s(t){let n=Object.values(o.xK).find(n=>n.code===t);return n||o.xK[o.JV]}function u(t,n,r){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?Error(`Unavailable ${r} RPC url at ${n}`):t}},71937:function(t,n,r){"use strict";r.d(n,{RI:function(){return c},o0:function(){return i},sT:function(){return s},tm:function(){return u}});var o=r(90110),e=r(79806);function i(){let t=1e3*Date.now();return t+Math.floor(1e3*Math.random())}function s(t,n,r){return{id:r||i(),jsonrpc:"2.0",method:t,params:n}}function u(t,n){return{id:t,jsonrpc:"2.0",result:n}}function c(t,n,r){var i;return{id:t,jsonrpc:"2.0",error:void 0===(i=n)?(0,o.by)(e.O4):("string"==typeof i&&(i=Object.assign(Object.assign({},(0,o.by)(e.CA)),{message:i})),void 0!==r&&(i.data=r),(0,o.i5)(i.code)&&(i=(0,o.L2)(i.code)),i)}}},56186:function(t,n,r){"use strict";r.d(n,{formatJsonRpcError:function(){return i.RI},formatJsonRpcRequest:function(){return i.sT},formatJsonRpcResult:function(){return i.tm},isHttpUrl:function(){return u.jK},isJsonRpcError:function(){return c.jg},isJsonRpcRequest:function(){return c.DW},isJsonRpcResponse:function(){return c.u},isJsonRpcResult:function(){return c.k4},isLocalhostUrl:function(){return u.JF},isWsUrl:function(){return u.UZ},parseConnectionError:function(){return o.CX},payloadId:function(){return i.o0}}),r(79806);var o=r(90110),e=r(9698);r.o(e,"IJsonRpcProvider")&&r.d(n,{IJsonRpcProvider:function(){return e.IJsonRpcProvider}}),r.o(e,"formatJsonRpcError")&&r.d(n,{formatJsonRpcError:function(){return e.formatJsonRpcError}}),r.o(e,"formatJsonRpcRequest")&&r.d(n,{formatJsonRpcRequest:function(){return e.formatJsonRpcRequest}}),r.o(e,"formatJsonRpcResult")&&r.d(n,{formatJsonRpcResult:function(){return e.formatJsonRpcResult}}),r.o(e,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return e.isHttpUrl}}),r.o(e,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return e.isJsonRpcError}}),r.o(e,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return e.isJsonRpcRequest}}),r.o(e,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return e.isJsonRpcResponse}}),r.o(e,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return e.isJsonRpcResult}}),r.o(e,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return e.isLocalhostUrl}}),r.o(e,"isReactNative")&&r.d(n,{isReactNative:function(){return e.isReactNative}}),r.o(e,"isWsUrl")&&r.d(n,{isWsUrl:function(){return e.isWsUrl}}),r.o(e,"payloadId")&&r.d(n,{payloadId:function(){return e.payloadId}});var i=r(71937),s=r(26043);r.o(s,"IJsonRpcProvider")&&r.d(n,{IJsonRpcProvider:function(){return s.IJsonRpcProvider}}),r.o(s,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return s.isHttpUrl}}),r.o(s,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return s.isJsonRpcError}}),r.o(s,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return s.isJsonRpcRequest}}),r.o(s,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return s.isJsonRpcResponse}}),r.o(s,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return s.isJsonRpcResult}}),r.o(s,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return s.isLocalhostUrl}}),r.o(s,"isReactNative")&&r.d(n,{isReactNative:function(){return s.isReactNative}}),r.o(s,"isWsUrl")&&r.d(n,{isWsUrl:function(){return s.isWsUrl}});var u=r(46119),c=r(84733)},26043:function(t,n,r){"use strict";r.d(n,{IJsonRpcProvider:function(){return o.IJsonRpcProvider}});var o=r(35885);r.o(o,"isHttpUrl")&&r.d(n,{isHttpUrl:function(){return o.isHttpUrl}}),r.o(o,"isJsonRpcError")&&r.d(n,{isJsonRpcError:function(){return o.isJsonRpcError}}),r.o(o,"isJsonRpcRequest")&&r.d(n,{isJsonRpcRequest:function(){return o.isJsonRpcRequest}}),r.o(o,"isJsonRpcResponse")&&r.d(n,{isJsonRpcResponse:function(){return o.isJsonRpcResponse}}),r.o(o,"isJsonRpcResult")&&r.d(n,{isJsonRpcResult:function(){return o.isJsonRpcResult}}),r.o(o,"isLocalhostUrl")&&r.d(n,{isLocalhostUrl:function(){return o.isLocalhostUrl}}),r.o(o,"isReactNative")&&r.d(n,{isReactNative:function(){return o.isReactNative}}),r.o(o,"isWsUrl")&&r.d(n,{isWsUrl:function(){return o.isWsUrl}})},46119:function(t,n,r){"use strict";function o(t,n){let r=function(t){let n=t.match(RegExp(/^\w+:/,"gi"));if(n&&n.length)return n[0]}(t);return void 0!==r&&RegExp(n).test(r)}function e(t){return o(t,"^https?:")}function i(t){return o(t,"^wss?:")}function s(t){return RegExp("wss?://localhost(:d{2,5})?").test(t)}r.d(n,{JF:function(){return s},UZ:function(){return i},jK:function(){return e}})},84733:function(t,n,r){"use strict";function o(t){return"object"==typeof t&&"id"in t&&"jsonrpc"in t&&"2.0"===t.jsonrpc}function e(t){return o(t)&&"method"in t}function i(t){return o(t)&&(s(t)||u(t))}function s(t){return"result"in t}function u(t){return"error"in t}r.d(n,{DW:function(){return e},jg:function(){return u},k4:function(){return s},u:function(){return i}})},62873:function(t,n){"use strict";function r(t){let n;return"undefined"!=typeof window&&void 0!==window[t]&&(n=window[t]),n}function o(t){let n=r(t);if(!n)throw Error(`${t} is not defined in Window`);return n}Object.defineProperty(n,"__esModule",{value:!0}),n.getLocalStorage=n.getLocalStorageOrThrow=n.getCrypto=n.getCryptoOrThrow=n.getLocation=n.getLocationOrThrow=n.getNavigator=n.getNavigatorOrThrow=n.getDocument=n.getDocumentOrThrow=n.getFromWindowOrThrow=n.getFromWindow=void 0,n.getFromWindow=r,n.getFromWindowOrThrow=o,n.getDocumentOrThrow=function(){return o("document")},n.getDocument=function(){return r("document")},n.getNavigatorOrThrow=function(){return o("navigator")},n.getNavigator=function(){return r("navigator")},n.getLocationOrThrow=function(){return o("location")},n.getLocation=function(){return r("location")},n.getCryptoOrThrow=function(){return o("crypto")},n.getCrypto=function(){return r("crypto")},n.getLocalStorageOrThrow=function(){return o("localStorage")},n.getLocalStorage=function(){return r("localStorage")}},44020:function(t){"use strict";var n="%[a-f0-9]{2}",r=RegExp("("+n+")|([^%]+?)","gi"),o=RegExp("("+n+")+","gi");t.exports=function(t){if("string"!=typeof t)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(n){return function(t){for(var n={"%FE%FF":"��","%FF%FE":"��"},e=o.exec(t);e;){try{n[e[0]]=decodeURIComponent(e[0])}catch(t){var i=function(t){try{return decodeURIComponent(t)}catch(e){for(var n=t.match(r)||[],o=1;o<n.length;o++)n=(t=(function t(n,r){try{return[decodeURIComponent(n.join(""))]}catch(t){}if(1===n.length)return n;r=r||1;var o=n.slice(0,r),e=n.slice(r);return Array.prototype.concat.call([],t(o),t(e))})(n,o).join("")).match(r)||[];return t}}(e[0]);i!==e[0]&&(n[e[0]]=i)}e=o.exec(t)}n["%C2"]="�";for(var s=Object.keys(n),u=0;u<s.length;u++){var c=s[u];t=t.replace(RegExp(c,"g"),n[c])}return t}(t)}}},80500:function(t){"use strict";t.exports=(t,n)=>{if(!("string"==typeof t&&"string"==typeof n))throw TypeError("Expected the arguments to be of type `string`");if(""===n)return[t];let r=t.indexOf(n);return -1===r?[t]:[t.slice(0,r),t.slice(r+n.length)]}},70610:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}}]);