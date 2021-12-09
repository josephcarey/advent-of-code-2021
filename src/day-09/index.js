import {Map} from './map.js'

const part1 = (incomingData) => { 

    const map = new Map(incomingData)
    
    return map.riskSum
}

const part2 = (incomingData) => {
    
    const map = new Map(incomingData)
    const basins = map.basins
    return basins[0] * basins[1] * basins[2]
    
}

export const day09 = {part1, part2}