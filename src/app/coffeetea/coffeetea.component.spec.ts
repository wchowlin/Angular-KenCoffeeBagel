import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeteaComponent } from './coffeetea.component';

describe('CoffeeteaComponent', () => {
  let component: CoffeeteaComponent;
  let fixture: ComponentFixture<CoffeeteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
