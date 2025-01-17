import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { HttpErrorResponse } from '@angular/common/http';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _validator = inject(FormValidationService);
  form = this._authService.formlogin();
  showPassword = signal<boolean>(false);

  getErrorMessage(fielName: string): string {
    const validation = this._validator.getErrorMessage(
      this.form().get(fielName) as FormControl
    );

    return validation;
  }

  isFieldInvalid(field: string): boolean {
    //return this.form().get(field)?.invalid;
    const invalid = this._validator.isFielInvalid(this.form(), field);
    return invalid;
  }

  onSubmit() {
    if (this.form().invalid) return;
    this._authService.login(this.form().value).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/home']);
        toast.success(res.message);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        toast.error(err.error.message);
      },
    });
  }
}
