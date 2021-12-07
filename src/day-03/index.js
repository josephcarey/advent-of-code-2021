const getTotalForIndex = (currentNumbers, index) => currentNumbers.reduce((acc, curr) => acc + curr[index], 0)
const getMoreCommonForIndex = (currentNumbers, index) => (getTotalForIndex(currentNumbers, index) >= (currentNumbers.length / 2)) ? 1 : 0
const getLessCommonForIndex = (currentNumbers, index) => (getTotalForIndex(currentNumbers, index) >= (currentNumbers.length / 2)) ? 0 : 1
const filterOutBit = (currentNumbers, index, toFilter) => currentNumbers.filter(numbers => numbers[index] != toFilter)

const part1 = (incomingData) => {

    const lengthOfDataChunks = incomingData[0].length
    
    let finalBits = Array(lengthOfDataChunks).fill(0)
    let gammaRate = Array(lengthOfDataChunks).fill(0)
    let epsilonRate = Array(lengthOfDataChunks).fill(0)
    
    for (const datum of incomingData) {
        const workingBits = datum.split("")
        for(let i = 0; i < workingBits.length; i++) {
            finalBits[i] += Number(workingBits[i])
        }
    }
    
    const halfway = incomingData.length / 2
    
    for(let i = 0; i < finalBits.length; i++) {
        if(finalBits[i] > halfway) {
            gammaRate[i] = 1
        } else {
            epsilonRate[i] = 1
        }
    }

    return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2)
}

const part2 = (incomingData) => {

    const parsedData = incomingData.map((input) => input.split('').map(number => Number(number)))

    let oxGenData = [...parsedData]
    let coScrubData = [...parsedData]

    for(let i = 0; i < parsedData[0].length; i++) {
        oxGenData = oxGenData.length > 1 ? filterOutBit(oxGenData, i, getLessCommonForIndex(oxGenData, i)) : oxGenData
        coScrubData = coScrubData.length > 1 ? filterOutBit(coScrubData, i, getMoreCommonForIndex(coScrubData, i)) : coScrubData
    }

    const oxGenInt = parseInt(oxGenData[0].join(''), 2)
    const coScrubInt = parseInt(coScrubData[0].join(''), 2)
     
    return oxGenInt * coScrubInt
}

export const day03 = {part1, part2}