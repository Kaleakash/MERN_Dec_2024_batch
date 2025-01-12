import { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { MyContext } from "./Context";

function Parent() {
let [name,setName]=useState("Akash Kale");
    return(
        <MyContext.Provider value={name}>
            <div>
                <h3>Parent Component <u>{name}</u></h3>
                <Child1 fname={name}/>
                <Child2 />
            </div>
        </MyContext.Provider>
    )
}

export default Parent;