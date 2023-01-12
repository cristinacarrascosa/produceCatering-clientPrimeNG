import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../environments/environment';
import { Observable } from 'rxjs';
import { IUsuario, IUsuario2Send, UsuarioResponse } from '../model/usuario-interface';
import { IPage } from '../model/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private entityURL = '/usuario';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuariosPlist(page: number, size: number, termino: string, id_tipousuario: number,
    strSortField: string, strOrderDirection: string): Observable<IPage<UsuarioResponse>> {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size)
      .set("filter", termino);
    if (id_tipousuario != 0) {
      params = params.set("id_tipousuario", id_tipousuario);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    //let url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<IPage<UsuarioResponse>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUsuario2Send);
  }

  newOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url + '/', oUsuario2Send);
  }

  getUsuariosList(page: number, size: number, sort: string, direction: string, filter: string, id_tipousuario: number): Observable<UsuarioResponse> {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size)
      .set("filter", filter);
    if (sort != "") {
      if (direction != "") {
        params = params.set("sort", sort + "," + direction);
      } else {
        params = params.set("sort", sort);
      }
    }
    if (id_tipousuario != 0) {
      params = params.set("tipousuario", id_tipousuario);
    }
    return this.oHttp.get<UsuarioResponse>(this.url, { params: params });
  }
}
