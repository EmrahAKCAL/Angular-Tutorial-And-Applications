import { Component } from "@angular/core";
import { Movie } from "../movie";


@Component({
    selector: 'movies', //<movies> </movies> şeklinde çağrılır. class veya id şeklinde de tanımlanılabilir. css mantığı
    templateUrl: './movies.component.html', //içerik olarak çıkacak olan 
  
})
export class MoviesComponent {
    title= 'Movie List';
    getTitle(){
        return this.title;
    }
    movie: Movie ={
        id:1,
        name: 'Movie Name',
    }
}

//Oluşturmuş olduğumuz component app.module.ts içerisine import edilir.