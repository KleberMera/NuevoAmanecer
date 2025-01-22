import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Usuario } from '../../../../../core/models/usuario';
import { CardUsuariosComponent } from "../../components/card-usuarios/card-usuarios.component";
import { TableUsuariosComponent } from "../../components/table-usuarios/table-usuarios.component";
import { ScreenService } from '../../../../../services/screen.service';

@Component({
  selector: 'app-user-list',
  imports: [CardUsuariosComponent, TableUsuariosComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
 private readonly _usrService = inject(UsuarioService);
 public readonly _screenService = inject(ScreenService);


 usuarios = rxResource({
   loader: () => this._usrService.getUsuarios(),
 })


 
 
}
