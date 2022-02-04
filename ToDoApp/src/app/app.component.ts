import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Appcomponenti nerede kullanılacağı bir etiketi temsil eder
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp'; //veri tabanında bilgi almak için gerekli olan kodlar olabilir, ürün listesi olabilir.
}
