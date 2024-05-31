import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponetComponent } from './contacto-componet.component';

describe('ContactoComponetComponent', () => {
  let component: ContactoComponetComponent;
  let fixture: ComponentFixture<ContactoComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
