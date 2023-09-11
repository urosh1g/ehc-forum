import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { postsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      postsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
