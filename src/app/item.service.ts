import { Injectable } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = [];
  addItem(item: string) {
    this.items.push(item);
    console.log(this.items);
  }
}