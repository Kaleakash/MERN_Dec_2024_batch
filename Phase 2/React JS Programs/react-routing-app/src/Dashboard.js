import { useNavigate } from "react-router-dom";

function Dashboard() {

let navigate = useNavigate();

let logout = () => {
    navigate("/");
}

    return(
        <div>
            <h2>Welcome to Home Page</h2>
            <input type="button" value="logout" onClick={logout}/>
        </div>
    )
}

export default Dashboard;