import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DePlantillaComponent } from './de-plantilla.component';

describe('DePlantillaComponent', () => {
  let component: DePlantillaComponent;
  let fixture: ComponentFixture<DePlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DePlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DePlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
