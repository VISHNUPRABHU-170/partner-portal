import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSubComponent } from './navigation-sub.component';

describe('NavigationSubComponent', () => {
  let component: NavigationSubComponent;
  let fixture: ComponentFixture<NavigationSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
