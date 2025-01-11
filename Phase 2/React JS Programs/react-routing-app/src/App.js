import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Feedback from './Feedback';

function App() {
  return (
    <div className="App">
      <h3>React Routing Example!</h3>
      
      <div>
        <Link to="/about-us">About Us</Link> |
        <Link to="/contact-us">Contact Us</Link> |
        <Link to="/feedback">Feedback</Link> |
      </div>
      
      <hr/>
      <Routes>
      
      <Route path="/about-us" element={<AboutUs></AboutUs>} />
      <Route path="/contact-us" element={<ContactUs></ContactUs>} />
      <Route path="/feedback" element={<Feedback></Feedback>} />
      </Routes>
    </div>
  );
}

export default App;
