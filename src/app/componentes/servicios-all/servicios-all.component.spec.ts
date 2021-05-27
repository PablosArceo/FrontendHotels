import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAllComponent } from './servicios-all.component';

describe('ServiciosAllComponent', () => {
  let component: ServiciosAllComponent;
  let fixture: ComponentFixture<ServiciosAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
