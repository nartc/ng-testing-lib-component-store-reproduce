import {fakeAsync, flush, flushMicrotasks} from "@angular/core/testing";
import {provideComponentStore} from "@ngrx/component-store";
import {render} from "@testing-library/angular";
import {SomeStore} from "./store";

describe('store -testing lib', () => {
  let store: SomeStore;

  beforeEach(async () => {
    const {debugElement} = await render(`<div></div>`, {
      providers: [provideComponentStore(SomeStore)]
    })

    store = debugElement.injector.get(SomeStore)
  })

  it('should be fun', fakeAsync(() => {
    flushMicrotasks();

    // usually asserting state here after flushing microtasks;
    // eg: some fetching effects are invoked in ngrxOnStateInit()

    expect(store).toBeTruthy();
  }))
});
