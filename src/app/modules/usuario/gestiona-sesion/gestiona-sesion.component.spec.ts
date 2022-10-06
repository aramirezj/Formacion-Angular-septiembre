import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaSesionComponent } from './gestiona-sesion.component';

describe('GestionaSesionComponent', () => {
  let component: GestionaSesionComponent;
  let fixture: ComponentFixture<GestionaSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionaSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
