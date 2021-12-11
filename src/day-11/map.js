export class Map {
    constructor(mapStrings) {
        this.maxY = mapStrings.length
        this.maxX = mapStrings[0].length
        this.points = [...Array(this.maxY + 1).fill([...Array(this.maxX + 1).fill(0)])]
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

    isInBounds = (position) => {
        return position.x >= 0 && position.x < this.maxX && position.y >= 0 && position.y < this.maxY
    }

    forEachInMap = (functionToCall) => {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                const newPoint = functionToCall(this.points[y][x])
                // console.log('newPoint: ', newPoint)
                 this.points[y][x] = newPoint
            }
        }
    }

    foundInMap = (comparator) => {
        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                if(comparator(this.points[y][x])) {return true}
            }
        }
        return false
    }

    prettyPrint = () => {
        console.log()
        for(let y = 0; y < this.points.length; y++) {
            console.log(
                this.points[y][0].number,
                this.points[y][1].number,
                this.points[y][2].number,
                this.points[y][3].number,
                this.points[y][4].number,
                this.points[y][5].number,
                this.points[y][6].number,
                this.points[y][7].number,
                this.points[y][8].number,
                this.points[y][9].number
            )
        }
    }

    prettyPrintIncrement = () => {
        console.log()
        for(let y = 0; y < this.points.length; y++) {
            console.log(
                this.points[y][0].incrementBy,
                this.points[y][1].incrementBy,
                this.points[y][2].incrementBy,
                this.points[y][3].incrementBy,
                this.points[y][4].incrementBy,
                this.points[y][5].incrementBy,
                this.points[y][6].incrementBy,
                this.points[y][7].incrementBy,
                this.points[y][8].incrementBy,
                this.points[y][9].incrementBy
            )
        }
    }

}