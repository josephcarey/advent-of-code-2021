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
        const possiblePaths = nodes.get(currentNode).connections
        const unvisitedPossiblePaths = this.state.smallCaveExceptionUsed ? possiblePaths.filter(node => nodes.get(node).isLarge || !this.state.path.includes(node)) : possiblePaths
        const sansStart = unvisitedPossiblePaths.filter(node => nodes.get(node).name !== "start")
        
        // const unvisitedPossiblePaths = sizeAppropriateCaves.filter(node => !this.state.path.includes(node))
        if(sansStart.length == 0) {
            this.deadEnd = true
            return []
        }
        
        return sansStart.map(nextNode => new PathFinder({
            ...this.state,
            path: [...this.state.path, nextNode],
            // smallCaveExceptionUsed: true
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
        // console.log('foundPaths: ', foundPaths.length, 'pathFinders: ', pathFinders.length)
        // console.log()
        // console.log('foundPaths: ')
        // console.log(foundPaths.map(path => path.state.path))
        // console.log('pathFinders: ')
        // console.log(pathFinders.map(path => path.state.path))
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
        // for(let i = 0; i < 5; i++) {
        pathFinders = pathFinders.map(pathFinder => pathFinder.getPathFindersForNextPossibleSteps(nodes)).flat()
        foundPaths.push(...pathFinders.filter(pathFinder => pathFinder.state.pathFound))
        deadEnds.push(...pathFinders.filter(pathFinder => pathFinder.state.deadEnd))
        pathFinders = pathFinders.filter(pathFinder => !pathFinder.state.pathFound && !pathFinder.state.deadEnd)
        // console.log('foundPaths: ', foundPaths.length, 'pathFinders: ', pathFinders.length)
        console.log()
        console.log('foundPaths: ')
        console.log(foundPaths.map(path => path.state.path))
        console.log('pathFinders: ')
        console.log(pathFinders.map(path => path.state.path))
    }

    
    return foundPaths.length
    
}

export const day12 = {part1, part2}