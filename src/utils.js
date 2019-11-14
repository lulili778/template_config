console.log("utils.js is running")
const square= (x)=>(x*x)
//exports - default export - named exports
export const add =(a,b)=>(a+b)
const subtract = (a,b)=>(a-b)
// export default subtract (a,b)=>(a-b)
export{square,subtract as default}
    