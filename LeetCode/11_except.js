/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {};

console.log(expect(5).toBe(5)); // {"value": true}
console.log(expect(5).notToBe(5)); // {"error": "Not Equal"}
