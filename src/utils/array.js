export const arrayUtils = {
    /**
     * Check if the given array contains all of the elements in a test array.
     * @param {Array} checkWithin - the array that might contain all of the elements.
     * @param {Array} testUsing - the array of elements to check.
     */
    containsAllOf: (checkWithin, testUsing) => {
        for(const testItem of testUsing) {
            if(!checkWithin.includes(testItem)) {
                return false
            }
        }
        return true
    },

    /**
     * Check if the given array contains none of the elements in a test array.
     * @param {Array} checkWithin - the array that might contain the elements.
     * @param {Array} testUsing - the array of elements to check.
     */
    containsNoneOf: (checkWithin, testUsing) => {
        for(const testItem of testUsing) {
            if(checkWithin.includes(testItem)) {
                return false
            }
        }
    },

    /**
     * Return a given array minus all of the elements in a given second array.
     * @param {Array} toRemoveFrom - the array to remove elements from.
     * @param {Array} toRemove - the elements to remove.
     */
    filterOut: (toRemoveFrom, toRemove) => toRemoveFrom.filter(element => !toRemove.includes(element))
}