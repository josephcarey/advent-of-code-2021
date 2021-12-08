import { expect } from 'chai'
import { day08, day08Data, day08ExampleData } from '../src/index.js'

describe('Day 08: Seven Segment Search', () => {

    it('part 1 - test data - should count the instances of unique length clues', () => {
        expect(day08.part1(day08ExampleData)).to.equal(26)
    })

    it('part 1 - real data - should count the instances of unique length clues', () => {
        expect(day08.part1(day08Data)).to.equal(344)
    })

    it('part 2 - test data - should find the total for the displays', () => {
        expect(day08.part2(day08ExampleData)).to.equal(61229)
    })

    it('part 2 - real data - should find the total for the displays', () => {
        expect(day08.part2(day08Data)).to.equal(1048410)
    })

})