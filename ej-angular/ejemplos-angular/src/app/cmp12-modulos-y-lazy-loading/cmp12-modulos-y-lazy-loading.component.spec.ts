import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp12ModulosYLazyLoadingComponent } from './cmp12-modulos-y-lazy-loading.component';

describe('Cmp12ModulosYLazyLoadingComponent', () => {
  let component: Cmp12ModulosYLazyLoadingComponent;
  let fixture: ComponentFixture<Cmp12ModulosYLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp12ModulosYLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp12ModulosYLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
