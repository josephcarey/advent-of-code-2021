export class Line {
    start = {x: null, y: null}
    end = {x: null, y: null}
    constructor(start, end) {
        if (start.x == end.x || start.y == end.y) {
            this.start.x = getLower(start.x, end.x)
            this.start.y = getLower(start.y, end.y)
            this.end.x = getHigher(start.x, end.x)
            this.end.y = getHigher(start.y, end.y)
        } else {
            this.start.x = start.x
            this.start.y = start.y
            this.end.x = end.x
            this.end.y = end.y
        }
    }

    // Should have treated these as vectors, instead of lines -- calculated the direction
    // and length of both sides on construct (or had helper routines)

    getPoints = () => {
        const points = []
        // if (this.start.x == this.end.x || this.start.y == this.end.y) {
        //     for(let y = this.start.y; y <= this.end.y; y++) {
        //         for(let x = this.start.x; x <= this.end.x; x++) {
        //             points.push({x, y})
        //         }
        //     }
        // } else {
            // guaranteed diagonals in the data
            const xDirection = Number(getSign(this.end.x - this.start.x))
            const yDirection = Number(getSign(this.end.y - this.start.y))
            const longest = getHigher(Math.abs(this.end.x - this.start.x), Math.abs(this.end.y - this.start.y))
            for(let i = 0; i < longest + 1; i++) {
                const newPoint = {
                    x: Number(this.start.x) + (xDirection * i),
                    y: Number(this.start.y) + (yDirection * i)
                }
                points.push(newPoint)
            }
        // }
        return points
    }
}

export class Map {
    points = [[0]]
    constructor (lines) {
        let highestX = lines.reduce((previous, current) => getHigher(previous, getHigher(current.start.x, current.end.x)), 0)
        let highestY = lines.reduce((previous, current) => getHigher(previous, getHigher(current.start.y, current.end.y)), 0)

        this.points = [...Array(highestY + 1).fill([...Array(highestX + 1).fill(0)])]

        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = [...this.points[i]]
        }
        this.points = [...this.points]
    }
    
    addLines = lines => {
        for(const line of lines) {
            this.addLine(line)
        }
    }
    
    addLine = (line) => {
        const linePoints = line.getPoints()
        for (const point of linePoints) {
            this.points[point.y][point.x] = this.points[point.y][point.x] + 1
        }
    }

    countGreaterOrEqual = (number) => this.points.reduce((previous, row) => {
        return previous + row.reduce((prev, cell) => cell >= number ? prev + 1 : prev)
    }, 0)
    

    prettyPrint = () => {
        console.log()
        for(const row of this.points) {
            console.log(row.join(''))
        }
        console.log()
    }
}

const getHigher = (value1, value2) => Math.max(value1, value2)
const getLower = (value1, value2) => Math.min(value1, value2)
const getSign = number => number && number / Math.abs(number)