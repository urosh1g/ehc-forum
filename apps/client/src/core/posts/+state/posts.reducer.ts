import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { Post } from '@ehc/common/entities';
import { state } from '@angular/animations';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState extends EntityState<Post> {
  selectedId?: string | number; // which Posts record has been selected
  loaded: boolean; // has the Posts list been loaded
  error?: string | null; // last known error (if any)
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: PostsState;
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialPostsState: PostsState = postsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialPostsState,
  on(PostsActions.initPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PostsActions.selectPost, (state, { postId }) => ({
    ...state,
    selectedId: postId,
  })),
  on(PostsActions.loadPostSuccess, (state, action) => {
    return postsAdapter.addOne(action.post, {
      ...state,
      selectedId: action.post.id,
    });
  }),
  on(PostsActions.loadPostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loaded: true })
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostsActions.loadThreadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loaded: true })
  ),
  on(PostsActions.loadThreadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return reducer(state, action);
}
