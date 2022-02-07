import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  messages: string[]=[];
  add(message: string){
    this.messages.push(message); //liste üzerine mesaj ekleyen bir metot
  }
  //liste elemanlarını silme metotu
  clear(){
    this.messages=[];
  }
  constructor() { }
}
