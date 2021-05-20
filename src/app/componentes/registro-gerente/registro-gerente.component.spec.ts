import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGerenteComponent } from './registro-gerente.component';

describe('RegistroGerenteComponent', () => {
  let component: RegistroGerenteComponent;
  let fixture: ComponentFixture<RegistroGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
