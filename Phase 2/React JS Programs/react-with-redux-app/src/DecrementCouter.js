import { useDispatch } from "react-redux";

function DecrementCounter() {
let dispatch = useDispatch();   // this hook help us to dispatch an action.

let handleDecrement=function(){
    console.log("Decrement Counter in same component");
    dispatch({type:"DECREMENT"})    // dispatching an action to increment the counter. mean it all reducer function. 
}
    return(
        <div>
            <h3>Decrement Counter</h3>
            <input type="button" value="Decrement" onClick={handleDecrement}></input>
        </div>
    )
}

export default DecrementCounter;