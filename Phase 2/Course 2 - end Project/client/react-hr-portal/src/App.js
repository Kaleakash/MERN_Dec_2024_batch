import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import HrDashboard from './HrDashboard';
import EmployeeDashboard from './EmployeeDashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Welcome Hr Portal App!</h2>

        <div>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/hr" element={<HrDashboard/>} />
            <Route path="/employee" element={<EmployeeDashboard/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
