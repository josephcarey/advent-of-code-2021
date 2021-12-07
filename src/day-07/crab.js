export class Crab {
    constructor(position, maxPosition, expensiveCosts) {
        this.position = position
        const possiblePositions = Array(maxPosition).fill(0)
        this.possiblePositions = this.getCosts(position, possiblePositions, expensiveCosts)
    }

    getCosts = (position, possiblePositions, expensiveCosts) => {
        return possiblePositions.map((_currentPosition, index) => {
            return this.getSingleCost(Math.abs(position - index), expensiveCosts)
        })
    }

    getSingleCost = (number, expensive) => {
        if(!expensive) {
            return number
        }
        let toReturn = 0
        for(let i = 1; i <= number; i++) {
            toReturn += i
        }
        return toReturn
    }
}

