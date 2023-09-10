import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, withLatestFrom } from 'rxjs';
import * as ThreadSelectors from '../../threads/+state/threads.selectors';
import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';
import { PostsService } from '../services/posts.service';
import { Store } from '@ngrx/store';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private service = inject(PostsService);
  private store = inject(Store);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initPosts),
      switchMap(() => this.service.fetchAll().pipe(
        map((posts) => PostsActions.loadPostsSuccess({posts}))
      )),
      catchError((error) => {
        console.error('Error', error);
        return of(PostsActions.loadPostsFailure({ error }));
      })
    )
  );

  thread$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initThreadPosts),
      withLatestFrom(this.store.select(ThreadSelectors.selectSelectedId)),
      switchMap(([action, state]) => this.service.fetchByThread(action.threadId).pipe(
        map((posts) => PostsActions.loadPostsSuccess({posts}))
      )),
      catchError((error) => {
        console.error('Error', error);
        return of(PostsActions.loadPostsFailure({ error }));
      })
    )
  );
}
