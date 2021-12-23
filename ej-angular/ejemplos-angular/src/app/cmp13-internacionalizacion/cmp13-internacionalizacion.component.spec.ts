import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp13InternacionalizacionComponent } from './cmp13-internacionalizacion.component';

describe('Cmp13InternacionalizacionComponent', () => {
  let component: Cmp13InternacionalizacionComponent;
  let fixture: ComponentFixture<Cmp13InternacionalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp13InternacionalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp13InternacionalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
