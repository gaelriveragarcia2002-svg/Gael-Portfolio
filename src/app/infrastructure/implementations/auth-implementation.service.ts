import { inject, Injectable, signal } from '@angular/core';
import { AuthRepository, LoginRequestDTO } from '../../domain/repositories/auth/auth.repository';
import { AUTH_EMPTY, AuthModel } from '../../domain/models/auth/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthImplementationService implements AuthRepository {

  // * Inyeccion de dependencias.
  private readonly _http = inject(HttpClient);

  // * Atributos del servico.
  private readonly $auth =  signal<AuthModel>(AUTH_EMPTY);

  // * Metodos del componente.
  login(v: LoginRequestDTO): Promise<AuthModel> {
    throw new Error('Method not implemented.');
  }
  logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  refreshToken(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  validateToken(token: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  // * Getters y Setters.
  get auth(): AuthModel {
    return this.$auth.asReadonly()();
  }
  set auth(v: AuthModel) {
    this.$auth.set(v);
  }
}
