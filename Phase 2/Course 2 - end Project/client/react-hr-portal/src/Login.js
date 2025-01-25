import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
let [emailid,setEmailid]=useState("");
let [password,setPassword]=useState("");
let [role,setRole]=useState("");
let navigate = useNavigate();
let handleSubmit=async (event)=> {
    event.preventDefault();
    console.log(emailid+" "+password+" "+role)
    let loginData = await axios.get("http://localhost:3000/logins")
    let result = loginData.data.find(l=>l.emailid==emailid && l.password==password && l.role==role);
    if(result==undefined){
        alert("InValid details")
    }else {
        //alert("successfully login!")
        if(role=="hr"){
            alert("hr login successfully")
            navigate("/hr");
        }else {
            alert("employee login successfully")
            sessionStorage.setItem("user",emailid);
            navigate("/employee");
        }
    }
}
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
                <input type="email" name="emailid" onChange={(event)=>setEmailid(event.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
                <label>TypeOfUser</label>
                <input type="radio" name="role" value="hr" onChange={(event)=>setRole(event.target.value)}/>:Hr
                <input type="radio" name="role" value="employee" onChange={(event)=>setRole(event.target.value)}/>:Employee<br/>
                <input type="submit" value="SignIn" className="btn btn-success"/>
                <input type="reset" value="reset" className="btn btn-outline-danger"/>
            </form>
            
            <br/>
            <Link to="/signup">SignUp!</Link>
        </div>
    )
}

export default Login;


