import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearescuelaComponent } from './crearescuela.component';

describe('CrearescuelaComponent', () => {
  let component: CrearescuelaComponent;
  let fixture: ComponentFixture<CrearescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
