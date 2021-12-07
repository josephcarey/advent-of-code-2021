import { expect } from 'chai'
import { day02Data, day02ExampleData } from '../src/day-02/data.js'
import {day02} from '../src/day-02/index.js'

describe('Day 02: Dive!', () => {

    it('part 1 - test data - should find a distance result of 150', () => {
        expect(day02.part1(day02ExampleData)).to.equal(150)
    })
    
    it('part 1 - real data - should find a distance result of 1762050', () => {
        expect(day02.part1(day02Data)).to.equal(1762050)
    })

    it('part 2 - test data - should find a distance result of 900', () => {
        expect(day02.part2(day02ExampleData)).to.equal(900)
    })

    it('part 2 - real data - should find a distance result of 1855892637', () => {
        expect(day02.part2(day02Data)).to.equal(1855892637)
    })
    
})