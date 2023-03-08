import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import{l as b,ai as D,I as N,aj as R,ak as T,u as j,Q as k,r as q,al as z,N as h,am as C,j as O,c as A,a1 as F,n as Y,q as f,E as J,a9 as H,ah as L,ab as _,an as i,L as Q,J as U,ac as W,ao as G,ap as K}from"./index.1b159048.js";const X="/TodoList-Vue/hero.jpg";const Z=b()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...D()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const l=N(e,"modelValue"),{runOpenDelay:r,runCloseDelay:u}=R(e,o=>!e.disabled&&(l.value=o));return()=>{var o;return(o=n.default)==null?void 0:o.call(n,{isHovering:l.value,props:{onMouseenter:r,onMouseleave:u}})}}});function ee(e){return Math.floor(Math.abs(e))*Math.sign(e)}const te=b()({name:"VParallax",props:{scale:{type:[Number,String],default:.5}},setup(e,c){let{slots:n}=c;const{intersectionRef:l,isIntersecting:r}=T(),{resizeRef:u,contentRect:o}=j(),{height:p}=k(),m=q();z(()=>{var a;l.value=u.value=(a=m.value)==null?void 0:a.$el});let t;h(r,a=>{a?(t=C(l.value),t=t===document.scrollingElement?document:t,t.addEventListener("scroll",s,{passive:!0}),s()):t.removeEventListener("scroll",s)}),O(()=>{t==null||t.removeEventListener("scroll",s)}),h(p,s),h(()=>{var a;return(a=o.value)==null?void 0:a.height},s);const v=A(()=>1-F(+e.scale));let g=-1;function s(){!r.value||(cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y,V,w;const a=((y=m.value)==null?void 0:y.$el).querySelector(".v-img__img");if(!a)return;const x=(V=t.clientHeight)!=null?V:document.documentElement.clientHeight,$=(w=t.scrollTop)!=null?w:window.scrollY,I=l.value.offsetTop,d=o.value.height,P=I+(d-x)/2,B=ee(($-P)*v.value),E=Math.max(1,(v.value*(x-d)+d)/d);a.style.setProperty("transform",`translateY(${B}px) scale(${E})`)}))}return Y(()=>f(J,{class:["v-parallax",{"v-parallax--active":r.value}],ref:m,cover:!0,onLoadstart:s,onLoad:s},n)),{}}}),ae={setup(){return{}}},S=e=>(G("data-v-ad788fe7"),e=e(),K(),e),oe={class:"overlay"},se={class:"d-flex flex-column fill-height justify-center align-center text-white"},ne=S(()=>i("h1",{class:"text-h2 font-weight-bold m-4"},[i("h1",{class:"text-h2 subheading center-text font-weight-bold ma-10"}," Welcome to ToDoList ")],-1)),le=S(()=>i("h3",{class:"text-h6 subheading font-weight-thin",color:"primary"},null,-1));function re(e,c,n,l,r,u){return H(),L(te,{src:X,covered:""},{default:_(()=>[i("div",oe,[i("div",se,[ne,le,f(Z,null,{default:_(({isHovering:o,props:p})=>[f(Q,U(p,{color:o?"purpleme":"warning",title:"Learn Now ",class:"my-4",rounded:"pill"}),{default:_(()=>[W("Learn now ")]),_:2},1040,["color"])]),_:1})])])]),_:1})}const ce=M(ae,[["render",re],["__scopeId","data-v-ad788fe7"]]),de={__name:"Home",setup(e){return(c,n)=>(H(),L(ce))}};export{de as default};