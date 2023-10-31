const mayus = require('./mayuscula.js');

test('Verifica que de "hola" retorne "HOLA', () => {
    expect(mayus("hola")).toBe("HOLA");
})

test('Verifica que de "dado" retorne "DADO', () => {
    expect(mayus("dado")).toBe("DADO");
})

test('Verifica que de "mundo increible" retorne "MUNDO INCREIBLE', () => {
    expect(mayus("mundo increible")).toBe("MUNDO INCREIBLE");
})

test('Verifica que de "papel" retorne "PAPEL', () => {
    expect(mayus("papel")).toBe("PAPEL");
})

test('Verifica que de "mos ca" retorne "MOS CA', () => {
    expect(mayus("mos ca")).toBe("MOS CA");
})
