import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, withLatestFrom } from 'rxjs';
import { ThreadsService } from '../services/threads.service';
import * as ThreadsActions from './threads.actions';
import * as ThreadsSelectors from './threads.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class ThreadsEffects {
  private actions$ = inject(Actions);
  private service = inject(ThreadsService);
  private store = inject(Store);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThreadsActions.initThreads),
      withLatestFrom(this.store.select(ThreadsSelectors.selectAllThreads)),
      switchMap(([_, threads]) =>
        threads.length != 0
          ? of(ThreadsActions.loadThreadsSuccess({ threads }))
          : this.service
              .fetchAll()
              .pipe(
                map((threads) => ThreadsActions.loadThreadsSuccess({ threads }))
              )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ThreadsActions.loadThreadsFailure({ error }));
      })
    )
  );

  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThreadsActions.loadThread),
      switchMap((action) =>
        this.service
          .fetchOne(action.threadId)
          .pipe(map((thread) => ThreadsActions.loadThreadSuccess({ thread })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ThreadsActions.loadThreadFailure({ error }));
      })
    )
  );
}
