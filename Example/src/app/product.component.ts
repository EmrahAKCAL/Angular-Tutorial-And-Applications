import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductRepository} from './repository.model'
@Component({
    selector: 'app', //dışarda nasıl çağrılacağı
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent{
    //component içerisinde hazırlayacağımız içerikler, datalar burada hazırlarız ve burada hazırlamış olduklarımız model yapısı component.html üzerinden ulaşabilir olacak

    model: ProductRepository = new ProductRepository(); //tipi ProductRepository olan ProductRepository metotuduna ulaşıldı.
    product: Product= this.model.getProductById(3);
}