import{_ as h}from"./Dzew1Hsx.js";import{v as g,a,c,b as i,g as r,d as f,I as y,e as b,T as k,O as v,x as $,y as m,z as w,A as q,P as C,q as T,Q as j,R as z,H as O,J as M,K as S,F as A,G as B,f as I,_ as L}from"./ChkaZW-f.js";const H={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},U={},N=r("p",null,"Loading your questions...",-1);function P(e,t){const n=h;return a(),c("div",null,[N,i(n,{animation:"carousel"})])}const te=g(U,[["render",P]]),Q=r("p",null,"There was an error loading your questions.",-1),ne=f({__name:"QuestionError",props:{data:{}},setup(e){return(t,n)=>(a(),c("div",null,[Q,r("p",null,y(t.data.error),1)]))}}),V={},E=r("p",{class:"text-lg"},"Correct!",-1);function F(e,t){const n=v;return a(),c("div",null,[i(k,{name:"scale",appear:""},{default:b(()=>[r("div",null,[i(n,{class:"w-10 h-10 text-green-400",name:"i-heroicons-check-circle-solid"})])]),_:1}),E])}const re=g(V,[["render",F]]),G={},J=r("p",{class:"text-lg"},"Incorrect!",-1);function R(e,t){const n=v;return a(),c("div",null,[i(k,{name:"scale",appear:""},{default:b(()=>[r("div",null,[i(n,{class:"w-10 h-10 text-red-400",name:"i-heroicons-x-circle-solid"})])]),_:1}),J])}const oe=g(G,[["render",R]]),o=$(m.ui.strategy,m.ui.badge,H),D=f({inheritAttrs:!1,props:{size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...m.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=w("badge",q(e,"ui"),o),{size:l,rounded:u}=C({ui:t,props:e}),d=T(()=>{var p,_;const s=((_=(p=t.value.color)==null?void 0:p[e.color])==null?void 0:_[e.variant])||t.value.variant[e.variant];return j(z(t.value.base,t.value.font,u.value,t.value.size[l.value],s==null?void 0:s.replaceAll("{color}",e.color)),e.class)});return{attrs:n,badgeClass:d}}});function K(e,t,n,l,u,d){return a(),c("span",S({class:e.badgeClass},e.attrs),[O(e.$slots,"default",{},()=>[M(y(e.label),1)])],16)}const ae=g(D,[["render",K]]),W=["innerHTML"],X={class:"flex flex-col gap-2 mt-4"},se=f({__name:"TheQuestion",props:{question:{}},emits:["answer"],setup(e,{emit:t}){const n=e,l=t;function u(){return[n.question.correct_answer,...n.question.incorrect_answers].sort(()=>Math.random()-.5)}function d(s){l("answer",s==n.question.correct_answer)}return(s,p)=>{const _=L;return a(),c("div",null,[r("p",{innerHTML:s.question.question},null,8,W),r("div",X,[(a(!0),c(A,null,B(u(),x=>(a(),I(_,{innerHTML:x,variant:"soft",onClick:Y=>d(x),block:""},null,8,["innerHTML","onClick"]))),256))])])}}});export{ne as _,ae as a,se as b,te as c,re as d,oe as e};
