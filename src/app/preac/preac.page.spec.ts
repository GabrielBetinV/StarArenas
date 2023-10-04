import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreacPage } from './preac.page';

describe('PreacPage', () => {
  let component: PreacPage;
  let fixture: ComponentFixture<PreacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
