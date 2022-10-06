import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionLibrosComponent } from './creacion-libros.component';

describe('CreacionLibrosComponent', () => {
  let component: CreacionLibrosComponent;
  let fixture: ComponentFixture<CreacionLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
