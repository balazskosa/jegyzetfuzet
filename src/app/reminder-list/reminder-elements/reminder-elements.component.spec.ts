import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderElementsComponent } from './reminder-elements.component';

describe('ReminderElementsComponent', () => {
  let component: ReminderElementsComponent;
  let fixture: ComponentFixture<ReminderElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
