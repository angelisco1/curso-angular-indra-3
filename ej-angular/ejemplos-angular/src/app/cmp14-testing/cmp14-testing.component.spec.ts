import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp14TestingComponent } from './cmp14-testing.component';

describe('Cmp14TestingComponent', () => {
  let component: Cmp14TestingComponent;
  let fixture: ComponentFixture<Cmp14TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp14TestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp14TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
