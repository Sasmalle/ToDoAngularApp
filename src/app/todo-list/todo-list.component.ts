import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public itemService = inject(ItemService);
  addItem(text: string) {
    this.itemService.addItem(text);
  }
}
