const multi = require('./multiplicacion.js');

test('multiplica 5 * 20 to equal 100', () => {
    expect(multi(5,20)).toBe(100);
})

test('multiplica 10 * -8 to equal -80', () => {
    expect(multi(10,-8)).toBe(-80);
})

test('multiplica 9 * 3 to equal 27', () => {
    expect(multi(9,3)).toBe(27);
})

test('multiplica 100 * 6 to equal 600', () => {
    expect(multi(100,6)).toBe(600);
})

test('multiplica -2 * 14 to equal -28', () => {
    expect(multi(-2,14)).toBe(-28);
})