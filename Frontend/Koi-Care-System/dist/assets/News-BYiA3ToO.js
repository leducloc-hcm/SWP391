import{d as A,r as l,u as z,j as e,L as T,a as n,B as v}from"./index-CoU4576v.js";import{L as $,H as C}from"./LeftSideBar-C3I9T6Cy.js";import{T as E,m as w}from"./TopLayout-BDnEurvB.js";/* empty css            */import"./index-DYOF6FZU.js";import"./index-Dsj2DyTX.js";import"./index-BpOwVgMe.js";import"./logo-DG-ZgLhE.js";import"./index-C6U7UJyo.js";import"./Popover-D3I8Bna5.js";import"./createSimplePaletteValueFilter-BkuHQHCT.js";import"./Transition-R9nnOErc.js";import"./Typography-7IhSei9U.js";function K(){const{isDarkMode:a}=A(),[j]=l.useState([]),[d,m]=l.useState([]),[g,b]=l.useState(!1),[x,k]=l.useState(""),[I,y]=l.useState([]),u=z(),N=()=>{b(!g)},L=async()=>{try{const t=localStorage.getItem("token");if(!t)throw new Error("No token found");const r=await n.get("https://koicaresystemv2.azurewebsites.net/api/tag",{headers:{Authorization:`Bearer ${t}`}});j(r.data.data)}catch(t){console.log("Error fetching tags:",t)}},B=async()=>{var t,r;try{const s=localStorage.getItem("token");if(!s)throw new Error("No token found");const o=await n.get("https://koicaresystemv2.azurewebsites.net/api/blog",{headers:{Authorization:`Bearer ${s}`}});m(o.data.data),o.data.data.forEach(i=>{const c=i.user.id;h(c)})}catch(s){n.isAxiosError(s)?((t=s.response)==null?void 0:t.status)===401?(console.error("Unauthorized access - Token expired or invalid. Logging out..."),localStorage.removeItem("token"),localStorage.removeItem("id"),v.error("Token expired, navigate to login"),u("/login")):console.error("Error fetching blogs:",(r=s.response)==null?void 0:r.status,s.message):console.error("An unexpected error occurred:",s)}},h=async t=>{var r,s;try{const o=localStorage.getItem("token");if(!o)throw new Error("No token found");const i=await n.get(`https://koicaresystemv2.azurewebsites.net/api/profile/${t}`,{headers:{Authorization:`Bearer ${o}`}});y(c=>({...c,[t]:i.data.data.avatar})),console.log(`Avatar for user ${t}:`,i.data.data.avatar)}catch(o){n.isAxiosError(o)?((r=o.response)==null?void 0:r.status)===401?(console.error("Unauthorized access - Token expired or invalid. Logging out..."),localStorage.removeItem("token"),localStorage.removeItem("id"),v.error("Token expired, navigate to login"),u("/login")):console.error("Error fetching profile:",(s=o.response)==null?void 0:s.status,o.message):console.error("An unexpected error occurred:",o)}};l.useEffect(()=>{h()},[]);const p=d.filter(t=>t.blogTitle.toLowerCase().includes(x.toLowerCase())),S=(t,r)=>{let s=[...d];console.log(s),s.sort((o,i)=>t==="asc"?o.blogTitle.localeCompare(i.blogTitle):i.blogTitle.localeCompare(o.blogTitle)),m(s)},f=t=>{S(t)};return l.useEffect(()=>{L()},[]),l.useEffect(()=>{B()},[]),e.jsx("div",{children:e.jsxs("div",{className:"h-screen flex",children:[e.jsx($,{}),e.jsxs("div",{className:`relative ${a?"bg-custom-dark text-white":"bg-white text-black"} shadow-xl flex-1 flex-col overflow-y-auto overflow-x-hidden duration-200 ease-linear`,children:[e.jsx(C,{}),e.jsxs("div",{className:"py-5 px-[30px] mx-auto max-w-[1750px]",children:[e.jsx(E,{text:"News"}),e.jsxs("div",{className:"w-full flex justify-between flex-col lg:flex-row md:flex-row relative lg:items-center",children:[e.jsxs("div",{className:"flex relative justify-center items-center border border-gray-300 lg:px-6 px-5 lg:py-3 py-2 rounded-xl",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e.jsx("input",{type:"text",value:x,onChange:t=>k(t.target.value),placeholder:"Search Blog...",className:`${a?"bg-custom-dark":""} pl-7 font-light outline-none text-lg`})]}),e.jsxs("div",{className:"cursor-pointer mt-3",onClick:N,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`${a?" text-custom-layout-light":"text-custom-layout-dark"} lg:size-8 size-6 mb-4`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"})}),e.jsx("div",{className:`absolute right-0 transition-all duration-500 -mt-3 border z-10 ease-in-out overflow-hidden ${g?"max-h-50 opacity-100":"max-h-0 opacity-0"}`,children:e.jsxs("div",{className:`${a?"bg-custom-dark text-white":"bg-white text-black"} flex flex-col space-y-2 shadow-lg rounded-lg p-4`,children:[e.jsx("button",{className:`${a?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"} btn py-2 px-4 rounded `,onClick:()=>f("desc"),children:"Sorted by Name (A-Z)"}),e.jsx("button",{className:`${a?"hover:bg-custom-layout-dark":"hover:bg-custom-layout-light"} btn py-2 px-4 rounded `,onClick:()=>f("asc"),children:"Sorted by Name (Z-A)"})]})})]})]}),p.length>0?e.jsx(w.div,{initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.3}}},className:"py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-2",children:p.map((t,r)=>{var s;return e.jsxs(w.div,{variants:{hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{delay:r*.3}}},whileHover:{scale:1.02},className:`${a?"bg-custom-dark text-white":"bg-white text-black"} mb-4 border rounded-lg shadow-sm duration-200`,children:[e.jsx("div",{className:"hover:scale-[102%]",children:e.jsxs(T,{to:`/member/news/${t.blogId}`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:t.blogImage,alt:t.blogTitle,className:"w-full lg:h-72 h-48 object-cover relative rounded-t-lg",style:{objectFit:"cover",filter:"brightness(1.1) contrast(1.1)"}}),e.jsx("img",{src:t.avatar,className:"w-12 h-12 absolute -bottom-[20px] left-8 rounded-full border border-gray-300",alt:"Author's Avatar"})]}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"flex gap-2 lg:flex-row flex-col justify-between lg:items-center w-full mt-8 px-6",children:[e.jsx("div",{className:"flex gap-3",children:(s=t.tags)==null?void 0:s.map(o=>e.jsx("span",{className:`lg:text-lg text-sm flex justify-start px-2 py-1 rounded-xl ${a?"bg-custom-layout-dark":"bg-custom-layout-light"} `,children:o.tagName},o.tagId))}),e.jsx("p",{className:"font-semibold text-sm",children:t.blogDate})]})}),e.jsx("div",{className:"mt-4 px-5 py-2",children:e.jsx("h2",{className:"lg:text-xl text-lg line-clamp-2",children:t.blogTitle})})]})}),e.jsxs("div",{className:"p-3 flex w-full justify-between",children:[e.jsx("a",{className:"cursor-pointer flex items-center justify-center p-2 bg-slate-100 flex-none text-black w-10 h-10 rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"})})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("a",{className:"cursor-pointer flex items-center justify-center p-2 bg-slate-200 text-black flex-none text-blue w-10 h-10 rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"})})}),e.jsx("a",{className:"cursor-pointer flex items-center justify-center p-2 bg-blue-500 flex-none text-white w-10 h-10 rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})})})]})]})]},r)})}):e.jsx("div",{className:"text-center text-gray-500 text-lg mt-10",children:"No Blog found"})]})]})]})})}export{K as default};
