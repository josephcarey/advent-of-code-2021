import { expect } from 'chai'
import { day09, day09Data, day09ExampleData } from '../src/index.js'

describe('Day 09: Smoke Basin', () => {

    it('part 1 - test data - should sum the risk levels of all low points', () => {
        expect(day09.part1(day09ExampleData)).to.equal(15)
    })

    it('part 1 - real data - should sum the risk levels of all low points', () => {
        expect(day09.part1(day09Data)).to.equal(600)
    })

    it('part 2 - test data - should find the product of the three largest basin sizes', () => {
        expect(day09.part2(day09ExampleData)).to.equal(1134)
    })

    it('part 2 - real data - should find the product of the three largest basin sizes', () => {
        expect(day09.part2(day09Data)).to.equal(987840)
    })

})