import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/shared-interface';
import { IUsuario, UsuarioResponse } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})
export class UsuarioPlistAdminRoutedComponent implements OnInit {

  usuarios: IUsuario[] = [];
  displayAddModal = false;
  displayBasic: boolean;

  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_tipousuario: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  totalElements: number;

  private pagesCount: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getUsuariosList();
  }

  getUsuariosList() {
    this.oUsuarioService.getUsuariosList(this.page, this.numberOfElements, this.sortField, this.sortDirection, this.strTermFilter, this.id_tipousuario)
    .subscribe({
      next: (resp: UsuarioResponse) => {
        this.usuarios = resp.content;
        this.totalElements = resp.totalElements;
        //this.pagesCount = resp.totalPages;
        console.log(resp);
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    }

    )
  }

  showAddModal(){
    this.displayAddModal = true;
    console.log("showAddModal");
  }

  setPage(e:any){
    this.page = e.page;
    this.numberOfElements = e.rows;
    this.getUsuariosList();
  }

  showBasicDialog() {
    this.displayBasic = true;
}



  hideAddModal(isClosed: boolean){
    this.displayAddModal = !isClosed;
  }

}
