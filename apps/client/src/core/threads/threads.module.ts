import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadsRoutingModule } from './threads-routing.module';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { ThreadPreviewComponent } from './components/thread-preview/thread-preview.component';
import { ThreadComponent } from './components/thread/thread.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromThreads from './+state/threads.reducer';
import { ThreadsEffects } from './+state/threads.effects';
import { MatChipsModule } from '@angular/material/chips';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [ThreadListComponent, ThreadPreviewComponent, ThreadComponent],
  imports: [
    PostsModule,
    MatChipsModule,
    CommonModule,
    ThreadsRoutingModule,
    StoreModule.forFeature(
      fromThreads.THREADS_FEATURE_KEY,
      fromThreads.threadsReducer
    ),
    EffectsModule.forFeature([ThreadsEffects]),
  ],
  exports: [ThreadListComponent, ThreadPreviewComponent, ThreadComponent],
})
export class ThreadsModule {}
