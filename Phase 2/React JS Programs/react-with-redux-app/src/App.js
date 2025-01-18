import './App.css';
import DisplayProduct from './DisplayProduct';
import FirstComponent from './FirstComponent';
import NameComponent from './NameComponent';

function App() {
  return (
    <div className="App">
    <h3>React with Redux App!</h3>
    <FirstComponent></FirstComponent>
    <NameComponent></NameComponent>
    <DisplayProduct></DisplayProduct>
    </div>
  );
}

export default App;
