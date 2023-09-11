import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private service = inject(AuthService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((creds) => this.service.login(creds.alias, creds.password).pipe(
        map((user) => AuthActions.authSuccess({access_token: user.access_token, user: user.user}))
      )),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.authFailure({ error }));
      })
    )
  );
}
