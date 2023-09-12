import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, withLatestFrom, map } from 'rxjs';
import * as CommentsActions from './comments.actions';
import * as CommentsSelectors from './comments.selectors';
import { Store } from '@ngrx/store';
import { CommentsService } from '../services/comments.service';

@Injectable()
export class CommentsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private service = inject(CommentsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.initComments),
      withLatestFrom(this.store.select(CommentsSelectors.selectAllComments)),
      switchMap(([_, comments]) =>
        comments.length != 0
          ? of(CommentsActions.loadCommentsSuccess({ comments }))
          : this.service
              .fetchAll()
              .pipe(
                map((comments) =>
                  CommentsActions.loadCommentsSuccess({ comments })
                )
              )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CommentsActions.loadCommentsFailure({ error }));
      })
    )
  );

  byPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.loadPostComments),
      switchMap((action) =>
        this.service
          .fetchByPost(action.postId)
          .pipe(
            map((comments) =>
              CommentsActions.loadPostCommentsSuccess({ comments })
            )
          )
      ),
      catchError((error) => {
        console.log('Error', error);
        return of(CommentsActions.loadPostCommentsFailure({ error }));
      })
    )
  );
}
