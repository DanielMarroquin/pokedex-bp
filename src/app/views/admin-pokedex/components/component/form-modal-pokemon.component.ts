import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonForm, editModelForm } from "../../../../core/models/pokemonForm";


@Component({
  selector: 'app-form-modal-role',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">{{action}} Rol</h4>
      <button
        type="button"
        class="close"
        aria-label="Close button"
        aria-describedby="modal-title"
      >
        <span aria-hidden="true">x</span>
      </button>
    </div>
    <div class="modal-body">
      <app-dynamic-form #formComponent [config]="formModel"></app-dynamic-form>
    </div>
    <div class="modal-footer">
      <app-load-button [isLoad]="isSaving" (onClickButton)="save()" ></app-load-button>
      <button type="button" class="btn btn-secondary mx-2">Cancelar</button>
    </div>
  `,
  providers: [ MatSnackBar ]

})


export class FormModalPokemonComponent implements OnInit {
  @Input () form: PokemonForm  | undefined;
  formModel: any  = editModelForm();
  isSaving = false;
  action = 'Nuevo'
  permissions: any = [];
  permissionsJson: any ;
  isSend= false;
  valor: any;


  constructor(
    private snackBar: MatSnackBar,
    // public configService: ConfigService,
  ) {
    // this.configService.getListConfig().subscribe({
    //   next: (data: [any]) => {
    //     this.valor=data
    //     const input = this.formModel.inputs.find((row: any) => row.name === 'permissions');
    //     input.options = this.valor.value.map(({ title, code}: any) => ({label: title, value: code}));
    //   },
    // })
  }


  ngOnInit(): void {
    if(this.form){
      this.action = 'Editar'
      this.permissionsJson = this.form;
      const data1 = JSON.parse(this.permissionsJson.permissions);
      this.form.permissions = data1;
      // this.formModel = editModelForm(this.role)
      this.form.permissions = JSON.stringify(this.permissionsJson.permissions);
    }
  }

  save() {

  }
//TODO:Par el control a un servicio
  private alertError(err: any) {
    this.snackBar.open(
      err.message || 'Error al cargar los datos ',
      `Error: ${err.code || 'no definido'}`,
      {
        duration: 4000,
        panelClass: 'snackbar-danger',
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
  }


}
