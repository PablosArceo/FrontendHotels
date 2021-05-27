import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservacionComponent } from './add-reservacion.component';

describe('AddReservacionComponent', () => {
  let component: AddReservacionComponent;
  let fixture: ComponentFixture<AddReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
