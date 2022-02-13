import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;
  model: ProductRepository;
  selecetedProduct: Product;
  constructor() {
    this.model= new ProductRepository();
    this.products=this.model.getProducts();
   }
   getSelected(product:  Product):boolean{
     return product==this.selecetedProduct; //selectedProduct üzerinden gelen değer ile product name değerine eşit ise true değeri döndürür
   }
   editProduct(product: Product){ 
     this.selecetedProduct=product;
   }
  ngOnInit() {
  }

}
