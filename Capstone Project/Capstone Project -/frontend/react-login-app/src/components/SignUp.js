import { useState } from "react";
import { signUp } from "../service/LoginService";
import { Link,} from "react-router-dom";
function SignUp() {
let [email,setEmail] = useState('');
let [password,setPassword] = useState('');
let [role,setRole] = useState('');
let [errorMsg,setErrorMsg] = useState(''); 

let SigUpLogic = async (event)=> {
    event.preventDefault();
    let user = {email,password,role}
    let result = await signUp(user)
    setErrorMsg(result.msg);
    setEmail('');
    setPassword('');
    setRole('');
}
return(
    <div>
        <h3>Account Create</h3>
        <span style={{color:"red"}}>{errorMsg}</span><br/>
        <form onSubmit={SigUpLogic}>
            <label>Email:</label>
            <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required/><br/>
            <label>Password:</label>
            <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required/><br/>
            <label>Role:</label>
            {/* <input type="radio" value="admin" name="role" onChange={(e) => setRole(e.target.value)} required/>Admin */}
            <input type="radio" value="customer" name="role" onChange={(e) => setRole(e.target.value)} required/>Customer
            <br/>
            <input type="submit" value="SignUp"/>
            <input type="reset" value="reset"/>
        </form>
        <br/>
        <Link to="/">Login</Link>
    
    </div>
)

}

export default SignUp;