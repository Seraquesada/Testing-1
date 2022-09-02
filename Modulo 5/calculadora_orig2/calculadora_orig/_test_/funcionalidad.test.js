const {init} = require('../funcionalidad.js');


test('Limpiar numeros',()=>{
    const text = limpiar();
    expect(text).toBe(String(text));
})