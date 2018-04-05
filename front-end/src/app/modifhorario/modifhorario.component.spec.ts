import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifhorarioComponent } from './modifhorario.component';

describe('ModifhorarioComponent', () => {
  let component: ModifhorarioComponent;
  let fixture: ComponentFixture<ModifhorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifhorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifhorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
