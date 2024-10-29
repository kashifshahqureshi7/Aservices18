import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commp2Component } from './commp2.component';

describe('Commp2Component', () => {
  let component: Commp2Component;
  let fixture: ComponentFixture<Commp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
