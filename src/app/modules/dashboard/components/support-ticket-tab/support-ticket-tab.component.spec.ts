import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketTabComponent } from './support-ticket-tab.component';

describe('SupportTicketTabComponent', () => {
  let component: SupportTicketTabComponent;
  let fixture: ComponentFixture<SupportTicketTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportTicketTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportTicketTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
