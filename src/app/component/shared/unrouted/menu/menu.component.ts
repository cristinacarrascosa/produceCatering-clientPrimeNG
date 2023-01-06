import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { IUser } from 'src/app/model/shared-interface';
import { MetadataService } from 'src/app/service/metadata.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  oUsuarioSession: IUser;
  strUserName: string = "";
  strUrl: String = "";

    routeItems: MenuItem[] = [];
    activeItem: MenuItem;

    pageIndex: number = 0;
    //router: any;

    constructor(
      //private oSessionService: SessionService,
      private router: Router,
      public oMetadataService: MetadataService
      ) {
        this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
        this.router.events.subscribe((ev) => {
          if (ev instanceof NavigationEnd) {
            this.strUrl = ev.url;
          }
        })

      }

    ngOnInit() {


        this.routeItems = [
            {label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: 'home',},

            {label: 'Login',
            icon: 'pi pi-fw pi-user'},

            {label: 'Tipo usuario',
            icon: 'pi pi-fw pi-list',
            //command: () => this.router.navigate(['admin/tipousuario/plist']),
            routerLink: 'admin/tipousuario/plist',},

            {label: 'Usuario',
            icon: 'pi pi-fw pi-list',
            //command: () => this.router.navigate(['admin/usuario/view/:id']),
            routerLink: 'admin/usuario/plist',},

            {label: 'Settings',
             icon: 'pi pi-fw pi-cog'},

            {label: 'Salir',
            icon: 'pi pi-fw pi-sign-out'},
        ];

        this.activeItem = this.routeItems[0];


    }

}
