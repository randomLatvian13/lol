import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCalculationFormComponent } from './new-calculation-form.component';

describe('NewCalculationFormComponent', () => {
  let component: NewCalculationFormComponent;
  let fixture: ComponentFixture<NewCalculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCalculationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
