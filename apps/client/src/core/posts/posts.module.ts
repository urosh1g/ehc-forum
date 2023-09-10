import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './+state/posts.reducer';
import { PostsEffects } from './+state/posts.effects';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [PostListComponent, PostPreviewComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [PostListComponent, PostPreviewComponent, PostComponent],
})
export class PostsModule {}
