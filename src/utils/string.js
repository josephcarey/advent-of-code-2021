import {arrayUtils} from './array.js'

export const stringUtils = {
    /**
     * Check if the given string contains all of the characters in a test string.
     * @param {string} checkWithin - the string that might contain all of the characters.
     * @param {string} testUsing - the string of characters to check.
     */
    containsAllOf: (checkWithin, testUsing) => arrayUtils.containsAllOf(checkWithin.split(""), testUsing.split("")),

    /**
     * Check if the given string contains none of the elements in a test string.
     * @param {string} checkWithin - the string that might contain the elements.
     * @param {string} testUsing - the array of elements to check.
     */
     containsNoneOf: (checkWithin, testUsing) => arrayUtils.containsNoneOf(checkWithin.split(""), testUsing.split("")),

    /**
     * Return a given string minus all of the characters in a given second string.
     * @param {string} toRemoveFrom - the string to remove characters from.
     * @param {string} toRemove - the characters to remove.
     */
    filterOut: (toRemoveFrom, toRemove) => arrayUtils.filterOut(toRemoveFrom.split(""), toRemove.split("")).join("")
}