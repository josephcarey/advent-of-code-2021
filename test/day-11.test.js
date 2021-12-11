import { expect } from 'chai'
import { day11, day11Data, day11ExampleData } from '../src/index.js'

describe('Day 11: Dumbo Octopus', () => {

    it('part 1 - test data - it should find the number of flashes after 10 steps', () => {
        expect(day11.part1(day11ExampleData, 10)).to.equal(204)
    })

    it('part 1 - test data - it should find the number of flashes after 100 steps', () => {
        expect(day11.part1(day11ExampleData, 100)).to.equal(1656)
    })

    it('part 1 - real data - it should find the number of flashes after 100 steps', () => {
        expect(day11.part1(day11Data, 100)).to.equal(1632)
    })

    it('part 2 - test data - it should find the steps when the flashes synchronize', () => {
        expect(day11.part2(day11ExampleData)).to.equal(195)
    })

    it('part 2 - real data - it should find the steps when the flashes synchronize', () => {
        expect(day11.part2(day11Data)).to.equal(303)
    })

})