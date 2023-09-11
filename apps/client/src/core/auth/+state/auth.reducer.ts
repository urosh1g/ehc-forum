import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { User } from '@ehc/common/entities';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends EntityState<User> {
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
  token: string;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialAuthState: AuthState = authAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  token: "",
});

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.authSuccess, (state, action) => {
    return {
      ...state,
      token: action.access_token,
      ...action.user,
      loaded: true
    }
  }),
  on(AuthActions.authFailure, (state, { error }) => ({ ...state, error }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
