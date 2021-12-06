import { expect } from 'chai'
import { dataEx } from '../src/day-06/data-ex.js'
import { data } from '../src/day-06/data.js'
import {day06} from '../src/day-06/index.js'

describe('Day 06', () => {
    describe('Part 1', () => {
        describe('Test Data', () => {
            it('should return 26 fish after 18 days', () => {
                expect(day06.part1(dataEx, 18)).to.equal(26)
            })
            it('should return 5934 fish after 80 days', () => {
                expect(day06.part1(dataEx, 80)).to.equal(5934)
            })
        })
        describe('Real Data', () => {
            it('should return 373378 fish after 80 days', () => {
                expect(day06.part1(data, 80)).to.equal(373378)
            })
        })
    })
    describe('Part 2', () => {
        describe('Test Data', () => {
            it('should return 26984457539 fish after 256 days', () => {
                expect(day06.part2(dataEx, 256)).to.equal(26984457539)
            })
        }),
        describe('Real Data', () => {
            it('should return 1682576647495 fish after 256 days', () => {
                expect(day06.part2(data, 256)).to.equal(1682576647495)
            })
        })
    })
})