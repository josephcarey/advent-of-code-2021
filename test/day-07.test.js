import { expect } from 'chai'
import { day7Data, day7ExampleData } from '../src/day-07/data.js'
import {day07} from '../src/day-07/index.js'

describe('Day 07', () => {
    describe('Part 1', () => {
        describe('Test Data', () => {
            it('should find that the best solution uses 37 fuel', () => {
                expect(day07.part1(day7ExampleData)).to.equal(37)
            })
        })
        describe('Real Data', () => {
            it('should find that the best solution uses 344605 fuel', () => {
                expect(day07.part1(day7Data)).to.equal(344605)
            })
        })
    })
    describe('Part 2', () => {
        describe('Test Data', () => {
            it('should find that the best solution uses 168 fuel', () => {
                expect(day07.part2(day7ExampleData)).to.equal(168)
            })
        }),
        describe('Real Data', () => {
            it('should find that the best solution uses 93699985 fuel', () => {
                expect(day07.part2(day7Data)).to.equal(93699985)
            })
        })
    })
})