import{d as x,r as s,u as g,j as e,a as n,L as p,B as f}from"./index-CoU4576v.js";import{L as w,H as v}from"./LeftSideBar-CgWCGgBa.js";import{T as y}from"./TopLayoutShop-Co4L0DWg.js";import{S as b}from"./sweetalert2.esm.all-D3pEHXw3.js";import{P as j}from"./Popover-D3I8Bna5.js";import{D as C}from"./DataGrid-CPi4DyFh.js";/* empty css            */import"./logo-DG-ZgLhE.js";import"./index-BKt2-fzg.js";import"./index-Dsj2DyTX.js";import"./index-DYOF6FZU.js";import"./createSimplePaletteValueFilter-BkuHQHCT.js";import"./Transition-R9nnOErc.js";import"./index-C6U7UJyo.js";import"./toPropertyKey-BWR5Sd7u.js";import"./TextField-D5kQ5JWC.js";import"./useFormControl-2iTihPub.js";import"./SwitchBase-0sE7sFkB.js";import"./Typography-7IhSei9U.js";import"./InputAdornment-DheDHy1K.js";function O(){const{isDarkMode:o}=x(),[c,d]=s.useState([]),[N,i]=s.useState(!0),m=g(),l=async()=>{try{const t=localStorage.getItem("token");if(!t)throw new Error("No token found");const a=await n.get("https://koicaresystemv2.azurewebsites.net/api/categories/all",{headers:{Authorization:`Bearer ${t}`}});d(a.data.data)}catch(t){console.log("Error fetching category:",t)}};s.useEffect(()=>{l()},[]);const u=async t=>{const{isConfirmed:a}=await b.fire({title:"Are you sure?",text:"You won’t be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});if(a){i(!0);try{const r=localStorage.getItem("token");if(!r)throw new Error("No token found");await n.delete(`https://koicaresystemv2.azurewebsites.net/api/categories/category/${t}/delete`,{headers:{Authorization:`Bearer ${r}`}}),f.success("Category deleted successfully"),l()}catch(r){console.error("Error deleting Supplier:",r)}finally{i(!1)}}},h=[{field:"name",headerName:"Name",flex:1},{field:"action",headerName:"Action",headerClassName:"font-bold",renderCell:t=>e.jsxs("div",{className:"flex h-full justify-center items-center",children:[e.jsx(p,{to:`/shop/category/${t.row.id}`,className:"p-1 hover:bg-green-500 text-green-500 hover:text-white rounded-full",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:[e.jsx("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"}),e.jsx("path",{d:"M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"})]})}),e.jsx("button",{className:"p-1 hover:bg-red-500 text-red-600 hover:text-white rounded-full",onClick:()=>u(t.row.id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:e.jsx("path",{fillRule:"evenodd",d:`M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005\r
                  13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0\r
                  1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 \r
                  52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0\r
                  1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428\r
                  1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75\r
                  0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z`,clipRule:"evenodd"})})})]})}];return e.jsx("div",{children:e.jsxs("div",{className:"h-screen flex",children:[e.jsx(w,{}),e.jsxs("div",{className:`relative ${o?"bg-custom-light text-white":"bg-white text-black"} overflow-y-auto flex-1 flex-col overflow-x-hidden duration-200 ease-linear`,children:[e.jsx(v,{}),e.jsxs("div",{className:"py-5 px-[30px] mx-auto max-w-[1750px]",children:[e.jsx(y,{text:"Category",links:"shop/category"}),e.jsx("div",{className:"w-full flex justify-between items-center relative mb-4",children:e.jsx("div",{className:"cursor-pointer",children:e.jsx("button",{className:"py-2 px-3 bg-custom-left-bar text-white hover:bg-blue-600 rounded-md",onClick:()=>m("/shop/createCategory"),children:"New Category"})})}),e.jsx(j,{className:"bg-black",sx:{height:420},children:e.jsx(C,{rows:c,columns:h,pageSize:5,pageSizeOptions:[5,10,20,50,100],rowHeight:60,checkboxSelection:!0,disableExtendRowFullWidth:!0,sx:{"& .MuiDataGrid-columnHeaders":{backgroundColor:o?"#333":"#f5f5f5"},"& .MuiDataGrid-row:hover":{backgroundColor:o?"rgb(36 48 63 / var(--tw-bg-opacity))":"#e0e0e0"}}})})]})]})]})})}export{O as default};
