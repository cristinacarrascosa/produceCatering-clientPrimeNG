import { Component, OnInit } from '@angular/core';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form;
  oUsuario2Send: IUsuario2Send;

  constructor() { }

  ngOnInit(): void {
  }



}
