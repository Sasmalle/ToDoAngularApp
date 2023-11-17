import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
  <li *ngFor="let item of items">
    {{ item }}  
    <button (click)="deleteItem(item)">Rimuovi</button>
  </li>
  `,
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  public ItemService = inject(ItemService);
  items: any;
  deleteItem(item: string) {
    this.ItemService.deleteItem(item);
  }
  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItem();
  }
}