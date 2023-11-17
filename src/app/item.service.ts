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
      console.log("inserisci qualcosa");
    }
  }
  
  getItem(){
    return this.items;
  }
  deleteItem(item: string){
    this.items.splice(this.items.indexOf(item), 1);
  }
  
}