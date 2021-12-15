import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05PipesComponent } from './cmp05-pipes.component';

describe('Cmp05PipesComponent', () => {
  let component: Cmp05PipesComponent;
  let fixture: ComponentFixture<Cmp05PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
