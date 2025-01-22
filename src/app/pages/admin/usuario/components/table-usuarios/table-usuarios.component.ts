import { Component, input } from '@angular/core';
import { apiResponse } from '../../../../../core/models/apiResponse';
import { Usuario } from '../../../../../core/models/usuario';

@Component({
  selector: 'app-table-usuarios',
  imports: [],
  templateUrl: './table-usuarios.component.html',
  styleUrl: './table-usuarios.component.scss'
})
export class TableUsuariosComponent {
 usuarios = input<apiResponse<Usuario[]>>();
}
