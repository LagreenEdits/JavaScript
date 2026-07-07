import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTechs } from './table-techs';

describe('TableTechs', () => {
  let component: TableTechs;
  let fixture: ComponentFixture<TableTechs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTechs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTechs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
