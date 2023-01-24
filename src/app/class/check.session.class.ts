import { ActivatedRoute, Router } from "@angular/router";
import { IUsuario } from "../model/usuario-interface";


export class CheckSession {

  oUsuarioSession: IUsuario;

  constructor(
      profile: string,
      protected oRouter: Router,
      protected oRoute: ActivatedRoute,
  ) {
    if (this.oRoute.snapshot.data['message']) {
      this.oUsuarioSession = this.oRoute.snapshot.data['message'];
      if (this.oUsuarioSession.tipousuario.tipo == profile) {
          localStorage.setItem("usuario", JSON.stringify(this.oRoute.snapshot.data['message']));
      } else {
          localStorage.clear();
          this.oRouter.navigate(['/','home']);
      }
  } else {
      localStorage.clear();
      this.oRouter.navigate(['/','home']);
  }
  }

}
