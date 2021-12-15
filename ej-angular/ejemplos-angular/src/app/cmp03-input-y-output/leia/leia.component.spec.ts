import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiaComponent } from './leia.component';

describe('LeiaComponent', () => {
  let component: LeiaComponent;
  let fixture: ComponentFixture<LeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
