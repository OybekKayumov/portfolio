function t(t,r,e,n){Object.defineProperty(t,r,{get:e,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=r.parcelRequire2041;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,r){n[t]=r},r.parcelRequire2041=o),o.register("f3ZL4",(function(r,e){t(r.exports,"default",(()=>f),(t=>f=t));var n=o("kcGKx"),a="object"==typeof e&&e&&!e.nodeType&&e,c=a&&r&&!r.nodeType&&r,i=c&&c.exports===a?u.Buffer:void 0,f=(i?i.isBuffer:void 0)||n.default}));var a="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,u=a||c||Function("return this")();o.register("kcGKx",(function(r,e){t(r.exports,"default",(()=>n));var n=function(){return!1}})),o.register("lFXqE",(function(r,e){t(r.exports,"default",(()=>u),(t=>u=t));var n="object"==typeof e&&e&&!e.nodeType&&e,o=n&&r&&!r.nodeType&&r,c=o&&o.exports===n&&a.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(t){}}()})),o.register("gqoYg",(function(r,e){t(r.exports,"default",(()=>i),(t=>i=t));var n="object"==typeof e&&e&&!e.nodeType&&e,o=n&&r&&!r.nodeType&&r,a=o&&o.exports===n?u.Buffer:void 0,c=a?a.allocUnsafe:void 0;var i=function(t,r){if(r)return t.slice();var e=t.length,n=c?c(e):new t.constructor(e);return t.copy(n),n}})),console.log("Exporting module");var i=function(){this.__data__=[],this.size=0};var f=function(t,r){return t===r||t!=t&&r!=r};var s=function(t,r){for(var e=t.length;e--;)if(f(t[e][0],r))return e;return-1},l=Array.prototype.splice;var p=function(t){var r=this.__data__,e=s(r,t);return!(e<0)&&(e==r.length-1?r.pop():l.call(r,e,1),--this.size,!0)};var v=function(t){var r=this.__data__,e=s(r,t);return e<0?void 0:r[e][1]};var b=function(t){return s(this.__data__,t)>-1};var y=function(t,r){var e=this.__data__,n=s(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function j(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}j.prototype.clear=i,j.prototype.delete=p,j.prototype.get=v,j.prototype.has=b,j.prototype.set=y;var h=j;var d=function(){this.__data__=new h,this.size=0};var _=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var g=function(t){return this.__data__.get(t)};var O=function(t){return this.__data__.has(t)},w=u.Symbol,A=Object.prototype,m=A.hasOwnProperty,x=A.toString,S=w?w.toStringTag:void 0;var z=function(t){var r=m.call(t,S),e=t[S];try{t[S]=void 0;var n=!0}catch(t){}var o=x.call(t);return n&&(r?t[S]=e:delete t[S]),o},F=Object.prototype.toString;var P=function(t){return F.call(t)},E=w?w.toStringTag:void 0;var I=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?z(t):P(t)};var U=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)};var M,T=function(t){if(!U(t))return!1;var r=I(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},q=u["__core-js_shared__"],D=(M=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var k=function(t){return!!D&&D in t},B=Function.prototype.toString;var $=function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""},C=/^\[object .+?Constructor\]$/,L=Function.prototype,R=Object.prototype,N=L.toString,V=R.hasOwnProperty,W=RegExp("^"+N.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var G=function(t){return!(!U(t)||k(t))&&(T(t)?W:C).test($(t))};var X=function(t,r){return null==t?void 0:t[r]};var Z=function(t,r){var e=X(t,r);return G(e)?e:void 0},K=Z(u,"Map"),Y=Z(Object,"create");var H=function(){this.__data__=Y?Y(null):{},this.size=0};var J=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Q=Object.prototype.hasOwnProperty;var tt=function(t){var r=this.__data__;if(Y){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return Q.call(r,t)?r[t]:void 0},rt=Object.prototype.hasOwnProperty;var et=function(t){var r=this.__data__;return Y?void 0!==r[t]:rt.call(r,t)};var nt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Y&&void 0===r?"__lodash_hash_undefined__":r,this};function ot(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ot.prototype.clear=H,ot.prototype.delete=J,ot.prototype.get=tt,ot.prototype.has=et,ot.prototype.set=nt;var at=ot;var ct=function(){this.size=0,this.__data__={hash:new at,map:new(K||h),string:new at}};var ut=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var it=function(t,r){var e=t.__data__;return ut(r)?e["string"==typeof r?"string":"hash"]:e.map};var ft=function(t){var r=it(this,t).delete(t);return this.size-=r?1:0,r};var st=function(t){return it(this,t).get(t)};var lt=function(t){return it(this,t).has(t)};var pt=function(t,r){var e=it(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function vt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}vt.prototype.clear=ct,vt.prototype.delete=ft,vt.prototype.get=st,vt.prototype.has=lt,vt.prototype.set=pt;var bt=vt;var yt=function(t,r){var e=this.__data__;if(e instanceof h){var n=e.__data__;if(!K||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new bt(n)}return e.set(t,r),this.size=e.size,this};function jt(t){var r=this.__data__=new h(t);this.size=r.size}jt.prototype.clear=d,jt.prototype.delete=_,jt.prototype.get=g,jt.prototype.has=O,jt.prototype.set=yt;var ht=jt;var dt=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t},_t=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var gt=function(t,r,e){"__proto__"==r&&_t?_t(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},Ot=Object.prototype.hasOwnProperty;var wt=function(t,r,e){var n=t[r];Ot.call(t,r)&&f(n,e)&&(void 0!==e||r in t)||gt(t,r,e)};var At=function(t,r,e,n){var o=!e;e||(e={});for(var a=-1,c=r.length;++a<c;){var u=r[a],i=n?n(e[u],t[u],u,e,t):void 0;void 0===i&&(i=t[u]),o?gt(e,u,i):wt(e,u,i)}return e};var mt=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var xt=function(t){return null!=t&&"object"==typeof t};var St=function(t){return xt(t)&&"[object Arguments]"==I(t)},zt=Object.prototype,Ft=zt.hasOwnProperty,Pt=zt.propertyIsEnumerable,Et=St(function(){return arguments}())?St:function(t){return xt(t)&&Ft.call(t,"callee")&&!Pt.call(t,"callee")},It=Array.isArray,Ut=o("f3ZL4"),Mt=/^(?:0|[1-9]\d*)$/;var Tt=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&Mt.test(t))&&t>-1&&t%1==0&&t<r};var qt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var kt=function(t){return xt(t)&&qt(t.length)&&!!Dt[I(t)]};var Bt=function(t){return function(r){return t(r)}},$t=(Xr=o("lFXqE")).default&&Xr.default.isTypedArray,Ct=$t?Bt($t):kt,Lt=Object.prototype.hasOwnProperty;var Rt=function(t,r){var e=It(t),n=!e&&Et(t),o=!e&&!n&&Ut.default(t),a=!e&&!n&&!o&&Ct(t),c=e||n||o||a,u=c?mt(t.length,String):[],i=u.length;for(var f in t)!r&&!Lt.call(t,f)||c&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Tt(f,i))||u.push(f);return u},Nt=Object.prototype;var Vt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Nt)};var Wt=function(t,r){return function(e){return t(r(e))}},Gt=Wt(Object.keys,Object),Xt=Object.prototype.hasOwnProperty;var Zt=function(t){if(!Vt(t))return Gt(t);var r=[];for(var e in Object(t))Xt.call(t,e)&&"constructor"!=e&&r.push(e);return r};var Kt=function(t){return null!=t&&qt(t.length)&&!T(t)};var Yt=function(t){return Kt(t)?Rt(t):Zt(t)};var Ht=function(t,r){return t&&At(r,Yt(r),t)};var Jt=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},Qt=Object.prototype.hasOwnProperty;var tr=function(t){if(!U(t))return Jt(t);var r=Vt(t),e=[];for(var n in t)("constructor"!=n||!r&&Qt.call(t,n))&&e.push(n);return e};var rr=function(t){return Kt(t)?Rt(t,!0):tr(t)};var er=function(t,r){return t&&At(r,rr(r),t)},nr=o("gqoYg");var or=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r};var ar=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var c=t[e];r(c,e,t)&&(a[o++]=c)}return a};var cr=function(){return[]},ur=Object.prototype.propertyIsEnumerable,ir=Object.getOwnPropertySymbols,fr=ir?function(t){return null==t?[]:(t=Object(t),ar(ir(t),(function(r){return ur.call(t,r)})))}:cr;var sr=function(t,r){return At(t,fr(t),r)};var lr=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},pr=Wt(Object.getPrototypeOf,Object),vr=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)lr(r,fr(t)),t=pr(t);return r}:cr;var br=function(t,r){return At(t,vr(t),r)};var yr=function(t,r,e){var n=r(t);return It(t)?n:lr(n,e(t))};var jr=function(t){return yr(t,Yt,fr)};var hr=function(t){return yr(t,rr,vr)},dr=Z(u,"DataView"),_r=Z(u,"Promise"),gr=Z(u,"Set"),Or=Z(u,"WeakMap"),wr=$(dr),Ar=$(K),mr=$(_r),xr=$(gr),Sr=$(Or),zr=I;(dr&&"[object DataView]"!=zr(new dr(new ArrayBuffer(1)))||K&&"[object Map]"!=zr(new K)||_r&&"[object Promise]"!=zr(_r.resolve())||gr&&"[object Set]"!=zr(new gr)||Or&&"[object WeakMap]"!=zr(new Or))&&(zr=function(t){var r=I(t),e="[object Object]"==r?t.constructor:void 0,n=e?$(e):"";if(n)switch(n){case wr:return"[object DataView]";case Ar:return"[object Map]";case mr:return"[object Promise]";case xr:return"[object Set]";case Sr:return"[object WeakMap]"}return r});var Fr=zr,Pr=Object.prototype.hasOwnProperty;var Er=function(t){var r=t.length,e=new t.constructor(r);return r&&"string"==typeof t[0]&&Pr.call(t,"index")&&(e.index=t.index,e.input=t.input),e},Ir=u.Uint8Array;var Ur=function(t){var r=new t.constructor(t.byteLength);return new Ir(r).set(new Ir(t)),r};var Mr=function(t,r){var e=r?Ur(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)},Tr=/\w*$/;var qr=function(t){var r=new t.constructor(t.source,Tr.exec(t));return r.lastIndex=t.lastIndex,r},Dr=w?w.prototype:void 0,kr=Dr?Dr.valueOf:void 0;var Br=function(t){return kr?Object(kr.call(t)):{}};var $r=function(t,r){var e=r?Ur(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var Cr=function(t,r,e){var n=t.constructor;switch(r){case"[object ArrayBuffer]":return Ur(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return Mr(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return $r(t,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return qr(t);case"[object Symbol]":return Br(t)}},Lr=Object.create,Rr=function(){function t(){}return function(r){if(!U(r))return{};if(Lr)return Lr(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();var Nr=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:Rr(pr(t))};Ut=o("f3ZL4");var Vr=function(t){return xt(t)&&"[object Map]"==Fr(t)},Wr=(Xr=o("lFXqE")).default&&Xr.default.isMap,Gr=Wr?Bt(Wr):Vr;var Xr,Zr=function(t){return xt(t)&&"[object Set]"==Fr(t)},Kr=(Xr=o("lFXqE")).default&&Xr.default.isSet,Yr=Kr?Bt(Kr):Zr,Hr={};Hr["[object Arguments]"]=Hr["[object Array]"]=Hr["[object ArrayBuffer]"]=Hr["[object DataView]"]=Hr["[object Boolean]"]=Hr["[object Date]"]=Hr["[object Float32Array]"]=Hr["[object Float64Array]"]=Hr["[object Int8Array]"]=Hr["[object Int16Array]"]=Hr["[object Int32Array]"]=Hr["[object Map]"]=Hr["[object Number]"]=Hr["[object Object]"]=Hr["[object RegExp]"]=Hr["[object Set]"]=Hr["[object String]"]=Hr["[object Symbol]"]=Hr["[object Uint8Array]"]=Hr["[object Uint8ClampedArray]"]=Hr["[object Uint16Array]"]=Hr["[object Uint32Array]"]=!0,Hr["[object Error]"]=Hr["[object Function]"]=Hr["[object WeakMap]"]=!1;var Jr=function t(r,e,n,o,a,c){var u,i=1&e,f=2&e,s=4&e;if(n&&(u=a?n(r,o,a,c):n(r)),void 0!==u)return u;if(!U(r))return r;var l=It(r);if(l){if(u=Er(r),!i)return or(r,u)}else{var p=Fr(r),v="[object Function]"==p||"[object GeneratorFunction]"==p;if(Ut.default(r))return nr.default(r,i);if("[object Object]"==p||"[object Arguments]"==p||v&&!a){if(u=f||v?{}:Nr(r),!i)return f?br(r,er(u,r)):sr(r,Ht(u,r))}else{if(!Hr[p])return a?r:{};u=Cr(r,p,i)}}c||(c=new ht);var b=c.get(r);if(b)return b;c.set(r,u),Yr(r)?r.forEach((function(o){u.add(t(o,e,n,o,r,c))})):Gr(r)&&r.forEach((function(o,a){u.set(a,t(o,e,n,a,r,c))}));var y=l?void 0:(s?f?hr:jr:f?rr:Yt)(r);return dt(y||r,(function(o,a){y&&(o=r[a=o]),wt(u,a,t(o,e,n,a,r,c))})),u};var Qr=function(t){return Jr(t,5)};console.log("Importing module");const te={cart:[{product:"bread",quamtity:5},{product:"pizza",quamtity:3}],user:{loggedIn:!0}},re=Object.assign({},te),ee=Qr(te);te.user.loggedIn=!1,console.log("stateClone: ",re),console.log("stateDeepClone: ",ee);
//! 1 npx or 2 npm script
//! 2 npm script
//! npm run start
//! npm start
//! npm run build
//! npm i parcel -g
//# sourceMappingURL=index.5ea60183.js.map
