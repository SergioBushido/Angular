import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesComponetComponent } from './quienes-componet.component';

describe('QuienesComponetComponent', () => {
  let component: QuienesComponetComponent;
  let fixture: ComponentFixture<QuienesComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuienesComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienesComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
