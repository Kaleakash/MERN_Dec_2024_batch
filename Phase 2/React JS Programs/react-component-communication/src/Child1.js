import {useState} from "react";
function Child1(props) {
let [user,setUser]=useState("Raj");

    return(
        <div style={{"backgroundColor":"orange"}}>
            <h3>Child1 Component</h3>
            <p>Child1 name in child1 component is {user}</p>
            <p>Parent name in child1 component is {props.pname} age is {props.age}</p>
            <p>{props.handleChild1Value(user)}</p>
        </div>
    )
}

export default Child1;