import { expect } from 'chai'
import { day04Data, day04ExampleData } from '../src/day-04/data.js'
import {day04} from '../src/day-04/index.js'

describe('Day 04: Giant Squid', () => {

    it('part 1 - test data - should find the score for the winning board', () => {
        expect(day04.part1(day04ExampleData)).to.equal(4512)
    })
    
    it('part 1 - real data - should find the score for the winning board', () => {
        expect(day04.part1(day04Data)).to.equal(14093)
    })

    it('part 2 - test data - should find the score for the losing board', () => {
        expect(day04.part2(day04ExampleData)).to.equal(1924)
    })

    it('part 2 - real data - should find the score for the losing board', () => {
        expect(day04.part2(day04Data)).to.equal(17388)
    })
    
})