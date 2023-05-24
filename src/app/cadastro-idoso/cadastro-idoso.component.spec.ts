import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIdosoComponent } from './cadastro-idoso.component';

describe('CadastroIdosoComponent', () => {
  let component: CadastroIdosoComponent;
  let fixture: ComponentFixture<CadastroIdosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroIdosoComponent]
    });
    fixture = TestBed.createComponent(CadastroIdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
