import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromComments from './+state/comments.reducer';
import { CommentsEffects } from './+state/comments.effects';

@NgModule({
  declarations: [CommentListComponent, CommentComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    StoreModule.forFeature(
      fromComments.COMMENTS_FEATURE_KEY,
      fromComments.commentsReducer
    ),
    EffectsModule.forFeature([CommentsEffects]),
  ],
  exports: [CommentListComponent, CommentComponent],
})
export class CommentsModule {}
