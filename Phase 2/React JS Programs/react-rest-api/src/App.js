import logo from './logo.svg';
import './App.css';
import ProductView from './ProductView';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Axios Example</h2>
      <ProductView></ProductView>
      <hr/>
      <SearchProduct></SearchProduct>
    </div>
  );
}

export default App;
