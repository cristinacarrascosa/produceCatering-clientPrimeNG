import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  // Admin
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
