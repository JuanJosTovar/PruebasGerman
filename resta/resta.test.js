const rest = require('./resta.js');

test('resta 500 - 20 to equal 480', () => {
    expect(rest(500,20)).toBe(480);
})

test('resta 16 - 8 to equal 8', () => {
    expect(rest(16,8)).toBe(8);
})

test('resta 5 - 2 to equal 3', () => {
    expect(rest(5,2)).toBe(3);
})

test('resta 89 - 10 to equal 79', () => {
    expect(rest(89,10)).toBe(79);
})

test('resta 23 - (-11) to equal 34', () => {
    expect(rest(23,-11)).toBe(34);
})