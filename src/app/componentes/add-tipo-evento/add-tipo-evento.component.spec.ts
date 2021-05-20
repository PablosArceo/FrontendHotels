import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoEventoComponent } from './add-tipo-evento.component';

describe('AddTipoEventoComponent', () => {
  let component: AddTipoEventoComponent;
  let fixture: ComponentFixture<AddTipoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
