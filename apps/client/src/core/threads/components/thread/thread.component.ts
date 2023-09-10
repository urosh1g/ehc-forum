import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ThreadSelectors from '../../+state/threads.selectors';

@Component({
  selector: 'ehc-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent {
  thread$ = this.store.select(ThreadSelectors.selectEntity);
  constructor(private store: Store) {}
}
