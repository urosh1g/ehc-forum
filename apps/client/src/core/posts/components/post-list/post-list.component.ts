import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CategoryActions from '../../../categories/+state/categories.actions';
import * as CategorySelectors from '../../../categories/+state/categories.selectors';
import * as PostsActions from '../../+state/posts.actions';
import * as PostsSelectors from '../../+state/posts.selectors';
import * as AuthSelectors from '../../../auth/+state/auth.selectors';
import { Post } from '@ehc/common/entities';
import { Router } from '@angular/router';
import { SimpleConsoleLogger } from 'typeorm';

@Component({
  selector: 'ehc-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  title: string = '';
  body: string = '';

  @Input()
  threadId: number = 0;
  selectedCategories: number[] = [];

  posts$ = this.store.select(PostsSelectors.selectAllPosts);
  auth$ = this.store.select(AuthSelectors.selectAuthState);
  categories$ = this.store.select(CategorySelectors.selectAllCategories);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(
      PostsActions.initThreadPosts({ threadId: this.threadId })
    );
    this.store.dispatch(CategoryActions.initCategories());
  }

  toggleSelected(categoryId: number) {
    const idx = this.selectedCategories.indexOf(categoryId);
    idx == -1
      ? this.selectedCategories.push(categoryId)
      : this.selectedCategories.splice(idx, 1);
  }

  onPostClicked(post: Post) {
    this.store.dispatch(PostsActions.selectPost({ postId: post.id }));
    this.router.navigateByUrl(`/posts/${post.id}`);
  }

  createPost() {
    this.store.dispatch(
      PostsActions.createPost({
        title: this.title,
        body: this.body,
        threadId: this.threadId,
        categories: this.selectedCategories
      })
    );
  }
}
