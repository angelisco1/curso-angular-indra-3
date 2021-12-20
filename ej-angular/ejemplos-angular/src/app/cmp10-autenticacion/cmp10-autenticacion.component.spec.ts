import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp10AutenticacionComponent } from './cmp10-autenticacion.component';

describe('Cmp10AutenticacionComponent', () => {
  let component: Cmp10AutenticacionComponent;
  let fixture: ComponentFixture<Cmp10AutenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp10AutenticacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp10AutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
