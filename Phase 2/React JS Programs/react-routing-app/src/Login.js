import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
let [email_id,setEmailId] = useState("");
let [password,setPassword] = useState("");
let [logins,setLogins] = useState([]);
let navigate = useNavigate();
let url = "http://localhost:3000/logins";
useEffect(()=> {
// axios.get(url).then(result=>console.log(result.data)).catch(error=>console.log(error));
axios.get(url).then(result=>setLogins(result.data)).catch(error=>console.log(error));
},[])
let handleSubmit=(event)=>{
    event.preventDefault();
    // here we are checking only one emailId and password but in real time 
    // we check with database using rest api calls with help of axios or fetch api

    // if(email_id==="admin@gmail.com" && password==="admin@123"){
    //         alert("successfully login")
    //         navigate("/home")
    // }else {
    //         alert("failure try once again")
    // }
    // it check each email_id and password present in logins array 
    // if it is present it will return that object otherwise it will return undefined
    let result = logins.find(ll=>ll.email_id===email_id && ll.password===password); 
    if(result != undefined){
        alert("successfully login")
        navigate("/home")
    }else {
        alert("failure try once again")
    }        
}
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email_id">EmailId:</label>
                <input type="email" name="email_id"
                onChange={(event)=>setEmailId(event.target.value)}/><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" 
                onChange={(event)=>setPassword(event.target.value)}/><br /><br />
                <input type="submit" value="Login" />   
                <input type="reset" value="Reset" />
            </form>
        </div>
    )
}

export default Login;