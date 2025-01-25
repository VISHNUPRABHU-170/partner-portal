import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportTicketViewComponent } from './support-ticket-view.component';

describe('SupportTicketViewComponent', () => {
  let component: SupportTicketViewComponent;
  let fixture: ComponentFixture<SupportTicketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportTicketViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
