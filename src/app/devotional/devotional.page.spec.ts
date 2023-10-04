import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevotionalPage } from './devotional.page';

describe('DevotionalPage', () => {
  let component: DevotionalPage;
  let fixture: ComponentFixture<DevotionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevotionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
