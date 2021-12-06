import { Board } from "./board.js"
import { callNumbers } from "./numbers.js"
import { startingBoards } from "./starting-boards.js"

const getInitialBoards = (inBoards) => {
    return inBoards.map((boardInput, index) => new Board(boardInput.map(row => row.map(cell => {
        return {number: cell, marked: false}
    })), {name: `B${index}`}))
}

const part1 = () => {
    console.log('advent of code -- day 04 -- part 1')

    let boards = getInitialBoards(startingBoards)

    for(const number of callNumbers) {
        console.log('callNumber: ', number)
        boards = boards.map(board => board.handleNewNumber(number))
        if(boards.find(board => board.winner)) {
            break
        }
    }
}

const part2 = () => {
    console.log('advent of code -- day 04 -- part 2')
    
    let boards = getInitialBoards(startingBoards)
    
    for(const number of callNumbers) {
        console.log('callNumber: ', number)
        boards = boards.map(board => board.handleNewNumber(number))
        if(boards.length === 1 && boards[0].winner) { break }
        boards = boards.filter(board => !board.info.winner)
        // console.log('Remaining: ', boards.map(board => board.name))
    }
    console.log('final board:')
    console.log(JSON.stringify(boards, undefined, 2))
}

export const day04 = {part1, part2}