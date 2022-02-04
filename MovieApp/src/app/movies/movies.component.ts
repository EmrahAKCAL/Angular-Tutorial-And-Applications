import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";

@Component({
    selector: 'movies', //<movies> </movies> şeklinde çağrılır. class veya id şeklinde de tanımlanılabilir. css mantığı
    templateUrl: './movies.component.html', //içerik olarak çıkacak olan 
    styleUrls: ['./movies.component.css']
  
})
export class MoviesComponent {
    title= 'Movie List';
    movies=Movies;
}

//Oluşturmuş olduğumuz component app.module.ts içerisine import edilir.