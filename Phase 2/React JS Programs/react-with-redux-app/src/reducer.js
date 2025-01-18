
let initialState = {
    counter:100,
    name:"Akash Kale!",
    products:[
        {"pid":1,"pname":"Mobile","price":10000},
        {"pid":2,"pname":"Laptop","price":50000},
        {"pid":3,"pname":"TV","price":30000}
    ]
}

function reducer(state=initialState,action){
    // base upon action we can do some changes in state variable and return it
    console.log("Reducer called",action);
    if(action.type=="INCREMENT"){
                //...state means copy of state ie hold all the values of state ie 1st parameter 
                // 2nd which property you want to change, 3rd property new value.
        return {...state,counter:state.counter+1}
    }

    if(action.type=="DECREMENT"){
        //...state means copy of state ie hold all the values of state ie 1st parameter 
        // 2nd which property you want to change, 3rd property new value.
    return {...state,counter:state.counter-1}
    }

    return state;
}


export default reducer;