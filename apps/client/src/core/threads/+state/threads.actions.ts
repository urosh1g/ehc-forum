import { createAction, props } from '@ngrx/store';
import { Thread } from '@ehc/common/entities';

export const initThreads = createAction('[Threads Page] Init');

export const loadThread = createAction(
  '[Thread Page] Load Thread',
  props<{ threadId: number }>()
);
export const loadThreadSuccess = createAction(
  '[Threads/API] Load Thread Success',
  props<{ thread: Thread }>()
);
export const loadThreadFailure = createAction(
  '[Threads/API] Load Thread Failure',
  props<{ error: any }>()
);

export const selectThread = createAction(
  '[Threads Page] Select Thread',
  props<{ thread: Thread }>()
);

export const loadThreadsSuccess = createAction(
  '[Threads/API] Load Threads Success',
  props<{ threads: Thread[] }>()
);

export const loadThreadsFailure = createAction(
  '[Threads/API] Load Threads Failure',
  props<{ error: any }>()
);
