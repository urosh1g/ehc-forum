import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Thread } from '@ehc/common/entities';

@Component({
  selector: 'ehc-thread-preview',
  templateUrl: './thread-preview.component.html',
  styleUrls: ['./thread-preview.component.scss'],
})
export class ThreadPreviewComponent implements OnInit{
  posts: number = 0;
  ngOnInit(): void {
    this.posts = this.thread?.posts.length!;
  }
  @Input({required: true})
  thread: Thread | null = null;

  @Output()
  clicked: EventEmitter<Thread> = new EventEmitter<Thread>();

  onClick() {
    this.clicked.emit(this.thread!);
  }
}
