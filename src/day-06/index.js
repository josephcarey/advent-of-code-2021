import {LanternSchool} from './lantern-fish.js'

const maxAge = 8

const part1 = (incomingData, days) => { 
    const school = new LanternSchool(incomingData, maxAge)
    return school.handleDays(days)
}

const part2 = (incomingData, days) => {
    return part1(incomingData, days)
}

export const day06 = {part1, part2}