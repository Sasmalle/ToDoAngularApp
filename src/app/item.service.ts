import { Injectable } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  giveItem(text:string){
    //va da todoList a todoItem
    console.log(text);
  }
  addItems(text:string):string{
    //va da todoItem a todoList
    return text
  }
}
