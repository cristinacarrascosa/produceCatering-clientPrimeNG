import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetailAdminRoutedComponent } from './usuario-detail-admin-routed.component';

describe('UsuarioDetailAdminRoutedComponent', () => {
  let component: UsuarioDetailAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioDetailAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDetailAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDetailAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
