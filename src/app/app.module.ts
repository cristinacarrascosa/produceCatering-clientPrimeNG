import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';


import {MenuItem} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';

import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';

import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioDetailAdminRoutedComponent } from './component/application/Usuario/unrouted/admin/usuario-detail-admin-routed/usuario-detail-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';



import { UsuarioService } from './service/usuario.service';
import { SessionService } from './service/session.service';
import { UsuarioFormAdminUnroutedComponent } from './component/application/Usuario/unrouted/admin/usuario-form-admin-unrouted/usuario-form-admin-unrouted.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TipousuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    UsuarioDetailAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioFormAdminUnroutedComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    PanelModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DropdownModule






  ],
  providers: [
    UsuarioService,
    SessionService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
