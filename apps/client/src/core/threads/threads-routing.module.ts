import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { ThreadComponent } from './components/thread/thread.component';
import { threadsResolver } from './resolvers/threads.resolver';

const routes: Routes = [
  {
    path: 'threads',
    component: ThreadListComponent
  },
  {
    path: 'threads/:id',
    component: ThreadComponent,
    resolve: {
      threadsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadsRoutingModule { }
