import { Component } from '@angular/core';
import { Model } from './model'; //model.ts dosyasındaki Model sınıfı çağrıldı/import edildi.

@Component({
  selector: 'app-root', //Appcomponenti nerede kullanılacağı bir etiketi temsil eder
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp'; //veri tabanında bilgi almak için gerekli olan kodlar olabilir, ürün listesi olabilir.
 model= new Model(); //model.ts dosyasındaki Model() sınıfı/fonksiyonu 
 getName(){
   return this.model.user; //Model sınıfın içerisindeki user bilgisini döndürme
 }
 getItems(){
   return this.model.items.filter(item=>!item.action); //liste elemanların üzerinden filtreleme yapıldı, action değeri false olanları tek geri döndürür.
 }
}
