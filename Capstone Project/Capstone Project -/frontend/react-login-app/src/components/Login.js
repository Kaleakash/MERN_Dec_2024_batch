import { useState } from "react";
import { signIn } from "../service/LoginService";
import { Link, useNavigate } from "react-router-dom";
function Login() {

let [email,setEmail] = useState('');
let [password,setPassword] = useState('');
let [role,setRole] = useState('');
let [errorMsg,setErrorMsg] = useState(''); 

let navigate = useNavigate(); 

let SigInLogic = async (event)=> {
    event.preventDefault();
    let user = {email,password,role}
    let result = await signIn(user);
    if(result.msg=="Admin login successful"){
        sessionStorage.setItem("user",user.email);
        navigate("/adminDashboard");
    }else if(result.msg=="Customer login successful"){
        sessionStorage.setItem("user",user.email);
        navigate("/customerDashboard");
    }else {
        setErrorMsg(result.msg);
    }
    setEmail('');
    setPassword('');
    setRole('');
}
return(
    <div>
        <h3>Login Page</h3>
        <span style={{color:"red"}}>{errorMsg}</span><br/>
        <form onSubmit={SigInLogic}>
            <label>Email:</label>
            <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required/><br/>
            <label>Password:</label>
            <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required/><br/>
            <label>Role:</label>
            <input type="radio" value="admin" name="role" onChange={(e) => setRole(e.target.value)} required/>Admin
            <input type="radio" value="customer" name="role" onChange={(e) => setRole(e.target.value)} required/>Customer
            <br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
        </form>
        <br/>
        <Link to="/signup">Register</Link>
    </div>
)

}

export default Login;