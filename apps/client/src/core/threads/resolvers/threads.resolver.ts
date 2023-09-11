import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import * as ThreadActions from '../+state/threads.actions';
import { catchError, filter, of, switchMap } from 'rxjs';

export const threadsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);
  const actions$ = inject(Actions);
  const threadId = parseInt(route.paramMap.get('id')!);
  store.dispatch(ThreadActions.loadThread({ threadId }));
  return actions$.pipe(
    ofType(ThreadActions.loadThreadSuccess, ThreadActions.loadThreadFailure),
    filter((action) => action.type == ThreadActions.loadThreadSuccess.type),
    switchMap(() => of(true)),
    catchError(() => of(false))
  );
};
