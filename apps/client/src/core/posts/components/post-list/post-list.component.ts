import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostsActions from '../../+state/posts.actions'
import * as PostsSelectors from '../../+state/posts.selectors';
import { Post } from '@ehc/common/entities';

@Component({
  selector: 'ehc-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit{
  @Input()
  threadId: number = 0;
  posts$ = this.store.select(PostsSelectors.selectAllPosts);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(PostsActions.initThreadPosts({threadId: this.threadId}));
  }
  onPostClicked(post: Post) {

  }
}
