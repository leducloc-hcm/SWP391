import{F as l,r as T,j as C,G as B}from"./index-CoU4576v.js";import{k as S}from"./Popover-D3I8Bna5.js";import{g as j,a as w,s as W,m as M,f as P,b as R,c as O}from"./createSimplePaletteValueFilter-BkuHQHCT.js";function U(r){return j("MuiTypography",r)}const k=w("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=S(),$=r=>{const{align:a,gutterBottom:t,noWrap:e,paragraph:n,variant:i,classes:s}=r,o={root:["root",i,r.align!=="inherit"&&`align${l(a)}`,t&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return O(o,U,s)},D=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${l(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(M(({theme:r})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,e])=>t!=="inherit"&&e&&typeof e=="object").map(([t,e])=>({props:{variant:t},style:e})),...Object.entries(r.palette).filter(P()).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((a=r.palette)==null?void 0:a.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${l(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z=T.forwardRef(function(a,t){const{color:e,...n}=R({props:a,name:"MuiTypography"}),i=!A[e],s=E({...n,...i&&{color:e}}),{align:o="inherit",className:g,component:h,gutterBottom:x=!1,noWrap:b=!1,paragraph:y=!1,variant:p="body1",variantMapping:c=f,...u}=s,m={...s,align:o,color:e,className:g,component:h,gutterBottom:x,noWrap:b,paragraph:y,variant:p,variantMapping:c},d=h||(y?"p":c[p]||f[p])||"span",v=$(m);return C.jsx(D,{as:d,ref:t,className:B(v.root,g),...u,ownerState:m,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...u.style}})});export{z as T,k as t};
