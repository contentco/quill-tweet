!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(n)},c=Quill.import("blots/block/embed"),a=(Quill.import("blots/embed"),Quill.import("blots/container"),Quill.import("blots/block"),Quill.import("blots/inline"),Quill.import("blots/text"),Quill.import("formats/blockquote"),Quill.import("formats/link"),Quill.import("ui/icons")),f=function(t){function e(t){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),l(e,null,[{key:"icon",value:function(){return'<svg viewBox="0 0 275 275" xmlns="http://www.w3.org/2000/svg"><path d="M91.1 239c94.4 0 146-78 146-145.8 0-2.3 0-4.5-.2-6.7 10-7.2 18.7-16.2 25.6-26.5-9.4 4.1-19.3 6.8-29.5 8a51.5 51.5 0 0 0 22.6-28.3c-10 6-21 10.2-32.6 12.4A51.3 51.3 0 0 0 135.6 99C94.4 96.9 56 77.4 30 45.3a51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3c-7.5 2-15.4 2.4-23.1.9a51.3 51.3 0 0 0 48 35.6 103 103 0 0 1-76 21.3c23.5 15 50.7 23 78.6 23" fill="#444" fill-rule="nonzero"/></svg>'}},{key:"create",value:function(t){var r=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t),n=t;return r.innerHTML=n,twttr.widgets.load(r),r}},{key:"value",value:function(t){return t.innerHTML}}]),e}(c);f.blotName="tweet",f.tagName="DIV",f.className="ql-tweet",a.tweet=f.icon(),Quill.register("formats/tweet",f)},function(t,e){},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(1),i=(n(o),r(0));n(i)}]);