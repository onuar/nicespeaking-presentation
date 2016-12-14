import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/Item'
import { ItemService } from '../services/item.service';
import { ItemObservable } from '../Observables/item-observable';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private itemObservable: ItemObservable
  ) { }

  ngOnInit() {
    this.item = new Item();
  }

  save(): void {
    this.itemService.save(this.item)
      .subscribe(
      result => {
        this.itemObservable.newItemAdded(result);
        this.item = new Item();
      },
      error => { }
      );
  }
}
