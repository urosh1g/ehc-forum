import { CreateUser } from '@ehc/common/dtos';
import { User } from '@ehc/common/entities';
import { createAction, props } from '@ngrx/store';

export const initAuth = createAction('[Auth Page] Init');

export const login = createAction(
  '[Auth Page] Login',
  props<{ alias: string; password: string }>()
);
export const register = createAction(
  '[Auth Page] Register',
  props<{ credentials: CreateUser }>()
);

export const authSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ access_token: string, user: User }>()
);

export const authFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);
