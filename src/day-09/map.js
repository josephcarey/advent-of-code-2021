class Point {
    constructor(height, couldBeLowest, position) {
        this.height = height
        this.couldBeLowest = couldBeLowest
        this.position = position
        this.isLowest = false
    }

    markAndGetNeighborPositions = () => {
        this.couldBeLowest = false
        return [
            {
                x: this.position.x + 1,
                y: this.position.y
            },
            {
                x: this.position.x - 1,
                y: this.position.y
            },
            {
                x: this.position.x,
                y: this.position.y + 1
            },
            {
                x: this.position.x,
                y: this.position.y - 1
            },
        ]
    }
}

export class Map {
    constructor(mapStrings) {
        this.points = [...Array(mapStrings.length + 1).fill([...Array(mapStrings[0].length + 1).fill(0)])]
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = [...this.points[i]]
        }
        this.points = [...this.points]

        this.points = mapStrings.map((mapString, yIndex) => {
            return mapString.split("").map((num, xIndex) => {
                return new Point(
                    Number(num),
                    num == 9 ? false : true,
                    {
                        x: xIndex,
                        y: yIndex
                    }
                )
            })
        })

        let sum = 0
        let basins = []
        for(let i = 0; i <= 9; i++) {
            // console.log('current index: ', i)
            for(let y = 0; y < this.points.length; y++) {
                for(let x = 0; x < this.points[0].length; x++) {
                    const currentPoint = this.points[y][x]
                    // console.log('currentPoint: ', currentPoint)
                    if(currentPoint.height === i && currentPoint.couldBeLowest) {
                        let basinSize = 1
                        sum += (1 + currentPoint.height)
                        currentPoint.isLowest = true
                        let arrayToMark = [...currentPoint.markAndGetNeighborPositions()]
                        while(arrayToMark.length > 0) {
                            // console.log('arrayToMark: ', arrayToMark)
                            const aboutToMark = arrayToMark.shift()
                            // console.log('aboutToConsider: ', aboutToMark)
                            if(aboutToMark.x < 0 || aboutToMark.x > (this.points[0].length - 1) || aboutToMark.y < 0 || aboutToMark.y > (this.points.length - 1)) {
                                // console.log('out of bounds, discarding')
                                continue
                            }
                            const aboutToMarkPoint = this.points[aboutToMark.y][aboutToMark.x]
                            if(!aboutToMarkPoint.couldBeLowest) {
                                // console.log('invalid candidate')
                                continue
                            }
                            if(aboutToMarkPoint.height == 9) {
                                // console.log('already top height')
                                continue
                            }
                            // console.log('marking: ', aboutToMarkPoint.position)
                            basinSize++
                            arrayToMark = [...arrayToMark, ...aboutToMarkPoint.markAndGetNeighborPositions()]
                        }
                        basins.push(basinSize)
                    }
                }
            }
            // this.prettyPrint()
        }
        this.riskSum = sum
        this.basins = basins.sort((a, b) => b - a)
    }

    prettyPrint = () => {
        for(let y = 0; y < this.points.length; y++) {
            console.log(
                this.points[y][0].couldBeLowest ? "O" : "X" + this.points[y][0].position.x + this.points[y][0].position.y, 
                this.points[y][1].couldBeLowest ? "O" : "X" + this.points[y][1].position.x + this.points[y][1].position.y,
                this.points[y][2].couldBeLowest ? "O" : "X" + this.points[y][2].position.x + this.points[y][2].position.y,
                this.points[y][3].couldBeLowest ? "O" : "X" + this.points[y][3].position.x + this.points[y][3].position.y,
                this.points[y][4].couldBeLowest ? "O" : "X" + this.points[y][4].position.x + this.points[y][4].position.y,
                this.points[y][5].couldBeLowest ? "O" : "X" + this.points[y][5].position.x + this.points[y][5].position.y,
                this.points[y][6].couldBeLowest ? "O" : "X" + this.points[y][6].position.x + this.points[y][6].position.y,
                this.points[y][7].couldBeLowest ? "O" : "X" + this.points[y][7].position.x + this.points[y][7].position.y,
                this.points[y][8].couldBeLowest ? "O" : "X" + this.points[y][8].position.x + this.points[y][8].position.y,
                this.points[y][9].couldBeLowest ? "O" : "X" + this.points[y][9].position.x + this.points[y][9].position.y
            )
        }
    }

}