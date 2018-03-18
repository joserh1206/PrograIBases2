import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcursogrupoComponent } from './agregarcursogrupo.component';

describe('AgregarcursogrupoComponent', () => {
  let component: AgregarcursogrupoComponent;
  let fixture: ComponentFixture<AgregarcursogrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcursogrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcursogrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
