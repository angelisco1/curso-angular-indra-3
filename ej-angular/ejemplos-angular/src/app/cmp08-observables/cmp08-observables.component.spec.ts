import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp08ObservablesComponent } from './cmp08-observables.component';

describe('Cmp08ObservablesComponent', () => {
  let component: Cmp08ObservablesComponent;
  let fixture: ComponentFixture<Cmp08ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp08ObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp08ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
