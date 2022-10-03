import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLibroComponent } from './edicion-libro.component';

describe('EdicionLibroComponent', () => {
  let component: EdicionLibroComponent;
  let fixture: ComponentFixture<EdicionLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
