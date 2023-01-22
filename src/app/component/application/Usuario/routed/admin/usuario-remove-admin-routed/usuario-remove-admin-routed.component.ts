import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '@angular/common';


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
    private messaggeService: MessageService,
    private confirmationService: ConfirmationService,
    private oLocation: Location
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Usuario " + this.id + " eliminado";
      }
    })
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Esta seguro que querer eliminiar este usuario?',
      accept: () => {
        this.oUsuarioService.removeOne(this.id).subscribe({
          next: (data: number) => {
            this.messaggeService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Usuario '+ this.id + ' eliminado' ,
              life: 3000});
            this.oLocation.back();
            console.log(this.messaggeService);

          }
        })
      }

    });
  }


}


