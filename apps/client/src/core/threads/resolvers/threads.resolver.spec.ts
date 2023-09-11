import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { threadsResolver } from './threads.resolver';

describe('threadsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => threadsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
