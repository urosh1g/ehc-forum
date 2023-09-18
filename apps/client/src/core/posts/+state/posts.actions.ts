import { createAction, props } from '@ngrx/store';
import { Post } from '@ehc/common/entities';

export const initPosts = createAction('[Posts Page] Init');

export const initThreadPosts = createAction(
  '[Posts Page] Init by thread',
  props<{ threadId: number }>()
);
export const selectPost = createAction(
  '[Posts Page]',
  props<{ postId: number }>()
);

export const createPost = createAction(
  '[Posts Page] Create Post',
  props<{
    title: string;
    body: string;
    threadId: number;
    categories: number[];
  }>()
);

export const loadPost = createAction(
  '[Posts Page] Load Post',
  props<{ postId: number }>()
);

export const loadPostSuccess = createAction(
  '[Posts Page] Load Post Success',
  props<{ post: Post }>()
);

export const loadPostFailure = createAction(
  '[Posts Page] Load Post Failure',
  props<{ error: any }>()
);

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadThreadPostsSuccess = createAction(
  '[Posts/API] Load Thread Posts Success',
  props<{ posts: Post[] }>()
);

export const loadThreadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);
