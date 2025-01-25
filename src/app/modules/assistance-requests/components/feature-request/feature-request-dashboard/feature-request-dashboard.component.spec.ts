import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRequestDashboardComponent } from './feature-request-dashboard.component';

describe('FeatureRequestDashboardComponent', () => {
  let component: FeatureRequestDashboardComponent;
  let fixture: ComponentFixture<FeatureRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureRequestDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
