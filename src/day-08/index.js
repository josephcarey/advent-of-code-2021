import {Display} from './classes.js'

const part1 = (incomingData) => { 

    const secondBits = incomingData.map(datum => datum.split(" | ")[1])
    const pieces = secondBits.map(bits => bits.split(" ")).flat()
    const relevantPieces = pieces.filter(piece => piece.length === 2 || piece.length === 3 || piece.length === 4 || piece.length === 7)

    return relevantPieces.length
}

const part2 = (incomingData) => {

    const displays = incomingData.map(datum => new Display(datum))
    return displays.reduce((prev, curr) => prev + curr.decode(), 0)
    
}

export const day08 = {part1, part2}