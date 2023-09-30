import { Jugador } from "./clase";

describe('Pruebas de clase', () => {

  const jugador = new Jugador();

  // 4 Ciclos de vida: beforeAll(), beforeEach(), afterAll(), afterEach()

  beforeEach( () => {
    jugador.hp = 100;
  })

  it('Debe retornar 80 de hp si recibe 20 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect( resp ).toBe(80);

  });

  it('Debe retornar 50 de hp si recibe 50 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect( resp ).toBe(50);

  });

  it('Debe retornar 0 de hp si recibe mas de 100 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);
    expect( resp ).toBe(0);

  });


})
