var vt=Object.defineProperty;var mt=(r,t,e)=>t in r?vt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var j=(r,t,e)=>mt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,J=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const _t=r=>new ht(typeof r=="string"?r:r+"",void 0,Z),bt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ht(e,r,Z)},yt=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},X=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return _t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:xt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Et,getOwnPropertySymbols:wt,getPrototypeOf:Ct}=Object,$=globalThis,Y=$.trustedTypes,Pt=Y?Y.emptyScript:"",B=$.reactiveElementPolyfillSupport,C=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?Pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ct=(r,t)=>!At(r,t),tt={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&xt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=St(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[...Et(e),...wt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:W;this._$Em=i;const d=a.fromAttribute(e,l.type);this[i]=d??((n=this._$Ej)==null?void 0:n.get(i))??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){var n;if(t!==void 0){const l=this.constructor;if(i===!1&&(o=this[t]),s??(s=l.getPropertyOptions(t)),!((s.hasChanged??ct)(o,e)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,B==null||B({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,et=r=>r,z=P.trustedTypes,st=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+g,kt=`<${pt}>`,b=document,O=()=>b.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ot=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,v=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,nt=/"/g,ut=/^(?:script|style|textarea|title)$/i,Nt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),U=Nt(1),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),at=new WeakMap,m=b.createTreeWalker(b,129);function ft(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Tt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=E;for(let l=0;l<e;l++){const a=r[l];let d,p,h=-1,c=0;for(;c<a.length&&(n.lastIndex=c,p=n.exec(a),p!==null);)c=n.lastIndex,n===E?p[1]==="!--"?n=it:p[1]!==void 0?n=rt:p[2]!==void 0?(ut.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=i??E,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?v:p[3]==='"'?nt:ot):n===nt||n===ot?n=v:n===it||n===rt?n=E:(n=v,i=void 0);const f=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===E?a+kt:h>=0?(s.push(d),a.slice(0,h)+dt+a.slice(h)+g+f):a+g+(h===-2?l:f)}return[ft(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[d,p]=Tt(t,e);if(this.el=T.createElement(d,s),m.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=m.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(dt)){const c=p[n++],f=i.getAttribute(h).split(g),y=/([.?@])?(.*)/.exec(c);a.push({type:1,index:o,name:y[2],strings:f,ctor:y[1]==="."?Ut:y[1]==="?"?Ht:y[1]==="@"?zt:R}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(ut.test(i.tagName)){const h=i.textContent.split(g),c=h.length-1;if(c>0){i.textContent=z?z.emptyScript:"";for(let f=0;f<c;f++)i.append(h[f],O()),m.nextNode(),a.push({type:2,index:++o});i.append(h[c],O())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){var n,l;if(t===x)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??b).importNode(e,!0);m.currentNode=i;let o=m.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new M(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Rt(o,this,t)),this._$AV.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=m.nextNode(),n++)}return m.currentNode=b,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(ft(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Mt(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new T(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new M(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=et(t).nextSibling;et(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=S(this,l[s+a],e,a),d===x&&(d=this._$AH[a]),n||(n=!N(d)||d!==this._$AH[a]),d===u?t=u:t!==u&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Ht extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class zt extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??u)===x)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const F=P.litHtmlPolyfillSupport;F==null||F(T,M),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.3");const Lt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new M(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class k extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var lt;k._$litElement$=!0,k.finalized=!0,(lt=_.litElementHydrateSupport)==null||lt.call(_,{LitElement:k});const q=_.litElementPolyfillSupport;q==null||q({LitElement:k});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");function Dt(r){return new Promise((t,e)=>{const s=new XMLHttpRequest;s.open("GET","index.json",!0),s.responseType="arraybuffer",s.onprogress=i=>{i.lengthComputable&&r&&r(i.loaded,i.total)},s.onload=()=>{try{const i=JSON.parse(new TextDecoder("utf-8").decode(s.response));t(i)}catch(i){e(i)}},s.onerror=()=>e(new Error("Failed to load index.json")),s.send()})}function jt(r){const t={};return r.forEach(e=>{const s=e.t||"other";t[s]=(t[s]||0)+1}),t}function Bt(r){const s=r.length;let i=0;const o=[],n=[],l={};for(let a=0;a<s;a++){const p=[r[a].l||"",r[a].lv||"",r[a].d||""].join(" ").toLowerCase().split(/\s+/).filter(c=>c.length>1);o.push(p.length),i+=p.length;const h={};p.forEach(c=>{h[c]=(h[c]||0)+1}),n.push(h);for(const c in h)l[c]=(l[c]||0)+1}return i/=s,function(d){const p=d.toLowerCase().split(/\s+/).filter(c=>c.length>1),h=[];for(let c=0;c<s;c++){let f=0;const y=o[c],gt=n[c];for(const L of p){const D=gt[L]||0;if(D===0)continue;const $t=Math.log((s-(l[L]||0)+.5)/((l[L]||0)+.5)+1);f+=$t*(D*(1.5+1)/(D+1.5*(1-.75+.75*(y/i))))}f>0&&h.push({index:c,score:f})}return h.sort((c,f)=>f.score-c.score),h}}const V={en:{entities:"Entities",events:"Events",people:"People",places:"Places",all:"All",search:"Search...",noResults:"No matching entities",results:"{n} results",page:"Page {p} of {t}",prev:"Prev",next:"Next",details:"Details",relations:"Relations",wiki:"Open in WikiData",title:"Vietnam Knowledge Graph"},vi:{entities:"Thuc the",events:"Su kien",people:"Nhan vat",places:"Dia danh",all:"Tat ca",search:"Tim kiem...",noResults:"Khong tim thay",results:"{n} ket qua",page:"Trang {p} / {t}",prev:"Truoc",next:"Sau",details:"Chi tiet",relations:"Quan he",wiki:"Mo trong WikiData",title:"Bieu do tri thuc Viet Nam"}};let It="en";function w(r,t){return(V[It]||V.en)[r]||V.en[r]||r}class K extends k{constructor(){super(),this.data=null,this.loaded=!1,this.progress=0,this.totalSize=0,this.view="search",this._bm25=null,this._load()}async _load(){try{this.data=await Dt((t,e)=>{this.progress=t,this.totalSize=e}),this.loaded=!0,this._bm25=Bt(this.data.nodes)}catch(t){console.error("Failed to load data:",t)}}renderSplash(){const t=this.totalSize?Math.round(this.progress/this.totalSize*100):0;return U`
      <div class="splash">
        <div class="splash-logo">&#x1F1FB;&#x1F1F3; MiniDi</div>
        <div class="ring"></div>
        <div class="status-text">Loading Vietnam knowledge graph...</div>
        <div class="progress-track">
          <div class="progress-bar" style="width: ${t}%"></div>
        </div>
        <div class="pct-text">
          ${t}% (${(this.progress/1048576).toFixed(1)}
          / ${(this.totalSize/1048576).toFixed(1)} MB)
        </div>
      </div>
    `}render(){if(!this.loaded)return this.renderSplash();const t=jt(this.data.nodes);return U`
      <div class="header">
        <span>&#x1F577; MiniDi</span>
        <span style="color: var(--text3); font-size: 0.8rem;">
          ${this.data.meta.entity_count.toLocaleString()} entities
        </span>
      </div>

      <div class="hero">
        <h1><span class="gradient-text">&#x1F1FB;&#x1F1F3; ${w("title")}</span></h1>
        <p>Exploring WikiData entities: history, geography, people & culture</p>
        <div class="stats">
          <div class="stat">
            <div class="num">${this.data.meta.entity_count.toLocaleString()}</div>
            <div class="lbl">${w("entities")}</div>
          </div>
          <div class="stat">
            <div class="num">${(t.event||0).toLocaleString()}</div>
            <div class="lbl">${w("events")}</div>
          </div>
          <div class="stat">
            <div class="num">${(t.person||0).toLocaleString()}</div>
            <div class="lbl">${w("people")}</div>
          </div>
          <div class="stat">
            <div class="num">${(t.place||0).toLocaleString()}</div>
            <div class="lbl">${w("places")}</div>
          </div>
        </div>
      </div>

      <div class="results">
        <div style="text-align: center; color: var(--text3); font-size: 0.85rem; padding: 20px;">
          ${this.data.nodes.slice(0,20).map(e=>U`
            <div class="card">
              <div class="card-title">
                <span>${e.l}</span>
                ${e.lv?U`<span style="color: var(--text3); font-size: 0.78rem;"> ${e.lv}</span>`:""}
                <span class="badge badge-${e.t||"other"}">${e.t||"other"}</span>
              </div>
              <div class="card-desc">${e.d||""}</div>
            </div>
          `)}
        </div>
      </div>
    `}}j(K,"styles",bt`
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
    }

    .splash.hide {
      opacity: 0; pointer-events: none;
      transition: opacity 0.8s, transform 0.8s;
    }

    .ring {
      width: 64px; height: 64px; border-radius: 50%;
      border: 3px solid var(--bg3);
      border-top-color: var(--a1);
      border-right-color: var(--a2);
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .splash-logo {
      font-size: 2rem; font-weight: 800;
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .progress-track {
      width: 200px; height: 4px;
      background: var(--bg3); border-radius: 2px; overflow: hidden;
    }

    .progress-bar {
      height: 100%; width: 0%;
      background: linear-gradient(90deg, var(--a1), var(--a2));
      transition: width 0.3s;
    }

    .pct-text {
      color: var(--text3); font-size: 0.8rem; margin-top: 8px;
    }

    .status-text {
      color: var(--text3); font-size: 0.85rem; margin-bottom: 16px;
    }

    .header {
      display: flex; align-items: center; gap: 12px;
      padding: 0 16px; height: 52px;
      background: rgba(7, 11, 23, 0.88);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      position: sticky; top: 0; z-index: 50;
    }

    .hero {
      text-align: center; padding: 32px 16px 24px;
    }

    .hero h1 {
      font-size: 1.8rem; font-weight: 800; margin-bottom: 6px;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p { color: var(--text2); font-size: 0.85rem; margin-bottom: 4px; }

    .stats {
      display: flex; gap: 24px; flex-wrap: wrap;
      justify-content: center; margin-top: 12px;
    }

    .stat { text-align: center; }

    .stat .num {
      font-size: 1.3rem; font-weight: 700;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat .lbl { color: var(--text3); font-size: 0.72rem; }

    .results {
      max-width: 800px; margin: 0 auto; padding: 0 16px;
    }

    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--md);
      padding: 10px 14px; margin-bottom: 6px;
      cursor: pointer;
    }

    .card:hover {
      background: rgba(255, 255, 255, 0.06);
    }

    .card-title { font-weight: 600; color: var(--a1); font-size: 0.9rem; }
    .card-desc { color: var(--text2); font-size: 0.78rem; margin-top: 2px; }
    .badge { font-size: 0.55rem; padding: 1px 7px; border-radius: 20px; font-weight: 500; }
    .badge-place { background: rgba(34, 197, 94, 0.15); color: var(--ok); }
    .badge-person { background: rgba(99, 102, 241, 0.15); color: var(--a1); }
    .badge-event { background: rgba(234, 179, 8, 0.15); color: var(--warn); }
  `),j(K,"properties",{data:{state:!0},loaded:{state:!0},progress:{state:!0},totalSize:{state:!0},view:{state:!0}});customElements.define("mini-app",K);
