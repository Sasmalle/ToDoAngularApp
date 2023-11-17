import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `<li *ngFor="let item of items">{{ item }}</li>`,
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  private ItemService = inject(ItemService);
  items: string[] = [];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItem();
  }

}