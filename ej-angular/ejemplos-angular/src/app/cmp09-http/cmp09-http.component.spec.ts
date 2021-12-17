import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp09HttpComponent } from './cmp09-http.component';

describe('Cmp09HttpComponent', () => {
  let component: Cmp09HttpComponent;
  let fixture: ComponentFixture<Cmp09HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp09HttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp09HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
