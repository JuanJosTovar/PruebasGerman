const long = require('./longitud.js');

test('Verifica que de el mensaje "Hola" retorne 4', () => {
    expect(long("Hola")).toBe(4);
})

test('Verifica que de el mensaje "mundo" retorne 5', () => {
    expect(long("mundo")).toBe(5);
})

test('Verifica que de el mensaje "Dios mio" retorne 8', () => {
    expect(long("Dios mio")).toBe(8);
})

test('Verifica que de el mensaje "Hola mundo como estan" retorne 21', () => {
    expect(long("Hola mundo como estan")).toBe(21);
})

test('Verifica que de el mensaje "Halloween" retorne 9', () => {
    expect(long("Halloween")).toBe(9);
})
