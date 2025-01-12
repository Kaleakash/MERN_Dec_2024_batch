import { useContext } from "react";
import Child10 from "./Child10";
import { MyContext } from "./Context";

function Child6() {
let data = useContext(MyContext);
    return(
        <div>
            <h3>Child6 Component <u>{data}</u></h3>
            <Child10 />
        </div>
    )
}

export default Child6;