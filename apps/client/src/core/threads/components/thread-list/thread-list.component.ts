import { Component, OnInit } from '@angular/core';
import * as ThreadActions from '../../+state/threads.actions'
import * as ThreadSelectors from '../../+state/threads.selectors';
import { Store } from '@ngrx/store';
import { Thread } from '@ehc/common/entities';
import { Router } from '@angular/router';

@Component({
  selector: 'ehc-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss'],
})
export class ThreadListComponent implements OnInit {

  threads$ = this.store.select(ThreadSelectors.selectAllThreads);

  constructor(private store: Store, private router: Router){}

  ngOnInit(): void {
    this.store.dispatch(ThreadActions.initThreads());
  }

  onThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread({thread}));
    this.router.navigate([`threads/${thread.id}`]);
  }

}
