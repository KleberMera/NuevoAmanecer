import { Component, computed, input } from '@angular/core';
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


  getInitials = (usuario: Usuario) => computed(() => {
    const nombre = usuario.nombre.charAt(0).toUpperCase();
    const apellido = usuario.apellido.charAt(0).toUpperCase();
    return `${nombre}${apellido}`;
  });



}
