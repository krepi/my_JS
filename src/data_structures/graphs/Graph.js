class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        while (this.adjacencyList[vertex].length) {
            const connectedVertex = this.adjacencyList[vertex].pop();

            this.removeEdge(connectedVertex, vertex)
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(vertex => vertex !== vertex2)

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(vertex => vertex !== vertex1)
        }
    }

    DFS(start) {
        const data = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return
            visited[vertex] = true;
            data.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return data;
    }

    BFS(start) {
        const queue = [];
        const result = []
        const visited = {};
        const adjacencyList = this.adjacencyList;
        visited[start] = true;
        queue.push(start);

        while (queue.length !== 0) {
            let vertex = queue.shift();
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor)
                    visited[neighbor] = true;
                }
            })

        }

        return result
    }

}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("C", "E")
g.addEdge("B", "D")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.adjacencyList)
console.log(g.DFS("A"))
console.log(g.BFS("A"))
// g.removeEdge("Oslo","Beijing")
