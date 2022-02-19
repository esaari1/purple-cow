import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUpdateComponent } from './counter-update.component';

describe('CounterUpdateComponent', () => {
  let component: CounterUpdateComponent;
  let fixture: ComponentFixture<CounterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
