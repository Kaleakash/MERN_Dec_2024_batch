class Node {
    constructor(value){
        this.value = value; // can be any type of data
        this.next = null;     
    }
}
class SingleLinkedList {
    constructor(){
        console.log("SingleLinkedList constructor")
        this.head = null; // initially, the list is empty
    }
    // Add a new node to the end of the list
    append(value){
        let newNode = new Node(value); // create a new node with the given value
        if(this.head === null){ // if the list is empty, make the new node the head of the list
            this.head = newNode;    // newNode.next is already null, so no need to set it to null again
            console.log("for 1st node")
        } else { // otherwise, find the last node in the list and add the new node after it
            console.log("for 2nd,3rd,4th,nth node")
            let current = this.head;        // start at the head of the list
            while(current.next !== null){
                current = current.next; // move to the next node in the list    
            }
            current.next = newNode; // add the new node after the last node in the list                
        }
    }
    delete(value){
        if(this.head==null){
            console.log("list is empty we can't delete") // if the list is empty, there's nothing to delete, so we can return early and do nothing. This is called an early return or guard claus
            return; // if the list is empty, there's nothing to delete
        }
        // if value is present in first node then we need to delete first node
        if(this.head.value === value){ // if the head node is the one to delete, move the head to the next node in the list{
            console.log("Value present in first node only so it will delete first node")
            this.head = this.head.next; // move the head to the next node in the list
            return;
        }
        let current = this.head; // start at the head of the list
        while(current.next !== null && current.next.value !== value){ // move to the next node in the list until we find the node to delete or reach the end of the list
            console.log("for 2nd,3rd,4th,nth node delete operation")
            current = current.next; // move to the next node in the list
        }
        if(current.next){
            current.next=current.next.next; // remove the node from the list by setting the previous node's next property to the node after the one to delete
        }
    }
    printList() {
        let current = this.head;
        let output = "";
        while(current!==null) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}
let list = new SingleLinkedList();
//list.delete(10); // Output: null
//list.printList(); // Output: null
//list.append(10);
//list.printList()
//list.delete(10); // Output: null
//list.printList(); // Output: null
//list.append(20)
//list.printList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printList(); // Output: 10 -> 20 -> 30 -> 40 -> null
list.delete(30); // delete the node with value 30 from the list
list.printList(); // Output: 10 -> 20 -> 40 -> null