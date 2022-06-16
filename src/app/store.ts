import {Injectable} from "@angular/core";
import {ComponentStore, OnStateInit} from "@ngrx/component-store";
import {interval, tap} from "rxjs";

@Injectable()
export class SomeStore extends ComponentStore<{}> implements OnStateInit {
  constructor() {
    super({});
  }

  ngrxOnStateInit() {
    console.log(this.get())
  }
}
