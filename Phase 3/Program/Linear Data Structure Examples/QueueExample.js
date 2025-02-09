class Queue {
    constructor(){
        this.queue = [];
    }
    enqueue(element){                   // like push or add to the end of the array
        this.queue.push(element);
        console.log(element + " added to queue");
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    dequeue(){                          // like shift or remove from the front of the array     
        if(this.isEmpty()) {
            return "Underflow";
        }else {
            return this.queue.shift();// array method which is use to remove element from the front of the array
        }
    }
    size() {
        return this.queue.length;
    }
}
let queue = new Queue();
console.log("Size of queue is: " + queue.size());
console.log("Is queue empty? "+ (queue.isEmpty()?"Yes":"No"));
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Size of queue is: " + queue.size());
console.log("Is queue empty? "+ (queue.isEmpty()?"Yes":"No"));
console.log("Dequeue element is: " + queue.dequeue());  
console.log("Dequeue element is: " + queue.dequeue()); 
console.log("Dequeue element is: " + queue.dequeue()); 
console.log("Size of queue is: " + queue.size());
console.log("Is queue empty? "+ (queue.isEmpty()?"Yes":"No"));
console.log("Dequeue element is: " + queue.dequeue()); 
console.log("Dequeue element is: " + queue.dequeue());
console.log("Size of queue is: " + queue.size());
console.log("Is queue empty? "+ (queue.isEmpty()?"Yes":"No")); 