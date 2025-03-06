var we=Object.defineProperty;var Te=(o,e,s)=>e in o?we(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var oe=(o,e,s)=>Te(o,typeof e!="symbol"?e+"":e,s);import{r as i,G as w,j as z,a9 as _,F as Pe}from"./index-CoU4576v.js";import{n as Se,a as v,s as H,b as re,k as Ee,g as ae,u as ne,j as G,c as le,r as Fe}from"./createSimplePaletteValueFilter-BkuHQHCT.js";import{a as Le,u as Ie}from"./useFormControl-2iTihPub.js";import{T as Ne}from"./toPropertyKey-BWR5Sd7u.js";function ie(o){try{return o.matches(":focus-visible")}catch{}return!1}class J{constructor(){oe(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new J}static use(){const e=Se(J.create).current,[s,a]=i.useState(!1);return e.shouldMount=s,e.setShouldMount=a,i.useEffect(e.mountEffect,[s]),e}mount(){return this.mounted||(this.mounted=De(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var s;return(s=this.ref.current)==null?void 0:s.start(...e)})}stop(...e){this.mount().then(()=>{var s;return(s=this.ref.current)==null?void 0:s.stop(...e)})}pulsate(...e){this.mount().then(()=>{var s;return(s=this.ref.current)==null?void 0:s.pulsate(...e)})}}function $e(){return J.use()}function De(){let o,e;const s=new Promise((a,p)=>{o=a,e=p});return s.resolve=o,s.reject=e,s}function je(o){const{className:e,classes:s,pulsate:a=!1,rippleX:p,rippleY:l,rippleSize:f,in:T,onExited:m,timeout:u}=o,[g,R]=i.useState(!1),b=w(e,s.ripple,s.rippleVisible,a&&s.ripplePulsate),P={width:f,height:f,top:-(f/2)+l,left:-(f/2)+p},h=w(s.child,g&&s.childLeaving,a&&s.childPulsate);return!T&&!g&&R(!0),i.useEffect(()=>{if(!T&&m!=null){const F=setTimeout(m,u);return()=>{clearTimeout(F)}}},[m,T,u]),z.jsx("span",{className:b,style:P,children:z.jsx("span",{className:h})})}const x=v("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Z=550,ze=80,Ve=_`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ue=_`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ke=_`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ae=H("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Xe=H(je,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${x.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ve};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:o})=>o.transitions.easing.easeInOut};
  }

  &.${x.ripplePulsate} {
    animation-duration: ${({theme:o})=>o.transitions.duration.shorter}ms;
  }

  & .${x.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${x.childLeaving} {
    opacity: 0;
    animation-name: ${Ue};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:o})=>o.transitions.easing.easeInOut};
  }

  & .${x.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ke};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:o})=>o.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ye=i.forwardRef(function(e,s){const a=re({props:e,name:"MuiTouchRipple"}),{center:p=!1,classes:l={},className:f,...T}=a,[m,u]=i.useState([]),g=i.useRef(0),R=i.useRef(null);i.useEffect(()=>{R.current&&(R.current(),R.current=null)},[m]);const b=i.useRef(!1),P=Ee(),h=i.useRef(null),F=i.useRef(null),y=i.useCallback(n=>{const{pulsate:M,rippleX:d,rippleY:I,rippleSize:N,cb:U}=n;u(C=>[...C,z.jsx(Xe,{classes:{ripple:w(l.ripple,x.ripple),rippleVisible:w(l.rippleVisible,x.rippleVisible),ripplePulsate:w(l.ripplePulsate,x.ripplePulsate),child:w(l.child,x.child),childLeaving:w(l.childLeaving,x.childLeaving),childPulsate:w(l.childPulsate,x.childPulsate)},timeout:Z,pulsate:M,rippleX:d,rippleY:I,rippleSize:N},g.current)]),g.current+=1,R.current=U},[l]),L=i.useCallback((n={},M={},d=()=>{})=>{const{pulsate:I=!1,center:N=p||M.pulsate,fakeElement:U=!1}=M;if((n==null?void 0:n.type)==="mousedown"&&b.current){b.current=!1;return}(n==null?void 0:n.type)==="touchstart"&&(b.current=!0);const C=U?null:F.current,c=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,B,E;if(N||n===void 0||n.clientX===0&&n.clientY===0||!n.clientX&&!n.touches)S=Math.round(c.width/2),B=Math.round(c.height/2);else{const{clientX:k,clientY:$}=n.touches&&n.touches.length>0?n.touches[0]:n;S=Math.round(k-c.left),B=Math.round($-c.top)}if(N)E=Math.sqrt((2*c.width**2+c.height**2)/3),E%2===0&&(E+=1);else{const k=Math.max(Math.abs((C?C.clientWidth:0)-S),S)*2+2,$=Math.max(Math.abs((C?C.clientHeight:0)-B),B)*2+2;E=Math.sqrt(k**2+$**2)}n!=null&&n.touches?h.current===null&&(h.current=()=>{y({pulsate:I,rippleX:S,rippleY:B,rippleSize:E,cb:d})},P.start(ze,()=>{h.current&&(h.current(),h.current=null)})):y({pulsate:I,rippleX:S,rippleY:B,rippleSize:E,cb:d})},[p,y,P]),A=i.useCallback(()=>{L({},{pulsate:!0})},[L]),V=i.useCallback((n,M)=>{if(P.clear(),(n==null?void 0:n.type)==="touchend"&&h.current){h.current(),h.current=null,P.start(0,()=>{V(n,M)});return}h.current=null,u(d=>d.length>0?d.slice(1):d),R.current=M},[P]);return i.useImperativeHandle(s,()=>({pulsate:A,start:L,stop:V}),[A,L,V]),z.jsx(Ae,{className:w(x.root,l.root,f),ref:F,...T,children:z.jsx(Ne,{component:null,exit:!0,children:m})})});function He(o){return ae("MuiButtonBase",o)}const Oe=v("MuiButtonBase",["root","disabled","focusVisible"]),qe=o=>{const{disabled:e,focusVisible:s,focusVisibleClassName:a,classes:p}=o,f=le({root:["root",e&&"disabled",s&&"focusVisible"]},He,p);return s&&a&&(f.root+=` ${a}`),f},We=H("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Oe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ge=i.forwardRef(function(e,s){const a=re({props:e,name:"MuiButtonBase"}),{action:p,centerRipple:l=!1,children:f,className:T,component:m="button",disabled:u=!1,disableRipple:g=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:P,LinkComponent:h="a",onBlur:F,onClick:y,onContextMenu:L,onDragLeave:A,onFocus:V,onFocusVisible:n,onKeyDown:M,onKeyUp:d,onMouseDown:I,onMouseLeave:N,onMouseUp:U,onTouchEnd:C,onTouchMove:c,onTouchStart:S,tabIndex:B=0,TouchRippleProps:E,touchRippleRef:k,type:$,...D}=a,K=i.useRef(null),r=$e(),O=ne(r.ref,k),[X,q]=i.useState(!1);u&&X&&q(!1),i.useImperativeHandle(p,()=>({focusVisible:()=>{q(!0),K.current.focus()}}),[]);const ue=r.shouldMount&&!g&&!u;i.useEffect(()=>{X&&b&&!g&&r.pulsate()},[g,b,X,r]);function j(t,te,ke=R){return G(se=>(te&&te(se),ke||r[t](se),!0))}const ce=j("start",I),pe=j("stop",L),de=j("stop",A),he=j("stop",U),fe=j("stop",t=>{X&&t.preventDefault(),N&&N(t)}),me=j("start",S),be=j("stop",C),ge=j("stop",c),Re=j("stop",t=>{ie(t.target)||q(!1),F&&F(t)},!1),ye=G(t=>{K.current||(K.current=t.currentTarget),ie(t.target)&&(q(!0),n&&n(t)),V&&V(t)}),Q=()=>{const t=K.current;return m&&m!=="button"&&!(t.tagName==="A"&&t.href)},Me=G(t=>{b&&!t.repeat&&X&&t.key===" "&&r.stop(t,()=>{r.start(t)}),t.target===t.currentTarget&&Q()&&t.key===" "&&t.preventDefault(),M&&M(t),t.target===t.currentTarget&&Q()&&t.key==="Enter"&&!u&&(t.preventDefault(),y&&y(t))}),Ce=G(t=>{b&&t.key===" "&&X&&!t.defaultPrevented&&r.stop(t,()=>{r.pulsate(t)}),d&&d(t),y&&t.target===t.currentTarget&&Q()&&t.key===" "&&!t.defaultPrevented&&y(t)});let W=m;W==="button"&&(D.href||D.to)&&(W=h);const Y={};W==="button"?(Y.type=$===void 0?"button":$,Y.disabled=u):(!D.href&&!D.to&&(Y.role="button"),u&&(Y["aria-disabled"]=u));const xe=ne(s,K),ee={...a,centerRipple:l,component:m,disabled:u,disableRipple:g,disableTouchRipple:R,focusRipple:b,tabIndex:B,focusVisible:X},Be=qe(ee);return z.jsxs(We,{as:W,className:w(Be.root,T),ownerState:ee,onBlur:Re,onClick:y,onContextMenu:pe,onFocus:ye,onKeyDown:Me,onKeyUp:Ce,onMouseDown:ce,onMouseLeave:fe,onMouseUp:he,onDragLeave:de,onTouchEnd:be,onTouchMove:ge,onTouchStart:me,ref:xe,tabIndex:u?-1:B,type:$,...Y,...D,children:[f,ue?z.jsx(Ye,{ref:O,center:l,...E}):null]})});function Je(o){return ae("PrivateSwitchBase",o)}v("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Qe=o=>{const{classes:e,checked:s,disabled:a,edge:p}=o,l={root:["root",s&&"checked",a&&"disabled",p&&`edge${Pe(p)}`],input:["input"]};return le(l,Je,e)},Ze=H(Ge)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:o,ownerState:e})=>o==="start"&&e.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:o,ownerState:e})=>o==="end"&&e.size!=="small",style:{marginRight:-12}}]}),_e=H("input",{shouldForwardProp:Fe})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),it=i.forwardRef(function(e,s){const{autoFocus:a,checked:p,checkedIcon:l,className:f,defaultChecked:T,disabled:m,disableFocusRipple:u=!1,edge:g=!1,icon:R,id:b,inputProps:P,inputRef:h,name:F,onBlur:y,onChange:L,onFocus:A,readOnly:V,required:n=!1,tabIndex:M,type:d,value:I,...N}=e,[U,C]=Le({controlled:p,default:!!T,name:"SwitchBase",state:"checked"}),c=Ie(),S=r=>{A&&A(r),c&&c.onFocus&&c.onFocus(r)},B=r=>{y&&y(r),c&&c.onBlur&&c.onBlur(r)},E=r=>{if(r.nativeEvent.defaultPrevented)return;const O=r.target.checked;C(O),L&&L(r,O)};let k=m;c&&typeof k>"u"&&(k=c.disabled);const $=d==="checkbox"||d==="radio",D={...e,checked:U,disabled:k,disableFocusRipple:u,edge:g},K=Qe(D);return z.jsxs(Ze,{component:"span",className:w(K.root,f),centerRipple:!0,focusRipple:!u,disabled:k,tabIndex:null,role:void 0,onFocus:S,onBlur:B,ownerState:D,ref:s,...N,children:[z.jsx(_e,{autoFocus:a,checked:p,defaultChecked:T,className:K.input,disabled:k,id:$?b:void 0,name:F,onChange:E,readOnly:V,ref:h,required:n,ownerState:D,tabIndex:M,type:d,...d==="checkbox"&&I===void 0?{}:{value:I},...P}),U?l:R]})});export{Ge as B,it as S,ie as i};
