import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPracticasComponent } from './solicitudes-practicas.component';

describe('SolicitudesPracticasComponent', () => {
  let component: SolicitudesPracticasComponent;
  let fixture: ComponentFixture<SolicitudesPracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPracticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
