import{d as L,r,j as e,a6 as o,a7 as c,L as y,a as z}from"./index-CoU4576v.js";/* empty css            */import{l as Z}from"./logo-DG-ZgLhE.js";import{P as R,A as B,F as A,R as P,T as E,a as J}from"./index-BKt2-fzg.js";import{G as X,l as U,m as F,n as H,o as T,p as D}from"./index-Dsj2DyTX.js";import{b as V}from"./index-DYOF6FZU.js";function W(s){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z"},child:[]}]})(s)}const Y=[{id:1,name:"Dashboard",link:"/shop/dashboard"},{id:2,name:"News",link:"/shop/shopNews"},{id:3,name:"Create News",link:"/shop/createNews"},{id:4,name:"Tag",link:"/shop/tag"},{id:5,name:"Create Tag",link:"/shop/createTag"},{id:6,name:"Supplier",link:"/shop/supplier"},{id:7,name:"Create Supplier",link:"/shop/createSupplier"},{id:8,name:"Promotion",link:"/shop/promotion"},{id:9,name:"Create Promotion",link:"/shop/createPromotion"},{id:10,name:"Product",link:"/shop/product"},{id:11,name:"Create Product",link:"/shop/createProduct"},{id:12,name:"Category",link:"/shop/category"},{id:13,name:"Create Category",link:"/shop/createCategory"},{id:14,name:"Manange User",link:"/shop/viewUser"},{id:15,name:"Payment",link:"/shop/payment"},{id:16,name:"Order",link:"/shop/order"},{id:17,name:"Profile",link:"/shop/profileShop"}];function re(){const{isDarkMode:s,toggleDarkMode:k}=L(),[v,a]=r.useState(!1),[g,u]=r.useState(!1),[p,m]=r.useState(!1),f=r.useRef(null),[d,j]=r.useState(""),[$,w]=r.useState([]),[h,b]=r.useState(()=>{const t=localStorage.getItem("isNewsOpen");return t?JSON.parse(t):!1}),[x,l]=r.useState(()=>{const t=localStorage.getItem("isShopOpen");return t?JSON.parse(t):!1}),[i,N]=r.useState(()=>{const t=localStorage.getItem("isReportOpen");return t?JSON.parse(t):!1}),G=async()=>{try{const t=localStorage.getItem("token"),n=localStorage.getItem("id");if(!t)throw new Error("No token found");const Q=await z.get(`https://koicaresystemv2.azurewebsites.net/api/profile/${n}`,{headers:{Authorization:`Bearer ${t}`}});w(Q.data.data)}catch(t){console.error("Error fetching users:",t)}};r.useEffect(()=>{G()},[]),r.useEffect(()=>{localStorage.setItem("isNewsOpen",JSON.stringify(h))},[h]),r.useEffect(()=>{localStorage.setItem("isReportOpen",JSON.stringify(i))},[i]),r.useEffect(()=>{localStorage.setItem("isShopOpen",JSON.stringify(x))},[x]),r.useEffect(()=>{if(!p)return;const t=n=>{f.current&&!f.current.contains(n.target)&&m(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[p]);const K=()=>{u(!g)},q=()=>{a(!v)},S=()=>{localStorage.clear()},M=Y.filter(t=>t.name.toLowerCase().includes(d.toLowerCase())),C=localStorage.getItem("avt"),O=localStorage.getItem("name"),I=localStorage.getItem("role");return e.jsxs("div",{className:`${s?"bg-custom-dark text-white border-b border-gray-700":"bg-white text-black border-b border-gray-200"} sticky top-0 lg:p-3 py-3 lg:justify-end justify-between z-20 flex w-full duration-200 ease-linear`,children:[e.jsx("button",{className:"ml-2 lg:hidden inline-block cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7 ",onClick:()=>m(!0),children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),e.jsx("div",{className:"flex items-center justify-end ml-4",children:e.jsxs("div",{className:"mr-4 flex justify-center items-center gap-2",children:[e.jsxs("button",{onClick:q,className:`${s?"bg-gray-500 bg-opacity-50":"bg-gray-100 bg-opacity-50"} lg:p-[16px] p-[12px] rounded-full`,children:[e.jsx("span",{className:"cn8jz",children:"Search"}),e.jsxs("svg",{className:"cp14x ch0mp cbm9w",width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z"}),e.jsx("path",{d:"m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z"})]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",name:"light-switch",id:"light-switch",className:"light-switch cn8jz",checked:s,onChange:k}),e.jsxs("label",{className:`flex items-center justify-center cukve cvdqj cw5z1 c76um c5flv cue4z cmwfi rounded-full cursor-pointer py-[14px] px-[14px] ${s?"bg-gray-500 bg-opacity-50":"bg-gray-100 bg-opacity-50"}   `,htmlFor:"light-switch",children:[s?e.jsxs("svg",{className:"cp14x ch0mp cbm9w c2e1r cursor-pointer",width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M11.875 4.375a.625.625 0 1 0 1.25 0c.001-.69.56-1.249 1.25-1.25a.625.625 0 1 0 0-1.25 1.252 1.252 0 0 1-1.25-1.25.625.625 0 1 0-1.25 0 1.252 1.252 0 0 1-1.25 1.25.625.625 0 1 0 0 1.25c.69.001 1.249.56 1.25 1.25Z"}),e.jsx("path",{d:"M7.019 1.985a1.55 1.55 0 0 0-.483-1.36 1.44 1.44 0 0 0-1.53-.277C2.056 1.553 0 4.5 0 7.9 0 12.352 3.648 16 8.1 16c3.407 0 6.246-2.058 7.51-4.963a1.446 1.446 0 0 0-.25-1.55 1.554 1.554 0 0 0-1.372-.502c-4.01.552-7.539-2.987-6.97-7ZM2 7.9C2 5.64 3.193 3.664 4.961 2.6 4.82 7.245 8.72 11.158 13.36 11.04 12.265 12.822 10.341 14 8.1 14 4.752 14 2 11.248 2 7.9Z"})]}):e.jsxs("svg",{className:"cp14x ch0mp cbm9w c1bco",width:20,height:20,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8 0a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z"}),e.jsx("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}),e.jsx("path",{d:"M13.657 3.757a1 1 0 0 0-1.414-1.414l-.354.354a1 1 0 0 0 1.414 1.414l.354-.354ZM13.5 8a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1ZM13.303 11.889a1 1 0 0 0-1.414 1.414l.354.354a1 1 0 0 0 1.414-1.414l-.354-.354ZM8 13.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1ZM4.111 13.303a1 1 0 1 0-1.414-1.414l-.354.354a1 1 0 1 0 1.414 1.414l.354-.354ZM0 8a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM3.757 2.343a1 1 0 1 0-1.414 1.414l.354.354A1 1 0 1 0 4.11 2.697l-.354-.354Z"})]}),e.jsx("span",{className:"cn8jz",children:"Switch to light / dark version"})]})]}),e.jsxs("div",{className:"my-account",children:[e.jsxs("button",{onClick:K,className:"lg:flex lg:items-center lg:p-2 lg:rounded-md lg:space-x-2 hidden",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-sm font-medium",children:O}),e.jsx("p",{className:"text-xs text-gray-500",children:I})]}),e.jsx("div",{className:"ml-auto flex items-center space-x-1",children:e.jsx("img",{src:C,className:"w-12 h-12 rounded-full object-cover"})})]}),g&&e.jsxs("div",{className:`absolute right-10 z-10 w-40 border border-gray-300 shadow-lg ${s?"bg-custom-dark text-white":"bg-white text-black"}`,children:[e.jsxs(o,{to:c.profileShop,end:!0,className:`px-4 py-2 flex items-center ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-8 mr-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})}),e.jsx("span",{children:"My Profile"})]}),e.jsxs(y,{onClick:S,to:c.login,className:`px-4 py-2 flex items-center ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-8 mr-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"})}),e.jsx("span",{children:"Log Out"})]})]})]})]})}),e.jsxs("div",{ref:f,className:`fixed top-0 left-0 h-full md:w-1/3 w-7/12 lg:w-0 transform  ${p?`translate-x-0 ${s?"bg-custom-dark":"bg-white"}`:"-translate-x-full"} transition-transform duration-200 ease-linear z-50 overflow-y-auto no-scroll-bar`,children:[e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:"mt-4 rounded-md",children:e.jsx("img",{className:"w-14 animate-slow-spin",src:Z,alt:"Logo"})}),e.jsx("a",{href:"#",className:"mt-3 text-xl font-bold",children:"Koi Care System"})]}),e.jsx("div",{className:"flex-grow no-scroll-bar overflow-y-auto",children:e.jsx("div",{className:"flex flex-col justify-center items-center lg:mt-6 mt-3 duration-200",children:e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.dashboardShop,end:!0,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-7 mr-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"})}),e.jsx("span",{className:"font-semibold",children:"Dashboard"})]})}),e.jsx(o,{to:c.viewUser,end:!0,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-7 mr-3",children:e.jsx("path",{d:"M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"})}),e.jsx("span",{className:"font-semibold",children:"Manage User"})]})}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center
                 ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>b(!h),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(U,{className:"w-full h-full"})}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage News"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),h&&e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.shopNews,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(R,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"News"})]})}),e.jsx(o,{to:c.tag,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(F,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Tag"})]})})]})]}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center  ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>l(!x),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(B,{className:"w-full h-full"})}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage Shop"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),x&&e.jsxs("div",{children:[e.jsx("div",{className:"",children:e.jsx(o,{to:c.supplier,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(A,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Supplier"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.promotion,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center `,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(P,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Promotion"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.category,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center `,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(W,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Category"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.productImage,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(H,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Images"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.product,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(T,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Product"})]})})})]})]}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center  ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>N(!i),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(E,{className:"w-full h-full"})}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage Report"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),i&&e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.orderShop,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full p-4 mt-2 cursor-pointer rounded-lg flex justify-between items-center `,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(J,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Manage Order"})]})}),e.jsx(o,{to:c.paymentShop,className:({isActive:t})=>`${t?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(D,{className:"w-full h-full"})}),e.jsx("span",{className:"font-semibold",children:"Manage Payment"})]})})]})]})]})})}),e.jsx("div",{className:`mt-auto sticky bottom-0 z-50 w-full p-2 flex justify-between items-center 
            ${s?"bg-custom-dark":"bg-white"} neon-border`,children:e.jsxs("div",{className:`flex p-4 rounded-lg items-center justify-between w-full ${s?"bg-custom-dark ":"bg-white"}`,children:[e.jsxs("div",{className:"card-content flex items-center ",children:[e.jsx("img",{src:C,alt:"User Avatar",className:"w-12 h-12 rounded-full object-cover border-2 border-gray-300"}),e.jsxs("div",{className:"ml-3",children:[e.jsx("p",{className:`font-semibold text-lg ${s?"text-white ":"text-black"}`,children:O}),e.jsx("p",{className:"text-sm text-gray-500",children:I})]})]}),e.jsx(y,{onClick:S,to:"/login",children:e.jsx(V,{className:"text-2xl text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer",title:"Logout"})})]})})]}),v&&e.jsxs("div",{className:`absolute top-16 left-[8vh] md:top-[80px] md:left-[120vh] z-50 mt-2 ${s?" text-gray-200":" text-gray-800"}`,children:[e.jsx("input",{type:"text",placeholder:"Search Here",value:d,onChange:t=>j(t.target.value),className:`p-2 rounded-lg border ${s?" bg-gray-800 text-gray-200":" bg-white text-gray-800"}`}),M.length>0&&e.jsx("ul",{className:`absolute z-50 border border-gray-300 rounded mt-1 w-full max-h-40 overflow-x-auto no-scroll-bar ${s?"bg-gray-800 text-gray-200":"bg-white text-gray-800"}`,children:M.map(t=>e.jsx("li",{children:e.jsx(o,{to:t.link,className:`block px-4 py-2 rounded ${s?"text-gray-200 hover:bg-gray-700":"text-gray-800 hover:bg-gray-200"}`,children:t.name})},t.id))})]})]})}function oe(){const{isDarkMode:s}=L(),[k,v]=r.useState([]),[a,g]=r.useState(()=>{const l=localStorage.getItem("isSidebarClosed");return l?JSON.parse(l):!1}),[u,p]=r.useState(()=>{const l=localStorage.getItem("isNewsOpen");return l?JSON.parse(l):!1}),[m,f]=r.useState(()=>{const l=localStorage.getItem("isShopOpen");return l?JSON.parse(l):!1}),[d,j]=r.useState(()=>{const l=localStorage.getItem("isReportOpen");return l?JSON.parse(l):!1});r.useEffect(()=>{localStorage.setItem("isSidebarClosed",JSON.stringify(a))},[a]);const $=async()=>{try{const l=localStorage.getItem("token"),i=localStorage.getItem("id");if(!l)throw new Error("No token found");const N=await z.get(`https://koicaresystemv2.azurewebsites.net/api/profile/${i}`,{headers:{Authorization:`Bearer ${l}`}});v(N.data.data)}catch(l){console.error("Error fetching users:",l)}};r.useEffect(()=>{$()},[]);const w=()=>{localStorage.clear()};r.useEffect(()=>{localStorage.setItem("isNewsOpen",JSON.stringify(u))},[u]),r.useEffect(()=>{localStorage.setItem("isReportOpen",JSON.stringify(d))},[d]),r.useEffect(()=>{localStorage.setItem("isShopOpen",JSON.stringify(m))},[m]);const h=localStorage.getItem("avt"),b=localStorage.getItem("name"),x=localStorage.getItem("role");return e.jsxs("div",{children:[e.jsx("div",{className:"relative ",children:a?e.jsx("button",{className:`absolute duration-200 ease-linear lg:inline-block hidden lg:left-20 top-5 p-1 z-30 ${s?"bg-custom-dark text-white":"bg-white text-black"} `,onClick:()=>g(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"})})}):e.jsx("button",{className:`lg:absolute lg:left-[260px] lg:inline-block hidden lg:top-6 lg:p-1 lg:z-30 ${s?"bg-custom-dark text-white":"bg-white text-black"} `,onClick:()=>g(!0),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})}),e.jsxs("div",{className:`absolute top-0 left-0 z-50 flex h-screen flex-col no-scroll-bar overflow-y-auto border-r ${s?"bg-custom-dark text-white border-gray-700":"bg-white text-black border-gray-200"} shadow-sm duration-200 ease-linear lg:static lg:translate-x-0 ${a?"lg:w-[80px] w-0":"lg:w-[240px] w-[0px]"}`,children:[e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:"mt-4 rounded-md",children:e.jsx("img",{className:"w-14 animate-slow-spin",src:Z,alt:"Logo"})}),!a&&e.jsx("a",{href:"#",className:"mt-3 text-xl font-bold",children:"Koi Care System"})]}),e.jsx("div",{className:"flex-grow no-scroll-bar overflow-y-auto",children:e.jsx("div",{className:"flex flex-col justify-center items-center mt-6 duration-200",children:e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.dashboardShop,end:!0,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-7 mr-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Dashboard"})]})}),e.jsx(o,{to:c.viewUser,end:!0,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-7 mr-3",children:e.jsx("path",{d:"M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Manage User"})]})}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""} ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>p(!u),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(U,{className:"w-full h-full"})}),!a&&e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage News"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),u&&e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.shopNews,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(R,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"News"})]})}),e.jsx(o,{to:c.tag,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(F,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Tag"})]})})]})]}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""} ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>f(!m),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(B,{className:"w-full h-full"})}),!a&&e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage Shop"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),m&&e.jsxs("div",{children:[e.jsx("div",{className:"",children:e.jsx(o,{to:c.supplier,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(A,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Supplier"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.promotion,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(P,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Promotion"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.category,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(W,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Category"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.productImage,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(H,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Images"})]})})}),e.jsx("div",{className:"",children:e.jsx(o,{to:c.product,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 mr-3",children:e.jsx(T,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Product"})]})})})]})]}),e.jsxs("div",{children:[e.jsx("button",{className:`min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""} ${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`,onClick:()=>j(!d),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(E,{className:"w-full h-full"})}),!a&&e.jsxs("span",{className:"flex items-center",children:[e.jsx("p",{className:"font-semibold",children:"Manage Report"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 ml-2 mt-1",children:e.jsx("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"})})]})]})}),d&&e.jsxs("div",{className:"",children:[e.jsx(o,{to:c.orderShop,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full p-4 mt-2 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(J,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Manage Order"})]})}),e.jsx(o,{to:c.paymentShop,className:({isActive:l})=>`${l?`${s?"bg-custom-layout-dark":"bg-custom-layout-light"}`:`${s?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"}`} min-w-full mt-2 p-4 cursor-pointer rounded-lg flex justify-between items-center ${a?"flex-col":""}`,children:e.jsxs("div",{className:"pl-2 flex items-center",children:[e.jsx("div",{className:"w-7 h-7 mr-3",children:e.jsx(D,{className:"w-full h-full"})}),!a&&e.jsx("span",{className:"font-semibold",children:"Manage Payment"})]})})]})]})]})})}),!a&&e.jsx("div",{className:`mt-auto sticky bottom-0 z-50 w-full p-2 flex justify-between items-center 
            ${s?"bg-custom-dark":"bg-white"} neon-border`,children:e.jsxs("div",{className:`flex p-4 rounded-lg items-center justify-between w-full ${s?"bg-custom-dark ":"bg-white"}`,children:[e.jsxs("div",{className:"card-content flex items-center ",children:[e.jsx("img",{src:h,alt:"User Avatar",className:"w-12 h-12 rounded-full object-cover border-2 border-gray-300"}),e.jsxs("div",{className:"ml-3",children:[e.jsx("p",{className:`font-semibold text-lg ${s?"text-white ":"text-black"}`,children:b}),e.jsx("p",{className:"text-sm text-gray-500",children:x})]})]}),e.jsx(y,{onClick:w,to:"/login",children:e.jsx(V,{className:`text-2xl ${s?"text-white":"text-gray-500"}  hover:text-red-500 transition-colors duration-200 cursor-pointer`,title:"Logout"})})]})})]})]})}export{re as H,oe as L};
