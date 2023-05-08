const {square, cube} = require('../app.js');

// Describe //
// Group togethr related tests, wrap these in 'describe' callback function.
describe("add function", () => {
    test('square should square a', function () {
        const res = square(3);
        expect(res).toEqual(9);
    });
    
    test('square should square negative numbers', () => {
        const res = square(-9);
        expect(res).toEqual(81);
    });
});

describe('cube function', () => {
    test('Should cube a positive number', () => {
        const num = cube(3);
        expect(num).toEqual(27);
    })
});

// Matchers
/*
.toEqual(obj) - Has the same value(eg, different objects with the same values mathc)
.toBe(obj) - Is the same object.
.toContain(sought) - Does object/array contain this item?
.not. - Add before matcher to invert (eg expect("hi") .not. toEqual("bye"))
*/