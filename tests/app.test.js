const {square} = require('../app.js');
test('square should square a', function () {
    const res = square(3);
    expect(res).toEqual(9);
});