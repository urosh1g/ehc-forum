import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as PostActions from '../+state/posts.actions';
import { catchError, filter, of, switchMap } from 'rxjs';

export const postsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);
  const actions$ = inject(Actions);
  const postId = parseInt(route.paramMap.get('id')!);
  store.dispatch(PostActions.loadPost({ postId }));
  return actions$.pipe(
    ofType(PostActions.loadPostSuccess, PostActions.loadPostFailure),
    filter((action) => action.type == PostActions.loadPostSuccess.type),
    switchMap(() => of(true)),
    catchError(() => of(false))
  );
};
