import { expect } from 'chai'
import { day03, day03Data, day03ExampleData } from '../src/index.js'

describe('Day 03: Binary Diagnostic', () => {

    it('part 1 - test data - should find a life support rating of 22', () => {
        expect(day03.part1(day03ExampleData)).to.equal(198)
    })
    
    it('part 1 - real data - should find a life support rating of 4160394', () => {
        expect(day03.part1(day03Data)).to.equal(4160394)
    })

    it('part 2 - test data - should find a life support rating of 230', () => {
        expect(day03.part2(day03ExampleData)).to.equal(230)
    })

    it('part 2 - real data - should find a life support rating of 4125600', () => {
        expect(day03.part2(day03Data)).to.equal(4125600)
    })
    
})