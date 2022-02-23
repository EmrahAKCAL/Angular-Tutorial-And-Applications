import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute //bulunduğu route bağlı olarak alt route inmek için
    ) { }

  ngOnInit() {
  }

  products= [
    {name: 'Product 1'},
    {name: 'Product 2'},
    {name: 'Product 3'},
    {name: 'Product 4'}
  ]

  loadProducts(){
    this.router.navigate(['products'], {relativeTo: this.route}); // {relativeTo: this.route} bulunduğu rout ile bağlantılı olduğunu bildirilir. Yani bulunduğu sayfaya bağlı olarak alt sayfalarına inilmesi sağlanır.  
  }
}
