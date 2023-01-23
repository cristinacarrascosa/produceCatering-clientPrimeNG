import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormAdminUnroutedComponent } from './usuario-form-admin-unrouted.component';

describe('UsuarioFormAdminUnroutedComponent', () => {
  let component: UsuarioFormAdminUnroutedComponent;
  let fixture: ComponentFixture<UsuarioFormAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFormAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFormAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
