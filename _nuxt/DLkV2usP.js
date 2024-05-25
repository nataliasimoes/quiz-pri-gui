import{i as z,h as he,j as ge,p as X,r as x,o as $,k as se,l as ye,m as U,F as G,d as k,q as I,w as oe,t as ue,v as we,x as xe,y as Z,z as Ie,A as ee,B as Te,C as L,a as O,f as W,e as _,b as M,D as N,E as Se,g as H,c as B,G as J,H as te,I as ne,J as Pe,K as Ee,L as Oe,u as ae,M as ke,N as Ae}from"./ChkaZW-f.js";import{_ as $e}from"./Dzew1Hsx.js";const Ne=Symbol.for("nuxt:client-only"),Fe="data-n-ids",Le="-";function _e(e){var r,u,a,s,d,v;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const t=he(),n=ge();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");t._id||(t._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(r=n._nuxtIdIndex)[e]||(r[e]=0);const l=e+Le+n._nuxtIdIndex[e]++;if(t.payload.serverRendered&&t.isHydrating&&!z(Ne,!1)){const p=((u=n.vnode.el)==null?void 0:u.nodeType)===8&&((s=(a=n.vnode.el)==null?void 0:a.nextElementSibling)!=null&&s.getAttribute)?(d=n.vnode.el)==null?void 0:d.nextElementSibling:n.vnode.el,o=JSON.parse(((v=p==null?void 0:p.getAttribute)==null?void 0:v.call(p,Fe))||"{}");if(o[l])return o[l]}return e+"_"+t._id++}const je={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};function He(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let ie=Symbol("headlessui.useid"),Ce=0;function de(){return z(ie,()=>`${++Ce}`)()}function Re(e){X(ie,e)}function y(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function C(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,C),l}var De=Object.defineProperty,Me=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t,n)=>(Me(e,typeof t!="symbol"?t+"":t,n),n);let Be=class{constructor(){le(this,"current",this.detect()),le(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ue=new Be;function Ge(e){if(Ue.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let ze=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),D=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(D||{}),Ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ve||{});function We(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ze)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var qe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(qe||{}),Ke=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ke||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let Xe=["textarea","input"].join(",");function Je(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Xe))!=null?n:!1}function j(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),u=t(l);if(r===null||u===null)return 0;let a=r.compareDocumentPosition(u);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function F(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var u;let a=(u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?u:document,s=Array.isArray(e)?n?j(e):e:We(e);r.length>0&&s.length>1&&(s=s.filter(m=>!r.includes(m))),l=l??a.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(l))-1;if(t&4)return Math.max(0,s.indexOf(l))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},o=0,c=s.length,h;do{if(o>=c||o+c<=0)return 0;let m=v+o;if(t&16)m=(m+c)%c;else{if(m<0)return 3;if(m>=c)return 1}h=s[m],h==null||h.focus(p),o+=d}while(h!==a.activeElement);return t&6&&Je(h)&&h.select(),2}function re(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Ye(e,t){let n=x(re(e.value.type,e.value.as));return $(()=>{n.value=re(e.value.type,e.value.as)}),se(()=>{var l;n.value||y(t)&&y(t)instanceof HTMLButtonElement&&!((l=y(t))!=null&&l.hasAttribute("type"))&&(n.value="button")}),n}var Y=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Y||{}),Qe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Qe||{});function R({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var u;let a=fe(l,n),s=Object.assign(r,{props:a});if(e||t&2&&a.static)return K(s);if(t&1){let d=(u=a.unmount)==null||u?0:1;return C(d,{0(){return null},1(){return K({...r,props:{...a,hidden:!0,style:{display:"none"}}})}})}return K(s)}function K({props:e,attrs:t,slots:n,slot:l,name:r}){var u,a;let{as:s,...d}=pe(e,["unmount","static"]),v=(u=n.default)==null?void 0:u.call(n,l),p={};if(l){let o=!1,c=[];for(let[h,m]of Object.entries(l))typeof m=="boolean"&&(o=!0),m===!0&&c.push(h);o&&(p["data-headlessui-state"]=c.join(" "))}if(s==="template"){if(v=ce(v??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[o,...c]=v??[];if(!Ze(o)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(i=>i.trim()).filter((i,b,g)=>g.indexOf(i)===b).sort((i,b)=>i.localeCompare(b)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let h=fe((a=o.props)!=null?a:{},d,p),m=ye(o,h,!0);for(let i in h)i.startsWith("on")&&(m.props||(m.props={}),m.props[i]=h[i]);return m}return Array.isArray(v)&&v.length===1?v[0]:v}return U(s,Object.assign({},d,p),{default:()=>v})}function ce(e){return e.flatMap(t=>t.type===G?ce(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...u){let a=n[l];for(let s of a){if(r instanceof Event&&r.defaultPrevented)return;s(r,...u)}}});return t}function pe(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function Ze(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ve=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ve||{});let be=k({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var l;let{features:r,...u}=e,a={"aria-hidden":(r&2)===2?!0:(l=u["aria-hidden"])!=null?l:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return R({ourProps:a,theirProps:u,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var E=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(E||{});let et=k({props:{onFocus:{type:Function,required:!0}},setup(e){let t=x(!0);return()=>t.value?U(be,{as:"button",type:"button",features:ve.Focusable,onFocus(n){n.preventDefault();let l,r=50;function u(){var a;if(r--<=0){l&&cancelAnimationFrame(l);return}if((a=e.onFocus)!=null&&a.call(e)){t.value=!1,cancelAnimationFrame(l);return}l=requestAnimationFrame(u)}l=requestAnimationFrame(u)}}):null}});var tt=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(tt||{}),nt=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(nt||{});let me=Symbol("TabsContext");function V(e){let t=z(me,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return t}let Q=Symbol("TabsSSRContext"),at=k({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:l}){var r;let u=x((r=e.selectedIndex)!=null?r:e.defaultIndex),a=x([]),s=x([]),d=I(()=>e.selectedIndex!==null),v=I(()=>d.value?e.selectedIndex:u.value);function p(i){var b;let g=j(o.tabs.value,y),f=j(o.panels.value,y),w=g.filter(T=>{var S;return!((S=y(T))!=null&&S.hasAttribute("disabled"))});if(i<0||i>g.length-1){let T=C(u.value===null?0:Math.sign(i-u.value),{[-1]:()=>1,0:()=>C(Math.sign(i),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),S=C(T,{0:()=>g.indexOf(w[0]),1:()=>g.indexOf(w[w.length-1])});S!==-1&&(u.value=S),o.tabs.value=g,o.panels.value=f}else{let T=g.slice(0,i),S=[...g.slice(i),...T].find(q=>w.includes(q));if(!S)return;let A=(b=g.indexOf(S))!=null?b:o.selectedIndex.value;A===-1&&(A=o.selectedIndex.value),u.value=A,o.tabs.value=g,o.panels.value=f}}let o={selectedIndex:I(()=>{var i,b;return(b=(i=u.value)!=null?i:e.defaultIndex)!=null?b:null}),orientation:I(()=>e.vertical?"vertical":"horizontal"),activation:I(()=>e.manual?"manual":"auto"),tabs:a,panels:s,setSelectedIndex(i){v.value!==i&&l("change",i),d.value||p(i)},registerTab(i){var b;if(a.value.includes(i))return;let g=a.value[u.value];if(a.value.push(i),a.value=j(a.value,y),!d.value){let f=(b=a.value.indexOf(g))!=null?b:u.value;f!==-1&&(u.value=f)}},unregisterTab(i){let b=a.value.indexOf(i);b!==-1&&a.value.splice(b,1)},registerPanel(i){s.value.includes(i)||(s.value.push(i),s.value=j(s.value,y))},unregisterPanel(i){let b=s.value.indexOf(i);b!==-1&&s.value.splice(b,1)}};X(me,o);let c=x({tabs:[],panels:[]}),h=x(!1);$(()=>{h.value=!0}),X(Q,I(()=>h.value?null:c.value));let m=I(()=>e.selectedIndex);return $(()=>{oe([m],()=>{var i;return p((i=e.selectedIndex)!=null?i:e.defaultIndex)},{immediate:!0})}),se(()=>{if(!d.value||v.value==null||o.tabs.value.length<=0)return;let i=j(o.tabs.value,y);i.some((b,g)=>y(o.tabs.value[g])!==y(b))&&o.setSelectedIndex(i.findIndex(b=>y(b)===y(o.tabs.value[v.value])))}),()=>{let i={selectedIndex:u.value};return U(G,[a.value.length<=0&&U(et,{onFocus:()=>{for(let b of a.value){let g=y(b);if((g==null?void 0:g.tabIndex)===0)return g.focus(),!0}return!1}}),R({theirProps:{...n,...pe(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:i,slots:t,attrs:n,name:"TabGroup"})])}}}),lt=k({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let l=V("TabList");return()=>{let r={selectedIndex:l.selectedIndex.value},u={role:"tablist","aria-orientation":l.orientation.value};return R({ourProps:u,theirProps:e,slot:r,attrs:t,slots:n,name:"TabList"})}}}),rt=k({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let u=(r=e.id)!=null?r:`headlessui-tabs-tab-${de()}`,a=V("Tab"),s=x(null);l({el:s,$el:s}),$(()=>a.registerTab(s)),ue(()=>a.unregisterTab(s));let d=z(Q),v=I(()=>{if(d.value){let f=d.value.tabs.indexOf(u);return f===-1?d.value.tabs.push(u)-1:f}return-1}),p=I(()=>{let f=a.tabs.value.indexOf(s);return f===-1?v.value:f}),o=I(()=>p.value===a.selectedIndex.value);function c(f){var w;let T=f();if(T===D.Success&&a.activation.value==="auto"){let S=(w=Ge(s))==null?void 0:w.activeElement,A=a.tabs.value.findIndex(q=>y(q)===S);A!==-1&&a.setSelectedIndex(A)}return T}function h(f){let w=a.tabs.value.map(T=>y(T)).filter(Boolean);if(f.key===E.Space||f.key===E.Enter){f.preventDefault(),f.stopPropagation(),a.setSelectedIndex(p.value);return}switch(f.key){case E.Home:case E.PageUp:return f.preventDefault(),f.stopPropagation(),c(()=>F(w,P.First));case E.End:case E.PageDown:return f.preventDefault(),f.stopPropagation(),c(()=>F(w,P.Last))}if(c(()=>C(a.orientation.value,{vertical(){return f.key===E.ArrowUp?F(w,P.Previous|P.WrapAround):f.key===E.ArrowDown?F(w,P.Next|P.WrapAround):D.Error},horizontal(){return f.key===E.ArrowLeft?F(w,P.Previous|P.WrapAround):f.key===E.ArrowRight?F(w,P.Next|P.WrapAround):D.Error}}))===D.Success)return f.preventDefault()}let m=x(!1);function i(){var f;m.value||(m.value=!0,!e.disabled&&((f=y(s))==null||f.focus({preventScroll:!0}),a.setSelectedIndex(p.value),He(()=>{m.value=!1})))}function b(f){f.preventDefault()}let g=Ye(I(()=>({as:e.as,type:t.type})),s);return()=>{var f,w;let T={selected:o.value,disabled:(f=e.disabled)!=null?f:!1},{...S}=e,A={ref:s,onKeydown:h,onMousedown:b,onClick:i,id:u,role:"tab",type:g.value,"aria-controls":(w=y(a.panels.value[p.value]))==null?void 0:w.id,"aria-selected":o.value,tabIndex:o.value?0:-1,disabled:e.disabled?!0:void 0};return R({ourProps:A,theirProps:S,slot:T,attrs:t,slots:n,name:"Tab"})}}}),st=k({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=V("TabPanels");return()=>{let r={selectedIndex:l.selectedIndex.value};return R({theirProps:e,ourProps:{},slot:r,attrs:n,slots:t,name:"TabPanels"})}}}),ot=k({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:l}){var r;let u=(r=e.id)!=null?r:`headlessui-tabs-panel-${de()}`,a=V("TabPanel"),s=x(null);l({el:s,$el:s}),$(()=>a.registerPanel(s)),ue(()=>a.unregisterPanel(s));let d=z(Q),v=I(()=>{if(d.value){let c=d.value.panels.indexOf(u);return c===-1?d.value.panels.push(u)-1:c}return-1}),p=I(()=>{let c=a.panels.value.indexOf(s);return c===-1?v.value:c}),o=I(()=>p.value===a.selectedIndex.value);return()=>{var c;let h={selected:o.value},{tabIndex:m,...i}=e,b={ref:s,id:u,role:"tabpanel","aria-labelledby":(c=y(a.tabs.value[p.value]))==null?void 0:c.id,tabIndex:o.value?m:-1};return!o.value&&e.unmount&&!e.static?U(be,{as:"span","aria-hidden":!0,...b}):R({ourProps:b,theirProps:i,slot:h,attrs:t,slots:n,features:Y.Static|Y.RenderStrategy,visible:o.value,name:"TabPanel"})}}});const ut=xe(Z.ui.strategy,Z.ui.tabs,je),it=k({components:{HTabGroup:at,HTabList:lt,HTab:rt,HTabPanels:st,HTabPanel:ot},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:n,attrs:l}=Ie("tabs",ee(e,"ui"),ut,ee(e,"class")),r=x(),u=x([]),a=x(),s=x(e.modelValue||e.defaultIndex);function d(p){var c;const o=(c=u.value[p])==null?void 0:c.$el;o&&a.value&&(a.value.style.top=`${o.offsetTop}px`,a.value.style.left=`${o.offsetLeft}px`,a.value.style.width=`${o.offsetWidth}px`,a.value.style.height=`${o.offsetHeight}px`)}function v(p){s.value=p,t("change",p),e.modelValue!==void 0&&t("update:modelValue",s.value),d(s.value)}return Te(r,()=>{d(s.value)}),oe(()=>e.modelValue,p=>{s.value=p,d(s.value)}),$(()=>d(s.value)),Re(()=>_e("$39Q85lIXra")),{ui:n,attrs:l,listRef:r,itemRefs:u,markerRef:a,selectedIndex:s,onChange:v}}}),dt={class:"truncate"};function ct(e,t,n,l,r,u){const a=L("HTab"),s=L("HTabList"),d=L("HTabPanel"),v=L("HTabPanels"),p=L("HTabGroup");return O(),W(p,Ee({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:_(()=>[M(s,{ref:"listRef",class:N([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:Se([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:_(()=>[H("div",{ref:"markerRef",class:N(e.ui.list.marker.wrapper)},[H("div",{class:N([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(O(!0),B(G,null,J(e.items,(o,c)=>(O(),W(a,{key:c,ref_for:!0,ref:"itemRefs",disabled:o.disabled,as:"template"},{default:_(({selected:h,disabled:m})=>[H("button",{class:N([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,h?e.ui.list.tab.active:e.ui.list.tab.inactive])},[te(e.$slots,"default",{item:o,index:c,selected:h,disabled:m},()=>[H("span",dt,ne(o.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),M(v,{class:N(e.ui.container)},{default:_(()=>[(O(!0),B(G,null,J(e.items,(o,c)=>(O(),W(d,{key:c,class:N(e.ui.base),unmount:e.unmount},{default:_(({selected:h})=>[te(e.$slots,o.slot||"item",{item:o,index:c,selected:h},()=>[Pe(ne(o.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const ft=we(it,[["render",ct]]),pt=()=>{},vt=()=>{const e=Oe();function t(l,r){e.add({title:l,description:r,color:"green",icon:"i-heroicons-check-circle-solid"})}function n(l,r){e.add({title:l,description:r,color:"red",icon:"i-heroicons-x-circle-solid"})}return{success:t,error:n}},bt={class:"flex flex-col gap-2 sm:w-96"},mt=H("h1",{class:"text-xl font-bold"},"Leaderboard",-1),ht={key:0,class:"flex flex-col place-content-center"},gt=H("p",null,"Loading...",-1),It=k({__name:"leaderboard",setup(e){const t=[{label:"Streak"},{label:"Classic"}],n=pt(),l=vt(),r=x([]),u=x(!0);$(async()=>{s("streak")});function a(d){d===0?s("streak"):d===1&&s("classic")}async function s(d){try{r.value=await n.getLeaderboard(d),u.value=!1}catch{l.error("Failed to get leaderboard!","sorry, hehe :)")}}return(d,v)=>{const p=ft,o=$e,c=L("LeaderboardItem");return O(),B("div",bt,[mt,M(p,{class:"w-full",items:t,onChange:a}),ae(u)?(O(),B("div",ht,[gt,M(o)])):ke("",!0),M(Ae,{name:"list",tag:"ul",class:"flex flex-col gap-2 overflow-y-auto"},{default:_(()=>[(O(!0),B(G,null,J(ae(r),(h,m)=>(O(),W(c,{data:h,index:m},null,8,["data","index"]))),256))]),_:1})])}}});export{It as default};
