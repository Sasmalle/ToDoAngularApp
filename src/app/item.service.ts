import { Injectable } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  addItems(){
    //va da todoItem a todoList
  }
  giveItem(text:string):string { 
    return text
  }
}
