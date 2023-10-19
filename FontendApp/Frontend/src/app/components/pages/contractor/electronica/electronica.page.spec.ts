import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicaPage } from './electronica.page';

describe('ElectronicaPage', () => {
  let component: ElectronicaPage;
  let fixture: ComponentFixture<ElectronicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
