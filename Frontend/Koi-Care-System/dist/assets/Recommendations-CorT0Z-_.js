var Re=t=>{throw TypeError(t)};var ce=(t,r,a)=>r.has(t)||Re("Cannot "+a);var i=(t,r,a)=>(ce(t,r,"read from private field"),a?a.call(t):r.get(t)),w=(t,r,a)=>r.has(t)?Re("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,a),m=(t,r,a,o)=>(ce(t,r,"write to private field"),o?o.call(t,a):r.set(t,a),a),p=(t,r,a)=>(ce(t,r,"access private method"),a);import{S as He,p as Le,f as P,s as de,i as le,n as Ve,k as ue,l as Me,t as Ze,m as qe,o as Ke,q as $e,v as Qe,r as g,w as Je,d as Ge,x as Xe,j as e,L as Ye,R as et,B as Ie,A as tt,y as st,a as he}from"./index-B6lDE10X.js";import{S as Y}from"./index-CTKt8NEf.js";/* empty css                 */import{L as rt,H as it}from"./LeftSideBar-228rYu2N.js";import{T as at,m as oe}from"./TopLayout-BWrXDSGP.js";import"./index-zdI1LHq1.js";import"./index-C82jgAjb.js";import"./index-E5_DBUWf.js";import"./index-pU6niAKh.js";/* empty css            */import"./logo-DG-ZgLhE.js";import"./Popover-D5wYuPsK.js";import"./createSimplePaletteValueFilter-CtWn6jP0.js";import"./Transition-CB3Oswcw.js";import"./Typography-D8_YzR8Q.js";var C,l,te,N,_,K,W,E,se,J,G,H,V,D,X,h,ee,me,ge,xe,pe,fe,ve,be,Ae,ze,ot=(ze=class extends He{constructor(r,a){super();w(this,h);w(this,C);w(this,l);w(this,te);w(this,N);w(this,_);w(this,K);w(this,W);w(this,E);w(this,se);w(this,J);w(this,G);w(this,H);w(this,V);w(this,D);w(this,X,new Set);this.options=a,m(this,C,r),m(this,E,null),m(this,W,Le()),this.options.experimental_prefetchInRender||i(this,W).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(a)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,l).addObserver(this),Oe(i(this,l),this.options)?p(this,h,ee).call(this):this.updateResult(),p(this,h,pe).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ye(i(this,l),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ye(i(this,l),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,h,fe).call(this),p(this,h,ve).call(this),i(this,l).removeObserver(this)}setOptions(r,a){const o=this.options,f=i(this,l);if(this.options=i(this,C).defaultQueryOptions(r),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof P(this.options.enabled,i(this,l))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");p(this,h,be).call(this),i(this,l).setOptions(this.options),o._defaulted&&!de(this.options,o)&&i(this,C).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,l),observer:this});const d=this.hasListeners();d&&Ee(i(this,l),f,this.options,o)&&p(this,h,ee).call(this),this.updateResult(a),d&&(i(this,l)!==f||P(this.options.enabled,i(this,l))!==P(o.enabled,i(this,l))||le(this.options.staleTime,i(this,l))!==le(o.staleTime,i(this,l)))&&p(this,h,me).call(this);const n=p(this,h,ge).call(this);d&&(i(this,l)!==f||P(this.options.enabled,i(this,l))!==P(o.enabled,i(this,l))||n!==i(this,D))&&p(this,h,xe).call(this,n)}getOptimisticResult(r){const a=i(this,C).getQueryCache().build(i(this,C),r),o=this.createResult(a,r);return nt(this,o)&&(m(this,N,o),m(this,K,this.options),m(this,_,i(this,l).state)),o}getCurrentResult(){return i(this,N)}trackResult(r,a){const o={};return Object.keys(r).forEach(f=>{Object.defineProperty(o,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),a==null||a(f),r[f])})}),o}trackProp(r){i(this,X).add(r)}getCurrentQuery(){return i(this,l)}refetch({...r}={}){return this.fetch({...r})}fetchOptimistic(r){const a=i(this,C).defaultQueryOptions(r),o=i(this,C).getQueryCache().build(i(this,C),a);return o.fetch().then(()=>this.createResult(o,a))}fetch(r){return p(this,h,ee).call(this,{...r,cancelRefetch:r.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,N)))}createResult(r,a){var re;const o=i(this,l),f=this.options,d=i(this,N),n=i(this,_),k=i(this,K),j=r!==o?r.state:i(this,te),{state:M}=r;let c={...M},z=!1,y;if(a._optimisticResults){const b=this.hasListeners(),A=!b&&Oe(r,a),$=b&&Ee(r,o,a,f);(A||$)&&(c={...c,...Ke(M.data,r.options)}),a._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:F,errorUpdatedAt:B,status:x}=c;if(a.select&&c.data!==void 0)if(d&&c.data===(n==null?void 0:n.data)&&a.select===i(this,se))y=i(this,J);else try{m(this,se,a.select),y=a.select(c.data),y=$e(d==null?void 0:d.data,y,a),m(this,J,y),m(this,E,null)}catch(b){m(this,E,b)}else y=c.data;if(a.placeholderData!==void 0&&y===void 0&&x==="pending"){let b;if(d!=null&&d.isPlaceholderData&&a.placeholderData===(k==null?void 0:k.placeholderData))b=d.data;else if(b=typeof a.placeholderData=="function"?a.placeholderData((re=i(this,G))==null?void 0:re.state.data,i(this,G)):a.placeholderData,a.select&&b!==void 0)try{b=a.select(b),m(this,E,null)}catch(A){m(this,E,A)}b!==void 0&&(x="success",y=$e(d==null?void 0:d.data,b,a),z=!0)}i(this,E)&&(F=i(this,E),y=i(this,J),B=Date.now(),x="error");const T=c.fetchStatus==="fetching",Q=x==="pending",U=x==="error",Z=Q&&T,q=y!==void 0,S={status:x,fetchStatus:c.fetchStatus,isPending:Q,isSuccess:x==="success",isError:U,isInitialLoading:Z,isLoading:Z,data:y,dataUpdatedAt:c.dataUpdatedAt,error:F,errorUpdatedAt:B,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>j.dataUpdateCount||c.errorUpdateCount>j.errorUpdateCount,isFetching:T,isRefetching:T&&!Q,isLoadingError:U&&!q,isPaused:c.fetchStatus==="paused",isPlaceholderData:z,isRefetchError:U&&q,isStale:we(r,a),refetch:this.refetch,promise:i(this,W)};if(this.options.experimental_prefetchInRender){const b=I=>{S.status==="error"?I.reject(S.error):S.data!==void 0&&I.resolve(S.data)},A=()=>{const I=m(this,W,S.promise=Le());b(I)},$=i(this,W);switch($.status){case"pending":r.queryHash===o.queryHash&&b($);break;case"fulfilled":(S.status==="error"||S.data!==$.value)&&A();break;case"rejected":(S.status!=="error"||S.error!==$.reason)&&A();break}}return S}updateResult(r){const a=i(this,N),o=this.createResult(i(this,l),this.options);if(m(this,_,i(this,l).state),m(this,K,this.options),i(this,_).data!==void 0&&m(this,G,i(this,l)),de(o,a))return;m(this,N,o);const f={},d=()=>{if(!a)return!0;const{notifyOnChangeProps:n}=this.options,k=typeof n=="function"?n():n;if(k==="all"||!k&&!i(this,X).size)return!0;const v=new Set(k??i(this,X));return this.options.throwOnError&&v.add("error"),Object.keys(i(this,N)).some(j=>{const M=j;return i(this,N)[M]!==a[M]&&v.has(M)})};(r==null?void 0:r.listeners)!==!1&&d()&&(f.listeners=!0),p(this,h,Ae).call(this,{...f,...r})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,h,pe).call(this)}},C=new WeakMap,l=new WeakMap,te=new WeakMap,N=new WeakMap,_=new WeakMap,K=new WeakMap,W=new WeakMap,E=new WeakMap,se=new WeakMap,J=new WeakMap,G=new WeakMap,H=new WeakMap,V=new WeakMap,D=new WeakMap,X=new WeakMap,h=new WeakSet,ee=function(r){p(this,h,be).call(this);let a=i(this,l).fetch(this.options,r);return r!=null&&r.throwOnError||(a=a.catch(Ve)),a},me=function(){p(this,h,fe).call(this);const r=le(this.options.staleTime,i(this,l));if(ue||i(this,N).isStale||!Me(r))return;const o=Ze(i(this,N).dataUpdatedAt,r)+1;m(this,H,setTimeout(()=>{i(this,N).isStale||this.updateResult()},o))},ge=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,l)):this.options.refetchInterval)??!1},xe=function(r){p(this,h,ve).call(this),m(this,D,r),!(ue||P(this.options.enabled,i(this,l))===!1||!Me(i(this,D))||i(this,D)===0)&&m(this,V,setInterval(()=>{(this.options.refetchIntervalInBackground||qe.isFocused())&&p(this,h,ee).call(this)},i(this,D)))},pe=function(){p(this,h,me).call(this),p(this,h,xe).call(this,p(this,h,ge).call(this))},fe=function(){i(this,H)&&(clearTimeout(i(this,H)),m(this,H,void 0))},ve=function(){i(this,V)&&(clearInterval(i(this,V)),m(this,V,void 0))},be=function(){const r=i(this,C).getQueryCache().build(i(this,C),this.options);if(r===i(this,l))return;const a=i(this,l);m(this,l,r),m(this,te,r.state),this.hasListeners()&&(a==null||a.removeObserver(this),r.addObserver(this))},Ae=function(r){Qe.batch(()=>{r.listeners&&this.listeners.forEach(a=>{a(i(this,N))}),i(this,C).getQueryCache().notify({query:i(this,l),type:"observerResultsUpdated"})})},ze);function lt(t,r){return P(r.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&r.retryOnMount===!1)}function Oe(t,r){return lt(t,r)||t.state.data!==void 0&&ye(t,r,r.refetchOnMount)}function ye(t,r,a){if(P(r.enabled,t)!==!1){const o=typeof a=="function"?a(t):a;return o==="always"||o!==!1&&we(t,r)}return!1}function Ee(t,r,a,o){return(t!==r||P(o.enabled,t)===!1)&&(!a.suspense||t.state.status!=="error")&&we(t,a)}function we(t,r){return P(r.enabled,t)!==!1&&t.isStaleByTime(le(r.staleTime,t))}function nt(t,r){return!de(t.getCurrentResult(),r)}var We=g.createContext(!1),ct=()=>g.useContext(We);We.Provider;function ht(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var dt=g.createContext(ht()),ut=()=>g.useContext(dt);function mt(t,r){return typeof t=="function"?t(...r):!!t}function Pe(){}var gt=(t,r)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(r.isReset()||(t.retryOnMount=!1))},xt=t=>{g.useEffect(()=>{t.clearReset()},[t])},pt=({result:t,errorResetBoundary:r,throwOnError:a,query:o})=>t.isError&&!r.isReset()&&!t.isFetching&&o&&mt(a,[t.error,o]),ft=t=>{const r=t.staleTime;t.suspense&&(t.staleTime=typeof r=="function"?(...a)=>Math.max(r(...a),1e3):Math.max(r??1e3,1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},vt=(t,r)=>t.isLoading&&t.isFetching&&!r,bt=(t,r)=>(t==null?void 0:t.suspense)&&r.isPending,Be=(t,r,a)=>r.fetchOptimistic(t).catch(()=>{a.clearReset()});function yt(t,r,a){var c,z,y,F,B;const o=Je(),f=ct(),d=ut(),n=o.defaultQueryOptions(t);(z=(c=o.getDefaultOptions().queries)==null?void 0:c._experimental_beforeQuery)==null||z.call(c,n),n._optimisticResults=f?"isRestoring":"optimistic",ft(n),gt(n,d),xt(d);const k=!o.getQueryCache().get(n.queryHash),[v]=g.useState(()=>new r(o,n)),j=v.getOptimisticResult(n),M=!f&&t.subscribed!==!1;if(g.useSyncExternalStore(g.useCallback(x=>{const T=M?v.subscribe(Qe.batchCalls(x)):Pe;return v.updateResult(),T},[v,M]),()=>v.getCurrentResult(),()=>v.getCurrentResult()),g.useEffect(()=>{v.setOptions(n,{listeners:!1})},[n,v]),bt(n,j))throw Be(n,v,d);if(pt({result:j,errorResetBoundary:d,throwOnError:n.throwOnError,query:o.getQueryCache().get(n.queryHash)}))throw j.error;if((F=(y=o.getDefaultOptions().queries)==null?void 0:y._experimental_afterQuery)==null||F.call(y,n,j),n.experimental_prefetchInRender&&!ue&&vt(j,f)){const x=k?Be(n,v,d):(B=o.getQueryCache().get(n.queryHash))==null?void 0:B.promise;x==null||x.catch(Pe).finally(()=>{v.updateResult()})}return n.notifyOnChangeProps?j:v.trackResult(j)}function Te(t,r){return yt(t,ot)}function zt(){const{isDarkMode:t}=Ge(),[r,a]=g.useState("all"),[o,f]=g.useState("newest"),[d,n]=g.useState(""),[k,v]=g.useState("all"),[j,M]=g.useState(),[c,z]=g.useState([]),[y,F]=g.useState([]),B=Xe(),[x,T]=g.useState(1),[Q,U]=g.useState(!1),Z=g.useRef(null);g.useState(1);const q=9;Array(12).fill(0),g.useEffect(()=>{const s=localStorage.getItem("wishlist");s&&z(JSON.parse(s))},[]),g.useEffect(()=>{if(!Q)return;const s=u=>{Z.current&&!Z.current.contains(u.target)&&U(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[Q]);const je=s=>{let u;c.some(L=>L.id===s.id)?(u=c.filter(L=>L.id!==s.id),B(et(s)),Ie.success("Remove to wishlist success!!",{autoClose:1e3})):(u=[...c,s],B(tt(s)),Ie.success("Add to wishlist success!!",{autoClose:1e3})),z(u),localStorage.setItem("wishlist",JSON.stringify(u))},S=s=>{B(st(s))},{data:re}=Te({queryKey:["products"],queryFn:async()=>{const s=localStorage.getItem("token"),u=await he.get("https://koicaresystemv2.azurewebsites.net/api/products/all",{headers:{Authorization:`Bearer ${s}`}});return console.log(u.data),u.data.data},keepPreviousData:!0,staleTime:6e4}),{data:b}=Te({queryKey:["category"],queryFn:async()=>{const s=localStorage.getItem("token");return(await he.get("https://koicaresystemv2.azurewebsites.net/api/categories/all",{headers:{Authorization:`Bearer ${s}`}})).data.data},keepPreviousData:!0,staleTime:6e4}),A=async()=>{try{const s=localStorage.getItem("token"),u=localStorage.getItem("id");if(!s)throw new Error("No token found");const R=await he.get(`https://koicaresystemv2.azurewebsites.net/api/carts/user/${u}/cartId`,{headers:{Authorization:`Bearer ${s}`}});F(R.data.data),localStorage.setItem("cartId",R.data.data)}catch(s){console.log(s)}};g.useEffect(()=>{A()},[]);const $=s=>{a(s)},I=s=>{f(s)},ke=s=>{v(s)},Ne=s=>{M(s)},ie=(re||[]).filter(s=>{const u=r==="all"||s.category.id===r,R=s.name.toLowerCase().includes(d.toLowerCase());let L=!1;switch(k){case"all":L=!0;break;case"0 - 300000":L=s.price>=0&&s.price<=3e5;break;case"300000 - 1000000":L=s.price>3e5&&s.price<=1e6;break;default:L=!0}let O=!1;switch(j){case"all":O=!0;break;case"1":O=s.rating>=1;break;case"2":O=s.rating>=2;break;case"3":O=s.rating>=3;break;case"4":O=s.rating>=4;break;case"5":O=s.rating===5;break;default:O=!0}return u&&R&&L&&O}).sort((s,u)=>o==="price-low-high"?s.price-u.price:o==="price-high-low"?u.price-s.price:0),Ce=(x-1)*q,ne=Ce+q,Se=ie.slice(Ce,ne),De=Math.ceil(ie.length/q),Fe=s=>{T(s)};return e.jsx("div",{children:e.jsxs("div",{className:"h-screen flex",children:[Q&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>U(!1)}),e.jsx(rt,{}),e.jsxs("div",{className:`relative ${t?"bg-custom-dark text-white":"bg-white text-black"} shadow-xl flex-1 flex-col overflow-y-auto overflow-x-hidden`,children:[e.jsx(it,{}),e.jsxs("div",{className:"py-5 px-[30px] mx-auto max-w-[1750px]",children:[e.jsx(at,{text:"Recommendations",links:"member/recommendations"}),e.jsxs("div",{className:"mt-5 flex lg:border-gray-200 lg:border",children:[e.jsxs("div",{className:"lg:flex flex-col hidden flex-none w-[250px] border-r border-gray-200",children:[e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"Filter by Category"}),e.jsxs("div",{className:"flex flex-col border-b-gray-200 mt-2",children:[e.jsx("div",{onClick:()=>$("all"),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer ${r==="all"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`}`,children:"All"}),(b||[]).map(s=>e.jsx("div",{children:e.jsx("div",{onClick:()=>$(s.id),className:`py-3 mt-2 px-6 custom rounded-lg ${r===s.id?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`}  cursor-pointer`,children:s.name})},s.id))]})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"Sort By"}),e.jsxs("div",{className:"flex flex-col border-b-gray-200 mt-2",children:[e.jsxs("div",{className:`${o==="newest"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("newest"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"})}),e.jsx("div",{children:"Newest"})]}),e.jsxs("div",{className:`${o==="price-high-low"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("price-high-low"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"})}),e.jsx("div",{children:"Price: High-Low"})]}),e.jsxs("div",{className:`${o==="price-low-high"?"bg-custom-layout-light":"hover:bg-custom-layout-light"} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("price-low-high"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"})}),e.jsx("div",{children:"Price: Low-High"})]})]})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"By Pricing"}),e.jsx("div",{className:"flex flex-col border-b-gray-200 mt-2",children:["all","0 - 300000","300000 - 1000000"].map(s=>e.jsxs("div",{onClick:()=>ke(s),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-4 ${k===s?t?"bg-custom-layout-dark":"bg-custom-layout-light":t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:[e.jsx("input",{type:"radio",className:"scale-150",checked:k===s,readOnly:!0}),e.jsx("div",{children:s==="all"?"All":s})]},s))})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"By Star"}),e.jsx("div",{className:"flex flex-col border-b-gray-200 mt-2",children:["1","2","3","4","5"].map(s=>e.jsx("div",{onClick:()=>Ne(s),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-4 ${j===s?t?"bg-custom-layout-dark":"bg-custom-layout-light":t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:e.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:s}).map((u,R)=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"})},R))})},s))})]})]}),e.jsxs("div",{className:"flex-auto lg:px-7 lg:py-7",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7 lg:hidden inline-block cursor-pointer",onClick:()=>U(!0),children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),e.jsx("div",{className:"lg:inline-block hidden font-semibold text-2xl",children:"Products"}),e.jsxs("div",{className:"flex relative justify-center items-center border border-gray-300 lg:px-6 lg:py-3 py-2 px-3  rounded-lg",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"lg:size-6 size-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e.jsx("input",{type:"text",value:d,onChange:s=>n(s.target.value),placeholder:"Search Product...",className:`lg:pl-7 pl-2 font-light ${t?"bg-custom-dark":""}  outline-none lg:text-lg text-sm`})]})]}),Se.length>0?e.jsxs(e.Fragment,{children:[e.jsx(oe.div,{initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.3}}},className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-3 mt-4",children:Se.map((s,u)=>{var R,L;return e.jsxs(oe.div,{variants:{hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{delay:u*.3}}},whileHover:{scale:1.02},className:"border border-gray-200 rounded-lg hover:scale-[102%] duration-300",children:[e.jsx("div",{children:e.jsxs("div",{className:"border-b border-gray-200 lg:max-h-[300px] md:max-h-[300px] max-h-[230px]",children:[e.jsx(Ye,{to:`/member/recommendations/${s.id}`,className:"cursor-pointer",children:e.jsx("img",{src:(R=s==null?void 0:s.images[0])==null?void 0:R.downloadUrl,alt:"",className:"w-full lg:h-[290px] md:h-[295px] h-[230px] rounded-t-lg"})},(L=s==null?void 0:s.images[0])==null?void 0:L.id),e.jsx("button",{"aria-label":"wishlist",onClick:()=>je(s),children:c.some(O=>O.id===s.id)?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`size-11 relative rounded-full -top-[20px] lg:-top-[13px] text-red-500 cursor-pointer left-[50%] p-2 ${t?"bg-custom-layout-dark":"bg-custom-layout-light"}`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`size-11 relative rounded-full -top-[20px] lg:-top-[13px] cursor-pointer left-[50%] p-2 ${t?"bg-custom-layout-dark":"bg-custom-layout-light"}`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})})}),e.jsx("svg",{onClick:()=>{S(s)},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`size-11 relative rounded-full lg:-top-[60px] -top-[70px] lg:-right-[85%] -right-[73%] p-2 cursor-pointer ${t?"bg-custom-layout-dark":"bg-custom-layout-light"}`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})})]})}),e.jsxs("div",{className:"px-7 py-5 lg:text-xl text-lg mt-5 font-medium",children:[e.jsx("div",{className:"line-clamp-1",children:s.name}),e.jsxs("div",{className:"flex justify-between items-center lg:mt-3 mt-1",children:[s.promotions.length>0?e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"line-through opacity-50",children:s.price.toLocaleString("vi-VN",{style:"currency",currency:"VND"})}),e.jsx("div",{className:"",children:(s.price*(100-s.promotions[s.promotions.length-1].discountRate)/100).toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}):e.jsxs("div",{className:"",children:[" ",s.price.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]}),e.jsx("div",{className:"flex",children:[...Array(5)].map((O,ae)=>{const Ue=ae<Math.floor(s.rating),_e=ae<s.rating&&ae>=Math.floor(s.rating);return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:Ue?"gold":_e?"url(#half-star)":"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"lg:size-6 size-5 text-yellow-500",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"half-star",children:[e.jsx("stop",{offset:"50%",stopColor:"gold"}),e.jsx("stop",{offset:"50%",stopColor:"none"})]})}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3.5l2.715 5.451 6.027.488-4.373 3.751 1.331 5.551L12 15.902l-5.7 3.839 1.331-5.551-4.373-3.751 6.027-.488L12 3.5z"})]},ae)})})]})]})]},s.id)})}),e.jsxs("div",{className:"flex justify-center items-center mt-6",children:[e.jsx("button",{disabled:x===1,onClick:()=>T(x-1),className:`px-4 py-2 text-lg border border-gray-300 rounded-md mx-1 ${x===1?"opacity-50 cursor-not-allowed":"hover:bg-gray-100"}`,children:"Prev"}),Array.from({length:De},(s,u)=>u+1).map(s=>e.jsx("button",{onClick:()=>Fe(s),className:`px-3 py-2 mx-1 border border-gray-300 rounded-md ${x===s?"bg-blue-500 text-white":"hover:bg-gray-100"}`,children:s},s)),e.jsx("button",{disabled:ne>=ie.length,onClick:()=>T(x+1),className:`px-4 py-2 border border-gray-300 rounded-md mx-1 ${ne>=ie.length?"opacity-50 cursor-not-allowed":"hover:bg-gray-100"}`,children:"Next"})]})]}):e.jsx(oe.div,{initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.3}}},className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-3 mt-4",children:[...Array(9)].map((s,u)=>e.jsxs(oe.div,{variants:{hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{delay:u*.3}}},className:"border border-gray-200 rounded-lg p-4",children:[e.jsx(Y,{height:230,className:"rounded-t-lg"}),e.jsxs("div",{className:"p-4",children:[e.jsx(Y,{height:20,width:"80%"}),e.jsx(Y,{height:15,width:"60%",className:"mt-2"}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsx(Y,{width:"40%",height:20}),e.jsx(Y,{width:80,height:20})]})]})]},u))})]})]}),e.jsxs("div",{ref:Z,className:`fixed top-0 left-0 h-full md:w-1/3 w-2/3 overflow-y-auto no-scroll-bar bg-white border-r border-gray-200 transform ${Q?"translate-x-0":"-translate-x-full"} transition-transform duration-300 z-50`,children:[e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"Filter by Category"}),e.jsxs("div",{className:"flex flex-col border-b-gray-200 mt-2",children:[e.jsx("div",{onClick:()=>$("all"),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer ${r==="all"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`}`,children:"All"}),(b||[]).map(s=>e.jsx("div",{children:e.jsx("div",{onClick:()=>$(s.id),className:`py-3 mt-2 px-6 custom rounded-lg ${r===s.id?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`}  cursor-pointer`,children:s.name})},s.id))]})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"Sort By"}),e.jsxs("div",{className:"flex flex-col border-b-gray-200 mt-2",children:[e.jsxs("div",{className:`${o==="newest"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("newest"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"})}),e.jsx("div",{children:"Newest"})]}),e.jsxs("div",{className:`${o==="price-high-low"?`${t?"bg-custom-layout-dark":" bg-custom-layout-light"}`:`${t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("price-high-low"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"})}),e.jsx("div",{children:"Price: High-Low"})]}),e.jsxs("div",{className:`${o==="price-low-high"?"bg-custom-layout-light":"hover:bg-custom-layout-light"} py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-2`,onClick:()=>I("price-low-high"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"})}),e.jsx("div",{children:"Price: Low-High"})]})]})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"By Pricing"}),e.jsx("div",{className:"flex flex-col border-b-gray-200 mt-2",children:["all","0 - 50","50 - 100"].map(s=>e.jsxs("div",{onClick:()=>ke(s),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-4 ${k===s?t?"bg-custom-layout-dark":"bg-custom-layout-light":t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:[e.jsx("input",{type:"radio",className:"scale-150",checked:k===s,readOnly:!0}),e.jsx("div",{children:s==="all"?"All":s})]},s))})]}),e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200",children:[e.jsx("div",{className:"font-semibold text-xl",children:"By Star"}),e.jsx("div",{className:"flex flex-col border-b-gray-200 mt-2",children:[1,2,3,4,5].map(s=>e.jsx("div",{onClick:()=>Ne(s),className:`py-3 mt-2 px-6 custom rounded-lg cursor-pointer flex gap-4 ${j===s?t?"bg-custom-layout-dark":"bg-custom-layout-light":t?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:e.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:s}).map((u,R)=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"})},R))})},s))})]})]})]})]})]})})}export{zt as default};
