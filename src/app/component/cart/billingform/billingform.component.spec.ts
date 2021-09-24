import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingformComponent } from './billingform.component';

describe('BillingformComponent', () => {
  let component: BillingformComponent;
  let fixture: ComponentFixture<BillingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
