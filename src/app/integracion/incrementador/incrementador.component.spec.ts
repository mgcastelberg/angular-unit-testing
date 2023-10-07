import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda y el progreso', () => {
      component.leyenda = 'Proceso de carga';
      // Tenemos que indicarle a Angular que detecte la asignacion de cambios
      fixture.detectChanges(); // Disparar la decteccion de cambios
      // By.* muy similar a JQuery llamando selectores
      const elem: HTMLElement = fixture.debugElement.query( By.css('H3') ).nativeElement;

      expect(elem.innerHTML).toContain('Proceso de carga');

    });

    it('Debe de mostrar en el input el valor del progreso', async(() => {
      component.cambiarValor(5);
      fixture.detectChanges();

      // La deteccion de cambios no es tan rapida como las pruebas unitarias
      fixture.whenStable().then(() => {
        const input = fixture.debugElement.query( By.css('input') );
        const elem: HTMLInputElement = input.nativeElement;
        // console.log(elem);
        expect( elem.value ).toBe('55');
      });

    }));

    it('Debe incrementar/decrementar en 5, con un click en el botón', () => {

      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
      console.log(botones);

      botones[0].triggerEventHandler('click', null);
      expect( component.progreso ).toBe(45);

      botones[1].triggerEventHandler('click', null);
      expect( component.progreso ).toBe(50);

    });


    it('En el titulo del componente Progreso a 45 en el HTML', () => {
      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
      botones[0].triggerEventHandler('click', null);
      fixture.detectChanges(); // Disparar la decteccion de cambios

      // Obtener el titilo H3 del Html
      const elem: HTMLElement = fixture.debugElement.query( By.css('H3') ).nativeElement;

      expect(elem.innerHTML).toContain('45');
    });

});
