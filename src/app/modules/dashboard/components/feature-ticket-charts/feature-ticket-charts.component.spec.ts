import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTicketChartsComponent } from './feature-ticket-charts.component';

describe('FeatureTicketChartsComponent', () => {
  let component: FeatureTicketChartsComponent;
  let fixture: ComponentFixture<FeatureTicketChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTicketChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTicketChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
