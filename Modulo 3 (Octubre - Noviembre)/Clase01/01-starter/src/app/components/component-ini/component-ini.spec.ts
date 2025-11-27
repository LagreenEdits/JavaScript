import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIni } from './component-ini';

describe('ComponentIni', () => {
  let component: ComponentIni;
  let fixture: ComponentFixture<ComponentIni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentIni]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
