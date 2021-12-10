// written for day-10, hoping it comes in handy elsewhere
export class ObjectList {
    list = []

    constructor(objectList) {
        this.list = objectList
    }

    getValidCheck = (propName) => {
        return (value) => this.list.map(item => item[propName]).includes(value)
    }

    getGetBy = (searchPropName, returnPropName) => {
        return (searchTerm) => this.list.filter(
            item => item[searchPropName] == searchTerm
        )[0][returnPropName]
    }

    getCorrespondCheck = (propNameA, propNameB) => {
        return (valueA, valueB) => {
            return this.list.filter(item => item[propNameA] == valueA)[0][propNameB] == valueB
        }
    }
}