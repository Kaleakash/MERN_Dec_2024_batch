class CustomerSupportQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(customerRequest) {          // adding 
        this.queue.push(customerRequest);
        console.log("Customer request added to the queue."+customerRequest);
    }
    dequeue() {          // removing
        if (this.isEmpty()) {
            console.log("No customer requests in the queue.");
        }else {
            let request = this.queue.shift();
            console.log("Customer request processed: "+request)
        }
    }    
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    peek() {
        return this.isEmpty()?"No pending request ":this.queue[0];
    }
}

let customerSupportQueue = new CustomerSupportQueue();
console.log("Any request present in queue "+(customerSupportQueue.isEmpty()?"No request yet in queue":"Yes"))
console.log("Number of customer requests in the queue: " + customerSupportQueue.size())
customerSupportQueue.enqueue("Customer 1 needs help with order Password reset");
customerSupportQueue.enqueue("Customer 2 needs help check order status");
customerSupportQueue.enqueue("Customer 3 needs help with refund amount");
console.log("Number of customer requests in the queue: " + customerSupportQueue.size())
console.log("Any request present in queue "+(customerSupportQueue.isEmpty()?"No request yet in queue":"Yes, there are totally "+customerSupportQueue.size()+"request"))
console.log("First request in queue is "+customerSupportQueue.peek())
customerSupportQueue.dequeue();
customerSupportQueue.dequeue();
//customerSupportQueue.dequeue();
//customerSupportQueue.dequeue();
console.log("First request in queue is "+customerSupportQueue.peek())