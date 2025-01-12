import { useContext } from "react";
import Child9 from "./Child9";
import { MyContext } from "./Context";

function Child10() {
let data = useContext(MyContext);
    return(
        <div>
            <h3>Child10 Component <u>{data}</u></h3>
            <Child9 />
        </div>
    )
}

export default Child10;