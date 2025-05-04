import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
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
        
      <h1>Customer Dashboard</h1>
      <p>Welcome to the customer dashboard {email}!</p>
    </div>
  );
}

export default CustomerDashboard;