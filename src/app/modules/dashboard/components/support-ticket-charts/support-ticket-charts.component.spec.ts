import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketChartsComponent } from './support-ticket-charts.component';

describe('SupportTicketChartsComponent', () => {
  let component: SupportTicketChartsComponent;
  let fixture: ComponentFixture<SupportTicketChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportTicketChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportTicketChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
