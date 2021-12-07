import { Board } from "./board.js"

const getInitialBoards = (inBoards) => {
    return inBoards.map((boardInput, index) => new Board(boardInput.map(row => row.map(cell => {
        return {number: cell, marked: false}
    })), {name: `B${index}`}))
}

const part1 = ({callNumbers, startingBoards}) => {

    let boards = getInitialBoards(startingBoards)
    let winner = undefined

    for(const number of callNumbers) {
        // console.log('callNumber: ', number)
        boards = boards.map(board => board.handleNewNumber(number))
        winner = boards.find(board => board.info.winner)
        if(winner) {
            break
        }
    }

    return winner.info.score
}

const part2 = ({callNumbers, startingBoards}) => {
    
    let boards = getInitialBoards(startingBoards)
    let loser = undefined
    
    for(const number of callNumbers) {
        // console.log('callNumber: ', number)
        boards = boards.map(board => board.handleNewNumber(number))
        if(boards.length === 1 && boards[0].info.winner) {
            loser = boards[0]
            break
        }
        boards = boards.filter(board => !board.info.winner)
    }
    
    return loser.info.score
}

export const day04 = {part1, part2}