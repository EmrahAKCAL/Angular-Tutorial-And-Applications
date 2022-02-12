import { Component } from "@angular/core";
import { ProductRepository } from "./repository.module";


@Component({
    selector: 'app',
    templateUrl: 'directives.component.html',
    styleUrls: ['directives.component.css']
})

export class DirectivesComponent{
    //ts çalışmaların olacağı kısım 
    model: ProductRepository= new ProductRepository();
}