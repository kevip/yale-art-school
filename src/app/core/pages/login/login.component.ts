import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { LoginPresenter } from './login.presenter';
import { ILoginRequest } from '../../interface/login.request.interface';
import { AuthHttp } from '../../http/auth.http';

@Component({
  selector: 'yale-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [LoginPresenter],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class LoginComponent {
  private router = inject(Router);

  http = inject(AuthHttp);

  presenter = inject(LoginPresenter);

  submit(): void {
    this.presenter.form.markAllAsTouched();
    console.log('asdas')
    if (this.presenter.form.valid) {
      const request = <ILoginRequest>{
        username: this.presenter.username.value,
        password: this.presenter.password.value,
      };

      setTimeout(() => {
        this.http.login(request).subscribe({
          next: () => {
            //TODO: Add logic to show some feedback to the user
          },
          error: () => {
            //TODO: Add logic to show some feedback to the user
          }
        });
        this.router.navigate(['/']);
      }, 500);
    }
  }
}
