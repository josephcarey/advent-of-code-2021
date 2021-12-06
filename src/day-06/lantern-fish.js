export class LanternSchool {

    constructor(fishArray, maxAge, silent = true) {
        this.silent = silent
        const initialFish = Array(maxAge + 1).fill(0)
        for(const fish of fishArray) {
            initialFish[fish]++
        }
        this.fish = initialFish
        this.prettyPrint()
    }

    log = (...message) => {
        this.silent ? null : console.log(...message)
    }

    handleDays = (numberOfDays) => {
        for (let i = 1; i <= numberOfDays; i++) {
            this.log('Handling day: ', i)
            this.handleDay()
            this.prettyPrint()
        }
        return this.getTotal()
    }

    handleDay = () => {
        this.fish.push(0)
        const spawningCount = this.fish.shift()
        this.fish[8] += spawningCount
        this.fish[6] += spawningCount
    }

    getTotal = () => this.fish.reduce((acc, curr) => acc + curr, 0)

    prettyPrint = () => {
        this.log()
        for(let i = 0; i < this.fish.length; i++) {
            this.log('Timer: ', i, 'Fish: ', this.fish[i])
        }
        this.log()
    }
}