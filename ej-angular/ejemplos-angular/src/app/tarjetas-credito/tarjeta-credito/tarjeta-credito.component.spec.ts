import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoComponent } from './tarjeta-credito.component';

describe('TarjetaCreditoComponent', () => {
  let component: TarjetaCreditoComponent;
  let fixture: ComponentFixture<TarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
