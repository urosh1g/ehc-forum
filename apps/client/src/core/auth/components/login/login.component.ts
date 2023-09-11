import { Component } from '@angular/core';
import { CreateUser } from '@ehc/common/dtos';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../+state/auth.actions';

@Component({
  selector: 'ehc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  registerInfo: CreateUser = new CreateUser();
  loginInfo: { alias: string; password: string } = { alias: '', password: '' };
  constructor(private store: Store){}

  onLogin() {
    this.store.dispatch(AuthActions.login({...this.loginInfo}));
  }
}
