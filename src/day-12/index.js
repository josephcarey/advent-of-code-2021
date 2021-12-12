class Node {
    name = undefined
    isLarge = undefined
    connections = []
    constructor(initString) {
        this.name = initString
        this.isLarge = initString.toUpperCase() == initString
    }

    addConnection = (newConnection) => this.connections.push(newConnection)
    getConnections = () => this.connections

}

class PathFinder {
    state = {
        path: [],
        pathFound: false,
        deadEnd: false,
        smallCaveExceptionUsed: false
    }
    constructor(state) {
        this.state = state
        const currentNode = this.state.path[this.state.path.length - 1]
        if(currentNode == "end") {
            this.state = {
                ...this.state,
                pathFound: true
            }
        }
    }

    getPathFindersForNextPossibleSteps = nodes => {
        const currentNode = this.state.path[this.state.path.length - 1]
        const possiblePaths = nodes.get(currentNode).getConnections().filter(node => nodes.get(node).name !== "start")
        const unvisitedPossiblePaths = this.state.smallCaveExceptionUsed ? possiblePaths.filter(node => nodes.get(node).isLarge || !this.state.path.includes(node)) : possiblePaths
        
        if(unvisitedPossiblePaths.length == 0) {
            this.deadEnd = true
            return []
        }

        return unvisitedPossiblePaths.map(nextNode => new PathFinder({
            ...this.state,
            path: [...this.state.path, nextNode],
            smallCaveExceptionUsed: this.state.smallCaveExceptionUsed == true ? true : !nodes.get(nextNode).isLarge && this.state.path.includes(nextNode)
        }))
    }
}

const part1 = (incomingData) => {
    const nodes = new Map()

    for(const connectionString of incomingData) {
        const nodesReferenced = connectionString.split('-')
        if(!nodes.has(nodesReferenced[0])) {
            nodes.set(nodesReferenced[0], new Node(nodesReferenced[0]))
        }
        if(!nodes.has(nodesReferenced[1])) {
            nodes.set(nodesReferenced[1], new Node(nodesReferenced[1]))
        }
        nodes.get(nodesReferenced[0]).addConnection(nodesReferenced[1])
        nodes.get(nodesReferenced[1]).addConnection(nodesReferenced[0])
    }

    let foundPaths = []
    let deadEnds = []
    let pathFinders = [new PathFinder({path: ['start'], smallCaveExceptionUsed: true})]

    while(pathFinders.length > 0) {
        pathFinders = pathFinders.map(pathFinder => pathFinder.getPathFindersForNextPossibleSteps(nodes)).flat()
        foundPaths.push(...pathFinders.filter(pathFinder => pathFinder.state.pathFound))
        deadEnds.push(...pathFinders.filter(pathFinder => pathFinder.state.deadEnd))
        pathFinders = pathFinders.filter(pathFinder => !pathFinder.state.pathFound && !pathFinder.state.deadEnd)
    }
   
    return foundPaths.length
}

const part2 = (incomingData) => {

    const nodes = new Map()

    for(const connectionString of incomingData) {
        const nodesReferenced = connectionString.split('-')
        if(!nodes.has(nodesReferenced[0])) {
            nodes.set(nodesReferenced[0], new Node(nodesReferenced[0]))
        }
        if(!nodes.has(nodesReferenced[1])) {
            nodes.set(nodesReferenced[1], new Node(nodesReferenced[1]))
        }
        nodes.get(nodesReferenced[0]).addConnection(nodesReferenced[1])
        nodes.get(nodesReferenced[1]).addConnection(nodesReferenced[0])
    }

    let foundPaths = []
    let deadEnds = []
    let pathFinders = [new PathFinder({path: ['start']})]

    while(pathFinders.length > 0) {
        pathFinders = pathFinders.map(pathFinder => pathFinder.getPathFindersForNextPossibleSteps(nodes)).flat()
        foundPaths.push(...pathFinders.filter(pathFinder => pathFinder.state.pathFound))
        deadEnds.push(...pathFinders.filter(pathFinder => pathFinder.state.deadEnd))
        pathFinders = pathFinders.filter(pathFinder => !pathFinder.state.pathFound && !pathFinder.state.deadEnd)

        // for fun I also tried a for..of loop that distributed by foundPath / deadEnd / continuing,
        // and I tried forEach and pushing into each,
        // and I tried a reduce to an object with three arrays --
        // all were within computer performance variables of each other, as far as I could tell.
        // this is my original and I think the clearest (?) so I'm leaving it.
    }

    return foundPaths.length
    
}

export const day12 = {part1, part2}