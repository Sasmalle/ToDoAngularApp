import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  private itemSerice = inject(ItemService);
}
/* export class TodoListItems{
  titoloTask= ``;
  completa= false;
  taskCompleta(){
    this.completa= true;
  }
  cambiaTitolo(newTitle: string){
    this.titoloTask= newTitle;
  }
}*/ 