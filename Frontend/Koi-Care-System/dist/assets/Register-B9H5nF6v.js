import{r as m,u as f,j as e,L as b,a as j,B as c}from"./index-CoU4576v.js";import{a as v}from"./index.esm-Cod_m23j.js";import{F as N}from"./index-Dsj2DyTX.js";import{b as y}from"./0917(1)-C6vz000w.js";import{T as l}from"./TextField-D5kQ5JWC.js";import{I as p}from"./InputAdornment-DheDHy1K.js";import"./createSimplePaletteValueFilter-BkuHQHCT.js";import"./Transition-R9nnOErc.js";import"./Popover-D3I8Bna5.js";import"./useFormControl-2iTihPub.js";import"./Typography-7IhSei9U.js";function T(){const[a,i]=m.useState(!1),u=f(),[o,n]=m.useState(!1),{register:t,handleSubmit:x,formState:{errors:s},watch:w}=v(),h=async r=>{n(!0),console.log("Submitting data:",r);try{(await j.post("https://koicaresystemv2.azurewebsites.net/api/users/register",{username:r.username,email:r.email,password:r.password})).status===201?u("/api/verifyEmail"):c.error("Registration failed")}catch(d){console.log(d),c.error("Registration failed")}finally{n(!1)}},g=w("password");return e.jsxs("div",{className:"h-screen flex flex-col items-center justify-center",children:[e.jsx("video",{className:"absolute top-0 left-0 w-full h-full object-cover",src:y,autoPlay:!0,loop:!0,muted:!0}),e.jsxs("div",{className:"absolute bg-white p-8 rounded-3xl shadow-md w-full max-w-md bg-opacity-30 backdrop-blur-0 border border-gray-300",children:[e.jsx("h2",{className:"text-black text-5xl font-bold mb-6 text-center",children:"Register"}),e.jsxs("form",{className:"relative",onSubmit:x(h),noValidate:!0,children:[e.jsx("div",{className:"mb-4",children:e.jsx(l,{id:"email",type:"email",label:"Email",placeholder:"acd@gmail.com",variant:"outlined",...t("email",{required:"Email is required",pattern:{value:/^\S+@\S+\.\S+$/,message:"Invalid email format"}}),error:!!s.email,helperText:s.email?s.email.message:"",className:"w-full p-3 bg-gray-700 bg-transparent"})}),e.jsx("div",{className:"mb-4 relative",children:e.jsx(l,{id:"username",label:"Username",placeholder:"Name",variant:"outlined",...t("username",{required:"Name is required"}),error:!!s.username,helperText:s.username?s.username.message:"",className:"w-full p-3 bg-gray-700 bg-transparent"})}),e.jsx("div",{className:"mb-4 relative",children:e.jsx(l,{id:"password",type:a?"text":"password",label:"Password",placeholder:"***********",variant:"outlined",...t("password",{required:"Password is required",minLength:{value:8,message:"Password must be at least 8 characters"}}),error:!!s.password,helperText:s.password?s.password.message:"",InputProps:{endAdornment:e.jsx(p,{position:"end",children:e.jsx("span",{className:"cursor-pointer text-gray-300",onClick:()=>i(!a),children:a?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:e.jsx("path",{d:"M12 4.5C5.25 4.5 1.5 12 1.5 12s3.75 7.5 10.5 7.5S22.5 12 22.5 12 18.75 4.5 12 4.5Zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"})}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[e.jsx("path",{d:"M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z"}),e.jsx("path",{d:"M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z"}),e.jsx("path",{d:"M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z"})]})})})},className:"w-full p-3 bg-gray-700 bg-transparent"})}),e.jsx("div",{className:"mb-4 relative",children:e.jsx(l,{id:"confirm_password",type:a?"text":"password",label:"Confirm Password",placeholder:"***********",variant:"outlined",...t("confirm_password",{required:"Confirm password is required",validate:r=>r===g||"Passwords do not match"}),error:!!s.confirm_password,helperText:s.confirm_password?s.confirm_password.message:"",InputProps:{endAdornment:e.jsx(p,{position:"end",children:e.jsx("span",{className:"cursor-pointer text-gray-300",onClick:()=>i(!a),children:a?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:e.jsx("path",{d:"M12 4.5C5.25 4.5 1.5 12 1.5 12s3.75 7.5 10.5 7.5S22.5 12 22.5 12 18.75 4.5 12 4.5Zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"})}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:[e.jsx("path",{d:"M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z"}),e.jsx("path",{d:"M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z"}),e.jsx("path",{d:"M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z"})]})})})},className:"w-full p-3 bg-gray-700 bg-transparent"})}),e.jsx("button",{className:`w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold ${o?"opacity-50 cursor-not-allowed":""}`,disabled:o,children:e.jsxs("div",{className:"flex items-center space-x-2",children:[o&&e.jsx(N,{className:"animate-spin"}),e.jsx("span",{children:"Register"})]})})]}),e.jsxs("div",{className:"text-black font-bold mt-6 text-center",children:["If you have an account?",e.jsx(b,{to:"/login",className:"text-red-500 font-bold ml-2",children:"Login"})]})]})]})}export{T as default};
