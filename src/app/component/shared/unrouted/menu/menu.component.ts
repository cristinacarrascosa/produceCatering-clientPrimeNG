import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



    routeItems: MenuItem[] = [];
    activeItem: MenuItem;

    pageIndex: number = 0;

    ngOnInit() {


        this.routeItems = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home',},
            {label: 'Login', icon: 'pi pi-fw pi-user'},
            {label: 'Tipo usuario',
            icon: 'pi pi-fw pi-user',
             //command: () => this.router.navigate(['tab-1']),
            routerLink: 'admin/tipousuario/plist',},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'},
            {label: 'Salir', icon: 'pi pi-fw pi-sign-out'},
        ];

        this.activeItem = this.routeItems[0];


    }

}
