import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as CategoriesActions from './categories.actions';
import { CategoriesService } from '../services/categories.service';

@Injectable()
export class CategoriesEffects {
  private actions$ = inject(Actions);
  private service = inject(CategoriesService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.initCategories),
      switchMap(() =>
        this.service
          .fetchAll()
          .pipe(
            map((categories) =>
              CategoriesActions.loadCategoriesSuccess({ categories })
            )
          )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CategoriesActions.loadCategoriesFailure({ error }));
      })
    )
  );
}
