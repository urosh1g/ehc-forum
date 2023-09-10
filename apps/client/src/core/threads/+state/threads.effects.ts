import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { ThreadsService } from '../services/threads.service';
import * as ThreadsActions from './threads.actions';

@Injectable()
export class ThreadsEffects {
  private actions$ = inject(Actions);
  private service = inject(ThreadsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThreadsActions.initThreads),
      switchMap(() => this.service.fetchAll().pipe(
        map((threads) => ThreadsActions.loadThreadsSuccess({threads}))
      )),
      catchError((error) => {
        console.error('Error', error);
        return of(ThreadsActions.loadThreadsFailure({ error }));
      })
    )
  );
}
