import { UserModel } from "../user/user.model";

export interface AuthModel {
  token: string;
  user: UserModel | null;
}

export const AUTH_EMPTY: AuthModel = {
  token: '',
  user: null
}
