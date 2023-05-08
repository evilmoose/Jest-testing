const {square} = require('../app.js');

test('square should square a', function () {
    const res = square(3);
    expect(res).toEqual(9);
});

test('square should square negative numbers', () => {
    const res = square(-9);
    expect(res).toEqual(81);
});

