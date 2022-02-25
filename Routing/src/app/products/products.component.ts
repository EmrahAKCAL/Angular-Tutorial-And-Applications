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
    //route params
    // this.route.paramMap.subscribe(params=>{
    //   let id=params.get('id'); //aynı route içerisinde id alma
    // });
    // let id= this.route.snapshot.paramMap.get('id'); //farklı detay bilgisine geçmek

    //query params
    this.route.queryParamMap.subscribe(params=>{
      console.log(params); //asenkron yapı olarak      
    });
    let page=this.route.snapshot.queryParamMap.get('page');
    console.log(page);//senkron yapı
    
  }
  loadProducts(){
    // this.router.navigate(['products'], {relativeTo: this.route}); // {relativeTo: this.route} bulunduğu rout ile bağlantılı olduğunu bildirilir. Yani bulunduğu sayfaya bağlı olarak alt sayfalarına inilmesi sağlanır.  
    this.router.navigate(['/products'], {
      queryParams:{
        page: 1 //buraya order de eklenebilir.
      }
    })
  }
}
