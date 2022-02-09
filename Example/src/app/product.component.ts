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
    getClasses(id: number): string{
        let product= this.model.getProductById(id);
        return (product.price <=1000? 'bg-blue': 'bg-red')+ ' pdg-10 mgn-5'; //Eğer price <=1000 ise class ='bg-blue' aktif et, eğer değilse class='bg-red' aktif et Ve her iki durum için class='pdg-10 mgn-5' aktif olsun.
    }
    getClassMap(id: number): object{
        let product=this.model.getProductById(id);
        return{
            "bg-blue": product.price<=1000, //price<=1000 olan elemana ekle
            "bg-red":product.price>1000,
            "text-center text-color": product.name=='Samsung S8'
        }//Var olan class özelliklerini ezmeden class ekleme
    }
}