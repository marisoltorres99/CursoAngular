import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEnLineaComponent } from './componente-en-linea.component';

describe('ComponenteEnLineaComponent', () => {
  let component: ComponenteEnLineaComponent;
  let fixture: ComponentFixture<ComponenteEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEnLineaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
