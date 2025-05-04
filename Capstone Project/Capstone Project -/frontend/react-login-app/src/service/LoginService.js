import axios from "axios";

let LOGIN_BASE_URL = "http://localhost:3001/api/login";

let signIn = async (user)=> {
let result = await axios.post(`${LOGIN_BASE_URL}/signIn`,user);
return result.data; 
}

let signUp = async (user)=> { 
    let result = await axios.post(`${LOGIN_BASE_URL}/signUp`,user);
    return result.data; 
}

export {signIn,signUp};


