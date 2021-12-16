import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaActualComponent } from './fecha-actual.component';

describe('FechaActualComponent', () => {
  let component: FechaActualComponent;
  let fixture: ComponentFixture<FechaActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
