import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertHabitComponent } from './insert-habit.component';

describe('InsertHabitComponent', () => {
  let component: InsertHabitComponent;
  let fixture: ComponentFixture<InsertHabitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertHabitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
