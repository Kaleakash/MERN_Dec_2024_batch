class Dequeue{
    constructor(){
        this.item =[];
    }
    // Insert at front 
    addFront(element){
        this.item.unshift(element);     // it will add the element from beginning of the array.
    }
    // Insert ar rear 
    addRear(element){
        this.item.push(element);     // it will add the element from end of the array.
    }

    deleteFront(){
        if(this.isEmpty()) return "Underflow; No element to remove";
        this.item.shift();     // it will remove the element from beginning of the array.
    }
    deleteRear(){
        if(this.isEmpty()) return "Underflow; No element to remove";
        this.item.pop();     // it will remove the element from end of the array.
    }
    isEmpty(){
        return this.item.length === 0;
    }
    size(){
        return this.item.length;
    }
    peekFront() {
        if(this.isEmpty()) return "No element in the queue";
        return this.item[0];
    }
    peekRear(){
        if(this.isEmpty()) return "No element in the queue";
        return this.item[this.item.length-1];
    }
}
    
let deque = new Dequeue();

console.log(deque.isEmpty()); // true
console.log(deque.size()); // 0
console.log(deque.peekFront()); // No element in the queue

deque.addFront(10);
deque.addFront(20);
deque.addRear(30);
deque.addRear(40);

console.log(deque.isEmpty()); // false 
console.log(deque.size()); // 4 
console.log(deque.peekFront()); //20
console.log(deque.peekRear()); //40