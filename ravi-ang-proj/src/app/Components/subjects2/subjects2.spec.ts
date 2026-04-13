import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjects2 } from './subjects2';

describe('Subjects2', () => {
  let component: Subjects2;
  let fixture: ComponentFixture<Subjects2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjects2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subjects2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
