import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commp1Component } from './commp1.component';

describe('Commp1Component', () => {
  let component: Commp1Component;
  let fixture: ComponentFixture<Commp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
