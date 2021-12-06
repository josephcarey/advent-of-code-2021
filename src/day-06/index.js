import {data} from './data.js'
import {dataEx} from './data-ex.js'
import {LanternSchool} from './lantern-fish.js'

const maxAge = 8

const part1 = (incomingData = data, days = 80) => { 
    const school = new LanternSchool(incomingData, maxAge)

    return school.handleDays(days)
}

const part2 = (incomingData = data, days = 256) => {
    return part1(incomingData, days)
}

export const day06 = {part1, part2}