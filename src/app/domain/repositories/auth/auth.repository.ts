import { InjectionToken } from "@angular/core";
import { AuthModel } from "../../models/auth/auth.model";

export interface AuthRepository {
  login(v: LoginRequestDTO): Promise<AuthModel>;
  logout(): Promise<void>;
  refreshToken(): Promise<string>;
  validateToken(token: string): Promise<boolean>;

  get auth(): AuthModel;
  set auth(v: AuthModel);
}

export const AUTH_REPOSITORY = new InjectionToken<AuthRepository>('AuthUseCase');

// * Request y Response DTOs (Data Transfer Object).
export interface LoginRequestDTO {
  email: string;
  password: string;
}
