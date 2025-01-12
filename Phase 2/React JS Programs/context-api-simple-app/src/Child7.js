import { useContext } from "react";
import { MyAgeContext } from "./Context";

function Child7() {
let ageData = useContext(MyAgeContext);
    return(
        <div>
            <h3>Child7 Component Age is <u>{ageData}</u></h3>
        </div>
    )
}

export default Child7;