import { usuarioIngresado } from "./booleanos"

describe('Pruebas de Boolean', () => {

  it('Debe de retornar true', () => {

    const res = usuarioIngresado();
    expect( res ).toBeTruthy();
    // expect( res ).toBeFalsy();
    // expect( res ).not.toBeTruthy();

  })

})
