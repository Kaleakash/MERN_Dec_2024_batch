import { useState } from "react";
import Child7 from "./Child7";
import Child8 from "./Child8";
import { MyAgeContext } from "./Context";

function Child4() {
let [age,setAge]=useState(21);
    return(
        <MyAgeContext.Provider value={age}>
        <div>
            <h3>Child4 Component</h3>
            <Child7 />
            <Child8 />
        </div>
        </MyAgeContext.Provider>
    )
}

export default Child4;