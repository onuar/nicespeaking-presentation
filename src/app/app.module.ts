import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ListItemComponent } from './list-item/list-item.component';

import { ItemService } from './services/item.service';
import { ItemObservable } from './Observables/item-observable';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService, ItemObservable],
  bootstrap: [AppComponent]
})
export class AppModule { }
