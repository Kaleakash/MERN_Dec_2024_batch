class Node {
    constructor(songName){
        this.songName = songName;
        this.next = null;     
    }
}
class SingleLinkedList {
    constructor(){
        this.head = null; 
    }
    append(value){
        let newNode = new Node(value);
        if(this.head === null){ 
            this.head = newNode;   
        } else { 
            let current = this.head;        
            while(current.next !== null){
                current = current.next; 
            }
            current.next = newNode;              
        }
    }
    delete(songName){
        if(this.head==null){
            return;
        }
        if(this.head.songName === songName){ 
            this.head = this.head.next; 
            return;
        }
        let current = this.head; 
        while(current.next !== null && current.next.songName !== songName){ 
            current = current.next; 
        }
        if(current.next){
            current.next=current.next.next;
        }
    }
    printList() {
        let current = this.head;
        let output = "";
        while(current!==null) {
            output = output+"Playing "+current.songName + " -> ";
            current = current.next;
        }
        console.log(output + "Finished");
    }
}
let list = new SingleLinkedList();
list.append("Song 1");
list.append("Song 2");
list.append("Song 3");
list.append("Song 4");
list.printList();
list.delete("Song 2");
list.printList();


