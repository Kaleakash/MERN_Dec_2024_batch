import './App.css';
import {Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';

function App() {
  return (
    <div className="App">
     <h2>Welcome to React Login App</h2>
     
    

     <hr/>
     <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="adminDashboard" element={<AdminDashboard/>}/>
      <Route path="customerDashboard" element={<CustomerDashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
