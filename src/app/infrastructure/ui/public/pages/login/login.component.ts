import { Component, inject } from '@angular/core';
import { USER_REPOSITORY } from '../../../../../domain/repositories/user/user.repository';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-page">
      <h1>Iniciar sesión</h1>
    </div>
  `,
})
export class LoginComponent {
  // * Inyeccion de dependencias.
  private readonly _user = inject(USER_REPOSITORY);
}
