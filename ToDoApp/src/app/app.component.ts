import { Component } from '@angular/core';
import { Model, TodoItem } from './model'; //model.ts dosyasındaki Modeli TodoItem sınıfları çağrıldı/import edildi.

@Component({
  selector: 'app-root', //Appcomponenti nerede kullanılacağı bir etiketi temsil eder
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp'; //veri tabanında bilgi almak için gerekli olan kodlar olabilir, ürün listesi olabilir.
 model= new Model(); //model.ts dosyasındaki Model() sınıfı/fonksiyonu 
 isDisplayAll=false; //ilk başta işaretli değil
 getName(){
   return this.model.user; //Model sınıfın içerisindeki user bilgisini döndürme
 }
 getItems(){
   if(this.isDisplayAll){
     return this.model.items; //eğer isDisplayAll seçili ise listenin tüm elemanlarını gönder
   }
   return this.model.items.filter(item=>!item.action); //liste elemanların üzerinden filtreleme yapıldı, action değeri false olanları tek geri döndürür.
 }
 addItem(value){
   if(value!==''){ //addItem içerisine gelen değer boş değilse
     this.model.items.push(new TodoItem(value, false)); //TodoItem classına gönder.
   }
 }
}
