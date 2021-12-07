import { expect } from 'chai'
import { day07Data, day07ExampleData } from '../src/day-07/data.js'
import {day07} from '../src/day-07/index.js'

describe('Day 07: The Treachery of Whales', () => {

    it('should find that the best solution uses 37 fuel', () => {
        expect(day07.part1(day07ExampleData)).to.equal(37)
    })

    it('should find that the best solution uses 344605 fuel', () => {
        expect(day07.part1(day07Data)).to.equal(344605)
    })

    it('should find that the best solution uses 168 fuel', () => {
        expect(day07.part2(day07ExampleData)).to.equal(168)
    })

    it('should find that the best solution uses 93699985 fuel', () => {
        expect(day07.part2(day07Data)).to.equal(93699985)
    })

})