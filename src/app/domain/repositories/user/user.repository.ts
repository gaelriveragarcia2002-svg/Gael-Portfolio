import { InjectionToken } from "@angular/core";
import { UserModel } from "../../models/user/user.model";

export interface UserRepository {
  getUserById(id: string): Promise<UserModel | null>;
  getUsers(): Promise<UserModel[]>;
  createUser(user: UserModel): Promise<UserModel>;
  updateUser(id: string, user: Partial<UserModel>): Promise<UserModel | null>;
  deleteUser(id: string): Promise<boolean>;
}

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserUseCase');
