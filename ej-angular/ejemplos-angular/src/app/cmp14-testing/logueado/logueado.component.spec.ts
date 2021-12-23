import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueadoComponent } from './logueado.component';

fdescribe('LogueadoComponent', () => {
  let component: LogueadoComponent;
  let fixture: ComponentFixture<LogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Caso de prueba 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Caso de prueba 2
  it('si no estás logueado debería de aparecer la página de "Logueate"', () => {
    const dom = fixture.debugElement.nativeElement
    expect(dom.querySelector('p').textContent).toEqual('Logueate por favor')
  })

  it('si estás logueado debería de aparecer el nombre del usuario', () => {
    component.estasLogueado = true

    fixture.detectChanges()

    const dom = fixture.debugElement.nativeElement
    expect(dom.querySelector('p').textContent).toEqual('Bienvenido ' + component.nombre)
  })
});
