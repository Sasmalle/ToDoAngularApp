import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items: string[] = [];
  public item: string = '';
  
  addItem(item: string) {
    if (item !== '') {
      this.items.push(item);
      console.log(this.items);
    } 
    else {
      console.log(this.getError());
    }
  }
  
  getItem(){
    return this.items;
  }

  getError(){
    return "Inserisci qualcosa"
  }
  
}