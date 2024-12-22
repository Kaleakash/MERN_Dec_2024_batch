export let initialState = {        // initialState is a object ref which can hold any type of variable. 
    count:0,
    name:"Akash Kale"
}
export function reducer(state,action){
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