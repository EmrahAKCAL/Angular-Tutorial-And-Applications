import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: ProductRepository= new ProductRepository();
}
