import axios from "axios";
import { useEffect, useState } from "react";

function HrDashboard() {
let [addEmployeeFlag,setEmployeeFlag] = useState(false);
let [empName,setEmpName] = useState("");
let [emailid,setEmailid] = useState("");
let [dept,setDept] = useState("");
let [employees,setEmployees]=useState([]);
let [result,setResult]=useState("");  
useEffect(()=> {
    
    let loadEmployees = async()=> {
        let response = await axios.get("http://localhost:3000/employees");
        //console.log(response.data);
        setEmployees(response.data);
    } 
    loadEmployees();  
},[result]);

let addEmployee  = ()=> {
    setEmployeeFlag(true);
}

let storeEmployeeInDbFile=async(event)=>{
    event.preventDefault();
    let employee = {empName,emailid,dept};
    console.log(employee);
    setEmployeeFlag(false);
   // employees hold all employee details present in db.json file. verify empId and employees array empId
   // if present don't store else call post methods. 
    let response = await axios.post("http://localhost:3000/employees",employee);
    console.log(response.data);
    setResult(response.data);
}
    return(
        <div>
            <h1>Welcome to Hr Home Page</h1>
            <input type="button" value="Add Employee" onClick={addEmployee}/>
        {
            addEmployeeFlag? 
            <div>
                <form onSubmit={storeEmployeeInDbFile}>
                    <label>Employee Name</label>
                    <input type="text" name="empName" onChange={(event)=>setEmpName(event.target.value)}/><br/>
                    <label>EmailId</label>
                    <input type="email" name="emailid" onChange={(event)=>setEmailid(event.target.value)}/><br/>
                    <label>Department</label>
                    <input type="radio" name="dept" value="IT" onChange={(event)=>setDept(event.target.value)}/>IT
                    <input type="radio" name="dept" value="Marketing" onChange={(event)=>setDept(event.target.value)}/>Marketing
                    <input type="radio" name="dept" value="Finance" onChange={(event)=>setDept(event.target.value)}/>Finance
                    <input type="radio" name="dept" value="Non-IT" onChange={(event)=>setDept(event.target.value)}/>Non-IT<br/>
                    <input type="submit" value="Add Employee"/>
                </form>

            </div> : null
        }            
        <h3>Employee Details</h3>
        {
            employees.map((employee,index)=>{
                return(
                    <div key={index}>
                        <h3>{employee.empName}</h3>
                        <span>{employee.emailid} - {employee.dept}</span>
                        <hr/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default HrDashboard;


