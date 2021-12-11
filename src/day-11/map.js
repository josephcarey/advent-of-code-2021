export class Map {
    constructor(mapStrings) {
        this.maxY = mapStrings.length
        this.maxX = mapStrings[0].length
        
        // initialize the size
        this.points = [...Array(this.maxY + 1).fill([...Array(this.maxX + 1).fill(0)])]
        // poor man's cloning / de-referencing -- got buuuurned
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = [...this.points[i]]
        }
        this.points = [...this.points]

        this.points = mapStrings.map((mapString, yIndex) => {
            return mapString.split("").map((num, xIndex) => {
                return {
                    position: {x: xIndex, y: yIndex},
                    number: Number(num),
                    flashedThisStep: false,
                    incrementBy: 0
                }
            })
        })
    }

    isInBounds = (position) => position.x >= 0 && position.x < this.maxX &&
        position.y >= 0 && position.y < this.maxY

    // setPoint = (point) => {
    //     console.log('toSet: ', point)
    //     console.log('current: ', this.points[point.position.y][point.position.x])
    //     this.points[point.position.y][point.position.x] = {...point}
    //     console.log('after: ', this.points[point.position.y][point.position.x])
    // }

    forEachInMap = (functionToCall) => {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                const newPoint = functionToCall(this.points[y][x])
                 this.points[y][x] = newPoint
            }
        }
    }

    mapMap = (functionToCall) => this.points.map(row => row.map(cell => functionToCall(cell)))

    foundInMap = (comparator) => {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                if(comparator(this.points[y][x])) {return true}
            }
        }
        return false
    }

    getAdjacentPoints = (point, getDiagonal) => {
        const {position: {x, y}} = point
        return [
            {x: x, y: y + 1},
            {x: x, y: y - 1},
            {x: x + 1, y: y},
            {x: x - 1, y: y},
            getDiagonal ? {x: x - 1, y: y - 1} : undefined,
            getDiagonal ? {x: x + 1, y: y - 1} : undefined,
            getDiagonal ? {x: x - 1, y: y + 1} : undefined,
            getDiagonal ? {x: x + 1, y: y + 1} : undefined,
        ]
            .filter(item => item)
            .map(item => this.isInBounds(item) ? this.points[item.y][item.x] : undefined)
            .filter(item => item)
    }

    prettyPrint = (propName) => {
        console.log()
        for(let y = 0; y < this.points.length; y++) {
            console.log(
                this.points[y][0][propName],
                this.points[y][1][propName],
                this.points[y][2][propName],
                this.points[y][3][propName],
                this.points[y][4][propName],
                this.points[y][5][propName],
                this.points[y][6][propName],
                this.points[y][7][propName],
                this.points[y][8][propName],
                this.points[y][9][propName]
            )
        }
    }
}