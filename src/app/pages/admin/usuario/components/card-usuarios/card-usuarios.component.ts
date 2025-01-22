import { Component, input } from '@angular/core';
import { Usuario } from '../../../../../core/models/usuario';
import { apiResponse } from '../../../../../core/models/apiResponse';

@Component({
  selector: 'app-card-usuarios',
  imports: [],
  templateUrl: './card-usuarios.component.html',
  styleUrl: './card-usuarios.component.scss'
})
export class CardUsuariosComponent {

  usuarios = input<apiResponse<Usuario[]>>();


  getNombreCompletos(nombre : string, apellido: string): string {
    // return `${nombre} ${apellido}`;
    //Solo queremos las iniciales en mayusculas
    return `${nombre.charAt(0).toUpperCase()}${apellido.charAt(0).toUpperCase()}`;
   }
  
}
