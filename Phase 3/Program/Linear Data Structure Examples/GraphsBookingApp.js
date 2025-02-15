class Graph {
    constructor(){
        this.adjacencyList = {}; 
    }
    // Add the cities
    addCity(city){
        if(!this.adjacencyList[city] ){
            this.adjacencyList[city] = []; 
            console.log("city added as "+city); 
        }else {
            console.log(city+" city already exists in Graph "); 
        }
    }
    getDirectFlights(city){
        return this.adjacencyList[city] || []; // Return an empty array if the city does not exist in the graph[
    }
    // Add the routes
    addRoute(city1, city2,price){
        if(this.adjacencyList[city1] && this.adjacencyList[city2]){
            console.log("Ready to add edge between "+city1+" and "+city2+" route");  
            this.adjacencyList[city1].push({city:city2,price:price}); 
            this.adjacencyList[city2].push({city:city1,price:price});
        }else {
            console.log("Invalid city names provided"); 
        }
    }
    printRouteDetails() {
        console.log("Flight routes from ")
        for(let sourceCity in this.adjacencyList){
        let route = this.adjacencyList[sourceCity].map((route)=>route.city+", Rs."+route.price);
        console.log(sourceCity+" -> "+route.join(", "));
        //console.log(city)
        }
    }
    printCityDetails() {
        console.log(this.adjacencyList)
    }
}
let graph = new Graph(); // Create a new instance of the Graph class
graph.addCity("Delhi");
graph.addCity("Bangalore");
graph.addCity("Mumbai");
graph.addCity("Pune");
graph.addCity("Chennai");
graph.addCity("Bangalore");

graph.addRoute("Bangalore","Delhi",5600);

graph.addRoute("Bangalore","Mumbai",6000);
graph.addRoute("Bangalore","Chennai",3400);
graph.addRoute("Delhi","Mumbai",2050);  

graph.addRoute("Bangalore","Mysore",2050);  

graph.printCityDetails();

graph.printRouteDetails();
console.log("----------------------------------------")
let bangaloreFlight = graph.getDirectFlights("Bangalore");
if(bangaloreFlight){
    if(bangaloreFlight.length==0){
        console.log("No direct flights available from Bangalore");
    }else {
        console.log("Direct flights from Bangalore are: ");
        bangaloreFlight.forEach((flight)=>{
            console.log(flight.city+" - Rs."+flight.price);
        });
    }
    
}else {
    console.log("No direct flights available from Bangalore");
}
console.log("----------------------------------------")
let mysoreFlight = graph.getDirectFlights("Mysore");
if(mysoreFlight){
    if(mysoreFlight.length==0){
        console.log("No direct flights available from Mysore");
    }else {
        console.log("Direct flights from Mysore are: ");
        mysoreFlight.forEach((flight)=>{
            console.log(flight.city+" - Rs."+flight.price);
        });
    }

}else {
    console.log("No direct flights available from Mysore");
}