!function(){"use strict";var t,e,n,r,o,i,u={},f={};function c(t){var e=f[t];if(void 0!==e)return e.exports;var n=f[t]={id:t,loaded:!1,exports:{}},r=!0;try{u[t].call(n.exports,n,n.exports,c),r=!1}finally{r&&delete f[t]}return n.loaded=!0,n.exports}c.m=u,t=[],c.O=function(e,n,r,o){if(n){o=o||0;for(var i=t.length;i>0&&t[i-1][2]>o;i--)t[i]=t[i-1];t[i]=[n,r,o];return}for(var u=1/0,i=0;i<t.length;i++){for(var n=t[i][0],r=t[i][1],o=t[i][2],f=!0,l=0;l<n.length;l++)u>=o&&Object.keys(c.O).every(function(t){return c.O[t](n[l])})?n.splice(l--,1):(f=!1,o<u&&(u=o));if(f){t.splice(i--,1);var a=r();void 0!==a&&(e=a)}}return e},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,{a:e}),e},n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},c.t=function(t,r){if(1&r&&(t=this(t)),8&r||"object"==typeof t&&t&&(4&r&&t.__esModule||16&r&&"function"==typeof t.then))return t;var o=Object.create(null);c.r(o);var i={};e=e||[null,n({}),n([]),n(n)];for(var u=2&r&&t;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach(function(e){i[e]=function(){return t[e]}});return i.default=function(){return t},c.d(o,i),o},c.d=function(t,e){for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},c.p="https://cdn.statically.io/gh/HeinKoZin/loiheng-assets/main//_next/",r={2272:0},c.O.j=function(t){return 0===r[t]},o=function(t,e){var n,o,i=e[0],u=e[1],f=e[2],l=0;if(i.some(function(t){return 0!==r[t]})){for(n in u)c.o(u,n)&&(c.m[n]=u[n]);if(f)var a=f(c)}for(t&&t(e);l<i.length;l++)o=i[l],c.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return c.O(a)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();