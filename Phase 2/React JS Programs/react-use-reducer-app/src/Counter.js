import {useReducer} from 'react';
//import { initialState,reducer } from './reducer';
let initialState = {        // initialState is a object ref which can hold any type of variable. 
    count:0,
    name:"Akash Kale"
}
function reducer(state,action){
    // base upon action we can do the change on state variable ie initialState 
    //console.log("Event fired")
    console.log(action)
    if(action.type=="INCREMENT"){
        return {...state,count:state.count+1,name:"Akash"}
    }
    if(action.type=="DECREMENT"){
        return {...state,count:state.count-1,name:"Akash Trainer"}
    }
    if(action.type=="RESET"){
        return {...state,count:0}
    }
    return state;
}
function Counter() {
let [state,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <h2>Counter Example</h2>
            <h3>Name is {state.name}</h3>
            <h3>Counter Value is {state.count}</h3>
    <input type="button" value="Increment" onClick={()=>dispatch({type:"INCREMENT"})}/>
    <input type="button" value="Decrement" onClick={()=>dispatch({type:"DECREMENT"})}/>
    <input type="button" value="Reset" onClick={()=>dispatch({type:"RESET"})}/>
        </div>
    )
}

export default Counter