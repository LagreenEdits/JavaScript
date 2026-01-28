import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFormComponent } from './ejemplo-form-component';

describe('EjemploFormComponent', () => {
  let component: EjemploFormComponent;
  let fixture: ComponentFixture<EjemploFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
