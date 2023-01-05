import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

import {MenuItem} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './component/shared/routed/home/home.component';

import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TipousuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule,
    TableModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
