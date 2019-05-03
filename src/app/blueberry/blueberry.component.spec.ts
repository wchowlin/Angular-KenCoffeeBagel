import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueberryComponent } from './blueberry.component';

describe('BlueberryComponent', () => {
  let component: BlueberryComponent;
  let fixture: ComponentFixture<BlueberryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueberryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
