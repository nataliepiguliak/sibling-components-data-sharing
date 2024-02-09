import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  // TODO: create a private collection of items
  // TODO: retrieve items as an Observable
  // TODO: retrieve items value

  constructor() {}

  addItem(data: string) {
    // TODO: add item to the collection
  }

  clearItems() {
    // TODO: clear items from the collection
  }
}
