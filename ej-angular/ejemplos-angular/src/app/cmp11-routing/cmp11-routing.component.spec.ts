import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp11RoutingComponent } from './cmp11-routing.component';

describe('Cmp11RoutingComponent', () => {
  let component: Cmp11RoutingComponent;
  let fixture: ComponentFixture<Cmp11RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp11RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp11RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
