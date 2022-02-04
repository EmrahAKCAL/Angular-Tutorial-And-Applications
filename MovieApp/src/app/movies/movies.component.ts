import { Component } from "@angular/core";

@Component({
    selector: 'movies', //<movies> </movies> şeklinde çağrılır. class veya id şeklinde de tanımlanılabilir. css mantığı
    templateUrl: './movies.component.html', //içerik olarak çıkacak olan 
  
})
export class MoviesComponent {

}

//Oluşturmuş olduğumuz component app.module.ts içerisine import edilir.