class Graph {
    constructor(){
        this.adjacencyList = {}; // Initialize an empty object to store the adjacency list
    }
    // addVertex is like a creating or adding node in graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex] ){
            this.adjacencyList[vertex] = []; // Add a key to the adjacency list with an empty array as the value
            console.log("Vertex added as "+vertex); // Log a message indicating that the vertex was added
        }else {
            console.log("Vertex already exists in Graph "+vertex); // If the vertex already exists, log a message
        }
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            console.log("Ready to add edge between "+vertex1+" and "+vertex2); // Log a message indicating that the edge is being added 
            this.adjacencyList[vertex1].push(vertex2); // Add vertex2 to the array of vertex1's neighbors
        }else {
            console.log("Invalid vertex"); // If either vertex does not exist, log a message
        }
    }
    printVertex(){
        console.log(this.adjacencyList)
    }
    printGraph() {
        for(let vertex in this.adjacencyList){
            console.log(vertex + " ---->  " + this.adjacencyList[vertex].join(", ")); // Print each vertex and its neighbors
        }
    }
}
let graph = new Graph(); // Create a new instance of the Graph class
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("A");
graph.printVertex();

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("D","A");
graph.addEdge("C","D");
graph.addEdge("B","D");

graph.addEdge("A","E");
graph.addEdge("F","C");
//graph.printVertex();
graph.printGraph();