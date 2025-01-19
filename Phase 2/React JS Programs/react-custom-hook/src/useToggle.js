import { useState } from "react";

function useToggle(initialValue = false) {

const [value, setValue] = useState(initialValue);
const toggle = () => setValue((v) => !v);

return [value, toggle];
}

// return an array with two values
//1st time value false, next if true it return false and true.

export default useToggle;