import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/model/constants';
import { ITipousuario } from 'src/app/model/tipousuario-interface';
import { IUsuario, IUsuario2Send } from 'src/app/model/usuario-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-form-admin-unrouted',
  templateUrl: './usuario-form-admin-unrouted.component.html',
  styleUrls: ['./usuario-form-admin-unrouted.component.css']
})
export class UsuarioFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();


  oData2Show: IUsuario = null;
  oData2Send: IUsuario2Send = null;
  strProfile: string = Constants.PROFILES.administrador;
  strEntity: string = Constants.ENTITIES.usuario;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;

  tiposUsuario: ITipousuario[];
  tipousuarioSelect: ITipousuario;

  get f() {
    return this.oForm;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oUsuarioService: UsuarioService,
    private oTipousuarioService: TipousuarioService,
    public oMetadataService: MetadataService,
  ) {
    this.tiposUsuario = [
      { id: 1, tipo: 'Administrador' , usuarios: 0},
      { id: 2, tipo: 'Usuario' , usuarios: 0},

    ];
  }



  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        id: [''],
        nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        dni: ['', [Validators.required, Validators.minLength(9)]],
        apellidos: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
        login: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
        email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        id_tipousuario: ["", [Validators.required]]
      });
    }
  }


  get = (): void => {
    this.oUsuarioService
      .getOne(this.id)
      .subscribe((oData: IUsuario) => {
        this.oData2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oData2Show.id],
          nombre: [
            this.oData2Show.nombre,
            [Validators.required, Validators.minLength(5)]
          ],
          login: [this.oData2Show.login, [Validators.required, Validators.minLength(5)]],
          apellidos: [this.oData2Show.apellidos, [Validators.required, Validators.minLength(5)]],
          email: [this.oData2Show.email, [Validators.required, Validators.minLength(5)]],
          dni: [this.oData2Show.dni, [Validators.required, Validators.minLength(5)]],
          id_tipousuario: [this.oData2Show.tipousuario.id, [Validators.required, Validators.minLength(1)]]
        });
      }, (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      })
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oData2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
          dni: this.oForm.value.dni,
          apellidos: this.oForm.value.apellidos,
          login: this.oForm.value.login,
          email: this.oForm.value.email,
          tipousuario: {
            id: this.oForm.value.id_tipousuario
          }
        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.strOperation == "new") {
      this.oUsuarioService
        .newOne(this.oData2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    } else {
      this.oUsuarioService
        .updateOne(this.oData2Send)
        .subscribe((id: number) => {

          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    }
  };

  onFindSelection($event: number) {
    this.oForm.controls['id_tipousuario'].setValue($event);
    this.oForm.controls['id_tipousuario'].markAsDirty();
    this.oTipousuarioService
      .getOne(this.oForm.controls['id_tipousuario'].value)
      .subscribe((oData: ITipousuario) => {
        if (this.strOperation == "edit") {
          this.oData2Show.tipousuario = oData; //pte!!
        } else {
          this.oData2Show = {} as IUsuario;
          this.oData2Show.tipousuario = {} as ITipousuario;;
          this.oData2Show.tipousuario = oData;
        }
      }, err => {
        this.oData2Show.tipousuario.tipo = "ERROR";
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

  

}
