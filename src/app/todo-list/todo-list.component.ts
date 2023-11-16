import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public itemService = inject(ItemService);
  public giveItem: (text:string) =>any= this.itemService.giveItem;
}
