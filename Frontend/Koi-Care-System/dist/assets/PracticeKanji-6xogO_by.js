import{r as n,j as e,L as F,a as P}from"./index-CfTJQyAl.js";function K(){const[l,g]=n.useState([]),[a,m]=n.useState(null),[i,o]=n.useState(""),[p,r]=n.useState(""),[C,d]=n.useState(!1),[u,b]=n.useState(!1),[j,k]=n.useState(5),[A,w]=n.useState(!1),[h,x]=n.useState([]),[Q,f]=n.useState(!1),[N,v]=n.useState(!1),[S,c]=n.useState(new Set),z=async t=>{b(!0);try{const s=await P.post("https://mazii.net/api/jlpt",{query:t,limit:1e3,page:1,language:"vi"});s.data.status===200&&(g(s.data.results),w(!0),x([]),c(new Set),y(s.data.results.length))}catch(s){console.error("Lỗi khi gọi API:",s)}finally{b(!1)}},y=t=>{S.size===t&&(alert("Bạn đã làm hết tất cả câu hỏi! Quiz sẽ bắt đầu lại."),c(new Set));let s;do s=Math.floor(Math.random()*t);while(S.has(s));c(B=>new Set([...B,s])),m(s)},L=()=>{if(l.length===0||a===null)return;[...l[a].phonetic.split(" "),...l[a].mean.split("; ")].includes(i.trim())?r("✅ Chính xác!"):(r("❌ Sai rồi!"),x(s=>[...s,{...l[a],userAnswer:i}]),v(!0)),d(!0)},I=()=>{r(""),o(""),d(!1),v(!1),l.length>0&&y(l.length)},D=()=>{w(!1),g([]),m(null),o(""),r(""),d(!1),x([]),c(new Set)};return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100 p-4",children:e.jsxs("div",{className:"w-full max-w-md p-6 bg-white shadow-lg rounded-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-center mb-4",children:"JLPT Quiz"}),A?Q?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-bold text-center mb-3",children:"Danh sách câu sai"}),h.length>0?e.jsx("ul",{className:"space-y-3",children:h.map((t,s)=>e.jsxs("li",{className:"p-3 bg-gray-200 rounded-lg",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Câu hỏi:"})," ",t.word]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📌 Cách đọc:"})," ",t.phonetic.replace(/ /g," / ")]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💡 Nghĩa:"})," ",t.mean]}),e.jsxs("p",{className:"text-red-500",children:[e.jsx("strong",{children:"❌ Bạn đã trả lời:"})," ",t.userAnswer]})]},s))}):e.jsx("p",{className:"text-center text-gray-500",children:"Bạn không sai câu nào!"}),e.jsx("button",{className:"w-full bg-blue-500 text-white py-2 mt-3 rounded-lg hover:bg-blue-600",onClick:()=>f(!1),children:"Quay lại Quiz"})]}):e.jsx(e.Fragment,{children:u?e.jsx("p",{className:"text-center",children:"Đang tải dữ liệu..."}):a!==null?e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl font-semibold mb-2",children:l[a].word}),e.jsx("input",{type:"text",placeholder:"Nhập nghĩa hoặc cách đọc...",className:"w-full p-2 border rounded-lg mb-2",value:i,onChange:t=>o(t.target.value),disabled:N}),e.jsx("button",{className:"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600",onClick:L,disabled:N,children:"Kiểm tra"}),p&&e.jsx("p",{className:"mt-3 text-lg",children:p}),C&&e.jsxs("div",{className:"mt-3 p-3 bg-gray-200 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"📖 Đáp án:"})}),e.jsxs("p",{className:"text-lg font-semibold",children:["📌 Cách đọc: ",l[a].phonetic.replace(/ /g," / ")]}),e.jsxs("p",{className:"text-lg text-gray-700",children:["💡 Nghĩa: ",l[a].mean]})]}),e.jsx("button",{className:"w-full bg-green-500 text-white py-2 mt-3 rounded-lg hover:bg-green-600",onClick:I,children:"Câu tiếp theo"}),e.jsxs("button",{className:"w-full bg-yellow-500 text-white py-2 mt-3 rounded-lg hover:bg-yellow-600",onClick:()=>f(!0),children:["Xem câu đã sai (",h.length,")"]}),e.jsx("button",{className:"w-full bg-red-500 text-white py-2 mt-3 rounded-lg hover:bg-red-600",onClick:D,children:"Quay lại chọn cấp độ"})]}):null}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-center mb-2",children:"Chọn cấp độ JLPT:"}),e.jsxs("select",{className:"w-full p-2 border rounded-lg mb-4",value:j,onChange:t=>k(Number(t.target.value)),children:[e.jsx("option",{value:"5",children:"N5 (Dễ)"}),e.jsx("option",{value:"4",children:"N4 (Cơ bản)"}),e.jsx("option",{value:"3",children:"N3 (Trung cấp)"}),e.jsx("option",{value:"2",children:"N2 (Khó)"}),e.jsx("option",{value:"1",children:"N1 (Rất khó)"})]}),e.jsx("button",{className:"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600",onClick:()=>z(j),disabled:u,children:u?"Đang tải...":"Bắt đầu Quiz"}),e.jsx(F,{to:"/",className:"mb-2 px-3 text-sm sm:text-base underline",children:"Trở về trang chủ"})]})]})})}export{K as default};
