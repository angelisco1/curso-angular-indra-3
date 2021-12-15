import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06FormulariosComponent } from './cmp06-formularios.component';

describe('Cmp06FormulariosComponent', () => {
  let component: Cmp06FormulariosComponent;
  let fixture: ComponentFixture<Cmp06FormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp06FormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp06FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
