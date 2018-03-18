import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestudiantesComponent } from './regestudiantes.component';

describe('RegestudiantesComponent', () => {
  let component: RegestudiantesComponent;
  let fixture: ComponentFixture<RegestudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
