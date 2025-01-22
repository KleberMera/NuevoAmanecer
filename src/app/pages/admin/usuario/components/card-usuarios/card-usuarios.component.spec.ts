import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsuariosComponent } from './card-usuarios.component';

describe('CardUsuariosComponent', () => {
  let component: CardUsuariosComponent;
  let fixture: ComponentFixture<CardUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
