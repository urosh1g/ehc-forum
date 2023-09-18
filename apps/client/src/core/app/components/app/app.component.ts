import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ehc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(private router: Router) {}

  showLogin() {
    this.router.navigateByUrl('login');
  }
}
