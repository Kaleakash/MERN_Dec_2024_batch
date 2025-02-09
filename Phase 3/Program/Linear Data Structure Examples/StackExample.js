class Stack {

    constructor() {
        this.element = []; // created array variable inside a constructor. 
        this.MAX_ELEMENT = 5; // maximum size of the stack.
    }
    push(data){ //  it is user defined push method to add data to the stack.
        if(this.MAX_ELEMENT>this.element.length){ // checking if the stack is full or not.
        this.element.push(data); // push method to add data to the stack. 
        console.log("Element pushed to the stack: "+data)
        }else {
            console.log("Stack is full")
        }
    }
    isEmpty() {
        return this.element.length === 0; // checking if the stack is empty or not.
    }
    pop() {
        if(this.isEmpty()){ // checking if the stack is empty or not.}
        console.log("Stack is empty")
        return;
        }else {
            let poppedElement = this.element.pop(); // pop method to remove data from the stack.    
            return poppedElement; // returning the popped element.
        }
    }
    peek() {
        if(this.isEmpty()){ // checking if the stack is empty or not.}
        console.log("Stack is empty")
        return;
        }else {
             
            return this.element[this.element.length-1]; // returning the top element of the stack.
        }
    }
    size() {
        console.log("Number of element present in stack is "+this.element.length)
    }
}
let ss = new Stack(); // created an object of Stack class.
console.log("Stack is empty "+ss.isEmpty())
ss.push(10); // calling push method to add data to the stack.
ss.push(20); // calling push method to add data to the stack.
ss.push(30); // calling push method to add data to the stack.
ss.push(40); // calling push method to add data to the stack.
ss.push(50); // calling push method to add data to the stack.
ss.push(60); // calling push method to add data to the stack.
ss.size();
console.log("Stack is empty "+ss.isEmpty())
console.log("pop "+ss.pop()) // calling pop method to remove data from the stack.
ss.size();
console.log("peek operation "+ss.peek())
ss.size();