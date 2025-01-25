import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
let [user,setUser]=useState({});
let navigate = useNavigate();
let [loading,setLoading]=useState(true);
useEffect(()=> {
        let loadEmployees = async()=> {
            let response = await axios.get("http://localhost:3000/employees");
            let emailid = await sessionStorage.getItem("user");         
            if(emailid!=null){
                let result = await response.data.find(e=>e.emailid==emailid);
                setUser(result);
                setLoading(false)
            }
        } 
        loadEmployees();     
},[]);
let logout = ()=> {
    navigate("/");
}
    
        if(loading){
                return <h2>loading....</h2>
        }else {
            return (<div>
            <input type="button" value="logout" onClick={logout}/><br/>
            <h1>Welcome user {user.empName} </h1>
            <p>Your emailId is {user.emailid} and your are working in department {user.dept}</p>
            </div>)
        }
        
    
}

export default EmployeeDashboard;


