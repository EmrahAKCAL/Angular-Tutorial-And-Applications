import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct;
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() { //product çalıştırıldığında bir kere çalıştırılacak metot
    let id= +this.route.snapshot.paramMap.get('id'); //istediğimiz route parametresini alabiliriz.(+ gelen string değeri number e çavirmek içindir.)
    this.selectedProduct=products.find(i=> i.id===id); //products üzerinden arama yapılır.
  }

}
