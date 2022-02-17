import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductRepository } from './responsive.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-driven-forms';
  model: ProductRepository= new ProductRepository();
  newProduct: Product= new Product();


  get jsonProduct(){ //product objesini json formatına dönüştüren metot
    return JSON.stringify(this.newProduct);
  }

  addProduct(prd: Product){ //kayıt ekleme metotu
    console.log('New Product: '+this.jsonProduct);
  }
  log(m){
    console.log(m);
    
  }
}
