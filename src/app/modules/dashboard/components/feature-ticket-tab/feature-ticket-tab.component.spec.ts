import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTicketTabComponent } from './feature-ticket-tab.component';

describe('FeatureTicketTabComponent', () => {
  let component: FeatureTicketTabComponent;
  let fixture: ComponentFixture<FeatureTicketTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTicketTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTicketTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
