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
   SaveChanges(){
     const editChanges=confirm('Are you sure you want to save the changes?');
     if(editChanges===true){
      const p= this.model.getProductsById(this.selecetedProduct.id);
      p.name=this.selecetedProduct.name;
      p.price=this.selecetedProduct.price;
      p.imageUrl=this.selecetedProduct.imageUrl;
      p.description=this.selecetedProduct.description;
      this.selecetedProduct=null; //işlem bittikten sonra seçimi kaldırsın
     }
   }
   deleteProduct(product: Product):void{
      const ratification=confirm('Are you sure you want to delete?');
      if(ratification===true){
      const index= this.model.getProducts().indexOf(product);
      this.model.getProducts().splice(index, 1);
     }
   }
  ngOnInit() {
  }

}
