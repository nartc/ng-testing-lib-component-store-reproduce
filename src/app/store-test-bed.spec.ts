import {fakeAsync, flushMicrotasks, TestBed} from "@angular/core/testing";
import {provideComponentStore} from "@ngrx/component-store";
import {SomeStore} from "./store";

describe('store - test bed', () => {
  let store: SomeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideComponentStore(SomeStore)]})
    store = TestBed.inject(SomeStore);
  })

  it('should be fun', fakeAsync(() => {
    flushMicrotasks();
    expect(store).toBeTruthy();
  }))
});
