import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakFastOrderComponent } from './break-fast-order.component';

describe('BreakFastOrderComponent', () => {
  let component: BreakFastOrderComponent;
  let fixture: ComponentFixture<BreakFastOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakFastOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakFastOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
