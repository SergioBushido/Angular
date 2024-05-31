import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponetComponent } from './proyectos-componet.component';

describe('ProyectosComponetComponent', () => {
  let component: ProyectosComponetComponent;
  let fixture: ComponentFixture<ProyectosComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectosComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectosComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
