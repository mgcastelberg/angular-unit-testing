import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  it('Debe tener un Router Outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );
    expect( debugElement ).not.toBeNull();

  });

  xit('Debe tener un link a la página de médicos', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    console.log(elementos);

    let existe = false;

    for (const elem of elementos) {
      // console.log(elem.attributes['routerLink']);
      if( elem.attributes['routerLink'] === '/medicos' ){
        existe = true;
        break;
      }
    }

    expect( existe ).toBeTruthy();

  });

});
