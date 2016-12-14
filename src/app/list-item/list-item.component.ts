import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';
import { ItemObservable } from '../Observables/item-observable';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  list: Item[];

  constructor(
    private itemService: ItemService,
    private itemObservable: ItemObservable
  ) { }

  ngOnInit() {
    this.itemObservable.newItemObservable.subscribe(newItem => this.itemAdded(newItem));

    this.itemService.getAll()
      .subscribe(
      result => { this.list = result },
      error => { }
      );
  }

  itemAdded(newItem: Item): void {
    this.list.push(newItem);
  }
}
