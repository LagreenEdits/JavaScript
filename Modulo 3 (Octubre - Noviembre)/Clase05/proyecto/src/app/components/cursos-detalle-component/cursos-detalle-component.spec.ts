import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetalleComponent } from './cursos-detalle-component';

describe('CursosDetalleComponent', () => {
  let component: CursosDetalleComponent;
  let fixture: ComponentFixture<CursosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
