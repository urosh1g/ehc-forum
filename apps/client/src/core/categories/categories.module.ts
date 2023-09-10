import { NgModule } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryPreviewComponent } from './components/category-preview/category-preview.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCategories from './+state/categories.reducer';
import { CategoriesEffects } from './+state/categories.effects';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    CategoryPreviewComponent,
  ],
  imports: [
    StoreModule.forFeature(
      fromCategories.CATEGORIES_FEATURE_KEY,
      fromCategories.categoriesReducer
    ),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
  providers: [],
  bootstrap: [],
  exports: [CategoryComponent, CategoryListComponent, CategoryPreviewComponent],
})
export class CategoriesModule {}
