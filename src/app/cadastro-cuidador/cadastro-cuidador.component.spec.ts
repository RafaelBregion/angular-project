import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCuidadorComponent } from './cadastro-cuidador.component';

describe('CadastroCuidadorComponent', () => {
  let component: CadastroCuidadorComponent;
  let fixture: ComponentFixture<CadastroCuidadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCuidadorComponent]
    });
    fixture = TestBed.createComponent(CadastroCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
