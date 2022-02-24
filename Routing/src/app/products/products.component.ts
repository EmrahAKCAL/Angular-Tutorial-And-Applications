import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products= products;
  constructor(
    private router: Router,
    private route: ActivatedRoute //bulunduğu route bağlı olarak alt route inmek için
    ) { }

  ngOnInit() {
  }
  loadProducts(){
    this.router.navigate(['products'], {relativeTo: this.route}); // {relativeTo: this.route} bulunduğu rout ile bağlantılı olduğunu bildirilir. Yani bulunduğu sayfaya bağlı olarak alt sayfalarına inilmesi sağlanır.  
  }
}
