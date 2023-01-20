import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-remove-admin-routed',
  templateUrl: './usuario-remove-admin-routed.component.html',
  styleUrls: ['./usuario-remove-admin-routed.component.css']
})
export class UsuarioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario: IUsuario;
  msg: string = '';

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
