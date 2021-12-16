import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBComponent } from './cmp-b.component';

describe('CmpBComponent', () => {
  let component: CmpBComponent;
  let fixture: ComponentFixture<CmpBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
