import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsEg } from './reactive-forms-eg';

describe('ReactiveFormsEg', () => {
  let component: ReactiveFormsEg;
  let fixture: ComponentFixture<ReactiveFormsEg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsEg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsEg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
