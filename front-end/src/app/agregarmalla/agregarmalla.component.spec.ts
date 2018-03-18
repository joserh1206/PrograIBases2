import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmallaComponent } from './agregarmalla.component';

describe('AgregarmallaComponent', () => {
  let component: AgregarmallaComponent;
  let fixture: ComponentFixture<AgregarmallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarmallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
