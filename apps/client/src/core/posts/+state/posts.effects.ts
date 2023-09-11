import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, withLatestFrom, tap } from 'rxjs';
import * as PostsSelectors from './posts.selectors';
import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';
import { PostsService } from '../services/posts.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private service = inject(PostsService);
  private store = inject(Store);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initPosts),
      withLatestFrom(this.store.select(PostsSelectors.selectAllPosts)),
      switchMap(([action, posts]) =>
        posts.length != 0
          ? of(PostsActions.loadPostsSuccess({ posts }))
          : this.service
              .fetchAll()
              .pipe(map((posts) => PostsActions.loadPostsSuccess({ posts })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PostsActions.loadPostsFailure({ error }));
      })
    )
  );

  thread$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initThreadPosts),
      withLatestFrom(this.store.select(PostsSelectors.selectAllPosts)),
      switchMap(([action, posts]) => {
        if (posts.length != 0) {
          return of(PostsActions.loadPostsSuccess({ posts }));
        } else {
          return this.service.fetchByThread(action.threadId).pipe(
            map((posts) => PostsActions.loadPostsSuccess({ posts })),
            catchError((err) => {
              console.error('Error', err);
              return of(PostsActions.loadThreadPostsFailure({ error: err }));
            })
          );
        }
      })
    )
  );

  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPost),
      tap((action) => console.log(action)),
      switchMap((action) =>
        this.service
          .fetchOne(action.postId)
          .pipe(map((post) => PostsActions.loadPostSuccess({ post })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PostsActions.loadPostFailure({ error }));
      })
    )
  );
}
