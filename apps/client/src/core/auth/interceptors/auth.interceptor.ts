import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { EMPTY, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthSelectors from '../+state/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token$ = this.store.select(AuthSelectors.selectAuthToken);
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.token$.pipe(take(1), switchMap((token) => {
      if (token != "") {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}`}
        });
      }
      return EMPTY;
    }));
    return next.handle(request);
  }
}
