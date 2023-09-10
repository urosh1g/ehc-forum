import { createAction, props } from '@ngrx/store';
import { Post } from '@ehc/common/entities';

export const initPosts = createAction('[Posts Page] Init');

export const initThreadPosts = createAction('[Posts Page] Init by thread', props<{threadId: number}>());

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadThreadPostsSuccess = createAction(
  '[Posts/API] Load Thread Posts Success',
  props<{posts: Post[]}>(),
)

export const loadThreadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);
