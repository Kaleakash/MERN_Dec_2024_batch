import AddProduct from './AddProduct';
import './App.css';
import DecrementCounter from './DecrementCouter';
import DisplayProduct from './DisplayProduct';
import FirstComponent from './FirstComponent';
import IncrementCounter from './IncrementCouter';
import NameComponent from './NameComponent';

function App() {
  return (
    <div className="App">
    <h3>React with Redux App!</h3>
    {/* <FirstComponent></FirstComponent>
    <NameComponent></NameComponent>
    <IncrementCounter></IncrementCounter>
    <DecrementCounter></DecrementCounter> */}
    <AddProduct></AddProduct>
    <DisplayProduct></DisplayProduct>
    </div>
  );
}

export default App;
