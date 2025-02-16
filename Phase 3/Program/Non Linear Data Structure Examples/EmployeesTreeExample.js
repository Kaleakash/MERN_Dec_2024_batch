class Employee {
    constructor(name,position){
        this.name = name;
        this.position = position;
        this.subordinates = [];
    }
    addSubordinate(subordinate){
        this.subordinates.push(subordinate);
    }
    displayInfo(){
        console.log("name is "+this.name+", Position "+this.position +", Subordinates ");
        console.log(this.subordinates); // You can further iterate over 
        //console.log(this.subordinates[1].name)
    }

    displayDFSFormat(depth=0){          // Depth First Search Format
console.log("  ".repeat(depth)+" "+this.position+", Name is "+this.name+" Number of people need to report to me "+this.subordinates.length);
        for(let i=0;i<this.subordinates.length;i++){
            this.subordinates[i].displayDFSFormat(depth+1);     // recursive function 
        }
    }
    displayBFSFormat() {
        let queue = [this]; // enqueue the root node, this refer to current object. This is the root node.
        //console.log(queue.length)
        while(queue.length>0){
            let current = queue.shift();// dequeue , remove the first element from the queue
            //console.log(current)
            console.log("  ".repeat(queue.length)+current.position+", Name is "+current.name+" Number of people need to report to me "+current.subordinates.length);
            for(let i=0;i<current.subordinates.length;i++){
                queue.push(current.subordinates[i]); // enqueue the subordinates
            }
        }
    }
}

let ceo = new Employee("John", "CEO");  // Root of the hierarchy ie Root Node 
let cto = new Employee("Mike", "CTO");  // Subordinate of CEO 
let techLead = new Employee("Alice", "Tech Lead");  // Subordinate of CTO 
let hr = new Employee("Sara", "HR");  // Subordinate of CTO 
let developer1 = new Employee("Bob", "Developer");  // Subordinate of Tech Lead 
let developer2 = new Employee("Charlie", "Developer");  // Subordinate of Tech Lead 
let tester1 = new Employee("Lex","Tester"); // Subordinate of Tech Lead
let tester2 = new Employee("Lily","Tester"); // Subordinate of Tech Lead

ceo.addSubordinate(cto);  // CEO has CTO as a subordinate 

cto.addSubordinate(techLead);  // CTO has Tech Lead as a subordinate 
cto.addSubordinate(hr);  // CTO has HR as a subordinate (Note: HR is not a subordinate of Tech Lead)

techLead.addSubordinate(developer1);  // Tech Lead has Developer1 as a subordinate (Note: Developer1 is not a subordinate of HR)
techLead.addSubordinate(developer2);  // Tech Lead has Developer1 as a subordinate (Note: Developer1 is not a subordinate of HR)
techLead.addSubordinate(tester1);  // Tech Lead has tester1 as a subordinate (Note: Tester1 is not a subordinate of HR)
techLead.addSubordinate(tester2);  // Tech Lead has tester2 as a subordinate (Note: Tester2 is not a subordinate of HR)
//ceo.displayInfo();  // Display information for CEO and all subordinates
//ceo.displayDFSFormat();  // Display information for CEO and all subordinates in DFS format
ceo.displayBFSFormat();  // Display information for CEO and all subordinates in BFS format