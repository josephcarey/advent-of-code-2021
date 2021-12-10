import { expect } from 'chai'
import { day10, day10Data, day10ExampleData } from '../src/index.js'

describe('Day 10: Syntax Scoring', () => {

    it('part 1 - test data - it should correctly score the corrupted lines', () => {
        expect(day10.part1(day10ExampleData)).to.equal(26397)
    })

    it('part 1 - real data - it should correctly score the corrupted lines', () => {
        expect(day10.part1(day10Data)).to.equal(392097)
    })

    it('part 2 - test data - it should correctly score the incomplete lines', () => {
        expect(day10.part2(day10ExampleData)).to.equal(288957)
    })

    it('part 2 - real data - it should correctly score the incomplete lines', () => {
        expect(day10.part2(day10Data)).to.equal(4263222782)
    })

})