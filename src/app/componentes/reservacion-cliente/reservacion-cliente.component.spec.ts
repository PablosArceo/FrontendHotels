import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionClienteComponent } from './reservacion-cliente.component';

describe('ReservacionClienteComponent', () => {
  let component: ReservacionClienteComponent;
  let fixture: ComponentFixture<ReservacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
