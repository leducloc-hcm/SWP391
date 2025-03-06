import{d as v,r,u as y,j as e,a as b,B as S}from"./index-CoU4576v.js";import{L as C,H as T}from"./LeftSideBar-CgWCGgBa.js";import{T as B}from"./TopLayoutShop-Co4L0DWg.js";import{a as E}from"./index.esm-Cod_m23j.js";import{S as I}from"./react-select.esm-DYgUnYX9.js";import{i as $}from"./react-select-animated.esm-BCkWciO_.js";import{R as D}from"./quill.snow-BLxkI2si.js";/* empty css            */import"./logo-DG-ZgLhE.js";import"./index-BKt2-fzg.js";import"./index-Dsj2DyTX.js";import"./index-DYOF6FZU.js";import"./Transition-R9nnOErc.js";import"./toPropertyKey-BWR5Sd7u.js";import"./isEqual-D335OppD.js";const q=$();function _(){const{isDarkMode:o}=v(),[i,c]=r.useState(!1),[L,m]=r.useState(!0),h=y(),[g,x]=r.useState([]),[n,p]=r.useState([]),[u,F]=r.useState(""),{register:d,handleSubmit:f,formState:{errors:s},reset:z}=E(),w=async()=>{try{const t=localStorage.getItem("token");if(!t)throw new Error("No token found");const a=await b.get("https://koicaresystemv2.azurewebsites.net/api/tag",{headers:{Authorization:`Bearer ${t}`}});x(a.data.data.map(l=>({value:l.tagId,label:l.tagName}))),console.log(g)}catch(t){console.log("Error fetching tags:",t)}};r.useEffect(()=>{w()},[]);const N=async t=>{console.log("onSubmit:",t),m(!0),c(!0);try{const a=localStorage.getItem("token");if(!a)throw new Error("No token found");const l=new FormData;l.append("blogTitle",t.blogTitle),l.append("blogContent",u),l.append("blogImage",t.blogImage),n.forEach(j=>{l.append("tagIds",j.value)}),l.append("file",t.file[0]),console.log(t);const A=await b.post("https://koicaresystemv2.azurewebsites.net/api/blog/create",l,{headers:{Authorization:`Bearer ${a}`}});S.success("Blog created successfully!"),h("/shop/shopNews")}catch(a){console.log(a)}finally{c(!1),m(!1)}},k=t=>{p(t)};return e.jsxs("div",{className:"h-screen flex",children:[e.jsx(C,{}),e.jsxs("div",{className:`relative ${o?"bg-custom-light text-white":"bg-white text-black"} overflow-y-auto flex-1 flex-col  overflow-x-hidden duration-200 ease-linear`,children:[e.jsx(T,{}),e.jsxs("div",{className:"py-5 pb-0 px-[30px] mx-auto",children:[e.jsx(B,{text:"News",textName:"Create News",links:"shop/shopNews"}),e.jsx("div",{className:"p-6 rounded-md border",children:e.jsxs("form",{onSubmit:f(N),noValidate:!0,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"blogTitle",className:"block text-sm font-medium mb-2",children:"Blog Title"}),e.jsx("input",{type:"text",id:"blogTitle",className:`w-full p-2 border rounded-md ${o?"bg-custom-dark text-white":"bg-white text-black"} ${s.blogTitle?"border-red-500":"border-gray-300"}`,...d("blogTitle",{required:"Blog Title is required"})}),s.blogTitle&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.blogTitle.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"tagId",className:"block text-sm font-medium mb-2",children:"Select Tags"}),e.jsx(I,{isMulti:!0,options:g,value:n,onChange:k,closeMenuOnSelect:!1,components:q,styles:{control:(t,a)=>({...t,backgroundColor:o?"#1F2937":"#FFFFFF",color:o?"#FFFFFF":"#000000",borderColor:s.tags?"#EF4444":"#D1D5DB","&:hover":{borderColor:s.tags?"#EF4444":"#9CA3AF"}}),menu:t=>({...t,backgroundColor:o?"#1F2937":"#FFFFFF"}),option:(t,a)=>({...t,backgroundColor:a.isFocused?o?"#374151":"#E5E7EB":o?"#1F2937":"#FFFFFF",color:o?"#FFFFFF":"#000000"}),multiValue:t=>({...t,backgroundColor:o?"#4B5563":"#E5E7EB",color:o?"#FFFFFF":"#000000"}),multiValueLabel:t=>({...t,color:o?"#FFFFFF":"#000000"}),multiValueRemove:t=>({...t,color:o?"#FFFFFF":"#000000",":hover":{backgroundColor:o?"#374151":"#D1D5DB",color:o?"#F87171":"#EF4444"}})}}),n.length===0&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:"At least one tag is required"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"blogContent",className:"block text-sm font-medium mb-2",children:"Blog Content"}),e.jsx(D,{theme:"snow",value:u,onChange:F,className:`mb-20 ${o?"bg-custom-dark text-white":"bg-white text-black"}`,modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]},{size:[]}],[{list:"ordered"}],["bold","italic","underline"],[{align:[]}],["link"]]},style:{height:"200px"}})]}),e.jsx("div",{className:"blog-image-hidden",children:e.jsx("input",{type:"hidden",id:"blogImage",className:`w-full p-2 border rounded-md ${o?"bg-custom-dark text-white":"bg-white text-black"} ${s.blogImage?"border-red-500":"border-gray-300"}`,...d("blogImage",{required:!1})})}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"file",className:"block text-sm font-medium mb-2",children:"Upload Blog Image File"}),e.jsx("input",{type:"file",id:"file",accept:"image/*",className:`w-full p-2 border rounded-md ${o?"bg-custom-dark text-white":"bg-white text-black"} ${s.file?"border-red-500":"border-gray-300"}`,...d("file",{required:"File is required"})}),s.file&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.file.message})]}),e.jsx("button",{type:"submit",className:`px-4 py-2 bg-blue-600 text-white rounded-md ${i?"opacity-50 cursor-not-allowed":"hover:bg-blue-700"}`,disabled:i,children:i?"Submitting...":"Create Blog"})]})})]})]})]})}export{_ as default};
