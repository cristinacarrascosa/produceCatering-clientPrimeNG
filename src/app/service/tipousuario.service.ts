import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../environments/environment';
import { Observable } from 'rxjs';
import { ITipousuario, TipoUsuarioResponse } from '../model/tipousuario-interface';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  constructor( private oHttp : HttpClient) { }

  private entityURL: string = "/tipousuario";

  getTipousuarioPlist(page: number, size: number): Observable<TipoUsuarioResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<TipoUsuarioResponse>(url, {params: params});
  }

  getOne(id: number): Observable<ITipousuario> {
    return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id);
  }
}
