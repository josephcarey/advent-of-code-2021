import { expect } from 'chai'
import { day01Data, day01ExampleData } from '../src/day-01/data.js'
import {day01} from '../src/day-01/index.js'

describe('Day 01: Sonar Sweep', () => {

    it('part 1 - test data - should find 7 increases in depth', () => {
        expect(day01.part1(day01ExampleData)).to.equal(7)
    })
    
    it('part 1 - real data - should find 1462 increases in depth', () => {
        expect(day01.part1(day01Data)).to.equal(1462)
    })

    it('part 2 - test data - should find 5 increases in depth of the 3-reading average', () => {
        expect(day01.part2(day01ExampleData)).to.equal(5)
    })

    it('part 2 - real data - should find 1497 increases in depth of the 3-reading average', () => {
        expect(day01.part2(day01Data)).to.equal(1497)
    })
    
})