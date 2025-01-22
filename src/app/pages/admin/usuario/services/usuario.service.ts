import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { apiResponse } from '../../../../core/models/apiResponse';
import { Usuario } from '../../../../core/models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly _http = inject(HttpClient);

  //onstructor(private readonly _http: HttpClient) { }

  getUsuarios(): Observable<apiResponse<Usuario[]>> {
    const url = `${environment.apiUrl}/usuarios/all`;
    return this._http.get<apiResponse<Usuario[]>>(url);
  }
}
