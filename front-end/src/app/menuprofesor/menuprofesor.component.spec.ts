import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprofesorComponent } from './menuprofesor.component';

describe('MenuprofesorComponent', () => {
  let component: MenuprofesorComponent;
  let fixture: ComponentFixture<MenuprofesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuprofesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
