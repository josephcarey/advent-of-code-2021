import { expect } from 'chai'
import { day05, day05Data, day05ExampleData } from '../src/index.js'

describe('Day 05: Hydrothermal Venture', () => {

    it('part 1 - test data - should return 5 points of non-intersection', () => {
        expect(day05.part1(day05ExampleData)).to.equal(5)
    })

    it('part 1 - real data - should return 5698 points of non-intersection', () => {
        expect(day05.part1(day05Data)).to.equal(5698)
    })

    it('part 2 - test data - should return 12 points of non-intersection', () => {
        expect(day05.part2(day05ExampleData)).to.equal(12)
    })

    it('part 2 - real data - should return 15463 points of non-intersection', () => {
        expect(day05.part2(day05Data)).to.equal(15463)
    })

})