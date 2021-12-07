import {day5Data, day5ExampleData} from './data.js'
import {dataEx} from './data-ex.js'
import {Line, Map} from './line.js'

const parseData = (incomingData) => {
    return incomingData.map(datum => {
        const [start, end] = datum.split(" -> ")
        const [startX, startY] = start.split(",")
        const [endX, endY] = end.split(",")
        return new Line({x: Number(startX), y: Number(startY)}, {x: Number(endX), y: Number(endY)})
    })
}

const filterNonVerticalOrHorizontalLines = (lines) => {
    return lines.filter((line) => {
        return line.start.x == line.end.x
          || line.start.y == line.end.y
    })
}

const part1 = (incomingData) => {
    console.log('advent of code -- day 05 -- part 1')

    const parsedData = parseData(incomingData)
    const filteredData = filterNonVerticalOrHorizontalLines(parsedData)

    const map = new Map(filteredData)
    map.addLines(filteredData)
    
    console.log(map.countGreaterOrEqual(2))
    return map.countGreaterOrEqual(2)
}

const part2 = (incomingData) => {
    console.log('advent of code -- day 05 -- part 2')
    
    const parsedData = parseData(incomingData)

    const map = new Map(parsedData)
    map.addLines(parsedData)
    
    return map.countGreaterOrEqual(2)
}

export const day05 = {part1, part2}