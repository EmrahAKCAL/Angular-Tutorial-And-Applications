import { Component } from "@angular/core";
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
}