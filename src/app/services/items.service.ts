import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private _items$ = new BehaviorSubject<string[]>([]);
  get items$() {
    return this._items$.asObservable();
  }
  private get items() {
    return this._items$.value;
  }

  constructor() {}

  addItem(data: string) {
    this._items$.next([...this.items, data]);
  }

  clearItems() {
    this._items$.next([]);
  }
}
