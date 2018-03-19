import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarestudianteComponent } from './eliminarestudiante.component';

describe('EliminarestudianteComponent', () => {
  let component: EliminarestudianteComponent;
  let fixture: ComponentFixture<EliminarestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
