class WeightedGraph{
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight){

        if( this.adjacencyList[vertex1] &&  this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push({node: vertex2, weight})
            this.adjacencyList[vertex2].push({node: vertex1, weight})
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        while (this.adjacencyList[vertex].length) {
            const connectedVertex = this.adjacencyList[vertex].pop().node;
            this.removeEdge(connectedVertex, vertex)
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(vertex => vertex.node !== vertex2)

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(vertex => vertex.node !== vertex1)
        }
    }
}

module.exports = WeightedGraph;
const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B",1)
g.addEdge("A", "C",3)
g.addEdge("C", "E",4)
g.addEdge("B", "D",6)
g.addEdge("D", "E",2)
g.addEdge("D", "F",1)
g.addEdge("E", "F",1)



console.log(g.adjacencyList);