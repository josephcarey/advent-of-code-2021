

const part1 = (incomingData) => {
    
    let position = {x: 0, y: 0}
    
    for (const datum of incomingData) {
        const [command, amount] = datum.split(" ")
        if(command == "forward") {
            position.x += Number(amount)
        } else if (command == "down") {
            position.y += Number(amount)
        } else if (command == "up") {
            position.y -= Number(amount)
        }  else {
            console.log('error!')
        }
    }

    return position.x * position.y
}

const part2 = (incomingData) => {

    let ship = {position: {x: 0, y: 0}, aim: 0}

    for (const datum of incomingData) {
        const [command, amount] = datum.split(" ")
        if(command == "forward") {
            ship.position.x += Number(amount)
            ship.position.y += Number(amount) * ship.aim
        } else if (command == "down") {
            ship.aim += Number(amount)
        } else if (command == "up") {
            ship.aim -= Number(amount)
        }  else {
            console.log('error!')
        }
    }
    
    return ship.position.x * ship.position.y
}

export const day02 = {part1, part2}