import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
let [email,setEmail] = useState(''); 
let navigate= useNavigate();   
useEffect(() => {
    let obj = sessionStorage.getItem("user");
    if(obj==null){
        alert("Please login first");
        navigate("/");
    }else {
        setEmail(obj);
    }
})
    return (
      <div>
         <input type="button" value="Logout" onClick={() => {
            sessionStorage.removeItem("user");
            navigate("/");
        }}/>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin dashboard {email}!</p>
      </div>
    );
  }
  
  export default AdminDashboard;