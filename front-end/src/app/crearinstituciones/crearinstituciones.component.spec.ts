import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearinstitucionesComponent } from './crearinstituciones.component';

describe('CrearinstitucionesComponent', () => {
  let component: CrearinstitucionesComponent;
  let fixture: ComponentFixture<CrearinstitucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearinstitucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearinstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
