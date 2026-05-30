var Pt=Object.defineProperty;var Ct=(r,t,e)=>t in r?Pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var f=(r,t,e)=>Ct(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,st=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),nt=new WeakMap;let bt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&nt.set(e,t))}return t}toString(){return this.cssText}};const zt=r=>new bt(typeof r=="string"?r:r+"",void 0,rt),x=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new bt(e,r,rt)},Tt=(r,t)=>{if(st)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},ot=st?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nt,defineProperty:Dt,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Ut,getPrototypeOf:Lt}=Object,_=globalThis,lt=_.trustedTypes,Ft=lt?lt.emptyScript:"",I=_.reactiveElementPolyfillSupport,T=(r,t)=>r,Z={toAttribute(r,t){switch(t){case Boolean:r=r?Ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},xt=(r,t)=>!Nt(r,t),dt={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Dt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=Mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const l=s==null?void 0:s.call(this);a==null||a.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,i=[...Ot(e),...Ut(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ot(s))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var a;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Z).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var a,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Z;this._$Em=s;const c=o.fromAttribute(e,l.type);this[s]=c??((n=this._$Ej)==null?void 0:n.get(s))??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){var n;if(t!==void 0){const l=this.constructor;if(s===!1&&(a=this[t]),i??(i=l.getPropertyOptions(t)),!((i.hasChanged??xt)(a,e)||i.useDefault&&i.reflect&&a===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,n]of s){const{wrapped:l}=n,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,I==null||I({ReactiveElement:S}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,ct=r=>r,H=N.trustedTypes,ht=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,$t="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+$,Ht=`<${_t}>`,k=document,D=()=>k.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,Rt=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",V=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,y=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,ft=/"/g,yt=/^(?:script|style|textarea|title)$/i,jt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=jt(1),P=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),mt=new WeakMap,w=k.createTreeWalker(k,129);function wt(r,t){if(!at(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const qt=(r,t)=>{const e=r.length-1,i=[];let s,a=t===2?"<svg>":t===3?"<math>":"",n=z;for(let l=0;l<e;l++){const o=r[l];let c,u,d=-1,h=0;for(;h<o.length&&(n.lastIndex=h,u=n.exec(o),u!==null);)h=n.lastIndex,n===z?u[1]==="!--"?n=pt:u[1]!==void 0?n=ut:u[2]!==void 0?(yt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=y):u[3]!==void 0&&(n=y):n===y?u[0]===">"?(n=s??z,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?y:u[3]==='"'?ft:gt):n===ft||n===gt?n=y:n===pt||n===ut?n=z:(n=y,s=void 0);const v=n===y&&r[l+1].startsWith("/>")?" ":"";a+=n===z?o+Ht:d>=0?(i.push(c),o.slice(0,d)+$t+o.slice(d)+$+v):o+$+(d===-2?l:v)}return[wt(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,n=0;const l=t.length-1,o=this.parts,[c,u]=qt(t,e);if(this.el=O.createElement(c,i),w.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=w.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith($t)){const h=u[n++],v=s.getAttribute(d).split($),E=/([.?@])?(.*)/.exec(h);o.push({type:1,index:a,name:E[2],strings:v,ctor:E[1]==="."?Vt:E[1]==="?"?Bt:E[1]==="@"?Wt:R}),s.removeAttribute(d)}else d.startsWith($)&&(o.push({type:6,index:a}),s.removeAttribute(d));if(yt.test(s.tagName)){const d=s.textContent.split($),h=d.length-1;if(h>0){s.textContent=H?H.emptyScript:"";for(let v=0;v<h;v++)s.append(d[v],D()),w.nextNode(),o.push({type:2,index:++a});s.append(d[h],D())}}}else if(s.nodeType===8)if(s.data===_t)o.push({type:2,index:a});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)o.push({type:7,index:a}),d+=$.length-1}a++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function C(r,t,e=r,i){var n,l;if(t===P)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const a=M(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=C(r,s._$AS(r,t.values),s,i)),t}class It{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??k).importNode(e,!0);w.currentNode=s;let a=w.nextNode(),n=0,l=0,o=i[0];for(;o!==void 0;){if(n===o.index){let c;o.type===2?c=new U(a,a.nextSibling,this,t):o.type===1?c=new o.ctor(a,o.name,o.strings,this,t):o.type===6&&(c=new Gt(a,this,t)),this._$AV.push(c),o=i[++l]}n!==(o==null?void 0:o.index)&&(a=w.nextNode(),n++)}return w.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),M(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(wt(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(e);else{const n=new It(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new O(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new U(this.O(D()),this.O(D()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=ct(t).nextSibling;ct(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,s){const a=this.strings;let n=!1;if(a===void 0)t=C(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const l=t;let o,c;for(t=a[0],o=0;o<a.length-1;o++)c=C(this,l[i+o],e,o),c===P&&(c=this._$AH[o]),n||(n=!M(c)||c!==this._$AH[o]),c===m?t=m:t!==m&&(t+=(c??"")+a[o+1]),this._$AH[o]=c}n&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}let Bt=class extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}};class Wt extends R{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??m)===P)return;const i=this._$AH,s=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Gt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const B=N.litHtmlPolyfillSupport;B==null||B(O,U),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.3");const Zt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const a=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new U(t.insertBefore(D(),a),a,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class b extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var vt;b._$litElement$=!0,b.finalized=!0,(vt=A.litElementHydrateSupport)==null||vt.call(A,{LitElement:b});const W=A.litElementPolyfillSupport;W==null||W({LitElement:b});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");function Kt(r){return new Promise((t,e)=>{const i=new XMLHttpRequest;i.open("GET","index.json",!0),i.responseType="arraybuffer",i.onprogress=s=>{s.lengthComputable&&r&&r(s.loaded,s.total)},i.onload=()=>{try{const s=new TextDecoder("utf-8"),a=JSON.parse(s.decode(i.response));t(a)}catch(s){e(s)}},i.onerror=()=>e(new Error("Failed to load index.json")),i.send()})}function Jt(r,t){if(!r.m)return!1;const i={hong_bang:[-2879,-258],chinese_domination:[-111,939],dynastic_vn:[939,1858],colonial:[1858,1954],vietnam_war:[1955,1975],modern:[1975,9999]}[t];if(!i)return!1;const s=["point_in_time","start_time","birth_date","death_date"];for(const a of s){const n=r.m[a];if(n){const l=String(n).match(/(-?\d{4})/);if(l){const o=parseInt(l[1],10);if(o>=i[0]&&o<=i[1])return!0}}}return!1}function Xt(r){const t={};return r.forEach(e=>{const i=e.t||"other";t[i]=(t[i]||0)+1}),t}function Yt(r){const i=r.length;let s=0;const a=[],n=[],l={};for(let o=0;o<i;o++){const u=[r[o].l||"",r[o].lv||"",r[o].d||""].join(" ").toLowerCase().split(/\s+/).filter(h=>h.length>1);a.push(u.length),s+=u.length;const d={};u.forEach(h=>{d[h]=(d[h]||0)+1}),n.push(d);for(const h in d)l[h]=(l[h]||0)+1}return s/=i,function(c){const u=c.toLowerCase().split(/\s+/).filter(h=>h.length>1),d=[];for(let h=0;h<i;h++){let v=0;const E=a[h],Et=n[h];for(const j of u){const q=Et[j]||0;if(q===0)continue;const St=Math.log((i-(l[j]||0)+.5)/((l[j]||0)+.5)+1);v+=St*(q*(1.5+1)/(q+1.5*(1-.75+.75*(E/s))))}v>0&&d.push({index:h,score:v})}return d.sort((h,v)=>v.score-h.score),d}}const G={en:{entities:"Entities",events:"Events",people:"People",places:"Places",all:"All",search:"Search...",noResults:"No matching entities",loading:"Loading...",results:"{n} results",page:"Page {p} of {t}",prev:"Prev",next:"Next",details:"Details",relations:"Relations",wiki:"Open in WikiData",timeline:"Timeline",tree:"Dynasty Tree",builtWith:"Built with",source:"source",chatTitle:"MiniDi Assistant",chatPlaceholder:"Ask about Vietnam...",entitiesTotal:"{n} entities",mapPlaces:"Places",mapPeople:"People",mapEvents:"Events"},vi:{entities:"Thuc the",events:"Su kien",people:"Nhan vat",places:"Dia danh",all:"Tat ca",search:"Tim kiem...",noResults:"Khong tim thay",loading:"Dang tai...",results:"{n} ket qua",page:"Trang {p} / {t}",prev:"Truoc",next:"Sau",details:"Chi tiet",relations:"Quan he",wiki:"Mo trong WikiData",timeline:"Thoi gian",tree:"Dong ho",builtWith:"Xay dung voi",source:"Ma nguon",chatTitle:"Tro ly MiniDi",chatPlaceholder:"Hoi ve Viet Nam...",entitiesTotal:"{n} thuc the",mapPlaces:"Dia danh",mapPeople:"Nhan vat",mapEvents:"Su kien"}};let Qt="en";function g(r,t){let i=(G[Qt]||G.en)[r]||G.en[r]||r;if(t)for(const s in t)i=i.replace("{"+s+"}",t[s]);return i}class K extends b{_navigate(t){this.dispatchEvent(new CustomEvent("navigate",{detail:t}))}render(){return p`
      <div class="logo" @click=${()=>this._navigate("search")}>
        <span class="logo-icon">&#x1F577;</span>
        <span>MiniDi</span>
      </div>

      <div class="search-box">
        <span class="search-icon">&#x1F50D;</span>
        <input type="text" placeholder=${g("search")}>
      </div>

      <div class="nav-tabs">
        <button class="nav-tab ${this.view==="search"?"active":""}"
          @click=${()=>this._navigate("search")} title="Search">
          &#x1F50D;
        </button>
        <button class="nav-tab ${this.view==="map"?"active":""}"
          @click=${()=>this._navigate("map")} title="Map">
          &#x1F5FA;
        </button>
        <button class="nav-tab ${this.view==="timeline"?"active":""}"
          @click=${()=>this._navigate("timeline")} title="Timeline">
          &#x1F4C5;
        </button>
        <button class="nav-tab ${this.view==="tree"?"active":""}"
          @click=${()=>this._navigate("tree")} title="Dynasty Tree">
          &#x1F333;
        </button>
      </div>

      <div class="lang-toggle">
        <button class="lang-btn active">EN</button>
        <button class="lang-btn">VI</button>
      </div>

      <a href="https://github.com/minidivn/minidi-vn-data"
         target="_blank" class="github-link" title="GitHub">&#x1F5D2;</a>
    `}}f(K,"styles",x`
    :host {
      display: flex; align-items: center; gap: 12px;
      padding: 0 16px; height: 56px;
      background: rgba(7, 11, 23, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      position: sticky; top: 0; z-index: 50;
      color: var(--text);
    }

    .logo {
      display: flex; align-items: center; gap: 8px;
      font-weight: 700; font-size: 1rem; cursor: pointer;
    }

    .logo-icon {
      width: 28px; height: 28px;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      border-radius: 6px;
      display: inline-flex; align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .search-box { flex: 1; max-width: 400px; position: relative; }

    .search-box input {
      width: 100%; padding: 7px 12px 7px 32px;
      background: var(--bg3);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--md);
      color: var(--text); font-size: 0.85rem;
      outline: none;
    }

    .search-box input:focus {
      border-color: var(--a1);
      box-shadow: 0 0 16px rgba(99, 102, 241, 0.15);
    }

    .search-box input::placeholder { color: var(--text3); }

    .search-icon {
      position: absolute; left: 10px; top: 50%;
      transform: translateY(-50%);
      color: var(--text3); font-size: 0.8rem;
    }

    .nav-tabs {
      display: flex; gap: 2px;
      background: var(--bg3); border-radius: var(--sm);
      padding: 2px;
    }

    .nav-tab {
      padding: 5px 10px; border: none; border-radius: 4px;
      background: transparent; color: var(--text3);
      cursor: pointer; font-size: 0.78rem;
      transition: 0.3s;
    }

    .nav-tab:hover { color: var(--text2); }
    .nav-tab.active { background: var(--a1); color: #fff; }

    .lang-toggle {
      display: flex; background: var(--bg3);
      border-radius: var(--sm); overflow: hidden;
    }

    .lang-btn {
      padding: 4px 9px; border: none;
      background: transparent; color: var(--text3);
      cursor: pointer; font-size: 0.75rem;
    }

    .lang-btn.active { background: var(--a1); color: #fff; }

    .github-link {
      color: var(--text3); font-size: 1.2rem;
      text-decoration: none;
    }
  `),f(K,"properties",{view:{}});customElements.define("mini-header",K);class J extends b{render(){if(!this.data)return"";const t=Xt(this.data.nodes);return p`
      <h1>
        <span class="gradient-text">
          &#x1F1FB;&#x1F1F3; Vietnam Knowledge Graph
        </span>
      </h1>
      <p>Exploring ${this.data.meta.entity_count} WikiData entities</p>
      <div class="stats">
        <div class="stat">
          <div class="num">${this.data.meta.entity_count.toLocaleString()}</div>
          <div class="label">${g("entities")}</div>
        </div>
        <div class="stat">
          <div class="num">${(t.event||0).toLocaleString()}</div>
          <div class="label">${g("events")}</div>
        </div>
        <div class="stat">
          <div class="num">${(t.person||0).toLocaleString()}</div>
          <div class="label">${g("people")}</div>
        </div>
        <div class="stat">
          <div class="num">${(t.place||0).toLocaleString()}</div>
          <div class="label">${g("places")}</div>
        </div>
      </div>
    `}}f(J,"styles",x`
    :host {
      position: relative; text-align: center;
      padding: 40px 20px 28px;
      min-height: 200px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
    p { color: var(--text2); font-size: 0.9rem; }

    .stats {
      display: flex; gap: 24px; flex-wrap: wrap;
      justify-content: center; margin-top: 14px;
    }

    .stat { text-align: center; }

    .stat .num {
      font-size: 1.4rem; font-weight: 700;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat .label { color: var(--text3); font-size: 0.75rem; }
  `),f(J,"properties",{data:{}});customElements.define("mini-hero",J);class X extends b{constructor(){super(),this.filter="all",this.era=null,this.page=0,this.query="",this.PAGE_SIZE=40}_setFilter(t){this.filter=t,this.page=0,this._search()}_showDetail(t){this.dispatchEvent(new CustomEvent("show-detail",{detail:t}))}_search(){const t=this.shadowRoot.querySelector("input");this.query=t?t.value:"",this.requestUpdate()}get _filteredNodes(){let t=this.data?this.data.nodes:[];if(this.filter!=="all"&&(t=t.filter(e=>e.t===this.filter)),this.era&&(t=t.filter(e=>Jt(e,this.era))),this.query){const e=this.bm25?this.bm25(this.query):[],i=new Set(e.map(s=>this.data.nodes[s.index].id));t=t.filter(s=>i.has(s.id))}return t}render(){if(!this.data)return"";const t=this._filteredNodes,e=t.length,i=Math.ceil(e/this.PAGE_SIZE),s=this.page*this.PAGE_SIZE,a=Math.min(s+this.PAGE_SIZE,e),n=t.slice(s,a);return p`
      <div class="filters">
        <button class="filter-btn ${this.filter==="all"?"active":""}"
          @click=${()=>this._setFilter("all")}>${g("all")}</button>
        <button class="filter-btn ${this.filter==="place"?"active":""}"
          @click=${()=>this._setFilter("place")}>&#x1F4CD; Places</button>
        <button class="filter-btn ${this.filter==="person"?"active":""}"
          @click=${()=>this._setFilter("person")}>&#x1F464; People</button>
        <button class="filter-btn ${this.filter==="event"?"active":""}"
          @click=${()=>this._setFilter("event")}>&#x1F4C5; Events</button>
      </div>

      <div class="status">
        ${this.query?g("results",{n:e}):g("entitiesTotal",{n:e})}
        ${this.query?"":` - ${g("page",{p:this.page+1,t:i})}`}
      </div>

      ${n.map(l=>p`
        <div class="card" @click=${()=>this._showDetail(l.id)}>
          <div>
            <span class="card-title">${l.l}</span>
            ${l.lv?p`<span class="card-title-vi"> ${l.lv}</span>`:""}
            <span class="badge badge-${l.t||"other"}">${l.t||"other"}</span>
          </div>
          <div class="card-desc">${l.d||""}</div>
        </div>
      `)}

      ${e>this.PAGE_SIZE?p`
        <div class="pagination">
          ${this.page>0?p`
            <button class="filter-btn" @click=${()=>{this.page--}}>
              &larr; ${g("prev")}
            </button>
          `:""}
          <span>${this.page+1} / ${i}</span>
          ${a<e?p`
            <button class="filter-btn" @click=${()=>{this.page++}}>
              ${g("next")} &rarr;
            </button>
          `:""}
        </div>
      `:""}
    `}}f(X,"styles",x`
    :host { display: block; padding: 8px 0; }

    .filters {
      display: flex; gap: 5px; flex-wrap: wrap;
      justify-content: center; margin: 8px 0;
    }

    .filter-btn {
      padding: 3px 12px;
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 20px; background: transparent;
      color: var(--text2); cursor: pointer;
      font-size: 0.74rem;
      transition: 0.3s;
    }

    .filter-btn:hover { border-color: var(--a1); color: var(--a1); }
    .filter-btn.active {
      background: rgba(99, 102, 241, 0.15);
      border-color: var(--a1); color: var(--a1);
    }

    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--md);
      padding: 12px 16px; margin-bottom: 6px;
      cursor: pointer; transition: 0.3s;
    }

    .card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
    }

    .card-title { font-size: 0.92rem; font-weight: 600; color: var(--a1); }
    .card-title-vi { font-size: 0.75rem; color: var(--text3); font-style: italic; }

    .card-desc {
      color: var(--text2); font-size: 0.8rem;
      line-height: 1.5;
      display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }

    .badge {
      font-size: 0.6rem; padding: 1px 8px;
      border-radius: 20px; font-weight: 500;
    }

    .badge-place { background: rgba(34, 197, 94, 0.15); color: var(--ok); }
    .badge-person { background: rgba(99, 102, 241, 0.15); color: var(--a1); }
    .badge-event { background: rgba(234, 179, 8, 0.15); color: var(--warn); }
    .badge-other { background: var(--bg3); color: var(--text3); }

    .status { text-align: center; font-size: 0.82rem; color: var(--text3); }
    .pagination { text-align: center; display: flex; gap: 8px; justify-content: center; margin-top: 10px; }
  `),f(X,"properties",{data:{},bm25:{},filter:{state:!0},era:{state:!0},page:{state:!0},query:{state:!0}});customElements.define("mini-search",X);class Y extends b{constructor(){super(...arguments);f(this,"_map",null)}firstUpdated(){this._initMap()}_initMap(){if(!this.data||typeof L>"u")return;const e=this.shadowRoot.getElementById("map");if(!e||this._map)return;this._map=L.map(e).setView([16,107.5],6),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18}).addTo(this._map),this.data.nodes.filter(s=>s.m&&(s.m.coordinates||s.m.coord)).forEach(s=>{const a=s.m.coordinates||s.m.coord;if(!a)return;const n=a.match(/(-?\d+\.?\d*)\s*[,\s]\s*(-?\d+\.?\d*)/);if(!n)return;const l=parseFloat(n[1]),o=parseFloat(n[2]);if(isNaN(l)||isNaN(o))return;const c=L.circleMarker([l,o],{radius:6,color:"#6366f1",fillOpacity:.5});c.bindPopup("<b>"+s.l+"</b>"+(s.lv?"<br>"+s.lv:"")),c.addTo(this._map)})}render(){return p`
      <div class="legend">
        <span><span class="dot" style="background:var(--ok)"></span> ${g("mapPlaces")}</span>
        <span><span class="dot" style="background:var(--a1)"></span> ${g("mapPeople")}</span>
        <span><span class="dot" style="background:var(--warn)"></span> ${g("mapEvents")}</span>
      </div>
      <div id="map"></div>
    `}}f(Y,"styles",x`
    :host { display: block; padding: 8px 0; }
    #map { width: 100%; height: 450px; border-radius: var(--md); }
    .legend {
      display: flex; gap: 12px; justify-content: center;
      flex-wrap: wrap; font-size: 0.75rem;
      color: var(--text2); margin: 6px 0;
    }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  `),f(Y,"properties",{data:{}});customElements.define("mini-map",Y);class At extends b{render(){return p`<div class="placeholder">${g("timeline")} - coming soon</div>`}}f(At,"styles",x`
    :host { display: block; padding: 8px 0; }
    .placeholder { color: var(--text3); text-align: center; padding: 40px; }
  `);customElements.define("mini-timeline",At);class kt extends b{render(){return p`<div class="placeholder">${g("tree")} - coming soon</div>`}}f(kt,"styles",x`
    :host { display: block; padding: 8px 0; }
    .placeholder { color: var(--text3); text-align: center; padding: 40px; }
  `);customElements.define("mini-tree",kt);class Q extends b{render(){return this.data?p`
      <div>
        <span class="badge">
          &#x1F4E6; ${g("entities")}: <strong>${this.data.meta.entity_count.toLocaleString()}</strong>
        </span>
        <span class="badge">&#x1F310; ${g("source")}: WikiData</span>
      </div>
      <div style="margin-top:8px">
        &#x1F1FB;&#x1F1F3; ${g("builtWith")}
        <a href="https://github.com/minidivn/minidi-spider">minidi-spider</a>
        &middot; <a href="https://github.com/minidivn/minidi-vn-data">GitHub</a>
      </div>
    `:""}}f(Q,"styles",x`
    :host {
      display: block; text-align: center; padding: 24px;
      color: var(--text3); font-size: 0.76rem;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      margin-top: 32px;
    }
    a { color: var(--a1); text-decoration: none; }
    .badge {
      display: inline-block; padding: 4px 12px;
      background: var(--bg3); border-radius: var(--sm); margin: 2px;
    }
  `),f(Q,"properties",{data:{}});customElements.define("mini-footer",Q);class tt extends b{constructor(){super(),this._open=!1,this._messages=[]}_toggle(){this._open=!this._open,this._open&&this._messages.length===0&&this._addMessage("bot","Hello! Ask me about Vietnam history, people, or culture!"),this.requestUpdate()}_addMessage(t,e){this._messages.push({role:t,text:e}),this.requestUpdate(),setTimeout(()=>{const i=this.shadowRoot.querySelector(".messages");i&&(i.scrollTop=i.scrollHeight)},50)}_send(){const t=this.shadowRoot.querySelector("input");if(!t||!t.value.trim())return;const e=t.value;t.value="",this._addMessage("user",e),this._respond(e)}_respond(t){const e=t.toLowerCase();let i="Try searching in the search bar above!";if(e.includes("entity")||e.includes("how many")||e.includes("stat")){const s=this.data?this.data.meta.entity_count.toLocaleString():"--",a=this.data?this.data.meta.edge_count.toLocaleString():"--";i="The graph has "+s+" entities and "+a+" relations."}else(e.includes("dynasty")||e.includes("king"))&&(i="Try the Dynasty Tree view (tree icon) or search for specific dynasties!");setTimeout(()=>this._addMessage("bot",i),300)}render(){return p`
      <div class="panel ${this._open?"open":""}">
        <div class="header">
          <span>&#x1F916; MiniDi Assistant</span>
          <button @click=${this._toggle}>&times;</button>
        </div>
        <div class="messages">
          ${this._messages.map(t=>p`
            <div class="msg ${t.role}">${t.text}</div>
          `)}
        </div>
        <div class="input-area">
          <input type="text" placeholder="${g("chatPlaceholder")}"
            @keydown=${t=>{t.key==="Enter"&&this._send()}}>
          <button @click=${this._send}>&#x27A1;</button>
        </div>
      </div>
      <button class="toggle-btn" @click=${this._toggle}>&#x1F4AC;</button>
    `}}f(tt,"styles",x`
    :host { position: fixed; bottom: 20px; right: 20px; z-index: 90; }

    .toggle-btn {
      width: 48px; height: 48px; border-radius: 50%; border: none;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      color: #fff; font-size: 1.3rem; cursor: pointer;
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
      transition: 0.3s;
    }

    .toggle-btn:hover { transform: scale(1.1); }

    .panel {
      width: 340px; max-height: 460px;
      background: var(--bg2);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--lg); overflow: hidden;
      display: none; flex-direction: column;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
    }

    .panel.open { display: flex; }

    .header {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      display: flex; justify-content: space-between;
    }

    .header span { font-weight: 600; font-size: 0.85rem; }
    .header button { background: none; border: none; color: var(--text3); cursor: pointer; font-size: 1.1rem; }

    .messages {
      flex: 1; overflow-y: auto; padding: 12px 16px;
      min-height: 200px; max-height: 300px;
    }

    .msg {
      font-size: 0.8rem; line-height: 1.5; margin-bottom: 8px;
      padding: 8px 12px; border-radius: var(--md); max-width: 85%;
    }

    .msg.bot { background: var(--bg3); color: var(--text2); }
    .msg.user { background: rgba(99, 102, 241, 0.15); color: var(--text); margin-left: auto; }

    .input-area {
      display: flex; padding: 8px 12px; gap: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .input-area input {
      flex: 1; padding: 7px 10px;
      background: var(--bg3);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--sm); color: var(--text); font-size: 0.8rem;
      outline: none;
    }

    .input-area button {
      padding: 7px 14px; border: none; border-radius: var(--sm);
      background: var(--a1); color: #fff; cursor: pointer; font-size: 0.8rem;
    }
  `),f(tt,"properties",{data:{}});customElements.define("mini-chat",tt);class et extends b{_close(){this.dispatchEvent(new CustomEvent("close"))}render(){if(!this.node)return"";const t=this.node,e=this.edges?this.edges.filter(i=>i.s===t.id).slice(0,20):[];return p`
      <div class="panel">
        <button class="close" @click=${this._close}>&times;</button>

        <div class="title">${t.l}</div>
        ${t.lv?p`<div class="title-vi">${t.lv}</div>`:""}

        <span class="badge badge-${t.t||"other"}">${t.t||"other"}</span>

        <div class="desc">${t.d||"No description available."}</div>

        ${e.length?p`
          <div class="relations">
            <h3>&#x1F517; ${g("relations")}</h3>
            ${e.map(i=>p`
              <div class="relation-item">
                <span>${i.r}</span>
                <span>&rarr;</span>
                <strong>${i.tl||i.t}</strong>
              </div>
            `)}
          </div>
        `:""}

        <div class="wikipedia-link">
          <a href="https://www.wikidata.org/wiki/${t.id}" target="_blank">
            &#x1F517; ${g("wiki")} &rarr;
          </a>
        </div>
      </div>
    `}}f(et,"styles",x`
    :host {
      position: fixed; inset: 0; z-index: 100;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
    }

    .panel {
      background: var(--bg2);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--lg); padding: 28px;
      max-width: 600px; width: 92%;
      max-height: 85vh; overflow-y: auto;
      position: relative;
    }

    .close {
      position: absolute; top: 12px; right: 16px;
      font-size: 1.4rem; cursor: pointer;
      color: var(--text3); background: none; border: none;
    }
    .close:hover { color: var(--text); }

    .title { font-size: 1.3rem; font-weight: 700; }
    .title-vi { font-size: 0.9rem; color: var(--text3); margin-bottom: 4px; }

    .desc {
      color: var(--text2); line-height: 1.6; margin: 10px 0;
      font-size: 0.88rem;
    }

    .badge { font-size: 0.65rem; padding: 2px 10px; border-radius: 20px; font-weight: 500; }
    .badge-place { background: rgba(34, 197, 94, 0.15); color: var(--ok); }
    .badge-person { background: rgba(99, 102, 241, 0.15); color: var(--a1); }
    .badge-event { background: rgba(234, 179, 8, 0.15); color: var(--warn); }
    .badge-other { background: var(--bg3); color: var(--text3); }

    .relations { margin-top: 12px; }
    .relations h3 { font-size: 0.85rem; color: var(--a2); margin-bottom: 6px; }
    .relation-item {
      display: flex; align-items: center; gap: 4px;
      padding: 2px 0; font-size: 0.78rem;
      color: var(--text); cursor: pointer;
    }
    .relation-item:hover { color: var(--a1); }

    .wikipedia-link { margin-top: 12px; }
    .wikipedia-link a { color: var(--a1); font-size: 0.82rem; }
  `),f(et,"properties",{node:{},edges:{}});customElements.define("mini-detail",et);class it extends b{constructor(){super(),this.data=null,this.loaded=!1,this.progress=0,this.totalSize=0,this.currentView="search",this.entityDetail=null,this.bm25=null,this._loadData()}async _loadData(){try{this.data=await Kt((t,e)=>{this.progress=t,this.totalSize=e}),this.loaded=!0,this.bm25=Yt(this.data.nodes)}catch(t){console.error("Failed to load data:",t)}}_onNavigate(t){this.currentView=t}_onShowDetail(t){const e=this.data.nodes.find(i=>i.id===t);e&&(this.entityDetail=e)}_onCloseDetail(){this.entityDetail=null}render(){if(!this.loaded){const t=this.totalSize?Math.round(this.progress/this.totalSize*100):0;return p`
        <div class="splash">
          <div class="logo">&#x1F1FB;&#x1F1F3; MiniDi</div>
          <div class="spinner"></div>
          <div class="status">Loading Vietnam knowledge graph...</div>
          <div class="track">
            <div class="bar" style="width: ${t}%"></div>
          </div>
          <div class="pct">
            ${t}%
            (${(this.progress/1048576).toFixed(1)}
            / ${(this.totalSize/1048576).toFixed(1)} MB)
          </div>
        </div>
      `}return p`
      <mini-header
        .view=${this.currentView}
        @navigate=${this._onNavigate}
      ></mini-header>

      <mini-hero .data=${this.data}></mini-hero>

      <div class="main-content">
        ${this._renderView()}
      </div>

      <mini-footer .data=${this.data}></mini-footer>
      <mini-chat .data=${this.data}></mini-chat>

      ${this.entityDetail?p`
        <mini-detail
          .node=${this.entityDetail}
          .edges=${this.data.edges}
          @close=${this._onCloseDetail}
        ></mini-detail>
      `:""}
    `}_renderView(){switch(this.currentView){case"map":return p`<mini-map .data=${this.data}></mini-map>`;case"timeline":return p`<mini-timeline .data=${this.data}></mini-timeline>`;case"tree":return p`<mini-tree .data=${this.data}></mini-tree>`;default:return p`
          <mini-search
            .data=${this.data}
            .bm25=${this.bm25}
            @show-detail=${this._onShowDetail}
          ></mini-search>
        `}}}f(it,"styles",x`
    :host {
      --bg: #070b17;
      --bg2: #0f172a;
      --bg3: #1e293b;
      --a1: #6366f1;
      --a2: #06b6d4;
      --a3: #a78bfa;
      --text: #f1f5f9;
      --text2: #94a3b8;
      --text3: #64748b;
      --ok: #22c55e;
      --warn: #eab308;
      --sm: 6px;
      --md: 10px;
      --lg: 16px;
      display: block;
      min-height: 100vh;
      font-family: "Inter", sans-serif;
    }

    .splash {
      position: fixed; inset: 0; z-index: 999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: var(--bg);
      transition: opacity 0.8s, transform 0.8s;
    }

    .splash.hidden {
      opacity: 0; transform: scale(1.05);
      pointer-events: none;
    }

    .spinner {
      width: 80px; height: 80px;
      border-radius: 50%;
      border: 3px solid var(--bg3);
      border-top-color: var(--a1);
      border-right-color: var(--a2);
      animation: spin 1s linear infinite;
      margin-bottom: 24px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .logo {
      font-size: 2.5rem; font-weight: 800;
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .status { color: var(--text3); font-size: 0.9rem; margin-bottom: 20px; }

    .track {
      width: 240px; height: 4px;
      background: var(--bg3); border-radius: 2px; overflow: hidden;
    }

    .bar {
      height: 100%; width: 0%;
      background: linear-gradient(90deg, var(--a1), var(--a2));
      border-radius: 2px; transition: width 0.3s;
    }

    .pct { color: var(--text3); font-size: 0.75rem; margin-top: 8px; }
  `),f(it,"properties",{data:{state:!0},loaded:{state:!0},progress:{state:!0},totalSize:{state:!0},currentView:{state:!0},entityDetail:{state:!0}});customElements.define("mini-app",it);
