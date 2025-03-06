import{d,u as c,j as e,a as s}from"./index-CoU4576v.js";import{L as h,H as x}from"./LeftSideBar-C3I9T6Cy.js";/* empty css            */import"./index-DYOF6FZU.js";import"./index-Dsj2DyTX.js";import"./index-BpOwVgMe.js";import"./logo-DG-ZgLhE.js";import"./index-C6U7UJyo.js";import"./Popover-D3I8Bna5.js";import"./createSimplePaletteValueFilter-BkuHQHCT.js";import"./Transition-R9nnOErc.js";import"./Typography-7IhSei9U.js";function b(){const{isDarkMode:l}=d(),r=c(),o=async()=>{const a=localStorage.getItem("id");try{const t=localStorage.getItem("token");await s.post("https://koicaresystemv2.azurewebsites.net/api/orders/order/premium",{userId:a,time:"1MONTH"},{headers:{Authorization:`Bearer ${t}`}}),r("/member/payment"),localStorage.setItem("totalPrice",299999),localStorage.setItem("promotionTotal",299999)}catch(t){console.error("Error details:",t)}},i=async()=>{const a=localStorage.getItem("id");try{const t=localStorage.getItem("token");await s.post("https://koicaresystemv2.azurewebsites.net/api/orders/order/premium",{userId:a,time:"6MONTHS"},{headers:{Authorization:`Bearer ${t}`}}),r("/member/payment"),localStorage.setItem("totalPrice",999e3),localStorage.setItem("promotionTotal",999e3)}catch(t){console.error("Error details:",t)}},n=async()=>{const a=localStorage.getItem("id");try{const t=localStorage.getItem("token");await s.post("https://koicaresystemv2.azurewebsites.net/api/orders/order/premium",{userId:a,time:"12MONTHS"},{headers:{Authorization:`Bearer ${t}`}}),r("/member/payment"),localStorage.setItem("totalPrice",1799e3),localStorage.setItem("promotionTotal",1799e3)}catch(t){console.error("Error details:",t)}};return e.jsx("div",{children:e.jsxs("div",{className:"min-h-screen flex",children:[e.jsx(h,{}),e.jsxs("div",{className:`relative ${l?"bg-custom-dark text-white":"bg-white text-black"} shadow-xl flex-1 flex-col overflow-x-hidden`,children:[e.jsx(x,{}),e.jsx("div",{className:"px-[30px] mt-[120px]",children:e.jsxs("section",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col rounded-lg  p-6 shadow border border-gray-200 xl:p-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"mb-4 text-2xl font-semibold ",children:"Premium Bronze"}),e.jsxs("div",{className:"mb-4 flex items-baseline ",children:[e.jsx("span",{className:"text-3xl font-semibold",children:"đ"}),e.jsx("span",{className:"text-5xl font-extrabold tracking-tight ml-2",children:"299.000"}),e.jsx("span",{className:"ml-1 text-2xl font-normal",children:"/month"})]}),e.jsx("p",{className:"text-lg font-normal ",children:"Essential features in the koi care system, perfect for beginners and casual users."}),e.jsxs("ul",{className:"my-6 space-y-4",children:[e.jsxs("li",{className:"flex space-x-3",children:[e.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),e.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock access to water parameters, ensuring optimal conditions for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock the food calculator to determine the right amount of food for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Access the salt calculator to maintain optimal health in your koi pond."})]}),e.jsxs("li",{className:"flex space-x-3 line-through decoration-gray-500",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-500",children:"Get hundreds of feature updates each year."})]}),e.jsxs("li",{className:"flex space-x-3 line-through decoration-gray-500",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-500",children:"No setup fees, monthly fees, or hidden fees."})]}),e.jsxs("li",{className:"flex space-x-3 line-through decoration-gray-500",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-500",children:"Save costs"})]})]})]}),e.jsx("button",{onClick:()=>o(),className:"rounded-lg bg-blue-400 px-5 cursor-pointer py-4 hover:bg-blue-500 text-center text-sm font-medium text-white",children:"Buy Now"})]}),e.jsxs("div",{className:"flex flex-col rounded-lg  p-6 shadow border border-gray-200  xl:p-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"mb-4 text-2xl font-semibold ",children:"Premium Silver"}),e.jsxs("div",{className:"mb-4 flex items-baseline",children:[e.jsx("span",{className:"text-3xl font-semibold",children:"đ"}),e.jsx("span",{className:"text-5xl font-extrabold tracking-tight ml-2",children:"999.000"}),e.jsx("span",{className:"ml-1 text-2xl font-normal",children:"/6 months"})]}),e.jsx("p",{className:"text-lg font-normal ",children:"Advanced features for enthusiastic koi keepers looking to enhance their experience."}),e.jsxs("ul",{className:"my-6 space-y-4",children:[e.jsxs("li",{className:"flex space-x-3",children:[e.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),e.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock access to water parameters, ensuring optimal conditions for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock the food calculator to determine the right amount of food for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Access the salt calculator to maintain optimal health in your koi pond."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Get hundreds of feature updates each year."})]}),e.jsxs("li",{className:"flex space-x-3 line-through decoration-gray-500",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-500",children:"No setup fees, monthly fees, or hidden fees."})]}),e.jsxs("li",{className:"flex space-x-3 line-through decoration-gray-500",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-500",children:"Save costs"})]})]})]}),e.jsx("div",{onClick:()=>i(),className:"rounded-lg bg-blue-400 px-5 cursor-pointer py-4 hover:bg-blue-500 text-center text-sm font-medium text-white",children:"Buy Now"})]}),e.jsxs("div",{className:"flex flex-col rounded-lg  p-6 shadow border border-gray-200 xl:p-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"mb-4 text-2xl font-semibold ",children:"Premium Gold"}),e.jsxs("div",{className:"mb-4 flex items-baseline",children:[e.jsx("span",{className:"text-3xl font-semibold",children:"đ"}),e.jsx("span",{className:"text-5xl font-extrabold tracking-tight ml-2",children:"1.799.000"}),e.jsx("span",{className:"ml-1 text-2xl font-normal text-gray-500 dark:text-gray-400",children:"/year"})]}),e.jsx("p",{className:"text-lg font-normal",children:"The ultimate package for serious koi enthusiasts who want the best for their fish."}),e.jsxs("ul",{className:"my-6 space-y-4",children:[e.jsxs("li",{className:"flex space-x-3",children:[e.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),e.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock access to water parameters, ensuring optimal conditions for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Unlock the food calculator to determine the right amount of food for your koi."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Access the salt calculator to maintain optimal health in your koi pond."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Get hundreds of feature updates each year."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"No setup fees, monthly fees, or hidden fees."})]}),e.jsxs("li",{className:"flex space-x-3",children:[e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 shrink-0 text-green-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-base font-normal text-gray-500 dark:text-gray-400",children:"Save costs"})]})]})]}),e.jsx("div",{onClick:()=>n(),className:"rounded-lg bg-blue-400 px-5 cursor-pointer py-4 hover:bg-blue-500 text-center text-sm font-medium text-white",children:"Buy Now"})]})]})})]})]})})}export{b as default};
