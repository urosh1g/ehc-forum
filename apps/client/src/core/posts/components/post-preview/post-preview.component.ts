import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '@ehc/common/entities';

@Component({
  selector: 'ehc-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent {
  @Input()
  post: Post | null = null;
  @Output()
  clicked: EventEmitter<Post> = new EventEmitter<Post>();
  
  onClick() {
    this.clicked.emit(this.post!);
  }
}
