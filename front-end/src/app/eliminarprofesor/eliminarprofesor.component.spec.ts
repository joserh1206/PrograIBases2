import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarprofesorComponent } from './eliminarprofesor.component';

describe('EliminarprofesorComponent', () => {
  let component: EliminarprofesorComponent;
  let fixture: ComponentFixture<EliminarprofesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarprofesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
