
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


    return state;
}


export default reducer;