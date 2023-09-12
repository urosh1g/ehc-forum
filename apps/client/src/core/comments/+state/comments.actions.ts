import { createAction, props } from '@ngrx/store';
import { Comment } from '@ehc/common/entities';

export const initComments = createAction('[Comments Page] Init');

export const loadPostComments = createAction(
  '[Comments Page] Load Post Comments',
  props<{ postId: number }>()
);

export const loadPostCommentsSuccess = createAction(
  '[Comments Page] Load Post Comments Success',
  props<{ comments: Comment[] }>()
);

export const loadPostCommentsFailure = createAction(
  '[Comments Page] Load Post Comments Failure',
  props<{ error: any }>()
);

export const loadCommentsSuccess = createAction(
  '[Comments/API] Load Comments Success',
  props<{ comments: Comment[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments/API] Load Comments Failure',
  props<{ error: any }>()
);
