import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTicketViewComponent } from './feature-ticket-view.component';

describe('FeatureTicketViewComponent', () => {
  let component: FeatureTicketViewComponent;
  let fixture: ComponentFixture<FeatureTicketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTicketViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
