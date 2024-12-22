import logo from './logo.svg';
import './App.css';
import ProductView from './ProductView';
import SearchProduct from './SearchProduct';
import UseEffectExample from './UseEffectExample';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Axios Example</h2>
      <ProductView></ProductView>
      <hr/>
      <SearchProduct></SearchProduct>
      <hr/>
      <UseEffectExample></UseEffectExample>
    </div>
  );
}

export default App;
