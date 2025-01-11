import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
let [email_id,setEmailId] = useState("");
let [password,setPassword] = useState("");
let [logins,setLogins] = useState([]);
let [msg,setMessage]=useState("");
let navigate = useNavigate();
let url = "http://localhost:3000/logins";
// 1st time it get called and next whenever any changes happen in msg it get called

useEffect(()=> {
// axios.get(url).then(result=>console.log(result.data)).catch(error=>console.log(error));
axios.get(url).then(result=>setLogins(result.data)).catch(error=>console.log(error));
},[msg])
let handleSubmit=(event)=>{
    event.preventDefault();
    // it check each email_id and password present in logins array 
    // if it is present it will return that object otherwise it will return undefined
    let result = logins.find(ll=>ll.email_id===email_id); 
    if(result != undefined){
            alert("EmailId already exists")
    }else {
        // we convert our email_id and password into object
        let login = {email_id:email_id,password:password};
        // 1st parameter url and 2nd parameter is object which we want to store in json file 
        axios.post(url,login).then(result=>{alert("Account created");setMessage(result)}).catch(error=>console.log(error));
    }        
}
    return(
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email_id">EmailId:</label>
                <input type="email" name="email_id"
                onChange={(event)=>setEmailId(event.target.value)}/><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" 
                onChange={(event)=>setPassword(event.target.value)}/><br /><br />
                <input type="submit" value="SignUp" />   
                <input type="reset" value="Reset" />
            </form>
            <br/>
            <Link to="/">SignIn</Link> 
        </div>
    )
}

export default SignUp;