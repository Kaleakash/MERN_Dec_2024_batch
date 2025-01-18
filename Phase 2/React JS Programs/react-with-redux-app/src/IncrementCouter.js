import { useDispatch } from "react-redux";

function IncrementCounter() {
let dispatch = useDispatch();   // this hook help us to dispatch an action.

let handleIncrement=function(){
    console.log("Increment Counter in same component");
    dispatch({type:"INCREMENT"})    // dispatching an action to increment the counter. mean it all reducer function. 
}
    return(
        <div>
            <h3>Increment Counter</h3>
            <input type="button" value="Increment" onClick={handleIncrement}></input>
        </div>
    )
}

export default IncrementCounter;