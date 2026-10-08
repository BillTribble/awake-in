function sc(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(a,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ll={exports:{}},xo={},zl={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),uc=Symbol.for("react.portal"),hc=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),ps=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var Pl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Nl={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Nl,this.updater=n||Pl}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ql(){}ql.prototype=kn.prototype;function wr(e,t,n){this.props=e,this.context=t,this.refs=Nl,this.updater=n||Pl}var kr=wr.prototype=new ql;kr.constructor=wr;_l(kr,kn.prototype);kr.isPureReactComponent=!0;var fs=Array.isArray,Rl=Object.prototype.hasOwnProperty,vr={current:null},Wl={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,t,n){var a,o={},i=null,r=null;if(t!=null)for(a in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(i=""+t.key),t)Rl.call(t,a)&&!Wl.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),h=0;h<s;h++)l[h]=arguments[h+2];o.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)o[a]===void 0&&(o[a]=s[a]);return{$$typeof:da,type:e,key:i,ref:r,props:o,_owner:vr.current}}function vc(e,t){return{$$typeof:da,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function br(e){return typeof e=="object"&&e!==null&&e.$$typeof===da}function bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ms=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bc(""+e.key):t.toString(36)}function Wa(e,t,n,a,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case da:case uc:r=!0}}if(r)return r=e,o=o(r),e=a===""?"."+Ho(r,0):a,fs(o)?(n="",e!=null&&(n=e.replace(ms,"$&/")+"/"),Wa(o,t,n,"",function(h){return h})):o!=null&&(br(o)&&(o=vc(o,n+(!o.key||r&&r.key===o.key?"":(""+o.key).replace(ms,"$&/")+"/")+e)),t.push(o)),1;if(r=0,a=a===""?".":a+":",fs(e))for(var s=0;s<e.length;s++){i=e[s];var l=a+Ho(i,s);r+=Wa(i,t,n,l,o)}else if(l=kc(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=a+Ho(i,s++),r+=Wa(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function va(e,t,n){if(e==null)return e;var a=[],o=0;return Wa(e,a,"","",function(i){return t.call(n,i,o++)}),a}function Ic(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ya={transition:null},xc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:vr};function Ol(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!br(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=kn;P.Fragment=hc;P.Profiler=dc;P.PureComponent=wr;P.StrictMode=cc;P.Suspense=gc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;P.act=Ol;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=_l({},e.props),o=e.key,i=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,r=vr.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rl.call(t,l)&&!Wl.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){s=Array(l);for(var h=0;h<l;h++)s[h]=arguments[h+2];a.children=s}return{$$typeof:da,type:e.type,key:o,ref:i,props:a,_owner:r}};P.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pc,_context:e},e.Consumer=e};P.createElement=Yl;P.createFactory=function(e){var t=Yl.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:mc,render:e}};P.isValidElement=br;P.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Ic}};P.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=Ya.transition;Ya.transition={};try{e()}finally{Ya.transition=t}};P.unstable_act=Ol;P.useCallback=function(e,t){return de.current.useCallback(e,t)};P.useContext=function(e){return de.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return de.current.useDeferredValue(e)};P.useEffect=function(e,t){return de.current.useEffect(e,t)};P.useId=function(){return de.current.useId()};P.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return de.current.useMemo(e,t)};P.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};P.useRef=function(e){return de.current.useRef(e)};P.useState=function(e){return de.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return de.current.useTransition()};P.version="18.3.1";zl.exports=P;var I=zl.exports;const Dl=lc(I),Sc=sc({__proto__:null,default:Dl},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=I,Ac=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Ec=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function Ml(e,t,n){var a,o={},i=null,r=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(r=t.ref);for(a in t)Tc.call(t,a)&&!Bc.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:Ac,type:e,key:i,ref:r,props:o,_owner:Ec.current}}xo.Fragment=Cc;xo.jsx=Ml;xo.jsxs=Ml;Ll.exports=xo;var u=Ll.exports,bi={},Fl={exports:{}},xe={},Ul={exports:{}},Hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var z=T.length;T.push(L);e:for(;0<z;){var $=z-1>>>1,X=T[$];if(0<o(X,L))T[$]=L,T[z]=X,z=$;else break e}}function n(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var L=T[0],z=T.pop();if(z!==L){T[0]=z;e:for(var $=0,X=T.length,wa=X>>>1;$<wa;){var Ct=2*($+1)-1,Uo=T[Ct],Tt=Ct+1,ka=T[Tt];if(0>o(Uo,z))Tt<X&&0>o(ka,Uo)?(T[$]=ka,T[Tt]=z,$=Tt):(T[$]=Uo,T[Ct]=z,$=Ct);else if(Tt<X&&0>o(ka,z))T[$]=ka,T[Tt]=z,$=Tt;else break e}}return L}function o(T,L){var z=T.sortIndex-L.sortIndex;return z!==0?z:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var l=[],h=[],m=1,p=null,g=3,y=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var L=n(h);L!==null;){if(L.callback===null)a(h);else if(L.startTime<=T)a(h),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(h)}}function k(T){if(v=!1,f(T),!w)if(n(l)!==null)w=!0,Mo(j);else{var L=n(h);L!==null&&Fo(k,L.startTime-T)}}function j(T,L){w=!1,v&&(v=!1,d(E),E=-1),y=!0;var z=g;try{for(f(L),p=n(l);p!==null&&(!(p.expirationTime>L)||T&&!oe());){var $=p.callback;if(typeof $=="function"){p.callback=null,g=p.priorityLevel;var X=$(p.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(l)&&a(l),f(L)}else a(l);p=n(l)}if(p!==null)var wa=!0;else{var Ct=n(h);Ct!==null&&Fo(k,Ct.startTime-L),wa=!1}return wa}finally{p=null,g=z,y=!1}}var b=!1,A=null,E=-1,N=5,B=-1;function oe(){return!(e.unstable_now()-B<N)}function tt(){if(A!==null){var T=e.unstable_now();B=T;var L=!0;try{L=A(!0,T)}finally{L?je():(b=!1,A=null)}}else b=!1}var je;if(typeof c=="function")je=function(){c(tt)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,At=Sn.port2;Sn.port1.onmessage=tt,je=function(){At.postMessage(null)}}else je=function(){S(tt,0)};function Mo(T){A=T,b||(b=!0,je())}function Fo(T,L){E=S(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Mo(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var z=g;g=L;try{return T()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=g;g=T;try{return L()}finally{g=z}},e.unstable_scheduleCallback=function(T,L,z){var $=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,T={id:m++,callback:L,priorityLevel:T,startTime:z,expirationTime:X,sortIndex:-1},z>$?(T.sortIndex=z,t(h,T),n(l)===null&&T===n(h)&&(v?(d(E),E=-1):v=!0,Fo(k,z-$))):(T.sortIndex=X,t(l,T),w||y||(w=!0,Mo(j))),T},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(T){var L=g;return function(){var z=g;g=L;try{return T.apply(this,arguments)}finally{g=z}}}})(Hl);Ul.exports=Hl;var Lc=Ul.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=I,Ie=Lc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jl=new Set,Jn={};function Dt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)Jl.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gs={},ys={};function _c(e){return Ii.call(ys,e)?!0:Ii.call(gs,e)?!1:Pc.test(e)?ys[e]=!0:(gs[e]=!0,!1)}function Nc(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qc(e,t,n,a){if(t===null||typeof t>"u"||Nc(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,a,o,i,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=r}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ir=/[\-:]([a-z])/g;function xr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ir,xr);ae[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ir,xr);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ir,xr);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sr(e,t,n,a){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qc(t,n,o,a)&&(n=null),a||o===null?_c(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var et=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),jr=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),$l=Symbol.for("react.provider"),Vl=Symbol.for("react.context"),Ar=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Kl=Symbol.for("react.offscreen"),ws=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Jo;function Pn(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var $o=!1;function Vo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var a=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){a=h}e.call(t.prototype)}else{try{throw Error()}catch(h){a=h}e()}}catch(h){if(h&&a&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),i=a.stack.split(`
`),r=o.length-1,s=i.length-1;1<=r&&0<=s&&o[r]!==i[s];)s--;for(;1<=r&&0<=s;r--,s--)if(o[r]!==i[s]){if(r!==1||s!==1)do if(r--,s--,0>s||o[r]!==i[s]){var l=`
`+o[r].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=r&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Rc(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function Ai(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Ht:return"Portal";case xi:return"Profiler";case jr:return"StrictMode";case Si:return"Suspense";case ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vl:return(e.displayName||"Context")+".Consumer";case $l:return(e._context.displayName||"Context")+".Provider";case Ar:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cr:return t=e.displayName||null,t!==null?t:Ai(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return Ai(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ai(t);case 8:return t===jr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=Gl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ia(e){e._valueTracker||(e._valueTracker=Yc(e))}function Ql(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Gl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xl(e,t){t=t.checked,t!=null&&Sr(e,"checked",t,!1)}function Ti(e,t){Xl(e,t);var n=kt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ei(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ei(e,t,n){(t!=="number"||Ga(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function on(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(_n(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Zl(e,t){var n=kt(t.value),a=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xa,tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function au(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=nu(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var Dc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zi(e,t){if(t){if(Dc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _i=null;function Tr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,rn=null,sn=null;function xs(e){if(e=ma(e)){if(typeof Ni!="function")throw Error(x(280));var t=e.stateNode;t&&(t=To(t),Ni(e.stateNode,e.type,t))}}function ou(e){rn?sn?sn.push(e):sn=[e]:rn=e}function iu(){if(rn){var e=rn,t=sn;if(sn=rn=null,xs(e),t)for(e=0;e<t.length;e++)xs(t[e])}}function ru(e,t){return e(t)}function su(){}var Ko=!1;function lu(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return ru(e,t,n)}finally{Ko=!1,(rn!==null||sn!==null)&&(su(),iu())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var a=To(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var qi=!1;if(Ge)try{var An={};Object.defineProperty(An,"passive",{get:function(){qi=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{qi=!1}function Mc(e,t,n,a,o,i,r,s,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(m){this.onError(m)}}var Wn=!1,Qa=null,Xa=!1,Ri=null,Fc={onError:function(e){Wn=!0,Qa=e}};function Uc(e,t,n,a,o,i,r,s,l){Wn=!1,Qa=null,Mc.apply(Fc,arguments)}function Hc(e,t,n,a,o,i,r,s,l){if(Uc.apply(this,arguments),Wn){if(Wn){var h=Qa;Wn=!1,Qa=null}else throw Error(x(198));Xa||(Xa=!0,Ri=h)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ss(e){if(Mt(e)!==e)throw Error(x(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ss(o),e;if(i===a)return Ss(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==a.return)n=o,a=i;else{for(var r=!1,s=o.child;s;){if(s===n){r=!0,n=o,a=i;break}if(s===a){r=!0,a=o,n=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===n){r=!0,n=i,a=o;break}if(s===a){r=!0,a=i,n=o;break}s=s.sibling}if(!r)throw Error(x(189))}}if(n.alternate!==a)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function hu(e){return e=Jc(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var du=Ie.unstable_scheduleCallback,js=Ie.unstable_cancelCallback,$c=Ie.unstable_shouldYield,Vc=Ie.unstable_requestPaint,V=Ie.unstable_now,Kc=Ie.unstable_getCurrentPriorityLevel,Er=Ie.unstable_ImmediatePriority,pu=Ie.unstable_UserBlockingPriority,Za=Ie.unstable_NormalPriority,Gc=Ie.unstable_LowPriority,fu=Ie.unstable_IdlePriority,So=null,Fe=null;function Qc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:ed,Xc=Math.log,Zc=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Xc(e)/Zc|0)|0}var Sa=64,ja=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes,r=n&268435455;if(r!==0){var s=r&~o;s!==0?a=Nn(s):(i&=r,i!==0&&(a=Nn(i)))}else r=n&~o,r!==0?a=Nn(r):i!==0&&(a=Nn(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Re(t),o=1<<n,a|=e[n],t&=~o;return a}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-Re(i),s=1<<r,l=o[r];l===-1?(!(s&n)||s&a)&&(o[r]=td(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function ad(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Re(n),i=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~i}}function Br(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Re(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var q=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,Lr,wu,ku,vu,Yi=!1,Aa=[],ht=null,ct=null,dt=null,Kn=new Map,Gn=new Map,it=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Cn(e,t,n,a,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ma(t),t!==null&&Lr(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function id(e,t,n,a,o){switch(t){case"focusin":return ht=Cn(ht,e,t,n,a,o),!0;case"dragenter":return ct=Cn(ct,e,t,n,a,o),!0;case"mouseover":return dt=Cn(dt,e,t,n,a,o),!0;case"pointerover":var i=o.pointerId;return Kn.set(i,Cn(Kn.get(i)||null,e,t,n,a,o)),!0;case"gotpointercapture":return i=o.pointerId,Gn.set(i,Cn(Gn.get(i)||null,e,t,n,a,o)),!0}return!1}function bu(e){var t=Lt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=uu(n),t!==null){e.blockedOn=t,vu(e.priority,function(){wu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);_i=a,n.target.dispatchEvent(a),_i=null}else return t=ma(n),t!==null&&Lr(t),e.blockedOn=n,!1;t.shift()}return!0}function Cs(e,t,n){Oa(e)&&n.delete(t)}function rd(){Yi=!1,ht!==null&&Oa(ht)&&(ht=null),ct!==null&&Oa(ct)&&(ct=null),dt!==null&&Oa(dt)&&(dt=null),Kn.forEach(Cs),Gn.forEach(Cs)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yi||(Yi=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,rd)))}function Qn(e){function t(o){return Tn(o,e)}if(0<Aa.length){Tn(Aa[0],e);for(var n=1;n<Aa.length;n++){var a=Aa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(ht!==null&&Tn(ht,e),ct!==null&&Tn(ct,e),dt!==null&&Tn(dt,e),Kn.forEach(t),Gn.forEach(t),n=0;n<it.length;n++)a=it[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&it.shift()}var ln=et.ReactCurrentBatchConfig,to=!0;function sd(e,t,n,a){var o=q,i=ln.transition;ln.transition=null;try{q=1,zr(e,t,n,a)}finally{q=o,ln.transition=i}}function ld(e,t,n,a){var o=q,i=ln.transition;ln.transition=null;try{q=4,zr(e,t,n,a)}finally{q=o,ln.transition=i}}function zr(e,t,n,a){if(to){var o=Oi(e,t,n,a);if(o===null)ri(e,t,a,no,n),As(e,a);else if(id(o,e,t,n,a))a.stopPropagation();else if(As(e,a),t&4&&-1<od.indexOf(e)){for(;o!==null;){var i=ma(o);if(i!==null&&yu(i),i=Oi(e,t,n,a),i===null&&ri(e,t,a,no,n),i===o)break;o=i}o!==null&&a.stopPropagation()}else ri(e,t,a,null,n)}}var no=null;function Oi(e,t,n,a){if(no=null,e=Tr(a),e=Lt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Er:return 1;case pu:return 4;case Za:case Gc:return 16;case fu:return 536870912;default:return 16}default:return 16}}var st=null,Pr=null,Da=null;function xu(){if(Da)return Da;var e,t=Pr,n=t.length,a,o="value"in st?st.value:st.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===o[i-a];a++);return Da=o.slice(e,1<a?1-a:void 0)}function Ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function Ts(){return!1}function Se(e){function t(n,a,o,i,r){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ca:Ts,this.isPropagationStopped=Ts,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=Se(vn),fa=U({},vn,{view:0,detail:0}),ud=Se(fa),Qo,Xo,En,jo=U({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Qo=e.screenX-En.screenX,Xo=e.screenY-En.screenY):Xo=Qo=0,En=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Es=Se(jo),hd=U({},jo,{dataTransfer:0}),cd=Se(hd),dd=U({},fa,{relatedTarget:0}),Zo=Se(dd),pd=U({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Se(pd),md=U({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=Se(md),yd=U({},vn,{data:0}),Bs=Se(yd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function Nr(){return bd}var Id=U({},fa,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=Se(Id),Sd=U({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Se(Sd),jd=U({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),Ad=Se(jd),Cd=U({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=Se(Cd),Ed=U({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Se(Ed),Ld=[9,13,27,32],qr=Ge&&"CompositionEvent"in window,Yn=null;Ge&&"documentMode"in document&&(Yn=document.documentMode);var zd=Ge&&"TextEvent"in window&&!Yn,Su=Ge&&(!qr||Yn&&8<Yn&&11>=Yn),zs=" ",Ps=!1;function ju(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Pd(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Ps=!0,zs);case"textInput":return e=t.data,e===zs&&Ps?null:e;default:return null}}function _d(e,t){if($t)return e==="compositionend"||!qr&&ju(e,t)?(e=xu(),Da=Pr=st=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nd[e.type]:t==="textarea"}function Cu(e,t,n,a){ou(a),t=ao(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var On=null,Xn=null;function qd(e){Wu(e,0)}function Ao(e){var t=Gt(e);if(Ql(t))return e}function Rd(e,t){if(e==="change")return t}var Tu=!1;if(Ge){var ei;if(Ge){var ti="oninput"in document;if(!ti){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),ti=typeof Ns.oninput=="function"}ei=ti}else ei=!1;Tu=ei&&(!document.documentMode||9<document.documentMode)}function qs(){On&&(On.detachEvent("onpropertychange",Eu),Xn=On=null)}function Eu(e){if(e.propertyName==="value"&&Ao(Xn)){var t=[];Cu(t,Xn,e,Tr(e)),lu(qd,t)}}function Wd(e,t,n){e==="focusin"?(qs(),On=t,Xn=n,On.attachEvent("onpropertychange",Eu)):e==="focusout"&&qs()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Xn)}function Od(e,t){if(e==="click")return Ao(t)}function Dd(e,t){if(e==="input"||e==="change")return Ao(t)}function Md(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Md;function Zn(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ii.call(t,o)||!Ye(e[o],t[o]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,t){var n=Rs(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(){for(var e=window,t=Ga();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ga(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=Lu(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bu(n.ownerDocument.documentElement,n)){if(a!==null&&Rr(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(a.start,o);a=a.end===void 0?i:Math.min(a.end,o),!e.extend&&i>a&&(o=a,a=i,i=o),o=Ws(n,i);var r=Ws(n,a);o&&r&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=Ge&&"documentMode"in document&&11>=document.documentMode,Vt=null,Di=null,Dn=null,Mi=!1;function Ys(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||Vt==null||Vt!==Ga(a)||(a=Vt,"selectionStart"in a&&Rr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Dn&&Zn(Dn,a)||(Dn=a,a=ao(Di,"onSelect"),0<a.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Vt)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},ni={},zu={};Ge&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Co(e){if(ni[e])return ni[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return ni[e]=t[n];return e}var Pu=Co("animationend"),_u=Co("animationiteration"),Nu=Co("animationstart"),qu=Co("transitionend"),Ru=new Map,Os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Ru.set(e,t),Dt(t,[e])}for(var ai=0;ai<Os.length;ai++){var oi=Os[ai],Hd=oi.toLowerCase(),Jd=oi[0].toUpperCase()+oi.slice(1);bt(Hd,"on"+Jd)}bt(Pu,"onAnimationEnd");bt(_u,"onAnimationIteration");bt(Nu,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(qu,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function Ds(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Hc(a,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var s=a[r],l=s.instance,h=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Ds(o,s,h),i=l}else for(r=0;r<a.length;r++){if(s=a[r],l=s.instance,h=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Ds(o,s,h),i=l}}}if(Xa)throw e=Ri,Xa=!1,Ri=null,e}function Y(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var a=e+"__bubble";n.has(a)||(Yu(t,e,2,!1),n.add(a))}function ii(e,t,n){var a=0;t&&(a|=4),Yu(n,e,a,t)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function ea(e){if(!e[Ea]){e[Ea]=!0,Jl.forEach(function(n){n!=="selectionchange"&&($d.has(n)||ii(n,!1,e),ii(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ea]||(t[Ea]=!0,ii("selectionchange",!1,t))}}function Yu(e,t,n,a){switch(Iu(t)){case 1:var o=sd;break;case 4:o=ld;break;default:o=zr}n=o.bind(null,t,n,e),o=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ri(e,t,n,a,o){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(r===4)for(r=a.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;r=r.return}for(;s!==null;){if(r=Lt(s),r===null)return;if(l=r.tag,l===5||l===6){a=i=r;continue e}s=s.parentNode}}a=a.return}lu(function(){var h=i,m=Tr(n),p=[];e:{var g=Ru.get(e);if(g!==void 0){var y=_r,w=e;switch(e){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":y=xd;break;case"focusin":w="focus",y=Zo;break;case"focusout":w="blur",y=Zo;break;case"beforeblur":case"afterblur":y=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ad;break;case Pu:case _u:case Nu:y=fd;break;case qu:y=Td;break;case"scroll":y=ud;break;case"wheel":y=Bd;break;case"copy":case"cut":case"paste":y=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ls}var v=(t&4)!==0,S=!v&&e==="scroll",d=v?g!==null?g+"Capture":null:g;v=[];for(var c=h,f;c!==null;){f=c;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,d!==null&&(k=Vn(c,d),k!=null&&v.push(ta(c,k,f)))),S)break;c=c.return}0<v.length&&(g=new y(g,w,null,n,m),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==_i&&(w=n.relatedTarget||n.fromElement)&&(Lt(w)||w[Qe]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=h,w=w?Lt(w):null,w!==null&&(S=Mt(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=h),y!==w)){if(v=Es,k="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ls,k="onPointerLeave",d="onPointerEnter",c="pointer"),S=y==null?g:Gt(y),f=w==null?g:Gt(w),g=new v(k,c+"leave",y,n,m),g.target=S,g.relatedTarget=f,k=null,Lt(m)===h&&(v=new v(d,c+"enter",w,n,m),v.target=f,v.relatedTarget=S,k=v),S=k,y&&w)t:{for(v=y,d=w,c=0,f=v;f;f=Ft(f))c++;for(f=0,k=d;k;k=Ft(k))f++;for(;0<c-f;)v=Ft(v),c--;for(;0<f-c;)d=Ft(d),f--;for(;c--;){if(v===d||d!==null&&v===d.alternate)break t;v=Ft(v),d=Ft(d)}v=null}else v=null;y!==null&&Ms(p,g,y,v,!1),w!==null&&S!==null&&Ms(p,S,w,v,!0)}}e:{if(g=h?Gt(h):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=Rd;else if(_s(g))if(Tu)j=Dd;else{j=Yd;var b=Wd}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Od);if(j&&(j=j(e,h))){Cu(p,j,n,m);break e}b&&b(e,g,h),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Ei(g,"number",g.value)}switch(b=h?Gt(h):window,e){case"focusin":(_s(b)||b.contentEditable==="true")&&(Vt=b,Di=h,Dn=null);break;case"focusout":Dn=Di=Vt=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,Ys(p,n,m);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":Ys(p,n,m)}var A;if(qr)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else $t?ju(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Su&&n.locale!=="ko"&&($t||E!=="onCompositionStart"?E==="onCompositionEnd"&&$t&&(A=xu()):(st=m,Pr="value"in st?st.value:st.textContent,$t=!0)),b=ao(h,E),0<b.length&&(E=new Bs(E,e,null,n,m),p.push({event:E,listeners:b}),A?E.data=A:(A=Au(n),A!==null&&(E.data=A)))),(A=zd?Pd(e,n):_d(e,n))&&(h=ao(h,"onBeforeInput"),0<h.length&&(m=new Bs("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:h}),m.data=A))}Wu(p,t)})}function ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vn(e,n),i!=null&&a.unshift(ta(e,i,o)),i=Vn(e,t),i!=null&&a.push(ta(e,i,o))),e=e.return}return a}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ms(e,t,n,a,o){for(var i=t._reactName,r=[];n!==null&&n!==a;){var s=n,l=s.alternate,h=s.stateNode;if(l!==null&&l===a)break;s.tag===5&&h!==null&&(s=h,o?(l=Vn(n,i),l!=null&&r.unshift(ta(n,l,s))):o||(l=Vn(n,i),l!=null&&r.push(ta(n,l,s)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Vd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Kd,"")}function Ba(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(x(425))}function oo(){}var Fi=null,Ui=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(Xd)}:Ji;function Xd(e){setTimeout(function(){throw e})}function si(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Qn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Qn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Me="__reactFiber$"+bn,na="__reactProps$"+bn,Qe="__reactContainer$"+bn,$i="__reactEvents$"+bn,Zd="__reactListeners$"+bn,ep="__reactHandles$"+bn;function Lt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hs(e);e!==null;){if(n=e[Me])return n;e=Hs(e)}return t}e=n,n=e.parentNode}return null}function ma(e){return e=e[Me]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function To(e){return e[na]||null}var Vi=[],Qt=-1;function It(e){return{current:e}}function O(e){0>Qt||(e.current=Vi[Qt],Vi[Qt]=null,Qt--)}function W(e,t){Qt++,Vi[Qt]=e.current,e.current=t}var vt={},ue=It(vt),ge=It(!1),qt=vt;function dn(e,t){var n=e.type.contextTypes;if(!n)return vt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function io(){O(ge),O(ue)}function Js(e,t,n){if(ue.current!==vt)throw Error(x(168));W(ue,t),W(ge,n)}function Ou(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(x(108,Wc(e)||"Unknown",o));return U({},n,a)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,qt=ue.current,W(ue,e),W(ge,ge.current),!0}function $s(e,t,n){var a=e.stateNode;if(!a)throw Error(x(169));n?(e=Ou(e,t,qt),a.__reactInternalMemoizedMergedChildContext=e,O(ge),O(ue),W(ue,e)):O(ge),W(ge,n)}var Je=null,Eo=!1,li=!1;function Du(e){Je===null?Je=[e]:Je.push(e)}function tp(e){Eo=!0,Du(e)}function xt(){if(!li&&Je!==null){li=!0;var e=0,t=q;try{var n=Je;for(q=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Je=null,Eo=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),du(Er,xt),o}finally{q=t,li=!1}}return null}var Xt=[],Zt=0,so=null,lo=0,Ae=[],Ce=0,Rt=null,$e=1,Ve="";function Et(e,t){Xt[Zt++]=lo,Xt[Zt++]=so,so=e,lo=t}function Mu(e,t,n){Ae[Ce++]=$e,Ae[Ce++]=Ve,Ae[Ce++]=Rt,Rt=e;var a=$e;e=Ve;var o=32-Re(a)-1;a&=~(1<<o),n+=1;var i=32-Re(t)+o;if(30<i){var r=o-o%5;i=(a&(1<<r)-1).toString(32),a>>=r,o-=r,$e=1<<32-Re(t)+o|n<<o|a,Ve=i+e}else $e=1<<i|n<<o|a,Ve=e}function Wr(e){e.return!==null&&(Et(e,1),Mu(e,1,0))}function Yr(e){for(;e===so;)so=Xt[--Zt],Xt[Zt]=null,lo=Xt[--Zt],Xt[Zt]=null;for(;e===Rt;)Rt=Ae[--Ce],Ae[Ce]=null,Ve=Ae[--Ce],Ae[Ce]=null,$e=Ae[--Ce],Ae[Ce]=null}var be=null,ve=null,D=!1,qe=null;function Fu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ve=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:$e,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ve=null,!0):!1;default:return!1}}function Ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(D){var t=ve;if(t){var n=t;if(!Vs(e,t)){if(Ki(e))throw Error(x(418));t=pt(n.nextSibling);var a=be;t&&Vs(e,t)?Fu(a,n):(e.flags=e.flags&-4097|2,D=!1,be=e)}}else{if(Ki(e))throw Error(x(418));e.flags=e.flags&-4097|2,D=!1,be=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function La(e){if(e!==be)return!1;if(!D)return Ks(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=ve)){if(Ki(e))throw Uu(),Error(x(418));for(;t;)Fu(e,t),t=pt(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=be?pt(e.stateNode.nextSibling):null;return!0}function Uu(){for(var e=ve;e;)e=pt(e.nextSibling)}function pn(){ve=be=null,D=!1}function Or(e){qe===null?qe=[e]:qe.push(e)}var np=et.ReactCurrentBatchConfig;function Bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var a=n.stateNode}if(!a)throw Error(x(147,e));var o=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(r){var s=o.refs;r===null?delete s[i]:s[i]=r},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Hu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function a(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=yt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function r(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,k){return c===null||c.tag!==6?(c=mi(f,d.mode,k),c.return=d,c):(c=o(c,f),c.return=d,c)}function l(d,c,f,k){var j=f.type;return j===Jt?m(d,c,f.props.children,k,f.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===at&&Gs(j)===c.type)?(k=o(c,f.props),k.ref=Bn(d,c,f),k.return=d,k):(k=Ka(f.type,f.key,f.props,null,d.mode,k),k.ref=Bn(d,c,f),k.return=d,k)}function h(d,c,f,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=gi(f,d.mode,k),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function m(d,c,f,k,j){return c===null||c.tag!==7?(c=Nt(f,d.mode,k,j),c.return=d,c):(c=o(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=mi(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ba:return f=Ka(c.type,c.key,c.props,null,d.mode,f),f.ref=Bn(d,null,c),f.return=d,f;case Ht:return c=gi(c,d.mode,f),c.return=d,c;case at:var k=c._init;return p(d,k(c._payload),f)}if(_n(c)||jn(c))return c=Nt(c,d.mode,f,null),c.return=d,c;za(d,c)}return null}function g(d,c,f,k){var j=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:s(d,c,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ba:return f.key===j?l(d,c,f,k):null;case Ht:return f.key===j?h(d,c,f,k):null;case at:return j=f._init,g(d,c,j(f._payload),k)}if(_n(f)||jn(f))return j!==null?null:m(d,c,f,k,null);za(d,f)}return null}function y(d,c,f,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return d=d.get(f)||null,s(c,d,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ba:return d=d.get(k.key===null?f:k.key)||null,l(c,d,k,j);case Ht:return d=d.get(k.key===null?f:k.key)||null,h(c,d,k,j);case at:var b=k._init;return y(d,c,f,b(k._payload),j)}if(_n(k)||jn(k))return d=d.get(f)||null,m(c,d,k,j,null);za(c,k)}return null}function w(d,c,f,k){for(var j=null,b=null,A=c,E=c=0,N=null;A!==null&&E<f.length;E++){A.index>E?(N=A,A=null):N=A.sibling;var B=g(d,A,f[E],k);if(B===null){A===null&&(A=N);break}e&&A&&B.alternate===null&&t(d,A),c=i(B,c,E),b===null?j=B:b.sibling=B,b=B,A=N}if(E===f.length)return n(d,A),D&&Et(d,E),j;if(A===null){for(;E<f.length;E++)A=p(d,f[E],k),A!==null&&(c=i(A,c,E),b===null?j=A:b.sibling=A,b=A);return D&&Et(d,E),j}for(A=a(d,A);E<f.length;E++)N=y(A,d,E,f[E],k),N!==null&&(e&&N.alternate!==null&&A.delete(N.key===null?E:N.key),c=i(N,c,E),b===null?j=N:b.sibling=N,b=N);return e&&A.forEach(function(oe){return t(d,oe)}),D&&Et(d,E),j}function v(d,c,f,k){var j=jn(f);if(typeof j!="function")throw Error(x(150));if(f=j.call(f),f==null)throw Error(x(151));for(var b=j=null,A=c,E=c=0,N=null,B=f.next();A!==null&&!B.done;E++,B=f.next()){A.index>E?(N=A,A=null):N=A.sibling;var oe=g(d,A,B.value,k);if(oe===null){A===null&&(A=N);break}e&&A&&oe.alternate===null&&t(d,A),c=i(oe,c,E),b===null?j=oe:b.sibling=oe,b=oe,A=N}if(B.done)return n(d,A),D&&Et(d,E),j;if(A===null){for(;!B.done;E++,B=f.next())B=p(d,B.value,k),B!==null&&(c=i(B,c,E),b===null?j=B:b.sibling=B,b=B);return D&&Et(d,E),j}for(A=a(d,A);!B.done;E++,B=f.next())B=y(A,d,E,B.value,k),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?E:B.key),c=i(B,c,E),b===null?j=B:b.sibling=B,b=B);return e&&A.forEach(function(tt){return t(d,tt)}),D&&Et(d,E),j}function S(d,c,f,k){if(typeof f=="object"&&f!==null&&f.type===Jt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ba:e:{for(var j=f.key,b=c;b!==null;){if(b.key===j){if(j=f.type,j===Jt){if(b.tag===7){n(d,b.sibling),c=o(b,f.props.children),c.return=d,d=c;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===at&&Gs(j)===b.type){n(d,b.sibling),c=o(b,f.props),c.ref=Bn(d,b,f),c.return=d,d=c;break e}n(d,b);break}else t(d,b);b=b.sibling}f.type===Jt?(c=Nt(f.props.children,d.mode,k,f.key),c.return=d,d=c):(k=Ka(f.type,f.key,f.props,null,d.mode,k),k.ref=Bn(d,c,f),k.return=d,d=k)}return r(d);case Ht:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=gi(f,d.mode,k),c.return=d,d=c}return r(d);case at:return b=f._init,S(d,c,b(f._payload),k)}if(_n(f))return w(d,c,f,k);if(jn(f))return v(d,c,f,k);za(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=mi(f,d.mode,k),c.return=d,d=c),r(d)):n(d,c)}return S}var fn=Hu(!0),Ju=Hu(!1),uo=It(null),ho=null,en=null,Dr=null;function Mr(){Dr=en=ho=null}function Fr(e){var t=uo.current;O(uo),e._currentValue=t}function Qi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function un(e,t){ho=e,Dr=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Dr!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(ho===null)throw Error(x(308));en=e,ho.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var zt=null;function Ur(e){zt===null?zt=[e]:zt.push(e)}function $u(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,Ur(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xe(e,a)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Hr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,_&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Xe(e,n)}return o=a.interleaved,o===null?(t.next=t,Ur(a)):(t.next=o.next,o.next=t),a.interleaved=t,Xe(e,n)}function Fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Br(e,n)}}function Qs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,a){var o=e.updateQueue;ot=!1;var i=o.firstBaseUpdate,r=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,h=l.next;l.next=null,r===null?i=h:r.next=h,r=l;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==r&&(s===null?m.firstBaseUpdate=h:s.next=h,m.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;r=0,m=h=l=null,s=i;do{var g=s.lane,y=s.eventTime;if((a&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(y,p,g):w,g==null)break e;p=U({},p,g);break e;case 2:ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(h=m=y,l=p):m=m.next=y,r|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=p),o.baseState=l,o.firstBaseUpdate=h,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do r|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Yt|=r,e.lanes=r,e.memoizedState=p}}function Xs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(x(191,o));o.call(a)}}}var ga={},Ue=It(ga),aa=It(ga),oa=It(ga);function Pt(e){if(e===ga)throw Error(x(174));return e}function Jr(e,t){switch(W(oa,t),W(aa,e),W(Ue,ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}O(Ue),W(Ue,t)}function mn(){O(Ue),O(aa),O(oa)}function Ku(e){Pt(oa.current);var t=Pt(Ue.current),n=Li(t,e.type);t!==n&&(W(aa,e),W(Ue,n))}function $r(e){aa.current===e&&(O(Ue),O(aa))}var M=It(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ui=[];function Vr(){for(var e=0;e<ui.length;e++)ui[e]._workInProgressVersionPrimary=null;ui.length=0}var Ua=et.ReactCurrentDispatcher,hi=et.ReactCurrentBatchConfig,Wt=0,F=null,G=null,Z=null,fo=!1,Mn=!1,ia=0,ap=0;function ie(){throw Error(x(321))}function Kr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Gr(e,t,n,a,o,i){if(Wt=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?sp:lp,e=n(a,o),Mn){i=0;do{if(Mn=!1,ia=0,25<=i)throw Error(x(301));i+=1,Z=G=null,t.updateQueue=null,Ua.current=up,e=n(a,o)}while(Mn)}if(Ua.current=mo,t=G!==null&&G.next!==null,Wt=0,Z=G=F=null,fo=!1,t)throw Error(x(300));return e}function Qr(){var e=ia!==0;return ia=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?F.memoizedState=Z=e:Z=Z.next=e,Z}function Le(){if(G===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Z===null?F.memoizedState:Z.next;if(t!==null)Z=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?F.memoizedState=Z=e:Z=Z.next=e}return Z}function ra(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=Le(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var a=G,o=a.baseQueue,i=n.pending;if(i!==null){if(o!==null){var r=o.next;o.next=i.next,i.next=r}a.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,a=a.baseState;var s=r=null,l=null,h=i;do{var m=h.lane;if((Wt&m)===m)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),a=h.hasEagerState?h.eagerState:e(a,h.action);else{var p={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(s=l=p,r=a):l=l.next=p,F.lanes|=m,Yt|=m}h=h.next}while(h!==null&&h!==i);l===null?r=a:l.next=s,Ye(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseState=r,t.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do i=o.lane,F.lanes|=i,Yt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function di(e){var t=Le(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var r=o=o.next;do i=e(i,r.action),r=r.next;while(r!==o);Ye(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Gu(){}function Qu(e,t){var n=F,a=Le(),o=t(),i=!Ye(a.memoizedState,o);if(i&&(a.memoizedState=o,me=!0),a=a.queue,Xr(eh.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,sa(9,Zu.bind(null,n,a,o,t),void 0,null),ee===null)throw Error(x(349));Wt&30||Xu(n,t,o)}return o}function Xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zu(e,t,n,a){t.value=n,t.getSnapshot=a,th(t)&&nh(e)}function eh(e,t,n){return n(function(){th(t)&&nh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function nh(e){var t=Xe(e,1);t!==null&&We(t,e,1,-1)}function Zs(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=rp.bind(null,F,e),[t.memoizedState,e]}function sa(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function ah(){return Le().memoizedState}function Ha(e,t,n,a){var o=De();F.flags|=e,o.memoizedState=sa(1|t,n,void 0,a===void 0?null:a)}function Bo(e,t,n,a){var o=Le();a=a===void 0?null:a;var i=void 0;if(G!==null){var r=G.memoizedState;if(i=r.destroy,a!==null&&Kr(a,r.deps)){o.memoizedState=sa(t,n,i,a);return}}F.flags|=e,o.memoizedState=sa(1|t,n,i,a)}function el(e,t){return Ha(8390656,8,e,t)}function Xr(e,t){return Bo(2048,8,e,t)}function oh(e,t){return Bo(4,2,e,t)}function ih(e,t){return Bo(4,4,e,t)}function rh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sh(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,rh.bind(null,t,e),n)}function Zr(){}function lh(e,t){var n=Le();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Kr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function uh(e,t){var n=Le();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Kr(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function hh(e,t,n){return Wt&21?(Ye(n,t)||(n=mu(),F.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function op(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var a=hi.transition;hi.transition={};try{e(!1),t()}finally{q=n,hi.transition=a}}function ch(){return Le().memoizedState}function ip(e,t,n){var a=gt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},dh(e))ph(t,n);else if(n=$u(e,t,n,a),n!==null){var o=ce();We(n,e,a,o),fh(n,t,a)}}function rp(e,t,n){var a=gt(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(dh(e))ph(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,n);if(o.hasEagerState=!0,o.eagerState=s,Ye(s,r)){var l=t.interleaved;l===null?(o.next=o,Ur(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=$u(e,t,o,a),n!==null&&(o=ce(),We(n,e,a,o),fh(n,t,a))}}function dh(e){var t=e.alternate;return e===F||t!==null&&t===F}function ph(e,t){Mn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fh(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Br(e,n)}}var mo={readContext:Be,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},sp={readContext:Be,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:el,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4194308,4,rh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ha(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=De();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=ip.bind(null,F,e),[a.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Zs,useDebugValue:Zr,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Zs(!1),t=e[0];return e=op.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=F,o=De();if(D){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ee===null)throw Error(x(349));Wt&30||Xu(a,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,el(eh.bind(null,a,i,e),[e]),a.flags|=2048,sa(9,Zu.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=De(),t=ee.identifierPrefix;if(D){var n=Ve,a=$e;n=(a&~(1<<32-Re(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=ia++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lp={readContext:Be,useCallback:lh,useContext:Be,useEffect:Xr,useImperativeHandle:sh,useInsertionEffect:oh,useLayoutEffect:ih,useMemo:uh,useReducer:ci,useRef:ah,useState:function(){return ci(ra)},useDebugValue:Zr,useDeferredValue:function(e){var t=Le();return hh(t,G.memoizedState,e)},useTransition:function(){var e=ci(ra)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Qu,useId:ch,unstable_isNewReconciler:!1},up={readContext:Be,useCallback:lh,useContext:Be,useEffect:Xr,useImperativeHandle:sh,useInsertionEffect:oh,useLayoutEffect:ih,useMemo:uh,useReducer:di,useRef:ah,useState:function(){return di(ra)},useDebugValue:Zr,useDeferredValue:function(e){var t=Le();return G===null?t.memoizedState=e:hh(t,G.memoizedState,e)},useTransition:function(){var e=di(ra)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Qu,useId:ch,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ce(),o=gt(e),i=Ke(a,o);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,o),t!==null&&(We(t,e,o,a),Fa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ce(),o=gt(e),i=Ke(a,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,o),t!==null&&(We(t,e,o,a),Fa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),a=gt(e),o=Ke(n,a);o.tag=2,t!=null&&(o.callback=t),t=ft(e,o,a),t!==null&&(We(t,e,a,n),Fa(t,e,a))}};function tl(e,t,n,a,o,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,a)||!Zn(o,i):!0}function mh(e,t,n){var a=!1,o=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(o=ye(t)?qt:ue.current,a=t.contextTypes,i=(a=a!=null)?dn(e,o):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function Zi(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Hr(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Be(i):(i=ye(t)?qt:ue.current,o.context=dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Lo.enqueueReplaceState(o,o.state,null),co(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",a=t;do n+=Rc(a),a=a.return;while(a);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function er(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){yo||(yo=!0,hr=a),er(e,t)},n}function yh(e,t,n){n=Ke(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){er(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){er(e,t),typeof a!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function al(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new hp;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function ol(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function il(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var cp=et.ReactCurrentOwner,me=!1;function he(e,t,n,a){t.child=e===null?Ju(t,null,n,a):fn(t,e.child,n,a)}function rl(e,t,n,a,o){n=n.render;var i=t.ref;return un(t,o),a=Gr(e,t,n,a,i,o),n=Qr(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(D&&n&&Wr(t),t.flags|=1,he(e,t,a,o),t.child)}function sl(e,t,n,a,o){if(e===null){var i=n.type;return typeof i=="function"&&!ss(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wh(e,t,i,a,o)):(e=Ka(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(r,a)&&e.ref===t.ref)return Ze(e,t,o)}return t.flags|=1,e=yt(i,a),e.ref=t.ref,e.return=t,t.child=e}function wh(e,t,n,a,o){if(e!==null){var i=e.memoizedProps;if(Zn(i,a)&&e.ref===t.ref)if(me=!1,t.pendingProps=a=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ze(e,t,o)}return tr(e,t,n,a,o)}function kh(e,t,n){var a=t.pendingProps,o=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(nn,ke),ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(nn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,W(nn,ke),ke|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,W(nn,ke),ke|=a;return he(e,t,o,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tr(e,t,n,a,o){var i=ye(n)?qt:ue.current;return i=dn(t,i),un(t,o),n=Gr(e,t,n,a,i,o),a=Qr(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(D&&a&&Wr(t),t.flags|=1,he(e,t,n,o),t.child)}function ll(e,t,n,a,o){if(ye(n)){var i=!0;ro(t)}else i=!1;if(un(t,o),t.stateNode===null)Ja(e,t),mh(t,n,a),Zi(t,n,a,o),a=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var l=r.context,h=n.contextType;typeof h=="object"&&h!==null?h=Be(h):(h=ye(n)?qt:ue.current,h=dn(t,h));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function";p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==a||l!==h)&&nl(t,r,a,h),ot=!1;var g=t.memoizedState;r.state=g,co(t,a,r,o),l=t.memoizedState,s!==a||g!==l||ge.current||ot?(typeof m=="function"&&(Xi(t,n,m,a),l=t.memoizedState),(s=ot||tl(t,n,s,a,g,l,h))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),r.props=a,r.state=l,r.context=h,a=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Vu(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:_e(t.type,s),r.props=h,p=t.pendingProps,g=r.context,l=n.contextType,typeof l=="object"&&l!==null?l=Be(l):(l=ye(n)?qt:ue.current,l=dn(t,l));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||g!==l)&&nl(t,r,a,l),ot=!1,g=t.memoizedState,r.state=g,co(t,a,r,o);var w=t.memoizedState;s!==p||g!==w||ge.current||ot?(typeof y=="function"&&(Xi(t,n,y,a),w=t.memoizedState),(h=ot||tl(t,n,h,a,g,w,l)||!1)?(m||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,w,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,w,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),r.props=a,r.state=w,r.context=l,a=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return nr(e,t,n,a,i,o)}function nr(e,t,n,a,o,i){vh(e,t);var r=(t.flags&128)!==0;if(!a&&!r)return o&&$s(t,n,!1),Ze(e,t,i);a=t.stateNode,cp.current=t;var s=r&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&r?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,s,i)):he(e,t,s,i),t.memoizedState=a.state,o&&$s(t,n,!0),t.child}function bh(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Jr(e,t.containerInfo)}function ul(e,t,n,a,o){return pn(),Or(o),t.flags|=256,he(e,t,n,a),t.child}var ar={dehydrated:null,treeContext:null,retryLane:0};function or(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var a=t.pendingProps,o=M.current,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(M,o&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=a.children,e=a.fallback,i?(a=t.mode,i=t.child,r={mode:"hidden",children:r},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=_o(r,a,0,null),e=Nt(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=or(n),t.memoizedState=ar,e):es(t,r));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return dp(e,t,r,a,s,o,n);if(i){i=a.fallback,r=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:a.children};return!(r&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=yt(o,l),a.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=yt(s,i):(i=Nt(i,r,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,r=e.child.memoizedState,r=r===null?or(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~n,t.memoizedState=ar,a}return i=e.child,e=i.sibling,a=yt(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function es(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pa(e,t,n,a){return a!==null&&Or(a),fn(t,e.child,null,n),e=es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n,a,o,i,r){if(n)return t.flags&256?(t.flags&=-257,a=pi(Error(x(422))),Pa(e,t,r,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,o=t.mode,a=_o({mode:"visible",children:a.children},o,0,null),i=Nt(i,o,r,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&fn(t,e.child,null,r),t.child.memoizedState=or(r),t.memoizedState=ar,i);if(!(t.mode&1))return Pa(e,t,r,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var s=a.dgst;return a=s,i=Error(x(419)),a=pi(i,a,void 0),Pa(e,t,r,a)}if(s=(r&e.childLanes)!==0,me||s){if(a=ee,a!==null){switch(r&-r){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|r)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xe(e,o),We(a,e,o,-1))}return rs(),a=pi(Error(x(421))),Pa(e,t,r,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ve=pt(o.nextSibling),be=t,D=!0,qe=null,e!==null&&(Ae[Ce++]=$e,Ae[Ce++]=Ve,Ae[Ce++]=Rt,$e=e.id,Ve=e.overflow,Rt=t),t=es(t,a.children),t.flags|=4096,t)}function hl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qi(e.return,t,n)}function fi(e,t,n,a,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=o)}function xh(e,t,n){var a=t.pendingProps,o=a.revealOrder,i=a.tail;if(he(e,t,a.children,n),a=M.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hl(e,n,t);else if(e.tag===19)hl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(W(M,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fi(t,!0,n,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t,n){switch(t.tag){case 3:bh(t),pn();break;case 5:Ku(t);break;case 1:ye(t.type)&&ro(t);break;case 4:Jr(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;W(uo,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(W(M,M.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(W(M,M.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);W(M,M.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return xh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(M,M.current),a)break;return null;case 22:case 23:return t.lanes=0,kh(e,t,n)}return Ze(e,t,n)}var Sh,ir,jh,Ah;Sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ir=function(){};jh=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,Pt(Ue.current);var i=null;switch(n){case"input":o=Ci(e,o),a=Ci(e,a),i=[];break;case"select":o=U({},o,{value:void 0}),a=U({},a,{value:void 0}),i=[];break;case"textarea":o=Bi(e,o),a=Bi(e,a),i=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=oo)}zi(n,a);var r;n=null;for(h in o)if(!a.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var s=o[h];for(r in s)s.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Jn.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in a){var l=a[h];if(s=o!=null?o[h]:void 0,a.hasOwnProperty(h)&&l!==s&&(l!=null||s!=null))if(h==="style")if(s){for(r in s)!s.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in l)l.hasOwnProperty(r)&&s[r]!==l[r]&&(n||(n={}),n[r]=l[r])}else n||(i||(i=[]),i.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&Y("scroll",e),i||s===l||(i=[])):(i=i||[]).push(h,l))}n&&(i=i||[]).push("style",n);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};Ah=function(e,t,n,a){n!==a&&(t.flags|=4)};function Ln(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function fp(e,t,n){var a=t.pendingProps;switch(Yr(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return ye(t.type)&&io(),re(t),null;case 3:return a=t.stateNode,mn(),O(ge),O(ue),Vr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(La(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(pr(qe),qe=null))),ir(e,t),re(t),null;case 5:$r(t);var o=Pt(oa.current);if(n=t.type,e!==null&&t.stateNode!=null)jh(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(x(166));return re(t),null}if(e=Pt(Ue.current),La(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[Me]=t,a[na]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",a),Y("close",a);break;case"iframe":case"object":case"embed":Y("load",a);break;case"video":case"audio":for(o=0;o<qn.length;o++)Y(qn[o],a);break;case"source":Y("error",a);break;case"img":case"image":case"link":Y("error",a),Y("load",a);break;case"details":Y("toggle",a);break;case"input":ks(a,i),Y("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Y("invalid",a);break;case"textarea":bs(a,i),Y("invalid",a)}zi(n,i),o=null;for(var r in i)if(i.hasOwnProperty(r)){var s=i[r];r==="children"?typeof s=="string"?a.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ba(a.textContent,s,e),o=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ba(a.textContent,s,e),o=["children",""+s]):Jn.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&Y("scroll",a)}switch(n){case"input":Ia(a),vs(a,i,!0);break;case"textarea":Ia(a),Is(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=oo)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{r=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(n,{is:a.is}):(e=r.createElement(n),n==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,n),e[Me]=t,e[na]=a,Sh(e,t,!1,!1),t.stateNode=e;e:{switch(r=Pi(n,a),n){case"dialog":Y("cancel",e),Y("close",e),o=a;break;case"iframe":case"object":case"embed":Y("load",e),o=a;break;case"video":case"audio":for(o=0;o<qn.length;o++)Y(qn[o],e);o=a;break;case"source":Y("error",e),o=a;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=a;break;case"details":Y("toggle",e),o=a;break;case"input":ks(e,a),o=Ci(e,a),Y("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=U({},a,{value:void 0}),Y("invalid",e);break;case"textarea":bs(e,a),o=Bi(e,a),Y("invalid",e);break;default:o=a}zi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?au(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tu(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$n(e,l):typeof l=="number"&&$n(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Y("scroll",e):l!=null&&Sr(e,i,l,r))}switch(n){case"input":Ia(e),vs(e,a,!1);break;case"textarea":Ia(e),Is(e);break;case"option":a.value!=null&&e.setAttribute("value",""+kt(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?on(e,!!a.multiple,i,!1):a.defaultValue!=null&&on(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Ah(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(x(166));if(n=Pt(oa.current),Pt(Ue.current),La(t)){if(a=t.stateNode,n=t.memoizedProps,a[Me]=t,(i=a.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Ba(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Me]=t,t.stateNode=a}return re(t),null;case 13:if(O(M),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&t.mode&1&&!(t.flags&128))Uu(),pn(),t.flags|=98560,i=!1;else if(i=La(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Me]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else qe!==null&&(pr(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||M.current&1?Q===0&&(Q=3):rs())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return mn(),ir(e,t),e===null&&ea(t.stateNode.containerInfo),re(t),null;case 10:return Fr(t.type._context),re(t),null;case 17:return ye(t.type)&&io(),re(t),null;case 19:if(O(M),i=t.memoizedState,i===null)return re(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Ln(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=po(e),r!==null){for(t.flags|=128,Ln(i,!1),a=r.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(M,M.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>yn&&(t.flags|=128,a=!0,Ln(i,!1),t.lanes=4194304)}else{if(!a)if(e=po(r),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!D)return re(t),null}else 2*V()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,a=!0,Ln(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(n=i.last,n!==null?n.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,n=M.current,W(M,a?n&1|2:n&1),t):(re(t),null);case 22:case 23:return is(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ke&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function mp(e,t){switch(Yr(t),t.tag){case 1:return ye(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),O(ge),O(ue),Vr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $r(t),null;case 13:if(O(M),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(M),null;case 4:return mn(),null;case 10:return Fr(t.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var _a=!1,se=!1,gp=typeof WeakSet=="function"?WeakSet:Set,C=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){H(e,t,a)}else n.current=null}function rr(e,t,n){try{n()}catch(a){H(e,t,a)}}var cl=!1;function yp(e,t){if(Fi=to,e=Lu(),Rr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,s=-1,l=-1,h=0,m=0,p=e,g=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(s=r+o),p!==i||a!==0&&p.nodeType!==3||(l=r+a),p.nodeType===3&&(r+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++h===o&&(s=r),g===i&&++m===a&&(l=r),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},to=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:_e(t.type,v),S);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(k){H(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=cl,cl=!1,w}function Fn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rr(t,n,i)}o=o.next}while(o!==a)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function sr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ch(e){var t=e.alternate;t!==null&&(e.alternate=null,Ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[na],delete t[$i],delete t[Zd],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Th(e){return e.tag===5||e.tag===3||e.tag===4}function dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(a!==4&&(e=e.child,e!==null))for(lr(e,t,n),e=e.sibling;e!==null;)lr(e,t,n),e=e.sibling}function ur(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ur(e,t,n),e=e.sibling;e!==null;)ur(e,t,n),e=e.sibling}var te=null,Ne=!1;function nt(e,t,n){for(n=n.child;n!==null;)Eh(e,t,n),n=n.sibling}function Eh(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:se||tn(n,t);case 6:var a=te,o=Ne;te=null,nt(e,t,n),te=a,Ne=o,te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?si(e.parentNode,n):e.nodeType===1&&si(e,n),Qn(e)):si(te,n.stateNode));break;case 4:a=te,o=Ne,te=n.stateNode.containerInfo,Ne=!0,nt(e,t,n),te=a,Ne=o;break;case 0:case 11:case 14:case 15:if(!se&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var i=o,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&rr(n,t,r),o=o.next}while(o!==a)}nt(e,t,n);break;case 1:if(!se&&(tn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){H(n,t,s)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(se=(a=se)||n.memoizedState!==null,nt(e,t,n),se=a):nt(e,t,n);break;default:nt(e,t,n)}}function pl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(a){var o=Ap.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Ne=!1;break e;case 3:te=s.stateNode.containerInfo,Ne=!0;break e;case 4:te=s.stateNode.containerInfo,Ne=!0;break e}s=s.return}if(te===null)throw Error(x(160));Eh(i,r,o),te=null,Ne=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(h){H(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}function Bh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),a&4){try{Fn(3,e,e.return),zo(3,e)}catch(v){H(e,e.return,v)}try{Fn(5,e,e.return)}catch(v){H(e,e.return,v)}}break;case 1:ze(t,e),Oe(e),a&512&&n!==null&&tn(n,n.return);break;case 5:if(ze(t,e),Oe(e),a&512&&n!==null&&tn(n,n.return),e.flags&32){var o=e.stateNode;try{$n(o,"")}catch(v){H(e,e.return,v)}}if(a&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,r=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Xl(o,i),Pi(s,r);var h=Pi(s,i);for(r=0;r<l.length;r+=2){var m=l[r],p=l[r+1];m==="style"?au(o,p):m==="dangerouslySetInnerHTML"?tu(o,p):m==="children"?$n(o,p):Sr(o,m,p,h)}switch(s){case"input":Ti(o,i);break;case"textarea":Zl(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?on(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?on(o,!!i.multiple,i.defaultValue,!0):on(o,!!i.multiple,i.multiple?[]:"",!1))}o[na]=i}catch(v){H(e,e.return,v)}}break;case 6:if(ze(t,e),Oe(e),a&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){H(e,e.return,v)}}break;case 3:if(ze(t,e),Oe(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(v){H(e,e.return,v)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(as=V())),a&4&&pl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(h=se)||m,ze(t,e),se=h):ze(t,e),Oe(e),a&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(g=C,y=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:tn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){a=g,n=g.return;try{t=a,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){H(a,n,v)}}break;case 5:tn(g,g.return);break;case 22:if(g.memoizedState!==null){ml(p);continue}}y!==null?(y.return=g,C=y):ml(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,h?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,l=p.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=nu("display",r))}catch(v){H(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(v){H(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ze(t,e),Oe(e),a&4&&pl(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Th(n)){var a=n;break e}n=n.return}throw Error(x(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&($n(o,""),a.flags&=-33);var i=dl(e);ur(e,i,o);break;case 3:case 4:var r=a.stateNode.containerInfo,s=dl(e);lr(e,s,r);break;default:throw Error(x(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e,t,n){C=e,Lh(e)}function Lh(e,t,n){for(var a=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&a){var r=o.memoizedState!==null||_a;if(!r){var s=o.alternate,l=s!==null&&s.memoizedState!==null||se;s=_a;var h=se;if(_a=r,(se=l)&&!h)for(C=o;C!==null;)r=C,l=r.child,r.tag===22&&r.memoizedState!==null?gl(o):l!==null?(l.return=r,C=l):gl(o);for(;i!==null;)C=i,Lh(i),i=i.sibling;C=o,_a=s,se=h}fl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):fl(e)}}function fl(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||zo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!se)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xs(t,i,a);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xs(t,r,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Qn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}se||t.flags&512&&sr(t)}catch(g){H(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ml(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function gl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(l){H(t,n,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(l){H(t,o,l)}}var i=t.return;try{sr(t)}catch(l){H(t,i,l)}break;case 5:var r=t.return;try{sr(t)}catch(l){H(t,r,l)}}}catch(l){H(t,t.return,l)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var kp=Math.ceil,go=et.ReactCurrentDispatcher,ts=et.ReactCurrentOwner,Ee=et.ReactCurrentBatchConfig,_=0,ee=null,K=null,ne=0,ke=0,nn=It(0),Q=0,la=null,Yt=0,Po=0,ns=0,Un=null,fe=null,as=0,yn=1/0,He=null,yo=!1,hr=null,mt=null,Na=!1,lt=null,wo=0,Hn=0,cr=null,$a=-1,Va=0;function ce(){return _&6?V():$a!==-1?$a:$a=V()}function gt(e){return e.mode&1?_&2&&ne!==0?ne&-ne:np.transition!==null?(Va===0&&(Va=mu()),Va):(e=q,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function We(e,t,n,a){if(50<Hn)throw Hn=0,cr=null,Error(x(185));pa(e,n,a),(!(_&2)||e!==ee)&&(e===ee&&(!(_&2)&&(Po|=n),Q===4&&rt(e,ne)),we(e,a),n===1&&_===0&&!(t.mode&1)&&(yn=V()+500,Eo&&xt()))}function we(e,t){var n=e.callbackNode;nd(e,t);var a=eo(e,e===ee?ne:0);if(a===0)n!==null&&js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&js(n),t===1)e.tag===0?tp(yl.bind(null,e)):Du(yl.bind(null,e)),Qd(function(){!(_&6)&&xt()}),n=null;else{switch(gu(a)){case 1:n=Er;break;case 4:n=pu;break;case 16:n=Za;break;case 536870912:n=fu;break;default:n=Za}n=Yh(n,zh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zh(e,t){if($a=-1,Va=0,_&6)throw Error(x(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var a=eo(e,e===ee?ne:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ko(e,a);else{t=a;var o=_;_|=2;var i=_h();(ee!==e||ne!==t)&&(He=null,yn=V()+500,_t(e,t));do try{Ip();break}catch(s){Ph(e,s)}while(!0);Mr(),go.current=i,_=o,K!==null?t=0:(ee=null,ne=0,t=Q)}if(t!==0){if(t===2&&(o=Wi(e),o!==0&&(a=o,t=dr(e,o))),t===1)throw n=la,_t(e,0),rt(e,a),we(e,V()),n;if(t===6)rt(e,a);else{if(o=e.current.alternate,!(a&30)&&!vp(o)&&(t=ko(e,a),t===2&&(i=Wi(e),i!==0&&(a=i,t=dr(e,i))),t===1))throw n=la,_t(e,0),rt(e,a),we(e,V()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(x(345));case 2:Bt(e,fe,He);break;case 3:if(rt(e,a),(a&130023424)===a&&(t=as+500-V(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ji(Bt.bind(null,e,fe,He),t);break}Bt(e,fe,He);break;case 4:if(rt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var r=31-Re(a);i=1<<r,r=t[r],r>o&&(o=r),a&=~i}if(a=o,a=V()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*kp(a/1960))-a,10<a){e.timeoutHandle=Ji(Bt.bind(null,e,fe,He),a);break}Bt(e,fe,He);break;case 5:Bt(e,fe,He);break;default:throw Error(x(329))}}}return we(e,V()),e.callbackNode===n?zh.bind(null,e):null}function dr(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=ko(e,t),e!==2&&(t=fe,fe=n,t!==null&&pr(t)),e}function pr(e){fe===null?fe=e:fe.push.apply(fe,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],i=o.getSnapshot;o=o.value;try{if(!Ye(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~ns,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),a=1<<n;e[n]=-1,t&=~a}}function yl(e){if(_&6)throw Error(x(327));hn();var t=eo(e,0);if(!(t&1))return we(e,V()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var a=Wi(e);a!==0&&(t=a,n=dr(e,a))}if(n===1)throw n=la,_t(e,0),rt(e,t),we(e,V()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,fe,He),we(e,V()),null}function os(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(yn=V()+500,Eo&&xt())}}function Ot(e){lt!==null&&lt.tag===0&&!(_&6)&&hn();var t=_;_|=1;var n=Ee.transition,a=q;try{if(Ee.transition=null,q=1,e)return e()}finally{q=a,Ee.transition=n,_=t,!(_&6)&&xt()}}function is(){ke=nn.current,O(nn)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),K!==null)for(n=K.return;n!==null;){var a=n;switch(Yr(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&io();break;case 3:mn(),O(ge),O(ue),Vr();break;case 5:$r(a);break;case 4:mn();break;case 13:O(M);break;case 19:O(M);break;case 10:Fr(a.type._context);break;case 22:case 23:is()}n=n.return}if(ee=e,K=e=yt(e.current,null),ne=ke=t,Q=0,la=null,ns=Po=Yt=0,fe=Un=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,i=n.pending;if(i!==null){var r=i.next;i.next=o,a.next=r}n.pending=a}zt=null}return e}function Ph(e,t){do{var n=K;try{if(Mr(),Ua.current=mo,fo){for(var a=F.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}fo=!1}if(Wt=0,Z=G=F=null,Mn=!1,ia=0,ts.current=null,n===null||n.return===null){Q=1,la=t,K=null;break}e:{var i=e,r=n.return,s=n,l=t;if(t=ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ol(r);if(y!==null){y.flags&=-257,il(y,r,s,i,t),y.mode&1&&al(i,h,t),t=y,l=h;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){al(i,h,t),rs();break e}l=Error(x(426))}}else if(D&&s.mode&1){var S=ol(r);if(S!==null){!(S.flags&65536)&&(S.flags|=256),il(S,r,s,i,t),Or(gn(l,s));break e}}i=l=gn(l,s),Q!==4&&(Q=2),Un===null?Un=[i]:Un.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=gh(i,l,t);Qs(i,d);break e;case 1:s=l;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mt===null||!mt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=yh(i,s,t);Qs(i,k);break e}}i=i.return}while(i!==null)}qh(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function _h(){var e=go.current;return go.current=mo,e===null?mo:e}function rs(){(Q===0||Q===3||Q===2)&&(Q=4),ee===null||!(Yt&268435455)&&!(Po&268435455)||rt(ee,ne)}function ko(e,t){var n=_;_|=2;var a=_h();(ee!==e||ne!==t)&&(He=null,_t(e,t));do try{bp();break}catch(o){Ph(e,o)}while(!0);if(Mr(),_=n,go.current=a,K!==null)throw Error(x(261));return ee=null,ne=0,Q}function bp(){for(;K!==null;)Nh(K)}function Ip(){for(;K!==null&&!$c();)Nh(K)}function Nh(e){var t=Wh(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?qh(e):K=t,ts.current=null}function qh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,K=null;return}}else if(n=fp(n,t,ke),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Q===0&&(Q=5)}function Bt(e,t,n){var a=q,o=Ee.transition;try{Ee.transition=null,q=1,xp(e,t,n,a)}finally{Ee.transition=o,q=a}return null}function xp(e,t,n,a){do hn();while(lt!==null);if(_&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ad(e,i),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,Yh(Za,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var r=q;q=1;var s=_;_|=4,ts.current=null,yp(e,n),Bh(n,e),Fd(Ui),to=!!Fi,Ui=Fi=null,e.current=n,wp(n),Vc(),_=s,q=r,Ee.transition=i}else e.current=n;if(Na&&(Na=!1,lt=e,wo=o),i=e.pendingLanes,i===0&&(mt=null),Qc(n.stateNode),we(e,V()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=hr,hr=null,e;return wo&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===cr?Hn++:(Hn=0,cr=e):Hn=0,xt(),null}function hn(){if(lt!==null){var e=gu(wo),t=Ee.transition,n=q;try{if(Ee.transition=null,q=16>e?16:e,lt===null)var a=!1;else{if(e=lt,lt=null,wo=0,_&6)throw Error(x(331));var o=_;for(_|=4,C=e.current;C!==null;){var i=C,r=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var h=s[l];for(C=h;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Fn(8,m,i)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var g=m.sibling,y=m.return;if(Ch(m),m===h){C=null;break}if(g!==null){g.return=y,C=g;break}C=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}C=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,C=r;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){r=C;var f=r.child;if(r.subtreeFlags&2064&&f!==null)f.return=r,C=f;else e:for(r=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(j){H(s,s.return,j)}if(s===r){C=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,C=k;break e}C=s.return}}if(_=o,xt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(So,e)}catch{}a=!0}return a}finally{q=n,Ee.transition=t}}return!1}function wl(e,t,n){t=gn(n,t),t=gh(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(pa(e,1,t),we(e,t))}function H(e,t,n){if(e.tag===3)wl(e,e,n);else for(;t!==null;){if(t.tag===3){wl(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mt===null||!mt.has(a))){e=gn(n,e),e=yh(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(pa(t,1,e),we(t,e));break}}t=t.return}}function Sp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Q===4||Q===3&&(ne&130023424)===ne&&500>V()-as?_t(e,0):ns|=n),we(e,t)}function Rh(e,t){t===0&&(e.mode&1?(t=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(pa(e,t,n),we(e,n))}function jp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rh(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(x(314))}a!==null&&a.delete(t),Rh(e,n)}var Wh;Wh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,pp(e,t,n);me=!!(e.flags&131072)}else me=!1,D&&t.flags&1048576&&Mu(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ja(e,t),e=t.pendingProps;var o=dn(t,ue.current);un(t,n),o=Gr(null,t,a,e,o,n);var i=Qr();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(a)?(i=!0,ro(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hr(t),o.updater=Lo,t.stateNode=o,o._reactInternals=t,Zi(t,a,e,n),t=nr(null,t,a,!0,i,n)):(t.tag=0,D&&i&&Wr(t),he(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=Tp(a),e=_e(a,e),o){case 0:t=tr(null,t,a,e,n);break e;case 1:t=ll(null,t,a,e,n);break e;case 11:t=rl(null,t,a,e,n);break e;case 14:t=sl(null,t,a,_e(a.type,e),n);break e}throw Error(x(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:_e(a,o),tr(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:_e(a,o),ll(e,t,a,o,n);case 3:e:{if(bh(t),e===null)throw Error(x(387));a=t.pendingProps,i=t.memoizedState,o=i.element,Vu(e,t),co(t,a,null,n);var r=t.memoizedState;if(a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gn(Error(x(423)),t),t=ul(e,t,a,n,o);break e}else if(a!==o){o=gn(Error(x(424)),t),t=ul(e,t,a,n,o);break e}else for(ve=pt(t.stateNode.containerInfo.firstChild),be=t,D=!0,qe=null,n=Ju(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),a===o){t=Ze(e,t,n);break e}he(e,t,a,n)}t=t.child}return t;case 5:return Ku(t),e===null&&Gi(t),a=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,r=o.children,Hi(a,o)?r=null:i!==null&&Hi(a,i)&&(t.flags|=32),vh(e,t),he(e,t,r,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return Ih(e,t,n);case 4:return Jr(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=fn(t,null,a,n):he(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:_e(a,o),rl(e,t,a,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,i=t.memoizedProps,r=o.value,W(uo,a._currentValue),a._currentValue=r,i!==null)if(Ye(i.value,r)){if(i.children===o.children&&!ge.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){r=i.child;for(var l=s.firstContext;l!==null;){if(l.context===a){if(i.tag===1){l=Ke(-1,n&-n),l.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?l.next=l:(l.next=m.next,m.next=l),h.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Qi(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)r=i.type===t.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(x(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Qi(r,n,t),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,un(t,n),o=Be(o),a=a(o),t.flags|=1,he(e,t,a,n),t.child;case 14:return a=t.type,o=_e(a,t.pendingProps),o=_e(a.type,o),sl(e,t,a,o,n);case 15:return wh(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:_e(a,o),Ja(e,t),t.tag=1,ye(a)?(e=!0,ro(t)):e=!1,un(t,n),mh(t,a,o),Zi(t,a,o,n),nr(null,t,a,!0,e,n);case 19:return xh(e,t,n);case 22:return kh(e,t,n)}throw Error(x(156,t.tag))};function Yh(e,t){return du(e,t)}function Cp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,a){return new Cp(e,t,n,a)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ar)return 11;if(e===Cr)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ka(e,t,n,a,o,i){var r=2;if(a=e,typeof e=="function")ss(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Jt:return Nt(n.children,o,i,t);case jr:r=8,o|=8;break;case xi:return e=Te(12,n,t,o|2),e.elementType=xi,e.lanes=i,e;case Si:return e=Te(13,n,t,o),e.elementType=Si,e.lanes=i,e;case ji:return e=Te(19,n,t,o),e.elementType=ji,e.lanes=i,e;case Kl:return _o(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $l:r=10;break e;case Vl:r=9;break e;case Ar:r=11;break e;case Cr:r=14;break e;case at:r=16,a=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Te(r,n,t,o),t.elementType=e,t.type=a,t.lanes=i,t}function Nt(e,t,n,a){return e=Te(7,e,a,t),e.lanes=n,e}function _o(e,t,n,a){return e=Te(22,e,a,t),e.elementType=Kl,e.lanes=n,e.stateNode={isHidden:!1},e}function mi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function gi(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ep(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,a,o,i,r,s,l){return e=new Ep(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hr(i),e}function Bp(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Oh(e){if(!e)return vt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ou(e,n,t)}return t}function Dh(e,t,n,a,o,i,r,s,l){return e=ls(n,a,!0,e,o,i,r,s,l),e.context=Oh(null),n=e.current,a=ce(),o=gt(n),i=Ke(a,o),i.callback=t??null,ft(n,i,o),e.current.lanes=o,pa(e,o,a),we(e,a),e}function No(e,t,n,a){var o=t.current,i=ce(),r=gt(o);return n=Oh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,r),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ft(o,t,r),e!==null&&(We(e,o,r,i),Fa(e,o,r)),r}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function us(e,t){kl(e,t),(e=e.alternate)&&kl(e,t)}function Lp(){return null}var Mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}qo.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));No(e,t,null,null)};qo.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){No(null,e,null,null)}),t[Qe]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&bu(e)}};function cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vl(){}function zp(e,t,n,a,o){if(o){if(typeof a=="function"){var i=a;a=function(){var h=vo(r);i.call(h)}}var r=Dh(t,a,e,0,null,!1,!1,"",vl);return e._reactRootContainer=r,e[Qe]=r.current,ea(e.nodeType===8?e.parentNode:e),Ot(),r}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var s=a;a=function(){var h=vo(l);s.call(h)}}var l=ls(e,0,!1,null,null,!1,!1,"",vl);return e._reactRootContainer=l,e[Qe]=l.current,ea(e.nodeType===8?e.parentNode:e),Ot(function(){No(t,l,n,a)}),l}function Wo(e,t,n,a,o){var i=n._reactRootContainer;if(i){var r=i;if(typeof o=="function"){var s=o;o=function(){var l=vo(r);s.call(l)}}No(t,r,e,o)}else r=zp(n,t,e,o,a);return vo(r)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(Br(t,n|1),we(t,V()),!(_&6)&&(yn=V()+500,xt()))}break;case 13:Ot(function(){var a=Xe(e,1);if(a!==null){var o=ce();We(a,e,1,o)}}),us(e,1)}};Lr=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();We(t,e,134217728,n)}us(e,134217728)}};wu=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var a=ce();We(n,e,t,a)}us(e,t)}};ku=function(){return q};vu=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ni=function(e,t,n){switch(t){case"input":if(Ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=To(a);if(!o)throw Error(x(90));Ql(a),Ti(a,o)}}}break;case"textarea":Zl(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};ru=os;su=Ot;var Pp={usingClientEntryPoint:!1,Events:[ma,Gt,To,ou,iu,os]},zn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{So=qa.inject(_p),Fe=qa}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cs(t))throw Error(x(200));return Bp(e,t,null,n)};xe.createRoot=function(e,t){if(!cs(e))throw Error(x(299));var n=!1,a="",o=Mh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,a,o),e[Qe]=t.current,ea(e.nodeType===8?e.parentNode:e),new hs(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Ot(e)};xe.hydrate=function(e,t,n){if(!Ro(t))throw Error(x(200));return Wo(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!cs(e))throw Error(x(405));var a=n!=null&&n.hydratedSources||null,o=!1,i="",r=Mh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Dh(t,null,e,1,n??null,o,!1,i,r),e[Qe]=t.current,ea(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qo(t)};xe.render=function(e,t,n){if(!Ro(t))throw Error(x(200));return Wo(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(x(40));return e._reactRootContainer?(Ot(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};xe.unstable_batchedUpdates=os;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Ro(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Wo(e,t,n,!1,a)};xe.version="18.3.1-next-f1338f8080-20240426";function Fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh)}catch(e){console.error(e)}}Fh(),Fl.exports=xe;var Np=Fl.exports,bl=Np;bi.createRoot=bl.createRoot,bi.hydrateRoot=bl.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ua.apply(null,arguments)}var ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ut||(ut={}));const Il="popstate";function qp(e){e===void 0&&(e={});function t(a,o){let{pathname:i,search:r,hash:s}=a.location;return fr("",{pathname:i,search:r,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:bo(o)}return Wp(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rp(){return Math.random().toString(36).substr(2,8)}function xl(e,t){return{usr:e.state,key:e.key,idx:t}}function fr(e,t,n,a){return n===void 0&&(n=null),ua({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?In(t):t,{state:n,key:t&&t.key||a||Rp()})}function bo(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function In(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Wp(e,t,n,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,r=o.history,s=ut.Pop,l=null,h=m();h==null&&(h=0,r.replaceState(ua({},r.state,{idx:h}),""));function m(){return(r.state||{idx:null}).idx}function p(){s=ut.Pop;let S=m(),d=S==null?null:S-h;h=S,l&&l({action:s,location:v.location,delta:d})}function g(S,d){s=ut.Push;let c=fr(v.location,S,d);h=m()+1;let f=xl(c,h),k=v.createHref(c);try{r.pushState(f,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(k)}i&&l&&l({action:s,location:v.location,delta:1})}function y(S,d){s=ut.Replace;let c=fr(v.location,S,d);h=m();let f=xl(c,h),k=v.createHref(c);r.replaceState(f,"",k),i&&l&&l({action:s,location:v.location,delta:0})}function w(S){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof S=="string"?S:bo(S);return c=c.replace(/ $/,"%20"),J(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let v={get action(){return s},get location(){return e(o,r)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Il,p),l=S,()=>{o.removeEventListener(Il,p),l=null}},createHref(S){return t(o,S)},createURL:w,encodeLocation(S){let d=w(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:y,go(S){return r.go(S)}};return v}var Sl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sl||(Sl={}));function Yp(e,t,n){return n===void 0&&(n="/"),Op(e,t,n)}function Op(e,t,n,a){let o=typeof t=="string"?In(t):t,i=wn(o.pathname||"/",n);if(i==null)return null;let r=Hh(e);Dp(r);let s=null,l=Xp(i);for(let h=0;s==null&&h<r.length;++h)s=Gp(r[h],l);return s}function Hh(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let o=(i,r,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:r,route:i};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let h=wt([a,l.relativePath]),m=n.concat(l);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Hh(i.children,t,m,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:Vp(h,i.index),routesMeta:m})};return e.forEach((i,r)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,r);else for(let l of Jh(i.path))o(i,r,l)}),t}function Jh(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return o?[i,""]:[i];let r=Jh(a.join("/")),s=[];return s.push(...r.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...r),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Dp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kp(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Mp=/^:[\w-]+$/,Fp=3,Up=2,Hp=1,Jp=10,$p=-2,jl=e=>e==="*";function Vp(e,t){let n=e.split("/"),a=n.length;return n.some(jl)&&(a+=$p),t&&(a+=Up),n.filter(o=>!jl(o)).reduce((o,i)=>o+(Mp.test(i)?Fp:i===""?Hp:Jp),a)}function Kp(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function Gp(e,t,n){let{routesMeta:a}=e,o={},i="/",r=[];for(let s=0;s<a.length;++s){let l=a[s],h=s===a.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=mr({path:l.relativePath,caseSensitive:l.caseSensitive,end:h},m),g=l.route;if(!p)return null;Object.assign(o,p.params),r.push({params:o,pathname:wt([i,p.pathname]),pathnameBase:tf(wt([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=wt([i,p.pathnameBase]))}return r}function mr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Qp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],r=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:a.reduce((h,m,p)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let v=s[p]||"";r=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[p];return y&&!w?h[g]=void 0:h[g]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:r,pattern:e}}function Qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,s,l)=>(a.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Xp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Uh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Zp(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?In(e):e,i;return n?(n=Kh(n),n.startsWith("/")?i=Al(n.substring(1),"/"):i=Al(n,t)):i=t,{pathname:i,search:nf(a),hash:af(o)}}function Al(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function yi(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ef(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $h(e,t){let n=ef(e);return t?n.map((a,o)=>o===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Vh(e,t,n,a){a===void 0&&(a=!1);let o;typeof e=="string"?o=In(e):(o=ua({},e),J(!o.pathname||!o.pathname.includes("?"),yi("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),yi("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),yi("#","search","hash",o)));let i=e===""||o.pathname==="",r=i?"/":o.pathname,s;if(r==null)s=n;else{let p=t.length-1;if(!a&&r.startsWith("..")){let g=r.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}s=p>=0?t[p]:"/"}let l=Zp(o,s),h=r&&r!=="/"&&r.endsWith("/"),m=(i||r===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(h||m)&&(l.pathname+="/"),l}const Kh=e=>e.replace(/\/\/+/g,"/"),wt=e=>Kh(e.join("/")),tf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,af=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function of(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gh=["post","put","patch","delete"];new Set(Gh);const rf=["get",...Gh];new Set(rf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ha.apply(null,arguments)}const Yo=I.createContext(null),Qh=I.createContext(null),St=I.createContext(null),Oo=I.createContext(null),jt=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=I.createContext(null);function sf(e,t){let{relative:n}=t===void 0?{}:t;ya()||J(!1);let{basename:a,navigator:o}=I.useContext(St),{hash:i,pathname:r,search:s}=Do(e,{relative:n}),l=r;return a!=="/"&&(l=r==="/"?a:wt([a,r])),o.createHref({pathname:l,search:s,hash:i})}function ya(){return I.useContext(Oo)!=null}function xn(){return ya()||J(!1),I.useContext(Oo).location}function Zh(e){I.useContext(St).static||I.useLayoutEffect(e)}function ec(){let{isDataRoute:e}=I.useContext(jt);return e?bf():lf()}function lf(){ya()||J(!1);let e=I.useContext(Yo),{basename:t,future:n,navigator:a}=I.useContext(St),{matches:o}=I.useContext(jt),{pathname:i}=xn(),r=JSON.stringify($h(o,n.v7_relativeSplatPath)),s=I.useRef(!1);return Zh(()=>{s.current=!0}),I.useCallback(function(h,m){if(m===void 0&&(m={}),!s.current)return;if(typeof h=="number"){a.go(h);return}let p=Vh(h,JSON.parse(r),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:wt([t,p.pathname])),(m.replace?a.replace:a.push)(p,m.state,m)},[t,a,r,i,e])}function uf(){let{matches:e}=I.useContext(jt),t=e[e.length-1];return t?t.params:{}}function Do(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=I.useContext(St),{matches:o}=I.useContext(jt),{pathname:i}=xn(),r=JSON.stringify($h(o,a.v7_relativeSplatPath));return I.useMemo(()=>Vh(e,JSON.parse(r),i,n==="path"),[e,r,i,n])}function hf(e,t){return cf(e,t)}function cf(e,t,n,a){ya()||J(!1);let{navigator:o}=I.useContext(St),{matches:i}=I.useContext(jt),r=i[i.length-1],s=r?r.params:{};r&&r.pathname;let l=r?r.pathnameBase:"/";r&&r.route;let h=xn(),m;if(t){var p;let S=typeof t=="string"?In(t):t;l==="/"||(p=S.pathname)!=null&&p.startsWith(l)||J(!1),m=S}else m=h;let g=m.pathname||"/",y=g;if(l!=="/"){let S=l.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=Yp(e,{pathname:y}),v=gf(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:wt([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:wt([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,a);return t&&v?I.createElement(Oo.Provider,{value:{location:ha({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ut.Pop}},v):v}function df(){let e=vf(),t=of(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:o},n):null,null)}const pf=I.createElement(df,null);class ff extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(jt.Provider,{value:this.props.routeContext},I.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mf(e){let{routeContext:t,match:n,children:a}=e,o=I.useContext(Yo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(jt.Provider,{value:t},a)}function gf(e,t,n,a){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=a)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let m=r.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||J(!1),r=r.slice(0,Math.min(r.length,m+1))}let l=!1,h=-1;if(n&&a&&a.v7_partialHydration)for(let m=0;m<r.length;m++){let p=r[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:y}=n,w=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){l=!0,h>=0?r=r.slice(0,h+1):r=[r[0]];break}}}return r.reduceRight((m,p,g)=>{let y,w=!1,v=null,S=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||pf,l&&(h<0&&g===0?(If("route-fallback"),w=!0,S=null):h===g&&(w=!0,S=p.route.hydrateFallbackElement||null)));let d=t.concat(r.slice(0,g+1)),c=()=>{let f;return y?f=v:w?f=S:p.route.Component?f=I.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,I.createElement(mf,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?I.createElement(ff,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var tc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(tc||{}),nc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nc||{});function yf(e){let t=I.useContext(Yo);return t||J(!1),t}function wf(e){let t=I.useContext(Qh);return t||J(!1),t}function kf(e){let t=I.useContext(jt);return t||J(!1),t}function ac(e){let t=kf(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function vf(){var e;let t=I.useContext(Xh),n=wf(),a=ac();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function bf(){let{router:e}=yf(tc.UseNavigateStable),t=ac(nc.UseNavigateStable),n=I.useRef(!1);return Zh(()=>{n.current=!0}),I.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ha({fromRouteId:t},i)))},[e,t])}const Cl={};function If(e,t,n){Cl[e]||(Cl[e]=!0)}function xf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pe(e){J(!1)}function Sf(e){let{basename:t="/",children:n=null,location:a,navigationType:o=ut.Pop,navigator:i,static:r=!1,future:s}=e;ya()&&J(!1);let l=t.replace(/^\/*/,"/"),h=I.useMemo(()=>({basename:l,navigator:i,static:r,future:ha({v7_relativeSplatPath:!1},s)}),[l,s,i,r]);typeof a=="string"&&(a=In(a));let{pathname:m="/",search:p="",hash:g="",state:y=null,key:w="default"}=a,v=I.useMemo(()=>{let S=wn(m,l);return S==null?null:{location:{pathname:S,search:p,hash:g,state:y,key:w},navigationType:o}},[l,m,p,g,y,w,o]);return v==null?null:I.createElement(St.Provider,{value:h},I.createElement(Oo.Provider,{children:n,value:v}))}function jf(e){let{children:t,location:n}=e;return hf(gr(t),n)}new Promise(()=>{});function gr(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(a,o)=>{if(!I.isValidElement(a))return;let i=[...t,o];if(a.type===I.Fragment){n.push.apply(n,gr(a.props.children,i));return}a.type!==Pe&&J(!1),!a.props.index||!a.props.children||J(!1);let r={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(r.children=gr(a.props.children,i)),n.push(r)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Io.apply(null,arguments)}function oc(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function Af(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cf(e,t){return e.button===0&&(!t||t==="_self")&&!Af(e)}const Tf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ef=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bf="6";try{window.__reactRouterVersion=Bf}catch{}const Lf=I.createContext({isTransitioning:!1}),zf="startTransition",Tl=Sc[zf];function Pf(e){let{basename:t,children:n,future:a,window:o}=e,i=I.useRef();i.current==null&&(i.current=qp({window:o,v5Compat:!0}));let r=i.current,[s,l]=I.useState({action:r.action,location:r.location}),{v7_startTransition:h}=a||{},m=I.useCallback(p=>{h&&Tl?Tl(()=>l(p)):l(p)},[l,h]);return I.useLayoutEffect(()=>r.listen(m),[r,m]),I.useEffect(()=>xf(a),[a]),I.createElement(Sf,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:r,future:a})}const _f=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,le=I.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:i,replace:r,state:s,target:l,to:h,preventScrollReset:m,viewTransition:p}=t,g=oc(t,Tf),{basename:y}=I.useContext(St),w,v=!1;if(typeof h=="string"&&Nf.test(h)&&(w=h,_f))try{let f=new URL(window.location.href),k=h.startsWith("//")?new URL(f.protocol+h):new URL(h),j=wn(k.pathname,y);k.origin===f.origin&&j!=null?h=j+k.search+k.hash:v=!0}catch{}let S=sf(h,{relative:o}),d=Rf(h,{replace:r,state:s,target:l,preventScrollReset:m,relative:o,viewTransition:p});function c(f){a&&a(f),f.defaultPrevented||d(f)}return I.createElement("a",Io({},g,{href:w||S,onClick:v||i?a:c,ref:n,target:l}))}),wi=I.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:o=!1,className:i="",end:r=!1,style:s,to:l,viewTransition:h,children:m}=t,p=oc(t,Ef),g=Do(l,{relative:p.relative}),y=xn(),w=I.useContext(Qh),{navigator:v,basename:S}=I.useContext(St),d=w!=null&&Wf(g)&&h===!0,c=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,f=y.pathname,k=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(f=f.toLowerCase(),k=k?k.toLowerCase():null,c=c.toLowerCase()),k&&S&&(k=wn(k,S)||k);const j=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let b=f===c||!r&&f.startsWith(c)&&f.charAt(j)==="/",A=k!=null&&(k===c||!r&&k.startsWith(c)&&k.charAt(c.length)==="/"),E={isActive:b,isPending:A,isTransitioning:d},N=b?a:void 0,B;typeof i=="function"?B=i(E):B=[i,b?"active":null,A?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let oe=typeof s=="function"?s(E):s;return I.createElement(le,Io({},p,{"aria-current":N,className:B,ref:n,style:oe,to:l,viewTransition:h}),typeof m=="function"?m(E):m)});var yr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yr||(yr={}));var El;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(El||(El={}));function qf(e){let t=I.useContext(Yo);return t||J(!1),t}function Rf(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:r,viewTransition:s}=t===void 0?{}:t,l=ec(),h=xn(),m=Do(e,{relative:r});return I.useCallback(p=>{if(Cf(p,n)){p.preventDefault();let g=a!==void 0?a:bo(h)===bo(m);l(e,{replace:g,state:o,preventScrollReset:i,relative:r,viewTransition:s})}},[h,l,m,a,o,n,e,i,r,s])}function Wf(e,t){t===void 0&&(t={});let n=I.useContext(Lf);n==null&&J(!1);let{basename:a}=qf(yr.useViewTransitionState),o=Do(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=wn(n.currentLocation.pathname,a)||n.currentLocation.pathname,r=wn(n.nextLocation.pathname,a)||n.nextLocation.pathname;return mr(o.pathname,r)!=null||mr(o.pathname,i)!=null}const ic=I.createContext(void 0),Yf=({children:e})=>{const[t,n]=I.useState(null),[a,o]=I.useState(!1),[i,r]=I.useState(0),[s,l]=I.useState(0),[h,m]=I.useState(1),[p,g]=I.useState("local"),y=I.useRef(null),w=I.useRef(null),v=I.useRef("local");w.current=t,v.current=p,I.useEffect(()=>{const b=new Audio;y.current=b;const A=()=>r(b.currentTime),E=()=>l(b.duration||0),N=()=>o(!1),B=()=>o(!0),oe=()=>o(!1),tt=()=>{const je=w.current,Sn=v.current;je&&(Sn==="local"&&je.remoteAudioUrl?(console.warn(`Local audio unavailable for ${je.title}, switching to remote mirror...`),g("remote"),b.src=je.remoteAudioUrl,b.play().catch(At=>{At.name!=="AbortError"&&console.warn("Remote play error:",At)})):Sn==="remote"&&je.originalAudioUrl?(console.warn("Remote audio mirror unavailable, trying original source..."),g("original"),b.src=je.originalAudioUrl,b.play().catch(At=>{At.name!=="AbortError"&&console.warn("Original play error:",At)})):o(!1))};return b.addEventListener("timeupdate",A),b.addEventListener("loadedmetadata",E),b.addEventListener("ended",N),b.addEventListener("play",B),b.addEventListener("pause",oe),b.addEventListener("error",tt),()=>{b.pause(),b.src="",b.removeEventListener("timeupdate",A),b.removeEventListener("loadedmetadata",E),b.removeEventListener("ended",N),b.removeEventListener("play",B),b.removeEventListener("pause",oe),b.removeEventListener("error",tt)}},[]);const S=b=>{if(!(!b.audioUrl&&!b.remoteAudioUrl)){if((t==null?void 0:t.id)===b.id){d();return}if(n(b),g("local"),r(0),y.current){const A=b.audioUrl||b.remoteAudioUrl||"";y.current.src=A,y.current.playbackRate=h,y.current.play().catch(E=>{E.name!=="AbortError"&&b.remoteAudioUrl&&(g("remote"),y.current.src=b.remoteAudioUrl,y.current.play().catch(N=>{N.name!=="AbortError"&&console.warn(N)}))})}}},d=()=>{y.current&&(a?y.current.pause():y.current.play().catch(b=>{b.name!=="AbortError"&&console.warn(b)}))},c=b=>{y.current&&(y.current.currentTime=b,r(b))},f=b=>{if(!y.current)return;const A=Math.max(0,Math.min(y.current.duration||0,y.current.currentTime+b));c(A)},k=b=>{m(b),y.current&&(y.current.playbackRate=b)},j=()=>{y.current&&y.current.pause(),n(null),o(!1)};return u.jsx(ic.Provider,{value:{currentEpisode:t,isPlaying:a,currentTime:i,duration:s,playbackRate:h,audioSourceType:p,playEpisode:S,togglePlay:d,seek:c,skip:f,setSpeed:k,closePlayer:j},children:e})},rc=()=>{const e=I.useContext(ic);if(!e)throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");return e},ca=typeof window<"u"&&(window.location.pathname==="/awake-in"||window.location.pathname.startsWith("/awake-in/"))?"/awake-in":"";function R(e){return e?ca&&e.startsWith("/")&&!e.startsWith("/awake-in/")?`${ca}${e}`:e:""}function ki(e){return!e||!ca?e:e.replace(/(src|href)="\/(wp-content\/)/g,`$1="${ca}/$2`)}const Of=({theme:e,onToggleTheme:t})=>u.jsx("header",{className:"site-header",style:{padding:"16px 0",borderBottom:"1px solid var(--md-sys-color-surface-container-highest)"},children:u.jsxs("div",{className:"container header-inner",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(le,{to:"/",className:"brand","aria-label":"Awake In Home",style:{display:"inline-block"},children:u.jsx("img",{src:R("/wp-content/uploads/2020/03/awake-in-logo.png"),alt:"Awake In",style:{maxHeight:"63px",width:"auto",display:"block",filter:e==="dark"?"invert(1)":"none",mixBlendMode:e==="dark"?"screen":"normal"}})}),u.jsxs("nav",{id:"menu-really-main",style:{display:"flex",alignItems:"center",gap:"28px"},"aria-label":"Primary navigation",children:[u.jsx(wi,{to:"/%f0%9f%8e%a7-all-episodes",className:({isActive:n})=>`ct-menu-link ${n?"active":""}`,style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"20px",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))",textDecoration:"none"},children:"🎧 All episodes"}),u.jsx(wi,{to:"/blog",className:({isActive:n})=>`ct-menu-link ${n?"active":""}`,style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"20px",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))",textDecoration:"none"},children:"✍️ Blog"}),u.jsx(wi,{to:"/contact",className:({isActive:n})=>`ct-menu-link ${n?"active":""}`,style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"20px",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))",textDecoration:"none"},children:"💌 Contact"}),u.jsx(le,{to:"/%f0%9f%8e%a7-all-episodes","aria-label":"Search",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))",textDecoration:"none"},children:u.jsx("span",{className:"material-symbols-rounded",style:{fontSize:"24px"},children:"search"})}),u.jsx("button",{type:"button",onClick:t,className:"btn-icon","aria-label":`Switch to ${e==="light"?"dark":"light"} mode`,title:`Switch to ${e==="light"?"dark":"light"} mode`,style:{width:"36px",height:"36px",padding:0,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))"},children:u.jsx("span",{className:"material-symbols-rounded",style:{fontSize:"20px"},children:e==="light"?"dark_mode":"light_mode"})})]})]})}),Df=()=>u.jsxs("footer",{id:"footer",className:"ct-footer",style:{marginTop:"auto",borderTop:"1px solid var(--md-sys-color-surface-container-highest)"},children:[u.jsx("div",{style:{padding:"48px 0 36px",backgroundColor:"var(--md-sys-color-surface)"},children:u.jsxs("div",{className:"container",style:{maxWidth:"820px",margin:"0 auto",textAlign:"center"},children:[u.jsx("h3",{className:"widget-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"24px",fontWeight:700,marginBottom:"16px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"👋 Get in Touch"}),u.jsxs("p",{style:{fontSize:"18px",lineHeight:"1.65",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))",margin:0},children:["Comments, suggestions, or guest ideas? We’d love to hear from you. Please get in touch via our"," ",u.jsx(le,{to:"/contact",className:"ek-link",style:{color:"var(--theme-palette-color-1, #624aca)"},children:"site"}),","," ",u.jsx("a",{href:"mailto:us@awake-in.com",className:"ek-link",style:{color:"var(--theme-palette-color-1, #624aca)"},children:"email"}),", or our socials!"]})]})}),u.jsx("div",{style:{backgroundColor:"#e2e2e2",padding:"32px 0"},children:u.jsxs("div",{className:"container",style:{maxWidth:"820px",margin:"0 auto",textAlign:"center"},children:[u.jsx("h3",{className:"widget-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"20px",fontWeight:700,marginBottom:"16px",color:"rgba(44, 62, 80, 1)"},children:"Social"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[u.jsx("a",{href:"https://twitter.com/awake_in_",target:"_blank",rel:"noopener noreferrer",title:"Twitter","aria-label":"Twitter",style:{width:"42px",height:"42px",borderRadius:"50%",backgroundColor:"#1da1f2",color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",fontWeight:700,fontSize:"18px"},children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),u.jsx("a",{href:"https://instagram.com/awake_in_",target:"_blank",rel:"noopener noreferrer",title:"Instagram","aria-label":"Instagram",style:{width:"42px",height:"42px",borderRadius:"50%",backgroundColor:"#e4405f",color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]})]})}),u.jsx("div",{style:{backgroundColor:"var(--md-sys-color-surface)",padding:"24px 0",textAlign:"center"},children:u.jsx("p",{style:{margin:0,fontSize:"15px",color:"var(--md-sys-color-on-surface-variant)"},children:"Copyright © 2026 Awake In"})})]}),Bl=e=>{if(isNaN(e)||e<0)return"00:00";const t=Math.floor(e/60),n=Math.floor(e%60),a=Math.floor(t/60),o=t%60;return a>0?`${a}:${o<10?"0":""}${o}:${n<10?"0":""}${n}`:`${t<10?"0":""}${t}:${n<10?"0":""}${n}`},Mf=()=>{const{currentEpisode:e,isPlaying:t,currentTime:n,duration:a,playbackRate:o,audioSourceType:i,togglePlay:r,seek:s,skip:l,setSpeed:h,closePlayer:m}=rc();if(!e)return null;const p=w=>{s(parseFloat(w.target.value))},g=[1,1.25,1.5,2],y=e.audioUrl||e.remoteAudioUrl||e.originalAudioUrl||"#";return u.jsx("div",{className:"audio-player-bar",role:"region","aria-label":"Audio player",children:u.jsxs("div",{className:"container",style:{display:"flex",flexDirection:"column",gap:"8px",padding:"0 8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsx("span",{style:{fontSize:"12px",minWidth:"40px",color:"var(--md-sys-color-on-surface-variant)"},children:Bl(n)}),u.jsx("input",{type:"range",min:0,max:a||100,step:.1,value:n,onChange:p,style:{flex:1,height:"4px",borderRadius:"2px",cursor:"pointer",accentColor:"var(--md-sys-color-primary)"},"aria-label":"Seek track position"}),u.jsx("span",{style:{fontSize:"12px",minWidth:"40px",textAlign:"right",color:"var(--md-sys-color-on-surface-variant)"},children:Bl(a)})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",minWidth:"220px",maxWidth:"340px"},children:[e.featuredImage&&u.jsx("img",{src:e.featuredImage,alt:"",style:{width:"42px",height:"42px",borderRadius:"8px",objectFit:"cover"}}),u.jsxs("div",{style:{overflow:"hidden"},children:[u.jsx("div",{style:{fontWeight:600,fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.title}),u.jsx("div",{style:{fontSize:"12px",color:"var(--md-sys-color-on-surface-variant)"},children:i==="local"?"Local audio":i==="remote"?"GitHub release mirror":"Original stream"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("button",{type:"button",className:"btn-icon",onClick:()=>l(-10),"aria-label":"Skip back 10 seconds",title:"Skip back 10s",children:u.jsx("span",{className:"material-symbols-rounded",children:"replay_10"})}),u.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"44px",height:"44px",padding:0,borderRadius:"50%"},onClick:r,"aria-label":t?"Pause":"Play",title:t?"Pause":"Play",children:u.jsx("span",{className:"material-symbols-rounded filled",style:{fontSize:"26px"},children:t?"pause":"play_arrow"})}),u.jsx("button",{type:"button",className:"btn-icon",onClick:()=>l(10),"aria-label":"Skip forward 10 seconds",title:"Skip forward 10s",children:u.jsx("span",{className:"material-symbols-rounded",children:"forward_10"})})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("div",{style:{display:"flex",gap:"4px"},children:g.map(w=>u.jsxs("button",{type:"button",onClick:()=>h(w),style:{padding:"3px 7px",borderRadius:"6px",border:"none",fontSize:"11px",fontWeight:600,cursor:"pointer",backgroundColor:o===w?"var(--md-sys-color-primary-container)":"var(--md-sys-color-surface-container)",color:o===w?"var(--md-sys-color-on-primary-container)":"var(--md-sys-color-on-surface-variant)"},children:[w,"x"]},w))}),u.jsx("a",{href:y,download:!0,className:"btn-icon","aria-label":"Download episode audio",title:"Download MP3",style:{textDecoration:"none"},children:u.jsx("span",{className:"material-symbols-rounded",style:{fontSize:"20px"},children:"download"})}),u.jsx("button",{type:"button",className:"btn-icon",onClick:m,"aria-label":"Close audio player",title:"Close player",children:u.jsx("span",{className:"material-symbols-rounded",style:{fontSize:"20px"},children:"close"})})]})]})]})})},Ff=({episode:e})=>{const{currentEpisode:t,isPlaying:n,playEpisode:a}=rc(),o=(t==null?void 0:t.id)===e.id&&n;return!e.audioUrl&&!e.remoteAudioUrl?null:u.jsxs("div",{style:{backgroundColor:"var(--md-sys-color-surface-container)",borderRadius:"20px",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",margin:"24px 0"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[u.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"48px",height:"48px",padding:0,borderRadius:"50%"},onClick:()=>a(e),"aria-label":o?"Pause audio":"Play audio",children:u.jsx("span",{className:"material-symbols-rounded filled",style:{fontSize:"28px"},children:o?"pause":"play_arrow"})}),u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:600,fontSize:"15px"},children:o?"Now playing":"Listen to episode"}),u.jsxs("div",{style:{fontSize:"13px",color:"var(--md-sys-color-on-surface-variant)"},children:["Duration: ",e.duration||"Full length"]})]})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:u.jsxs("a",{href:e.audioUrl||e.remoteAudioUrl||"#",download:!0,className:"btn btn-tonal",style:{fontSize:"13px",padding:"6px 14px"},children:[u.jsx("span",{className:"material-symbols-rounded",style:{fontSize:"16px"},children:"download"}),u.jsx("span",{children:"Download"})]})})]})},Uf=({isOpen:e,onClose:t})=>(I.useEffect(()=>{const n=a=>{a.key==="Escape"&&t()};return e&&(document.addEventListener("keydown",n),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",n),document.body.style.overflow=""}},[e,t]),e?u.jsx("div",{className:"modal-backdrop",onClick:t,role:"dialog","aria-modal":"true","aria-label":"Subscribe",style:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:u.jsxs("div",{className:"paoc-popup-modal",id:"paoc-popup-3685-3",onClick:n=>n.stopPropagation(),style:{backgroundColor:"var(--md-sys-color-surface)",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",borderRadius:"16px",maxWidth:"480px",width:"100%",padding:"36px",position:"relative",boxShadow:"none"},children:[u.jsx("button",{type:"button",onClick:t,"aria-label":"Close",style:{position:"absolute",top:"16px",right:"16px",background:"transparent",border:"none",cursor:"pointer",fontSize:"24px",color:"var(--md-sys-color-on-surface-variant)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("span",{className:"material-symbols-rounded",children:"close"})}),u.jsx("p",{style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"20px",fontWeight:600,marginBottom:"24px"},children:"Listen or subscribe wherever good podcasts are found."}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontSize:"18px",fontWeight:600},children:[u.jsx("p",{style:{margin:0},children:u.jsxs("a",{href:"https://podcasts.apple.com/gb/podcast/awake-in/id1505822560",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"12px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",textDecoration:"none"},children:[u.jsx("img",{src:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.png"),width:"32",height:"32",alt:""})," Apple Podcasts"]})}),u.jsx("p",{style:{margin:0},children:u.jsxs("a",{href:"https://podcasts.google.com/?feed=aHR0cDovL3d3dy5hd2FrZS1pbi5jb20vZmVlZC8",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"12px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",textDecoration:"none"},children:[u.jsx("img",{src:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png"),width:"32",height:"32",alt:""})," Google Podcasts"]})}),u.jsx("p",{style:{margin:0},children:u.jsxs("a",{href:"https://www.stitcher.com/podcast/awake-in",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"12px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",textDecoration:"none"},children:[u.jsx("img",{src:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Stitcher.png"),width:"32",height:"32",alt:""})," Stitcher"]})}),u.jsx("p",{style:{margin:0},children:u.jsxs("a",{href:"https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"12px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",textDecoration:"none"},children:[u.jsx("img",{src:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.png"),width:"32",height:"32",alt:""})," Spotify"]})}),u.jsx("p",{style:{margin:0},children:u.jsxs("a",{href:R("/podcasts/awake-in/feed/index.xml"),target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"12px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",textDecoration:"none"},children:[u.jsx("img",{src:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/RSS.png"),width:"32",height:"32",alt:""})," RSS"]})})]})]})}):null),Ut={subscribeLinks:[{platform:"Apple Podcasts",url:"https://podcasts.apple.com/gb/podcast/awake-in/id1505822560",icon:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.png"),quickIcon:R("/wp-content/uploads/2020/05/social-music-podcast.svg")},{platform:"Spotify",url:"https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk",icon:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.png"),quickIcon:R("/wp-content/uploads/2020/05/social-music-spotify-2.svg")},{platform:"Google Podcasts",url:"https://podcasts.google.com/?feed=aHR0cDovL3d3dy5hd2FrZS1pbi5jb20vZmVlZC8",icon:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png")},{platform:"Stitcher",url:"https://www.stitcher.com/podcast/awake-in",icon:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Stitcher.png")},{platform:"RSS",url:"https://awake-in.com/podcasts/awake-in/feed/",icon:R("/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/RSS.png"),quickIcon:R("/wp-content/uploads/2020/05/rss-feed.svg")}],hero:{title:"Awake In Podcast",tagline:"Chats about mindfulness, wellness, and awakening.",desktopBackgroundGif:R("/wp-content/uploads/2020/06/Awake_Animation_V2.2020-06-07-18_20_36.gif"),mobileAnimationGif:R("/wp-content/uploads/2020/06/Awake_Animation_V2-mobile.gif"),subscribeCtaText:"Listen or Subscribe",quickSubscribeIcons:[{platform:"Apple Podcasts",icon:R("/wp-content/uploads/2020/05/social-music-podcast.svg"),url:"https://podcasts.apple.com/gb/podcast/awake-in/id1505822560"},{platform:"Spotify",icon:R("/wp-content/uploads/2020/05/social-music-spotify-2.svg"),url:"https://open.spotify.com/show/3yy3g4AhT9lBueGWLXFSjk"},{platform:"RSS",icon:R("/wp-content/uploads/2020/05/rss-feed.svg"),url:"https://awake-in.com/podcasts/awake-in/feed/"}]},hosts:[{name:"Jasmine Che",avatar:R("/wp-content/uploads/2020/05/jasmine.png"),bio:"Jasmine is the youngest Search Inside Yourself™ mindfulness teacher, a heart-based multi-business venturer, plant mum to ~150 babies and is working back to 3 hours of meditation a day. When she ever finds any spare time, she practices Dharma yoga and acrobatics.",instagram:"https://www.instagram.com/thelifeofjasmineche/"},{name:"Bill Tribble",avatar:R("/wp-content/uploads/2020/03/bill-1.png"),bio:"Bill is a designer, musician, and technologist. He got started in mindfulness via silent retreats in the Goenka tradition. While he’s put in thousands of hours of meditation, he’s probably spent way more time playing computer games and wishes he hadn’t.",instagram:"https://www.instagram.com/bill_tribble/",mastodon:"https://mastodon.design/@bill_tribble"}],featuredEpisodeIds:[4255,4064,3765,3556]},Hf=[{id:4395,slug:"episode-10-retreats",title:"Episode 10 – Retreats",date:"2022-04-21T13:44:55",formattedDate:"April 21, 2022",originalPath:"/2022/04/21/episode-10-retreats/",category:"podcast",episodeNumber:10,audioUrl:"/wp-content/uploads/2022/podcast/episode-10-retreats.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-10-retreats.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2022/podcast/episode-10-retreats.mp3",audioType:"audio/mpeg",audioLength:148637778,duration:"1:01:56",featuredImage:"/wp-content/uploads/2022/04/me-and-jasmine.jpg",excerptText:"Meditation retreats are generally a good thing for most people, but aren’t without their dangers. They can be really hard to get through -…",excerptHtml:"<p>Meditation retreats are generally a good thing for most people, but aren’t without their dangers. They can be really hard to get through -…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">Meditation retreats are generally a good thing for most people, but aren&#8217;t without their dangers. They can be really hard to get through &#8211; but can give you great results!</p>



<p class="wp-block-paragraph">We talk about the risks, the potential benefits, the general format of most courses, the physical and mental challenges, and specifically what we&#8217;ve learnt from attending the Goenka Vipassana Foundation 10 day courses.</p>



<p class="wp-block-paragraph">Daniel Ingram&#8217;s &#8220;Health warnings for meditation&#8221; gets a mention! </p>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"></noscript></figure></li></ul></figure></a>
</div>
</div>



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<h4 class="wp-block-heading">Links</h4>



<ul class="wp-block-list"><li><a href="https://awake-in.com/2020/05/01/episode-3-daniel-ingram-interview/">Our interview with Daniel Ingram</a> &#8211; for more on the risks and benefits of meditation.</li><li><a href="https://www.dhamma.org" class="ek-link">Global Vipassana foundation site</a></li><li><a href="https://uk.dhamma.org" class="ek-link">UK Vipassana foundation</a></li></ul>



<h3 class="wp-block-heading">Transcript</h3>



<p class="wp-block-paragraph">(First 40 minutes only &#8211; that&#8217;s what we get for free from Otter app 😄)</p>



<p class="wp-block-paragraph">Bill Tribble 0:08<br>Well, welcome. Welcome everyone to another episode of The Awake In podcast.</p>



<p class="wp-block-paragraph">My name is Bill Tribble. And this is Jasmine.</p>



<p class="wp-block-paragraph">Jasmine Che 0:19<br>Jasmine che. Jasmine che,</p>



<p class="wp-block-paragraph">Bill Tribble 0:24<br>che, che, I&#8217;m pronouncing your name right. I&#8217;ve known you for over a year. Che. Che Yeah. And we&#8217;re going to talk today about things you should consider</p>



<p class="wp-block-paragraph">Jasmine Che 0:36<br>before going on a meditation retreat. Yes. So this will be meditation retreats of any kind, long and short. The longest you&#8217;ll likely be able to go on is a 10 day course.</p>



<p class="wp-block-paragraph">Bill Tribble 0:53<br>And it&#8217;s quite likely that you&#8217;re considering going on one that&#8217;s run by the Goenka-ji Vipassana Foundation,</p>



<p class="wp-block-paragraph">Jasmine Che 1:00<br>or one which is quite cheap, from any of the kinds of Buddhist centres available in and around the UK, or around</p>



<p class="wp-block-paragraph">Bill Tribble 1:12<br>the world, maybe around the world, maybe even do some spiritual tourism in Thailand for a month. Who knows, maybe you&#8217;re gonna go on a extended yoga retreat.</p>



<p class="wp-block-paragraph">Jasmine Che 1:24<br>But specifically, we&#8217;re likely just talking about meditation retreats, yoga may fall into a little bit of this, because some will have meditation. But we&#8217;ll be covering yoga, and other spiritual practices on another episode. Here, we&#8217;d like to really just give you a comprehensive introduction, and kind of detailed caveats and concerns and shared experiences of what to consider before going on one, whether it&#8217;s the right thing for you what some of the risks are, and if you might be ready for it. So Bill, would you like to start off with what some first considerations you would be thinking about?</p>



<p class="wp-block-paragraph">Bill Tribble 2:26<br>So the impetus for this conversation is partly Daniel Ingram, who, who I&#8217;ve heard say many times that, you know, as a doctor himself, he was a, an emergency doctor in America, that meditation should come with a health warning. Like any any medicine he gives to someone, you do this kind of, I forget the exact name for it, but like the risks and opportunities thing that you talk through potential problems that might happen, and the potential benefits of this medicine. And that that&#8217;s the main thing that I like to kind of promote in the conversation is that no type of meditation is without some risk. And the risks are very small. And generally, the benefits are worth it. But it&#8217;s something that everybody should be aware of before they undertake any sort of meditation, even a half hour session. Because it does happen that, that these traditional spiritual practices do sometimes yield traditional spiritual results, even in small doses. And those experiences can be very disruptive and even deadly for people who weren&#8217;t really expecting them or prepared for them.</p>



<p class="wp-block-paragraph">Jasmine Che 3:56<br>Yeah, so I think it&#8217;s just as a word of caution, because this is generally otherwise, not so spoken about. Likely, and we&#8217;ve spoken and Bill has, and in other episodes, we have spoken about this. So we won&#8217;t go too much into again, why we can refer back to other episodes. Like the last episode, we went into this even on the one with Daniel Ingram, specifically on going his retreats. So we won&#8217;t really say everything, but we&#8217;ll try to be as comprehensive as possible.</p>



<p class="wp-block-paragraph">Bill Tribble 4:40<br>Yeah, we&#8217;ll do our best. I mean, I think it&#8217;s safe to say that neither of us are massive experts on this stuff, but um, I&#8217;ve done several retreats in the going good tradition. And Jasmine, you&#8217;ve done a few as well. Yeah. And it&#8217;s</p>



<p class="wp-block-paragraph">Jasmine Che 4:58<br>and some other retreats. Yeah. and some others.</p>



<p class="wp-block-paragraph">Bill Tribble 5:01<br>And I think that that&#8217;s kind of the main thing that I wanted to flag here is that it is something that&#8217;s safe and beneficial for most people. The, to their credit, the Vipassana Foundation, and perhaps it was purely out of necessity, say that the courses are not suitable for anyone with mental health issues.</p>



<p class="wp-block-paragraph">Jasmine Che 5:25<br>It is not a health is not supposed to be here as a health cure.</p>



<p class="wp-block-paragraph">Bill Tribble 5:30<br>Yeah. But as Jasmine pointed out, like, what is it a third of people in the world, probably</p>



<p class="wp-block-paragraph">Jasmine Che 5:35<br>one in four or one and five is have mental health issues, whether it&#8217;s anxiety, depression, on some level,</p>



<p class="wp-block-paragraph">Bill Tribble 5:46<br>and that&#8217;s right now, right. So right now, and so during the course of their lifetime, it&#8217;s pretty much 100% of people will have some issue with mental health at some point.</p>



<p class="wp-block-paragraph">Jasmine Che 5:55<br>And often meditation can be something that is recommended to relieve anxiety. So when you&#8217;re given something which is likely going to be helpful, isn&#8217;t always helpful and can make issues worse. So like meditation straight off the bat shouldn&#8217;t be for people with PTSD, it often makes it worse, you know, going into like, accessing trauma that really should be worked on only with someone who might be psychotherapist, health provider, someone who&#8217;s equipped to do that, in meditation retreat setting, you&#8217;ll be thrown in with guidance from quite minimal guidance from any teachers, you&#8217;re supposed to really be working alone in this. So you should think of it as not any sense of spoon feeding, you&#8217;re really alone.</p>



<p class="wp-block-paragraph">Bill Tribble 6:55<br>Yeah, yeah, that&#8217;s very cool. So</p>



<p class="wp-block-paragraph">Jasmine Che 6:57<br>it&#8217;s almost like going on a boot camp, the equivalent of a boot camp to improve your fitness, mental fitness. And you do have PTS who are just there to help you. Well, they might be pushing you in terms of effort. But you might, you know, twist your ankle, or you might have something happen to you.</p>



<p class="wp-block-paragraph">Bill Tribble 7:22<br>Yeah, I suppose a physical equivalent might be you&#8217;ve got to do 20 pushups and 20 squats every half hour, but you&#8217;re not given any guidance on how to deal with?</p>



<p class="wp-block-paragraph">Jasmine Che 7:34<br>Yeah, I&#8217;m probably. And then that, you know, because there&#8217;s a physical aspect we know that was physical house or exercises, there can be injury, especially if we don&#8217;t have like, good technique or form. And many people do exercise and actually do get injured. Yeah. Whereas for the mind, especially because we&#8217;re even only becoming more aware of taking care of our minds. We don&#8217;t really consider these health risks. That actually, if you are exercising the brain in a certain way, you might get sick. Yeah. If something bad might happen, you might injure yourself mentally.</p>



<p class="wp-block-paragraph">Bill Tribble 8:20<br>Yeah. Yeah. And I mean, again, I keep wanting to repeat here that the risks are small, but they are not insignificant.</p>



<p class="wp-block-paragraph">Jasmine Che 8:33<br>If you are a person who something bad happens to.</p>



<p class="wp-block-paragraph">Bill Tribble 8:38<br>Yeah. And it&#8217;s, it&#8217;s an odd one, because the fastener foundation generally doesn&#8217;t really talk about this stuff, much. It&#8217;s regarded. It&#8217;s marketed basically, perhaps marketing is the wrong word, because it&#8217;s a free course. Right? But it&#8217;s still marketing as something that&#8217;s safe for people who are just sort of mentally normal. And there&#8217;s, there are many, many cases and you can you can look these up of where it has not worked out well, for the average punter who&#8217;s rolled up with not necessarily anything on their radar in terms of their mental health. And they don&#8217;t really talk about it much and I mean, my brother has gotten really into passenger courses, for instance, and he spent quite a lot of time serving Dharma deeper, which is the Hereford place and he&#8217;s seen all kinds of traumas and peep. I think one course he was on someone was carted away in an ambulance, and another one, a guy ran away in the middle of the night without enough clothes on and died of pneumonia or something. And that was just an inner you know, inside a month of staying at this spent. So that I mean, these are anecdotal things. We don&#8217;t know the statistics on this stuff. Yeah.</p>



<p class="wp-block-paragraph">Jasmine Che 10:06<br>And we&#8217;d also say that, you know, let&#8217;s say the person with the ambulance, we don&#8217;t know what had happened to them, the person who did run away, did run away, for example. And I guess was the pattern or they say, for you to have to stay? Like they do say, you have to stay because it&#8217;s like going in surgery and cutting yourself open. Yeah. And then you&#8217;re in a worse place if you don&#8217;t finish the surgery. So I would say, in terms of considerations, people should really consider that it&#8217;s quite a large undertaking, especially if you haven&#8217;t had much practice meditating before. And, you know, if something does happen to you, and you do want to leave, you really might find yourself in a really difficult situation. Yeah. Especially if you didn&#8217;t drive there. Yeah. And got a bus, which many people do cardio to get there?</p>



<p class="wp-block-paragraph">Bill Tribble 11:04<br>Yeah, it&#8217;s, and they do</p>



<p class="wp-block-paragraph">Jasmine Che 11:07<br>say to you, like, as you get there, like, this is going to happen. Do you consent? Like, yeah, again, like they do say that right before? And they say you have to stay here. Yeah. And then people are like, yeah, that&#8217;s completely fine. Like, of course, I&#8217;m here for a free meditation retreat. That&#8217;s amazing. Yes. So again, cautionary,</p>



<p class="wp-block-paragraph">Bill Tribble 11:32<br>and I think some people go into it expecting that it will be a time to relax. And, you know, I&#8217;m just going to really chill out and get in touch with myself and be really spiritual and, and I&#8217;m going to come out so much better. And, you know, in some ways, this, you might come out a better person, and you might come out relaxed, but the actual thing that you&#8217;re getting into, is going to be one of the hardest things you&#8217;ve ever done in your life.</p>



<p class="wp-block-paragraph">Jasmine Che 12:02<br>100%. I completely agree with that.</p>



<p class="wp-block-paragraph">Bill Tribble 12:09<br>It&#8217;s, it&#8217;s, it&#8217;s a really challenging undertaking. And equivalent, in some ways to. I mean, it&#8217;s hard, hard to, to even use metaphors, but it&#8217;s a bit like you&#8217;re staring at the mirror, every cell yourself for the whole time and you cannot get away from that image. And you cannot, you have to deal with it, there is no escaping it is just you and your mind, and your body. And everything that you are uncomfortable about will come up during that time, and you will have to face it and deal with it. And that is not fun. And it&#8217;s not easy.</p>



<p class="wp-block-paragraph">Jasmine Che 12:47<br>Well, if you&#8217;re not ready for what Bill has just described, like if you cannot, you know, the types of I guess the types of indications which show that maybe you are not comfortable with that, is if if there are things in daily life, that mean you find it difficult to be alone. This is going to be extremely challenging for you. Even though you&#8217;re surrounded by people, you are there to work alone in this. You don&#8217;t talk to anyone. So you&#8217;re not exactly there socialising. It&#8217;s not a social experience. It&#8217;s just there to give you the chance to be alone, like that&#8217;s fully about what is what are the examples, if you don&#8217;t like being with your thoughts, this is not for you. If you feel like you have always needed to maybe even have a partner in your life. This is likely going to be challenging, very, very challenging for you. So these types of social things, if you find it difficult to be silent, and feel like you need to talk a lot. I have a friend who we spoke about this and she said you know, I had to do a sponsored silence for about three, three hours or four hours and I like I got a sore throat after that because probably she was blocked up in her her throat chakra but yeah, she said that she was found that unbearable. So if you&#8217;re that type of person who also deals with loneliness, this is not any other not views.</p>



<p class="wp-block-paragraph">Bill Tribble 14:33<br>Well, we&#8217;ve mentioned mental health. If you if you if you have doubts about it Titan seriously, I would say and and recognise that. That I think is funny. I was I was reflecting on what what we said earlier about country indica Asians, a lot of them sound a bit like the same kind of things that psychedelic people would say, before, you know, you, you, you go on your vision quest, you take a silly amount of LSD, you know, go with a guide, and be prepared because it&#8217;s not easy, it&#8217;s an incredibly hard thing to do. And so that&#8217;s one way of thinking about it. If you&#8217;ve read anything about contraindications before your psychedelic vision quest, this is a bit like that. But it&#8217;s, it&#8217;s maybe even harder, because it lasts 10 days, not just, you know, one day or an evening. The On the plus side, you rather than taking a random street drug or a plant, you do get places under your own steam. And that can give you an incredible amount of power in in terms of managing your mental states. And that&#8217;s one of the greatest benefits I&#8217;ve personally gotten out of practice, is understanding that my thoughts are not me, and many, many other benefits, but to, to just really sort of dig into whether you should go or not. I think the aim of this, this, this session really was just to kind of talk through this, the things that they don&#8217;t generally tell you before you consider taking a meditation course. So if you look this up on any of the centres, you will see lots of pictures of lotus leaves, lotus flowers, and, you know, kind of Zen swirls. And they don&#8217;t really talk about how hard it is a lot. It&#8217;s just like, oh, come and find your inner wisdom and peace and blah, blah, blah. And actually, it&#8217;s really bloody hard.</p>



<p class="wp-block-paragraph">Jasmine Che 17:06<br>It was probably one of the hardest things I&#8217;ve ever done. To be honest,</p>



<p class="wp-block-paragraph">Bill Tribble 17:11<br>that, you know, my last retreat, I was in Japan, like four years ago, I did a three day. And I went in thinking I have three days. How hard can that be? It was so hard. It was it was really challenging me. Partly, that&#8217;s maybe the, you know, during the 10 day, the first three days of the hardest, in some ways. That&#8217;s that&#8217;s one of the real challenging bits. Just to get through that first stretch of like, going from the normal, the daily world into that deep space is really challenging. And I&#8217;ve found it&#8217;s so hard I was I came out slightly traumatised. I mean, it did me good. And it got me back in to a daily practice at the time. And it helped in some ways. But man, that was hard. It was it was such a challenge. I was. And I think partly is because I expected it to be easy on that one. I&#8217;m a seasoned meditator. I&#8217;ve done several of these 10 day courses, alga, how can a three day be brutally hard? And that I would do it again. Having said that,</p>



<p class="wp-block-paragraph">Jasmine Che 18:20<br>I mean, just because it&#8217;s hard. I mean, it doesn&#8217;t have benefit, I usually see the benefit.</p>



<p class="wp-block-paragraph">Bill Tribble 18:24<br>Yeah. And it&#8217;s not just in a sort of, I&#8217;ve spoken to people about meditation courses before and they&#8217;re like, Well, it isn&#8217;t the reason you come out so happy from it just because you&#8217;ve survived this awful experience. But, but know that there really is something in it. And small amounts of meditation, you will often find, you come up feeling very refreshed and much better. And it&#8217;s a massive version of that. It&#8217;s a massive dose of that, for me. It is very challenging to get through but the it, it has changed the course of my life in some ways. And it&#8217;s given me a grounding for something. It&#8217;s like an anchor that I know I can always depend on how tough things get. I think</p>



<p class="wp-block-paragraph">Jasmine Che 19:15<br>we should speak about why it is so challenging, more in greater detail.</p>



<p class="wp-block-paragraph">Bill Tribble 19:18<br>Yes, let&#8217;s do that.</p>



<p class="wp-block-paragraph">Jasmine Che 19:20<br>So one of the aspects is the sheer 10 hours a day of let&#8217;s say just the typical formatting. Some will be walking meditations in different retreats. Others like going CO will be purely 10 hours if you add it up a day you&#8217;ll have walking sessions and then it will get to a point where they start are begin to ask you to not move your body for one of the sessions. Three of the session three I mean three of the sessions. Yeah. Three hours a day. Is it three? Yes three hours a day and I Um, so one is a physicality aspect of sitting, there are different chair props, you can also bring a chair that you want to sit in, if you&#8217;re driving, but even you know, sitting on a chair for 10 hours a day is a lot. And so on a pure physical basis. That&#8217;s difficult. A waking up basis of early mornings is very difficult. You&#8217;re well fed, you are, you have fresh air. But a routine of physical practice, I mean, the sitting is a lot like it&#8217;s is very full on. So if you have struggled with five minutes of meditation, or even up to an hour of meditation, just imagine doubling it, and that will be one session times it by 10 a day, and then times that by 10. Okay, so you can see how this feat is like. Incredible. Yeah, so it&#8217;s a lot.</p>



<p class="wp-block-paragraph">Bill Tribble 21:24<br>I would also just flag that you mentioned the food. Food is generally Great. Generally only two meals a day. Yes. Which is a really big one. If you&#8217;re a comfy. Yeah.</p>



<p class="wp-block-paragraph">Jasmine Che 21:33<br>Yes. So you have breakfast. And you can eat as much as you want. They do say that not to eat too much, because it makes you tired for when you sit. And it&#8217;s true. Yeah. Because then you get sleepy meditations, versus even tougher. It&#8217;s even tougher, because you have to sit there falling asleep in and out for two hours. So there&#8217;s that. And then, yeah, the second meal is often big. But then the last, actually, you get fruit.</p>



<p class="wp-block-paragraph">Bill Tribble 22:04<br>You get fruit in the evening, a cup of tea.</p>



<p class="wp-block-paragraph">Jasmine Che 22:08<br>Yes. And if you&#8217;ve got, you know, something you struggle with like, you have dietary requirements, then you can have food. So there is that. So perhaps, so it&#8217;s veggie as well. Yeah. Yeah,</p>



<p class="wp-block-paragraph">Bill Tribble 22:24<br>that&#8217;s fair to you. Yeah. Oh, yeah. And if you&#8217;re a smoker, are you like drinking several cups of coffee a day, that might be a challenge as well, because you can&#8217;t do either really, you can drink a cup or two, maybe</p>



<p class="wp-block-paragraph">Jasmine Che 22:35<br>you can bring us thermos flask, oh, let&#8217;s you can bring as many set well, you could have technically as many as required for your coffee demands. And you can make that during the breaks.</p>



<p class="wp-block-paragraph">Bill Tribble 22:49<br>There&#8217;s a new enemy. So perhaps we could talk about ways you can navigate this all takes to get through? Oh, yeah.</p>



<p class="wp-block-paragraph">Jasmine Che 22:59<br>I was going to say maybe we can continue going through why it might be more difficult. So we&#8217;ve only been on physical. Yeah, yeah, I&#8217;ll</p>



<p class="wp-block-paragraph">Bill Tribble 23:05<br>keep going keep going.</p>



<p class="wp-block-paragraph">Jasmine Che 23:07<br>The other is that you can&#8217;t do any of the things that you would generally do. Like you can&#8217;t do other forms of exercise. So it&#8217;s quite prescriptive in like, I don&#8217;t know. You&#8217;re not supposed to write things down. I did see someone wants them to retreat writing things down sneakily.</p>



<p class="wp-block-paragraph">Bill Tribble 23:26<br>Yeah. Yeah, the aim is to cultivate a kind of mental quiet. So they don&#8217;t want you journaling all the bloody time, which I&#8217;ve done on courses. And it&#8217;s a terrible idea. Don&#8217;t do it. Because it makes it fucking way harder and even more challenging.</p>



<p class="wp-block-paragraph">Jasmine Che 23:43<br>Yeah, yeah. And also, they want to be able to help you see that, like in purity, how this method can help you without other things. So you can&#8217;t say that. Oh, it was my journaling that helped me. Yeah, they want you to be able to get a fair trial. This,</p>



<p class="wp-block-paragraph">Bill Tribble 23:57<br>it was my Reiki healing. That was actually the real benefit. No,</p>



<p class="wp-block-paragraph">Jasmine Che 24:01<br>yeah. So you can&#8217;t do any of the other practices that you would want to do. And that can be very difficult for people.</p>



<p class="wp-block-paragraph">Bill Tribble 24:07<br>Yep. Yeah. If you&#8217;ve got religious observances, or you really need an hour of yoga every day, that&#8217;s gonna be tough.</p>



<p class="wp-block-paragraph">Jasmine Che 24:13<br>Yes. Only to read the news or books or other forms of stimulation. Yep. That&#8217;s awesome. There&#8217;s no devices,</p>



<p class="wp-block-paragraph">Bill Tribble 24:22<br>no devices, no phone, no Instagram. No Twitter.</p>



<p class="wp-block-paragraph">Jasmine Che 24:25<br>Yeah. Why else?</p>



<p class="wp-block-paragraph">Bill Tribble 24:30<br>I would say I just want to caveat there that you can generally get away with a little bit of stretching every day. Yes, because there&#8217;s always somewhere you can sneak to do that. If you&#8217;re really lucky. You get a solo room to stay in. And you can just do your however long you can manage. In the mornings, maybe you can, you can do a 15 minute stretch or whatever. But if you&#8217;re someone who needs to jump around a lot, there&#8217;s no real space to do that because it&#8217;s distracting basically. Yeah. You&#8217;re doing your high intensity training in And the grounds, it doesn&#8217;t go. If you&#8217;re an animal lover, and you cannot live without your cat or dog, that&#8217;s also gonna be a challenge because they&#8217;re not allowed to come.</p>



<p class="wp-block-paragraph">Jasmine Che 25:10<br>Yeah. Physical, Mental, I think we&#8217;ve already touched food we&#8217;ve touched. Any other reasons why it&#8217;s, it&#8217;s challenging. I think that&#8217;s mainly all. So how can we get through</p>



<p class="wp-block-paragraph">Bill Tribble 25:31<br>that the first thing I would say is that is to take it easy, as much as you can on yourself. And the course, the, the tradition is, well, the going through tradition is non religious, supposedly, but the guy who started it was like a stone Hindu before he got into it. And he&#8217;s, he&#8217;s got a very kind of, let&#8217;s say, slightly militant, attitude to meditation, it&#8217;s all very kind of monastic and very hard working, you must work hard. And, and it really, I think for for, if you&#8217;ve got a problem with authority, then maybe you could deal with it better. But if you try and follow all the advice that he gives you in the first course, you might be in for a very hard time. I say this, just out of caution, because I certainly had a really hard time on the first course, I was very hard on myself. And I&#8217;ve spoken with some people who who didn&#8217;t. And they took it easy every time there was a chance to take a break or whatever. And maybe they slept through half the course. And actually, that&#8217;s fine. Because if you get through your first course, then maybe you can manage another one. And, and if you are really hard on yourself, then maybe you can run into more trouble than I did. And you don&#8217;t even make it through the course. Or you have a who knows psychotic breakdown, and you end up in real trouble, because they&#8217;re not really equipped to deal with that sort of thing. So I would say, especially in your first course, take it easy.</p>



<p class="wp-block-paragraph">Jasmine Che 27:08<br>Yeah, I didn&#8217;t take it easy. On mine. I did see people who had naps, who didn&#8217;t go to sessions took time out. Yep. So I think, particularly as we&#8217;re talking about what&#8217;s really important here is staying in tune with our body. So all of the meditation practices are supposed to help you be in touch with the body, understanding yourself better intuition, self guidance. So on those kinds of principles, it would be well advised to. You know, if you felt yourself maybe if you did feel yourself getting, you know, panic attacks and other types of things where you are super concerned, this has never happened to me. But maybe you do skip sessions, and do stay in your room, maybe it will be like solitary confinement, you&#8217;ll want to go home because of that. You may not be allowed to. But you know, maybe you see as fat, my kind of word of warning. And as we see things getting worse. And, you know, we&#8217;re not really here to try and get sick. So if you see yourself going into the spiral, it would be maybe just don&#8217;t do that to yourself.</p>



<p class="wp-block-paragraph">Bill Tribble 28:37<br>Yeah, back off, take easy. I mean, there&#8217;s on the going retreats, there&#8217;s three main sets that you&#8217;ve really got to be in, and that they will if you don&#8217;t attend those, and they&#8217;ll they&#8217;ll be on your case and check up on you. Yeah, there&#8217;ll be very concerned. But the the rest of it is basically up to you. And if you want to just nap in your room, and you can&#8217;t deal with it, and to do that, because it might help you survive the course and get through it, and you will. And that&#8217;s a much better outcome than you getting into real trouble. And, or quitting the course.</p>



<p class="wp-block-paragraph">Jasmine Che 29:14<br>Yeah, and actually just doing three hours of meditation today. Even if you did three hours of meditation a day for 10 days, you&#8217;d get a lot of benefit, big win. Big, big win. That&#8217;s Sorry, I was more than you would have ever done. Yeah. And if in the event for that, maybe I would then say bring some books as a as a just in case.</p>



<p class="wp-block-paragraph">Bill Tribble 29:38<br>I wouldn&#8217;t do that. I would do that. Honestly. It&#8217;s</p>



<p class="wp-block-paragraph">Jasmine Che 29:44<br>I don&#8217;t know. I don&#8217;t know. It&#8217;s a very just in case.</p>



<p class="wp-block-paragraph">Bill Tribble 29:47<br>It&#8217;s something that they they absolutely don&#8217;t encourage that they they they forbid they say Please hand all these things in. So you&#8217;re going to be kind of breaking your precepts if you do that and Hmm, I don&#8217;t know.</p>



<p class="wp-block-paragraph">Transcribed by https://otter.ai</p>



<p class="wp-block-paragraph">(continues &#8230;)</p>`},{id:4299,slug:"episode-09-reunion",title:"Episode 09 – Reunion",date:"2021-10-11T16:12:37",formattedDate:"October 11, 2021",originalPath:"/2021/10/11/episode-09-reunion/",category:"podcast",episodeNumber:9,audioUrl:"/wp-content/uploads/2021/podcast/episode-09-01.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-09-01.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2021/podcast/episode-09-01.mp3",audioType:"audio/mpeg",audioLength:143577337,duration:"59:49",featuredImage:"/wp-content/uploads/2021/10/ep-9-pic.png",excerptText:"It’s been a while! Excited to kick things off again as we (hopefully) start to see the beginning-of-the-end of the COVID pandemic. What a…",excerptHtml:"<p>It’s been a while! Excited to kick things off again as we (hopefully) start to see the beginning-of-the-end of the COVID pandemic. What a…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">It&#8217;s been a while! Excited to kick things off again as we (hopefully) start to see the beginning-of-the-end of the COVID pandemic. What a strange and interesting time to be alive.</p>



<p class="wp-block-paragraph">We speak about covid goblins, our practice, journaling, the climate crisis, effective philanthropy, the real consequences of actions in the modern day world, greenwashing, colonialism / capitalism, brewing green tea properly, the fantastic fungi documentary, psychoactives and microdosing and meditation parallels, Jasmine&#8217;s grandma&#8217;s mushroom stash and homeopathy.</p>



<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Awake In Podcast Ep 9. Reunion" width="1290" height="726" src="https://www.youtube.com/embed/sgXzI1MfA6Y?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"></noscript></figure></li></ul></figure></a>
</div>
</div>



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<h4 class="wp-block-heading">Links</h4>



<ul class="wp-block-list"><li><a href="https://conspirituality.net" class="ek-link">Conspirituality Podcast</a></li><li><a href="https://conspirituality.net/wellness/70-conspiracy-theories-conceal-a-burning-world-w-daniel-sherrell/" class="ek-link">Conspirituality &#8211; Climate change episode &#8211; Interview with Daniel Sherrell</a></li><li><a href="https://www.jasonhickel.org/the-divide" class="ek-link">Jason Hickel &#8211; the Divide</a></li><li><a href="https://fantasticfungi.com" class="ek-link">Fantastic Fungi film</a></li></ul>



<h3 class="wp-block-heading">Transcript</h3>



<p class="wp-block-paragraph">(First 40 minutes only &#8211; that&#8217;s all we get for free from Otter app 🤷‍♂️)</p>



<p class="wp-block-paragraph">Bill Tribble 0:08<br>And we&#8217;re back. To those of you who asked us for more and asked when the next episode was coming Thank you did encourage us this is a long and rambling conversation but we&#8217;ve included most of it here it goes into topics that you might not associate with our podcast &#8211; but what is meditation but life?</p>



<p class="wp-block-paragraph">you know a while ago I was thinking that we should probably if we if we&#8217;re going to do any if we&#8217;re not going to do anything with the podcast we should at least like have a kind of wrap up like coda to do you know mean 10 series Yeah exactly. But you know that that chat the other day it was like loads of interesting things we can do and and I feel more positive about it because we are coming out of this</p>



<p class="wp-block-paragraph">Jasmine Che 1:03<br>lockdown it&#8217;s</p>



<p class="wp-block-paragraph">Bill Tribble 1:04<br>awful space dreadful terrible time the is a great podcast the blind boy podcast if you come across it and is this wonderful Irish guy who he calls it the Goblin of uncertain times with his wife he didn&#8217;t want to mention the pandemic but he just kept on going on about this Goblin which is a nice way to put it really well it seems you know uncertain times have not ended but at least we feel safe now vaccinated and so forth to actually hang out in person a bit which is fantastic because that was kind of the whole impetus for the podcast in the first place as I recall</p>



<p class="wp-block-paragraph">Jasmine Che 1:51<br>I don&#8217;t remember many of the podcasts were not in person well they weren&#8217;t all of them were not in person but</p>



<p class="wp-block-paragraph">Bill Tribble 2:00<br>when we first met we were hanging out and no it was it was like on the tube train back from that awake in no relation event that it&#8217;s about differently readers will we&#8217;ll put a link in the show notes the we were chatting with Liam and we were having a good time to talk and we were like well let&#8217;s just record a podcast that&#8217;s it was it was in it was because we were enjoying those conversations in person as as I remember it and then and then we carried on because we still had that impetus for me after about huddle Adam to be managed maybe nine months of stuff by that point I was burnt out and I still kind of am on things</p>



<p class="wp-block-paragraph">Jasmine Che 2:51<br>yeah I think with work particularly being intense for you at the moment like has been in this new project Yeah, and now everything has switched to zoom as well i think that doesn&#8217;t help</p>



<p class="wp-block-paragraph">Bill Tribble 3:04<br>Yeah, yeah and work is still like I spent half my week on video calls yeah that&#8217;s just the nature of my job so so yeah,</p>



<p class="wp-block-paragraph">Jasmine Che 3:14<br>whereas I don&#8217;t really mind hopping on if like you know we have a guest who is somewhere else in the world yeah not really a biggie for me</p>



<p class="wp-block-paragraph">Bill Tribble 3:23<br>No I&#8217;m up for it more now as we discussed because the the goblins receded somewhat and</p>



<p class="wp-block-paragraph">Jasmine Che 3:33<br>balance is restored a little</p>



<p class="wp-block-paragraph">Bill Tribble 3:37<br>bit I feel a bit more grounded in the in the real world because I no longer have to stay in my home all the time and live in fear of other people in quite the same way or live in fear of you know me giving something you know, I still feel it I got on the bus here. And I&#8217;m like, am I wearing a mask? Yeah, I guess wearing a mouth is all people on the bus. I put my mask on because you know it&#8217;s for them and then and then there&#8217;s all that kind of in the goblins still there because you&#8217;re looking around at the people who aren&#8217;t wearing masks thinking well, why they don&#8217;t worry masks you ourselves. And the Goblin continues. So here we are, is 2020 is slightly better than it was</p>



<p class="wp-block-paragraph">Jasmine Che 4:24<br>I mean much better than it was it&#8217;s</p>



<p class="wp-block-paragraph">Bill Tribble 4:26<br>much better. It&#8217;s much better I feel much more grounded in reality. I mean it&#8217;s still like ridiculous things happening in this country. For for listeners elsewhere. You might have heard that our glorious leaders have impaled the UK on a mix of xenophobia racism and just pure hubris to to the point where we lost like half the value of our currency and we can we can&#8217;t get tattooed anymore. And everything costs more.</p>



<p class="wp-block-paragraph">Jasmine Che 5:03<br>It&#8217;s slowly happening. Yeah, see how if things change or not?</p>



<p class="wp-block-paragraph">Bill Tribble 5:08<br>Yes, yes, we&#8217;ll see. It&#8217;s gonna be an interesting few years, that&#8217;s for sure. Nothing new in the big scheme of things in this place. But um,</p>



<p class="wp-block-paragraph">Jasmine Che 5:19<br>and so what about your practice bill? What do you envision for yourself?</p>



<p class="wp-block-paragraph">Bill Tribble 5:22<br>practice? What does it even mean these days? I mean, so. So, listeners, we had a little catch up the other day, and I&#8217;m very pleased to learn them. Jasmine&#8217;s been keeping stuff going, just kept the light, like,</p>



<p class="wp-block-paragraph">Jasmine Che 5:40<br>the triple gem.</p>



<p class="wp-block-paragraph">Bill Tribble 5:43<br>And I haven&#8217;t in many ways, I know, it&#8217;s interesting, right? Because there&#8217;s times in my life when I&#8217;ve managed quite a lot of meditation. But I&#8217;ve also not been very balanced in terms of my relationships and getting on with people on a basic level and stuff like that. So in one aspect, I&#8217;m like, Well, actually, how much does it matter? Maybe it matters more to have decent relationships. And I have merged that either. But there&#8217;s, that&#8217;s one side to it. Another side of it is informal practice, which is very important. Very, is it, you know, it feels like a kind of crappy excuse in some ways, but in some ways, I do see that as more important than, or equally important as formal. Because I know I get a lot out of actually sitting down and saying, right, I&#8217;m gonna meditate. 30 minutes is just amazing. And every time I do it, I&#8217;m like, Wow, that&#8217;s so good. Right. And then, suddenly, you have sideswipes. Me and I never do it again. But just taking like, you know, 10 minutes in a hot bath, to not do anything, and just have that experience. And these, these just little things out walking the dog, and sometimes I will just, you know, count my breath, as I walk across a field. And little things like that remind me of, I guess some of the more like, monastic practices that I&#8217;ve benefited from where people do that every day, and you know, they&#8217;re going to go in fact, word and carry water and all that, and they just do that thing. And there&#8217;s, there&#8217;s real power in that present living. Yeah, yeah, beyond the intellect. Just actually experiencing life and not not just living in a daydream of your, your thoughts.</p>



<p class="wp-block-paragraph">Jasmine Che 7:42<br>I mean, because that&#8217;s what dedicated practices really for though, like to, you know, get yourself up to a level where you can be more present in those everyday things. Yeah. And then it, you know, increases the quality of that presence in those things as well. And then our ability to come back to those. So maybe if having informal practice, we are say present 10% of the time with, let&#8217;s say, informal practices throughout the day. But then maybe with dedicated practice, it might increase to 30% to 40%. Because of how much more present our baseline level is. Yeah, and then we remember more often checked out less Yeah, that kind of thing. Yeah. Yeah, like a turbo booster. Yeah,</p>



<p class="wp-block-paragraph">Bill Tribble 8:34<br>yeah, totally. Totally. And I need to figure out like, how to weave somehow get better what I managed today actually was 20 minutes of journaling, great, which which I find such a powerful practices, it&#8217;s, it&#8217;s it, you know, it&#8217;s not a substitute for meditation, but it&#8217;s a parallel thing that some of the times when I felt most grounded in life and most kind of steady, like honour, you know, finding a direction to go, but when I was managing that daily and just really able to make that space and plan and understand, you know, self reflect.</p>



<p class="wp-block-paragraph">Jasmine Che 9:25<br>Yeah. I i from the artists way. Yeah. I had been doing the six pages a day for a while and like within a month, I&#8217;d finished like an entire books. And</p>



<p class="wp-block-paragraph">Bill Tribble 9:45<br>when did you get into the artists way?</p>



<p class="wp-block-paragraph">Jasmine Che 9:47<br>A couple months? Well, at least by April. Okay. Okay. I think I might have said so this one has been since the mid July and I&#8217;ve just finished it. Why? Has it been mid July? So if I&#8217;m doing it properly, yeah. Often it&#8217;s one of these books in a month. Yeah. I don&#8217;t which I haven&#8217;t been for this one is I haven&#8217;t even been writing the dates. That&#8217;s when you know that the practice ends up. Oh, it&#8217;s, as in I, when I&#8217;m not practising daily. Yeah, I don&#8217;t write the dates properly. Right. That&#8217;s how I know. Right? Yeah. I just write the time of time of the day seven in the morning.</p>



<p class="wp-block-paragraph">Bill Tribble 10:36<br>As long as you got the year on the cover of the journal, that&#8217;s most of it for</p>



<p class="wp-block-paragraph">Jasmine Che 10:41<br>me most everyone. Yeah. But I would say roughly, maybe August, so July, August, so maybe a month and a half rather than a month? Yes. Is still okay.</p>



<p class="wp-block-paragraph">Bill Tribble 10:56<br>It&#8217;s a great book that it was one of the first one of the reasons I got into journaling in the first place. And then it was about five years ago, I read a great article on why. Nice, Jasmine&#8217;s recording the pouring of the tea.</p>



<p class="wp-block-paragraph">Wonderful. I got into another article on, you know why journaling can change your life. And that one suggested a kind of structure to it. format of like, Okay, I&#8217;m going to write down things I&#8217;m thankful for things, kind of self assess, and where I&#8217;m at in my life and plan what I want to do to get to where I want to be and that kind of stuff. And I followed that for a good a good couple of years. And that was that was really useful as well.</p>



<p class="wp-block-paragraph">Jasmine Che 11:56<br>So do you like those types of journaling books where they have, you know, three things I&#8217;m grateful for, or what I learned, and then what I learned in the day, and then my most important priorities are, and then they have maybe one other thing like, quote, and then they&#8217;ll do that daily? Do you like those?</p>



<p class="wp-block-paragraph">Bill Tribble 12:16<br>I wouldn&#8217;t, I wouldn&#8217;t buy one of those, just because I find it annoying. But I, I did follow a template roughly, along those lines for a while. Because I did find it. You know, I mean, it&#8217;s it&#8217;s one of those scientifically proven things, right? If you do, reflect on things you&#8217;re happy about in your life, you get happier. Yeah. And so I found that useful. And why don&#8217;t you like those books? Well, it just sets to too rigid a format for it, you know, there&#8217;s a set length to each section. And sometimes I didn&#8217;t find it useful to dwell in a particular bit too long. So I just had to kind of had, I either have like, in the back of the book, or keep keep a list of the things I want to go into each journal. And then I&#8217;ll just refer to that if I&#8217;d forgotten. Or I would, for a while I was doing it on a computer or an iPad. And I&#8217;d keep a template and just reuse that every time.</p>



<p class="wp-block-paragraph">Jasmine Che 13:16<br>Do you think that the links that you would write would be varying? And you prefer?</p>



<p class="wp-block-paragraph">Bill Tribble 13:21<br>Yeah, it varies a lot. And some days, it would be like a load of stuff about now on sometimes a lot of playing, you know, that kind of thing. Yeah, I wonder how you found it in your six page thing, by what, what sort of contents coming out.</p>



<p class="wp-block-paragraph">Jasmine Che 13:39<br>I like to, I think start with any pressing thoughts that are just there. Like, that&#8217;s always hype again. More recently, I&#8217;ve been starting with where I am in the space of the world, because I don&#8217;t think I recall very well my days, or were placed in situation. But sometimes it&#8217;s quite nice as a diary, and would help for placing memories. And so I&#8217;ve been doing that, and then I sometimes do a little drawing. I think my most recent drawing was of two croissants. Just to say what I&#8217;d ate that day for fun. And then I do lots of creative ideating and then answering questions of like, what&#8217;s really important to me, or right now I&#8217;m trying to find out what projects I want to undertake. Yeah, and so I do a lot of idea progressions of what that might be. So I do loads of those, even if they go to waste and it&#8217;s not a full thing. It&#8217;s just nice to explore. And then other things like so one topic that&#8217;s really been at the top of my Mind is a safety for women. And kind of going into what are the real sources behind these issues? And how is it possible to help solve such a huge problem, like worldwide? So these are like, I guess, going into big questions like, how do we solve racism? How do you know, all of these like types of huge topics that we as one person might not be able to fix, but I guess I&#8217;m trying to consider what would be the most effective course of action if I was to do an intervention? And what would be most needed? But this one, specifically at the moment is for female safety, and then Education for All. Maybe children now and female on how to kind of stop this as a root cause, like problem? Yeah.</p>



<p class="wp-block-paragraph">Bill Tribble 16:03<br>Yeah, it&#8217;s such a big one. I mean, there&#8217;s been so many stories recently in the press of how policemen have been the murderers and rapists and man, it&#8217;s. Yeah, it&#8217;s a big one. Yeah. It reminds me of another conversation I listened to recently on the con spirituality podcast, shout out to the, the authors of that, what do you call podcast raise. Which is brilliant. Yeah. And they had an episode where they interviewed this young guy whose name I forget, I&#8217;ll look it up, who has he&#8217;s in his 20s. And he&#8217;s written a very poetic book about how he deals with the climate crisis. And in his life, and trying to figure out his future and what he can do, and all the rest. And for him, it was it&#8217;s the that the the things that individual can do are inconsequential, in the face of the, the, you know, the changes that we&#8217;re already starting to experience. And for him, it&#8217;s about policy and government, and, and how so that&#8217;s what it makes me think of in that context, like, the institutions that can make the biggest difference. There are, are those I mean, the companies as well, the NGOs, can do something, but they spend most of their time and money fundraising, and paying the salaries of all the people who do the fundraising, and I just don&#8217;t see them as is very efficient. But you know, I&#8217;m probably wrong, but that&#8217;s certainly how he sees it on the climate stuff, because it&#8217;s the only way you can actually control the corporation. So of course,</p>



<p class="wp-block-paragraph">Jasmine Che 18:03<br>I mean, NGOs, are you they might be putting some interventions across, but, you know, there, there might still be the polluters who are still doing that, and they&#8217;re only trying to then fix the issue that&#8217;s arising. Yeah, like cleaning the seas, you know, like charities might not or they might be trying to, well, I think the more effective charities would be trying to work with government in order to help them shape policies and stuff. And we have one, for example, animal equality, here is a great charity, animal policy UK, they have been working with the government. Well, what they do is they get investigative, footage of farms, and then they help show that people are not even given to the regulations. And then the government&#8217;s can be like, this isn&#8217;t right, and then they bring them to court. So I think they are the second most effective animal charity in the world.</p>



<p class="wp-block-paragraph">Bill Tribble 18:59<br>I love that. And it&#8217;s, it&#8217;d be I&#8217;d love to, is there a ranking system for how effective charities are in general? Like,</p>



<p class="wp-block-paragraph">Jasmine Che 19:08<br>I don&#8217;t know if it? I think they are definitely based on you know, where the money does go to, but how we can compare someone getting water to someone getting an operation? Maybe not, but I think that they just base it on who actually gets the money and if it&#8217;s going to the pace, they said, Yeah, and maybe some might be impact with live saved. So like, malaria. charities are notoriously very effective because they save lives directly from just nets for very cheap, so low saved, but I think we can go into other qualities of you know, how you can&#8217;t really measure education, necessarily. The impact of emotional security or yeah Yeah,</p>



<p class="wp-block-paragraph">Bill Tribble 20:04<br>yeah and there&#8217;s that fact that we were chatting about the other day that for every dollar in aid that goes to the developing world we take that like $10 in debt payments</p>



<p class="wp-block-paragraph">Jasmine Che 20:17<br>yeah and what was the book that you had mentioned?</p>



<p class="wp-block-paragraph">Bill Tribble 20:20<br>Jason hickel the divide listeners read it at your peril his brilliant book kind of terrifying it&#8217;s an amazing book because it i mean i i i&#8217;ve known that that there&#8217;s you know this post colonial state we live in is we have this kind of illusion of us being the the charities helping out the developing world but when he outlines basically how a bit like Jared Diamond in guns germs and steel which is also excellent, how the powerful rich countries are rich and powerful because they have stolen from the poorer countries basically in a you know, you there&#8217;s, there&#8217;s a long, there&#8217;s so many stories you can tell about that, like how, you know, India, I think when it first encountered Britain, it had like, a third of the world economy, something like that. And within a few 100 years, it was down to like, 5% or something and Britain, like, got half of it. It was really crazy stuff like that happened in in the last few 100 years. And also, it&#8217;s ongoing, it&#8217;s never stopped that that story, and the way that we predate basically on poor countries. It&#8217;s pretty remarkable. And it changed my perspective on the stories of aid and charity and so forth that we have in the West in the rich countries.</p>



<p class="wp-block-paragraph">Jasmine Che 22:02<br>I think I guess a greater discernment then between you know, what is actually helping or things where if they already have organisations there or how is it that we can better help with structures that do actually help? Yeah, so it&#8217;s even more effective charity? What does that even</p>



<p class="wp-block-paragraph">Bill Tribble 22:21<br>mean? Yeah, because it&#8217;s so by the government policy and all the rest? Yeah, because I definitely</p>



<p class="wp-block-paragraph">Jasmine Che 22:24<br>probably think that some charities will be doing good work, and not taking anything back. Sorry. Yeah. I mean, so do you have pointers on where to like find that or who what types of charities should maybe be researched into?</p>



<p class="wp-block-paragraph">Bill Tribble 22:43<br>I think they&#8217;re stuck in equals book. He was Yeah, he has a sort of chapter the last chapter on things you can do things that help but I didn&#8217;t finish the book because I was I got through a few chapters I was brought to life and again, it&#8217;s still on my shelf. But thank you, Jason, you open my eyes to that stuff one. Yeah.</p>



<p class="wp-block-paragraph">Jasmine Che 23:14<br>And I think well you know, when we even think about the SE z, Heart of the Bodhisattva and what it means to even have everyone awakened or to be of help or service What does that even look like as things become more complex in that same way you know, giving charity or giving aid or helping someone else? You know, there&#8217;s so many more barriers to what that even looks like now it&#8217;s not even necessarily a simple means because you One would think you know, giving charity many people don&#8217;t even donate to charities but so for those who do they would otherwise be thinking that they&#8217;re doing something good so there&#8217;s always these you know, I and it reminds me of in if anyone has watched the good place</p>



<p class="wp-block-paragraph">Bill Tribble 24:04<br>which I haven&#8217;t yet it&#8217;s very good Yes,</p>



<p class="wp-block-paragraph">Jasmine Che 24:07<br>it&#8217;s a show on Netflix but they have this billboard of like just buying a tomato and you think that maybe buying a tomato from a local farmers market would be good for you. But actually, that tomato was grown by this person but that person in order to have grown it stole from this guy who then took Yeah, it goes like all the way back to a chain so it&#8217;s actually a negative effect right. And that&#8217;s the kind of comical irony that it one action, we can&#8217;t see what the original so anything&#8217;s</p>



<p class="wp-block-paragraph">Bill Tribble 24:52<br>like that. I mean paper bags and shops. There was a great paper bags in the biodegradable but then the paper bags take Like 10 times as much water to make and if we always were plastic, yeah, really, we all switch to paper bags, we&#8217;d have no bloody trees left. And I remember reading an article on that there&#8217;s no, there isn&#8217;t many examples of stuff like that where it&#8217;s like, on the face of it, it&#8217;s a good thing. Maybe it&#8217;s something better. Maybe we could be making bioplastic bags that degrade? I don&#8217;t know. But in that particular story, the paper bag thing, which you&#8217;ll find in any posh shop now,</p>



<p class="wp-block-paragraph">Jasmine Che 25:27<br>yeah, I thought paper bags were good,</p>



<p class="wp-block-paragraph">Bill Tribble 25:30<br>meaty until I read that. And maybe it&#8217;s wrong, but it&#8217;s hard to figure these things out, right?</p>



<p class="wp-block-paragraph">Jasmine Che 25:35<br>I feel like there&#8217;s not one source of information, where everything is current, like it&#8217;s very difficult to know, is the same with even just the vaccines. There&#8217;s loads of misinformation around but we have the government website. And even the government website doesn&#8217;t show all the studies that are up to date, where we can look in a really nice format, or that seems to be accessible. No,</p>



<p class="wp-block-paragraph">Bill Tribble 26:00<br>it&#8217;s a really tough one that</p>



<p class="wp-block-paragraph">Jasmine Che 26:02<br>and then people can&#8217;t make decisions because they&#8217;re, they don&#8217;t have the information. But then you know, we&#8217;ll read on Guardian this like study, and then that will change our minds. But then someone else might not have read that one. Guardian article.</p>



<p class="wp-block-paragraph">Bill Tribble 26:15<br>Yes. Is like the, you know, is coffee good for you question or something like that, right? You, if you just follow the stuff that pops up in the papers, there&#8217;s one study after another on a coffee is good for you. And then one cup is bad for you. And you could go on like this forever. It&#8217;s very hard to get that kind of volume, and you have to look up the meta analysis, right? That&#8217;s why I did recently, Benny, and I&#8217;ve decided not to drink coffee, or drink less coffee, just because it&#8217;s like, clearly a massive, like, post colonial kind of extraction exercise. Right? It always comes from poor countries. And those people could be doing something better with their time than making coffee for me. But,</p>



<p class="wp-block-paragraph">Jasmine Che 27:07<br>but is it? Well, I guess it goes into? Is the trade actually good for them? Is it good for them? I don&#8217;t know if it is good for them? Or, you know, what are their working conditions? Yeah. And that goes back to what they be doing anything else would</p>



<p class="wp-block-paragraph">Bill Tribble 27:23<br>be there if it wasn&#8217;t for colonialists, you know, I mean, would they even, I mean, it just seems that well, you know, the sugar and coffee trades were established by slavers and the people who are still in those countries still doing that are still basically in a system</p>



<p class="wp-block-paragraph">Jasmine Che 27:44<br>what because they don&#8217;t pay like farmers very much</p>



<p class="wp-block-paragraph">Bill Tribble 27:48<br>and and far worse, I mean, that there&#8217;s I mean, even like, man, I don&#8217;t even want to talk about it. But avocados like apparently, there&#8217;s criminal cartels run these like avocado records. Because there&#8217;s so much money in it. And it&#8217;s again, it&#8217;s just a kind of like it&#8217;s a form of extraction from those countries, right? Where there&#8217;s money to be made. There&#8217;s going to be people there specifically in poor countries, I don&#8217;t know, it just feels like by and I&#8217;m not going to stop drinking coffee and buying avocados. But I feel wary of those things because I know where they come from. And I know that there&#8217;s there&#8217;s very little way that I can actually find something that really is fair trade. Like I have so little insight into that</p>



<p class="wp-block-paragraph">Jasmine Che 28:41<br>I Yeah, and I think that that&#8217;s that&#8217;s mainly the important issue that standards are improved for these types of countries who we do trade with, right? Because if they were paid being paid, what you might enjoy, like think is reasonable for them. Yeah, then you won&#8217;t have a problem. You&#8217;d be like that&#8217;s okay. Because they want to sell that and we&#8217;re just trading our services and otherwise, you know, they wouldn&#8217;t be able to continuous it, you know, because trade is not necessarily a bad thing is only if people are treated fairly during the process, touristy farmers even in the UK, I think I think one in five are poor like in poverty, even though they give like government grants and such, but they have to pay farmers to be farmers now. Yeah, so I think anything to do with things which are not going to be services and within trade that are higher, so it&#8217;s all about skills and education in general. And until maybe they have there always be some levels of inequality Unless, you know, people are more radical in the sense of there was a There&#8217;s a company, it&#8217;s a financial services company and the CEO decided to pay every 170 $1,000. I remember Yeah, man. Yeah, yeah. And that distribution or the understanding of being like, Okay, well, I want our company to be like this, it would require just people to say minimum, the lowest of the, like, people working in any field or sector should be this. And that should be enough for them to be able to thrive, even if it&#8217;s comparatively not going to be a first world country salary. But not like farmers wouldn&#8217;t mind if they could, you know, live happy and, and such. So I think that&#8217;s mainly the issue rather than trade</p>



<p class="wp-block-paragraph">Bill Tribble 30:58<br>is a tricky one. I mean, it&#8217;s probably beyond the scope of this podcast. To figure out, I just, I guess what I&#8217;m saying is, I feel really cautious about that narrative of capitalism making things better for poor people. Because it never really has. Its</p>



<p class="wp-block-paragraph">Jasmine Che 31:28<br>I think it hasn&#8217;t in the past, because it&#8217;s just been slavery and stuff like that. I think many people do benefit from having a job.</p>



<p class="wp-block-paragraph">Bill Tribble 31:38<br>Okay, okay. Let me reframe it, right. If we go back to, we&#8217;re probably getting way off the the awakened by lines. But if you trace it back to the invention of capitalism, it also invented poverty. At the same time, there&#8217;s an I&#8217;m not saying we can go back to before that time, because we can&#8217;t, we&#8217;re in a different place now. But when we rich people figured out that they could get even richer by enclosing land and getting people to work on it for them. If just 400 years ago, in Britain, they, they invented poverty. Because before that, people were poor, but they were also self sufficient. And after that, when they enclosed the land and said, okay, you can actually use that for your sheep grazing or whatever anymore. Now, you got to work for me. Then people for the first time, became really poor, and so desperately poor that they had to move off the land into cities and work in factories.</p>



<p class="wp-block-paragraph">Jasmine Che 32:48<br>Yeah. I felt like it would have been different say, you say everyone was super fair. Yeah, amazing. Yeah, it wouldn&#8217;t have necessarily been that way. And that&#8217;s what I&#8217;m saying. Like, I feel like if, if people were paid properly for their services, it&#8217;s not that there&#8217;s an issue of working because working is not necessarily bad. And being paid for your services isn&#8217;t necessarily bad. It&#8217;s just if you&#8217;re not, then that&#8217;s when it&#8217;s terrible.</p>



<p class="wp-block-paragraph">Bill Tribble 33:15<br>Okay. I think, let&#8217;s, I forgot to bring it, I&#8217;ll bring you the divide to read, because he&#8217;s very persuasive on this stuff. And I&#8217;m not saying it&#8217;d be a great conversation to have perhaps once you&#8217;ve read the first few chapters of that, because it is an interesting one. And yeah, like you say, it&#8217;s probably it&#8217;s probably beyond this podcast, to really figure it out. I mean, I&#8217;m with you in many aspects, but I&#8217;m also really cautious about it because of because of Jason Heiko, basically. So</p>



<p class="wp-block-paragraph">Jasmine Che 33:51<br>I also think of all like, our tax system would have to go like hand in hand with that as well. Yeah, then there would be a distribution back. But that&#8217;s why I don&#8217;t think that necessary, trade is an issue as of what trade is in itself, right. I think it&#8217;s only an issue. If nothing is distributed back or people are not fairly tax, you know, like if they can evade taxes as a thing. Yeah. So like, these are more of the issues than people having jobs.</p>



<p class="wp-block-paragraph">Bill Tribble 34:23<br>Yeah, yeah. Yeah, yeah. One, two, let&#8217;s, let&#8217;s have that chat again. Let&#8217;s let&#8217;s have an episode on Jason heyco. Let&#8217;s get Jason Heckle. On if we can, and Yeah, that&#8217;d be amazing. Cool. He&#8217;s a legend. Yeah, cool. I would like to raise the topic. Since we&#8217;re drinking this tea, which has in it, what type of mushroom Reishi Reishi. Mushrooms,</p>



<p class="wp-block-paragraph">Jasmine Che 34:49<br>the mushroom of immortality.</p>



<p class="wp-block-paragraph">Bill Tribble 34:51<br>Complete pivot here folks. To</p>



<p class="wp-block-paragraph">Jasmine Che 34:55<br>Yeah, and by the way, Bill has just said I&#8217;ve never known this before, that you should brew your green tea without a top on.</p>



<p class="wp-block-paragraph">Bill Tribble 35:06<br>Apparently say you heard it. You heard it from my wife Mamiko who is Japanese folks. There you have it. Yeah, I know this is a real key for you. You&#8217;re all in the seats, thinking about green tea does the but</p>



<p class="wp-block-paragraph">Jasmine Che 35:20<br>apparently, I think these tips are very helpful.</p>



<p class="wp-block-paragraph">Bill Tribble 35:23<br>gets more oxygen or something apparently improves the flavour. And so Reishi mushrooms Reishi? Yes, yes. Not Reiki folks. Reishi do good things for you.</p>



<p class="wp-block-paragraph">Jasmine Che 35:37<br>Yeah, so the interesting thing about some mushrooms is that it can help to support our immune system. And Reishi is definitely one of them. So how they actually function, I don&#8217;t know the science of it, interacting with our bodies. But there are so many studies. And the really great documentary, fantastic fun guy, which we both recently watched is a nice entry point into mushrooms. And some of their effects, they actually don&#8217;t go so much into the health benefits. I think they kind of segue into you know, what different, like, I think the understanding of what mushrooms are, or fungi, and what forms they come in, because it&#8217;s not only just mushrooms, and then it goes into some history of fungi, then it goes to a guy who researches it, but not so much is told, actually in the documentary about loads of the health benefits. So that&#8217;s actually a bit of a shame. And it&#8217;s because I knew those things before.</p>



<p class="wp-block-paragraph">Bill Tribble 36:52<br>I hope that there&#8217;s a lot more like decent science done on this because it&#8217;s fascinating. And I&#8217;m really curious, like one of the questions I didn&#8217;t hear answered in that documentary is why so why are like mushrooms, fungi? Why are they so active? I mean, I get it about penicillin, right? That this fun guys figured out how to fend off bacteria and viruses as it grows, because it needs to, as it does bacteria probably anyway. That why there&#8217;s so many like psychoactive mushrooms and poisonous mushrooms and stuff like that as well. It wasn&#8217;t didn&#8217;t really go into that. And that&#8217;s a good question.</p>



<p class="wp-block-paragraph">Jasmine Che 37:34<br>I guess, in an hour and a half. There&#8217;s a lot to cover. Yeah, it can only do so much. I think it&#8217;s just a nice introduction. And I think they kind of wanted to show the researcher Yeah, yeah, his story into it in order to be a compelling narrative, so that people can maybe just start researching for themselves. But it&#8217;s in the same way that we might see different adaptations of why things might be venomous to why they might glow in the dark. And animals and of all sorts. You know, I&#8217;m not an anthropologist, but we&#8217;d need an anthropologist, on probably</p>



<p class="wp-block-paragraph">Bill Tribble 38:17<br>fascinating show anyway,</p>



<p class="wp-block-paragraph">Jasmine Che 38:19<br>is really great. And the thing with mushrooms is I don&#8217;t know that there&#8217;s a supplements now available, people have it in tea form, and continuously brew it. You can also eat it. The interesting thing about like, sometimes they say that mushrooms are a good source of vitamin D, but actually only some of them are if they&#8217;ve been grown in certain light conditions. And you&#8217;re seeing the supermarket&#8217;s a little sticker, which tells you some of them that are high in vitamin D. But otherwise, the majority of them aren&#8217;t.</p>



<p class="wp-block-paragraph">Bill Tribble 38:59<br>There we go. And you also have an interesting story about your mother, my</p>



<p class="wp-block-paragraph">Jasmine Che 39:05<br>grandma. Yeah, she has, like the most expensive mushrooms around the world that she drinks in kind of a strong formulation every day. And she&#8217;s had stage four cancer for the past five or even six years now. But she hasn&#8217;t died. alastor just mushrooms are keeping her alive as well as the will to we. her grandchild, so also my cousin is quite sick and he&#8217;s only a little child, but it&#8217;s almost as if she feels like she needs to be there for him so she won&#8217;t die like physically. She won&#8217;t die.</p>



<p class="wp-block-paragraph">Bill Tribble 39:50<br>Wow. Where she based?</p>



<p class="wp-block-paragraph">Jasmine Che 39:53<br>She&#8217;s in Croydon,</p>



<p class="wp-block-paragraph">Bill Tribble 39:54<br>right okay,</p>



<p class="wp-block-paragraph">Jasmine Che 39:55<br>so just,</p>



<p class="wp-block-paragraph">Bill Tribble 39:56<br>yeah, well yeah, it&#8217;s a great story. I mean, yeah, I would love to. I&#8217;m gonna I&#8217;m gonna dig into this more.</p>



<p class="wp-block-paragraph">Jasmine Che  40:02 <br>She&#8217;s just so inundated with mushrooms like what more people will give her other mushrooms? Yeah, of course, it&#8217;s known for like Asian medicine, but she&#8217;s just like, &#8220;I can&#8217;t take any more I have so many mushrooms&#8221;. And actually Bill found some Psilocybin in the field.</p>



<p class="wp-block-paragraph">Bill Tribble  40:20  <br>We are there we are. Yes, it does grow everywhere this time of year. It&#8217;s remarkable. Yeah, satisfy me. Well, there&#8217;s a story. Yeah, that&#8217;s a very interesting one again, like why? I guess maybe it stems back to that thing they mentioned in documentary of how we we basically have a common ancestor, like animals and fungi. were sort of the same genus, like, 3 billion years ago or something. And perhaps that&#8217;s what I mean. It&#8217;s really interesting, wasn&#8217;t it? Why Why? Why is why is anything psychoactive on one angle, but mushrooms in particular? That&#8217;s very strange.</p>



<p class="wp-block-paragraph">Jasmine Che  41:22 <br>Well, it&#8217;s funny, because psychoactives only then reacts, you know, for us, it only happens to interact with us in that way. But otherwise for them. This is just how they are.</p>



<p class="wp-block-paragraph">Bill Tribble  41:37 <br>Yeah, yeah. I mean, who knows, maybe some of this vast coincidence based. It&#8217;s odd that I mean, I&#8217;ve read that say, in the Psilocybin, the active ingredient. A bit like LSD. it very closely mimics serotonin. I think that was the one. And so hence it&#8217;s crazy powerful action from small amounts. Yeah, interesting stuff. I mean, I personally i don&#8217;t know if I mentioned this on the podcast before, but when I really got into deep into meditation, I lost all interest in drugs. Because I had equally powerful experiences on retreats as well. I got here on my own steam, you know, and why would I want to bother with? With drugs, especially street drugs, which you&#8217;re just basically buying random crap, you&#8217;ve got no idea? How am I actually,</p>



<p class="wp-block-paragraph">Jasmine Che  42:36 <br>I find the interesting thing for people would be like, Okay, say, I don&#8217;t really care about I have no idea what it might be, likely that it&#8217;s going to have maybe some contaminants, but it&#8217;s not going to kill me. People might say, Okay, well, you had to go on a retreat, which was 10 hours a day for 10 days. And that&#8217;s a lot of investment. It&#8217;s</p>



<p class="wp-block-paragraph">Bill Tribble  42:56 <br>much harder, you know, especially people just do them as party drugs on a night out.</p>



<p class="wp-block-paragraph">Jasmine Che 43:01 <br>Yeah. So they might just say, oh, if I can buy it for, for a fiver, you and I can have this spiritual experience.</p>



<p class="wp-block-paragraph">Bill Tribble  43:08 <br>You know, it&#8217;s a very different context for a lot of people, but it&#8217;s very interesting to hear about the successes of like psychedelic therapy. It&#8217;s very interesting. Also, there was one of the things that came out of the film was how, after these therapy sessions, they measured, I think, like the interconnectedness of the brain, and they found that actually grown more brain matter than a control group, something like that. Very, very interesting.</p>



<p class="wp-block-paragraph">Jasmine Che  43:37  <br>Yes, that&#8217;s really interesting. I guess more science will be uncovered. I have a friend actually who&#8217;s a researcher at your UCL long term meditation retreater. And he is great. He, I think the study he is doing at the moment is on taking psychoactive micro dosing or up to a certain amount, but taking them on long term retreats. In combination. So maybe we can have him on the show.</p>



<p class="wp-block-paragraph">Bill Tribble  44:10 <br>So Tim Leary is brilliant. Yeah, yeah, really interesting. Funny one is my neighbour was into microdosing and she still is but um, I was just, you know, browsing through these articles after watching that film.</p>



<p class="wp-block-paragraph">Bill Tribble  44:33 <br>And and came across a picture of her in The Guardian.</p>



<p class="wp-block-paragraph">Bill Tribble  44:43 <br>I didn&#8217;t know it was like a 2019 article on micro dosing. Which is fascinating though that there have been studies done on market dosing and it&#8217;s very there&#8217;s not much evidence yet that it actually does anything much. Because they did one with like a control group and the placebo group had equally positive test taking the real thing so</p>



<p class="wp-block-paragraph">Jasmine Che  45:13 <br>yeah, and placebo mean might be good enough to see was very powerful. Yeah, no CPR placebos. Almost better to just put everyone in a pretend study group and just give them a sugar pill.</p>



<p class="wp-block-paragraph">Bill Tribble  45:29 <br>Perhaps that&#8217;s that&#8217;s why homoeopathy is still going so strong. I mean I&#8217;m it&#8217;s it&#8217;s a very strange thing. That one.</p>



<p class="wp-block-paragraph">Jasmine Che  45:41 <br>Yeah. I there was, I think maybe a year and a half ago. homoeopathy was struck off as a real science to treat things and it status VR was formally taken off. Yeah.</p>



<p class="wp-block-paragraph">Bill Tribble  46:00 9:11<br>Yeah, raised and from what I&#8217;ve got it, I mean, as a child, my parents were into stuff like that, and they tried to treat my whooping cough with it. It didn&#8217;t really work. Many years later, I came down with a TB related thing when they did the X rays, they like you&#8217;ve got old school and new lines there. So he was so freakin bad that my lungs were scarred 30 years later, by this this calf that they were trying to treat with sugar pills. I mean, the few things like that in my childhood. I mean, it&#8217;s just, it&#8217;s just freaking Whoo. That and it winds me up. So Much that that side of my history because it&#8217;s impacted me directly and just in general I just get so wound up by that stuff it&#8217;s partly why I&#8217;ve enjoyed that can spirituality podcast so much because I mean getting back to meditation like there is so much benefit to be had from it. Like it&#8217;s obvious powerful natural thing we all have access to. And people build cults around it and enrich themselves and and predate on people and that&#8217;s also just this pretty amazing run on the floor. I feel very lucky that I haven&#8217;t been like suckered into one of those things.</p>



<p class="wp-block-paragraph">(continues &#8230;)</p>`},{id:4255,slug:"episode-8-lorin-roche",title:"Episode 8 – Lorin Roche. Meditation can *actually* be easy",date:"2020-12-07T10:35:22",formattedDate:"December 7, 2020",originalPath:"/2020/12/07/episode-8-lorin-roche/",category:"podcast",episodeNumber:8,audioUrl:"/wp-content/uploads/2020/podcast/episode-08-Lorin-Roche-01.m4a",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-08-Lorin-Roche-01.m4a",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-08-Lorin-Roche-01.m4a",audioType:"audio/mpeg",audioLength:157935773,duration:"1:23:20",featuredImage:"/wp-content/uploads/2020/12/Screenshot-2020-12-07-at-10.53.51-scaled.jpg",excerptText:"Really special episode this, with one of our favorite meditation teachers. Lorin is something of a ‘meditator whisperer’ – having spent much of his…",excerptHtml:"<p>Really special episode this, with one of our favorite meditation teachers. Lorin is something of a ‘meditator whisperer’ – having spent much of his…</p>",featuredExcerptHtml:"<p>Really special episode this, with one of our favorite meditation teachers. Lorin is something of a ‘meditator whisperer’ – having spent…</p>",contentHtml:`<p class="wp-block-paragraph">Really special episode this, with one of our favorite meditation teachers. Lorin is something of a &#8216;meditator whisperer&#8217; &#8211; having spent much of his life being an unorthodox counsellor to meditators who were having trouble in their practice. Lorin casts aside monasticism, ascetism, and puritanical thinking for a clear-eyed and honest look at what it means to meditate as someone &#8216;in the World&#8217;: Someone with family, responsibilities, a career &#8211; and all the other things that exist outside the Ashram. We hope you enjoy this as much as we did &#8211; please let us know your thoughts!</p>



<p class="wp-block-paragraph">NB. A problem with the stream meant we couldn&#8217;t capture Jasmine&#8217;s video.</p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Lorin interview &quot;Meditation can *actually* be easy&quot; - Awake In episode 8" width="1290" height="726" src="https://www.youtube.com/embed/9QWY9ANO910?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>
</div>



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<h4 class="wp-block-heading">Links</h4>



<h6 class="wp-block-heading">Sites</h6>



<ul class="wp-block-list"><li>Lorin&#8217;s main site &#8211; <a href="https://lorinroche.com/" class="ek-link">https://lorinroche.com/</a></li><li>Lorin &amp; Camille&#8217;s teacher training &#8211; <a href="https://www.meditationtt.com" class="ek-link">https://www.meditationtt.com</a></li></ul>



<h6 class="wp-block-heading">Books</h6>



<ul class="wp-block-list"><li><a href="https://www.goodreads.com/book/show/635454.Meditation_Made_Easy?from_search=true&amp;from_srp=true&amp;qid=fl5p2Y3qtv&amp;rank=1" class="ek-link">Meditation made easy</a></li><li><a href="https://www.goodreads.com/book/show/10893162-the-radiance-sutras" class="ek-link">The radiance sutras</a></li><li><a href="https://www.goodreads.com/book/show/647108.Meditation_Secrets_for_Women" class="ek-link">Meditation secrets for women</a></li></ul>



<h3 class="wp-block-heading">Transcript</h3>



<p class="wp-block-paragraph">(First 40 minutes only &#8211; that&#8217;s all we could get for free from Otter app 🤷‍♂️)</p>



<p class="wp-block-paragraph">Bill 0:09<br>Lauren, thanks so much for joining us.</p>



<p class="wp-block-paragraph">Lorin Roche 0:12<br>Oh, it&#8217;s delightful. I miss England so much.</p>



<p class="wp-block-paragraph">I love London. And</p>



<p class="wp-block-paragraph">it&#8217;s fun to be a California in like a beach person. Good. I&#8217;ve lived most most of my life within a mile of the Pacific Ocean. Yeah, I like to live right? right near the shore. And once I was in London, and I was like, looking around, like, Where am I? Where&#8217;s the where&#8217;s the tube? So this guy comes walking along on the street, and I go, he looks like he knows his way around. It was wearing his bespoke suit, this fantastic looking guy. And I said, Can you tell me where&#8217;s the subway or the tube? And, and like for half a second. He goes like, it was like, you don&#8217;t talk to me? Do you understand? Like, I&#8217;m a high class person. You don&#8217;t just speak to me without being introduced? for about half a second. And then you saw I could see him process my accent. And then go, he&#8217;s an American, and then shift to being friendly. And then like, he&#8217;s probably a California and he could tell and that he just dropped the whole thing. And all of a sudden, I was his friend. And he just like took me under his wing and was showing me a we don&#8217;t have that. That same. Like, same structure. Yeah, like yeah, here. Camille and I were both born, right, right here at the beach near the beach in LA, and our mothers were. But in Los Angeles. If you&#8217;re here for a week, you&#8217;re an old timer. It&#8217;s like if you&#8217;re here. You&#8217;re a Dennison. Do you own it? If you hear your inhabitant? It&#8217;s a totally different, different attitude.</p>



<p class="wp-block-paragraph">Bill 2:23<br>Yeah, yeah. Yeah, there&#8217;s a constant class war on the streets of Britain. I thought when I, I lived in Japan for a couple of years. And when I got back to London, I was just in shock. at the striation level, the barriers in the streets.</p>



<p class="wp-block-paragraph">Lorin Roche 2:43<br>Yeah, wow.</p>



<p class="wp-block-paragraph">Bill 2:46<br>Cool. Well,</p>



<p class="wp-block-paragraph">Lorin Roche 2:47<br>to me, it&#8217;s kind of like exotic</p>



<p class="wp-block-paragraph">Lorin Roche 2:50 </p>



<p class="wp-block-paragraph">&#8212; to see that kind of order.</p>



<p class="wp-block-paragraph">Bill 2:55<br>Awesome.</p>



<p class="wp-block-paragraph">Lorin Roche 3:00<br>And, but, you know, that brings up the point, that the meditation traditions come from these intense caste system. Yeah. And the people who wound up in the monasteries might have been just the debris. The people who couldn&#8217;t fit in, yeah. broken. And, and weird and transgender, like, they didn&#8217;t talk about there&#8217;s very few notes. But in, in the monasteries, people who like why would somebody join a monastery when when everybody&#8217;s supposed to get married and have kids? Is it people who, when they hit puberty, whatever age, that would be 10, or 11, or 12, or 13, just freaked out and said, I&#8217;m out of here. Or their parents sold them to the monastery. Because there was no food, they couldn&#8217;t feed them, from much of from much of human civilization time, from much of time. There. There were the famines and times when there&#8217;s no food. And literally, people were starving, even if they were farmers. And so they would give one of their kids to the monastery. So it&#8217;s a motley crew.</p>



<p class="wp-block-paragraph">Bill 4:26<br>Yeah. Wow. I love that we&#8217;ve dive straight in but lines for a minute. Could you introduce yourself to our listeners? I think some of them may not have heard of you. And it&#8217;d be. I&#8217;ve watched like nearly every interview, I can find a viewers on YouTube or whatever. Yeah, be great to get an intro. So welcome to the show. Lauren, how are you?</p>



<p class="wp-block-paragraph">Lorin Roche 4:50<br>Thank you, Bill. Thank you, Jasmine. So my name is Lauren Roche and I grew up at the beach in Southern California. Surfing Sailing, skiing, body surfing, diving for fish in abalone. And hunting. My dad had read Hemingway. And so men hug. So from the time I was seven, I would go on hunting expeditions with my father to deer hunting, and we&#8217;d eat the deer. And we go to Africa and hunt. And by the time I was 10, I was like a really good shot. So I could wander around Africa alone, while my dad was off on Think big game. And this hunting and fishing and feeding the tribe Oh, and also cars, you it&#8217;s important to have a sports car. So I drove all kinds of, of race cars on these, the 60s, era American sports cars. And when I was 18, I was working my way through college at the University of California, at Irvine, this new campus that&#8217;s in Orange County, just south of Los Angeles, about 100 kilometres. And we had to be in experiments as part of being a student, we had to be an experiment every quarter, which is about 10 weeks. So I signed up to be an interesting sounding experiment on brainwave biofeedback. And they had a physiology lab and in one of the new buildings, and it&#8217;s wasn&#8217;t even occupied yet. So there&#8217;s a physiology lab inside this brand new huge building, and there&#8217;s no one else in the building. And, or at least on those two floors, so it&#8217;s just ultra quiet. And the physiology lab was the several rooms and there is a room that was completely black, out completely dark and completely soundproof. And it was inside what&#8217;s called a Faraday cage, which is like a copper, think of a screen door with copper to block out electronic signals. And I came in and they put wires all over my head and my my hands and my body.</p>



<p class="wp-block-paragraph">Lorin Roche 7:33<br>And I was a control subject. So I got no brainwave biofeedback, they just said, don&#8217;t move too much. You&#8217;ll rip off the wires. And we&#8217;ll be back in a few hours. they close the door, and I&#8217;m there. And they&#8217;re in this pitch black room, utterly silent, but utterly about as silent as you could get without going to extreme measures. On this, though, one of those Barcalounger type chairs, it&#8217;s really super comfortable. And just no instructions whatsoever. Now, it was 1968. And I hadn&#8217;t heard of meditation. So there&#8217;s like no information about what you&#8217;re supposed to do. So I was just there. Sort of like you are in the ocean when you&#8217;re surfing, surfing, you know, most of the time, if you describe surfing, it&#8217;s paddling, which is maybe 20% of the time waiting with just maybe 40 or 50 or 60% of the time. And then you get a ride for 30 seconds. That&#8217;s like mostly what Surfing is. So I was used to just being in nature, where you just like, you just be there and you perceive with your senses, the seat they&#8217;re seeing there&#8217;s vastness all around their hearing, so I would just okay, Wackness in silence. And I fell into a level of relaxation. That was beyond anything I had experienced. And athletes experience intense relaxation, if you&#8217;ve ever run a marathon or swamp swam a long ways when you stop and if you just lie down, your whole body&#8217;s vibrating with fatigue. And it&#8217;s an incredible experience. Well, this was falling into relaxation, the way that athletes will fall into restfulness after long exertion like if you go for six hours, there&#8217;s this state you enter where your your whole body is just a hum like a motor. Hmm. Well, what this was, I say fell into just the primordial experience of What a body is this? The life of the cells, this the hum, the hum of life, itself. So there is the breathing. Yeah, that&#8217;s interesting. There&#8217;s a heartbeat. And then underneath the breath, and the heartbeat was just this sense of quiet, ready, a lightness. just completely alert with all senses, but alert to nothing. Because there was nothing, there&#8217;s nothing to see at all. There&#8217;s like not one pinpoint of like, there wasn&#8217;t one sound. And so in a certain way, it was like falling asleep. Like, we fall asleep every night, but I fell awake. So I fell into the state</p>



<p class="wp-block-paragraph">Lorin Roche 10:53<br>of intense alive enough.</p>



<p class="wp-block-paragraph">Lorin Roche 10:57<br>Way beyond anything I ever knew. Now in a perfect day of sailing, it&#8217;s, it&#8217;s incredible. If you ever, I used to sail catamaran, so you&#8217;re out in the ocean, I love big sailing and storms. And you&#8217;re just with the waves. And after that, there&#8217;s an incredible feeling you know of a lightness and surfing diving under waves skiing, this was more intense, in terms of being physically present, alive and vital. Way more than I had ever experienced. It was just a relaxation. So total, that it there&#8217;s this sown of utter fearlessness, there&#8217;s like zero fear. And I&#8217;m always a little afraid when I go into the ocean, like there&#8217;s, you know, there&#8217;s sharks and creatures. And, and I&#8217;ve been in the ocean my whole life. So there&#8217;s a, there&#8217;s a little bit of fear as far as a tangle, like what&#8217;s at where the currents where the riptides where the waves where the creatures? How far am I from shore is that within my swimming capacity. Because there&#8217;s a certain kind of, like a light level of fear being in nature. This was no fear. So I dropped into a zone, where there&#8217;s not one particle of fear in my body, this utter relaxation, and space itself seem to become friendly, again, made out of some sort of texture, if the universe itself is this friendly place. And after, I think it was about two and a half hours, the the research assistant came on, the speaker said, Okay, we have enough data. And I said, I think you better give me a while. Because when he said that, I, I felt my body, I felt like I need a while to like rev up the neurons from this day of total, timeless absorption. And just being when I walked out of the lab, I was in the state of a lightness that is like the state after incredible day of surfing or sailing. But many times more intense, like, colours were incredibly vivid. And when I would look at somebody, like I could see the life force in them. And when I look at plants, there was like a life force in them. So I went to the lab as part of the experiment every day, for several weeks. And I got used to functioning in this state of total relaxation. And</p>



<p class="wp-block-paragraph">Lorin Roche 14:12<br>I sort of got addicted to it.</p>



<p class="wp-block-paragraph">Lorin Roche 14:15<br>That&#8217;s the story of my life. Like taking calculus tests, I would I would be in the taking a test. And my mind was so clear that I would go Oh yeah, I saw that formula last night when I glanced at the textbook. And I could just in my mind, see the formula and see the hints from the textbook. And then during the test to solve it. And then an English class. I would just sit down like give you if to write an essay. I would just go Okay, here&#8217;s my outline, write the essay and turn it in early. And it almost never functioned that well in my life. So I was functioning. Like in every level, I was functioning way better than I had ever function. Taking calculus tests, writing, talking to people, and just moving around the world. So I thought this is great. So the lab experiment had me there for a couple hours a day, every day. And then this experience of being just completely clear, all my senses functioning superbly. It lasted full on for a month. And then it started to fade away. And that&#8217;s, that&#8217;s when I started to study yoga, and meditation.</p>



<p class="wp-block-paragraph">Bill 15:40<br>So I wanted to ask, I love this story, by the way, I&#8217;ve heard you, you mentioned in other interviews that you went through a period of really intense practice doing Asana and meditation, I can enter in a repeat, and I wanted to dig in a little bit to what what I saw that you were doing, what kind of practice were you part of in those days?</p>



<p class="wp-block-paragraph">Lorin Roche 16:07<br>Yeah, well, the we learn the 14, like a 14 basic awesomeness, okay. And it was a flow. So it&#8217;s like easy flow, where you don&#8217;t hold the asanas for a long time. It&#8217;s, it&#8217;s about moving every joint of the body move, moving, moving in all dimensions.</p>



<p class="wp-block-paragraph">Lorin Roche 16:35<br>And,</p>



<p class="wp-block-paragraph">Lorin Roche 16:39<br>and it was remark, I was so lucky. Because just the year before they had the attitude in my school was will just meditate all day, get as many hours of meditation as you can. And they would do these long sets where they would sit for hours and hours. When when I was in my teacher training, I was 19 and 20. And they had come up with this programme, or this sequence, where you do you do some easy pranayama called suka pranayama, just just in and then out, then you do this full set of Asana. So you might be 20 minutes. And, and then you do pranayama again for a couple minutes, and then meditate. And we all meditated about 45 minutes, like we were supposed to meditate for 25 minutes, because we&#8217;re all in our early 20s. But we all would meditate for 45 minutes, which must be some kind of body cycle. And, and then do pranayama again, and then the full fit of Asana. Right. And this is so brilliant. I&#8217;m so lucky that I arrived at a time where they had figured that out, because it absolutely brilliant. When</p>



<p class="wp-block-paragraph">Lorin Roche 18:15<br>because after months of this</p>



<p class="wp-block-paragraph">Lorin Roche 18:20<br>I was still no just in a room all day. I was just in in great shape. I could go run on the beach, it felt physically fantastic. So it helps you to integrate what meditation does. Yeah, yes, meditation can be dangerous, and that it opens up your senses so much that you can&#8217;t cope. You&#8217;re not ready to be a different person.</p>



<p class="wp-block-paragraph">Jasmine 18:48<br>What&#8217;s interesting, what&#8217;s really interesting about it come after it my first Vipassana meditation retreat. I hadn&#8217;t spoken to many people about this or told them, but for the next two weeks after, I was almost crying every single day. And it and I lived on the fourth floor of off of Wimbledon High Street. Prior to that I didn&#8217;t hear like any buses, you know, you get you habituate to all the noises. But every single time a bus or even a car went past it felt like I was getting hit in my body. Yes. And it was so funny because it wasn&#8217;t even that I could really hear it so much. I could just feel it.</p>



<p class="wp-block-paragraph">Lorin Roche 19:38<br>Yeah, yes. That&#8217;s called the dilation syndrome. And you tell your senses wake up so much. And it says you haven&#8217;t developed calluses sort of to do with it. So everything is shocking. So people that meditate a little bit too much for their bodies capacity, say, over a period of months, can develop that semi permanently. And then they become artificial introverts sort of afraid of the world. There&#8217;s a lot of people that have had this go on for years. And their whole life becomes about that sort of cringe. Yeah, yeah. And then and then they try to adapt. There&#8217;s various things that people do to adapt to when that happens, you want to do off complimentary meditation. So sort of build up boundaries, do things like I&#8217;m like Tai Chi and Qi Gong and I Kido. Where you create, you cultivate the sense of boundaries around you. And you and you meditate on that, instead of noticing so simple, a simple way of looking at what happened is that you were practising mindfulness, which is it to great extent sense fullness, noticing teeny sensations. And so it turned up the dial on your kinesthetic senses, just like if we turned up some dials on this computer recording, we get all kinds of feedback. How would you turn up the dial? The the amplitude, the volume, on synesthesia, hearing and kinesthesia, and then creating feedback loops. That&#8217;s solvable, by the way.</p>



<p class="wp-block-paragraph">Jasmine 21:38<br>Yeah, it totally solved I didn&#8217;t need to be I didn&#8217;t experience it after but every other person who I&#8217;d spoken to later on, they hadn&#8217;t mentioned anything like that. So I thought something was wrong with Well, not wrong with me. But maybe I was just more sensitive than others.</p>



<p class="wp-block-paragraph">Bill 21:53<br>I have had very similar experiences after retreats as well. The world can be feel like a bit of a brutal place after you&#8217;ve spent 10 days kind of playing your nasal.</p>



<p class="wp-block-paragraph">Lorin Roche 22:08<br>Yes, yes. And that&#8217;s to be avoided. That&#8217;s from lack of boundaries, dial up your sensitivity, you also need to dial in strength boundaries. And one of the problems in meditation is denial.</p>



<p class="wp-block-paragraph">Lorin Roche 22:27<br>Is that</p>



<p class="wp-block-paragraph">Lorin Roche 22:29<br>the meditation world tend to deny that there&#8217;s negative side effects where there&#8217;s lots of negative side effects to meditation. And any any real sport. Everybody knows if there&#8217;s anything tennis, there, people playing tennis over there? Well, there&#8217;s lots, there&#8217;s lots of different tennis injuries. There&#8217;s minor ones, like getting blisters on your feet to getting sunburned to do overusing your tendons, singer singers, injured their voices. Adele had to cancel these huge concerts in England, because she, she loves making those huge sounds and she blew out her voice, every sport and meditation, there&#8217;s a sense of denial, so they don&#8217;t notice they&#8217;re not recording, the negative side effects. And, and the other is not listening. You if you really listen to students, you&#8217;ll find out it&#8217;s incredible. Like when I&#8217;m I trained meditation teachers, and one of the things that we do so simple, is when people come to learn to meditate, just listen to sessions. Just tell me about your natural meditative experiences.</p>



<p class="wp-block-paragraph">Lorin Roche 23:51<br>And when do you feel most at home in the world?</p>



<p class="wp-block-paragraph">When do you feel thrilled to be alive?</p>



<p class="wp-block-paragraph">Lorin Roche 24:00<br>What are your natural doorways in to where you just feel like you&#8217;re in, I&#8217;m in me and being me. Okay, well, let&#8217;s build your meditation practice. To be that is and that&#8217;s actually what meditation is. meditation practices in general. It&#8217;s how did the at home in yourself and thrilled to be alive? That&#8217;s what meditation is. That&#8217;s what Ohm means. It&#8217;s at home, I&#8217;m at home in the universe. And I&#8217;m, I&#8217;m ecstatic to be it&#8217;s a privilege every moment to participate in creation. It&#8217;s a thrill to privilege. And, and, and we find that if you didn&#8217;t listen to people have a couple of sessions where like an hour and a half. He just will tell me about your net win. And you&#8217;ll and you&#8217;ll find the most amazing thing Almost everybody has had profound meditative experiences. They don&#8217;t know that that&#8217;s meditation, it&#8217;s not categorised as meditation. And, and as you listen to people, they&#8217;ll teach you how to teach them. And also, it feels like such an honour. When people are talking about their, there&#8217;s moments when they experience the magic of life, it feels, it feels like a privilege to be there. Listening, it&#8217;s almost like you&#8217;d pay them. When a teacher is in this position, it&#8217;s like you will almost want to pay the student because they&#8217;re teaching you something that&#8217;s infinitely precious. That&#8217;s just extraordinary. I mean, meditation is a natural human experience. And it&#8217;s instinctive, it&#8217;s built into our bodies. And and the more natural you are in your approach to yourself, the better.</p>



<p class="wp-block-paragraph">Lorin Roche 26:10<br>The end of the lab,</p>



<p class="wp-block-paragraph">Lorin Roche 26:13<br>you at the University of California at Irvine, after a while, they developed UC Irvine Medical School, and they were doing physiological research on meditation, they had people I would go in, they would stick needles in my arms and take blood samples, every couple of minutes. UCLA was doing really good research, and Harvard Medical School was doing. So these three centres of research. were focusing on the physiology of meditation. And it turns out that with, even with the beginner, someone who&#8217;s had just a couple of weeks to get used to the idea of meditating. With the simplest meditation instruction, it&#8217;s like, hey, okay, just pick something you want to think about. Okay? Go ahead and hang out with it. And but don&#8217;t make any effort, don&#8217;t block out thoughts, just welcome everything. Even even in a lab, which is weird, it&#8217;s weird to go into a lab to meditate. Maybe measuring a physiological baseline, and then say, okay, meditate. And three minutes, the person, people would drop into a state of rest deeper than deep sleep, to the set. And this is what I experienced spontaneously, when in the lab that I was in, in 1968. You drop into the state of relaxation, deeper than deep sleep. That&#8217;s so refreshing. So this is a major scientific finding. And, and although it was replicated, over and over and over again in the 70s, and 80s, still not what people are thinking about when I think about meditation. I think I think this is this is the best vacation I&#8217;ve ever been on. I don&#8217;t need any tools. I don&#8217;t need to interfere with my mind. I don&#8217;t need to work at it. I can just give over to this innate instinctive rhythm.</p>



<p class="wp-block-paragraph">Jasmine 28:20<br>I love how in your book, meditation made easy, you emphasise this a lot. And Bill actually, what the book for me, which was a lovely gift. And when, when you like, I find it so rare that other teachers really emphasise the human experience just naturally. And how do you see meditation being spread in this way like that this is actually how you would say, you know, it&#8217;s easier than you know, just even having to sit down and, like, follow some formulaic structure of an exercise. How do you see this being spread? And like, what are the barriers to it? Do it</p>



<p class="wp-block-paragraph">Lorin Roche 29:11<br>give me say that again, but it&#8217;s give me a specific, get</p>



<p class="wp-block-paragraph">Jasmine 29:16<br>more specific. And so in terms of like, the mainstream apps and places that are taught even in schools, it&#8217;s all based around, I think, the more formal meditation styles, but it&#8217;s so rare to find someone who is advocating that style of meditation that you would say like you&#8217;d be speaking about yoga. Yeah. And how can we you know, allow others to know more about it in such a way, but when the main offering is what has always been offered.</p>



<p class="wp-block-paragraph">Lorin Roche 29:54<br>That is, that is the challenge and</p>



<p class="wp-block-paragraph">Lorin Roche 30:00<br>Things that are far more formal.</p>



<p class="wp-block-paragraph">Lorin Roche 30:03<br>They sound appealing to people people really want to know, like people, they really want something that helps them. Now part of what&#8217;s going on is that the people who are meditating to great extent many of them, they don&#8217;t go to church anymore. And so, what it&#8217;s what&#8217;s happening is that the, the meditation teachers take on the role of being a priest,</p>



<p class="wp-block-paragraph">Lorin Roche 30:37<br>and teaching religion.</p>



<p class="wp-block-paragraph">Lorin Roche 30:41<br>And so like, if you think about like, a white people&#8217;s church, it&#8217;s all you go, any new set, you sit still, and you try to act spiritual, and be all respectful. Like you&#8217;re, you&#8217;re kind of sitting there. And so, Westerners who approach meditation or sense being blindsided, and there&#8217;s the meditation, what is coming at us through our neglected religious yearning. So, meditation is sitting, it&#8217;s actually just sitting in church trying to be good, trying to be observant. And there&#8217;s a lot of value to that. However, if you want to just be able to, like every day, week, after week, year after year, be able to walk on the door, and say, instead of saying, like, God, I need a beer right now. Or, oh, I need a glass of wine or I such a day, I need to smoke something, if you want meditation to be so it works so well. That it&#8217;s instinctively satisfying, then you need to construct your practice so that you&#8217;re utterly natural with yourself. And it doesn&#8217;t work to be reverent or mindful, if you people are mindful all day at work, people are concentrating all day at work. If you make meditation into being work, then you&#8217;ll have to go somewhere else to cut loose. So this approach that I&#8217;m describing here, is the technology of meditation. That&#8217;s for people who live in the world. Meditation for people who have jobs, a home of a love life is very different technically, than meditation for professional monks who their job is to act holy obey. When when we come home from work, when we get up in the morning, we need to be so free with ourselves that it&#8217;s like, Bring it on, bring on the thoughts, bring on my to do list, bring on the tears bring on the laughter. So we need to be so free that in a space of a couple of minutes of meditation, we can be like crying, we can get mad, we can feel turned on sexually, we can start laughing again. Then we can get okay my to do list or we can be absorbed in our to do list and endorse ourselves actually rejoiced how great that I have a couple minutes to sit here. I&#8217;ve got had some peace of mind. And now I can like feel into my to do list and all the people I&#8217;m going to see today. That&#8217;s what meditation is like for somebody who&#8217;s responsible. And who has things to do. There&#8217;s, it&#8217;s a very dynamic state. And while you&#8217;re deeply relaxed, deeper than sleep, you still think a lot. Because what what the body does when in a state of relaxation, is that it tunes itself up and heals. It does repair work like during sleep.</p>



<p class="wp-block-paragraph">Lorin Roche 34:13<br>And so</p>



<p class="wp-block-paragraph">Lorin Roche 34:16<br>this just full rotations very much like a movie where you&#8217;re like, Okay, now I&#8217;m sexually turned on now and falling. Now I&#8217;m falling asleep annotation. Now I&#8217;m mad at my boss or I&#8217;m mad at this. Now I&#8217;m worried about this. I don&#8217;t want my to do list. Now I&#8217;m crying. I&#8217;m laughing. And it&#8217;s like, who know I&#8217;m completely clear. If that dynamic and that works and millions of people have been taught that style of meditation. itself, um, the Buddhists and the mindfulness people. They&#8217;re like the best thinkers. There&#8217;s there&#8217;s like hundreds 10s of thousands of therapists and people with PhDs and researchers, it&#8217;s the best meditation community, the the Buddhist doing the best intellectual work. I mean, it&#8217;s just, it&#8217;s a fantastic community. They the tradition I&#8217;m coming from, it doesn&#8217;t really have a name. It&#8217;s, it&#8217;s in the realm of yoga. And you could call it Tantra. But we don&#8217;t know, in the West, we don&#8217;t know what Tantra means. It&#8217;s a contract text, and is engineered from the beginning to be for people who live in the world.</p>



<p class="wp-block-paragraph">Bill 35:48<br>I wonder, I was hoping to ask you a bit more about the. So there&#8217;s, there&#8217;s a few topics that around, it isn&#8217;t interesting to explore. Perhaps the first would be, I wonder if you&#8217;ve dug into the Tera vaada, and maps of enlightenment. And just be interesting to hear your thoughts on.</p>



<p class="wp-block-paragraph">Lorin Roche 36:17<br>It&#8217;s so sophisticated. I mean, I&#8217;ve, I could say I&#8217;ve only glanced at the literature. And a lot of my friends over the last 5050 5052 years are Buddhists. And I Tibetans, I love the Tibetan Buddhist, I just love them. And Camille, those two Camille and I met at Project Tibet and Santa Fe, where I was teaching.</p>



<p class="wp-block-paragraph">Lorin Roche 36:48<br>But I&#8217;m,</p>



<p class="wp-block-paragraph">I&#8217;m interested in the maps.</p>



<p class="wp-block-paragraph">And I&#8217;m in a sense, starting at the beginning, I did.</p>



<p class="wp-block-paragraph">Lorin Roche 37:02<br>I did my bachelor&#8217;s degree, and my masters and my PhD at the maps that meditators make to describe their internal experiences. And so the mouse, my, my engagement with mapmaking has been how do people make sense of their experience? And it&#8217;s just I&#8217;m interested in regular people, like people have babies, people who are entrepreneurs, people who who live alone, but they want to be in relationship, people who used to be married now the divorce and living alone. People who work in factories, soldiers, I&#8217;m interested in just regular people, what maps could they make? And there&#8217;s all these sensations that we feel during meditation, and afterward, we turn up the dial on sensations, there&#8217;s all these emotions. Like it&#8217;s, for example, with women, it&#8217;s very common for women to cry for months, when they begin meditating, there&#8217;s a cry, the whole meditation, just cry and cry and cry and cry and cry for months, sometimes six months. There&#8217;s all emotions, and then all manner of thoughts. So that&#8217;s, that&#8217;s the level of discourse that I&#8217;m engaged with. I don&#8217;t I don&#8217;t have a critique of the, the Theravada maps itself, that we&#8217;ve received this incredible gift from the monks and the Swamis and the Lamas, and the Yogi&#8217;s of this data from their exploration, so meditation, and our challenge is to take the gift of all these techniques, like Buddha, Buddha said, once monks, I&#8217;ve given you 84,000, different Dharma doors for all the different kinds of people out there are our challenges to accept the gift, and then reinvent meditation to be truly appropriate for all the kinds of people in the modern world that are wanting to meditate, which is lots. There&#8217;s lots of different kinds of people. And the last thing we want to do when someone comes to learn to meditate is imposed on them some creepy technique that&#8217;s just not native to them.</p>



<p class="wp-block-paragraph">Bill 39:37<br>Nice. I wonder what your thoughts are on the concept of enlightenment. Awakening. Again, is</p>



<p class="wp-block-paragraph">Lorin Roche 39:49<br>I didn&#8217;t &#8211; I banned the word starting in around 1975. Like I just stopped using it. Yeah. Because I in the people that I was around to ask Thoroughly 70s it was just blah, blah blah enlightenment, this blah, blah, blah. It&#8217;s a seat for him. It was just a garbage word. Yeah. Yeah. used to mean that you&#8217;re not okay the way you are. And there&#8217;s this higher state you&#8217;re supposed to get to. Yes, exactly like, exactly like saying, like to regular people, dude, your car is for shit. Got to buy a new car of this particular brand. Yeah. Otherwise, just to feel bad about yourself. Yeah. So I didn&#8217;t use the word for decades. And then about 10 years ago, I thought, but that&#8217;s a beautiful word. Like, let&#8217;s use enlightenment, lowercase and like an invisible air quotes. like to talk about? Let&#8217;s use it in a positive. Yeah. Like, I think that in the West, we have to reinvent the concept of enlightenment. And it&#8217;ll probably take a couple hundred years. I mean, as we all know, most of the time, when somebody says I&#8217;m enlightened, it means that they&#8217;re starting a deranged cult. And using their, their converting meditation into a mind control techniques. And then years later, you&#8217;ll hear the inside story. Yeah. Yeah. Incredible abuse and degradation. Yeah, it&#8217;s really like, if I&#8217;m a map, really, it&#8217;s like, if there&#8217;s a master, then there&#8217;s got to be a lot of slaves. Yeah. As we were talking about earlier, in the, in India, in these systems, there&#8217;s people at the top who are like reincarnating, they&#8217;re very privileged people. And there&#8217;s lots of slaves that are just live lives of degradation. So that goes on a lot in the meditation traditions. It&#8217;s shameful. It&#8217;s shameful. So I actually think we&#8217;re at the very beginning stages of figuring out how to make meditation truly beneficial, because when I would Camille and I spend every day we interview regular people who are learning to meditate and people have been meditating for years. And it&#8217;s like, a lot of times, it&#8217;s like, Why waste your time? meditating? You could, you could be taking a walk. The way people approach meditation, yeah, it&#8217;s not that healthy. When people want to just sit to meditate. They have all these voices in their heads, like, sit up straight, be mindful, don&#8217;t have those thoughts. Don&#8217;t feel sexual, don&#8217;t be angry, be compassionate. You&#8217;re not doing it right. And it&#8217;s a war, the way meditation is practised. It&#8217;s often as a war against the self as a war against also being a young person. And all these ideals, so it&#8217;s not that it&#8217;s not healthy. It&#8217;s um, meditation is more like dieting to at least it into Americans. As your your eyes reading something, okay, this is gonna work. You post some weird rules on yourself. You starve yourself, do practice denial for a while, maybe you lose a little bit of weight. But then you&#8217;ve taught your body that there&#8217;s a famine on, and it should, because whenever you die, it it makes your body feel like oh my god, there&#8217;s a shortage of food I&#8217;ve got accumulate some fat here, and then you wind up fatter. People are approaching meditation, just like dieting, they&#8217;re constantly failing. And with each failure, they&#8217;re damaged a little bit.</p>



<p class="wp-block-paragraph">(First 40min. Continues..)</p>`},{id:4204,slug:"episode-7-james-kite-social-ecology",title:"Episode 7 – James Kite “Social ecology”",date:"2020-09-25T11:41:44",formattedDate:"September 25, 2020",originalPath:"/2020/09/25/episode-7-james-kite-social-ecology/",category:"podcast",episodeNumber:7,audioUrl:"/wp-content/uploads/2020/podcast/episode-07-James-Kite-01.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-07-James-Kite-01.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-07-James-Kite-01.mp3",audioType:"audio/mpeg",audioLength:156504960,duration:"1:05:13",featuredImage:"/wp-content/uploads/2020/09/James-kite.jpeg",excerptText:"A friend from Awakin Circle (no relation), James is a remarkable character, engaged in the social dimensions of awakening and community. Audio Version Subscribe…",excerptHtml:"<p>A friend from Awakin Circle (no relation), James is a remarkable character, engaged in the social dimensions of awakening and community. Audio Version Subscribe…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">A friend from Awakin Circle (no relation), James is a remarkable character, engaged in the social dimensions of awakening and community.</p>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>
</div>



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<div class="wp-block-jetpack-slideshow alignwide" data-effect="slide"><div class="wp-block-jetpack-slideshow_container swiper-container"><ul class="wp-block-jetpack-slideshow_swiper-wrapper swiper-wrapper"><li class="wp-block-jetpack-slideshow_slide swiper-slide"><figure><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="768" alt="" class="wp-block-jetpack-slideshow_image wp-image-4232" data-id="4232" src="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54.jpeg#038;ssl=1" srcset="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54.jpeg 1024w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54.jpeg 300w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54.jpeg 768w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></li><li class="wp-block-jetpack-slideshow_slide swiper-slide"><figure><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="739" alt="" class="wp-block-jetpack-slideshow_image wp-image-4231" data-id="4231" src="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-2.jpeg#038;ssl=1" srcset="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-2.jpeg 1024w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-2.jpeg 300w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-2.jpeg 768w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></li><li class="wp-block-jetpack-slideshow_slide swiper-slide"><figure><img data-recalc-dims="1" loading="lazy" decoding="async" width="1024" height="768" alt="" class="wp-block-jetpack-slideshow_image wp-image-4230" data-id="4230" src="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-1.jpeg#038;ssl=1" srcset="/wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-1.jpeg 1024w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-1.jpeg 300w, /wp-content/uploads/2020/10/WhatsApp-Image-2020-09-25-at-09.54.54-1.jpeg 768w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></li></ul><a class="wp-block-jetpack-slideshow_button-prev swiper-button-prev swiper-button-white" role="button"></a><a class="wp-block-jetpack-slideshow_button-next swiper-button-next swiper-button-white" role="button"></a><a aria-label="Pause Slideshow" class="wp-block-jetpack-slideshow_button-pause" role="button"></a><div class="wp-block-jetpack-slideshow_pagination swiper-pagination swiper-pagination-white"></div></div></div>



<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<h4 class="wp-block-heading">Links</h4>



<h6 class="wp-block-heading">James&#8217; Projects</h6>



<ul class="wp-block-list"><li><a href="http://find-enlight.com/" class="ek-link">Find Enlight Project</a></li><li><a href="https://www.enrolyourself.com/hosts/James-Kite">Enroll Yourself</a> Learning Marathon (Creative &amp; Analytic thinking )</li><li><a href="https://cloudup.com/cHncv3BPZ_v" class="ek-link">QT &#8211; Community Magazine During Lockdown</a></li></ul>



<h6 class="wp-block-heading">Influences</h6>



<ul class="wp-block-list"><li><a href="https://creativemornings.com/cities/ldn" class="ek-link">Creative Mornings</a> (Creative Lecture series )</li><li><a href="https://www.awakin.org/local/city/london" class="ek-link">Awakin London</a> (Local Mindful community)</li><li><a href="https://www.instagram.com/plantenvironment_comproj/" class="ek-link">Plant Environment</a> (Local Growing Community)</li><li><a href="https://www.thersa.org/" class="ek-link">RSA</a></li><li><a href="https://centerforintegralwisdom.org/" class="ek-link">Ken Willber &amp; Integral theory</a> (Clean up, Wake up, grow up show up)</li><li><a href="https://en.wikipedia.org/wiki/Self-reference" class="ek-link">Metacognition &amp; Self Referential Thinking in arts &amp; life</a></li><li><a href="https://en.wikipedia.org/wiki/Neuroplasticity" class="ek-link">Neuroplasticity</a></li><li><a href="https://www.youtube.com/watch?v=QXTXNSWOAqQ" class="ek-link">Permaculture thinking</a></li><li><a href="https://www.youtube.com/watch?v=Miy9uQcwo3U" class="ek-link">Systems Thinking</a></li></ul>



<p class="wp-block-paragraph">Conduit Club has sadly closed!</p>



<h6 class="wp-block-heading">Bill&#8217;s work</h6>



<ul class="wp-block-list"><li><a href="https://endlesss.fm/" class="ek-link">Endlesss</a> &#8211; collaborative music app</li><li><a href="https://hopin.to/" class="ek-link">Hopin</a> &#8211; virtual events platform</li></ul>



<h3 class="wp-block-heading">Transcript</h3>



<p class="wp-block-paragraph">(First 40 minutes only &#8211; that&#8217;s all we could get for free from Otter app 🤷‍♂️)</p>



<p class="wp-block-paragraph">Jasmine 0:09<br>Today on the show is the lovely James. And initially how we first came to know him myself and Bill was both, again through the awake in circles. And you do something special, I think, James, for your work, I think you&#8217;re probably on the side of &#8211; it&#8217;s more unusual, I guess.</p>



<p class="wp-block-paragraph">And even the theme that you proposed today was very interesting.  And so maybe you can explain to others like what you do, and maybe where you are right now.</p>



<p class="wp-block-paragraph">James Kite 0:56<br>Cool. Hello, both of you. Thanks for having me. So, being able to explain what I do is probably taken me more than 10 years, and I don&#8217;t know if I&#8217;m ever gonna get there. But the last out a six to seven years or so I&#8217;ve been in the fields of like social arts producing. And for me, that involves kind of jumping from different domains. It involves, like community development, it involves cognition, being understand being able to understand myself and the way I relate to other people. And I guess the framing of how I ended up in this space was, I was really introduced to polymathic thinkers very early on. And I saw the benefit of being in multiple disciplines. And I see the benefit for myself individually. But then the next step is being able to communicate to people that I&#8217;m just not in one domain, but I enjoy being in multiple domains. So in summary, I used the word social odds producing, but it&#8217;s probably a lot broader than that. And yeah, so that has, that kind of led me to running events with various themes, some mindfulness, some social, economic, some interpersonal, and I&#8217;ve been using event as like playgrounds to explore the multiple domains I&#8217;ve been running into. So I would say that&#8217;s a summary of it. I guess we could probably delve a bit deeper as, as the conversation proceeds.</p>



<p class="wp-block-paragraph">Bill 2:43<br>It sounds fascinating. I still don&#8217;t quite understand, but I&#8217;ve got a slightly better idea now. What What would you say? What would you say? Your what, what what are your aims? And what what are you what? Like, obviously, real life events are kind of off the menu at the moment. But yeah, what have you been looking to achieve with with your work, I guess?</p>



<p class="wp-block-paragraph">James Kite 3:12<br>I&#8217;ve been looking to kind of develop, like a fuller sense of myself, and feel a sense of the community around me. I think that, at the deepest core of what I&#8217;m trying to do is find the most conducive way for us to as a humanity and, and myself to, to kind of coexist and thrive. And, yes, so that&#8217;s led me into the like the field of creativity. I kind of come from a bit of music background, but I felt like the skills in music, or the things that you&#8217;re practising is actually applicable to so many different fields, the skills of like centering yourself, incenting, what you want to communicate to the world. And I&#8217;ve thought of that as just community building. So that&#8217;s the that&#8217;s the simple kind of answer community building that&#8217;s able to not just withstand the world we&#8217;re in but kind of build a new world based on the way we interact with each other based on the spaces we create, and how that creates new ways of engaging. Hmm, yeah, it&#8217;s kind of like, it&#8217;s like I pulled in a thread, and the thread just kept going. I can give you an example. It&#8217;s like so I would want people to be able to engage with each other a bit better in a space in a community space, right and get to the depth of what they&#8217;re feeling. But in order to do that, that you need to think of, what is the space? What&#8217;s like the condition of the space? What&#8217;s the kind of interpersonal psychological things going on? And then what&#8217;s the music thing in the background, etc, etc. So, um, and because I wasn&#8217;t doing it for, like a mark, so I&#8217;m not doing it in an academic setting, or I&#8217;m not doing it to have immediate financial benefit, I have the freedom to just keep pulling the thread. So I don&#8217;t I don&#8217;t have to contain it in a box. So I could go in many domain I wish and and yeah, I guess the something is always helpful to anchor people is if I drop a name in here, and the name would be Zack Stein, a guy I&#8217;m reading a lot. And he he&#8217;s also a multi disciplinary kind of thinker. And, and he talks about the the development of, of a human being in, in like these three domains of instalment development, and transcendence. So the kind of one the walk of awaken, and meditation is the transcendence, but they all interplay with each other. They all interrelate. So, you can&#8217;t just be focused on one domain, or else.</p>



<p class="wp-block-paragraph">It&#8217;s kind of at a disadvantage of the other domains.</p>



<p class="wp-block-paragraph">So it&#8217;s kind of like, I think, yeah, go on Jasmine.</p>



<p class="wp-block-paragraph">Jasmine 6:36<br>So when you actually are talking about like, the two other domains, can you delve into deeper to what, what kind of practices might someone be looking into to develop these areas? And then also, also what what they are? Yeah.</p>



<p class="wp-block-paragraph">Bill 6:54<br>Yeah. Sorry.</p>



<p class="wp-block-paragraph">James Kite 6:57<br>So right.</p>



<p class="wp-block-paragraph">Okay, so, so I kind of figured I&#8217;ve been doing this intuitively, for the last few years. But I recently discovered Zack Stein, and it&#8217;s a bit more formalised, and it has a lot of research behind it. So the domains that I intuitively went into was creativity, and then analytical thinking,</p>



<p class="wp-block-paragraph">and then</p>



<p class="wp-block-paragraph">kind of humour and play. Mm hmm. But in the, in the Zack Stein kind of model, which he&#8217;s gathered from loads of different people, his instalment, which is therapy, yourself, trauma, it&#8217;s quite unique to yourself. It&#8217;s about your soul, I guess. And it&#8217;s kind of what you mentioned in the previous episode with Liam, that a lot of meditators can transcend, but they may not be able to work in there, like the practical, what does it mean to them? Right. So that&#8217;s the instalment. As much as I understand it, I could begin this wrong disclaimer to anyone listening. And then development is cognition, your ability to acquire skills in might be being a beautiful writer, it&#8217;s like the skill domain. And its language, and you can zoom into that a bit more. And the transcendence is kind of like, being able to observe yourself, like from the third person, like the state that people get, after they&#8217;ve meditated for a long time, or, or not even in, in Buddhist traditions, you could even think of it in, in just the narratives of religion, the kind of place the human in a longer arc of history rather than just you specifically. And yeah, so you want to be able to, and there&#8217;s, there&#8217;s techniques in each of these domains, you can so in the transcendent, we may know, meditation, you may know, I guess, metacognition is probably another term I could throw in there. And then in the development category, I would in my head is probably along the lines of more discipline and skill, acquisition focus, and just doing things repeatedly to kind of develop that aspect. And then the instalment might be a little bit of self reflection. Where did you dream How can you interpretate that?</p>



<p class="wp-block-paragraph">How do you</p>



<p class="wp-block-paragraph">for me, it also involves kind of making music or art for yourself in the in some category, to kind of figure out yourself on a very unique basis, not as thing that you necessarily have to go and like, preach out to everyone, but everyone will have their own unique aspect, you know? So. And yeah, so that&#8217;s a that&#8217;s a slight summary. I think people can delve deeper into it. But intuitively you want to feel like you&#8217;re delving deep within yourself. And then you&#8217;re taking what you&#8217;ve delve deep within yourself and interacting with the world. And you want to have this kind of reciprocal cycle.</p>



<p class="wp-block-paragraph">Bill 10:32<br>Hmm. Nice. It&#8217;s it sounds It reminds me of another kind of way of framing that I guess I had come into the speaker it might have been. Yeah, I&#8217;ll get back to that. But the, the idea was you&#8217;ve got these three, three kind of ways of, of developing, waking up, which would be the the Enlightenment thing. And meditation and growing up is actually sort of ethically becoming a bad person. And cleaning cleaning up which is dealing with your shadow side, and all the stuff that you Yeah, you&#8217;d rather not look at.</p>



<p class="wp-block-paragraph">James Kite 11:15<br>I think that might be Ken Wilber perhaps like integral theory? kind of</p>



<p class="wp-block-paragraph">Bill 11:19<br>think it could be? Yeah.</p>



<p class="wp-block-paragraph">James Kite 11:21<br>And yet the guy&#8217;s Eckstein. I mentioned he&#8217;s, he&#8217;s like, heavily influenced by Ken Wilber. And they work together. So it probably overlap there. Yeah.</p>



<p class="wp-block-paragraph">Bill 11:32<br>Nice. Yeah, well, so much to unpack here. How do you how do you approach these do? I mean? So you talked about building community? And then these three kind of aspects of human development? How did they? How do they relate?</p>



<p class="wp-block-paragraph">James Kite 11:52<br>So</p>



<p class="wp-block-paragraph">So kind of, I do a lot of personal research. So online, like the academic stuff that I&#8217;m talking about?</p>



<p class="wp-block-paragraph">Jasmine 12:03<br>You do?</p>



<p class="wp-block-paragraph">James Kite 12:06<br>Yeah, a lot of</p>



<p class="wp-block-paragraph">Jasmine 12:07<br>he&#8217;s always</p>



<p class="wp-block-paragraph">James Kite 12:09<br>right, going down the rabbit hole.</p>



<p class="wp-block-paragraph">So yeah, I guess my ambition is kind of like, I can have a conversation with anyone and suggest them a book or a video or link. And just being able to conversate with anyone I run into in whichever domain. And so the way which so I did a lot of this research, and then I tried to think of Okay, so I read Daniel Pink, who&#8217;s a real author. And he talks about drive and what motivates people and I&#8217;m like, Okay, so how can I place this in, in a project with friends and people who are interested? And how can I use these theoretical kind of toolkits to, to kind of projects that actually have an impact in the way people and people don&#8217;t need to say, like, I used to go around a lot like saying, you should read this, you should do that. And then I started realising if I can embody it in some way, rather than if I can create the environment where people can learn without me having to tell them to read something. That&#8217;s the goal. Right? So some, yeah, I could go into the projects, but that&#8217;s, that&#8217;s the mindset behind behind the, the approach.</p>



<p class="wp-block-paragraph">Bill 13:31<br>Yeah, yeah, dude, do tell us about the projects.</p>



<p class="wp-block-paragraph">Jasmine 13:34<br>Okay, so maybe you can, like, take one of the things that you wanted to like unpack, like one of the disciplines or one of the theories and then say, like, how you may be formulated something like that? That&#8217;d be really cool.</p>



<p class="wp-block-paragraph">James Kite 13:50<br>Sure. Okay. So</p>



<p class="wp-block-paragraph">I was really, like, so over the last year, I was running something called inperson, which is kind of like a community film night. And what I really wanted to do is communicate interesting concepts and theories of transformation. Kind of like the butterfly effect, loads of kind of concepts that are think very prescient at all times. It&#8217;s very relevant. And the way in which I kind of approach that was kind of everything I&#8217;ve learned throughout the years. I structured the event, it would like as a regular every two weeks, it would happen. And that went on for a year. So that every two weeks aspect was you want to create regularity, because that&#8217;s how kind of people cultivate community community doesn&#8217;t happen in a flash pan. So they need to have, they need to just be able to turn up and not have to think Or even check online. So that&#8217;s one element. And then the second element was, I kind of realised that there&#8217;s a lot of noise in the way in which we communicate. So there was like, very purposeful design of silence for the first for the first 10 minutes or so of arriving at the event. And there was food, which is just breaks down the ambitions and stuff and like self consciousness. So the event went like a moment of silence and introduction, we would watch kind of very creative, short films, very abstract, it could be interpreted in loads of different ways, sprinkled in with some more factual videos. And then, after the videos, instead of telling people what they should have got from the videos, and they were broken up into groups, and people discussed the themes that came up with them. And then after that, we kind of all got together and shared what we got from the videos. And so there is multiple layers going on here, which is the theme that&#8217;s been explored on the night. And then there is the just the act of watching something interpretating it for yourself and communicating it to people. So it doesn&#8217;t really matter what theme we&#8217;re doing. That is actually the the unspoken kind of lesson or the unspoken thing we&#8217;re digesting in the space. And we&#8217;ve I think we&#8217;ve been awakened. Right? So it&#8217;s Yeah, it&#8217;s like taking stuff that I&#8217;ve kind of learned and loved about or weakens our calls about other creative events I&#8217;ve been to and kind of synthesising that. I also have, I could go on because there&#8217;s quite a lot of projects, but there&#8217;s to do, there is there&#8217;s a project that I&#8217;m currently working on, which is with an organisation called enrol yourself. And enrol yourself is a peer learning kind of journey American, which I feel is is is where education will be going in the future. And it&#8217;s, it&#8217;s not hierarchically driven. It&#8217;s kind of giving people the toolkits to learn for themselves. So people who want to keep learning, but not necessarily in an institutional format, or by themselves, what you what will unfold is, I think, over the next year, I&#8217;m going to be hosting a learning marathon with enrol yourself. And the concept is, anyone can come along, and they may have a burning question or something they want to explore in their own personal lives. And they will have the space held for them with their fellow peers. And over six months, they will kind of refine what the question means to them. They will run workshops, and they will learn from each other. And an hour will have a container and I have a loose theme in mind and I&#8217;ll recruit the people that I feel could work well together. And so with that, what my question going into it and hosting is how can people have analytical mind, like analytically?</p>



<p class="wp-block-paragraph">analytically</p>



<p class="wp-block-paragraph">natured people, people may be like coders</p>



<p class="wp-block-paragraph">and people who are more analytical driven, how can they work with creative people? And have a mutual exchange? Like how can the creatives learn to be perhaps a bit more analytical and discipline? And how can analytically driven people learn how to be more kind of novel driven and like, generative in a creative way? So So yeah, that&#8217;s enrol yourself and that I&#8217;m going to Yeah, I&#8217;m going to be starting over the next few months. And yeah, mostly looking for people who want to be involved in that. And yeah, I think I&#8217;ll pause that.</p>



<p class="wp-block-paragraph">Jasmine 19:26<br>And, and how do you step into the space of like, because it&#8217;s quite easy to say that someone might be more like an escort than the other or like the display their creativity via their like, unless for me, and, yeah, and just kind of that space, like how are you planning on navigating? The nuances?</p>



<p class="wp-block-paragraph">James Kite 19:53<br>Yeah, great, great question. So</p>



<p class="wp-block-paragraph">I i intuitively feel way beyond Have analytical ways of thinking and creative ways of thinking, it&#8217;s just at a certain age, in the educational form, we&#8217;re kind of encouraged to pursue one avenue. So it&#8217;s just a muscle that we&#8217;ve trained more than the other muscle. So I think everyone has the capacity. So I would kind of invite people to, to tap into aspects of themselves, that is dormant within them. But with the assurance that they don&#8217;t have to do that by themselves, because they can be in a group with other people who may have the skills that they want to kind of develop a bit more. So kind of encouraging them to, to enquire the situation not as, like fixing yourself, but just like awakening a part of yourself that&#8217;s been dormant, that will complement each other, right? Because I think, like, exercising is a very good kind of analogy for me, because you kind of need the mindset to get up in the morning and work on your physical traits, right. But in you getting up and working on your physical trades, it allows your cognition to be able to perform better throughout the day. And that cycle kind of reinforces itself. Right? So, hmm. So yeah, that&#8217;s the kind of the way the model in which I&#8217;m looking at these kind of facets of development.</p>



<p class="wp-block-paragraph">Bill 21:30<br>Nice, I</p>



<p class="wp-block-paragraph">Jasmine 21:32<br>find that interesting. And I like how each of the different kind of events or ideas that you have are just, as you said, initially, just, you know, very eclectic, and wouldn&#8217;t necessarily be from the same person. Not necessarily anyway. So it&#8217;s, it&#8217;s very inspired. And I love the process that you take, for example, the breaking down, how am I going to create, you know, an event such as this, but thinking very creatively about it, too. So I feel like you embody that well, within the process in which you</p>



<p class="wp-block-paragraph">have intuitively found. And, yeah,</p>



<p class="wp-block-paragraph">Bill 22:21<br>nice. Where are you? Where are you doing that? I mean, obviously, we&#8217;re, we&#8217;re now kind of a bit limited in physical space. But where are you? Where have you been running these these events.</p>



<p class="wp-block-paragraph">James Kite 22:38<br>So historically, that in passing events have been in like, is LinkedIn, London. So that&#8217;s been in a physical space. But I&#8217;ve been able to kind of alter some aspects of it and do it remotely. So when kind of like the pandemic hit and the lockdown happened, instead of trying to kind of rush and just do it on zoom, I thought of what is the essence of what people got from the event. And I translated that into, just like calling each guest that comes and having a like a one hour two hour conversation, and finding out about what their experience has been in the lockdown of getting very quite personal. And talking, talking about everything from kind of just zooming into the quality of engagement, and then compiling a booklet of everyone&#8217;s stories, so people can read each other&#8217;s stories. So it&#8217;s a way of them were not feeling alienated. In they&#8217;re not feeling alienated in their kind of experience. And this was actually, the idea of a partner of mine with the whole finding, like project is what I call that. He, he thought of the idea, and together, we kind of fleshed it out and called people. Yeah, I kind of paused for a while, because I&#8217;m thinking of like, I think it&#8217;s worth to zoom in a little bit with that project emerged from the idea of the partner of mine were heed, and he came to the event as a guest. So I think there&#8217;s something really interesting if you can create spaces where you like, there isn&#8217;t a clear line between a guest and someone who can be an active agent in creating something. So after a while, I&#8217;m getting as much from the participants and guests because they can come with ideas and that can grow into something else. And so I kind of that links in with the theme of the ecology of care that I kind of wanted to talk about, which is I think, I think it&#8217;s it&#8217;s kind of it&#8217;s just not an effective strategy to slowly develop yourself without having the ecology of like, friends, peers, families and people around you. Like, it&#8217;s kind of like a reciprocal act, if you if you want to grow a flower, you don&#8217;t just focus on the flower, you focus on the soil, the kind of the rain, the sun, there&#8217;s multiple factors around, right. So the ecology of care, for me is about caring for the components around you, in order for you to, to then flourish as well. And how, how that act kind of</p>



<p class="wp-block-paragraph">amplifies anything you could individually do.</p>



<p class="wp-block-paragraph">So, so yeah, I think that&#8217;s quite an important concept that I want to play with and like, invite people to, to think of themselves as part of an ecology of other people. And by helping the people around you helping your ecology to flourish.</p>



<p class="wp-block-paragraph">I mean, yeah, I</p>



<p class="wp-block-paragraph">Jasmine 26:05<br>guess like, I, this is the same as what would be often, like inspiration golf, in the meditation context of everything is interconnected. And basically, the a lot of Zen teachings go around, and allowing ourselves to understand that we could not be who we are without the help of others, or just even environment and so on. And then I&#8217;m wondering, where you plan to, like, take that? And like, how do you think that it&#8217;s scalable? Because of course, you&#8217;re doing this on? You&#8217;ve been like heading these, but how do you think that like really unfolds? What do you think community often stays local and, and smaller and such as well.</p>



<p class="wp-block-paragraph">James Kite 26:57<br>So</p>



<p class="wp-block-paragraph">I think the thing I really like to communicate, and the reason why I find it hard to sometimes communicate the ideas is because at times, I want to give the whole process of what I&#8217;m thinking when I&#8217;m doing something in order for people to replicate it. So instead of saying I did a, I want to say, this is how this is how I fished instead of talking about the fish, I want to talk about the process. And for me, it&#8217;s about self, I think, mindfulness meditation, and that whole world is good at being self reflective. And so that skill has allowed me to take into various domains of being always self reflective of what&#8217;s going on. So I kind of invite anyone who&#8217;s listening to, to delve into like, meta cognition, and if you enjoy anything, like a film, or kind of understand what are the parts, like you&#8217;ve got a director, you&#8217;ve got to produce a, you&#8217;ve got actors. So for me, I think things will, we&#8217;ll have, like a chance of reproducing itself, if I can share the tools of how I made something, and then others can go and make, like an event similar to this or, and, and that helps me because if other people are experimenting somewhere else with the tools, they can always feedback and, and like, let me know, ways it could be better. So, so yeah, that&#8217;s my, my idea is not to have everything nested under my projects, but to facilitate other people&#8217;s projects. So they could grow. And, like that feeds back, it goes back to the ecology of care, but on project levels. Um, so yeah, so that&#8217;s kind of the Yeah, the approach.</p>



<p class="wp-block-paragraph">Bill 28:49<br>I love the way you frame that, it&#8217;s something that I think I&#8217;ve I&#8217;ve seen a lot of in the meditation world is a real focus on the self, perhaps too much focus on the self, because it is driven by a need to do that stages, you go on a retreat, and you have to work on yourself in that context. And, you know, Buddha said, no one can work out your problems for you, it&#8217;s all on you. And you know, you&#8217;ve kind of got to put the work in and, and, and, you know, blast through and transcend and that there&#8217;s so much of that dialogue in in Buddhism and, and the meditation and new age and yoga world, you know, that that, that the community gets lost, and it all becomes all about the individual and you know, attaining that perfect yoga pose or whatever stage of enlightenment you think you&#8217;ve reached.</p>



<p class="wp-block-paragraph">James Kite 29:53<br>Yeah, I think I think it&#8217;s at least it&#8217;s kind of have been easy for me to be a bit forgiving in these contexts. Because once you understand the socio economic factors that are playing, like, economically, it&#8217;s better to be a guru than to give the tools out. Because economically, I can exploit people and they can pay me if I have all the answers. Or if I yeah, or even before that, right, in order to sell something to an organisation or corporate organisation, you have to speak in the terms of that&#8217;s going to yield return on investment. Right. So So all of that kind of work, where we&#8217;re in a context. So that context kind of shapes the ways in which we interpretate whatever tool we come across. So yeah. So it&#8217;s kind of, it&#8217;s kind of humorous to laugh at it, but it&#8217;s almost inevitable to see how, like, that&#8217;s going to be interpreted, you know? Yeah. And it&#8217;s Yeah, it&#8217;s a really fascinating game of how do we play within this context, but not succumb to the context? It&#8217;s that it? For me, it&#8217;s gonna go on? Oh,</p>



<p class="wp-block-paragraph">Bill 31:10<br>yeah. Yeah, yeah. And even when there&#8217;s no money involved, I mean, I&#8217;m a kind of product of the going tradition in lots of ways in terms of my meditation background, and that there is basically no money in that they keep it clean. You know, it&#8217;s donation only you can only donate if you&#8217;ve done a course. And so they&#8217;ve really managed, they&#8217;ve been really successful. And that, that aspect of it. Yeah. That beds, still it kind of, to my mind really suffers from that. atomization of people into kind of meditation</p>



<p class="wp-block-paragraph">James Kite 31:48<br>units. Yeah, I&#8217;d be interested to find out. How do you Why do you think why do you think it perpetuates itself? Even without like the explicit, like monetary exchange?</p>



<p class="wp-block-paragraph">Bill 32:01<br>Why do I think the going for institution has been successful? Do you mean?</p>



<p class="wp-block-paragraph">James Kite 32:06<br>Or like, the shortcomings as well?</p>



<p class="wp-block-paragraph">of like, yeah, how do we reproduce the same kind of traits of a monetary system, even when we&#8217;re not using money at times? that that kind of fascinates me? Huh?</p>



<p class="wp-block-paragraph">Bill 32:24<br>Yeah, I mean, I think it&#8217;s been successful because it works. On a basic level, that kind of meditation done in a high dose in a short space of time, like that. has generally incredibly powerful positive effects. Yeah. And people come out of it, and they&#8217;re just like, wow, that was the most life changing thing I&#8217;ve ever experienced. Take my money. Yeah. on that level, you know, it works. It it still. Yeah, I mean, the downsides are, it&#8217;s it&#8217;s a huge institution with that gets very set in its ways. And that&#8217;s kind of the nature of big institutions.</p>



<p class="wp-block-paragraph">Jasmine 33:02<br>I think what&#8217;s also like, as you said, though, like, if they didn&#8217;t give value, they know would come back, you know. And when someone has gifted you with a gift, it&#8217;s almost like, you just want to give them something back to like, just our search to show appreciation. So I think it just comes from that basic human fundamental of when we feel like we&#8217;ve been treated really well. We want to reciprocate in some way.</p>



<p class="wp-block-paragraph">Bill 33:35<br>Yeah, and that was the basis for all human exchange until just a couple of thousand years ago, there was no money. Exactly. It was all based on gifts. And I owe us for millennia.</p>



<p class="wp-block-paragraph">Jasmine 33:47<br>Yeah. And actually, more recently, I&#8217;ve been skill sharing with people. So I know that a lot of people have had changes in like circumstances, or their work situations that they might have a bit more time. And so I&#8217;ve been mentoring quite a few people in exchange for their maybe their skills in a particular area, which I can&#8217;t otherwise get. And that has been so wonderful how it&#8217;s happened organically. I think there&#8217;s been like, at least 10 different exchanges. And there&#8217;s also some of my friends, I have</p>



<p class="wp-block-paragraph">two friends who</p>



<p class="wp-block-paragraph">I know from good stead.com and it&#8217;s basically a volunteering platform where people can put up challenges. They&#8217;ve extended it now to just anyone. It used to be specifically for social enterprises to put up challenges. asking people for their help from like brainstorming to physical work or advisory related but They have been so successful actually during lockdown, because there are a lot of people who want to volunteer. And I&#8217;ve done a few myself, for example, one was writing a lesson to an elderly person, so they wouldn&#8217;t be lonely. And that really facilitates I think, community building as well. And I&#8217;ve got a few challenges for a new project that I&#8217;ve been working on. Which is like a self self love journey, in the process of love letters. And so many people have actually volunteered to help in specific realms that I&#8217;ve needed from video editing, to illustration to branding. It&#8217;s been incredible.</p>



<p class="wp-block-paragraph">James Kite 35:51<br>Wow. Yeah, please share that. That organisation, I&#8217;ll, I&#8217;ll dig up the show notes as well. Yeah, cuz I think a big a big part of kind of like, the challenge that I&#8217;m finding is also developing kind of</p>



<p class="wp-block-paragraph">authentic, collaborative relations.</p>



<p class="wp-block-paragraph">Like they&#8217;re not too contrived, like being able to have people on similar wavelength who want to collaborate, and really delve into, like the projects, rather than, like someone being a guest, or me communicating something to someone like, I kind of love the idea of kind of getting allies, right. Like people who we can work together, develop things and then go out into the world and, like, yeah, kickstart projects. Yeah, I think, I know, it&#8217;s that like a podcast format. But I&#8217;d love to hear the projects that you and Jasmine, are exploring. And yeah, I mean, what are the</p>



<p class="wp-block-paragraph">Jasmine 36:56<br>limited to it&#8217;s not limited this kind of like how we&#8217;ve structured the weekend. podcast, okay. We&#8217;ve just, it&#8217;s not so formal as it is just more conversational. But because he were, it was so interesting, some of the things you were saying. It became, I guess, more q&amp;a.</p>



<p class="wp-block-paragraph">Do you want to go back?</p>



<p class="wp-block-paragraph">Bill 37:20<br>Yeah, I mean, my I&#8217;m mostly awake in podcasts is the is the one kind of key project for me, I guess. Otherwise, I&#8217;m doing some collaborative music stuff online with last year, I worked on this amazing music app called Endlesss, which is kind of a collaborative platform. And I&#8217;m making music with with friends around the world on that. I&#8217;m putting an album together. I am learning. The moment I&#8217;ve got this ambition. I don&#8217;t know how far I&#8217;m going to realise it, but to learn like 3d stuff for the web, okay. I also pick up my keyboard skills. So you know, bits and bobs like that nice. Otherwise, my day job takes all my cognitive load. And by the end of the day sounds like a good healthy day job is an interesting once it&#8217;s kind of another collaborative platform. Okay, people used to put on virtual events. So I&#8217;m, I&#8217;m a designer working on that. And it&#8217;s great fun, there&#8217;s loads loads to do, but it&#8217;s a really, really cool platform to be working on.</p>



<p class="wp-block-paragraph">James Kite 38:34<br>That sounds like a nice very,</p>



<p class="wp-block-paragraph">Jasmine 38:37<br>actually, Bill, can you share a bit more about endler? I think actually, James would be interested in</p>



<p class="wp-block-paragraph">Bill 38:43<br>Endlesss. Endlesss is amazing. It&#8217;s the brainchild of a guy called Tim Shaw &#8211; stage name Tim Exile, who had a kind of maybe a decade or so in the music industry as</p>



<p class="wp-block-paragraph">James Kite 39:00<br>blue in exile is one of the album&#8217;s I think he&#8217;s done now. Is he like a music person?</p>



<p class="wp-block-paragraph">Bill 39:06<br>Yeah, it could be he was a drum and bass guy back in okay. He was on leaving shadow records.</p>



<p class="wp-block-paragraph">Anyhow, he got into he got into live improv and he toured the world as a as a Yeah. Electronic improvising musician, with this incredible rig that he built. And the Endlesss platform is kind of his his him and friends and myself for a while work to kind of get this interface into</p>



<p class="wp-block-paragraph">iPhone screen and make it a kind of multiplayer collaborative thing. So Wow, is now available now in the App Store. Coming soon to desktop, they just had an amazing Kickstarter that smashed all their expectations. So yeah, That&#8217;s a really fun thing I recommend having a play. Well, we&#8217;ll stick a link in the show notes, folks.</p>`},{id:4125,slug:"bill",title:"Hello World! 👋",date:"2020-09-17T21:25:26",formattedDate:"September 17, 2020",originalPath:"/2020/09/17/bill/",category:"blog",episodeNumber:null,audioUrl:null,remoteAudioUrl:null,originalAudioUrl:null,audioType:null,audioLength:null,duration:null,featuredImage:null,excerptText:"Hello friends! Welcome to the family. Bill and I aim to write to you every so often like how a relative might reach out to stay in touch. Some periods more than others. We hope you might write back too :) It might get a little lonely us writing to your inbox without hearing from you occasionally. Some things you might write back about: Who you are and where you listen in…",excerptHtml:"<p>Hello friends! Welcome to the family. Bill and I aim to write to you every so often like how a relative might reach out to stay in touch. Some periods more than others. We hope you might write back too :) It might get a little lonely us writing to your inbox without hearing from you occasionally. Some things you might write back about: Who you are and where you listen in…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">Hello friends!</p>



<p class="wp-block-paragraph">Welcome to the family.</p>



<p class="wp-block-paragraph">Bill and I aim to write to you every so often like how a relative might reach out to stay in touch. Some periods more than others. We hope you might write back too :)</p>



<p class="wp-block-paragraph">It might get a little lonely us writing to your inbox without hearing from you occasionally.</p>



<p class="wp-block-paragraph">Some things you might write back about:</p>



<ul class="wp-block-list"><li>Who you are and where you listen in from</li><li>Sharing a little about your interests about consciousness, meditation and / or well-being.</li><li>How you stumbled upon Awake-In</li><li>One fun fact about yourself! 🤗</li><li>Your favourite thing about lockdown<br>/ anything else, not with these prompts</li></ul>



<p class="wp-block-paragraph">We shall begin first to properly give a little introduction.</p>



<h3 class="wp-block-heading">Jasmine</h3>



<p class="wp-block-paragraph">In a mixed order, I&#8217;ll answer the above:</p>



<ul class="wp-block-list"><li>I see myself as a striving modern day renaissance lady; fascinated by so many things &#8211; so how can I fit them all into my life?</li><li>I feel that formal meditation helps me to be in peak form for navigating life. Meditation through journalling and other practices open me up to deeper self-awareness which I highly value. My current greatest use for it is energy-maximisation, essential for doing more in the day.</li><li>Well-being has been a side product through practice and I revel in the nuggets I receive, though holistic health over this lockdown period has become really dominant for me. Diet and cleanses, gut health, sleep, yoga, energy cycles and the power of ceremony.</li><li>The lockdown experience for the most part has felt like a much needed retreat, with time to close old stories, bring healing and jump into invigorating starts.</li></ul>



<h3 class="wp-block-heading">Bill</h3>



<ul class="wp-block-list"><li>Like Jasmine I have lots of interests. I may also be borderline autistic, but I like to think I&#8217;m high-functioning.</li><li>Meditation means more things to me now than it used to. It&#8217;s an anchor back to the present, and a way to keep focused, manage my temper, and live with a clear(er) mind. It&#8217;s a deep breath that stills an argument. It&#8217;s just knowing you&#8217;re alive. Sometimes it means much more than this.</li><li>Lockdown has been tough for me to be honest &#8211; I work at home with my family, and now we never get a break from each other!  I&#8217;m trying to see silver linings, and there are a few.</li></ul>



<p class="wp-block-paragraph">So. That&#8217;s it from us. We hope you&#8217;ll say hi. We hope the podcast is interesting and fun to listen to &#8211; it&#8217;s been loads of fun to make it!</p>



<p class="wp-block-paragraph">All the best, wherever you are.</p>`},{id:4157,slug:"episode-6-getting-started-with-meditation",title:"Episode 6 – Getting started with meditation, with Liam Chai.",date:"2020-09-17T20:48:32",formattedDate:"September 17, 2020",originalPath:"/2020/09/17/episode-6-getting-started-with-meditation/",category:"podcast",episodeNumber:6,audioUrl:"/wp-content/uploads/2020/podcast/episode-06-getting-started-01.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-06-getting-started-01.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-06-getting-started-01.mp3",audioType:"audio/mpeg",audioLength:160474560,duration:"1:06:52",featuredImage:"/wp-content/uploads/2020/10/Untitled_Artwork-scaled.jpg",excerptText:"Thinking about starting to meditate? The good news is you do already! Meditation is an innate ability we all share. We’re joined again by…",excerptHtml:"<p>Thinking about starting to meditate? The good news is you do already! Meditation is an innate ability we all share. We’re joined again by…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">Thinking about starting to meditate? The good news is you do already! Meditation is an innate ability we all share. We&#8217;re joined again by our friend Liam Chai for a philosophical, wide-ranging chat about the many ways people meditate, and the various ways you can learn to deepen your practice &#8211; everything from 2 minute breathing exercises from apps to week long silent retreats.</p>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>
</div>



<h4 class="wp-block-heading">Links</h4>



<ul class="wp-block-list"><li>⏳ Recommended app &#8211; <a href="https://insighttimer.com/" class="ek-link">Insight Timer</a></li><li>☀️ Liam&#8217;s site &#8211; <a href="https://www.liamchai.com/" class="ek-link">liamchai.com</a></li><li>😉 &#8216;The Goenka gang&#8217;  &#8211; Silent vipassana meditation retreats somewhere near you- <a href="http://dhamma.org" class="ek-link">dhamma.org</a></li></ul>



<h6 class="wp-block-heading">Books</h6>



<ul class="wp-block-list"><li><a href="https://www.goodreads.com/book/show/635454.Meditation_Made_Easy" class="ek-link">Lorin Roche &#8211; Meditation made easy</a></li></ul>



<p class="wp-block-paragraph">We&#8217;re on Youtube too 😄</p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Getting Started with Meditation - with Liam Chai. Awake In Episode 6" width="1290" height="726" src="https://www.youtube.com/embed/wR2DapZgNzM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>



<h4 class="wp-block-heading">Transcript</h4>



<p class="wp-block-paragraph">An experiment this episode &#8211; rather than type up timings and notes, we&#8217;ve run the audio through a transcriber app. It&#8217;s not entirely accurate, but hey you get the whole text and we were able to release the episode now rather than &#8220;when we have time to do the notes&#8221; What do you think? Also: any volunteers to do show notes for us? 😄</p>



<p class="wp-block-paragraph">Bill 0:08<br>So we&#8217;re here today to talk about getting started with meditation.</p>



<p class="wp-block-paragraph">Perhaps I could ask you to kick off live as a show guest today.</p>



<p class="wp-block-paragraph">Liam 0:26<br>Okay.</p>



<p class="wp-block-paragraph">I was your show guest last week too!</p>



<p class="wp-block-paragraph">Bill 0:33<br>Because we love you.</p>



<p class="wp-block-paragraph">Liam 0:37<br>Yeah, I think it&#8217;s a</p>



<p class="wp-block-paragraph">it&#8217;s a relevant theme for me at the moment. I feel like I don&#8217;t know about the two of you. But I, I definitely come in. I think going in ways I think recently with my own practice. You know, there&#8217;s like, these periods of like, pretty intense, daily practice, especially on on retreat. But then I think after coming, I remember one time being on retreat. It was like a short weekend retreat. And someone was, yeah, he said, Oh, it was my first retreat that I went on. And, you know, I wasn&#8217;t, he was like, I wasn&#8217;t drinking alcohol. I wasn&#8217;t eating all this junk food. And I was meditating all the time on this retreat. And then he said, the first thing he did when he came back to is, you know, came off of retreat and back home. He said, he just he just binge on everything. He was like drinking, he was eating junk food. And he was like, just going in reverse. And, yeah, I feel like there&#8217;s this sort of similar cycle that plays out, you know, yeah, from like, really intense practice. And then after that, it&#8217;s kind of really, there&#8217;s not bothering and stepping away from the practice. And now, yeah, you know, so I feel like this podcast is. Yeah, it&#8217;s almost like a signal. Okay, it&#8217;s time to like, get back into the practice some more. So, it&#8217;s a good topic. I</p>



<p class="wp-block-paragraph">Jasmine 2:08<br>actually thought about that. Exactly. today. I was thinking if we&#8217;re having on it on the, on the desk, we&#8217;re talking constantly about meditation, it&#8217;s absolutely vital that our practices solid. So I completely agree with</p>



<p class="wp-block-paragraph">Bill 2:25<br>you. Yeah, I would add to that, that, it&#8217;s, I don&#8217;t know, formal practice is a thing, right. And we all get kind of a bit attached to it. I think that, oh, you know, I&#8217;ve done my meditation today, I&#8217;m fine. You know, everything&#8217;s cool. Or, like, Oh, I haven&#8217;t, you know, I&#8217;m a bad person. And I&#8217;m slacking on my journey. And I&#8217;m trying to make more space in life for just to acknowledge all the other kinds of meditation that I do as well, you know, like, just just sitting in a bath. And that&#8217;s, that&#8217;s been, I&#8217;m starting to sort of understand better how big a thing that is for me, that I can just sit in a sandbox with no, nothing, you know, that I sort of make a mini ritual out of it. And I will have nothing added to that I don&#8217;t bring a book. I mean, some people do, and that&#8217;s fine. But I just don&#8217;t bring a book, I just stare at the wall, basically. And sometimes I&#8217;ll change the lights and make it kind of real dark. And I just, and that&#8217;s, that&#8217;s my meditation. And, and that&#8217;s fine. Like, what, you know why devalue it, because I didn&#8217;t do like a formal practice.</p>



<p class="wp-block-paragraph">Jasmine 3:41<br>So I think, you know, when you start doing a ritual like that, so ritual being something new take on quite regularly. That begins to open up the scope for it being a formal practice. And that sounds because, yeah, it takes on another element every time you do. And I think exactly that. How we see four practices only just setting but I was speaking to</p>



<p class="wp-block-paragraph">someone said the other day, where</p>



<p class="wp-block-paragraph">even just like movement based practices aren&#8217;t even acknowledged as much. So let&#8217;s say yoga or Tai Chi or even just walking, but we would say that would be like walking practice, you know, rather than like a sitting practice, which everyone thinks to be a bit more like for warm sometimes. So the more that we can expand the scope of what we allow ourselves and give ourselves permission to say, Okay, well, this is me still practising meditation, because I&#8217;m completely absorbed in the present here. I think that&#8217;s enough. And that in itself is a practice. For us to keep</p>



<p class="wp-block-paragraph">bringing home.</p>



<p class="wp-block-paragraph">Bill 5:06<br>Yeah, yeah. I</p>



<p class="wp-block-paragraph">Liam 5:08<br>mean, I think the whole point of formal practices, so that it just spews over naturally into informal practice. And I think, yeah, when Bill when you were saying about how you&#8217;re, when you&#8217;re just taking a bath, I feel like those are, those moments are almost like the fruits of meditation, where it&#8217;s, you know, you just have these, these moments of spaciousness, and you can kind of allow yourself to just be I, yeah, I hear a lot. Yeah, teachers kind of recommending when, when people will do their first like, solitary retreats, to, to not try to pack like, really pack the scheduled in with, like a routine or like, you know, saying, okay, nine to 10, I&#8217;m going to have meditation and then 10 to 1030, I&#8217;m going to be doing some reading, to just not really try to fill the schedule, but to just have a lot of this empty time where, you know, where you can just just be without any formal practice going. And then even that, in some ways, is a Yeah, I mean, it&#8217;s definitely a practice. Maybe it&#8217;s not formal, but it&#8217;s it&#8217;s still practice.</p>



<p class="wp-block-paragraph">Bill 6:24<br>Yeah, yeah. Nice. That it&#8217;s interesting in it, the kind of attitude to meditation. And I mean, there&#8217;s a there&#8217;s a lovely book. Um, I think we mentioned Lauren Roche. Last time we talked. It&#8217;s called meditation made easy. So good. It&#8217;s a it&#8217;s a funny one, right? That title is really off putting, if you&#8217;ve done, you know, retreats and stuff, you&#8217;re like, Oh, yeah, whatever. It&#8217;s some sort of kiddie thing. But actually, like, a lot of the book is just about attitude towards it. And let me let me read a little bit here, because there&#8217;s a lovely passage that just sort of keep I keep coming back to recently. It he&#8217;s saying that, yeah, meditation is an activity of your total being, and you cooperate with it. Your contribution is to create conditions under which it can happen. You are inviting meditation to happen, by the way you pay attention. When you take this approach, not only is meditation easy, it is effortless. And I mean, that That, to me, just it&#8217;s a completely different perspective on how I learned meditation, because I learned it in a very formal way with the mostly via the Goenka.</p>



<p class="wp-block-paragraph">Let&#8217;s not call it a cult. Gang.</p>



<p class="wp-block-paragraph">You know, and it, I owe them everything on that level. It was it was very useful to me to learn via that route. But I&#8217;m, you know, I&#8217;m realising more and more that that&#8217;s not the only route. And there&#8217;s the Actually, it&#8217;s almost like that route is okay, now sit down and meditate, you know, do this, do that. Now you&#8217;re meditating, you know, and look at the fruits you have gained. But actually, there&#8217;s, there&#8217;s, you can&#8217;t really, like, do meditation. Meditation, does you? Yeah. Oh, you can actually do is kind of open the door to it make space for it?</p>



<p class="wp-block-paragraph">Liam 8:40<br>Yeah, for sure. I, there&#8217;s actually</p>



<p class="wp-block-paragraph">I remembered hearing about these two umbrella terms for the different schools within, within Buddhism. Hmm, so one, one being like this, they call it the developmental approach to Buddhism. And then the other one being this more discovery approach. And I think that&#8217;s quite a nice because a lot of people will probably only ever come across this developmental approach where it&#8217;s okay. You have to really strive you have to really work hard and cultivate, cultivate, cultivate. But then the other side of the school is the other school is. Yeah, it&#8217;s about it&#8217;s just this deeper, deeper, deeper relaxation and kind of recognising that there&#8217;s nothing to do you know, that you can&#8217;t actually meditate. And so they practice non meditation, and there&#8217;s all these different kind of language that&#8217;s used. And I think according to people&#8217;s personalities, they might gravitate towards one or the other.</p>



<p class="wp-block-paragraph">Bill 9:45<br>I love that. Wow, the discovery approach.</p>



<p class="wp-block-paragraph">Jasmine 9:48<br>So if it&#8217;s not so much taught this kind of discomfort discovery approach, how earlier might you suggest if someone listening what you just Said piqued their interest, how would you? Why would you send them to go such? Oh,</p>



<p class="wp-block-paragraph">Liam 10:14<br>yeah, I guess it depends</p>



<p class="wp-block-paragraph">how much they, yeah, how in depth they want to go? Because? Yeah, especially if this podcast is about getting started with meditation. I&#8217;m not exactly sure because I think a lot of the Yeah, I mean, so just within Buddhism, the schools generally that kind of favour the discovery approach would be like. So like within like, even like within Tibetan Buddhism, it&#8217;s kind of split between those two approaches. So like, the nygma School, when xop Chen, within Tibetan Buddhism are quite discovery approach, and in Zen is also pretty</p>



<p class="wp-block-paragraph">skewed towards more discovery rather than</p>



<p class="wp-block-paragraph">developmental, but probably that&#8217;s a big, you know, I don&#8217;t know if those just those topics in general are helpful.</p>



<p class="wp-block-paragraph">I find I think it&#8217;s just more</p>



<p class="wp-block-paragraph">of focus on relaxation, as opposed to</p>



<p class="wp-block-paragraph">I guess maybe this is wrong, wrong definition of concentration is having to really put effort in</p>



<p class="wp-block-paragraph">is probably the good place to start.</p>



<p class="wp-block-paragraph">Bill 11:38<br>Hmm.</p>



<p class="wp-block-paragraph">Jasmine 11:40<br>Do you have anything so not one?</p>



<p class="wp-block-paragraph">Bill 11:42<br>Yeah, I mean, I think that perhaps the the, the sort of challenge with taking a discovery approach is that it&#8217;s it&#8217;s an intuitive kind of form that didn&#8217;t really suit monastic training much. And, and most of the sort of meditation traditions that we we get from the east that we we are learning today are you know, that there were basically designed to keep 18 year old boys in line. So they didn&#8217;t like, you know, cavort with the girls in the local village. So it was all about discipline, and, and, you know, hard training and you know, like this, this very, because you can&#8217;t have the boys cavort with the local girls, because then the villagers come and burn down your monastery when one of them gets pregnant. And yeah, you know, that that&#8217;s, that&#8217;s like 90%, of why the monastic trainings are like they are from, from what I&#8217;ve learned about it, that, you know, that there&#8217;s very strict rules, because you can&#8217;t have those young lads mucking about. And you have to train them, like, it&#8217;s a military school, basically, or you&#8217;ve got trouble everywhere, and your ministry gets burned down.</p>



<p class="wp-block-paragraph">Jasmine 13:15<br>I think also, just in the same way, like, if there isn&#8217;t a set, like curriculum, it might be a bit more difficult to teach someone something.</p>



<p class="wp-block-paragraph">Especially if discovery is</p>



<p class="wp-block-paragraph">maybe a bit more like looser, maybe the approach to have something more rigid, is easier for</p>



<p class="wp-block-paragraph">just to contain, and a space to.</p>



<p class="wp-block-paragraph">Bill 13:45<br>Yeah, I think that&#8217;s the kind of the classic thing of pedagogy or whatever, you know, this the traditions of teaching have generally been very sort of top down militaristic styles of training, because that&#8217;s, that&#8217;s the easiest thing to do. When you&#8217;ve got lots of young people you want to you want to keep in line and, and you know, train in a certain way. And most education was built to sort of provide useful clerks and soldiers for empires. That&#8217;s like that, you know, he was either keeping monasteries in line or later on, you know, this, this this sort of model of teaching that we got from from Prussia was all about building an empire and a military. So yeah, it&#8217;s obviously much harder to do individualised or at least it&#8217;s a completely different mindset. I don&#8217;t know if it&#8217;s much harder, really, because yeah, no one&#8217;s done it much in finances, and you. Sorry, go ahead</p>



<p class="wp-block-paragraph">Jasmine 14:42<br>in Finland, in that educational system, so they allow the youth to choose what they want to learn. And it&#8217;s much more discovery based.</p>



<p class="wp-block-paragraph">Bill 14:56<br>Yeah, I hear lots of great things about Scandinavian education. Much But yeah, yeah, so I don&#8217;t really know like, the only people I do know who are talking about this in my mind and my limited research so far people like Lauren Roche and he who just really stressed that it if you I mean, he came to this position over many many years of being a kind of counsellor for people who meditate and and he would sit and listen to them for that for hours and and help them understand what was working and what wasn&#8217;t in that current practice. And his take on it was well actually it&#8217;s, it&#8217;s the people who tend to do best are the ones who are not kind of following some rigid formula.</p>



<p class="wp-block-paragraph">Jasmine 15:51<br>I also think, from who I know, Sarah Blondin, she&#8217;s probably not someone who would be mentioned very often in the meditation space. Not because she isn&#8217;t a great meditation teacher in her own right, she&#8217;s actually very famous on places like insight timer. But it&#8217;s just that the style in which she helps others learn is through almost poetic speech, and guiding one home to themselves. And then that&#8217;s where she leaves them. So she makes an environment which is conducive to be relaxed and be effortless, in and she&#8217;s like, a sister. I&#8217;ve never had, you know, she&#8217;s helped me through such difficult times. And it&#8217;s, yeah, it is difficult to say that it will definitely be meditation that four sets, but she does like we like, of course, though, set, but it&#8217;s just a completely different mindset was which we said.</p>



<p class="wp-block-paragraph">Bill 17:14<br>Nice.</p>



<p class="wp-block-paragraph">Jasmine 17:15<br>Yeah. So I would recommend her as someone if anyone&#8217;s listening. So we can post that are after?</p>



<p class="wp-block-paragraph">Bill 17:23<br>Yeah.</p>



<p class="wp-block-paragraph">Liam 17:24<br>Yeah, I, I think</p>



<p class="wp-block-paragraph">another another way, I&#8217;ve, I&#8217;ve seen that distinction between development when discover is, is usually people start with developmental get, because it kind of also makes sense. When you just think about any new skill, you&#8217;re kind of acquiring, whether it&#8217;s piano or, you know, another instrument, there&#8217;s this initial phase of, okay, you have to kind of be quite, you know, you have to put in quite a lot effort to, to really get going. But then once you&#8217;ve kind of got past that stage, then actually to continue progressing, you kind of actually want to just relax more, and let this sort of let all of that practice that you&#8217;ve done initially, kind of take over so that the practice starts to just have its own momentum, and it becomes more and more this effortless way of just being. And so I feel like there&#8217;s a similar progression in a lot of how these you know, traditional meditation schools would teach the practice where, yeah, in the beginning, say, okay, really strive diligently. And as you kind of get that discipline over and done with and they focus more on the Okay, now just drop everything and relax and</p>



<p class="wp-block-paragraph">Jasmine 18:45<br>forget everything you learned.</p>



<p class="wp-block-paragraph">Bill 18:50<br>There is no try.</p>



<p class="wp-block-paragraph">Jasmine 18:52<br>Yeah, I think that it&#8217;s true for to say, this was anything as you said, like piano. But let&#8217;s take are all of the most famous artists had, generally, a really, really strong background in formal technique to take fun golf, or you take Picasso, each one of them in their earliest drawings, you see that they can depict real life. Exactly. But then after, what you want to do with it is completely up to you and your choice. So, yeah, for anyone who definitely learns a skill, you do make it your own. And, yeah, I think that&#8217;s very similar.</p>



<p class="wp-block-paragraph">Bill 19:52<br>Liam, I&#8217;m curious to know, I mean, have you do people ask you how to get started? Meditation. What do you tell him? Um,</p>



<p class="wp-block-paragraph">Liam 20:08<br>I think what we&#8217;ve been covering so far about, yeah, this more this folk, the attitudes are definitely important. And yeah, I mean, I guess general tips with that, that I, you know, I also tend to I definitely follow these in the beginning, and I still do for the most part would be things like, you know, yeah, like a 10 second formal practice is actually fine. And I sometimes do that where, okay, if I&#8217;ve had a really hectic day and I haven&#8217;t been able to sit like a fool, you know, whether it&#8217;s 20 minutes or four hours, something like that. I&#8217;ll just do I&#8217;ll just set a timer for like a minute. Or even less sometimes and, and that&#8217;s it like, and then I eat because I think it&#8217;s also important to to get that streak, I feel like there&#8217;s something about that continuous streak, even if it&#8217;s just a 10 second formal practice, that can be really helpful for maintaining that habit. And yeah, so that&#8217;s kind of what I like to do with keeping it just super minimal.</p>



<p class="wp-block-paragraph">Jasmine 21:21<br>I actually love that. And I definitely stress to newer students that I teach that sometimes. So it&#8217;s from, I think I initially learned this one from charming tan, who was the original founder of Search Inside Yourself. And he said to his friend, he wants to learn how can I start, and he just said, just do it by taking one full present breath. And so his friend started doing this. But being an overachiever, he just started, you know, increasing that momentum. And I, I think, what you say them about having a streak or how I might put it as like, just being able to maintain this habit, in whatever sense, like however short it is, it doesn&#8217;t matter. So that as we build momentum, the time doesn&#8217;t really matter. And it&#8217;s much easier to increase time, after something has already become quite habitual. It&#8217;s really the same essence of like, when you first start teaching a child to brush their teeth, like they don&#8217;t like it, like, you know, sometimes they&#8217;ll just like run away and go to bed before but that daily, two minutes of brushing their teeth, twice a day accumulates is so much The difference being that if they, they, I think I&#8217;ve worked out the one the other weeks, that it&#8217;s about like 65 minutes or something a month. So if you went for like a regular teeth clean, that&#8217;s about a similar time, but your teeth would be absolutely ruined by them. Or if you look at it in another sense, how doing very little frequently makes a massive difference is how I like to see it. Yeah, and it&#8217;s the same, I think, for meditation practice.</p>



<p class="wp-block-paragraph">Liam 23:35<br>Yeah, there&#8217;s a, there&#8217;s a great</p>



<p class="wp-block-paragraph">I think he has an email course now called tiny habits. I don&#8217;t know if the two of you have heard of that. But it&#8217;s just great. I mean, it&#8217;s not meditation specific, but just the Yeah, the the lessons on habit formation and actually how to form a habit through these like, yeah, these tiny behaviour changes. is gold. It&#8217;s Yeah, it&#8217;s a great, great resource.</p>



<p class="wp-block-paragraph">Jasmine 24:08<br>I think that&#8217;s the number one</p>



<p class="wp-block-paragraph">question that I get, they say, Okay, well, now I know, like this plethora of different meditation techniques, I just find it very difficult now to remember to have to do it. So it&#8217;s often the, when you remember, then you can do your one minute, you know, like, but when you first start something, sometimes it needs that formality so that you can come back to it. And often they say with new habits, to link it on to something you already do as a habit, so that you can remember. So if it&#8217;s brushing your teeth, then you might just stand for a minute and you might just take a breath or If you come home and the first thing you do is put down your keys, you might just stand there a lesson longer to</p>



<p class="wp-block-paragraph">bring yourself back into</p>



<p class="wp-block-paragraph">a state where you like have put work away. So I think that habit attachment is very, very helpful.</p>



<p class="wp-block-paragraph">Bill 25:27<br>Nice.</p>



<p class="wp-block-paragraph">Jasmine 25:29<br>So maybe we can have a little brainstorm now, maybe coming up with a few of when you might do that to a habit.</p>



<p class="wp-block-paragraph">Anyone want to go?</p>



<p class="wp-block-paragraph">Bill 25:45<br>Yeah, I mean, it could be as simple as, you know, having a lie down. Lie you say after work, just just low on the floor? And, you know, put your knees up, stare at the ceiling? Five minutes, that kind of thing? Yeah. Yeah, we&#8217;re off to a bath. You know, just just take a moment to breathe and let your thoughts run wild.</p>



<p class="wp-block-paragraph">Liam 26:13<br>Yeah, in the tidy habits. course, they talk about recipes, that you can create these recipes. Where? Yeah, you find like, after I take my first bite of breakfast, I will take one mindful breath. So that&#8217;s like a tiny habit recipe. I think there&#8217;s Yeah, I mean, because there&#8217;s so many of these, some of them also quite unconscious habits that, that I you know, that I know, I have as well. That I can probably link with a new practice. And some of them like just super simple, like, when I leave the front door, you know, send loving thoughts to, to friends, you know, something like that.</p>



<p class="wp-block-paragraph">Jasmine 27:06<br>Yes.</p>



<p class="wp-block-paragraph">Or as you end on the way to work, even though there&#8217;s lots and lots going all the way to work anymore. As soon as you see someone, the first person you see, you send them a warm wish. Or you can do it to your entire train or bus, whoever is on there.</p>



<p class="wp-block-paragraph">Bill 27:30<br>Nice.</p>



<p class="wp-block-paragraph">So, I&#8217;m getting started with meditation helped me out here.</p>



<p class="wp-block-paragraph">Jasmine 27:46<br>I often say, initially, actually, what is the function that you want to have, because there are so many different meditative practices, what is most important to you. So someone might come to me saying like, they&#8217;re often really stressed out. So they just want to calm down a bit more than they want to relax. Others might say they want to focus better. Others say they</p>



<p class="wp-block-paragraph">maybe want to be more skillful with other people.</p>



<p class="wp-block-paragraph">Others just might say, for general health or just for clarity. So I might push them into a direction to say, Okay, well, this exercise might be helpful for you to initially start exploring with and see how you go with that. And then often, just though, they might come back and then develop further on what they might have found difficult or what they, what other exercises might suit them to within this same sphere. Nice. So I think it really depends. And, and maybe we can either write out some later on or Yeah, so for example, for a concentration practice, you can just do simple breath work either counting to 10. Or you might be just noticing sensations within a particular part of the body. Or just feeling and recognising the flow of your breathing in the form of sensations, you know, something very, very simple, just to begin. If you might be doing clarity, I might even say, suggest a journaling practice. Just free flow of like a mind. Just allowing for five minutes, continuous writing. Don&#8217;t like, don&#8217;t stop at all. And if you have nothing to write, just keep racing. I didn&#8217;t know what to write. I don&#8217;t know what to write, I didn&#8217;t want to write, and then reading it over. And a lot of the time, when it&#8217;s on the page, you get a lot of a lot more distance and perspective from it. For what else is there? Well, as I mentioned, loving kindness if you want to have more skillful relations with others, so sending out warm wishes, also, just maybe bringing that within yourself as well. So even loving kindness to oneself first, before actually sending that out to others. And another practice, which is like seeing similarities in them. So Bill has a mind just like me. Or bill likes tennis just like me. Although, yeah, so the more that we see similarities, the more that we can start associating the other person as being like us, and when we put them in our in Group B can empathise with them better? So I think if anyone listening has a specific function or particularity as to why they might want to begin meditating, then I think send them in and we can post some stuff out.</p>



<p class="wp-block-paragraph">Bill 31:27<br>Yeah, yeah. Yeah, that&#8217;s a great idea. Get do get in touch with, we&#8217;re happy to help we can cover in another episode. And all right, back to you. Sure.</p>



<p class="wp-block-paragraph">Liam 31:37<br>Yeah. That&#8217;s great. I wanted to also add about the loving kindness practice. I, I, I, I believe there is actually there was a study it was trying to ask, it was asking what what was the, like, what practice would yield, you know, like, the fastest results. And I think one of them was was, was actually loving kindness in the sense of how quickly beginners would experience some benefit from the practice. And, and I&#8217;ve actually noticed this on like, just like beginner retreats that I&#8217;ve run, the the one that the practice that people seem to kind of just really have this like, like, Whoa, that was like, you know, something different that I really felt something change. This is usually the loving kindness or Yeah, the meta metta practice. And now it was funny that I ended up coming across that study that said, I I really, I can&#8217;t remember it off the top of my head. But it was something about change. I</p>



<p class="wp-block-paragraph">Jasmine 32:39<br>think that&#8217;s under Tanya singer.</p>



<p class="wp-block-paragraph">Liam 32:43<br>Possibly, I&#8217;ll have to dig it up. But you might know motors.</p>



<p class="wp-block-paragraph">Jasmine 32:48<br>So actually, under her work, she is so like, her work is fascinating. And she basically did different studies on how, like, what do we notice, actually, different meditation practices give different results. And I think for compassion training, loving kindness actually had the most impact in developing compassion, but also sense of awareness, bodily and greater self awareness. And then also, I think, to overall, yes, so overall, long term health, it also had the most benefits. And they looked at, I think, just simple concentration practice. I think body scan and</p>



<p class="wp-block-paragraph">loving kindness.</p>



<p class="wp-block-paragraph">So compassion training actually has a lot of benefits within it. So it&#8217;s like three in one combo.</p>



<p class="wp-block-paragraph">Bill 33:56<br>Leah, I&#8217;m curious to know, like, what, what stage of retreat? were you doing that practice on? Or was it was it a short thing? Like, how did that work? With the loving kindness?</p>



<p class="wp-block-paragraph">Liam 34:10<br>Yeah, oh, the example I brought up was was with like, yeah, I organise a few of these beginner retreats for mainly just for friends. So there were like, 15 of us that would kind of get introduced to mindfulness and mindfulness related practices. And that was just the one night I noticed that people would comment and say, Wow, yeah, that loving kindness practice that really kind of shifted something in me. You know, after that one that first day and usually it was like complete beginners who would come across that practice. And so</p>



<p class="wp-block-paragraph">Bill 34:48<br>right, so are we doing it like at the end of the first day, or I&#8217;m just trying to get this?</p>



<p class="wp-block-paragraph">Liam 34:53<br>Yeah, usually at the end of Yeah, it&#8217;d be like, I&#8217;d usually teach something like mindfulness of breathing first, and then offer that loving kindness practice.</p>



<p class="wp-block-paragraph">Bill 35:05<br>Nice. Yeah, yeah.</p>



<p class="wp-block-paragraph">I used to notice I&#8217;m going to retreats. I mean, it&#8217;s taught at the end of the course. But it&#8217;s such a kind of relief. Yeah, absolutely. Yeah. So practice</p>



<p class="wp-block-paragraph">Jasmine 35:18<br>is actually interesting the different contacts with, in which this practice when it actually is taught in, for example, or corporate context. And for many different teachers that I know, people don&#8217;t actually want to go to that space, like, yeah, maybe in a retreat space, it&#8217;s different, like you&#8217;re more open to it, you know, that maybe something out of your comfort zone might come up, or maybe you&#8217;re just a little more willing. But in a corporate environment, they don&#8217;t actually like, oftentimes,</p>



<p class="wp-block-paragraph">Liam 35:53<br>they just call it &#8211; love is always</p>



<p class="wp-block-paragraph">Bill 36:02<br>a funny little thing on on this corporate office yesterday, this guy, Cory Doctorow, in the introduction to his his great book, called in real life, he describes the corporate office as, like a really boring role playing game, like cosplay. This sort of structure where you have to limit your, your speech, your feelings, your dress, all in all, in kind of line with some sort of mid 20th century ideal of what an office worker does and feels and thinks.</p>



<p class="wp-block-paragraph">Liam 36:42<br>Yeah, but I think it&#8217;s a good point that you raise about people&#8217;s perception, especially corporate cultures perception on on Yeah, just the word love. You know, I wonder whether any, any mindfulness teachers have had success in maybe even renaming that practice to not include the word love. And, you know, because they&#8217;re just wait, I feel like, Maybe, yeah, Chad. Chad Ming had something like that, where he was like, just wish two people? Well, we&#8217;ll just have think, yeah, I think well, about two people. Right? Yes. 10 second purpose.</p>



<p class="wp-block-paragraph">Jasmine 37:17<br>Yeah, wishing them well. Yeah.</p>



<p class="wp-block-paragraph">Liam 37:19<br>And you don&#8217;t even have to use the word love. And yeah, so maybe that&#8217;s a way to kind of jump into the</p>



<p class="wp-block-paragraph">Yeah, job pass the corporate sort of filter.</p>



<p class="wp-block-paragraph">Jasmine 37:31<br>Yeah. And also, when you name it, like compassion practice as well. At least it&#8217;s like a more for more time where you know that you&#8217;re just trying to help someone else out? It&#8217;s not like loving kindness, which maybe has, I don&#8217;t know, different connotations in people&#8217;s minds.</p>



<p class="wp-block-paragraph">Bill 37:49<br>Yeah, it&#8217;s a tricky one, isn&#8217;t it? I mean, the language of these things matter doesn&#8217;t mean any of the things that we have in the West, exactly. As I understand that, it&#8217;s kind of like, yeah, it&#8217;s kind of like a universal love practice. But you know, it all of it just sounds like hippie nonsense, especially if you&#8217;re in the corporate world.</p>



<p class="wp-block-paragraph">Jasmine 38:12<br>And as a last thing, I might say about someone developing a practice. So there are a huge range of apps out there. And in my opinion, some of acids and others. I would recommend for someone insight timer, before I recommend any others. And the reason being is that there are so many</p>



<p class="wp-block-paragraph">great meditation teachers out there freedy.</p>



<p class="wp-block-paragraph">And so you can really come to understand different types of four practices. And even just your connection to a teacher, I think, is really important. And just the perception of, if you like, their voice or not, you know, more superficial things that just can help if they have a nice voice and be like that. Yeah. And because they have like, 10s of thousands of meditations freely. There&#8217;s ever something for everyone from like kids to if you are looking at more spiritual based practices, to more like secular or even corporate practices, like the entire range is on there. And it&#8217;s well reviewed and rated. So it&#8217;s not as prescriptive as other apps where they have only one or two teachers. And you also have to pay.</p>



<p class="wp-block-paragraph">Bill 39:50<br>Yeah,</p>



<p class="wp-block-paragraph">Liam 39:51<br>yeah. Inside time is great. It&#8217;s also got the I just love the like the little bar charts, you get for tracking you can get definitely just that gamified aspect I find quite useful for Yeah, just whether it&#8217;s maintaining the streak or like, Oh, yeah, I gotta get another couple of like another hour this week to hit my talk. It&#8217;s kind of</p>



<p class="wp-block-paragraph">&#8230; this is all we got for free from Otter. You&#8217;ll have to listen to the episode for the last 20 minutes! 😄</p>`},{id:4064,slug:"episode-5",title:"Episode 5 – “Going off script” with Liam Chai",date:"2020-09-07T16:36:36",formattedDate:"September 7, 2020",originalPath:"/2020/09/07/episode-5/",category:"podcast",episodeNumber:5,audioUrl:"/wp-content/uploads/2020/podcast/episode-05-Liam-04.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-05-Liam-04.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-05-Liam-04.mp3",audioType:"audio/mpeg",audioLength:163447680,duration:"1:08:06",featuredImage:"/wp-content/uploads/2020/09/liam-chai.jpeg",excerptText:"Really enjoyed this conversation with ‘Awake In’ friend and marathon meditator Liam Chai. Be warned: The conversation is wide ranging and includes all kinds…",excerptHtml:"<p>Really enjoyed this conversation with ‘Awake In’ friend and marathon meditator Liam Chai. Be warned: The conversation is wide ranging and includes all kinds…</p>",featuredExcerptHtml:"<p>Really enjoyed this conversation with ‘Awake In’ friend and marathon meditator Liam Chai. Be warned: The conversation is wide ranging and includes all kinds…</p>",contentHtml:`<p class="wp-block-paragraph">Really enjoyed this conversation with &#8216;Awake In&#8217; friend and marathon meditator Liam Chai. Be warned: The conversation is wide ranging and includes all kinds of risky subjects like: 🔥 Kundalini awakening on retreat, 🕊 spiritual bypassing, 🦖 and secret dinosaur civilizations.</p>











<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>
</div>



<h3 class="wp-block-heading">Topics</h3>



<ul class="wp-block-list"><li>1:00 Intro to Liam and going &#8220;off script&#8221;</li><li>1:40 How me and Liam met via Jasmine &amp; Awakin Circle</li><li>4:30 How Liam began his road to spirituality</li><li>6:03 Liam’s first meditation experiences</li><li>8:00 Vipassana’s life changing experience for Liam (sexual ref)</li><li>12:15 Did Liam tell the teachers about the occurrence?</li><li>13:20 Daoist sexual practices</li><li>13:45 Bill’s take on Liam’s experience &#8211; Arising &amp; Passing (A&amp;P)</li><li>14:22 Kevin Rose interview with Zen Master Henry Shukman &#8211; Arising and Passing event</li><li>16:20 Bill’s Arising &amp; Passing experiences</li><li>17:18 Universality of these types of experiences</li><li>19:00 Liam’s first experiences with Goenka style Vipassana retreats</li><li>22:30 Seeking meditation references &#8211; Alan Wallace &#8211; The Attention Revolution</li><li>24:00 Phenomenon of extreme Jhanic states and how Liam understands the possibility in them</li><li>28:00 Encounters with Allan Wallace, contemplative PhD, and his<a href="https://wisdomexperience.org/product/attention-revolution/" class="ek-link"> Attention revolution</a> book</li><li>31:00 Liam meeting Allan Wallace and reasons for seeking other teachers</li><li>35:00 Liam’s 6 month meditation retreat and decisions why</li><li>38:30 Funny experiences on retreat</li><li>40:30 Kindness on Liam’s retreat</li><li>41:00 What Liam practiced on his retreat</li><li>46:00 Brasington’s different explanation of Jhanic states</li><li>52:00 Bill on meditative attachment</li><li>53:00 Liam on Shinzen Young’s meditative maximisation of life</li><li>56:00 Spiritual bypassing</li><li>59:00 Contemplating meditation for the masses</li><li>1:01:00 MBSR’s powerful benefits</li><li>1:03:00 Liam&#8217;s experiences teaching mindfulness to schoolkids</li><li>1:04:00 Deep history, human records in the fossil record, dinosaur civilizations and moon visits</li></ul>



<h4 class="wp-block-heading">Links</h4>



<p class="wp-block-paragraph">Liam&#8217;s site &#8211; <a href="https://www.liamchai.com/" class="ek-link">liamchai.com</a></p>



<h6 class="wp-block-heading">Books</h6>



<ul class="wp-block-list"><li>Daniel Ingram &#8211; <a href="https://www.mctb.org/mctb2/" class="ek-link">Mastering the core teachings of the Buddha</a></li><li>Allan Wallace &#8211; <a href="https://wisdomexperience.org/product/attention-revolution/" class="ek-link">Attention revolution</a></li><li>Leigh Brasington &#8211; <a href="https://www.goodreads.com/book/show/25241895-right-concentration" class="ek-link">Right Concentration</a></li></ul>



<p class="wp-block-paragraph">We&#8217;re on Youtube too 😄</p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="&quot;Going off Script&quot; with Liam Chai - Episode 05" width="1290" height="726" src="https://www.youtube.com/embed/K9oaLcc_t2w?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>`},{id:3856,slug:"episode-4",title:"Episode 4 – Limits to enlightenment",date:"2020-05-15T14:58:14",formattedDate:"May 15, 2020",originalPath:"/2020/05/15/episode-4/",category:"podcast",episodeNumber:4,audioUrl:"/wp-content/uploads/2020/podcast/episode-04.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-04.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-04.mp3",audioType:"audio/mpeg",audioLength:72437550,duration:"30:11",featuredImage:"/wp-content/uploads/2020/05/dudes-scaled.jpg",excerptText:"A fun chat that started with a regular call. We were meant to be talking about updating this website, but after “How are you…",excerptHtml:"<p>A fun chat that started with a regular call. We were meant to be talking about updating this website, but after “How are you…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">A fun chat that started with a regular call. We were meant to be talking about updating this website, but after &#8220;How are you doing? How&#8217;s your practice?&#8221; we got into an interesting discussion so began recording! We hope that you too, dear listener, will enjoy this.</p>







<h3 class="wp-block-heading">Topics</h3>



<ul style="--ek-indent:20px" class="has-ek-indent wp-block-list"><li>0:00 Intro and <strong>Mahasi Sayadaw</strong> style <strong>&#8216;noting&#8217; practice</strong></li><li>3:00 On high-speed &#8216;noting&#8217; meditation</li><li>5:30 <em>Do all types of meditation lead to the same place?</em> Comparisons with yoga and other, Buddhist types of meditation. </li><li>7:00 <strong>Altered Traits book</strong> &#8211; studies of long-term, advanced meditators. Similarities and differences between veterans of different meditation traditions.</li><li>9:00 <strong>Zen Masters in the early 20th Century</strong> &#8211; part of the II World war effort.</li><li>12:00 <strong>Bill Hamilton &#8211; Saints &amp; Psychopaths book</strong>. Can meditation touch or change extreme psychological conditions?</li><li>14:00 <strong><a href="https://www.integrateddaniel.info/" class="ek-link">Daniel Ingram</a></strong> &amp; <strong><a href="https://kennethfolkdharma.com/" class="ek-link">Kenneth Folk</a></strong> on the limits of &#8216;awakening&#8217; &#8211;<em> Can it save you from being a &#8216;total arsehole&#8217;?</em></li><li>15:00 <em>Can metta &#8216;loving kindness&#8217; meditation make you a better person?</em> <strong>Jasmine</strong> on her current practice and how empathy practices have shaped her personality.</li><li>17:00 Emotional intelligence at work and on the career ladder. <strong>Chade-Meng Tang</strong>&#8216;s <strong>Search Inside Yourself book</strong> on habit building</li><li>18:40 <span style="background-color:var(--theme-palette-color-5)" class="has-inline-background"><span class="has-inline-color has-palette-color-1-color">Enlightenment doesn&#8217;t solve all your problems.</span></span> While <em>panna </em>(wisdom) has an achievable goal, the trainings of <em>sila</em> (morality, virtue) and <em>samadhi</em> (concentration, &#8216;coming together&#8217;) are infinite.</li><li>20:00 <strong>Bill</strong> &amp; <strong>Jasmine</strong>&#8216;s current focus in meditation</li><li>21:00 <strong>Friends of the Western Buddhist Order</strong> (now the <a href="https://thebuddhistcentre.com/" class="ek-link">Triratna Buddhist</a> Community) and &#8216;Pure Land&#8217; Buddhist approaches to enlightenment.</li><li>22:00 <strong>Jasmine</strong>&#8216;s family&#8217;s take on enlightenment</li><li>24:00 <strong>Bahia of the bark cloth!</strong> Buddha&#8217;s best ever student who reached full enlightenment in about 5 minutes after being given the instruction. Bill [I missed &#8216;smell&#8217; from the list of sense 😄]</li><li>27:00 Going meta on the podcast itself &#8211; thoughts on colours, the meditation podcast market, and the feedback we&#8217;ve received so far. Thanks for that, by the way! 😃</li></ul>



<h4 class="wp-block-heading">References</h4>



<p class="wp-block-paragraph">Books</p>



<ul class="wp-block-list"><li>Daniel Ingram &#8211; <a class="ek-link" href="https://www.mctb.org/mctb2/">Mastering the Core Teachings of the Buddha</a></li><li>Bill Hamilton &#8211; <a class="ek-link ek-link" href="https://eudoxos.github.io/saints/html/index.html">Saints &amp; Psychopaths</a></li><li>Daniel Goleman and Richard J Davidson &#8211; <a class="ek-link" href="https://www.richardjdavidson.com/altered-traits">Altered Traits</a></li><li>Chade-Meng Tang &#8211; <a class="ek-link" href="http://siybook.com/">Search Inside Yourself</a> </li></ul>



<p class="wp-block-paragraph">Other</p>



<ul class="wp-block-list"><li>Bahia of the Bark Cloth Story! &#8211; Good article here: <a href="https://www.lionsroar.com/take-a-good-hard-look/">Take a Good Hard Look</a></li></ul>



<p class="wp-block-paragraph">We&#8217;re on Youtube too 😄</p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Awake In - Episode 4" width="1290" height="726" src="https://www.youtube.com/embed/BRn9rG9tXS8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>`},{id:3765,slug:"episode-3-daniel-ingram-interview",title:"Episode 3 – Daniel Ingram Interview",date:"2020-05-01T10:58:24",formattedDate:"May 1, 2020",originalPath:"/2020/05/01/episode-3-daniel-ingram-interview/",category:"podcast",episodeNumber:3,audioUrl:"/wp-content/uploads/2020/podcast/episode-03-daniel-ingram.m4a",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/episode-03-daniel-ingram.m4a",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/episode-03-daniel-ingram.m4a",audioType:"audio/mpeg",audioLength:180274775,duration:"1:37:15",featuredImage:"/wp-content/uploads/2020/05/Screenshot-2020-05-01-at-12.53.43.jpg",excerptText:"An amazing interview with Daniel – really enjoyed this one! We were particularly blown away by his insights into the Goenka vipassana tradition, and…",excerptHtml:"<p>An amazing interview with Daniel – really enjoyed this one! We were particularly blown away by his insights into the Goenka vipassana tradition, and…</p>",featuredExcerptHtml:"<p>An amazing interview with Daniel – really enjoyed this one! We were particularly blown away by his insights into the Goenka vipassana tradition, and…</p>",contentHtml:`<p class="wp-block-paragraph">An amazing interview with Daniel &#8211; really enjoyed this one! We were particularly blown away by his insights into the Goenka vipassana tradition, and why they don&#8217;t use the meditation maps. Goenka retreats were pivotal for both me and Jasmine, so it&#8217;s amazing to hear stories about his initial training, and why the retreats downplay or ignore &#8216;dark night&#8217; or &#8216;dhukka nana&#8217; phenomena (difficulties that can emerge during meditation).</p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Episode 3 - Daniel Ingram Interview" width="1290" height="726" src="https://www.youtube.com/embed/eZ_sTcIKJNY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><figcaption><br></figcaption></figure>



<h4 class="wp-block-heading">Audio-only version</h4>







<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph">Subscribe in your favorite podcast app: </p>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>
</div>



<h3 class="wp-block-heading">Topics</h3>



<ul class="wp-block-list"><li>3:24 &#8211; Practice and framing. How one begins on the adventure of meditation. Starting a practice during COVID-19 lockdown?</li><li>6:00 &#8211; Daniel Ingram&#8217;s practice day to day. Morality, concentration, wisdom</li><li>10:50 &#8211; Fire Kasina technique &amp; history</li><li>13:30 &#8211; Meditation and scary events. Demons!</li><li>19:00 &#8211; Magical practices, grimoires, entities in the practice and traditions</li><li>20:15 &#8211; Loving kindness meditation (metta) origins</li><li>22:00 Loving kindness towards entities</li><li>23:00 Fire kasina &amp; necessity for theory and roadmap</li><li>24:00 Bill&#8217;s memories &#8211; encountering an entity in teenage years</li><li>27:15 Bill reflecting on how this impacted practice</li><li>29:50 Is any dose of meditation safe? Considering the Therevadan maps. Chapter 30 MCTB.</li><li>38:00 Use of maps and how they&#8217;ve helped Ingram, benefits</li><li>41:00 Daniel challenges others to bring forward insight on maps</li><li>41:48 Why Therevadan maps are so useful. Possible drawbacks and why some people don&#8217;t like the insight maps</li><li>44:42 Benefits of maps for meditation. </li><li>46:00 Why does the <a href="https://www.dhamma.org/en/index" class="ek-link">Goenka meditation tradition</a> not use the maps technology that is available? Why do they keep their students in the dark about it? #dhamma #vipassana</li><li>48:00 Maps and how they script meditation experiences and paths</li><li>52:50 Sayadaw &#8216;Noting&#8217; practice</li><li>54:47 Inside story on Goenka&#8217;s training and practice with Sayagyi U <a href="https://en.wikipedia.org/wiki/Ba_Khin">Ba Khin</a> &#8211; along with fellow students Ruth Dennison, and Robert Harry Hoover. All were taught from the <a href="https://en.wikipedia.org/wiki/Visuddhimagga">Visuddhimagga</a> in very individualised ways. Goenka went on to teach the version he learnt, without the differentiation he&#8217;d received. The Visuddhimagga has many techniques for different types of people. When the students went on to try and teach together, they rapidly clashed as they realised they were all teaching different things!</li><li>56:48 Goenka did not have &#8216;dark night&#8217; problems (dhukka nanas) &#8211; so never included warnings about them or help to navigate them in his teaching! With him around &#8211; and his warm, encouraging presence, his students didn&#8217;t run into so many problems.</li><li>59:00 This difficulty of making any changes to the Goenka institution</li><li>1:00:02 &#8211; The Fire Kasina &#8211; why did it get lost and why is it not more popular?</li><li>1:10:10 Fire Kasina for beginners, and on retreat</li><li>1:14:00 Bill &amp; Jasmine&#8217;s ambitions for the podcast &amp; current practice</li><li>1:24:00 Scripting and the Jhanas</li><li>1:29:50 Daniel&#8217;s thoughts on having a meditation teacher and how to find the right one.</li></ul>



<p class="wp-block-paragraph">We&#8217;d love to hear your thoughts on this one so do please <a href="https://awake-in.com/contact/" class="ek-link">email</a> or leave us a comment below!</p>



<h3 class="wp-block-heading">Links</h3>



<ul class="wp-block-list"><li><a class="ek-link ek-link ek-link ek-link" href="https://www.mctb.org/">Mastering the Core Teachings of the Buddha (book / site)</a></li><li><a class="ek-link ek-link ek-link ek-link" href="https://www.mctb.org/">Fire Ka</a><a class="ek-link ek-link" href="https://firekasina.org/">sina</a></li><li><a class="ek-link ek-link" href="https://firekasina.org/">Daniel Ingram&#8217;s site</a></li><li><a class="ek-link ek-link" href="https://firekasina.org/">Dharma Overground Forum</a></li><li><a class="ek-link ek-link" href="https://firekasina.org/">Path with Heart &#8211; Jack Kornfield</a></li><li><a class="ek-link ek-link" href="https://firekasina.org/">Mahasi Sayadaw &#8211; Practical Insight Meditation</a></li><li><a class="ek-link ek-link" href="https://firekasina.org/">Visuddhimagga &#8211; classic meditation manual  </a></li></ul>`},{id:3740,slug:"episode-2",title:"Episode 2 – Catch up",date:"2020-04-24T12:29:59",formattedDate:"April 24, 2020",originalPath:"/2020/04/24/episode-2/",category:"podcast",episodeNumber:2,audioUrl:"/wp-content/uploads/2020/04/awake-in-episode-2v3.m4a",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/awake-in-episode-2v3.m4a",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/04/awake-in-episode-2v3.m4a",audioType:"audio/mpeg",audioLength:32724346,duration:"17:28",featuredImage:"/wp-content/uploads/2020/04/Screenshot-2020-04-24-at-13.40.30-1-scaled.jpg",excerptText:"We catch up on life in lockdown, Jasmine’s ongoing home retreat and practice in general. This is an experimental format – it’s a pretty…",excerptHtml:"<p>We catch up on life in lockdown, Jasmine’s ongoing home retreat and practice in general. This is an experimental format – it’s a pretty…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">We catch up on life in lockdown, Jasmine&#8217;s ongoing home retreat and practice in general. This is an experimental format &#8211; it&#8217;s a pretty loose conversation with minimal editing. Does it work? Let us know!</p>



<p class="wp-block-paragraph">We also announce our upcoming guest interview with (drum roll) &#8230; the one and only Daniel Ingram!</p>







<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph"></p>
</div>
</div>



<h5 class="wp-block-heading">Video version</h5>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="Episode 2" width="1290" height="726" src="https://www.youtube.com/embed/_dIJWN4kAJ8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>`},{id:3556,slug:"episode-1-0-steve-james-aka-guru-viking-%f0%9f%a4%98",title:"🔥 Episode 1.0 — Steve James AKA Guru Viking 🤘",date:"2020-04-01T17:48:33",formattedDate:"April 1, 2020",originalPath:"/2020/04/01/episode-1-0-steve-james-aka-guru-viking-%f0%9f%a4%98/",category:"podcast",episodeNumber:1,audioUrl:"/wp-content/uploads/2020/04/awake-in-1.0-render.m4a",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/awake-in-1.0-render.m4a",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/04/awake-in-1.0-render.m4a",audioType:"audio/mpeg",audioLength:172608942,duration:"1:31:01",featuredImage:"/wp-content/uploads/2020/04/vid-grab.jpg",excerptText:`We cover all sorts but here are some highlights:
    Learnings from the amazing guests he’s interviewed.     Steve’s meditation practice explained 3 ways –
        To a child,         To an adult,         To an experienced meditator.`,excerptHtml:`<p>We cover all sorts but here are some highlights:</p>
<p>    Learnings from the amazing guests he’s interviewed.     Steve’s meditation practice explained 3 ways –<br/>
        To a child,         To an adult,         To an experienced meditator. </p>`,featuredExcerptHtml:`<p>We cover all sorts but here are some highlights:</p>
<p>    Learnings from the amazing guests he’s interviewed.     Steve’s meditation practice explained 3 ways –<br/>
        To a child,         To an adult,         To an experienced meditator. </p>`,contentHtml:`<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="🔥 Episode 1.0 -- Steve James AKA Guru Viking 🤘" width="1290" height="726" src="https://www.youtube.com/embed/ipwChnexbyk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><figcaption>Video </figcaption></figure>







<div class="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-995f960e wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">\r
	<a class="paoc-popup-click paoc-popup-cust-3876 paoc-popup-simple_link paoc-popup-link" href="javascript:void(0);">Subscribe</a>\r
\r




<a class="paoc-popup popupaoc-link" href="javascript:void(0);" data-target="popuppaoc-modal-3876" data-conf="{&quot;content&quot;:{ &quot;target&quot; : &quot;#paoc-modal-1&quot;, &quot;effect&quot;: &quot;fadein&quot;, &quot;positionX&quot;: &quot;center&quot;, &quot;positionY&quot;: &quot;center&quot;, &quot;fullscreen&quot;: false, &quot;speedIn&quot;: 300, &quot;speedOut&quot;: 300, &quot;delay&quot;: 150, &quot;width&quot;: &quot;370px&quot; },&quot;loader&quot;:{&quot;active&quot;: true},&quot;overlay&quot;:{&quot;active&quot;: true}}"><figure class="wp-block-gallery aligncenter columns-3 is-cropped caption-align-center limit-height small-icons has-tablet-text-align-center has-mobile-text-align-center" style="display: inline;"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-podcast.svg" alt="" data-id="3812" data-link="https://awake-in.com/6-2/social-music-podcast/" class="wp-image-3812"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/social-music-spotify-2.svg" alt="" data-id="3816" data-link="https://awake-in.com/social-music-spotify-2/" class="wp-image-3816"/></noscript></figure></li><li class="blocks-gallery-item"><figure><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811 jetpack-lazy-image jetpack-lazy-image--handled" data-lazy-loaded="1"><noscript><img decoding="async" src="/wp-content/uploads/2020/05/rss-feed.svg" alt="" data-id="3811" data-link="https://awake-in.com/6-2/rss-feed/" class="wp-image-3811"/></noscript></figure></li></ul></figure></a>
</div>



<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="wp-block-paragraph"></p>
</div>
</div>



<h3 class="wp-block-heading">Topics</h3>



<p class="wp-block-paragraph">We cover all sorts but here are some highlights:</p>



<ul class="wp-block-list"><li>Learnings from the amazing guests he&#8217;s interviewed</li><li>Steve&#8217;s meditation practice explained 3 ways &#8211; <ul><li>To a child</li><li>To an adult</li><li>To an experienced meditator</li></ul></li><li>His summer &#8216;part-time retreat&#8217; &#8211; 4 hours of meditation a day</li><li>Bill&#8217;s experience of Jhānic meditation</li><li>Jasmine&#8217;s experience doing 3 hours a day of meditation for an entire year</li><li>Thoughts on how to deal with the current COVID-19 crisis</li></ul>



<p class="wp-block-paragraph">Books referenced:</p>



<ul class="wp-block-list"><li>Daniel Ingram&#8217;s <a href="https://www.mctb.org/" class="ek-link">Mastering the Core Teachings of the Buddha</a></li><li>and <a href="https://firekasina.org/fire-kasina-book/" class="ek-link">Fire Kasina</a></li><li>Leigh Brasington&#8217;s <a href="https://www.shambhala.com/right-concentration-3428.html" class="ek-link">Right Concentration</a></li><li>Antonio Machado&#8217;s  <a href="https://allpoetry.com/Last-Night-As-I-Was-Sleeping" class="ek-link">Last Night As I Was Sleeping</a> </li></ul>



<p class="wp-block-paragraph">Check out the amazing Guru Viking podcast and follow Steve&#8217;s other work at: <a href="https://www.guruviking.com/" class="ek-link">https://www.guruviking.com/</a></p>



<p class="wp-block-paragraph">Hope you enjoy! Please let us know your thoughts: <a href="mailto:&#x75;&#x73;&#x40;&#x61;&#x77;&#x61;&#x6b;&#x65;&#x2d;&#x69;&#x6e;&#x2e;&#x63;&#x6f;&#x6d;" class="ek-link"><span class="oe_textdirection">&#x6d;&#x6f;&#x63;&#x2e;&#x6e;&#x69;&#x2d;&#x65;&#x6b;&#x61;&#x77;&#x61;<span class="oe_displaynone">null</span>&#x40;&#x73;&#x75;</span></a></p>



<p class="wp-block-paragraph">For more from us check out: <a href="https://awake-in.com" class="ek-link">https://awake-in.com</a></p>`},{id:3460,slug:"episode-0-1-introduction",title:"🚀 Episode 0.1 – Introduction 🎉",date:"2020-03-25T22:05:22",formattedDate:"March 25, 2020",originalPath:"/2020/03/25/episode-0-1-introduction/",category:"podcast",episodeNumber:.1,audioUrl:"/wp-content/uploads/2020/podcast/awake-in-0.1-v3.mp3",remoteAudioUrl:"https://github.com/BillTribble/awake-in/releases/download/v1.0.0/awake-in-0.1-v3.mp3",originalAudioUrl:"https://awake-in.com/wp-content/uploads/2020/podcast/awake-in-0.1-v3.mp3",audioType:"audio/mpeg",audioLength:51286472,duration:"35:37",featuredImage:"/wp-content/uploads/2020/03/happy-fish-sq-scaled.jpg",excerptText:"Me and Jasmine kick things off. It’s a beta episode! We get into our ideas and ambitions for the podcast, and discuss a range…",excerptHtml:"<p>Me and Jasmine kick things off. It’s a beta episode! We get into our ideas and ambitions for the podcast, and discuss a range…</p>",featuredExcerptHtml:null,contentHtml:`<p class="wp-block-paragraph">Me and Jasmine kick things off. It&#8217;s a beta episode! </p>



<p class="wp-block-paragraph">We get into our ideas and ambitions for the podcast, and discuss a range of topics:</p>



<ul class="wp-block-list"><li>Talking to regular people not just the &#8216;masters&#8217;</li><li>Integrating insights from meditation into &#8216;real life&#8217;</li><li>The <em>limits</em> of enlightenment &#8211; in terms of how it shapes personality and morality. </li><li>The history of &#8220;enlightened master&#8221; scandals!</li><li>Supernatural powers in the old scriptures (the Bible, the Buddhist suttas)</li></ul>



<p class="wp-block-paragraph">Book mentioned: <a href="https://www.goodreads.com/book/show/635454.Meditation_Made_Easy" class="ek-link">Lorin Roche&#8217;s &#8220;Meditation Made Easy&#8221;</a> &#8211; Highly recommended! </p>



<p class="wp-block-paragraph"></p>



<p class="wp-block-paragraph">Hope you enjoy! Please get in touch if you do :)</p>



<p class="wp-block-paragraph"><a href="mailto:&#x75;&#x73;&#x40;&#x61;&#x77;&#x61;&#x6b;&#x65;&#x2d;&#x69;&#x6e;&#x2e;&#x63;&#x6f;&#x6d;" class="ek-link"><span class="oe_textdirection">&#x6d;&#x6f;&#x63;&#x2e;&#x6e;&#x69;&#x2d;&#x65;&#x6b;&#x61;&#x77;&#x61;<span class="oe_displaynone">null</span>&#x40;&#x73;&#x75;</span></a></p>







<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="🚀 Episode 0.1 – Introduction 🎉" width="1290" height="726" src="https://www.youtube.com/embed/OE8gpiF9zz4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><figcaption>Youtube version (audio only)</figcaption></figure>



<p class="has-text-align-center wp-block-paragraph" style="font-size:clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px);px"></p>`}],an=Hf.map(e=>({...e,audioUrl:e.audioUrl?R(e.audioUrl):null,featuredImage:e.featuredImage?R(e.featuredImage):null,excerptHtml:ki(e.excerptHtml),featuredExcerptHtml:e.featuredExcerptHtml?ki(e.featuredExcerptHtml):null,contentHtml:ki(e.contentHtml)})),ds=an.filter(e=>e.category==="podcast"),Jf=an.filter(e=>e.category==="blog"),$f=({onOpenSubscribe:e})=>{const t=Ut.featuredEpisodeIds.map(n=>ds.find(a=>a.id===n)).filter(n=>n!==void 0);return u.jsxs("div",{className:"homepage-wrapper",children:[u.jsx("div",{className:"container",style:{paddingTop:"20px",paddingBottom:"40px"},children:u.jsxs("section",{className:"hero-section","aria-label":"Hero banner",style:{position:"relative",borderRadius:"24px",overflow:"hidden",backgroundColor:"#1b0f55",backgroundImage:`url(${Ut.hero.desktopBackgroundGif})`,backgroundSize:"cover",backgroundPosition:"center bottom",minHeight:"480px",padding:"48px 36px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"none"},children:[u.jsx("div",{className:"hero-overlay",style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(15, 10, 45, 0.4) 0%, rgba(15, 10, 45, 0.85) 100%)",pointerEvents:"none"}}),u.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"20px"},children:[u.jsx("div",{children:u.jsx("h1",{style:{color:"#ffffff",fontFamily:"'canada-type-gibson', sans-serif",fontSize:"2.75rem",fontWeight:700,margin:0},children:Ut.hero.title})}),u.jsx("div",{style:{maxWidth:"400px"},children:u.jsx("p",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"20px",lineHeight:"1.4",margin:0},children:Ut.hero.tagline})})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,marginTop:"120px"},children:[u.jsx("button",{type:"button",onClick:e,style:{backgroundColor:"#ffe724",color:"#412eb4",boxShadow:"0 4px 0 0 #e8680a",borderRadius:"40px",padding:"10px 32px",fontSize:"22px",fontWeight:600,fontFamily:"'canada-type-gibson', sans-serif",border:"none",cursor:"pointer",display:"inline-block",transition:"transform 0.15s ease"},children:Ut.hero.subscribeCtaText}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"20px"},children:Ut.hero.quickSubscribeIcons.map(n=>u.jsx("button",{type:"button",onClick:e,title:n.platform,"aria-label":n.platform,style:{width:"50px",height:"50px",borderRadius:"20px",backgroundColor:"#5241c888",padding:"10px",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",cursor:"pointer",backdropFilter:"blur(8px)",transition:"background-color 0.15s ease"},children:u.jsx("img",{src:n.icon,alt:n.platform,style:{width:"28px",height:"28px",display:"block"}})},n.platform))})]})]})}),u.jsxs("section",{style:{maxWidth:"780px",margin:"0 auto",padding:"0 24px 60px"},children:[u.jsx("h2",{style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"32px",fontWeight:700,marginBottom:"36px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"Featured episodes 🌱"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:t.map(n=>u.jsxs("article",{className:"featured-episode-item",style:{borderBottom:"1px solid var(--md-sys-color-surface-container-highest)",paddingBottom:"40px"},children:[n.featuredImage&&u.jsx(le,{to:n.originalPath,style:{display:"block",marginBottom:"20px",overflow:"hidden",borderRadius:"12px"},children:u.jsx("img",{src:n.featuredImage,alt:n.title,style:{width:"100%",height:"auto",display:"block",objectFit:"cover"}})}),u.jsx("h3",{style:{fontSize:"26px",fontWeight:700,marginBottom:"10px"},children:u.jsx(le,{to:n.originalPath,style:{color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:n.title})}),u.jsx("div",{style:{marginBottom:"14px"},children:u.jsx("time",{dateTime:n.date,style:{fontSize:"14px",fontWeight:600,textTransform:"uppercase",color:"var(--md-sys-color-on-surface-variant)"},children:n.formattedDate})}),u.jsx("div",{className:"entry-excerpt",style:{fontSize:"18px",lineHeight:"1.65",marginBottom:"16px"},dangerouslySetInnerHTML:{__html:n.featuredExcerptHtml||n.excerptHtml}}),u.jsx("p",{style:{margin:0},children:u.jsxs(le,{to:n.originalPath,className:"gb-block-post-grid-more-link",style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"18px",color:"var(--theme-palette-color-1, #624aca)",textDecoration:"none"},children:["Listen Now ▶️"," "]})})]},n.id))}),u.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:u.jsx(le,{to:"/%f0%9f%8e%a7-all-episodes",className:"wp-block-button__link",style:{backgroundColor:"#624aca",color:"#ffffff",padding:"12px 36px",borderRadius:"50px",fontSize:"18px",fontWeight:600,fontFamily:"'canada-type-gibson', sans-serif",textDecoration:"none",display:"inline-block"},children:"All episodes"})})]}),u.jsx("section",{style:{backgroundColor:"#230c80",color:"#ffffff",padding:"60px 20px"},children:u.jsxs("div",{style:{maxWidth:"1140px",margin:"0 auto"},children:[u.jsx("h2",{style:{fontFamily:"'canada-type-gibson', sans-serif",color:"#ffaedf",fontSize:"36px",fontWeight:700,marginBottom:"48px",textAlign:"center"},children:"🌈 Hosts"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px"},children:[u.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsx("img",{src:R("/wp-content/uploads/2020/05/jasmine.png"),alt:"Jasmine Che",style:{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover",marginBottom:"20px",display:"block"}}),u.jsx("h4",{style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"24px",fontWeight:700,color:"#ffffff",marginBottom:"12px"},children:"Jasmine Che"}),u.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"rgba(255, 255, 255, 0.9)",marginBottom:"24px",maxWidth:"440px"},children:"Jasmine is the youngest Search Inside Yourself™ mindfulness teacher, a heart-based multi-business venturer, plant mum to ~150 babies and is working back to 3 hours of meditation a day. When she ever finds any spare time, she practices Dharma yoga and acrobatics."}),u.jsx("a",{href:"https://www.instagram.com/thelifeofjasmineche/",target:"_blank",rel:"noreferrer noopener",style:{border:"2px solid #ffffff",borderRadius:"50px",color:"#ffffff",padding:"8px 24px",fontSize:"16px",fontWeight:600,fontFamily:"'canada-type-gibson', sans-serif",textDecoration:"none",display:"inline-block"},children:"Jasmine’s Instagram"})]}),u.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[u.jsx("img",{src:R("/wp-content/uploads/2020/03/bill-1.png"),alt:"Bill Tribble",style:{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover",marginBottom:"20px",display:"block"}}),u.jsx("h4",{style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"24px",fontWeight:700,color:"#ffffff",marginBottom:"12px"},children:"Bill Tribble"}),u.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"rgba(255, 255, 255, 0.9)",marginBottom:"24px",maxWidth:"440px"},children:["Bill is a designer, musician, and technologist. He got started in mindfulness via silent retreats in the Goenka tradition. While he’s put in thousands of hours of meditation, he’s probably spent way more time playing computer games and wishes he hadn’t. Find him on ",u.jsx("a",{href:"https://mastodon.design/@bill_tribble",target:"_blank",rel:"noreferrer noopener",className:"ek-link",style:{color:"#ffaedf",textDecoration:"underline"},children:"Mastodon"})," or check him out on:"]}),u.jsx("a",{href:"https://www.instagram.com/bill_tribble/",target:"_blank",rel:"noreferrer noopener",style:{border:"2px solid #ffffff",borderRadius:"50px",color:"#ffffff",padding:"8px 24px",fontSize:"16px",fontWeight:600,fontFamily:"'canada-type-gibson', sans-serif",textDecoration:"none",display:"inline-block"},children:"Bill’s Instagram"})]})]})]})})]})},Vf=({episode:e})=>u.jsxs("article",{className:"gb-post-grid-item",style:{display:"flex",flexDirection:"column",marginBottom:"40px"},children:[e.featuredImage&&u.jsx("div",{className:"gb-block-post-grid-image",style:{marginBottom:"16px"},children:u.jsx(le,{to:e.originalPath,rel:"bookmark","aria-hidden":"true",tabIndex:-1,style:{display:"block",borderRadius:"12px",overflow:"hidden"},children:u.jsx("img",{src:e.featuredImage,alt:"",style:{width:"100%",height:"auto",aspectRatio:"600 / 400",objectFit:"cover",display:"block"}})})}),u.jsxs("header",{className:"gb-block-post-grid-header",style:{marginBottom:"8px"},children:[u.jsx("h3",{className:"gb-block-post-grid-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"22px",fontWeight:700,lineHeight:1.3,marginBottom:"8px"},children:u.jsx(le,{to:e.originalPath,rel:"bookmark",style:{color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:e.title})}),u.jsx("div",{className:"gb-block-post-grid-byline",style:{marginBottom:"12px"},children:u.jsx("time",{dateTime:e.date,className:"gb-block-post-grid-date",style:{fontSize:"13px",fontWeight:600,textTransform:"uppercase",color:"var(--md-sys-color-on-surface-variant)"},children:e.formattedDate})})]}),u.jsx("div",{className:"gb-block-post-grid-excerpt",style:{fontSize:"17px",lineHeight:"1.6",marginBottom:"14px",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))"},dangerouslySetInnerHTML:{__html:e.excerptHtml}}),u.jsx("p",{style:{margin:0},children:u.jsx(le,{to:e.originalPath,className:"gb-block-post-grid-more-link",rel:"bookmark",style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"17px",color:"var(--theme-palette-color-1, #624aca)",textDecoration:"none"},children:e.category==="blog"?"Continue Reading":"Listen Now ▶️ "})})]}),vi=()=>u.jsxs("div",{className:"container",style:{paddingBottom:"80px",paddingTop:"32px"},children:[u.jsx("header",{className:"entry-header",style:{marginBottom:"40px"},children:u.jsx("h1",{className:"entry-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"2.5rem",fontWeight:700,margin:0,color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"🎧 All episodes"})}),u.jsx("section",{className:"gb-block-post-grid",children:u.jsx("div",{className:"gb-post-grid-items is-grid columns-2",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(440px, 1fr))",columnGap:"40px",rowGap:"20px"},children:ds.map(e=>u.jsx(Vf,{episode:e},e.id))})})]}),Kf=()=>u.jsxs("div",{className:"container-narrow",style:{paddingBottom:"80px",paddingTop:"32px"},children:[u.jsx("header",{className:"entry-header",style:{marginBottom:"40px"},children:u.jsx("h1",{className:"entry-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"2.5rem",fontWeight:700,margin:0,color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"✍️ Blog"})}),u.jsx("section",{className:"gb-block-post-grid",children:u.jsx("div",{className:"gb-post-grid-items is-list",children:Jf.map(e=>u.jsx("article",{className:"gb-post-grid-item",style:{marginBottom:"40px"},children:u.jsxs("div",{className:"gb-block-post-grid-text",children:[u.jsxs("header",{className:"gb-block-post-grid-header",style:{marginBottom:"12px"},children:[u.jsx("h3",{className:"gb-block-post-grid-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"28px",fontWeight:700,marginBottom:"8px"},children:u.jsx(le,{to:e.originalPath,rel:"bookmark",style:{color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:e.title})}),u.jsxs("div",{className:"gb-block-post-grid-byline",style:{display:"flex",alignItems:"center",gap:"12px",fontSize:"14px",fontWeight:500,color:"var(--md-sys-color-on-surface-variant)"},children:[u.jsx("div",{className:"gb-block-post-grid-author",children:u.jsx("span",{children:"bill"})}),u.jsx("span",{children:"•"}),u.jsx("time",{dateTime:e.date,className:"gb-block-post-grid-date",children:e.formattedDate})]})]}),u.jsx("div",{className:"gb-block-post-grid-excerpt",style:{fontSize:"18px",lineHeight:"1.65",marginBottom:"16px",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))"},dangerouslySetInnerHTML:{__html:e.excerptHtml}}),u.jsx("p",{style:{margin:0},children:u.jsx(le,{to:e.originalPath,className:"gb-block-post-grid-more-link",style:{fontFamily:"'canada-type-gibson', sans-serif",fontWeight:700,fontSize:"18px",color:"var(--theme-palette-color-1, #624aca)",textDecoration:"none"},children:"Continue Reading"})})]})},e.id))})})]}),Ra=({onOpenSubscribe:e})=>{const{slug:t,year:n,month:a,day:o}=uf(),i=xn(),r=ec(),s=I.useRef(null),l=I.useMemo(()=>{if(t){const y=an.find(w=>w.slug===t);if(y)return y}if(n&&a&&o&&t){const y=`/${n}/${a}/${o}/${t}/`,w=an.find(v=>v.originalPath===y);if(w)return w}const p=new URLSearchParams(i.search).get("p");if(p){const y=parseInt(p,10),w=an.find(v=>v.id===y);if(w)return w}const g=i.pathname.endsWith("/")?i.pathname:`${i.pathname}/`;return an.find(y=>y.originalPath===g)},[t,n,a,o,i.search,i.pathname]);if(I.useEffect(()=>{const m=s.current;if(!m)return;const p=g=>{var S;const y=g.target.closest("a");if(!y)return;const w=y.getAttribute("href");if(y.classList.contains("paoc-popup")||y.classList.contains("paoc-popup-click")||w==="javascript:void(0);"||((S=y.textContent)==null?void 0:S.trim().toLowerCase())==="subscribe"){g.preventDefault(),e();return}if(w&&w.startsWith("https://awake-in.com/")){g.preventDefault();const d=new URL(w);r(d.pathname)}};return m.addEventListener("click",p),()=>m.removeEventListener("click",p)},[l,r,e]),!l)return u.jsxs("div",{className:"container-narrow",style:{textAlign:"center",padding:"80px 24px"},children:[u.jsx("h1",{style:{fontSize:"2rem",marginBottom:"16px"},children:"Episode not found"}),u.jsx("p",{style:{color:"var(--md-sys-color-on-surface-variant)",marginBottom:"24px"},children:"We couldn’t find the episode or article you were looking for."}),u.jsx(le,{to:"/%f0%9f%8e%a7-all-episodes",className:"wp-block-button__link",children:"Back to all episodes"})]});const h=ds.filter(m=>m.id!==l.id).slice(0,3);return u.jsxs("article",{className:"container-narrow",style:{paddingBottom:"80px",paddingTop:"32px"},children:[u.jsxs("header",{className:"entry-header",style:{marginBottom:"28px"},children:[u.jsx("h1",{className:"page-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"2.5rem",fontWeight:700,lineHeight:1.2,marginBottom:"14px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:l.title}),u.jsx("div",{className:"entry-meta",style:{display:"flex",alignItems:"center",gap:"8px"},children:u.jsx("time",{dateTime:l.date,style:{fontSize:"12px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--md-sys-color-on-surface-variant)"},children:l.formattedDate})})]}),l.featuredImage&&u.jsx("figure",{className:"ct-featured-image alignwide",style:{margin:"0 0 36px 0",borderRadius:"16px",overflow:"hidden"},children:u.jsx("img",{src:l.featuredImage,alt:"",style:{width:"100%",height:"auto",display:"block"}})}),l.category==="podcast"&&u.jsx("div",{style:{marginBottom:"36px"},children:u.jsx(Ff,{episode:l})}),u.jsx("div",{ref:s,className:"entry-content",style:{fontSize:"20px",lineHeight:"1.65",color:"var(--theme-palette-color-3, rgba(44, 62, 80, 0.9))"},dangerouslySetInnerHTML:{__html:l.contentHtml}}),l.category==="podcast"&&h.length>0&&u.jsxs("section",{className:"ct-related-posts",style:{marginTop:"64px",paddingTop:"40px",borderTop:"1px solid var(--md-sys-color-surface-container-highest)"},children:[u.jsx("h3",{className:"ct-module-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"24px",fontWeight:700,marginBottom:"28px",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"More Episodes"}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"24px"},children:h.map(m=>u.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[m.featuredImage&&u.jsx(le,{to:m.originalPath,style:{display:"block",marginBottom:"12px",borderRadius:"8px",overflow:"hidden"},children:u.jsx("img",{src:m.featuredImage,alt:m.title,style:{width:"100%",aspectRatio:"16 / 10",objectFit:"cover",display:"block"}})}),u.jsx("h4",{style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"18px",fontWeight:700,marginBottom:"6px",lineHeight:1.3},children:u.jsx(le,{to:m.originalPath,style:{color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:m.title})}),u.jsx("time",{dateTime:m.date,style:{fontSize:"12px",fontWeight:600,textTransform:"uppercase",color:"var(--md-sys-color-on-surface-variant)"},children:m.formattedDate})]},m.id))})]})]})},Gf=()=>{const[e,t]=I.useState(""),[n,a]=I.useState(""),[o,i]=I.useState(""),[r,s]=I.useState(""),[l,h]=I.useState(!1),m=p=>{p.preventDefault(),!(!e.trim()||!n.trim())&&h(!0)};return u.jsxs("div",{className:"container-narrow",style:{paddingBottom:"80px",paddingTop:"32px"},children:[u.jsx("header",{className:"entry-header",style:{marginBottom:"32px"},children:u.jsx("h1",{className:"entry-title",style:{fontFamily:"'canada-type-gibson', sans-serif",fontSize:"2.5rem",fontWeight:700,margin:0,color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))"},children:"💌 Contact"})}),u.jsx("div",{className:"entry-content",style:{fontSize:"20px",lineHeight:"1.65",marginBottom:"32px"},children:u.jsxs("p",{children:["It would be great to hear from you! Email"," ",u.jsx("a",{href:"mailto:us@awake-in.com",className:"ek-link",style:{color:"var(--theme-palette-color-1, #624aca)"},children:"us@awake-in.com"})," ","or use our form:"]})}),u.jsx("div",{className:"wpcf7",id:"wpcf7-f4039-p3569-o1",style:{maxWidth:"640px"},children:l?u.jsx("div",{className:"wpcf7-response-output",style:{padding:"16px 24px",borderRadius:"8px",backgroundColor:"var(--md-sys-color-surface-container-high)",border:"2px solid var(--theme-palette-color-2, #33a370)",color:"var(--theme-palette-color-4, rgba(44, 62, 80, 1))",fontSize:"18px",fontFamily:"'canada-type-gibson', sans-serif"},children:"Thank you for your message. It has been sent."}):u.jsxs("form",{onSubmit:m,className:"wpcf7-form",noValidate:!0,children:[u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",fontSize:"18px",fontWeight:600,marginBottom:"8px",fontFamily:"'canada-type-gibson', sans-serif"},children:"Your Name (required)"}),u.jsx("input",{type:"text",name:"your-name",value:e,onChange:p=>t(p.target.value),required:!0,style:{width:"100%",padding:"12px 16px",fontSize:"18px",borderRadius:"6px",border:"1px solid var(--md-sys-color-outline)",backgroundColor:"var(--md-sys-color-surface)",color:"var(--md-sys-color-on-surface)",outline:"none"}})]}),u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",fontSize:"18px",fontWeight:600,marginBottom:"8px",fontFamily:"'canada-type-gibson', sans-serif"},children:"Your Email (required)"}),u.jsx("input",{type:"email",name:"your-email",value:n,onChange:p=>a(p.target.value),required:!0,style:{width:"100%",padding:"12px 16px",fontSize:"18px",borderRadius:"6px",border:"1px solid var(--md-sys-color-outline)",backgroundColor:"var(--md-sys-color-surface)",color:"var(--md-sys-color-on-surface)",outline:"none"}})]}),u.jsxs("div",{style:{marginBottom:"20px"},children:[u.jsx("label",{style:{display:"block",fontSize:"18px",fontWeight:600,marginBottom:"8px",fontFamily:"'canada-type-gibson', sans-serif"},children:"Subject"}),u.jsx("input",{type:"text",name:"your-subject",value:o,onChange:p=>i(p.target.value),style:{width:"100%",padding:"12px 16px",fontSize:"18px",borderRadius:"6px",border:"1px solid var(--md-sys-color-outline)",backgroundColor:"var(--md-sys-color-surface)",color:"var(--md-sys-color-on-surface)",outline:"none"}})]}),u.jsxs("div",{style:{marginBottom:"24px"},children:[u.jsx("label",{style:{display:"block",fontSize:"18px",fontWeight:600,marginBottom:"8px",fontFamily:"'canada-type-gibson', sans-serif"},children:"Your Message"}),u.jsx("textarea",{name:"your-message",rows:6,value:r,onChange:p=>s(p.target.value),style:{width:"100%",padding:"12px 16px",fontSize:"18px",borderRadius:"6px",border:"1px solid var(--md-sys-color-outline)",backgroundColor:"var(--md-sys-color-surface)",color:"var(--md-sys-color-on-surface)",outline:"none",fontFamily:"var(--font-sans)"}})]}),u.jsx("div",{children:u.jsx("input",{type:"submit",value:"Send",style:{backgroundColor:"var(--theme-palette-color-1, #624aca)",color:"#ffffff",padding:"12px 36px",fontSize:"18px",fontWeight:600,fontFamily:"'canada-type-gibson', sans-serif",border:"none",borderRadius:"50px",cursor:"pointer",transition:"opacity 0.15s ease"}})})]})})]})},Qf=()=>{const[e,t]=I.useState(()=>{const i=localStorage.getItem("awake-in-theme");return i==="light"||i==="dark"?i:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),[n,a]=I.useState(!1);I.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("awake-in-theme",e)},[e]);const o=()=>{t(i=>i==="light"?"dark":"light")};return u.jsx(Yf,{children:u.jsx(Pf,{basename:ca||"/",children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[u.jsx(Of,{theme:e,onToggleTheme:o,onOpenSubscribe:()=>a(!0)}),u.jsx("main",{style:{flex:1},children:u.jsxs(jf,{children:[u.jsx(Pe,{path:"/",element:u.jsx($f,{onOpenSubscribe:()=>a(!0)})}),u.jsx(Pe,{path:"/episodes",element:u.jsx(vi,{})}),u.jsx(Pe,{path:"/episodes/:slug",element:u.jsx(Ra,{onOpenSubscribe:()=>a(!0)})}),u.jsx(Pe,{path:"/%f0%9f%8e%a7-all-episodes",element:u.jsx(vi,{})}),u.jsx(Pe,{path:"/🎧-all-episodes",element:u.jsx(vi,{})}),u.jsx(Pe,{path:"/blog",element:u.jsx(Kf,{})}),u.jsx(Pe,{path:"/blog/:slug",element:u.jsx(Ra,{onOpenSubscribe:()=>a(!0)})}),u.jsx(Pe,{path:"/contact",element:u.jsx(Gf,{})}),u.jsx(Pe,{path:"/:year/:month/:day/:slug",element:u.jsx(Ra,{onOpenSubscribe:()=>a(!0)})}),u.jsx(Pe,{path:"*",element:u.jsx(Ra,{onOpenSubscribe:()=>a(!0)})})]})}),u.jsx(Df,{}),u.jsx(Mf,{}),u.jsx(Uf,{isOpen:n,onClose:()=>a(!1)})]})})})};bi.createRoot(document.getElementById("root")).render(u.jsx(Dl.StrictMode,{children:u.jsx(Qf,{})}));
