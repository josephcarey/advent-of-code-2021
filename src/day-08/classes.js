import { stringUtils } from "../utils/index.js"

export class Display {
     numberStrings = {
        zero: null,
        one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
        seven: null,
        eight: null,
        nine: null
     }

     displayChunks = {
         a: null,
         b: null,
         c: null,
         d: null,
         e: null,
         f: null,
         g: null
     }

     constructor(constructorString) {
        const [clueString, toDecode] = constructorString.split(" | ")
        let clueStrings = clueString.split(" ")

        this.toDecode = toDecode
        this.numberStrings = {
            ...this.numberStrings,
            one: clueStrings.filter(clue => clue.length === 2)[0],
            four: clueStrings.filter(clue => clue.length === 4)[0],
            seven: clueStrings.filter(clue => clue.length === 3)[0],
            eight: clueStrings.filter(clue => clue.length === 7)[0]
        }

        clueStrings = this.getRelevantClueStrings(clueStrings)

        // display a
        this.displayChunks.a = stringUtils.filterOut(this.numberStrings.seven, this.numberStrings.one)

        // six and nine
        const bAndD = stringUtils.filterOut(this.numberStrings.four, this.numberStrings.one)
        const possibleSixes = clueStrings.filter(clueString => clueString.length == 6 && stringUtils.containsAllOf(clueString, bAndD))
        this.numberStrings.six = possibleSixes.filter(possibleSix => !stringUtils.containsAllOf(possibleSix, this.numberStrings.one)).join()
        this.numberStrings.nine = possibleSixes.filter(possibleSix => stringUtils.containsAllOf(possibleSix, this.numberStrings.one)).join()
        clueStrings = this.getRelevantClueStrings(clueStrings)

        // display c
        this.displayChunks.c = stringUtils.filterOut(this.numberStrings.eight, this.numberStrings.six)
        this.displayChunks.e = stringUtils.filterOut(this.numberStrings.eight, this.numberStrings.nine)

        // five
        this.numberStrings.five = clueStrings.filter(clueString => clueString.length === 5 && stringUtils.containsAllOf(clueString, stringUtils.filterOut(this.numberStrings.six, this.displayChunks.e))).join()
        clueStrings = this.getRelevantClueStrings(clueStrings)
        
        // display f
        this.displayChunks.f = stringUtils.filterOut(this.numberStrings.one, this.displayChunks.c)
        
        // two
        this.numberStrings.two = clueStrings.filter(clueString => clueString.length === 5 && this.containsNoneOf(clueString, this.displayChunks.f)).join()
        clueStrings = this.getRelevantClueStrings(clueStrings)
        
        // zero and three
        this.numberStrings.zero = clueStrings.filter(clueString => clueString.length === 6).join()
        this.numberStrings.three = clueStrings.filter(clueString => clueString.length === 5).join()
        clueStrings = this.getRelevantClueStrings(clueStrings)

        if(clueStrings.length > 0) {
            throw new Error(clueStrings, this)
        }
     }
     

     getRelevantClueStrings = (clueStrings) => clueStrings.filter(clueString => {
         return clueString != this.numberStrings.zero && 
            clueString !== this.numberStrings.one &&
            clueString !== this.numberStrings.two &&
            clueString !== this.numberStrings.three &&
            clueString !== this.numberStrings.four &&
            clueString !== this.numberStrings.five &&
            clueString !== this.numberStrings.six &&
            clueString !== this.numberStrings.seven &&
            clueString !== this.numberStrings.eight &&
            clueString !== this.numberStrings.nine
     })

     containsNoneOf = (incomingClue, stringToCheck) => {
         for(const letter of stringToCheck.split("")) {
             if(incomingClue.includes(letter)) {
                 return false
             }
         }
         return true
     }

     decode = () => {
         let runningString = ""
         for(const numeralString of this.toDecode.split(" ")) {
            if (stringUtils.containsAllOf(numeralString, this.numberStrings.eight)) {runningString += "8"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.nine)) {runningString += "9"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.six)) {runningString += "6"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.zero)) {runningString += "0"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.five)) {runningString += "5"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.three)) {runningString += "3"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.two)) {runningString += "2"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.four)) {runningString += "4"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.seven)) {runningString += "7"}
            else if (stringUtils.containsAllOf(numeralString, this.numberStrings.one)) {runningString += "1"}
            
            else {
                throw new Error(`unfound numeralString: ${numeralString}`)
            }
         }
         return Number(runningString)
     }

     
 }