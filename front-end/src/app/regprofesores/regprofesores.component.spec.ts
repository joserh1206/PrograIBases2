import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegprofesoresComponent } from './regprofesores.component';

describe('RegprofesoresComponent', () => {
  let component: RegprofesoresComponent;
  let fixture: ComponentFixture<RegprofesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegprofesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
