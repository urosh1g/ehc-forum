import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostsSelectors from '../../+state/posts.selectors';

@Component({
  selector: 'ehc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post$ = this.store.select(PostsSelectors.selectEntity);
  constructor(private store: Store) {}
}
