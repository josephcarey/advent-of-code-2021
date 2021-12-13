import { TransparentPaper } from "./transparent-paper.js"

const part1 = (incomingData) => {
    const lines = incomingData.split(/\r?\n/).map(line => line.trim())
    const emptyIndex = lines.findIndex(line => line === '')

    const points = lines.slice(0, emptyIndex).map(point => {
        const chunks = point.split(",")
        return {
            x: Number(chunks[0]),
            y: Number(chunks[1])
        }
    })
    const folds = lines.slice(emptyIndex + 1).map(fold => fold.replace("fold along ", ""))
    
    const pointsMaxX = points.reduce((a, b) => Math.max(a, b.x), 0)
    const pointsMaxY = points.reduce((a, b) => Math.max(a, b.y), 0)

    let startingGrid = [...Array(pointsMaxY + 1).fill([...Array(pointsMaxX + 1).fill(0)])]
    // poor man's cloning / de-referencing -- got buuuurned
    for (let i = 0; i < startingGrid.length; i++) {
        startingGrid[i] = [...startingGrid[i]]
    }
    startingGrid = [...startingGrid]

    for (const point of points) {
        startingGrid[point.y][point.x] = 1
    }

    let paper = new TransparentPaper({
        maxX: pointsMaxX,
        maxY: pointsMaxY,
        grid: startingGrid
    })

    paper.prettyPrint()

    // for(const fold of folds) {
        const fold = folds[0]
        const [axisToSplitAlong, splitOffset] = fold.split("=")
        if(axisToSplitAlong === "y") {
            const [paper1, paper2] = paper.splitVertical(Number(splitOffset))
            console.log('paper1', paper1.state.maxY)
            paper1.prettyPrint()
            console.log('paper2',paper1.state.maxY)
            paper2.prettyPrint()
            paper2.mirrorVertical()
            console.log('paper2 flipped')
            paper2.prettyPrint()
            paper1.combineWithMap(paper2)
            paper = paper1
        } else if (axisToSplitAlong === "x") {
            const [paper1, paper2] = paper.splitHorizontal(Number(splitOffset))
            paper2.mirrorHorizontal()
            paper1.combineWithMap(paper2)
            paper = paper1
            
        } else {
            throw new Error('unrecognized axis!')
        }
        paper.prettyPrint()
    // }
   
    return paper.getTotal()
}

const part2 = (incomingData) => {
    const lines = incomingData.split(/\r?\n/).map(line => line.trim())
    const emptyIndex = lines.findIndex(line => line === '')

    const points = lines.slice(0, emptyIndex).map(point => {
        const chunks = point.split(",")
        return {
            x: Number(chunks[0]),
            y: Number(chunks[1])
        }
    })
    const folds = lines.slice(emptyIndex + 1).map(fold => fold.replace("fold along ", ""))
    
    const pointsMaxX = points.reduce((a, b) => Math.max(a, b.x), 0)
    console.log('pointsMaxX', pointsMaxX)
    const pointsMaxY = points.reduce((a, b) => Math.max(a, b.y), 0)
    console.log('pointsMaxY', pointsMaxY)

    let startingGrid = [...Array(pointsMaxY + 1).fill([...Array(pointsMaxX + 1).fill(0)])]
    // poor man's cloning / de-referencing -- got buuuurned
    for (let i = 0; i < startingGrid.length; i++) {
        startingGrid[i] = [...startingGrid[i]]
    }
    startingGrid = [...startingGrid]

    console.log('startingGrid: ', startingGrid[0].length, startingGrid.length)

    for (const point of points) {
        // console.log(point)
        startingGrid[point.y][point.x] = 1
    }

    let paper = new TransparentPaper({
        maxX: pointsMaxX,
        maxY: pointsMaxY,
        grid: startingGrid
    })

    // paper.prettyPrint()

    for(const fold of folds) {
        console.log('paper size:', paper.state.grid[0].length, paper.state.grid.length)
        console.log('upcoming fold: ', fold)
        const [axisToSplitAlong, splitOffset] = fold.split("=")
        if(axisToSplitAlong === "y") {
            let [paper1, paper2] = paper.splitVertical(Number(splitOffset))
            console.log('paper1', paper1.state.grid.length)
            console.log('paper2',paper2.state.grid.length)
            // paper1.prettyPrint()
            // paper2.prettyPrint()
            paper2 = paper2.mirrorVertical()
            // console.log('paper2 flipped')
            // paper2.prettyPrint()
            paper = paper1.combineWithMap(paper2, fold)
            paper = paper1
        } else if (axisToSplitAlong === "x") {
            const [paper1, paper2] = paper.splitHorizontal(Number(splitOffset))
            console.log('paper1', paper1.state.grid[0].length)
            console.log('paper2',paper2.state.grid[0].length)
            // paper2.mirrorHorizontal()
            paper = paper1.combineWithMap(paper2.mirrorHorizontal(), fold)
            
        } else {
            throw new Error('unrecognized axis!')
        }
        // paper.prettyPrint()
    }
    paper.prettyPrint()

    const test = new TransparentPaper({grid: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0]]})
    const [test1, test2] = test.splitVertical(2)
    test1.prettyPrint()
    test2.prettyPrint()
    const testManipulated = test2.mirrorHorizontal().mirrorVertical()

    // const test2 = new TransparentPaper({grid: [[1, 0, 0], [0, 0, 0], [0, 0, 0]]}).mirrorVertical().mirrorHorizontal()
    const test3 = test1.combineWithMap(testManipulated)
    test3.prettyPrint()
}

export const day13 = {part1, part2}

// Guessed:
// HOGAZKPR

// Correct: HECRZKPR
