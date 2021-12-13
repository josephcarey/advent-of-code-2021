export class TransparentPaper {
    state = {
        maxX: undefined,
        maxY: undefined,
        grid: []
    }
    constructor(state) {
        this.state = state
    }

    mirrorVertical = () => new TransparentPaper({
        ...this.state,
        grid: [...this.state.grid].reverse()
    })

    mirrorHorizontal = () => new TransparentPaper({
        ...this.state,
        grid: [...this.state.grid.map(row => [...row].reverse())]
        // for(const row of this.state.grid) {
        //     row.reverse()
        // }
    })
    // return two separate TransparentPapers
    splitVertical = (offset) => {
        // const isEqualSplit = this.state.grid.length - offset == offset
        // console.log('isEqualSplit: ', isEqualSplit)
        console.log('\ty of 1: ', offset - 1)
        console.log('\ty of 2: ', this.state.grid.length - (offset + 1))
        const paper1State = {
            ...this.state,
            maxY: offset,
            grid: this.state.grid.slice(0, offset)
        }
        const paper2State = {
            ...this.state,
            maxY: offset,
            grid: this.state.grid.slice(offset + 1)
        }
        console.log('\t', paper2State.grid.length)
        console.log('\t', paper1State.grid.length)
        if(paper2State.grid.length < paper1State.grid.length) {
            console.log('padding y...')
            paper2State.grid.push([...Array(paper2State.grid[0].length).fill(0)])
        }
        return [
            new TransparentPaper(paper1State),
            new TransparentPaper(paper2State)
        ]
    }
    
    // return two separate TransparentPapers
    splitHorizontal = (offset) => {
        // const isEqualSplit = this.state.grid.length - offset == offset
        // console.log('isEqualSplit: ', isEqualSplit)
        console.log('\tx of 1: ', offset - 1)
        console.log('\tx of 2: ', this.state.grid[0].length - (offset + 1))
        const paper1State = {
            ...this.state,
            maxX: offset,
            grid: this.state.grid.map(row => row.slice(0, offset))
        }
        const paper2State = {
            ...this.state,
            maxX: offset,
            grid: this.state.grid.map(row => row.slice(offset + 1))
        }
        console.log('\t', paper2State.grid[0].length)
        console.log('\t', paper1State.grid[0].length)
        if(paper2State.grid[0].length < paper1State.grid[0].length) {
            console.log('padding x...')
            paper2State.grid = paper2State.grid.map(row => [...row, 0])
        }
        return [
            new TransparentPaper(paper1State),
            new TransparentPaper(paper2State)
        ]
    }

    combineWithMap = (incomingMap, fold) => {
        for(let y = 0; y < incomingMap.state.grid.length; y++) {
            // console.log('at:')
            // console.log(this.state.grid[y])
            for(let x = 0; x < incomingMap.state.grid[0].length; x++) {
                if(this.state.grid[y][x] == 1) {continue}
                // console.log(incomingMap.state.grid)
                this.state.grid[y][x] = incomingMap.state.grid[y][x] === 1 ? 1 : 0
            }
        }
        return new TransparentPaper(this.state)
    }

    getTotal = () => this.state.grid.reduce((prev, curr) => prev + curr.reduce((prev, curr) => prev + curr, 0), 0)

    prettyPrint = () => {
        console.log()
        for(const row of this.state.grid) {
            console.log(row.map(cell => cell == 1 ? "█" : "░").join(""))
        }
        // for(let y = 0; y < this.state.grid.length; y++) {
            
            // for(let x = 0; x < this.state.grid[0].length; x++) {
            //     process.stdout.write(String(this.state.grid[y][x]))
            // }
            // process.stdout.write(`\r`)
        // }
    }
}