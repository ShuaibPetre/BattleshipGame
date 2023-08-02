const ship = require('../shipyard.js');

test('makes ship object', () => {
    let a = new ship(2)
    expect(a).toEqual(expect.objectContaining({"hits": 0, "length": 2}));
});

test('hit function adds 1 hit', () => {
    let a = new ship(2)
    a.hit();
    expect(a).toEqual(expect.objectContaining({"hits": 1}));
});

test('testing multiple hits', () => {
    let a = new ship(4)
    a.hit();
    a.hit();
    expect(a).toEqual(expect.objectContaining({"hits": 2}));
});
test('if ship sinks', () => {
    let a = new ship(2)
    a.hit();
    a.hit();
    expect(a).toEqual(expect.objectContaining({"sunk": true}));
});