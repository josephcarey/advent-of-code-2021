import { expect } from 'chai'
import { day06, day06Data, day06ExampleData } from '../src/index.js'

describe('Day 06: Lanternfish', () => {

    it('part 1 - test data - should return 26 fish after 18 days', () => {
        expect(day06.part1(day06ExampleData, 18)).to.equal(26)
    })

    it('part 1 - test data - should return 5934 fish after 80 days', () => {
        expect(day06.part1(day06ExampleData, 80)).to.equal(5934)
    })

    it('part 1 - real data - should return 373378 fish after 80 days', () => {
        expect(day06.part1(day06Data, 80)).to.equal(373378)
    })

    it('part 2 - test data - should return 26984457539 fish after 256 days', () => {
        expect(day06.part2(day06ExampleData, 256)).to.equal(26984457539)
    })

    it('part 2 - real data - should return 1682576647495 fish after 256 days', () => {
        expect(day06.part2(day06Data, 256)).to.equal(1682576647495)
    })

})