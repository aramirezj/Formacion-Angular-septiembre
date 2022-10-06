import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorLibrosComponent } from './expositor-libros.component';

describe('ExpositorLibrosComponent', () => {
  let component: ExpositorLibrosComponent;
  let fixture: ComponentFixture<ExpositorLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpositorLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpositorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
