import{d as I,r as a,j as e,a as b,B as f}from"./index-CoU4576v.js";import{L as F,H as A}from"./LeftSideBar-C3I9T6Cy.js";import{F as z,r as G,s as M,t as R,u as U,v as B}from"./index-Dsj2DyTX.js";import{G as $,B as q}from"./index-xtsH09Bq.js";import{b as H}from"./index-Bt7aYwxk.js";/* empty css            */import"./index-DYOF6FZU.js";import"./index-BpOwVgMe.js";import"./logo-DG-ZgLhE.js";import"./index-C6U7UJyo.js";import"./Popover-D3I8Bna5.js";import"./createSimplePaletteValueFilter-BkuHQHCT.js";import"./Transition-R9nnOErc.js";import"./Typography-7IhSei9U.js";function le(){const{isDarkMode:x}=I(),[u,y]=a.useState([]),[g,v]=a.useState({}),[j,w]=a.useState(null),[i,S]=a.useState(5),[l,m]=a.useState(1),h=Math.ceil(u.length/i),o=u.slice((l-1)*i,l*i),[c,D]=a.useState(""),[V,E]=a.useState([]),[C,N]=a.useState(!1),P=async s=>{try{const t=localStorage.getItem("token"),d=await b.get("https://koicaresystemv2.azurewebsites.net/api/payment/vn-pay/order",{params:{orderId:s},headers:{Authorization:`Bearer ${t}`}});w(d.data.paymentUrl)}catch(t){console.error(t),f.error("Failed to create payment")}},k=async()=>{N(!0);try{const s=localStorage.getItem("token"),t=localStorage.getItem("id");let r=(await b.get(`https://koicaresystemv2.azurewebsites.net/api/orders/user/${t}/order`,{headers:{Authorization:`Bearer ${s}`}})).data.data;c?r=r.filter(n=>n.status===c).sort((n,p)=>p.id-n.id):r=r.sort((n,p)=>p.id-n.id),y(r),E(r)}catch(s){console.error(s),f.error("Failed to get orders")}finally{N(!1)}},L=s=>{D(s.target.value)},O=s=>{v(t=>({...t,[s]:!t[s]}))};return a.useEffect(()=>{k()},[c]),e.jsxs("div",{className:"h-screen flex",children:[e.jsx(F,{}),e.jsxs("div",{className:`relative ${x?"bg-custom-dark text-white":"bg-white text-black"} shadow-xl flex-1 flex-col overflow-y-auto overflow-x-hidden duration-200 ease-linear`,children:[e.jsx(A,{}),e.jsxs("div",{className:"p-6 rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6 text-center",children:"My Orders Summary"}),e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsxs("select",{value:i,onChange:s=>{S(Number(s.target.value)),m(1)},className:`p-2 border rounded ${x?"bg-gray-700 text-white border-gray-600":"bg-white text-black border-gray-300"}`,children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:50,children:"50"})]}),e.jsxs("select",{onChange:L,value:c,className:`p-2 border rounded ${x?"bg-gray-700 text-white border-gray-600":"bg-white text-black border-gray-300"}`,children:[e.jsx("option",{value:"",children:"Sort by Status"}),e.jsx("option",{value:"PENDING",children:"PENDING"}),e.jsx("option",{value:"PROCESSING",children:"PROCESSING"}),e.jsx("option",{value:"CANCELLED",children:"CANCELLED"}),e.jsx("option",{value:"DELIVERED",children:"DELIVERED"})]})]}),C&&e.jsx("div",{className:"fixed inset-0 px-4 py-2 flex items-center justify-center z-50",children:e.jsx(z,{className:"animate-spin text-green-500 text-6xl"})}),(o==null?void 0:o.length)>0?e.jsx("div",{className:"space-y-6",children:o.map(s=>e.jsxs("div",{className:"border rounded-lg p-6 shadow-lg  transition-shadow",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-4 flex justify-between items-center",children:["Order ID: ",s.id,e.jsx("button",{onClick:()=>O(s.id),className:" hover:text-gray-700",children:g[s.id]?e.jsx(G,{}):e.jsx(M,{})})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsx("table",{className:"min-w-full border border-gray-200 shadow-md rounded-lg",children:e.jsx("tbody",{children:s.items.map((t,d)=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"py-3 px-6",children:e.jsx("img",{src:t.imageUrl,alt:t.productName,className:"w-20 h-20 object-cover rounded-lg"})}),e.jsx("td",{className:"py-3 px-6",children:e.jsx("p",{className:"font-medium text-lg",children:t.productName})}),e.jsx("td",{className:"py-3 px-6",children:e.jsx("p",{className:"text-lg ",children:t.category})}),e.jsx("td",{className:"py-3 px-6",children:e.jsxs("p",{className:"text-lg ",children:["Quantity: ",t.quantity]})}),e.jsx("td",{className:"py-3 px-6",children:e.jsxs("p",{className:"font-semibold text-blue-500",children:[(t.price*t.quantity).toLocaleString(),"đ"]})})]},d))})})}),g[s.id]&&e.jsxs("div",{className:"mt-4 p-4   rounded-lg",children:[e.jsx("div",{className:"text-lg font-semibold  mb-4",children:"Order Details"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(R,{className:"text-xl text-blue-500"}),e.jsx("span",{className:"font-medium",children:"Recipient:"})," ",s.recipientName]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(U,{className:"text-xl text-green-500"}),e.jsx("span",{className:"font-medium",children:"Phone:"})," ",s.phone]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(B,{className:"text-xl text-red-500"}),e.jsx("span",{className:"font-medium",children:"Address:"})," ",s.address]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx($,{className:"text-xl text-yellow-500"}),e.jsx("span",{className:"font-medium",children:"Note:"})," ",s.note]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(q,{className:"text-xl text-purple-500"}),e.jsx("span",{className:"font-medium",children:"Order Date:"})," ",new Date(s.orderDate).toLocaleString()]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(H,{className:"text-xl text-orange-500"}),e.jsx("span",{className:"font-medium",children:"Status:"})," ",s.status]})]}),e.jsxs("div",{className:"flex justify-between font-bold mt-6 pt-4 border-t border-gray-200",children:[e.jsx("span",{className:"text-lg",children:"Total Amount:"}),e.jsxs("span",{className:"text-lg text-blue-600",children:[s.totalAmount.toLocaleString(),"đ"]})]}),s.status==="PENDING"&&e.jsx("button",{onClick:async()=>{await P(s.id),j&&(window.location.href=j)},className:"mt-6 w-full py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition",children:"Payment"})]})]},s.id))}):e.jsx("p",{className:"text-center ",children:"No orders found."}),e.jsxs("div",{className:"flex justify-center items-center mt-4 gap-4",children:[e.jsx("button",{onClick:()=>m(s=>Math.max(s-1,1)),disabled:l===1,className:"py-2 px-4 bg-blue-500 text-white rounded disabled:bg-gray-300",children:"Previous"}),e.jsxs("p",{className:" text-center",children:["Page ",l," of ",h]}),e.jsx("button",{onClick:()=>m(s=>Math.min(s+1,h)),disabled:l===h,className:"py-2 px-4 bg-blue-500 text-white rounded disabled:bg-gray-300",children:"Next"})]})]})]})]})}export{le as default};
