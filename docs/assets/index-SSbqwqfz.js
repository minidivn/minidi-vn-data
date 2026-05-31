var ie=Object.defineProperty;var ae=(s,t,e)=>t in s?ie(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var x=(s,t,e)=>ae(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();let ot=null;function se(s){ot={...s}}function C(){if(!ot)throw new Error("[@minidi/minidi-data-ghpage] Config not set. Call createMiniDiApp(config) first.");return ot}const et={countryCode:"xx",countryName:"Unknown",countryEmoji:"🌍",languages:["en"],defaultLanguage:"en",title:"Knowledge Graph",subtitle:"Exploring {n} WikiData entities",splashTitle:"MiniDi",splashMessage:"Loading knowledge graph...",slides:[],mapCenter:[20,0],mapZoom:2,eras:[],eraRanges:{},githubRepo:"",dataSource:"WikiData",dataPath:"index.json",chatCountry:"",chatGreeting:"Ask me about the knowledge graph."};function re(s){if(!s||typeof s!="object")throw new Error("[@minidi/minidi-data-ghpage] Config must be a plain object.");const t={...et,...s};(!Array.isArray(t.languages)||t.languages.length===0)&&(t.languages=et.languages,t.defaultLanguage=et.defaultLanguage),t.languages.includes(t.defaultLanguage)||(t.defaultLanguage=t.languages[0]),(!t.translations||typeof t.translations!="object")&&(t.translations={});for(const e of t.languages)t.translations[e]||(t.translations[e]={});return t}let K={},J="en";function ne(s,t){K=s||{},J=t||"en"}function $t(s){J=s}function kt(){return J}function y(s,t){let i=(K[J]||{})[s];if(i===void 0){const a=Object.keys(K)[0];i=a?K[a][s]:void 0}if(i===void 0&&(i=s),t)for(const a in t)i=i.replace("{"+a+"}",t[a]);return i}const qt="minidi-prefs";let Vt="en";function oe(s){Vt=s||"en"}function it(){return{lang:Vt,theme:"dark",aiModel:"mini"}}function Wt(){try{const s=localStorage.getItem(qt);return s?{...it(),...JSON.parse(s)}:{...it()}}catch{return{...it()}}}function le(s){try{localStorage.setItem(qt,JSON.stringify(s))}catch{}}function Yt(s){const t=document.documentElement,e=document.body,i=(a,r)=>t.style.setProperty(a,r);s==="light"?(i("--bg","#f8fafc"),i("--bg2","#ffffff"),i("--bg3","#e2e8f0"),i("--text","#0f172a"),i("--text2","#475569"),i("--text3","#94a3b8"),i("--a1","#6366f1"),i("--a2","#0891b2"),i("--a3","#7c3aed"),i("--ok","#16a34a"),i("--warn","#ca8a04"),i("--border-color","rgba(0,0,0,0.1)"),e&&(e.style.background="#f8fafc",e.style.color="#0f172a")):(i("--bg","#070b17"),i("--bg2","#0f172a"),i("--bg3","#1e293b"),i("--text","#f1f5f9"),i("--text2","#94a3b8"),i("--text3","#64748b"),i("--a1","#6366f1"),i("--a2","#06b6d4"),i("--a3","#a78bfa"),i("--ok","#22c55e"),i("--warn","#eab308"),i("--border-color","rgba(255,255,255,0.07)"),e&&(e.style.background="#070b17",e.style.color="#f1f5f9"))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,Et=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),At=new WeakMap;let Bt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&At.set(e,t))}return t}toString(){return this.cssText}};const de=s=>new Bt(typeof s=="string"?s:s+"",void 0,St),S=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,a,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[r+1],s[0]);return new Bt(e,s,St)},ce=(s,t)=>{if(Et)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),a=Z.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},Ct=Et?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return de(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pe,defineProperty:he,getOwnPropertyDescriptor:ge,getOwnPropertyNames:ue,getOwnPropertySymbols:fe,getPrototypeOf:me}=Object,D=globalThis,Tt=D.trustedTypes,be=Tt?Tt.emptyScript:"",at=D.reactiveElementPolyfillSupport,F=(s,t)=>s,lt={toAttribute(s,t){switch(t){case Boolean:s=s?be:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Xt=(s,t)=>!pe(s,t),Dt={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:Xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),D.litPropertyMetadata??(D.litPropertyMetadata=new WeakMap);let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&he(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:r}=ge(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:a,set(n){const l=a==null?void 0:a.call(this);r==null||r.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dt}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const t=me(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const e=this.properties,i=[...ue(e),...fe(e)];for(const a of i)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)e.unshift(Ct(a))}else t!==void 0&&e.push(Ct(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ce(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:lt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,e){var r,n;const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const l=i.getPropertyOptions(a),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:lt;this._$Em=a;const h=o.fromAttribute(e,l.type);this[a]=h??((n=this._$Ej)==null?void 0:n.get(a))??h,this._$Em=null}}requestUpdate(t,e,i,a=!1,r){var n;if(t!==void 0){const l=this.constructor;if(a===!1&&(r=this[t]),i??(i=l.getPropertyOptions(t)),!((i.hasChanged??Xt)(r,e)||i.useDefault&&i.reflect&&r===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,n]of a){const{wrapped:l}=n,o=this[r];l!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[F("elementProperties")]=new Map,O[F("finalized")]=new Map,at==null||at({ReactiveElement:O}),(D.reactiveElementVersions??(D.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,Pt=s=>s,Q=q.trustedTypes,Mt=Q?Q.createPolicy("lit-html",{createHTML:s=>s}):void 0,Gt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Kt="?"+T,ve=`<${Kt}>`,H=document,V=()=>H.createComment(""),W=s=>s===null||typeof s!="object"&&typeof s!="function",zt=Array.isArray,xe=s=>zt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",st=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Rt=/>/g,M=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Ht=/"/g,Zt=/^(?:script|style|textarea|title)$/i,_e=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),d=_e(1),N=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Nt=new WeakMap,R=H.createTreeWalker(H,129);function Qt(s,t){if(!zt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const ye=(s,t)=>{const e=s.length-1,i=[];let a,r=t===2?"<svg>":t===3?"<math>":"",n=I;for(let l=0;l<e;l++){const o=s[l];let h,f,p=-1,u=0;for(;u<o.length&&(n.lastIndex=u,f=n.exec(o),f!==null);)u=n.lastIndex,n===I?f[1]==="!--"?n=Lt:f[1]!==void 0?n=Rt:f[2]!==void 0?(Zt.test(f[2])&&(a=RegExp("</"+f[2],"g")),n=M):f[3]!==void 0&&(n=M):n===M?f[0]===">"?(n=a??I,p=-1):f[1]===void 0?p=-2:(p=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?M:f[3]==='"'?Ht:Ut):n===Ht||n===Ut?n=M:n===Lt||n===Rt?n=I:(n=M,a=void 0);const g=n===M&&s[l+1].startsWith("/>")?" ":"";r+=n===I?o+ve:p>=0?(i.push(h),o.slice(0,p)+Gt+o.slice(p)+T+g):o+T+(p===-2?l:g)}return[Qt(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let r=0,n=0;const l=t.length-1,o=this.parts,[h,f]=ye(t,e);if(this.el=Y.createElement(h,i),R.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=R.nextNode())!==null&&o.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(Gt)){const u=f[n++],g=a.getAttribute(p).split(T),v=/([.?@])?(.*)/.exec(u);o.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?$e:v[1]==="?"?ke:v[1]==="@"?Ee:tt}),a.removeAttribute(p)}else p.startsWith(T)&&(o.push({type:6,index:r}),a.removeAttribute(p));if(Zt.test(a.tagName)){const p=a.textContent.split(T),u=p.length-1;if(u>0){a.textContent=Q?Q.emptyScript:"";for(let g=0;g<u;g++)a.append(p[g],V()),R.nextNode(),o.push({type:2,index:++r});a.append(p[u],V())}}}else if(a.nodeType===8)if(a.data===Kt)o.push({type:2,index:r});else{let p=-1;for(;(p=a.data.indexOf(T,p+1))!==-1;)o.push({type:7,index:r}),p+=T.length-1}r++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function j(s,t,e=s,i){var n,l;if(t===N)return t;let a=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=W(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==r&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),r===void 0?a=void 0:(a=new r(s),a._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=a:e._$Cl=a),a!==void 0&&(t=j(s,a._$AS(s,t.values),a,i)),t}class we{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=((t==null?void 0:t.creationScope)??H).importNode(e,!0);R.currentNode=a;let r=R.nextNode(),n=0,l=0,o=i[0];for(;o!==void 0;){if(n===o.index){let h;o.type===2?h=new B(r,r.nextSibling,this,t):o.type===1?h=new o.ctor(r,o.name,o.strings,this,t):o.type===6&&(h=new Se(r,this,t)),this._$AV.push(h),o=i[++l]}n!==(o==null?void 0:o.index)&&(r=R.nextNode(),n++)}return R.currentNode=H,a}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),W(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Y.createElement(Qt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(e);else{const n=new we(a,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new Y(t)),e}k(t){zt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const r of t)a===e.length?e.push(i=new B(this.O(V()),this.O(V()),this,this.options)):i=e[a],i._$AI(r),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const a=Pt(t).nextSibling;Pt(t).remove(),t=a}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(t,e=this,i,a){const r=this.strings;let n=!1;if(r===void 0)t=j(this,t,e,0),n=!W(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const l=t;let o,h;for(t=r[0],o=0;o<r.length-1;o++)h=j(this,l[i+o],e,o),h===N&&(h=this._$AH[o]),n||(n=!W(h)||h!==this._$AH[o]),h===$?t=$:t!==$&&(t+=(h??"")+r[o+1]),this._$AH[o]=h}n&&!a&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $e extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}let ke=class extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}};class Ee extends tt{constructor(t,e,i,a,r){super(t,e,i,a,r),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??$)===N)return;const i=this._$AH,a=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==$&&(i===$||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Se{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const rt=q.litHtmlPolyfillSupport;rt==null||rt(Y,B),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.3.3");const ze=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let a=i._$litPart$;if(a===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=a=new B(t.insertBefore(V(),r),r,void 0,e??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis;let k=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ze(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};var Ft;k._$litElement$=!0,k.finalized=!0,(Ft=U.litElementHydrateSupport)==null||Ft.call(U,{LitElement:k});const nt=U.litElementPolyfillSupport;nt==null||nt({LitElement:k});(U.litElementVersions??(U.litElementVersions=[])).push("4.2.2");function Ae(s,t){const e=t||"index.json";return new Promise((i,a)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onprogress=n=>{n.lengthComputable&&s&&s(n.loaded,n.total)},r.onload=()=>{try{const n=new TextDecoder("utf-8"),l=JSON.parse(n.decode(r.response));i(l)}catch(n){a(n)}},r.onerror=()=>a(new Error("Failed to load "+e)),r.send()})}function Ce(s){const t={};return s.forEach(e=>{const i=e.t||"other";t[i]=(t[i]||0)+1}),t}function Te(s){const i=s.length;let a=0;const r=[],n=[],l={};for(let o=0;o<i;o++){const f=[s[o].l||"",s[o].lv||"",s[o].d||""].join(" ").toLowerCase().split(/\s+/).filter(u=>u.length>1);r.push(f.length),a+=f.length;const p={};f.forEach(u=>{p[u]=(p[u]||0)+1}),n.push(p);for(const u in p)l[u]=(l[u]||0)+1}return a/=i,function(h){const f=h.toLowerCase().split(/\s+/).filter(u=>u.length>1),p=[];for(let u=0;u<i;u++){let g=0;const v=r[u],c=n[u];for(const _ of f){const m=c[_]||0;if(m===0)continue;const b=Math.log((i-(l[_]||0)+.5)/((l[_]||0)+.5)+1);g+=b*(m*(1.5+1)/(m+1.5*(1-.75+.75*(v/a))))}g>0&&p.push({index:u,score:g})}return p.sort((u,g)=>g.score-u.score),p}}class dt extends k{constructor(){super(),this.lang="en",this._dropdownOpen=!1;const t=C();this._cfg=t}_toggleDropdown(){this._dropdownOpen=!this._dropdownOpen,this.requestUpdate()}_closeDropdown(){this._dropdownOpen=!1,this.requestUpdate()}_navigate(t){this.dispatchEvent(new CustomEvent("navigate",{detail:t}))}_onSearchKeydown(t){if(t.key==="Enter"){const e=t.target.value.trim();this.dispatchEvent(new CustomEvent("search-input",{detail:e})),this.dispatchEvent(new CustomEvent("navigate",{detail:"search"}))}}_setLang(t){this.lang=t,$t(t),this.dispatchEvent(new CustomEvent("lang-changed",{detail:t}))}render(){const t=this._cfg,e=this.view==="detail",i=t.languages.map(r=>d`
        <button
          class="lang-btn ${this.lang===r?"active":""}"
          @click=${()=>this._setLang(r)}
        >
          ${r.toUpperCase()}
        </button>
      `),a=d`
      <div class="nav-tabs">
        <button class="nav-tab ${this.view==="search"?"active":""}" @click=${()=>this._navigate("search")} title="Search">🔍</button>
        <button class="nav-tab ${this.view==="map"?"active":""}" @click=${()=>this._navigate("map")} title="Map">🗺</button>
        <button class="nav-tab ${this.view==="timeline"?"active":""}" @click=${()=>this._navigate("timeline")} title="Timeline">📅</button>
        <button class="nav-tab ${this.view==="tree"?"active":""}" @click=${()=>this._navigate("tree")} title="Dynasty Tree">🌳</button>
      </div>
      <div class="lang-toggle">${i}</div>
      <a href="https://github.com/${t.githubRepo}" target="_blank" class="github-link" title="GitHub">📒</a>
      <div class="dropdown">
        <button class="dropdown-btn" @click=${this._toggleDropdown}>
          ☰ Views <span class="arrow ${this._dropdownOpen?"open":""}">▼</span>
        </button>
        <div class="dropdown-menu ${this._dropdownOpen?"open":""}">
          <button class="dropdown-item" @click=${()=>{this._navigate("timeline"),this._closeDropdown()}}><span>📅</span> Timeline</button>
          <button class="dropdown-item" @click=${()=>{this._navigate("map"),this._closeDropdown()}}><span>🗺</span> Map</button>
          <button class="dropdown-item" @click=${()=>{this._navigate("tree"),this._closeDropdown()}}><span>🌳</span> Dynasty Tree</button>
          <button class="dropdown-item" @click=${()=>{this._navigate("graph"),this._closeDropdown()}}><span>🕸</span> Graph View</button>
          <button class="dropdown-item" @click=${()=>{this._navigate("options"),this._closeDropdown()}}><span>⚙</span> Options</button>
        </div>
      </div>
    `;return e?d`
        <button class="back-btn" @click=${()=>this._navigate("search")}>← Back</button>
        <span class="detail-title" style="display:flex;align-items:center;gap:6px">
          <span style="color:var(--text3);font-size:0.7rem">Home</span>
          <span style="color:var(--text3);font-size:0.6rem"> › </span>
          ${this.entityName||""}
        </span>
        <div class="nav-tabs">
          <button class="nav-tab" @click=${()=>this._navigate("map")} title="Map">🗺</button>
          <button class="nav-tab" @click=${()=>this._navigate("timeline")} title="Timeline">📅</button>
          <button class="nav-tab" @click=${()=>this._navigate("tree")} title="Dynasty Tree">🌳</button>
        </div>
        <div class="lang-toggle">${i}</div>
        <div class="dropdown">
          <button class="dropdown-btn" @click=${this._toggleDropdown}>
            ☰ Views <span class="arrow ${this._dropdownOpen?"open":""}">▼</span>
          </button>
          <div class="dropdown-menu ${this._dropdownOpen?"open":""}">
            <button class="dropdown-item" @click=${()=>{this._navigate("timeline"),this._closeDropdown()}}><span>📅</span> Timeline</button>
            <button class="dropdown-item" @click=${()=>{this._navigate("map"),this._closeDropdown()}}><span>🗺</span> Map</button>
            <button class="dropdown-item" @click=${()=>{this._navigate("tree"),this._closeDropdown()}}><span>🌳</span> Dynasty Tree</button>
          </div>
        </div>
      `:d`
      <div class="logo" @click=${()=>this._navigate("search")}>
        <span class="logo-icon">${t.countryEmoji}</span>
        <span>MiniDi</span>
      </div>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder=${y("search")} @keydown=${this._onSearchKeydown} />
      </div>
      ${a}
    `}}x(dt,"styles",S`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 max(16px, calc((100vw - 1100px) / 2));
      height: 56px;
      background: var(--bg2, rgba(15, 23, 42, 0.85));
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.07));
      position: sticky;
      top: 0;
      z-index: 50;
      color: var(--text, #f1f5f9);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      flex-shrink: 0;
    }
    .logo-icon {
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    .back-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      color: var(--text2);
      cursor: pointer;
      font-size: 0.85rem;
      font-family: inherit;
      padding: 4px 10px;
      border-radius: var(--sm);
      transition: 0.2s;
      flex-shrink: 0;
    }
    .back-btn:hover { color: var(--text); background: var(--border-color, rgba(255,255,255,0.07)); }
    .detail-title {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }
    .search-box { flex: 1; max-width: 360px; position: relative; }
    .search-box input {
      width: 100%;
      padding: 7px 12px 7px 32px;
      background: var(--bg3, #1e293b);
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      border-radius: var(--md);
      color: var(--text);
      font-size: 0.85rem;
      outline: none;
    }
    .search-box input:focus { border-color: var(--a1); box-shadow: 0 0 16px rgba(99,102,241,0.15); }
    .search-box input::placeholder { color: var(--text3); }
    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text3);
      font-size: 0.8rem;
    }
    .nav-tabs {
      display: flex;
      gap: 2px;
      background: var(--bg3);
      border-radius: var(--sm);
      padding: 2px;
    }
    .nav-tab {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      background: transparent;
      color: var(--text3);
      cursor: pointer;
      font-size: 0.78rem;
      transition: 0.3s;
    }
    .nav-tab:hover { color: var(--text2); }
    .nav-tab.active { background: var(--a1); color: #fff; }
    .lang-toggle {
      display: flex;
      background: var(--bg3);
      border-radius: var(--sm);
      overflow: hidden;
      flex-shrink: 0;
    }
    .lang-btn {
      padding: 4px 9px;
      border: none;
      background: transparent;
      color: var(--text3);
      cursor: pointer;
      font-size: 0.75rem;
      transition: 0.2s;
    }
    .lang-btn.active { background: var(--a1); color: #fff; }
    .dropdown { position: relative; flex-shrink: 0; }
    .dropdown-btn {
      display: flex; align-items: center; gap: 4px;
      padding: 5px 10px;
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      border-radius: var(--sm);
      background: transparent; color: var(--text2); cursor: pointer;
      font-size: 0.75rem; font-family: inherit; transition: 0.2s;
    }
    .dropdown-btn:hover { border-color: var(--a1); color: var(--text); }
    .dropdown-btn .arrow { font-size: 0.6rem; transition: transform 0.2s; }
    .dropdown-btn .arrow.open { transform: rotate(180deg); }
    .dropdown-menu {
      position: absolute; top: 100%; left: 50%;
      transform: translateX(-50%); margin-top: 6px;
      background: var(--bg2); border: 1px solid rgba(255,255,255,0.1);
      border-radius: var(--md); min-width: 170px; max-width: min(300px,90vw);
      box-shadow: 0 8px 30px rgba(0,0,0,0.5);
      display: none; flex-direction: column; padding: 4px; z-index: 999;
    }
    .dropdown-menu.open { display: flex; }
    .dropdown-item {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px; border-radius: var(--sm); background: none;
      border: none; color: var(--text2); cursor: pointer;
      font-size: 0.8rem; font-family: inherit; text-align: left; transition: 0.12s;
    }
    .dropdown-item:hover { background: var(--border-color, rgba(255,255,255,0.07)); color: var(--text); }
    .github-link { color: var(--text3); font-size: 1.2rem; text-decoration: none; flex-shrink: 0; }
    @media (max-width: 768px) {
      :host { gap: 6px; padding: 0 10px; height: 50px; }
      .search-box { display: none; }
      .nav-tab { padding: 4px 7px; font-size: 0.72rem; }
      .lang-btn { padding: 3px 7px; font-size: 0.7rem; }
      .logo { font-size: 0.85rem; }
      .logo-icon { width: 24px; height: 24px; font-size: 0.85rem; }
    }
  `),x(dt,"properties",{view:{},entityName:{},lang:{}});customElements.define("mini-header",dt);class ct extends k{_onFilter(t){this.dispatchEvent(new CustomEvent("filter-type",{detail:{filter:t,query:""},bubbles:!0,composed:!0}))}render(){if(!this.data)return"";const t=C(),e=Ce(this.data.nodes),i=[{type:"all",count:this.data.meta.entity_count,label:"entities"},{type:"event",count:e.event||0,label:"events"},{type:"person",count:e.person||0,label:"people"},{type:"place",count:e.place||0,label:"places"}];return d`
      <h1><span class="gradient-text">${t.countryEmoji} ${t.title}</span></h1>
      <p>${t.subtitle.replace("{n}",this.data.meta.entity_count.toLocaleString())}</p>
      <div class="stats">
        ${i.map(a=>d`
          <div class="stat" @click=${()=>this._onFilter(a.type)}>
            <div class="num">${a.count.toLocaleString()}</div>
            <div class="label">${y(a.label)}</div>
          </div>
        `)}
      </div>
    `}}x(ct,"styles",S`
    :host {
      position: relative;
      text-align: center;
      padding: 40px max(20px, calc((100vw - 1100px) / 2)) 28px;
      min-height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .gradient-text {
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h1 { font-size: 2rem; font-weight: 800; margin: 0 0 6px; }
    p { color: var(--text2); font-size: 0.9rem; margin: 0 0 14px; }
    .stats { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
    .stat {
      text-align: center;
      padding: 10px 22px;
      border-radius: var(--md);
      cursor: pointer;
      transition: 0.2s;
      background: var(--bg3, #1e293b);
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      min-width: 100px;
    }
    .stat:hover { background: var(--border-color, rgba(255,255,255,0.07)); border-color: rgba(255,255,255,0.12); transform: translateY(-2px); }
    .stat:active { transform: translateY(0); }
    .stat .num {
      font-size: 1.4rem; font-weight: 700;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .stat .label { color: var(--text3); font-size: 0.72rem; margin-top: 2px; }
    @media (max-width: 768px) {
      :host { padding: 24px 10px 20px; min-height: 120px; }
      h1 { font-size: 1.4rem; }
      p { font-size: 0.8rem; }
      .stat { padding: 8px 14px; min-width: 70px; }
      .stat .num { font-size: 1.1rem; }
      .stats { gap: 8px; }
    }
  `),x(ct,"properties",{data:{}});customElements.define("mini-hero",ct);class pt extends k{constructor(){super(),this.filter="all",this.page=0,this.query="",this.PAGE_SIZE=40}updated(t){if(t.has("query")&&this.query&&this.shadowRoot){const e=this.shadowRoot.querySelector("input");e&&(e.value=this.query)}t.has("filter")&&this.shadowRoot&&(this.page=0)}_setFilter(t){this.filter=t,this.page=0,this._search()}_showDetail(t){this.dispatchEvent(new CustomEvent("show-detail",{detail:t,bubbles:!0,composed:!0}))}_search(){const t=this.shadowRoot.querySelector("input");this.query=t?t.value:"",this.requestUpdate()}get _filteredNodes(){let t=this.data?this.data.nodes:[];if(this.filter!=="all"&&(t=t.filter(e=>e.t===this.filter)),this.query){const e=this.bm25?this.bm25(this.query):[],i=new Set(e.map(a=>this.data.nodes[a.index].id));t=t.filter(a=>i.has(a.id))}return t}render(){if(!this.data)return"";const t=this._filteredNodes,e=t.length,i=Math.ceil(e/this.PAGE_SIZE),a=this.page*this.PAGE_SIZE,r=Math.min(a+this.PAGE_SIZE,e),n=t.slice(a,r);return d`
      <div class="filters">
        <button class="filter-btn ${this.filter==="all"?"active":""}" @click=${()=>this._setFilter("all")}>${y("all")}</button>
        <button class="filter-btn ${this.filter==="place"?"active":""}" @click=${()=>this._setFilter("place")}>📍 Places</button>
        <button class="filter-btn ${this.filter==="person"?"active":""}" @click=${()=>this._setFilter("person")}>👤 People</button>
        <button class="filter-btn ${this.filter==="event"?"active":""}" @click=${()=>this._setFilter("event")}>📅 Events</button>
      </div>

      <div class="status">
        ${this.query?y("results",{n:e}):y("entitiesTotal",{n:e})}
        ${this.query?"":` - ${y("page",{p:this.page+1,t:i})}`}
      </div>

      ${n.map(l=>d`
        <div class="card" @click=${()=>this._showDetail(l.id)}>
          <div>
            <span class="card-title">${l.l}</span>
            ${l.lv?d`<span class="card-title-vi"> ${l.lv}</span>`:""}
            <span class="badge badge-${l.t||"other"}">${l.t||"other"}</span>
          </div>
          <div class="card-desc">${l.d||""}</div>
        </div>
      `)}
      ${e>this.PAGE_SIZE?d`
        <div class="pagination">
          ${this.page>0?d`<button class="filter-btn" @click=${()=>{this.page--}}>← ${y("prev")}</button>`:""}
          <span>${this.page+1} / ${i}</span>
          ${r<e?d`<button class="filter-btn" @click=${()=>{this.page++}}>${y("next")} →</button>`:""}
        </div>
      `:""}
    `}}x(pt,"styles",S`
    :host { display: block; padding: 8px 0; }
    .filters { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; margin: 8px 0; }
    .filter-btn { padding: 3px 12px; border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: 20px; background: transparent; color: var(--text2); cursor: pointer; font-size: 0.74rem; transition: 0.3s; }
    .filter-btn:hover { border-color: var(--a1); color: var(--a1); }
    .filter-btn.active { background: rgba(99,102,241,0.15); border-color: var(--a1); color: var(--a1); }
    .card { background: var(--bg3, #1e293b); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); padding: 12px 16px; margin-bottom: 6px; cursor: pointer; transition: 0.3s; }
    .card:hover { background: var(--border-color, rgba(255,255,255,0.07)); border-color: rgba(255,255,255,0.12); transform: translateY(-1px); }
    .card-title { font-size: 0.92rem; font-weight: 600; color: var(--a1); }
    .card-title-vi { font-size: 0.75rem; color: var(--text3); font-style: italic; }
    .card-desc { color: var(--text2); font-size: 0.8rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .badge { font-size: 0.6rem; padding: 1px 8px; border-radius: 20px; font-weight: 500; }
    .badge-place { background: rgba(34,197,94,0.15); color: var(--ok); }
    .badge-person { background: rgba(99,102,241,0.15); color: var(--a1); }
    .badge-event { background: rgba(234,179,8,0.15); color: var(--warn); }
    .badge-other { background: var(--bg3); color: var(--text3); }
    .status { text-align: center; font-size: 0.82rem; color: var(--text3); }
    .pagination { text-align: center; display: flex; gap: 8px; justify-content: center; margin-top: 10px; }
  `),x(pt,"properties",{data:{},bm25:{},filter:{},page:{state:!0},query:{}});customElements.define("mini-search",pt);function De(s,t,e){if(!s||typeof document>"u")return e;try{return getComputedStyle(s).getPropertyValue(t).trim()||e}catch{return e}}function ht(s){const t=(e,i)=>De(s,e,i);return{person:t("--a1","#6366f1"),place:t("--ok","#22c55e"),event:t("--warn","#eab308"),other:t("--text3","#64748b"),edge:t("--border-color","rgba(255,255,255,0.07)"),text:t("--text","#f1f5f9"),bg:t("--bg","#070b17"),bg2:t("--bg2","#0f172a"),bg3:t("--bg3","#1e293b")}}class gt extends k{constructor(){super(...arguments);x(this,"_map",null)}disconnectedCallback(){super.disconnectedCallback(),this._map&&(this._map.remove(),this._map=null)}firstUpdated(){this._initMap()}_initMap(){if(!this.data||typeof L>"u")return;const e=this.shadowRoot.getElementById("map");if(!e||this._map)return;if(!this.shadowRoot.querySelector("#leaflet-tile-style")){const l=document.createElement("style");l.id="leaflet-tile-style",l.textContent=`
        .leaflet-container { height: 100%; width: 100%; }
        .leaflet-tile { visibility: hidden; position: absolute; }
        .leaflet-tile-loaded { visibility: inherit; }
        .leaflet-tile-pane { z-index: 2; }
        .leaflet-overlay-pane { z-index: 4; }
        .leaflet-shadow-pane { z-index: 5; }
        .leaflet-marker-pane { z-index: 6; }
        .leaflet-tooltip-pane { z-index: 7; }
        .leaflet-popup-pane { z-index: 8; }
        .leaflet-control { position: relative; z-index: 800; }
        .leaflet-top, .leaflet-bottom { position: absolute; z-index: 1000; }
        .leaflet-top { top: 0; } .leaflet-bottom { bottom: 0; }
        .leaflet-left { left: 0; } .leaflet-right { right: 0; }
        .leaflet-control-zoom { display: inline-block; }
        .leaflet-control-zoom a { display: block; width: 30px; height: 30px; text-align: center; text-decoration: none; color: #000; background: #fff; border-bottom: 1px solid #ccc; line-height: 30px; font-size: 18px; }
        .leaflet-popup-content-wrapper { padding: 1px; text-align: left; border-radius: 8px; background: white; color: #333; box-shadow: 0 3px 14px rgba(0,0,0,0.4); }
        .leaflet-popup-content { margin: 8px 12px; line-height: 1.4; font-size: 13px; font-family: -apple-system, sans-serif; }
        .leaflet-popup-tip { width: 0; height: 0; background: white; box-shadow: 0 3px 14px rgba(0,0,0,0.4); }
        .leaflet-popup-close-button { position: absolute; top: 4px; right: 4px; width: 18px; height: 18px; text-align: center; font: 16px/18px sans-serif; color: #c3c3c3; text-decoration: none; border: none; background: transparent; cursor: pointer; }
        .leaflet-attribution-flag { display: none !important; }
        .leaflet-control-attribution { background: rgba(255,255,255,0.7); margin: 0; padding: 0 5px; color: #333; font-size: 10px; clear: both; }
      `,this.shadowRoot.appendChild(l)}const i=C();this._map=L.map(e,{zoomControl:!0}).setView(i.mapCenter,i.mapZoom),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"&copy; <a href='https://openstreetmap.org'>OpenStreetMap</a>"}).addTo(this._map);const a=this.data.nodes.filter(l=>l.m&&(l.m.coordinates||l.m.coord)),r=ht(this),n={place:{color:r.place,fillColor:r.place+"59"},person:{color:r.person,fillColor:r.person+"59"},event:{color:r.event,fillColor:r.event+"59"}};a.forEach(l=>{const o=l.m.coordinates||l.m.coord;if(!o)return;const h=o.match(/(-?\d+\.?\d*)\s*[,\s]\s*(-?\d+\.?\d*)/);if(!h)return;const f=parseFloat(h[1]),p=parseFloat(h[2]);if(isNaN(f)||isNaN(p))return;const u=n[l.t]||{color:"#64748b",fillColor:"rgba(100,116,139,0.35)"},g=L.circleMarker([f,p],{radius:6,color:u.color,fillColor:u.fillColor,fillOpacity:.8,weight:2});g.bindPopup("<b>"+l.l+"</b>"+(l.lv?"<br>"+l.lv:"")+"<br><span style='color:"+u.color+"'>"+(l.t||"other")+"</span>"),g.addTo(this._map)})}render(){return d`
      <div class="legend">
        <span><span class="dot" style="background:var(--ok)"></span> ${y("mapPlaces")}</span>
        <span><span class="dot" style="background:var(--a1)"></span> ${y("mapPeople")}</span>
        <span><span class="dot" style="background:var(--warn)"></span> ${y("mapEvents")}</span>
      </div>
      <div id="map"></div>
    `}}x(gt,"styles",S`
    :host { display: block; padding: 8px 0; }
    #map { width: 100%; height: 450px; border-radius: var(--md); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); z-index: 1; position: relative; overflow: hidden; }
    .legend { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; font-size: 0.75rem; color: var(--text2); margin: 0 0 8px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 4px; vertical-align: middle; }
    @media (max-width: 768px) { #map { height: 300px; } }
  `),x(gt,"properties",{data:{}});customElements.define("mini-map",gt);class ut extends k{constructor(){super(),this._expanded={},this._cfg=C()}_getYear(t){if(!(t!=null&&t.m))return null;for(const e of["point_in_time","start_time","birth_date","death_date"]){const i=t.m[e];if(i){const a=String(i).match(/(-?\d{4})/);if(a)return a[1]}}return null}_nodesInEra(t){var i;if(!((i=this.data)!=null&&i.nodes))return[];const e=t.years;return this.data.nodes.filter(a=>{if(!a.m)return!1;for(const r of["point_in_time","start_time","birth_date","death_date"]){const n=a.m[r];if(n){const l=String(n).match(/(-?\d{4})/);if(l){const o=parseInt(l[1],10);if(o>=e[0]&&o<=e[1])return!0}}}return!1})}_toggleEra(t){this._expanded[t]=!this._expanded[t],this.requestUpdate()}_showDetail(t){this.dispatchEvent(new CustomEvent("show-detail",{detail:{id:t},bubbles:!0,composed:!0}))}render(){if(!this.data)return"";const e=this._cfg.eras||[],i=kt();return d`<div>
      ${e.map(a=>{const r=this._nodesInEra(a),n=this._expanded[a.id],l=typeof a.label=="object"?a.label[i]||a.label.en||a.id:a.label;return d`
          <div class="era-section">
            <div class="era-header" @click=${()=>this._toggleEra(a.id)}>
              <span class="era-icon">${a.emoji||"📜"}</span>
              <span class="era-title">${l}</span>
              <span class="era-years">${a.years?a.years[0]+" – "+(a.years[1]>=9999?"present":a.years[1]):""}</span>
              <span class="era-count">${r.length}</span>
              <span class="era-arrow ${n?"open":""}">▶</span>
            </div>
            ${n?d`
              <div class="era-entities">
                ${r.length===0?d`<div style="color:var(--text3);font-size:0.78rem;padding:8px;">No entities in this era.</div>`:""}
                ${r.slice(0,100).map(o=>d`
                  <div class="entity-row" @click=${()=>this._showDetail(o.id)}>
                    <span class="entity-type type-${o.t||"other"}"></span>
                    <span class="entity-year">${this._getYear(o)||""}</span>
                    <span>${o.l}</span>
                    ${o.lv?d`<span style="color:var(--text3);font-size:0.72rem">${o.lv}</span>`:""}
                  </div>
                `)}
                ${r.length>100?d`<div style="color:var(--text3);font-size:0.75rem;padding:4px 8px;">+ ${r.length-100} more</div>`:""}
              </div>
            `:""}
          </div>
        `})}
    </div>`}}x(ut,"styles",S`
    :host { display: block; }
    .era-section { margin-bottom: 8px; }
    .era-header {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 16px;
      background: var(--bg3, #1e293b);
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      border-radius: var(--md);
      cursor: pointer; transition: 0.2s;
    }
    .era-header:hover { background: var(--border-color, rgba(255,255,255,0.07)); border-color: var(--a1); }
    .era-icon { font-size: 1.2rem; }
    .era-title { font-weight: 600; font-size: 0.92rem; color: var(--text); flex: 1; }
    .era-years { color: var(--text3); font-size: 0.75rem; }
    .era-count { font-size: 0.7rem; color: var(--text3); background: var(--bg2); padding: 2px 10px; border-radius: 20px; }
    .era-arrow { color: var(--text3); font-size: 0.7rem; transition: transform 0.2s; }
    .era-arrow.open { transform: rotate(90deg); }
    .era-entities { padding: 8px 0 8px 16px; }
    .entity-row {
      display: flex; align-items: center; gap: 8px;
      padding: 4px 8px; border-radius: 4px; cursor: pointer;
      font-size: 0.82rem; color: var(--text2); transition: 0.12s;
    }
    .entity-row:hover { color: var(--a1); background: var(--bg3, #1e293b); }
    .entity-year { color: var(--text3); font-size: 0.7rem; font-family: monospace; min-width: 40px; }
    .entity-type { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .type-place { background: var(--ok); }
    .type-person { background: var(--a1); }
    .type-event { background: var(--warn); }
    .type-other { background: var(--text3); }
    @media (max-width: 768px) {
      .era-header { padding: 10px 12px; }
    }
  `),x(ut,"properties",{data:{}});customElements.define("mini-timeline",ut);const Pe=new Set(["child","parent","founded_by","founder","position_held","preceded_by","followed_by","member_of","head_of_state","head_of_government"]),Me=["dynasty","triều","nhà","vua","king","emperor","hoàng đế","empire","quốc"];class ft extends k{constructor(){super(),this._expanded=new Set,this._searchQuery=""}_isDynastyEntity(t){const e=((t.l||"")+" "+(t.lv||"")+" "+(t.d||"")).toLowerCase();return Me.some(i=>e.includes(i))}_getRulers(t,e,i){if(!i)return[];const a=i.filter(o=>o.r==="founded_by"||o.r==="member_of"),r=i.filter(o=>o.s===t.id&&(o.r==="child"||o.r==="followed_by"||o.r==="position_held")),n=new Set;a.filter(o=>o.t===t.id).forEach(o=>n.add(o.s)),r.forEach(o=>n.add(o.t));const l=[];return n.forEach(o=>{const h=e.find(f=>f.id===o);h&&l.push(h)}),l.slice(0,15)}_getDynasties(){if(!this.data)return[];const t=this.data.nodes.filter(i=>this._isDynastyEntity(i));this.data.edges&&this.data.edges.forEach(i=>{if(Pe.has(i.r)){const a=this.data.nodes.find(r=>r.id===i.t);a&&!t.includes(a)&&(i.r==="founded_by"||i.r==="member_of")&&t.push(a)}});const e=new Set;return t.filter(i=>e.has(i.id)?!1:(e.add(i.id),!0))}_showDetail(t){this.dispatchEvent(new CustomEvent("show-detail",{detail:t,bubbles:!0,composed:!0}))}_onSearch(t){this._searchQuery=t.target.value.toLowerCase(),this.requestUpdate()}_toggleExpand(t){this._expanded.has(t)?this._expanded.delete(t):this._expanded.add(t),this.requestUpdate()}_getYear(t){if(!t.m)return null;for(const e of["point_in_time","start_time","birth_date"]){const i=t.m[e];if(i){const a=String(i).match(/(-?\d{4})/);if(a)return a[1]}}return null}render(){if(!this.data)return"";const t=this._getDynasties(),e=this._searchQuery?t.filter(i=>((i.l||"")+" "+(i.lv||"")+" "+(i.d||"")).toLowerCase().includes(this._searchQuery)):t;return d`
      <div class="tree-container">
        <div class="search-box">
          <input type="text" placeholder="${y("search")}" @input=${this._onSearch} />
        </div>
        ${e.length===0?d`<div class="empty">${y("noResults")}</div>`:e.slice(0,80).map(i=>d`
          <div class="dynasty-card">
            <div class="dynasty-header" @click=${()=>this._toggleExpand(i.id)}>
              <span class="dynasty-icon">🏛</span>
              <span class="dynasty-name">${i.l}</span>
              ${i.lv?d`<span style="color:var(--text3);font-size:0.72rem">${i.lv}</span>`:""}
              <span class="dynasty-years">${this._getYear(i)||""}</span>
              <span style="color:var(--text3);font-size:0.7rem">${this._expanded.has(i.id)?"▼":"▶"}</span>
            </div>
            ${this._expanded.has(i.id)?d`
              <div class="ruler-list">
                ${i.d?d`<div style="font-size:0.78rem;color:var(--text3);padding:4px 0">${i.d}</div>`:""}
                ${this._getRulers(i,this.data.nodes,this.data.edges).map(a=>d`
                  <div class="ruler-item" @click=${()=>this._showDetail(a.id)}>
                    <span class="ruler-dot"></span>
                    <span>${a.l}</span>
                    ${a.lv?d`<span style="color:var(--text3);font-size:0.7rem">${a.lv}</span>`:""}
                    <span class="ruler-years">${this._getYear(a)||""}</span>
                  </div>
                `)}
              </div>
            `:""}
          </div>
        `)}
      </div>
    `}}x(ft,"styles",S`
    :host { display: block; padding: 8px 0; }
    .tree-container { max-width: 800px; margin: 0 auto; }
    .dynasty-card { background: var(--bg3, #1e293b); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); padding: 14px 18px; margin-bottom: 8px; cursor: pointer; transition: 0.2s; }
    .dynasty-card:hover { background: var(--border-color, rgba(255,255,255,0.07)); border-color: var(--a1); }
    .dynasty-header { display: flex; align-items: center; gap: 10px; }
    .dynasty-icon { font-size: 1.3rem; }
    .dynasty-name { font-weight: 600; font-size: 0.95rem; color: var(--text); }
    .dynasty-years { color: var(--text3); font-size: 0.72rem; margin-left: auto; }
    .ruler-list { margin-top: 8px; padding-left: 32px; display: flex; flex-direction: column; gap: 2px; }
    .ruler-item { display: flex; align-items: center; gap: 6px; padding: 3px 8px; border-radius: 4px; font-size: 0.82rem; color: var(--text2); cursor: pointer; transition: 0.15s; }
    .ruler-item:hover { color: var(--a1); background: var(--bg3, #1e293b); }
    .ruler-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--a2); flex-shrink: 0; }
    .ruler-years { color: var(--text3); font-size: 0.7rem; margin-left: auto; font-family: monospace; }
    .empty { text-align: center; color: var(--text3); padding: 40px; font-size: 0.85rem; }
    .search-box { display: flex; justify-content: center; margin-bottom: 16px; }
    .search-box input { width: 100%; max-width: 400px; padding: 8px 12px; background: var(--bg3); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); color: var(--text); font-size: 0.85rem; outline: none; }
    .search-box input:focus { border-color: var(--a1); box-shadow: 0 0 16px rgba(99,102,241,0.15); }
  `),x(ft,"properties",{data:{}});customElements.define("mini-tree",ft);class mt extends k{render(){if(!this.data)return"";const t=C();return d`
      <div>
        <span class="badge">
          📦 ${y("entities")}:
          <strong>${this.data.meta.entity_count.toLocaleString()}</strong>
        </span>
        <span class="badge">🌐 ${y("source")}: ${t.dataSource}</span>
      </div>
      <div style="margin-top:8px">
        ${t.countryEmoji} ${y("builtWith")}
        <a href="https://github.com/${t.githubRepo}">minidi-spider</a>
        · <a href="https://github.com/${t.githubRepo}">GitHub</a>
      </div>
    `}}x(mt,"styles",S`
    :host {
      display: block;
      text-align: center;
      padding: 24px;
      color: var(--text3);
      font-size: 0.76rem;
      border-top: 1px solid var(--border-color, rgba(255,255,255,0.07));
      margin-top: 32px;
    }
    a { color: var(--a1); text-decoration: none; }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: var(--bg3, #1e293b);
      border-radius: var(--sm);
      margin: 2px;
    }
  `),x(mt,"properties",{data:{}});customElements.define("mini-footer",mt);class Jt extends k{constructor(){super();const t=C();this._slides=t.slides||[],this._index=0,this._timer=null}connectedCallback(){super.connectedCallback(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}_startTimer(){clearInterval(this._timer),!(this._slides.length<2)&&(this._timer=setInterval(()=>{this._index=(this._index+1)%this._slides.length,this.requestUpdate()},5e3))}_goTo(t){this._index=t,this._startTimer(),this.requestUpdate()}render(){if(!this._slides.length)return"";const t=kt();return d`<div class="track">
      ${this._slides.map((e,i)=>d`
        <div class="slide ${i===this._index?"active":""}" style="background-image:url(${e.img});background-color:#1a1a2e">
          <div class="slide-label">${e.lang===t?e.label:e.labelAlt||e.label}</div>
          ${e.labelAlt?d`<div class="slide-label-alt">${e.lang===t?e.labelAlt:e.label}</div>`:""}
        </div>
      `)}
      <div class="dots">
        ${this._slides.map((e,i)=>d`<div class="dot ${i===this._index?"active":""}" @click=${()=>this._goTo(i)}></div>`)}
      </div>
    </div>`}}x(Jt,"styles",S`
    :host { display: block; position: relative; overflow: hidden; }
    .track { position: relative; height: 160px; width: 100%; }
    .slide {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      opacity: 0; transition: opacity 1s ease; pointer-events: none;
      background-size: cover; background-position: center;
    }
    .slide.active { opacity: 1; }
    .slide::after {
      content: "";
      position: absolute; inset: 0;
      background: linear-gradient(transparent 50%, rgba(0,0,0,0.5));
    }
    .slide-label {
      position: relative; z-index: 1; font-size: 1.15rem;
      font-weight: 600; color: #fff;
      text-shadow: 0 2px 12px rgba(0,0,0,0.5); margin-bottom: 2px;
    }
    .slide-label-alt {
      position: relative; z-index: 1; font-size: 0.78rem;
      color: rgba(255,255,255,0.75); font-style: italic;
      text-shadow: 0 1px 6px rgba(0,0,0,0.4);
    }
    .dots {
      position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
      display: flex; gap: 8px; z-index: 2;
    }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.25); transition: 0.3s; cursor: pointer;
    }
    .dot.active { background: #fff; width: 20px; border-radius: 4px; }
    @media (max-width: 768px) {
      .track { height: 120px; }
      .slide-label { font-size: 0.9rem; }
      .slide-label-alt { font-size: 0.68rem; }
    }
  `);customElements.define("mini-slideshow",Jt);const E={help:/^(help|what can you do|commands|assist)/i,stats:/^(stats|statistics|how many|entity count|graph stat)/i,greeting:/^(hello|hi|hey|greetings|good (morning|afternoon|evening)|xin chào)/i,thanks:/^(thanks|thank you|cảm ơn)/i,who:/^(who is|who was|who's|tell me about person|ai là|người) (.+)/i,where:/^(where is|where's|tell me about place|địa điểm|ở đâu) (.+)/i,what:/^(what is|what was|what's|tell me about|giải thích|định nghĩa) (.+)/i,search:/^(search|find|tìm|look for|tra cứu) (.+)/i,timeline:/^(timeline|events in|era|thời kỳ|sự kiện năm|show timeline)/i,map:/^(map|show map|bản đồ|view map)/i,dynasty:/^(dynasty|triều đại|nhà|vua|king|emperor|hoàng đế)/i,random:/^(random|surprise me|ngẫu nhiên|bất kỳ)/i,recent:/^(recent|latest|newest|modern|gần đây|mới nhất)/i,language:/^(language|lang|change language|ngôn ngữ|switch lang)/i,clear:/^(clear|reset|new chat|xóa)/i};class bt extends k{constructor(){super(),this._open=!1,this._messages=[],this._cfg=C()}_toggle(){this._open=!this._open,this._open&&this._messages.length===0&&this._addMessage("bot","🤖 Hello! I'm MiniDi Assistant. "+this._cfg.chatGreeting+" Type 'help' to see commands."),this.requestUpdate()}_addMessage(t,e){this._messages.push({role:t,text:e}),this._messages.length>40&&this._messages.shift(),this.requestUpdate(),setTimeout(()=>{const i=this.shadowRoot.querySelector(".messages");i&&(i.scrollTop=i.scrollHeight)},50)}_send(){const t=this.shadowRoot.querySelector("input");if(!t||!t.value.trim())return;const e=t.value.trim();t.value="",this._addMessage("user",e),this._respond(e)}_respond(t){var r,n,l,o,h,f,p,u,g,v,c,_;const e=t.toLowerCase();let i=null;const a=this._cfg;if(E.help.test(e))i=`I can help with ${a.chatCountry} knowledge! Try:
• "who is ..." — find people
• "where is ..." — find places
• "tell me about ..." — explain topics
• "search ..." — full-text search
• "stats" — graph statistics
• "timeline" — historical eras
• "dynasty" — dynasty information
• "map" — show map view
• "random" — random entity
• "recent" — recent events
• "count places" — count by type
• "language" — switch language
• "help" — this message`;else if(E.clear.test(e)){this._messages=[],this._addMessage("bot","Chat cleared. How can I help?");return}else if(E.greeting.test(e))i="Hello! 👋 How can I help you explore the knowledge graph?";else if(E.thanks.test(e))i="You're welcome! 😊 Feel free to ask anything else.";else if(E.stats.test(e)){const m=((l=(n=(r=this.data)==null?void 0:r.meta)==null?void 0:n.entity_count)==null?void 0:l.toLocaleString())||"--",b=((f=(h=(o=this.data)==null?void 0:o.meta)==null?void 0:h.edge_count)==null?void 0:f.toLocaleString())||"--",w={};(p=this.data)!=null&&p.nodes&&this.data.nodes.forEach(P=>{const z=P.t||"other";w[z]=(w[z]||0)+1}),i=`📊 Knowledge Graph Stats:
Total entities: ${m}
Relations: ${b}
Breakdown: ${Object.entries(w).map(([P,z])=>`${P}: ${z}`).join(", ")}`}else if(E.random.test(e)){const m=(u=this.data)==null?void 0:u.nodes;if(m){const b=m[Math.floor(Math.random()*m.length)];i=`🎲 Random pick: **${b.l}**${b.lv?" ("+b.lv+")":""}
Type: ${b.t||"other"}
${b.d||""}`}}else if(E.map.test(e))this.dispatchEvent(new CustomEvent("navigate",{detail:"map",bubbles:!0,composed:!0})),i="Switching to Map view 🗺️";else if(E.timeline.test(e))this.dispatchEvent(new CustomEvent("navigate",{detail:"timeline",bubbles:!0,composed:!0})),i="Switching to Timeline view 📅";else if(E.language.test(e))i="Language toggle is in the top-right corner of the header.";else if(E.dynasty.test(e)){const m=((v=(g=this.data)==null?void 0:g.nodes)==null?void 0:v.filter(b=>{const w=((b.l||"")+" "+(b.lv||"")+" "+(b.d||"")).toLowerCase();return w.includes("dynasty")||w.includes("triều")||w.includes("nhà")}))||[];m.length?i=`👑 Found ${m.length} dynasties:
${m.slice(0,10).map(b=>`• ${b.l}${b.lv?" ("+b.lv+")":""}`).join(`
`)}`:i="No dynasties found. Try browsing the Dynasty Tree view!"}else if(E.recent.test(e)){const m=((_=(c=this.data)==null?void 0:c.nodes)==null?void 0:_.filter(b=>{const w=this._getYear(b);return w!==null&&w>=1975}).sort((b,w)=>this._getYear(w)-this._getYear(b)).slice(0,10))||[];m.length&&(i=`🕐 Recent/modern entities:
${m.map(b=>`• ${b.l} (${this._getYear(b)})`).join(`
`)}`)}else{const m=E.who.exec(t)||E.where.exec(t)||E.what.exec(t)||E.search.exec(t);m?i=this._searchEntities(m[2].trim()):(i=this._searchEntities(t),i==="No matching entities found."&&(i=`I didn't find exact matches. Try:
• A person name: "who is..."
• A place: "where is..."
• A topic: "tell me about..."
• Or type "help" for commands`))}i&&setTimeout(()=>this._addMessage("bot",i),300)}_searchEntities(t){var a;if(!((a=this.data)!=null&&a.nodes)||!this.bm25)return"No data loaded yet.";const i=this.bm25(t).slice(0,5);return i.length?i.map((r,n)=>{const l=this.data.nodes[r.index],o=this._getYear(l);return`${n+1}. **${l.l}**${l.lv?" ("+l.lv+")":""} [${l.t||"other"}]${o?" — "+o:""}
   ${(l.d||"").substring(0,120)}`}).join(`

`):"No matching entities found."}_getYear(t){if(!(t!=null&&t.m))return null;for(const e of["point_in_time","start_time","birth_date","death_date"]){const i=t.m[e];if(i){const a=String(i).match(/(-?\d{4})/);if(a)return parseInt(a[1],10)}}return null}render(){return d`
      <div class="panel ${this._open?"open":""}">
        <div class="header">
          <strong>🤖 MiniDi Assistant</strong>
          <button @click=${this._toggle}>&times;</button>
        </div>
        <div class="messages">
          ${this._messages.map(t=>d`<div class="msg ${t.role}">${t.text}</div>`)}
        </div>
        <div class="input-area">
          <input type="text" placeholder=${y("chatPlaceholder")} @keydown=${t=>{t.key==="Enter"&&this._send()}} />
          <button @click=${this._send}>➡</button>
        </div>
      </div>
      <button class="toggle-btn" @click=${this._toggle}>💬</button>
    `}}x(bt,"styles",S`
    :host { position: fixed; bottom: 20px; right: 20px; z-index: 90; }
    .toggle-btn {
      width: 48px; height: 48px; border-radius: 50%; border: none;
      background: linear-gradient(135deg, var(--a1), var(--a2)); color: #fff;
      font-size: 1.3rem; cursor: pointer; box-shadow: 0 4px 20px rgba(99,102,241,0.4); transition: 0.3s;
    }
    .toggle-btn:hover { transform: scale(1.1); }
    .panel {
      width: 360px; max-height: 500px; background: var(--bg2);
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      border-radius: var(--lg); overflow: hidden; display: none;
      flex-direction: column; box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    }
    .panel.open { display: flex; }
    .header { padding: 10px 14px; border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.07)); display: flex; justify-content: space-between; align-items: center; }
    .header strong { font-size: 0.82rem; }
    .header button { background: none; border: none; color: var(--text3); cursor: pointer; font-size: 1.1rem; }
    .messages { flex: 1; overflow-y: auto; padding: 10px 14px; min-height: 220px; max-height: 340px; }
    .msg { font-size: 0.78rem; line-height: 1.55; margin-bottom: 8px; padding: 8px 12px; border-radius: var(--md); max-width: 85%; white-space: pre-wrap; }
    .msg.bot { background: var(--bg3); color: var(--text2); }
    .msg.user { background: rgba(99,102,241,0.15); color: var(--text); margin-left: auto; }
    .input-area { display: flex; padding: 8px 12px; gap: 6px; border-top: 1px solid var(--border-color, rgba(255,255,255,0.07)); }
    .input-area input { flex: 1; padding: 7px 10px; background: var(--bg3); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--sm); color: var(--text); font-size: 0.8rem; outline: none; }
    .input-area button { padding: 7px 14px; border: none; border-radius: var(--sm); background: var(--a1); color: #fff; cursor: pointer; font-size: 0.8rem; }
  `),x(bt,"properties",{data:{},bm25:{}});customElements.define("mini-chat",bt);function Le(s){return s=s.replace(/<ul class="gallery"[^>]*>([\s\S]*?)<\/ul>/gi,function(t,e){for(var i=[],a=/<img\s[^>]*src="([^"]+)"[^>]*>/gi,r;(r=a.exec(e))!==null;)i.push('<img src="'+r[1].replace(/^\/\//,"https://")+'" alt="" />');return i.join(" ")}),s}function Re(s){return s=s.replace(/<div class="(thumb|float\w+)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,function(t,e,i){var a=i.match(/<img\s[^>]*src="([^"]+)"[^>]*>/i);if(a){var r=a[1].replace(/^\/\//,"https://"),n=i.match(/<div class="thumbcaption[^"]*"[^>]*>([\s\S]*?)<\/div>/i),l=n?n[1].replace(/<[^>]+>/g,"").trim():"";return'<figure><img src="'+r+'" alt="" />'+(l?"<figcaption>"+l+"</figcaption>":"")+"</figure>"}return i}),s}const A=new Map;async function Ue(s){const t="wd:"+s;if(A.has(t))return A.get(t);try{const e=await fetch("https://www.wikidata.org/wiki/Special:EntityData/"+s+".json");if(!e.ok)throw new Error("HTTP "+e.status);const a=(await e.json()).entities[s];if(!a)throw new Error("Entity not found");const r={labels:a.labels||{},descriptions:a.descriptions||{},claims:a.claims||{},sitelinks:a.sitelinks||{},image:null,enLabel:a.labels&&a.labels.en&&a.labels.en.value||null,enDesc:a.descriptions&&a.descriptions.en&&a.descriptions.en.value||null,viLabel:a.labels&&a.labels.vi&&a.labels.vi.value||null,viDesc:a.descriptions&&a.descriptions.vi&&a.descriptions.vi.value||null},n=a.claims&&a.claims.P18;if(n&&n.length>0){const l=n[0].mainsnak&&n[0].mainsnak.datavalue&&n[0].mainsnak.datavalue.value;l&&(r.image="https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(l)+"?width=600")}return A.set(t,r),r}catch(e){return console.warn("WD fetch:",e&&e.message),null}}async function Ot(s,t){t=t||"en";const e="wp:"+t+":"+s;if(A.has(e))return A.get(e);try{const i=await fetch("https://"+t+".wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(s),{headers:{"User-Agent":"MiniDi/1.0"}});if(!i.ok)throw new Error("HTTP "+i.status);const a=await i.json(),r={title:a.title||s,extract:a.extract||null,description:a.description||null,thumbnail:a.thumbnail&&a.thumbnail.source||null,originalImage:a.originalimage&&a.originalimage.source||null,url:a.content_urls&&a.content_urls.desktop&&a.content_urls.desktop.page||null};return A.set(e,r),r}catch(i){return console.warn("WP summary:",i&&i.message),null}}function X(s,t){var e=new RegExp("<"+t+"\\b[^>]*>[\\s\\S]*?<\\/"+t+">","gi");return s.replace(e,"")}function G(s,t){var e=new RegExp('<div\\s+class="'+t+'[^"]*"[^>]*>[\\s\\S]*?<\\/div>',"gi");return s.replace(e,"")}function He(s,t){var e={};return t.forEach(function(i){e[i.toLowerCase()]=!0,e["/"+i.toLowerCase()]=!0}),s.replace(/<(\/?)(\w+)[^>]*>/gi,function(i,a,r){return e[a+r.toLowerCase()]?i:""})}async function jt(s,t){t=t||"en";const e="wpf:"+t+":"+s;if(A.has(e))return A.get(e);try{const g=await(await fetch("https://"+t+".wikipedia.org/w/api.php?action=parse&page="+encodeURIComponent(s)+"&prop=text&format=json&origin=*",{headers:{"User-Agent":"MiniDi/1.0"}})).json();var i=g.parse&&g.parse.text&&g.parse.text["*"]||"",a="https://"+t+".wikipedia.org";const v=Ne(i);i=X(i,"table"),i=X(i,"style"),i=X(i,"sup"),i=X(i,"span"),i=G(i,"hatnote"),i=G(i,"shortdescription"),i=G(i,"mw-authority-control"),i=G(i,"navbox"),i=i.replace(/\s(class|style|id|role|aria-\w+)="[^"]*"/gi,"");for(var r=["References","Notes","Bibliography","External links","Further reading","See also"],n=0;n<r.length;n++){var l=new RegExp("<h2[^>]*>(?:(?!<\\/h2>)[\\s\\S])*?"+r[n]+"(?:(?!<\\/h2>)[\\s\\S])*?<\\/h2>[\\s\\S]*?(?=<h[234]\\b|$)","gi");i=i.replace(l,"")}i=Le(i),i=Re(i),i=i.replace(/<a\s[^>]*href="\/\/([^"]+)"[^>]*>/gi,'<a href="https://$1">'),i=i.replace(/<a\s[^>]*href="\/wiki\/([^"]+)"[^>]*>/gi,function(_,m){return m.match(/^(Template|Help|Category|File|Portal|Special|Wikipedia):/i)?"":'<a href="'+a+"/wiki/"+m+'">'}),i=i.replace(/<a[^>]*><\/a>/gi,""),i=i.replace(/src="\/\//gi,'src="https://'),i=i.replace(/<a\s[^>]*href="[^"]*\/wiki\/File:([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,function(_,m){return'<img src="https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(m)+'" alt="'+m+'" />'}),i=i.replace(/<a\s[^>]*href="https:\/\/[^\/]+\/wiki\/File:([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,function(_,m){return'<img src="https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(m)+'" alt="'+m+'" />'}),i=He(i,["p","h2","h3","h4","b","i","u","strong","em","a","img","br","ul","ol","li","blockquote","figure","figcaption"]),i=i.replace(/<p[^>]*><\/p>/gi,"").replace(/<li[^>]*><\/li>/gi,""),i=i.replace(/\[[\d\w]+\]/g,"").replace(/\s{3,}/g," ").trim();for(var o=[],h=/<p\b[^>]*>([\s\S]*?)<\/p>/gi,f;(f=h.exec(i))!==null;){var p=f[1].replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#(\d+);/g,function(_,m){return String.fromCharCode(m)}).replace(/\[\d+\]/g,"").replace(/\s+/g," ").trim();p.length>20&&o.push(p)}i=i.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"');const c={title:s,paragraphs:o.length?o:null,rich:i.length>100?i:null,infobox:v,totalChars:o.length?o.reduce(function(_,m){return _+m.length},0):0};return A.set(e,c),c}catch(u){return console.warn("WP full:",u&&u.message),null}}function Ne(s){try{var t=s.match(/<table\s+class="infobox[^"]*">([\s\S]*?)<\/table>/i);if(!t)return null;for(var e=t[1].replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<mapframe[\s\S]*?<\/mapframe>/gi,""),i=[],a=/<tr[^>]*>([\s\S]*?)<\/tr>/gi,r;(r=a.exec(e))!==null;){var n=r[1].match(/<th[^>]*>([\s\S]*?)<\/th>/i),l=r[1].match(/<td[^>]*>([\s\S]*?)<\/td>/i);if(n&&l){var o=n[1].replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&#(\d+);/g,function(f,p){return String.fromCharCode(p)}).replace(/\[\d+\]/g,"").replace(/\s+/g," ").trim(),h=l[1].replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&#(\d+);/g,function(f,p){return String.fromCharCode(p)}).replace(/\[\d+\]/g,"").replace(/\s+/g," ").trim();o&&h&&o.length<80&&h.length<250&&i.push({label:o,value:h})}}return i.length?i:null}catch{return null}}async function te(s,t){var e=await Promise.allSettled([Ue(s),t&&t.l?Ot(t.l,"en"):Promise.resolve(null),t&&t.lv?Ot(t.lv,"vi"):Promise.resolve(null)]);return{wikidata:e[0].status==="fulfilled"?e[0].value:null,wikipediaEn:e[1].status==="fulfilled"?e[1].value:null,wikipediaVi:e[2].status==="fulfilled"?e[2].value:null}}async function Oe(s,t){var e=await te(s,t),i=e.wikipediaEn&&e.wikipediaEn.title||t&&t.l,a=e.wikipediaVi&&e.wikipediaVi.title||t&&t.lv,r=await Promise.allSettled([i?jt(i,"en"):Promise.resolve(null),a?jt(a,"vi"):Promise.resolve(null)]);return{wikidata:e.wikidata,wikipediaEn:e.wikipediaEn,wikipediaVi:e.wikipediaVi,fullEn:r[0].status==="fulfilled"?r[0].value:null,fullVi:r[1].status==="fulfilled"?r[1].value:null}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je={CHILD:2},Ie=s=>(...t)=>({_$litDirective$:s,values:t});class Fe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt extends Fe{constructor(t){if(super(t),this.it=$,t.type!==je.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===N)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;const qe=Ie(vt);class xt extends k{constructor(){super(),this._enriched=null,this._loading=!1,this._lang="en",this.ready=!1}updated(t){t.has("ready")&&this.ready&&this.entityId&&!this._enriched&&this._load()}async _load(){this._loading=!0,this.requestUpdate();try{this._enriched=await Oe(this.entityId,{l:this.label})}catch(t){console.warn("WP load:",t)}this._loading=!1,this.requestUpdate()}_switchLang(t){this._lang=t,this.requestUpdate()}render(){var f,p,u,g,v,c,_,m;const t=kt();t!==this._lang&&(this._lang=t);const e=this._lang==="en"?(f=this._enriched)==null?void 0:f.fullEn:((p=this._enriched)==null?void 0:p.fullVi)||((u=this._enriched)==null?void 0:u.fullEn),i=this._lang==="en"?(g=this._enriched)==null?void 0:g.wikipediaEn:((v=this._enriched)==null?void 0:v.wikipediaVi)||((c=this._enriched)==null?void 0:c.wikipediaEn),a=e==null?void 0:e.paragraphs,r=i==null?void 0:i.extract,n=i==null?void 0:i.thumbnail,l=i==null?void 0:i.url,o=(i==null?void 0:i.title)||"",h=!!((_=this._enriched)!=null&&_.wikipediaVi||(m=this._enriched)!=null&&m.fullVi);return this._loading?d`<div class="wp-card"><div class="wp-loading"><span class="wp-spinner"></span>Loading Wikipedia...</div></div>`:!a&&!r?d``:d`
      <div class="wp-card">
        <div class="wp-header">
          <span class="wp-header-icon">🌐</span>
          <span class="wp-header-label">Wikipedia</span>
          <span style="font-size:0.62rem;margin-left:4px;color:var(--text3)">${o}</span>
          <div style="margin-left:auto;display:flex;gap:4px">
            <button @click=${()=>this._switchLang("en")} style="border:none;background:${this._lang==="en"?"var(--a1)":"transparent"};color:${this._lang==="en"?"#fff":"var(--text3)"};padding:2px 8px;border-radius:3px;cursor:pointer;font-size:0.62rem;font-family:inherit">EN</button>
            ${h?d`<button @click=${()=>this._switchLang("vi")} style="border:none;background:${this._lang==="vi"?"var(--a1)":"transparent"};color:${this._lang==="vi"?"#fff":"var(--text3)"};padding:2px 8px;border-radius:3px;cursor:pointer;font-size:0.62rem;font-family:inherit">VI</button>`:""}
          </div>
        </div>
        <div class="wp-body">
          ${n?d`<img class="wp-thumb" src=${n} alt="" loading="lazy" />`:""}
          ${e!=null&&e.infobox?d`<div class="wp-facts">${e.infobox.slice(0,16).map(b=>d`<div class="wp-fact"><div class="wp-fact-label">${b.label}</div><div class="wp-fact-value">${b.value}</div></div>`)}</div>`:""}
          <div class="wp-extract">
            ${e!=null&&e.rich?qe(e.rich):a?a.map(b=>d`<p>${b}</p>`):d`<p>${r}</p>`}
            ${l?d`<a style="color:var(--a1);font-size:0.78rem;text-decoration:none;display:inline-block;margin-top:8px" href=${l} target="_blank">Read full article on Wikipedia →</a>`:""}
          </div>
        </div>
      </div>
    `}}x(xt,"styles",S`
    :host { display: block; margin-top: 16px; }
    .wp-card { border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); overflow: hidden; }
    .wp-header { display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: rgba(6,182,212,0.06); border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.07)); }
    .wp-header-icon { font-size: 1.1rem; }
    .wp-header-label { font-size: 0.78rem; font-weight: 600; color: var(--a2); }
    .wp-body { padding: 16px 18px; }
    .wp-thumb { float: right; width: 140px; height: 100px; object-fit: cover; border-radius: var(--sm); margin: 0 0 8px 12px; }
    .wp-extract { font-size: 0.85rem; line-height: 1.75; color: var(--text2); }
    .wp-extract p { margin: 0 0 10px; }
    .wp-extract h2, .wp-extract h3, .wp-extract h4 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin: 16px 0 8px; }
    .wp-extract h3 { font-size: 0.88rem; }
    .wp-extract a { color: var(--a1); text-decoration: underline; }
    .wp-extract img { max-width: 100%; height: auto; border-radius: var(--sm); margin: 8px 0; }
    .wp-extract ul, .wp-extract ol { margin: 4px 0 8px; padding-left: 20px; }
    .wp-extract li { margin: 2px 0; }
    .wp-extract b, .wp-extract strong { color: var(--text); font-weight: 600; }
    .wp-extract figure { margin: 12px 0; text-align: center; }
    .wp-extract figure img { max-width: 100%; height: auto; border-radius: var(--sm); }
    .wp-extract figcaption { font-size: 0.75rem; color: var(--text3); font-style: italic; margin-top: 4px; }
    .wp-readmore { display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; padding: 8px 18px; background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: var(--md); color: var(--a1); font-size: 0.78rem; text-decoration: none; transition: 0.18s; }
    .wp-readmore:hover { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.35); }
    .wp-loading { display: flex; align-items: center; gap: 8px; padding: 14px 18px; color: var(--text3); font-size: 0.8rem; }
    .wp-spinner { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--bg3); border-top-color: var(--a1); animation: spin 0.7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .wp-facts { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px; margin-bottom: 18px; }
    .wp-fact { padding: 10px 12px; background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); transition: 0.15s; }
    .wp-fact:hover { border-color: rgba(99,102,241,0.2); background: rgba(99,102,241,0.04); }
    .wp-fact-label { font-size: 0.55rem; font-weight: 600; color: var(--a2); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; }
    .wp-fact-value { font-size: 0.8rem; color: var(--text); line-height: 1.4; word-break: break-word; }
  `),x(xt,"properties",{entityId:{},label:{},ready:{}});customElements.define("mini-wikipedia",xt);function Ve(s){if(!s)return null;if(s.m){for(const t of["image","commons_image","flag_image","seal_image","coat_of_arms_image"]){const e=s.m[t];if(e&&typeof e=="string"){const i=e.replace(/^File:/,"").replace(/\s/g,"_");return`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(i)}?width=600`}}for(const[t,e]of Object.entries(s.m))if(typeof e=="string"&&(t.includes("image")||t.includes("photo")||t.includes("flag")||t.includes("seal")||t.includes("coat"))&&e.length<200){const i=e.replace(/^File:/,"").replace(/\s/g,"_");return`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(i)}?width=600`}}return null}function It(s){return!!(s!=null&&s.m&&(s.m.coordinates||s.m.coord))}function We(s){var r,n;const t=((r=s.m)==null?void 0:r.coordinates)||((n=s.m)==null?void 0:n.coord);if(!t)return null;const e=String(t).match(/(-?\d+\.?\d*)\s*[,\s]\s*(-?\d+\.?\d*)/);if(!e)return null;const i=parseFloat(e[1]),a=parseFloat(e[2]);return isNaN(i)||isNaN(a)?null:{lat:i,lng:a}}class _t extends k{constructor(){super(),this._activeTab="overview",this._enriched=null,this._loading=!1,this._detailMap=null}updated(t){t.has("node")&&(this._enriched=null,this._loading=!0,this.node&&this._doEnrich(this.node)),t.has("node")&&this.node&&this._activeTab==="map"&&requestAnimationFrame(()=>this._initDetailMap())}async _doEnrich(t){this._loading=!0;try{const e=await te(t.id,t);this._enriched=e}catch(e){console.warn("Enrichment error:",e),this._enriched=null}this._loading=!1,this.requestUpdate()}_switchTab(t){this._activeTab=t,this.requestUpdate(),t==="map"&&requestAnimationFrame(()=>this._initDetailMap())}_navigateTo(t){this.dispatchEvent(new CustomEvent("navigate-detail",{detail:t,bubbles:!0,composed:!0}))}_initDetailMap(){if(typeof L>"u")return;const t=this.shadowRoot.getElementById("detail-map");if(!t||this._detailMap)return;const e=We(this.node);if(e){if(!this.shadowRoot.querySelector("#leaflet-tile-style")){const i=document.createElement("style");i.id="leaflet-tile-style",i.textContent=".leaflet-container{height:100%;width:100%}.leaflet-tile{visibility:hidden;position:absolute}.leaflet-tile-loaded{visibility:inherit}.leaflet-tile-pane{z-index:2}.leaflet-popup-pane{z-index:8}.leaflet-control{position:relative;z-index:800}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000}.leaflet-top{top:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-right{right:0}.leaflet-control-zoom{display:inline-block}.leaflet-control-zoom a{display:block;width:30px;height:30px;text-align:center;text-decoration:none;color:#000;background:#fff;border-bottom:1px solid #ccc;line-height:30px;font-size:18px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:8px;background:#fff;color:#333}.leaflet-popup-content{margin:8px 12px;line-height:1.4;font-size:13px;font-family:-apple-system,sans-serif}.leaflet-popup-close-button{position:absolute;top:4px;right:4px;width:18px;height:18px;text-align:center;font:16px/18px sans-serif;color:#c3c3c3;text-decoration:none;border:none;background:transparent;cursor:pointer}.leaflet-attribution-flag{display:none!important}",this.shadowRoot.appendChild(i)}this._detailMap=L.map(t,{zoomControl:!0}).setView([e.lat,e.lng],10),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18}).addTo(this._detailMap),L.circleMarker([e.lat,e.lng],{radius:8,color:"#6366f1",fillColor:"rgba(99,102,241,0.4)",fillOpacity:.8,weight:2}).addTo(this._detailMap).bindPopup(`<b>${this.node.l}</b>`)}}render(){var f,p,u,g,v;if(!this.node)return d`<div class="empty-state">${y("noResults")}</div>`;const t=this.node,e=this._enriched,i=(f=e==null?void 0:e.wikidata)==null?void 0:f.image,a=((p=e==null?void 0:e.wikipediaEn)==null?void 0:p.thumbnail)||((u=e==null?void 0:e.wikipediaVi)==null?void 0:u.thumbnail)||((g=e==null?void 0:e.wikipediaEn)==null?void 0:g.originalImage),r=i||Ve(t)||a,n=this._loading,l=this.edges?this.edges.filter(c=>c.s===t.id).slice(0,80):[],o=[];if(t.id&&o.push({label:"WikiData ID",value:t.id}),t.m){const c=new Set(["image","commons_image","flag_image","seal_image","coordinates","coord"]);for(const[_,m]of Object.entries(t.m))c.has(_)||typeof m=="string"&&m.length<120&&o.push({label:_.replace(/_/g," "),value:m})}const h=[{id:"overview",label:y("details")||"Overview",icon:"ℹ️"},{id:"properties",label:"Properties",icon:"📋"},{id:"relations",label:`${y("relations")||"Relations"} (${l.length})`,icon:"🔗"}];return It(t)&&h.push({id:"map",label:"Map",icon:"🗺"}),d`
      <div class="page">
        <div class="hero-area">
          <div class="hero-image">
            ${r?d`<img src=${r} alt="" loading="lazy" />`:d`<div class="placeholder">📷</div>`}
          </div>
          <div class="hero-text">
            <div><span class="type-badge badge-${t.t||"other"}">${t.t||"other"}</span></div>
            <h1 class="title">${t.l}</h1>
            ${t.lv?d`<div class="title-vi">${t.lv}</div>`:""}
            <p class="desc">${t.dv||t.d||""}</p>
            ${n?d`<div class="enrich-loading"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid var(--bg3);border-top-color:var(--a1);animation:spin 0.7s linear infinite"></span> Loading Wikipedia...</div>`:""}
            ${(v=e==null?void 0:e.wikipediaEn)!=null&&v.extract&&!n?d`<div class="wp-extract">${e.wikipediaEn.extract.substring(0,300)}…</div>`:""}
            <a class="wiki-link" href=${t.u||"#"} target="_blank">🔗 ${y("wiki")||"Open in WikiData"}</a>
          </div>
        </div>

        <div class="tabs">${h.map(c=>d`<button class="tab ${this._activeTab===c.id?"active":""}" @click=${()=>this._switchTab(c.id)}>${c.icon} ${c.label}</button>`)}</div>

        <div class="tab-content">
          ${this._activeTab==="overview"?d`
            <div>
              ${t.d?d`<p style="color:var(--text2);font-size:0.85rem;line-height:1.7">${t.d}</p>`:""}
              <mini-wikipedia .entityId=${t.id} .label=${t.l} .ready=${!n}></mini-wikipedia>
            </div>
          `:""}

          ${this._activeTab==="properties"?d`
            <div class="meta-grid">
              ${o.map(c=>d`<div class="meta-item"><div class="meta-label">${c.label}</div><div class="meta-value">${c.value}</div></div>`)}
              ${o.length===0?d`<div style="color:var(--text3);font-size:0.82rem">No properties available.</div>`:""}
            </div>
          `:""}

          ${this._activeTab==="relations"?d`
            <div class="relation-list">
              ${l.length===0?d`<div style="color:var(--text3);font-size:0.82rem">No outgoing relations.</div>`:l.map(c=>(this.edges,this.edges,!1||c.t,d`
                  <div class="relation-item" @click=${()=>this._navigateTo(c.t)}>
                    <span class="rel-arrow">→</span>
                    <span class="rel-type">${c.r||"related"}</span>
                    <span class="rel-target">${c.t}</span>
                  </div>
                `))}
            </div>
          `:""}

          ${this._activeTab==="map"&&It(t)?d`<div id="detail-map" class="map-container"></div>`:""}
        </div>
      </div>
    `}}x(_t,"styles",S`
    :host { display: block; }
    .page { max-width: 1100px; margin: 0 auto; padding: 20px 0 40px; }
    .hero-area { display: flex; gap: 24px; margin-bottom: 24px; align-items: flex-start; }
    .hero-image { width: 260px; min-height: 180px; border-radius: var(--md); background: var(--bg3, #1e293b); overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
    .hero-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .hero-image .placeholder { color: var(--text3); font-size: 2.5rem; opacity: 0.3; text-align: center; padding: 40px 10px; }
    .hero-text { flex: 1; min-width: 0; }
    .type-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.65rem; font-weight: 500; margin-bottom: 6px; }
    .badge-place { background: rgba(34,197,94,0.15); color: var(--ok); }
    .badge-person { background: rgba(99,102,241,0.15); color: var(--a1); }
    .badge-event { background: rgba(234,179,8,0.15); color: var(--warn); }
    .badge-other { background: var(--bg3); color: var(--text3); }
    .title { font-size: 1.5rem; font-weight: 700; color: var(--text); margin: 0 0 2px; }
    .title-vi { font-size: 0.9rem; color: var(--text3); margin: 0 0 6px; }
    .desc { font-size: 0.82rem; color: var(--text2); line-height: 1.6; margin: 0 0 10px; }
    .enrich-note { font-size: 0.65rem; color: var(--a2); margin: 2px 0; display: flex; align-items: center; gap: 4px; }
    .enrich-loading { font-size: 0.65rem; color: var(--text3); margin: 2px 0; display: flex; align-items: center; gap: 4px; }
    .wp-extract { font-size: 0.78rem; line-height: 1.55; color: var(--text2); border-left: 2px solid var(--border-color, rgba(255,255,255,0.07)); padding-left: 12px; margin: 6px 0; }
    .tabs { display: flex; gap: 2px; background: var(--bg3); border-radius: var(--sm); padding: 2px; margin-bottom: 16px; overflow-x: auto; }
    .tab { padding: 6px 14px; border: none; border-radius: 4px; background: transparent; color: var(--text3); cursor: pointer; font-size: 0.78rem; transition: 0.25s; white-space: nowrap; }
    .tab:hover { color: var(--text2); }
    .tab.active { background: var(--a1); color: #fff; }
    .tab-content { min-height: 120px; }
    .relation-list { display: flex; flex-direction: column; gap: 2px; }
    .relation-item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--sm); cursor: pointer; transition: 0.12s; }
    .relation-item:hover { background: var(--border-color, rgba(255,255,255,0.07)); }
    .rel-arrow { color: var(--text3); font-size: 0.7rem; }
    .rel-type { font-size: 0.62rem; color: var(--a2); background: rgba(6,182,212,0.08); padding: 1px 6px; border-radius: 4px; }
    .rel-target { color: var(--a1); font-size: 0.82rem; font-weight: 500; }
    .rel-target-vi { font-size: 0.68rem; color: var(--text3); }
    .meta-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 6px; }
    .meta-item { padding: 8px 12px; background: var(--bg3, #1e293b); border-radius: var(--sm); }
    .meta-label { font-size: 0.55rem; font-weight: 600; color: var(--a2); text-transform: uppercase; letter-spacing: 0.8px; }
    .meta-value { font-size: 0.8rem; color: var(--text); word-break: break-word; }
    .map-container { height: 280px; border-radius: var(--md); overflow: hidden; border: 1px solid var(--border-color, rgba(255,255,255,0.07)); }
    .wiki-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; padding: 8px 18px; background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: var(--md); color: var(--a1); font-size: 0.78rem; text-decoration: none; transition: 0.18s; }
    .wiki-link:hover { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.35); }
    .empty-state { text-align: center; color: var(--text3); padding: 40px; font-size: 0.85rem; }
    @media (max-width: 768px) {
      .hero-area { flex-direction: column; }
      .hero-image { width: 100%; min-height: 140px; }
      .title { font-size: 1.15rem; }
      .desc { font-size: 0.78rem; }
      .meta-grid { grid-template-columns: 1fr; }
      .tabs { gap: 1px; }
      .tab { padding: 5px 10px; font-size: 0.72rem; }
      .map-container { height: 200px; }
    }
  `),x(_t,"properties",{node:{},edges:{}});customElements.define("mini-detail",_t);class yt extends k{constructor(){super(),this._nodes=[],this._edges=[],this._hovered=null,this._zoom=1,this._panX=0,this._panY=0,this._isDragging=!1,this._dragStartX=0,this._dragStartY=0,this._panStartX=0,this._panStartY=0,this._W=0,this._H=0,this._positions={},this._velocities={}}firstUpdated(){this.data&&this._build()}updated(t){t.has("data")&&this.data&&this._build()}_screenToWorld(t,e){return{x:(t-this._W/2)/this._zoom-this._panX,y:(e-this._H/2)/this._zoom-this._panY}}_worldToScreen(t,e){return{x:(t+this._panX)*this._zoom+this._W/2,y:(e+this._panY)*this._zoom+this._H/2}}_build(){var p,u;if(!((p=this.data)!=null&&p.nodes)||!((u=this.data)!=null&&u.edges))return;const t={};this.data.edges.forEach(g=>{t[g.s]=(t[g.s]||0)+1,t[g.t]=(t[g.t]||0)+1});const e=[...this.data.nodes].sort((g,v)=>(t[v.id]||0)-(t[g.id]||0)),i=new Set(e.slice(0,200).map(g=>g.id));this._nodes=this.data.nodes.filter(g=>i.has(g.id));const a=new Set;this._edges=this.data.edges.filter(g=>{if(!i.has(g.s)||!i.has(g.t))return!1;const v=g.s+":"+g.t;return a.has(v)?!1:(a.add(v),!0)});const r=this.shadowRoot.querySelector("canvas");if(!r)return;const n=r.getContext("2d"),l=window.devicePixelRatio||1,o=r.getBoundingClientRect();r.width=o.width*l,r.height=o.height*l,n.scale(l,l),this._W=o.width,this._H=o.height,this._positions={},this._velocities={};const h=this._nodes.length,f=Math.min(this._W,this._H)*.35;this._nodes.forEach((g,v)=>{const c=v/h*Math.PI*2;this._positions[g.id]={x:Math.cos(c)*f*(.5+Math.random()*.5),y:Math.sin(c)*f*(.5+Math.random()*.5)},this._velocities[g.id]={x:0,y:0}});for(let g=0;g<80;g++){const v={};this._nodes.forEach(c=>{v[c.id]={x:0,y:0},this._nodes.forEach(_=>{if(_.id===c.id)return;const m=this._positions[c.id].x-this._positions[_.id].x,b=this._positions[c.id].y-this._positions[_.id].y,w=Math.sqrt(m*m+b*b)||1,P=5e3/(w*w);v[c.id].x+=m/w*P,v[c.id].y+=b/w*P}),v[c.id].x+=-this._positions[c.id].x*.01,v[c.id].y+=-this._positions[c.id].y*.01}),this._edges.forEach(c=>{const _=this._positions[c.s],m=this._positions[c.t];if(!_||!m)return;const b=m.x-_.x,w=m.y-_.y,z=(Math.sqrt(b*b+w*w)||1)*.005;v[c.s].x+=b*z,v[c.s].y+=w*z,v[c.t].x-=b*z,v[c.t].y-=w*z}),this._nodes.forEach(c=>{this._velocities[c.id].x=(this._velocities[c.id].x+v[c.id].x)*.7,this._velocities[c.id].y=(this._velocities[c.id].y+v[c.id].y)*.7,this._positions[c.id].x+=this._velocities[c.id].x,this._positions[c.id].y+=this._velocities[c.id].y})}this._draw()}_draw(){const t=this.shadowRoot.querySelector("canvas");if(!t)return;const e=t.getContext("2d");e.clearRect(0,0,this._W,this._H),e.save(),e.translate(this._W/2,this._H/2),e.scale(this._zoom,this._zoom),e.translate(this._panX,this._panY);const i=ht(this);e.strokeStyle=i.edge,e.lineWidth=.5/this._zoom,this._edges.forEach(a=>{const r=this._positions[a.s],n=this._positions[a.t];!r||!n||(e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(n.x,n.y),e.stroke())}),this._nodes.forEach(a=>{const r=this._positions[a.id];if(!r)return;const n=ht(this)[a.t]||"#64748b",o=(a.id===this._hovered?8:5)/this._zoom;e.beginPath(),e.arc(r.x,r.y,o,0,Math.PI*2),e.fillStyle=n,e.globalAlpha=.7,e.fill(),e.globalAlpha=1,a.id===this._hovered&&(e.strokeStyle=i.text,e.lineWidth=2/this._zoom,e.stroke(),e.fillStyle=i.text,e.font=12/this._zoom+"px Inter, sans-serif",e.textAlign="center",e.fillText(a.l,r.x,r.y-o-6/this._zoom))}),e.restore()}_onWheel(t){t.preventDefault();const e=this.shadowRoot.querySelector("canvas").getBoundingClientRect(),i=t.clientX-e.left,a=t.clientY-e.top,r=t.deltaY<0?1.12:.88,n=Math.max(.2,Math.min(10,this._zoom*r));this._panX-=(i/this._zoom-i/n)/n,this._panY-=(a/this._zoom-a/n)/n,this._zoom=n,this._draw()}_onDragStart(t){this._isDragging=!0,this._dragStartX=t.clientX,this._dragStartY=t.clientY,this._panStartX=this._panX,this._panStartY=this._panY}_onDragMove(t){this._isDragging&&(this._panX=this._panStartX+(t.clientX-this._dragStartX)/this._zoom,this._panY=this._panStartY+(t.clientY-this._dragStartY)/this._zoom,this._draw())}_onDragEnd(){this._isDragging=!1}_onHover(t){const e=this.shadowRoot.querySelector("canvas").getBoundingClientRect(),i=t.clientX-e.left,a=t.clientY-e.top,r=this._screenToWorld(i,a);let n=null;const l=144/(this._zoom*this._zoom);for(const h of this._nodes){const f=this._positions[h.id];if(!f)continue;const p=f.x-r.x,u=f.y-r.y;if(p*p+u*u<l){n=h;break}}this._hovered=(n==null?void 0:n.id)||null,this._draw();const o=this.shadowRoot.querySelector(".info");o&&(o.textContent=n?`${n.l}${n.lv?" ("+n.lv+")":""} — ${n.t||"other"}`:"")}render(){return d`
      <div class="legend">
        <span><span class="dot" style="background:var(--a1,#6366f1)"></span> People</span>
        <span><span class="dot" style="background:var(--ok,#22c55e)"></span> Places</span>
        <span><span class="dot" style="background:var(--warn,#eab308)"></span> Events</span>
      </div>
      <div style="position:relative">
        <canvas @mousemove=${t=>{this._onHover(t),this._onDragMove(t)}} @wheel=${this._onWheel} @mousedown=${this._onDragStart} @mouseup=${this._onDragEnd} @mouseleave=${this._onDragEnd}></canvas>
        <div class="zoom-hint">
          <button @click=${()=>{this._zoom=Math.min(10,this._zoom*1.4),this._draw()}}>+</button>
          <button @click=${()=>{this._zoom=Math.max(.2,this._zoom/1.4),this._draw()}}>−</button>
          <button @click=${()=>{this._zoom=1,this._panX=0,this._panY=0,this._draw()}}>⟲</button>
        </div>
      </div>
      <div class="info">Scroll to zoom · Drag to pan · Hover for details</div>
    `}}x(yt,"styles",S`
    :host { display: block; position: relative; user-select: none; }
    canvas { display: block; width: 100%; height: 600px; border-radius: var(--md); background: var(--bg3, #1e293b); cursor: grab; }
    canvas:active { cursor: grabbing; }
    .legend { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin: 8px 0; font-size: 0.75rem; color: var(--text2); }
    .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 4px; vertical-align: middle; }
    .info { position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); background: var(--bg2); border: 1px solid var(--border-color, rgba(255,255,255,0.07)); border-radius: var(--md); padding: 8px 16px; font-size: 0.72rem; color: var(--text3); pointer-events: none; white-space: nowrap; }
    .zoom-hint { position: absolute; top: 10px; right: 10px; display: flex; gap: 4px; }
    .zoom-hint button { width: 28px; height: 28px; border-radius: var(--sm); border: 1px solid rgba(255,255,255,0.1); background: var(--bg2); color: var(--text2); cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; }
    .zoom-hint button:hover { background: var(--a1); color: #fff; }
  `),x(yt,"properties",{data:{}});customElements.define("mini-graph",yt);class ee extends k{constructor(){super();const t=C();this._cfg=t,this._prefs=Wt(),this._saved=!1}_update(t,e){this._prefs[t]=e,le(this._prefs),t==="lang"&&($t(e),this.dispatchEvent(new CustomEvent("lang-changed",{bubbles:!0,composed:!0}))),t==="theme"&&Yt(e),this._saved=!0,this.requestUpdate(),setTimeout(()=>{this._saved=!1,this.requestUpdate()},2e3)}render(){const t=this._prefs,i=this._cfg.languages.map(a=>d`
      <button class="${t.lang===a?"active":""}" @click=${()=>this._update("lang",a)}>${a.toUpperCase()}</button>
    `);return d`
      <div class="page">
        <h2>⚙️ ${y("settings")||"Settings"}</h2>
        ${this._saved?d`<div class="saved-msg show">✓ Preferences saved</div>`:""}

        <div class="section">
          <div class="section-title">Language</div>
          <div class="option">
            <div>
              <div class="option-label">Site Language</div>
              <div class="option-desc">UI labels + Wikipedia content</div>
            </div>
            <div class="btn-group">${i}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Theme</div>
          <div class="option">
            <div>
              <div class="option-label">Color Theme</div>
              <div class="option-desc">Appearance mode</div>
            </div>
            <div class="btn-group">
              <button class="${t.theme==="dark"?"active":""}" @click=${()=>this._update("theme","dark")}>Dark</button>
              <button class="${t.theme==="light"?"active":""}" @click=${()=>this._update("theme","light")}>Light</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">AI Model</div>
          <div class="option">
            <div>
              <div class="option-label">Assistant Model</div>
              <div class="option-desc">Chat response engine</div>
            </div>
            <div class="btn-group">
              <button class="${t.aiModel==="mini"?"active":""}" @click=${()=>this._update("aiModel","mini")}>MiniDi (BM25)</button>
              <button disabled style="opacity:0.3" class="${t.aiModel==="gpt"?"active":""}">GPT</button>
              <button disabled style="opacity:0.3" class="${t.aiModel==="claude"?"active":""}">Claude</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Data</div>
          <div class="option">
            <div>
              <div class="option-label">Knowledge Graph</div>
              <div class="option-desc">${y("entitiesTotal",{n:"—"})}</div>
            </div>
            <div style="font-size:0.72rem;color:var(--text3)">v1.0</div>
          </div>
        </div>
      </div>
    `}}x(ee,"styles",S`
    :host { display: block; }
    .page { max-width: 600px; margin: 0 auto; padding: 24px 16px; }
    h2 { font-size: 1rem; font-weight: 600; color: var(--text); margin: 0 0 20px; }
    .section { margin-bottom: 24px; }
    .section-title { font-size: 0.72rem; font-weight: 600; color: var(--a2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
    .option {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 14px; background: var(--bg3, #1e293b);
      border: 1px solid var(--border-color, rgba(255,255,255,0.07));
      border-radius: var(--md); margin-bottom: 6px;
    }
    .option-label { font-size: 0.83rem; color: var(--text); }
    .option-desc { font-size: 0.68rem; color: var(--text3); margin-top: 2px; }
    .btn-group { display: flex; gap: 2px; background: var(--bg3); border-radius: var(--sm); padding: 2px; }
    .btn-group button {
      padding: 4px 12px; border: none; border-radius: 3px;
      font-size: 0.72rem; font-family: inherit; cursor: pointer;
      background: transparent; color: var(--text3); transition: 0.15s;
    }
    .btn-group button.active { background: var(--a1); color: #fff; }
    .btn-group button:hover:not(.active) { color: var(--text); }
    .saved-msg { font-size: 0.65rem; color: var(--ok); text-align: center; padding: 2px; opacity: 0; transition: opacity 0.3s; }
    .saved-msg.show { opacity: 1; }
  `);customElements.define("mini-options",ee);class wt extends k{constructor(){super();const t=C();this._cfg=t,this.data=null,this.loaded=!1,this.progress=0,this.totalSize=0,this.currentView="search",this.entityDetail=null,this.bm25=null,this.searchQuery="",this.searchFilter="all",this._pendingEntityFromUrl=null,this._loadData(),this._initRouting()}_initRouting(){const t=new URLSearchParams(location.search),e=t.get("entity");e&&(this._pendingEntityFromUrl=e.split("/")[0]),t.has("view")&&(this.currentView=t.get("view")),window.addEventListener("popstate",()=>{var a,r,n;const i=new URLSearchParams(location.search);if(i.has("entity")){const l=(a=i.get("entity"))==null?void 0:a.split("/")[0],o=(n=(r=this.data)==null?void 0:r.nodes)==null?void 0:n.find(h=>h.id===l);o&&(this.entityDetail=o,this.currentView="detail")}else this.currentView=i.get("view")||"search",this.entityDetail=null})}_pushUrl(){const t=new URLSearchParams;if(this.currentView==="detail"&&this.entityDetail){var e=(this.entityDetail.l||"").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").substring(0,60);t.set("entity",this.entityDetail.id+(e?"/"+e:""))}else this.currentView!=="search"&&t.set("view",this.currentView);const i=t.toString();history.pushState({},"",i?"?"+i:location.pathname)}async _loadData(){try{if(this.data=await Ae((t,e)=>{this.progress=t,this.totalSize=e},this._cfg.dataPath),this.loaded=!0,this.bm25=Te(this.data.nodes),this._pendingEntityFromUrl){const t=this.data.nodes.find(e=>e.id===this._pendingEntityFromUrl);t&&(this.entityDetail=t,this.currentView="detail",this._pendingEntityFromUrl=null)}}catch(t){console.error("Failed to load data:",t)}}_onNavigate(t){const e=t.detail;this.currentView=e,e!=="detail"&&(this.entityDetail=null),this._pushUrl()}_onSearchInput(t){this.searchQuery=t,this.currentView="search"}_onFilterType(t){this.searchFilter=t.detail.filter,this.searchQuery=t.detail.query||"",this.currentView="search"}_onLangChanged(){this.requestUpdate()}_onShowDetail(t){const e=t.detail,i=this.data.nodes.find(a=>a.id===e);i&&(this.entityDetail=i,this.currentView="detail",this._pushUrl())}_onNavigateDetail(t){this._onShowDetail({detail:t.detail})}render(){const t=this._cfg;if(!this.loaded){const i=this.totalSize?Math.round(this.progress/this.totalSize*100):0;return d`
        <div class="splash">
          <div class="splash-logo">${t.splashTitle}</div>
          <div class="spinner"></div>
          <div class="status">${t.splashMessage}</div>
          <div class="track"><div class="bar" style="width: ${i}%"></div></div>
          <div class="pct">${i}% (${(this.progress/1048576).toFixed(1)} / ${(this.totalSize/1048576).toFixed(1)} MB)</div>
        </div>
      `}const e=this.currentView==="detail";return d`
      <mini-header
        .view=${this.currentView}
        .entityName=${e&&this.entityDetail?this.entityDetail.l:""}
        @navigate=${this._onNavigate}
        @search-input=${i=>this._onSearchInput(i.detail)}
        @lang-changed=${this._onLangChanged}
      ></mini-header>

      ${e?"":d`
        <mini-slideshow></mini-slideshow>
        <mini-hero .data=${this.data} @filter-type=${this._onFilterType}></mini-hero>
      `}

      <div class="app-container">${this._renderView()}</div>

      <mini-footer .data=${this.data}></mini-footer>
      <mini-chat .data=${this.data} .bm25=${this.bm25}></mini-chat>
    `}_renderView(){switch(this.currentView){case"map":return d`<mini-map .data=${this.data}></mini-map>`;case"graph":return d`<mini-graph .data=${this.data}></mini-graph>`;case"options":return d`<mini-options @lang-changed=${this._onLangChanged}></mini-options>`;case"timeline":return d`<mini-timeline .data=${this.data} @show-detail=${this._onShowDetail}></mini-timeline>`;case"tree":return d`<mini-tree .data=${this.data} @show-detail=${this._onShowDetail}></mini-tree>`;case"detail":return d`<mini-detail .node=${this.entityDetail} .edges=${this.data.edges} @navigate-detail=${this._onNavigateDetail}></mini-detail>`;default:return d`<mini-search .data=${this.data} .bm25=${this.bm25} .query=${this.searchQuery} .filter=${this.searchFilter} @show-detail=${this._onShowDetail}></mini-search>`}}}x(wt,"styles",S`
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
      --border-color: rgba(255,255,255,0.07);
      --sm: 6px;
      --md: 10px;
      --lg: 16px;
      display: block;
      min-height: 100vh;
      font-family: "Inter", sans-serif;
    }

    .splash {
      position: fixed;
      inset: 0;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      transition: opacity 0.8s, transform 0.8s;
    }

    .splash.hidden {
      opacity: 0;
      transform: scale(1.05);
      pointer-events: none;
    }

    .spinner {
      width: 80px;
      height: 80px;
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

    .splash-logo {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .status {
      color: var(--text3);
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .track {
      width: 240px;
      height: 4px;
      background: var(--bg3);
      border-radius: 2px;
      overflow: hidden;
    }

    .bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--a1), var(--a2));
      border-radius: 2px;
      transition: width 0.3s;
    }

    .pct {
      color: var(--text3);
      font-size: 0.75rem;
      margin-top: 8px;
    }

    .app-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 16px;
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 0 10px;
      }
    }
  `),x(wt,"properties",{data:{state:!0},loaded:{state:!0},progress:{state:!0},totalSize:{state:!0},currentView:{state:!0},entityDetail:{state:!0},searchQuery:{state:!0},searchFilter:{state:!0}});customElements.define("mini-app",wt);function Ye(s){const t=re(s);se(t),ne(t.translations,t.defaultLanguage),oe(t.defaultLanguage);const e=Wt();$t(e.lang),Yt(e.theme)}const Be={countryCode:"vn",countryName:"Vietnam",countryEmoji:"🇻🇳",languages:["en","vi"],defaultLanguage:"en",title:"Vietnam Knowledge Graph",subtitle:"Exploring {n} WikiData entities: history, geography, people & culture",splashTitle:"🇻🇳 MiniDi",splashMessage:"Loading Vietnam knowledge graph...",slides:[{label:"Hạ Long Bay",lang:"en",labelAlt:"Vịnh Hạ Long",langAlt:"vi",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Halong_Bay_in_2019.jpg/1280px-Halong_Bay_in_2019.jpg",grad:"linear-gradient(135deg, #0f766e, #0d9488, #2dd4bf)"},{label:"Hoàng Sa Archipelago",lang:"en",labelAlt:"Quần đảo Hoàng Sa",langAlt:"vi",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",grad:"linear-gradient(135deg, #1e3a5f, #2563eb, #60a5fa)"},{label:"Hội An Ancient Town",lang:"en",labelAlt:"Phố cổ Hội An",langAlt:"vi",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hoi_An_Ancient_Town_at_dusk.jpg/1280px-Hoi_An_Ancient_Town_at_dusk.jpg",grad:"linear-gradient(135deg, #7c2d12, #dc2626, #fbbf24)"},{label:"Mekong Delta",lang:"en",labelAlt:"Đồng bằng sông Cửu Long",langAlt:"vi",img:"https://images.unsplash.com/photo-1598970605070-a38a6ccd1a2d?w=1200&q=80",grad:"linear-gradient(135deg, #14532d, #16a34a, #86efac)"},{label:"Huế Imperial City",lang:"en",labelAlt:"Cố đô Huế",langAlt:"vi",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Hue_Citadel.jpg/1280px-Hue_Citadel.jpg",grad:"linear-gradient(135deg, #4a1d96, #8b5cf6, #c084fc)"},{label:"Sa Pa Terraces",lang:"en",labelAlt:"Ruộng bậc thang Sa Pa",langAlt:"vi",img:"https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",grad:"linear-gradient(135deg, #3b82f6, #1d4ed8, #93c5fd)"}],mapCenter:[16,107.5],mapZoom:6,eras:[{id:"hong_bang",emoji:"🏛",label:{en:"Hồng Bàng Dynasty",vi:"Thời kỳ Hồng Bàng"},years:[-2879,-258],color:"#8b5cf6"},{id:"chinese_domination",emoji:"🌏",label:{en:"Chinese Domination",vi:"Bắc thuộc"},years:[-111,939],color:"#ef4444"},{id:"dynastic_vn",emoji:"👑",label:{en:"Dynastic Vietnam",vi:"Việt Nam thời quân chủ"},years:[939,1858],color:"#f59e0b"},{id:"colonial",emoji:"⚖",label:{en:"French Colonial Period",vi:"Pháp thuộc"},years:[1858,1954],color:"#3b82f6"},{id:"vietnam_war",emoji:"💥",label:{en:"Vietnam War / American War",vi:"Chiến tranh Việt Nam"},years:[1955,1975],color:"#dc2626"},{id:"modern",emoji:"📷",label:{en:"Modern Vietnam",vi:"Việt Nam hiện đại"},years:[1975,9999],color:"#22c55e"}],githubRepo:"minidivn/minidi-vn-data",dataSource:"WikiData",dataPath:"index.json",chatCountry:"Vietnam",chatGreeting:"Ask me about Vietnam — history, people, places, events.",translations:{en:{entities:"Entities",events:"Events",people:"People",places:"Places",all:"All",search:"Search...",noResults:"No matching entities",loading:"Loading...",results:"{n} results",page:"Page {p} of {t}",prev:"Prev",next:"Next",details:"Details",relations:"Relations",wiki:"Open in WikiData",timeline:"Timeline",tree:"Dynasty Tree",builtWith:"Built with",source:"source",chatTitle:"MiniDi Assistant",chatPlaceholder:"Ask about Vietnam...",entitiesTotal:"{n} entities",mapPlaces:"Places",mapPeople:"People",mapEvents:"Events"},vi:{entities:"Thực thể",events:"Sự kiện",people:"Nhân vật",places:"Địa danh",all:"Tất cả",search:"Tìm kiếm...",noResults:"Không tìm thấy",loading:"Đang tải...",results:"{n} kết quả",page:"Trang {p} / {t}",prev:"Trước",next:"Sau",details:"Chi tiết",relations:"Quan hệ",wiki:"Mở trong WikiData",timeline:"Thời gian",tree:"Đồng hồ",builtWith:"Xây dựng với",source:"Mã nguồn",chatTitle:"Trợ lý MiniDi",chatPlaceholder:"Hỏi về Việt Nam...",entitiesTotal:"{n} thực thể",mapPlaces:"Địa danh",mapPeople:"Nhân vật",mapEvents:"Sự kiện"}}};Ye(Be);
