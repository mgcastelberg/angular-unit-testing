import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, empty } from 'rxjs';

class FakeRouter {
  navigate( params:string ) {}
}

class FakeActivatedroute {
  // params: Observable<any> = empty();
  private subject = new Subject();

  push( valor: any ) {
    this.subject.next( valor );
  }

  get params(){
    return this.subject.asObservable();
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [  //Importar por que los necesita el componente
        { provide: Router, useClass: FakeRouter }, //Router,
        { provide: ActivatedRoute, useClass: FakeActivatedroute}// ActivatedRoute
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();
    expect( spy ).toHaveBeenCalledWith(['medico','123']);

  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedroute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id:'nuevo' });

    expect( component.id ).toBe('nuevo');

  });

});
