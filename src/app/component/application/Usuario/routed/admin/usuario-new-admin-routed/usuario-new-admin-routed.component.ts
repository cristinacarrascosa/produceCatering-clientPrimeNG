import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  @Input() displayBasic: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form;
  oUsuario2Send: IUsuario2Send;
  oForm: FormGroup<IUsuario2Form>;

  usuarioDialog: boolean = false;
  submitted: any;

  constructor(
    private oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oTipousuarioService: TipousuarioService
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      apellidos: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      dni: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      login: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  hideDialog() {
    this.usuarioDialog = false;
    // this.onSubmit = false;
  }

  onSubmit() {
  }
  showAddModal() {
    this.usuarioDialog = true;
    console.log("showAddModal");
  }

  hideAddModal(isClosed: boolean) {
    this.usuarioDialog = !isClosed;
  }
  closeModal() {
    this.clickClose.emit(true);
  }


}
