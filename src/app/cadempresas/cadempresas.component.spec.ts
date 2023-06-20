import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadempresasComponent } from './cadempresas.component';

describe('CadempresasComponent', () => {
  let component: CadempresasComponent;
  let fixture: ComponentFixture<CadempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadempresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
