import {ObjectList} from '../utils/index.js'

const braces = new ObjectList ([
    {
        open: "(",
        close: ")",
        corruptValue: 3,
        closingValue: 1
    },
    {
        open: "[",
        close: "]",
        corruptValue: 57,
        closingValue: 2
    },
    {
        open: "{",
        close: "}",
        corruptValue: 1197,
        closingValue: 3
    },
    {
        open: "<",
        close: ">",
        corruptValue: 25137,
        closingValue: 4
    }
])

const getClosingFromOpening = braces.getGetBy('open', 'close')
const getCorruptValueFromClosingBrace = braces.getGetBy('close', 'corruptValue')
const getFinishScoreFromClosingBrace = braces.getGetBy('close', 'closingValue')

const isOpeningBrace = braces.getValidCheck('open')
const isClosingBrace = braces.getValidCheck('close')

const braceCorresponds = braces.getCorrespondCheck('open', 'close')

class Line {
    workingArray = []
    constructor(initialString) {
        this.initialArray = initialString.split("")
        this.workingArray = initialString.split("")
    }

    getFirstInvalidBrace = () => {
        let openBraces = []
        for(const current of this.workingArray) {
            
            if(isOpeningBrace(current)) {
                openBraces.push(current)
            } else if (isClosingBrace(current)) {
                const mostRecentOpenBrace = openBraces.pop()
                if(braceCorresponds(mostRecentOpenBrace, current)) {
                    continue
                } else {
                    // console.log('at index: ', i, 'trying to pair: ', mostRecentOpenBrace, 'got: ', current)
                    return current
                }
            } else {
                throw new Error(`Unrecognized Element: ${current}`)
            }
        }
        openBraces.reverse()
        const toFinish = openBraces.map(item => getClosingFromOpening(item))
        const toFinishScores = toFinish.map(item => getFinishScoreFromClosingBrace(item))
        const score = toFinishScores.reduce((prev, curr) => ((prev * 5) + curr), 0)
        this.toFinishScore = score
        return undefined

    }

}


const part1 = (incomingData) => {

    const lines = incomingData.map(datum => new Line(datum))
    const firstInvalids = lines.map(line => line.getFirstInvalidBrace()).filter(item => item)
    const scores = firstInvalids.map(invalidClose => getCorruptValueFromClosingBrace(invalidClose))
    const score = scores.reduce((prev, curr) => prev + curr, 0)
    
    return score
}

const part2 = (incomingData) => {
    
    const lines = incomingData.map(datum => new Line(datum))
    const _firstInvalids = lines.map(line => line.getFirstInvalidBrace()).filter(item => item)
    const toFinishScores = lines.map(line => line.toFinishScore).filter(item => item).sort((a, b) => a - b)
    const middle = Math.floor(toFinishScores.length / 2)

    return toFinishScores[middle]
    
}

export const day10 = {part1, part2}