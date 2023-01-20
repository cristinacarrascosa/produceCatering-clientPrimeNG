import { Component, Input, OnInit } from '@angular/core';

import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-detail-admin-routed',
  templateUrl: './usuario-detail-admin-routed.component.html',
  styleUrls: ['./usuario-detail-admin-routed.component.css']
})
export class UsuarioDetailAdminRoutedComponent implements OnInit {

  @Input() id: number;
  oUsuario: IUsuario;
  data: any =[];

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        this.data.push(this.oUsuario);
        //console.log(data);
      }
    })
  }

  changeID(ev){
    this.id = ev.target.value;
    console.log(this.id);

  }

}
