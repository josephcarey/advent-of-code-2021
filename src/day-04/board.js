

export class Board {
    info = {}

    numbers = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    
    constructor(numbersData, info) {
        this.info = {
            name: info.name,
            winner: info.winner || false,
            winCondition: info.winCondition || '',
            score: info.score || undefined

        }
        this.numbers = numbersData
    }

    handleNewNumber = (number) => {
        if (this.winner) {
            return new Board(this.numbers, this.info)
        }
        this.markNumber(number)
        const win = this.checkWin()
        if (win) {
            this.info.winner = true
            this.calculateBoard(number)
        }

        return new Board(this.numbers, this.info)
    }
    
    markNumber = (number) => {
        this.numbers = this.numbers.map((row) => row.map(cell => {
            return {
                number: cell.number,
                marked: cell.marked ? cell.marked : cell.number == number
            }
        }))
    }

    checkWin = () => {
        for(let i = 0; i < this.numbers.length; i++) {

            // check rows
            if (this.allMarked(this.numbers[i])) {
                this.info.winCondition = `Row ${i+1}`
                return true
            }
            
            // check columns
            if (this.allMarked(this.numbers.map(row => row[i]))) {
                this.info.winCondition = `Column ${i+1}`
                return true
            }
            
        }
        
        const diagonal1 = [this.numbers[0][0], this.numbers[1][1], this.numbers[2][2], this.numbers[3][3], this.numbers[4][4]]
        const diagonal2 = [this.numbers[0][4], this.numbers[1][3], this.numbers[2][2], this.numbers[3][1], this.numbers[4][0]]    
        
        // check diagonal 1
        // if (this.allMarked(diagonal1)) {
        //     this.info.winCondition = `Diagonal 1`
        //     return true
        // }
        
        // check diagonal 2
        // if (this.allMarked(diagonal2)) {
        //     this.info.winCondition = `Diagonal 2`
        //     return true
        // }
        return false
    }

    allMarked = (numbers) => {
        return numbers.reduce((accumulator, current) => {
            return accumulator + Number(current.marked)
        }, 0) == numbers.length
    }

    prettyLog = () => {
        const marked = "X"
        const unmarked = " "

        console.log()
        console.log(this.numbers[0][0].marked ? marked : unmarked, this.numbers[0][1].marked ? marked : unmarked, this.numbers[0][2].marked ? marked : unmarked, this.numbers[0][3].marked ? marked : unmarked, this.numbers[0][4].marked ? marked : unmarked)
        console.log(this.numbers[1][0].marked ? marked : unmarked, this.numbers[1][1].marked ? marked : unmarked, this.numbers[1][2].marked ? marked : unmarked, this.numbers[1][3].marked ? marked : unmarked, this.numbers[1][4].marked ? marked : unmarked)
        console.log(this.numbers[2][0].marked ? marked : unmarked, this.numbers[2][1].marked ? marked : unmarked, this.numbers[2][2].marked ? marked : unmarked, this.numbers[2][3].marked ? marked : unmarked, this.numbers[2][4].marked ? marked : unmarked)
        console.log(this.numbers[3][0].marked ? marked : unmarked, this.numbers[3][1].marked ? marked : unmarked, this.numbers[3][2].marked ? marked : unmarked, this.numbers[3][3].marked ? marked : unmarked, this.numbers[3][4].marked ? marked : unmarked)
        console.log(this.numbers[4][0].marked ? marked : unmarked, this.numbers[4][1].marked ? marked : unmarked, this.numbers[4][2].marked ? marked : unmarked, this.numbers[4][3].marked ? marked : unmarked, this.numbers[4][4].marked ? marked : unmarked)
        console.log()
    }

    calculateBoard = (lastMarked) => {
        // console.log(`Board ${this.info.name} wins by ${this.info.winCondition}`)
        // this.prettyLog()
        const totalUnmarked = this.numbers.reduce((accumulator, row) => {
            return accumulator + row.reduce((acc, cell) => {
                return acc + (cell.marked ? 0 : cell.number)
            }, 0)
        } ,0)

        this.info.score = totalUnmarked * lastMarked
        // console.log(`\tScore: ${totalUnmarked} x ${lastMarked} = ${this.info.score}`)
    }
}