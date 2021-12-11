import {Map} from './map.js'

const part1 = (incomingData, stepsToDo) => {

    const powerLevels = new Map(incomingData)
    let flashes = 0
    
    for(let i = 1; i <= stepsToDo; i++) {

        // setup for increment
        powerLevels.forEachInMap((point) => ({...point, incrementBy: 1}))

        let oldFlashes = 0
        
        do {
            oldFlashes = flashes
            // increment everything
            powerLevels.forEachInMap((point) => ({...point, number: point.flashedThisStep ? 0 : point.number + point.incrementBy, incrementBy: 0}))
            // check for flashes
            powerLevels.forEachInMap((point) => {
                if(!point.flashedThisStep && point.number > 9) {
                    // count the flash
                    flashes++
                    // deal with neighbors
                    for(const newPoint of powerLevels.getAdjacentPoints(point, true)) {
                            // check if they've flashed already
                            if (!newPoint.flashedThisStep) {
                                newPoint.incrementBy++ 
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

        } while (oldFlashes != flashes)
        // we have finished a full loop of flashing and cascading
        // reset flashed this step
        powerLevels.forEachInMap((point) => ({...point, flashedThisStep: false}))

    }
   
    return flashes
}

const part2 = (incomingData) => {

    const stepsToDo = 100000000
    const powerLevels = new Map(incomingData)
    let flashes = 0
    let allFlashStep = undefined
    
    for(let i = 1; i <= stepsToDo; i++) {

        // setup for increment
        powerLevels.forEachInMap((point) => ({...point, incrementBy: 1}))

        let oldFlashes = 0
        
        do {
            oldFlashes = flashes
            // increment everything
            powerLevels.forEachInMap((point) => ({...point, number: point.flashedThisStep ? 0 : point.number + point.incrementBy, incrementBy: 0}))
            // check for flashes
            powerLevels.forEachInMap((point) => {
                if(!point.flashedThisStep && point.number > 9) {
                    // count the flash
                    flashes++
                    // handle neighbors
                    for(const newPoint of powerLevels.getAdjacentPoints(point, true)) {
                            // check if they've flashed already
                            if (!newPoint.flashedThisStep) {
                                newPoint.incrementBy++ 
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
            
        } while (oldFlashes != flashes)
        // we have finished a full loop of flashing and cascading
        
        if(!powerLevels.foundInMap(item => item.flashedThisStep == false)) {
            allFlashStep = i
            break
        }

        // reset flashed this step
        powerLevels.forEachInMap((point) => ({...point, flashedThisStep: false}))
    }
    
    return allFlashStep
    
}

export const day11 = {part1, part2}