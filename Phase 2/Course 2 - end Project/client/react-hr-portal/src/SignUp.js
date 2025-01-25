import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
let [employees,setEmployees]=useState([]);
let [emailid,setEmailid]=useState("");
let [password,setPassword]=useState("");
let [formFlag,setFormFlag]=useState(true);
let navigate = useNavigate();
useEffect(()=> {    
    let loadEmployees = async()=> {
        let response = await axios.get("http://localhost:3000/employees");
        //console.log(response.data);
        setEmployees(response.data);
    } 
    loadEmployees();  
},[]);
let checkEmployeeEmailiId= async(event)=> {
    event.preventDefault();
    let result = employees.find(e=>e.emailid==emailid);
    if(result==undefined){
        alert("Your are not a valid employee ")
    }else {
        setFormFlag(false);
    }
}

let signUp=async (event)=> {
    event.preventDefault();
    let login = {emailid,password,"role":"employee"};
    console.log(login);
    let result = await axios.post("http://localhost:3000/logins",login);
    if(result){
        alert("Account created successfully");
        navigate("/");
    }
}
    return(
        <div>
            {
                formFlag
                ?
                <div>
                <h1>SignUp</h1>
                <form onSubmit={checkEmployeeEmailiId}>
                <label>EmailId</label>
                <input type="email" name="emailid" onChange={(event)=>setEmailid(event.target.value)}/><br/>
                <input type="submit" value="Please enter your emailid"/>
                </form>
                </div>
                :
                <div>
                <h1>SignUp</h1>
                <form onSubmit={signUp}>
                <label>EmailId</label>
                <input type="email" name="emailid" value={emailid} readOnly="true"/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="SignUp"/>
                </form>
                </div>
            }
            
        </div>
    )
}

export default SignUp;


