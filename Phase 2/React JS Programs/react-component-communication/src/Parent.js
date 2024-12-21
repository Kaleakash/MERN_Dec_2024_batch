import Child1 from "./Child1";
import Child2 from "./Child2";
import {useState} from "react";
function Parent() {
let [parentName,setParentName]=useState("Admin")
let [child1Value,setChild1Value]=useState("");  // it is use to hold the child1 value receive from child1 component 
let [child2Value,setChild2Value]=useState("");  // it is use to hold the child1 value receive from child1 component 
let setChild1Data=function(data){
    console.log(data);
    setChild1Value(data);
}
let setChild2Data=function(data){
    console.log(data);
    setChild2Value(data);
}
    return(
        <div style={{"backgroundColor":"yellow"}}>
            <h3>Parent Component</h3>
            <p>Parent name in parent component is {parentName}</p>
            <p>Child1 value in parent component is {child1Value}</p>
            <p>Child2 value in parent component is {child2Value}</p>
            <Child1 pname={parentName} age="21" handleChild1Value={setChild1Data}></Child1>
            <Child2 pname={parentName} handleChild2Value={setChild2Data}></Child2>
        </div>
    )
}

export default Parent;