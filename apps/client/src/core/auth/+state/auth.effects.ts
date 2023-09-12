import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, EMPTY, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private service = inject(AuthService);
  private router = inject(Router);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((creds) =>
        this.service
          .login(creds.alias, creds.password)
          .pipe(
            map((user) =>
              AuthActions.authSuccess({
                access_token: user.access_token,
                user: user.user,
              })
            )
          )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.authFailure({ error }));
      })
    )
  );

  authenticated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authSuccess),
        tap(() => this.router.navigateByUrl('/threads'))
      ),
    { dispatch: false }
  );
}
