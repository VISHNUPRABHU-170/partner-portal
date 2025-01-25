import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceRequestsComponent } from './assistance-requests.component';

describe('AssistanceRequestsComponent', () => {
  let component: AssistanceRequestsComponent;
  let fixture: ComponentFixture<AssistanceRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistanceRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssistanceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
