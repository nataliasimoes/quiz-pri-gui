import{d as l,C as i,a as m,c as p,b as o,e as d,g as e,I as u,u as c,O as f,_ as x}from"./CFcjlJpo.js";import{_ as h}from"./CYMKZZlO.js";import{_ as b}from"./U4P-I-2e.js";import{u as g}from"./BYMpq78N.js";const k={class:"flex flex-col gap-2"},C=e("h1",{class:"text-xl"},"Quiz Finished!",-1),v={class:"flex flex-col place-items-center"},B={class:"flex flex-col gap-2"},L=l({__name:"streakscore",setup(S){const t=g();return(U,F)=>{const a=f,r=h,n=b,_=i("LeaderboardForm"),s=x;return m(),p("div",k,[C,o(r,null,{default:d(()=>[e("div",v,[o(a,{name:"i-heroicons-fire-solid",class:"bg-orange-400 w-14 h-14"}),e("p",null,"Score : "+u(c(t).correctCount),1)])]),_:1}),o(n),o(_,{score:c(t).correctCount,time:0,mode:"streak"},null,8,["score"]),o(n),e("div",B,[o(s,{label:"Play Again",icon:"i-heroicons-fire-solid",color:"orange",block:"",to:"/streak"}),o(s,{label:"Back to menu",icon:"i-heroicons-home-solid",block:"",to:"/"})])])}}});export{L as default};