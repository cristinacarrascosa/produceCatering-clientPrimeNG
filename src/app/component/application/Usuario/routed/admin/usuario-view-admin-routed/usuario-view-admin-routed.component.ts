import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../../../model/usuario-interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css']
})
export class UsuarioViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario: IUsuario;
  submitted: boolean;
  usuarios: IUsuario[] = [];
  productDialog: boolean;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();

  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
      }
    })
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

  // getUsuariosList(){
  //   this.oUsuarioService.getUsuariosList().subscribe({
  //     next: (data: IUsuario[]) => {
  //       this.usuarios = data;
  //       console.log(data);
  //     }
  //   })

  // }



}
