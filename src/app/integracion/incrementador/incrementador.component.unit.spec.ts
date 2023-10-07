import { IncrementadorComponent } from "./incrementador.component";

describe('Incrementador Component Unit', () =>{

  let component: IncrementadorComponent;

  beforeEach( () => {
    component = new IncrementadorComponent;
  });

  it('No debe de pasar de 100 el progrego', () => {

    component.progreso = 50;
    component.cambiarValor( 5 );

    expect(component.progreso).toBe(55);

  });

});
