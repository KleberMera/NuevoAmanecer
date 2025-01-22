import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
 private readonly _usrService = inject(UsuarioService);


 usuarios = rxResource({
   loader: () => this._usrService.getUsuarios(),
 })


}
