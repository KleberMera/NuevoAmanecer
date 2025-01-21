import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { User } from '../../core/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { apiResponse } from '../../core/models/apiResponse';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _storage = inject(StorageService);
  private keyUser = signal<string>('user');
  private keyToken = signal<string>('access_token');

  formlogin(data: Partial<User> = {}) {
    const form = signal<FormGroup>(
      new FormGroup({
        username: new FormControl(data.username, [Validators.required]),
        password: new FormControl(data.password, [
          Validators.required,
          Validators.minLength(8),
        ]),
      })
    );
    return form;
  }

  login(user: User): Observable<apiResponse<User>> {
    const url = `${environment.apiUrl}/auth/login`;
    return this._http.post<apiResponse<User>>(url, user).pipe(
      tap((res) => {
        console.log(res);
        this._storage.set(this.keyUser(), res.data);
        this._storage.set(this.keyToken(), res.access_token);
      })
    );
  }
}
