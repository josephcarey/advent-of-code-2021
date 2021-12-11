import {Map} from './map.js'

const getAdjacentPoints = ({x, y}) => {
    return [
        {x: x - 1, y: y - 1},
        {x: x, y: y - 1},
        {x: x + 1, y: y - 1},
        {x: x - 1, y: y},
        {x: x + 1, y: y},
        {x: x - 1, y: y + 1},
        {x: x, y: y + 1},
        {x: x + 1, y: y + 1},
    ]
}

const part1 = (incomingData) => {

    const stepsToDo = 100

    const powerLevels = new Map(incomingData)
    // console.log(powerLevels)
    
    let flashes = 0
    
    for(let i = 1; i <= stepsToDo; i++) {

        console.log('doing step: ', i)

        // setup for increment
        powerLevels.forEachInMap((point) => ({...point, incrementBy: 1}))

        let oldFlashes = 0
        
        do {
            // console.log(powerLevels.points)
            oldFlashes = flashes
            // increment everything
            powerLevels.forEachInMap((point) => ({...point, number: point.flashedThisStep ? 0 : point.number + point.incrementBy, incrementBy: 0}))
            // check for flashes
            powerLevels.forEachInMap((point) => {
                if(!point.flashedThisStep && point.number > 9) {
                    // count the flash
                    flashes++
                    // mark neighbors to increment
                    const newPoints = getAdjacentPoints(point.position)
                    // console.log(point.position)
                    // console.log(newPoints)
                    for(const newPoint of getAdjacentPoints(point.position)) {
                        // console.log('newPoint: ', newPoint)
                        // check they're in bounds
                        if(powerLevels.isInBounds(newPoint)) {
                            // console.log('is in bounds')
                            // check if they've flashed already
                            if (!powerLevels.points[newPoint.y][newPoint.x].flashedThisStep) {
                                // console.log('hasnt flashed')
                                powerLevels.points[newPoint.y][newPoint.x].incrementBy++ 
                            }
                        }
                    }
                    // return the point, marked to not flash this step and reset
                    return {
                        ...point,
                        number: 0,
                        flashedThisStep: true
                    }
                }
                return point
            })

            // powerLevels.prettyPrintIncrement()
            
            powerLevels.prettyPrint()
        } while (oldFlashes != flashes)
        // we have finished a full loop of flashing and cascading
        // reset flashed this step
        powerLevels.forEachInMap((point) => ({...point, flashedThisStep: false}))

        // do 35
        // let oldFlashes = flashes

    }
    console.log(flashes)
   
    return "day 11 part 1"
}

const part2 = (incomingData) => {

    const stepsToDo = 100000

    const powerLevels = new Map(incomingData)
    // console.log(powerLevels)
    
    let flashes = 0
    
    for(let i = 1; i <= stepsToDo; i++) {

        console.log('doing step: ', i)

        // setup for increment
        powerLevels.forEachInMap((point) => ({...point, incrementBy: 1}))

        let oldFlashes = 0
        
        do {
            // console.log(powerLevels.points)
            oldFlashes = flashes
            // increment everything
            powerLevels.forEachInMap((point) => ({...point, number: point.flashedThisStep ? 0 : point.number + point.incrementBy, incrementBy: 0}))
            // check for flashes
            powerLevels.forEachInMap((point) => {
                if(!point.flashedThisStep && point.number > 9) {
                    // count the flash
                    flashes++
                    // mark neighbors to increment
                    const newPoints = getAdjacentPoints(point.position)
                    // console.log(point.position)
                    // console.log(newPoints)
                    for(const newPoint of getAdjacentPoints(point.position)) {
                        // console.log('newPoint: ', newPoint)
                        // check they're in bounds
                        if(powerLevels.isInBounds(newPoint)) {
                            // console.log('is in bounds')
                            // check if they've flashed already
                            if (!powerLevels.points[newPoint.y][newPoint.x].flashedThisStep) {
                                // console.log('hasnt flashed')
                                powerLevels.points[newPoint.y][newPoint.x].incrementBy++ 
                            }
                        }
                    }
                    // return the point, marked to not flash this step and reset
                    return {
                        ...point,
                        number: 0,
                        flashedThisStep: true
                    }
                }
                return point
            })

            // powerLevels.prettyPrintIncrement()
            
            powerLevels.prettyPrint()
        } while (oldFlashes != flashes)
        // we have finished a full loop of flashing and cascading
        // reset flashed this step
        
        // check if everything flashed
        const flashMap = powerLevels.points.map(row => row.map(cell => String(cell.flashedThisStep))).flat()
        console.log(flashMap)
        const anyDidntFlash = flashMap.includes("false")
        console.log('anyDidntFlash: ', anyDidntFlash)
        if(!anyDidntFlash) {
            console.log('all flashed on: ', i)
            break
        }

        powerLevels.forEachInMap((point) => ({...point, flashedThisStep: false}))

        // do 35
        // let oldFlashes = flashes

    }
    console.log(flashes)
    
    return "day 11 part 02"
    
}

export const day11 = {part1, part2}