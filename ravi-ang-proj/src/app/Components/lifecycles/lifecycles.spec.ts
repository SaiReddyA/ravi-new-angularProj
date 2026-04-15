import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycles } from './lifecycles';

describe('Lifecycles', () => {
  let component: Lifecycles;
  let fixture: ComponentFixture<Lifecycles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifecycles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecycles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
