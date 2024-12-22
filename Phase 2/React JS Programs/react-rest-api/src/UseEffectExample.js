import { useEffect, useState } from "react"

function UseEffectExample() {
let [m,setM]=useState(0);
let [n,setN]=useState(0);
// it will call for all state and props variable change 
// useEffect(()=> {
//     console.log("useEffect is called..")
// });
// it doesn't call for any state or props variable. it will only once
// useEffect(()=> {
//     console.log("useEffect is called..")
// },[]);
// it call whenever any changes apply for m not for n 
useEffect(()=> {
    console.log("useEffect is called..")
},[m]);

    return(
        <div>
            <h2>UseEffect Example</h2>
            <p>M Value is {m} N value is {n}</p>
            <input type="button" value="Increment M" onClick={()=>setM(m+1)} /><br /><br />
            <input type="button" value="Increment N" onClick={()=>setN(n+1)} /><br /><br />
        </div>
    )
}


export default UseEffectExample