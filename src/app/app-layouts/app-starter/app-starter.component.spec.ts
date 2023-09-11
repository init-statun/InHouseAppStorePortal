import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStarterComponent } from './app-starter.component';

describe('AppStarterComponent', () => {
  let component: AppStarterComponent;
  let fixture: ComponentFixture<AppStarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppStarterComponent]
    });
    fixture = TestBed.createComponent(AppStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
