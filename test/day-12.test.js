import { expect } from 'chai'
import { day12, day12Data, day12ExampleData, day12ExampleData2, day12ExampleData3 } from '../src/index.js'

describe('Day 12: Passage Pathing', () => {

    it('part 1 - test data - it should find all of the possible paths for test data 1', () => {
        expect(day12.part1(day12ExampleData)).to.equal(10)
    })

    it('part 1 - test data - it should find all of the possible paths for test data 2', () => {
        expect(day12.part1(day12ExampleData2)).to.equal(19)
    })

    it('part 1 - test data - it should find all of the possible paths for test data 3', () => {
        expect(day12.part1(day12ExampleData3)).to.equal(226)
    })

    it('part 1 - real data - it should find all of the possible paths', () => {
        expect(day12.part1(day12Data)).to.equal(3000)
    })

    it('part 2 - test data - it should find all the possible paths for test data 1, with the small cave exception', () => {
        expect(day12.part2(day12ExampleData)).to.equal(36)
    })

    it('part 2 - test data - it should find all the possible paths for test data 2, with the small cave exception', () => {
        expect(day12.part2(day12ExampleData2)).to.equal(103)
    })

    it('part 2 - test data - it should find all the possible paths for test data 3, with the small cave exception', () => {
        expect(day12.part2(day12ExampleData3)).to.equal(3509)
    })

    it('part 2 - real data - it should find all the possible paths, with the small cave exception', () => {
        expect(day12.part2(day12Data)).to.equal(74222)
    })

})