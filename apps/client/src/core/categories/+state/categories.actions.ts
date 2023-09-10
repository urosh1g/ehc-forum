import { createAction, props } from '@ngrx/store';
import { Category } from '@ehc/common/entities';

export const initCategories = createAction('[Categories Page] Init');

export const loadCategoriesSuccess = createAction(
  '[Categories/API] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Categories/API] Load Categories Failure',
  props<{ error: any }>()
);
