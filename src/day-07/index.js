import { Crab } from './crab.js'

const part1 = (incomingData) => { 

    const furthestPosition = incomingData.reduce((acc, curr) => Math.max(acc, curr), 0)
    const crabs = incomingData.map(datum => new Crab(datum, furthestPosition, false))

    const costArray = Array(furthestPosition).fill(0)
    const finalCosts = costArray.map((_item, index) => {
        return crabs.reduce((prev, curr) => {
            return prev + curr.possiblePositions[index]
        }, 0)
    })

    return finalCosts.reduce((prev, curr) => Math.min(prev, curr))
}

const part2 = (incomingData) => {
    
    const furthestPosition = incomingData.reduce((acc, curr) => Math.max(acc, curr), 0)
    const crabs = incomingData.map(datum => new Crab(datum, furthestPosition, true))

    const costArray = Array(furthestPosition).fill(0)
    const finalCosts = costArray.map((_item, index) => {
        return crabs.reduce((prev, curr) => {
            return prev + curr.possiblePositions[index]
        }, 0)
    })

    return finalCosts.reduce((prev, curr) => Math.min(prev, curr))
}

export const day07 = {part1, part2}