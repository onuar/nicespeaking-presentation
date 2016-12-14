import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../models/Item';

@Injectable()
export class ItemObservable {
    public newItemObservable: EventEmitter<Item>;

    constructor() {
        this.newItemObservable = new EventEmitter<Item>();
    }

    newItemAdded(newItem: Item): void {
        this.newItemObservable.next(newItem);
    }
}
