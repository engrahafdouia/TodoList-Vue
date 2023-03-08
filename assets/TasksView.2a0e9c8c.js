import{l as h,m as T,n as y,q as s,aq as N,c as _,ar as q,as as Ve,D as _e,M as B,K as S,a7 as H,V as L,at as R,au as Se,w as Te,s as xe,av as Ae,t as we,aw as Ie,ax as Le,ay as Pe,v as Ne,a2 as Be,az as Ee,C as De,z as je,aA as Fe,a8 as Re,aB as Me,A as Ue,aC as Oe,aD as Ge,aE as Ke,B as ze,aF as We,aG as P,aH as J,E as Q,aI as $e,aJ as qe,aK as He,aL as Je,r as Qe,aM as Xe,a9 as v,aa as g,ab as m,aN as Ye,aO as M,aP as w,aQ as U,af as Ze,aR as I,L as O,ac as G,X as et,aS as tt,an as u,aT as at,ah as X,aU as K,W as nt}from"./index.1b159048.js";import{_ as lt}from"./_plugin-vue_export-helper.cdc0426e.js";const st=h()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...T()},setup(e,n){let{slots:t}=n;return y(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),E=["sm","md","lg","xl","xxl"],Y=(()=>E.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),Z=(()=>E.reduce((e,n)=>(e["offset"+N(n)]={type:[String,Number],default:null},e),{}))(),ee=(()=>E.reduce((e,n)=>(e["order"+N(n)]={type:[String,Number],default:null},e),{}))(),z={col:Object.keys(Y),offset:Object.keys(Z),order:Object.keys(ee)};function it(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const ot=["auto","start","end","center","baseline","stretch"],W=h()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Y,offset:{type:[String,Number],default:null},...Z,order:{type:[String,Number],default:null},...ee,alignSelf:{type:String,default:null,validator:e=>ot.includes(e)},...T()},setup(e,n){let{slots:t}=n;const a=_(()=>{const l=[];let d;for(d in z)z[d].forEach(i=>{const r=e[i],o=it(d,i,r);o&&l.push(o)});const c=l.some(i=>i.startsWith("v-col-"));return l.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return q(e.tag,{class:a.value},(l=t.default)==null?void 0:l.call(t))}}}),dt=["sm","md","lg","xl","xxl"],D=["start","end","center"],te=["space-between","space-around","space-evenly"];function j(e,n){return dt.reduce((t,a)=>(t[e+N(a)]=n(),t),{})}const rt=[...D,"baseline","stretch"],ae=e=>rt.includes(e),ne=j("align",()=>({type:String,default:null,validator:ae})),ct=[...D,...te],le=e=>ct.includes(e),se=j("justify",()=>({type:String,default:null,validator:le})),ut=[...D,...te,"stretch"],ie=e=>ut.includes(e),oe=j("alignContent",()=>({type:String,default:null,validator:ie})),$={align:Object.keys(ne),justify:Object.keys(se),alignContent:Object.keys(oe)},ft={align:"align",justify:"justify",alignContent:"align-content"};function mt(e,n,t){let a=ft[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const vt=h()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ae},...ne,justify:{type:String,default:null,validator:le},...se,alignContent:{type:String,default:null,validator:ie},...oe,...T()},setup(e,n){let{slots:t}=n;const a=_(()=>{const l=[];let d;for(d in $)$[d].forEach(c=>{const i=e[c],r=mt(d,c,i);r&&l.push(r)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return q(e.tag,{class:["v-row",a.value]},(l=t.default)==null?void 0:l.call(t))}}}),gt="/TodoList-Vue/to_do_list.svg";const ht=Ve({name:"VCardActions",setup(e,n){let{slots:t}=n;return _e({VBtn:{variant:"text"}}),y(()=>{var a;return s("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),kt=B("v-card-subtitle"),de=B("v-card-title"),Ct=h()({name:"VCardItem",props:{appendAvatar:String,appendIcon:S,prependAvatar:String,prependIcon:S,subtitle:String,title:String,...H()},setup(e,n){let{slots:t}=n;return y(()=>{var i;const a=!!(e.prependAvatar||e.prependIcon||t.prepend),l=!!(e.appendAvatar||e.appendIcon||t.append),d=!!(e.title||t.title),c=!!(e.subtitle||t.subtitle);return s("div",{class:"v-card-item"},[a&&s(L,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var r,o;return[s("div",{class:"v-card-item__prepend"},[(o=(r=t.prepend)==null?void 0:r.call(t))!=null?o:s(R,null,null)])]}}),s("div",{class:"v-card-item__content"},[d&&s(de,{key:"title"},{default:()=>{var r,o;return[(o=(r=t.title)==null?void 0:r.call(t))!=null?o:e.title]}}),c&&s(kt,{key:"subtitle"},{default:()=>{var r,o;return[(o=(r=t.subtitle)==null?void 0:r.call(t))!=null?o:e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),l&&s(L,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var r,o;return[s("div",{class:"v-card-item__append"},[(o=(r=t.append)==null?void 0:r.call(t))!=null?o:s(R,null,null)])]}})])}),{}}}),re=B("v-card-text"),yt=h()({name:"VCard",directives:{Ripple:Se},props:{appendAvatar:String,appendIcon:S,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:S,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Te(),...xe(),...H(),...Ae(),...we(),...Ie(),...Le(),...Pe(),...Ne(),...Be(),...T(),...Ee({variant:"elevated"})},setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:l}=De(e),{borderClasses:d}=je(e),{colorClasses:c,colorStyles:i,variantClasses:r}=Fe(e),{densityClasses:o}=Re(e),{dimensionStyles:f}=Me(e),{elevationClasses:x}=Ue(e),{loaderClasses:A}=Oe(e),{locationStyles:b}=Ge(e),{positionClasses:ce}=Ke(e),{roundedClasses:ue}=ze(e),p=We(e,t),fe=_(()=>e.link!==!1&&p.isLink.value),V=_(()=>!e.disabled&&e.link!==!1&&(e.link||p.isClickable.value));return y(()=>{const me=fe.value?"a":e.tag,ve=!!(a.title||e.title),ge=!!(a.subtitle||e.subtitle),he=ve||ge,ke=!!(a.append||e.appendAvatar||e.appendIcon),Ce=!!(a.prepend||e.prependAvatar||e.prependIcon),ye=!!(a.image||e.image),be=he||Ce||ke,pe=!!(a.text||e.text);return P(s(me,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},l.value,d.value,c.value,o.value,x.value,A.value,ce.value,ue.value,r.value],style:[i.value,f.value,b.value],href:p.href.value,onClick:V.value&&p.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var F;return[ye&&s(L,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var k,C;return[s("div",{class:"v-card__image"},[(C=(k=a.image)==null?void 0:k.call(a))!=null?C:s(Q,null,null)])]}}),s($e,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),be&&s(Ct,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),pe&&s(re,{key:"text"},{default:()=>{var k,C;return[(C=(k=a.text)==null?void 0:k.call(a))!=null?C:e.text]}}),(F=a.default)==null?void 0:F.call(a),a.actions&&s(ht,null,{default:a.actions}),qe(V.value,"v-card")]}}),[[J("ripple"),V.value&&e.ripple]])}),{}}}),bt=h()({name:"VForm",props:{...He()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,n){let{slots:t,emit:a}=n;const l=Je(e),d=Qe();function c(r){r.preventDefault(),l.reset()}function i(r){const o=r,f=l.validate();o.then=f.then.bind(f),o.catch=f.catch.bind(f),o.finally=f.finally.bind(f),a("submit",o),o.defaultPrevented||f.then(x=>{var b;let{valid:A}=x;A&&((b=d.value)==null||b.submit())}),o.preventDefault()}return y(()=>{var r;return s("form",{ref:d,class:"v-form",novalidate:!0,onReset:c,onSubmit:i},[(r=t.default)==null?void 0:r.call(t,l)])}),Xe(l,d)}}),pt={data(){return{loaded:!1,loading:!1,message:"",messageClass:"",newTodo:"",idForTodo:3,todos:[{id:1,title:"Finish Vue Screencast",completed:!1,editing:!1},{id:2,title:"Take over world",completed:!1,editing:!1},{id:3,title:"Watch course vue",completed:!1,editing:!1}],Name:"",TasksList:[],searchValue:""}},computed:{remaining(){return this.todos.filter(e=>!e.completed).length},anyRemaining(){return this.remaining!=0},todosFiltered(){return this.filter=="all"?this.todos:this.filter=="active"?this.todos.filter(e=>!e.completed):this.filter=="completed"?this.todos.filter(e=>e.completed):this.todos},filteredList(){return this.todos.filter(e=>e.title.toLowerCase().includes(this.searchValue.toLowerCase()))},showClearCompletedButton(){return this.todos.filter(e=>e.completed).length>0}},directives:{focus:{inserted:function(e){e.focus()}}},methods:{addTodo(){if(this.newTodo.trim().length==0){this.showMsg("Please enter value field",!0);return}this.todos.push({id:this.idForTodo,title:this.newTodo,completed:!1,editing:!1}),this.showMsg("Task was Added"),this.newTodo="",this.idForTodo++},removeTodo(e){this.todos.splice(e,1)},editTodo(e){this.beforeEditCache=e.title,e.editing=!0},doneEdit(e){e.title.trim()==""&&(e.title=this.beforeEditCache),e.editing=!1},cancelEdit(e){e.title=this.beforeEditCache,e.editing=!1},checkAllTodos(){this.todos.forEach(e=>e.completed=event.target.checked)},clearCompleted(){this.todos=this.todos.filter(e=>!e.completed)},showMsg(e,n=!1,t=3e3){n?this.messageClass="error":this.messageClass="success",this.message=e,setTimeout(this.removeMsg,t)},removeMsg(){this.message="",this.messageClass=""}}},Vt={class:"bg-indigo-lighten-4 py-10"},_t=u("h1",{class:"text-h4 font-italic text-center px-4"},"ToDoList With Vue",-1),St=["textContent"],Tt=["onUpdate:modelValue"],xt=["onDblclick"],At=["onClick"],wt={class:"extra-container"},It=["checked"],Lt={class:"extra-container"};function Pt(e,n,t,a,l,d){const c=J("focus");return v(),g("section",Vt,[_t,s(st,null,{default:m(()=>[s(vt,null,{default:m(()=>[s(W,{cols:"12",lg:"4"},{default:m(()=>[s(Q,{src:gt,class:"py-6"})]),_:1}),s(W,{cols:"12",lg:"5"},{default:m(()=>[s(yt,null,{default:m(()=>[s(de),s(bt,{onSubmit:Ye(d.addTodo,["prevent"])},{default:m(()=>[s(re,null,{default:m(()=>[l.message?(v(),g("div",{key:0,class:M(["msg",l.messageClass]),textContent:w(l.message)},null,10,St)):U("",!0),s(Ze,{class:"mx-4",inset:"",vertical:""}),s(I,{class:"px-2",clearable:"",placeholder:"New Task",variant:"underlined",color:"indigo",modelValue:l.newTodo,"onUpdate:modelValue":n[0]||(n[0]=i=>l.newTodo=i)},null,8,["modelValue"]),s(O,{type:"submit",class:"px-6",rounded:"pill",color:"purpleme"},{default:m(()=>[G(" New Task ")]),_:1}),(v(!0),g(et,null,tt(d.filteredList,(i,r)=>(v(),g("div",{key:i.id,class:"todo-item"},[P(u("input",{type:"checkbox","onUpdate:modelValue":o=>i.completed=o},null,8,Tt),[[at,i.completed]]),i.editing?P((v(),X(I,{key:1,class:"todo-item-edit",type:"text",modelValue:i.title,"onUpdate:modelValue":o=>i.title=o,onBlur:o=>d.doneEdit(i),onKeyup:[K(o=>d.doneEdit(i),["enter"]),K(o=>d.cancelEdit(i),["esc"])]},null,8,["modelValue","onUpdate:modelValue","onBlur","onKeyup"])),[[c]]):(v(),g("div",{key:0,class:M([{completed:i.completed},"todo-item-label"]),onDblclick:o=>d.editTodo(i)},w(i.title),43,xt)),u("div",{class:"remove-item",onClick:o=>d.removeTodo(r)},[s(O,{icon:"mdi-delete"})],8,At)]))),128)),u("div",wt,[u("div",null,[u("label",null,[u("input",{type:"checkbox",checked:!d.anyRemaining,onChange:n[1]||(n[1]=(...i)=>d.checkAllTodos&&d.checkAllTodos(...i))},null,40,It),G(" Check All")])]),u("div",null,w(d.remaining)+" items left",1)]),u("div",Lt,[u("div",null,[s(nt,{name:"fade"},{default:m(()=>[d.showClearCompletedButton?(v(),g("button",{key:0,onClick:n[2]||(n[2]=(...i)=>d.clearCompleted&&d.clearCompleted(...i))}," Clear Completed ")):U("",!0)]),_:1})]),s(I,{class:"bg-indigo-lighten-2",pills:"",loading:l.loading,density:"compact",variant:"text",modelValue:l.searchValue,"onUpdate:modelValue":n[3]||(n[3]=i=>l.searchValue=i),modelModifiers:{trim:!0},label:"Search Task","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":e.onClick},null,8,["loading","modelValue","onClick:appendInner"])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}const Nt=lt(pt,[["render",Pt]]),Dt={__name:"TasksView",setup(e){return(n,t)=>(v(),X(Nt))}};export{Dt as default};
