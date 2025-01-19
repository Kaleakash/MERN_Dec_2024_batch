import {useState} from 'react';

function Counter() {
let [count, setCount] = useState(10);

let handleIncrement = () => {
    setCount(count+1);
}
let handleDecrement = () => {
    setCount(count-1);
}
return(
    <div>
        <h3>Count:{count}</h3><br/>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
)

}

export default Counter;