import {useState} from "react";
function Child2({pname,handleChild2Value}) {
    let [user,setUser]=useState("Steven");

    return(
        <div style={{"backgroundColor":"gray"}}>
            <h3>Child2 Component</h3>
            <p>Child2 name in child2 component is {user}</p>
            <p>Parent name is child2 component is {pname}</p>
            <p>{handleChild2Value(user)}</p>
            <Child3></Child3>
        </div>
    )
}


function Child3() {
    let [user,setUser]=useState("Leena");

    return(
        <div style={{"backgroundColor":"pink"}}>
            <h3>Child3 Component</h3>
            <p>Child3 name in child3 component is {user}</p>
        </div>
    )
}

export default Child2;