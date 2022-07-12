import {Validators} from '@angular/forms';

export interface PokemonForm {
  id?: string;
  name?: string;
  permissions?: string;
  status?: string;
  adminPermission?: string;
  managementPermission?: string;
  configPermission?: string;
  reportsPermission?: string;
  callsPermission?: string;
  code?:string;
}

export function PokemonModelForm(data?: PokemonForm) {
  const {name, adminPermission, managementPermission} = data || {name: null, adminPermission: null, managementPermission: null};
  return {
    type: 'horizontal',
    columns: 1,
    inputs: [
      {
        row: 1,
        type: 'input', label: 'Nombre', name: 'name',
        required: true, value: data ? data.name : null,
        validation: [Validators.required]
      },
      {
        row: 2,
        type: 'select', inputType: 'select', label: 'Admin Permission', name: 'adminPermission',
        value: data ? data.adminPermission : null,
        options: [
          {label: 'SI', value: '1'},
          {label: 'NO', value: '0'}
        ]
      },
      {
        row: 2,
        type: 'select', inputType: 'select', label: 'Gestion Permission', name: 'managementPermission',
        value: data ? data.managementPermission : null,
        options: [
          {label: 'SI', value: '1'},
          {label: 'NO', value: '0'}
        ]
      },
      {
        row: 2,
        type: 'select', inputType: 'select', label: 'Config Permission', name: 'configPermission',
        value: data ? data.configPermission : null,
        options: [
          {label: 'SI', value: '1'},
          {label: 'NO', value: '0'}
        ]
      },
      {
        row: 2,
        type: 'select', inputType: 'select', label: 'Reports Permission', name: 'reportsPermission',
        value: data ? data.reportsPermission : null,
        options: [
          {label: 'SI', value: '1'},
          {label: 'NO', value: '0'}
        ]
      },
      {
        row: 2,
        type: 'select', inputType: 'select', label: 'Calls Permission', name: 'callsPermission',
        value: data ? data.callsPermission : null,
        options: [
          {label: 'SI', value: '1'},
          {label: 'NO', value: '0'}
        ]
      }
    ]
  };
}




