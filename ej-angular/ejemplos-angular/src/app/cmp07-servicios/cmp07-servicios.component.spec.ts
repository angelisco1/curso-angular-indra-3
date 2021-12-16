import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07ServiciosComponent } from './cmp07-servicios.component';

describe('Cmp07ServiciosComponent', () => {
  let component: Cmp07ServiciosComponent;
  let fixture: ComponentFixture<Cmp07ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp07ServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp07ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
