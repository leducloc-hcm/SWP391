import{r as t}from"./index-CoU4576v.js";function d({controlled:e,default:n,name:C,state:f="value"}){const{current:o}=t.useRef(e!==void 0),[s,a]=t.useState(n),r=o?e:s,u=t.useCallback(l=>{o||a(l)},[]);return[r,u]}const c=t.createContext(void 0);function m(){return t.useContext(c)}export{c as F,d as a,m as u};
