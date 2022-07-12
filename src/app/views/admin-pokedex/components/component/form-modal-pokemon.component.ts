import {Component, Input, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonForm, PokemonModelForm } from "../../../../core/models/pokemonForm";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'modal',
  template: `
    <ng-container>
      <button>Close Dialog</button>
    </ng-container>
  `,
  providers: [ MatSnackBar ]

})


export class FormModalPokemonComponent implements OnInit {
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  @Input () form: PokemonForm  | undefined;
  formModel: any  = PokemonModelForm();
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
