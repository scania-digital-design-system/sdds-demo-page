import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesPageComponent } from './deliveries-page.component';

describe('DeliveriesPageComponent', () => {
  let component: DeliveriesPageComponent;
  let fixture: ComponentFixture<DeliveriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
