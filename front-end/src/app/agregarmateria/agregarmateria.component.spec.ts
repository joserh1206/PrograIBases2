import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmateriaComponent } from './agregarmateria.component';

describe('AgregarmateriaComponent', () => {
  let component: AgregarmateriaComponent;
  let fixture: ComponentFixture<AgregarmateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarmateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
