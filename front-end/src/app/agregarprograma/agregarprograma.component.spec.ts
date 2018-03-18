import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarprogramaComponent } from './agregarprograma.component';

describe('AgregarprogramaComponent', () => {
  let component: AgregarprogramaComponent;
  let fixture: ComponentFixture<AgregarprogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarprogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
