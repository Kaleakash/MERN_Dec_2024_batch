class CustomerSupportQueue {
    constructor() {
        this.queue = [];
        this.MAX_REQUEST_IN_QUEUE=3;
    }
    enqueue(customerRequest) {          // adding 
        if(this.queue.length<this.MAX_REQUEST_IN_QUEUE){
        this.queue.push(customerRequest);
        console.log("Customer request added to the queue."+customerRequest);
        }else {
            console.log("Customer request can't be added to the queue."+customerRequest);
        }
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
customerSupportQueue.enqueue("Customer 1 needs help with Account Password reset");
customerSupportQueue.enqueue("Customer 2 needs help check order status");
customerSupportQueue.enqueue("Customer 3 needs help with refund amount");
customerSupportQueue.enqueue("Customer 4 needs help with create the account");
console.log("Number of customer requests in the queue: " + customerSupportQueue.size())
console.log("Any request present in queue "+(customerSupportQueue.isEmpty()?"No request yet in queue":"Yes, there are totally "+customerSupportQueue.size()+"request"))
console.log("First request in queue is "+customerSupportQueue.peek())
customerSupportQueue.dequeue();
customerSupportQueue.dequeue();
//customerSupportQueue.dequeue();
//customerSupportQueue.dequeue();
console.log("First request in queue is "+customerSupportQueue.peek())