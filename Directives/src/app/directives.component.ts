import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repostory.model";


@Component({
    selector: 'app',
    templateUrl: 'directives.component.html',
    styleUrls: ['directives.component.css']
})

export class DirectivesComponent{
    //ts çalışmaların olacağı kısım 
    model: ProductRepository= new ProductRepository();
    productName: string= this.model.getProductsById(1).name;

    addProduct(){
        this.model.addProduct(new Product(6, 'Samsung S10', 'iyi telefon', '5.jpg', 6000)); // addProduct metodu çağrıldığında repository içerisine yeni bir eleman gönderilecek. Buradaki veri  repository.model içerisindeki addProduct(product: Product) metoduna gönderilir.  addProduct(product: Product) ise gelen bu veriyi  this.products.push(product); ile products içerisine ekleyecek. products ise bir Product dizisidir. 
    }
    deleteProduct(p: Product){
        this.model.deleteProduct(p);
    }
    updateProduct(prd: Product){
        prd.name='Update';
    }
}