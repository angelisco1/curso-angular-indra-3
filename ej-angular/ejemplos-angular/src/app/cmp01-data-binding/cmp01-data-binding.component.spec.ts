import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp01DataBindingComponent } from './cmp01-data-binding.component';

describe('Cmp01DataBindingComponent', () => {
  let component: Cmp01DataBindingComponent;
  let fixture: ComponentFixture<Cmp01DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp01DataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp01DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
