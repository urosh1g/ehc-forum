import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CommmentSelectors from '../../+state/comments.selectors';
import * as CommentActions from '../../+state/comments.actions';
import { Post } from '@ehc/common/entities';

@Component({
  selector: 'ehc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input()
  post: Post | null = null;
  comments$ = this.store.select(CommmentSelectors.selectAllComments);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(
      CommentActions.loadPostComments({ postId: this.post!.id })
    );
  }
}
