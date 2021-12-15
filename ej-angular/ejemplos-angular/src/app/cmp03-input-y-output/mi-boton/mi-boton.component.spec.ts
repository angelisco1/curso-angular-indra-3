import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBotonComponent } from './mi-boton.component';

describe('MiBotonComponent', () => {
  let component: MiBotonComponent;
  let fixture: ComponentFixture<MiBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
