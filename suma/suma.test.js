const sum = require('./suma.js');

test('suma 102 + 20 to equal 122', () => {
    expect(sum(102,20)).toBe(122);
})

test('suma 42 + 4 to equal 46', () => {
    expect(sum(42,4)).toBe(46);
})

test('suma 5 + 2 to equal 7', () => {
    expect(sum(5,2)).toBe(7);
})

test('suma 193 + 7 to equal 200', () => {
    expect(sum(193,7)).toBe(200);
})

test('suma 213 + 110 to equal 323', () => {
    expect(sum(213,110)).toBe(324);
})