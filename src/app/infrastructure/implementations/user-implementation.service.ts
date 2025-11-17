import { inject, Injectable } from '@angular/core';
import { UserRepository } from '../../domain/repositories/user/user.repository';
import { UserModel } from '../../domain/models/user/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserImplementationService implements UserRepository {
  // * Inyeccion de dependencias.
  private readonly _http = inject(HttpClient);

  // * Metodos del servicio.
  getUserById(id: string): Promise<UserModel | null> {
    throw new Error('Method not implemented.');
  }
  getUsers(): Promise<UserModel[]> {
    throw new Error('Method not implemented.');
  }
  createUser(user: UserModel): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: string, user: Partial<UserModel>): Promise<UserModel | null> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
