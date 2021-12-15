import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04DirectivasComponent } from './cmp04-directivas.component';

describe('Cmp04DirectivasComponent', () => {
  let component: Cmp04DirectivasComponent;
  let fixture: ComponentFixture<Cmp04DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04DirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
