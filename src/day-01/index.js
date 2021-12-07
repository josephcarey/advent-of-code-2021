const part1 = (incomingData) => {
    
    let countGreater = 0;
    
    for(let i = 1; i < incomingData.length; i++ ) {
        const currentSum = incomingData[i]
        const previousSum = incomingData[i - 1]
        countGreater = (currentSum - previousSum) > 0 ? ++countGreater : countGreater
        
    }
    
    return countGreater
}

const part2 = (incomingData) => {

    let countGreater = 0;
    
    for(let i = 3; i < incomingData.length; i++ ) {
        const currentSum = incomingData[i] + incomingData[i - 1] + incomingData[i - 2]
        const previousSum = incomingData[i - 1] + incomingData[i - 2] + incomingData[i - 3]
        countGreater = (currentSum - previousSum) > 0 ? ++countGreater : countGreater
        
    }

    return countGreater
}

export const day01 = {part1, part2}