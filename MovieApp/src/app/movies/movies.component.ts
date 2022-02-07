import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";
@Component({
    selector: 'movies', //<movies> </movies> şeklinde çağrılır. class veya id şeklinde de tanımlanılabilir. css mantığı
    templateUrl: './movies.component.html', //içerik olarak çıkacak olan 
    styleUrls: ['./movies.component.css']
  
})
export class MoviesComponent {
    title= 'Movie List';
    movies: Movie[]; //tipi Movie listesi olarak belirtildi.
    selectedMovie: Movie;
    constructor(private movieService: MovieService){} //movieService de bir örnek oluşturuldu. constructor MoviesComponent'e bir obje türetildiği anda çalıştırılan bir yapıdır.(inchet)
    ngOnInit():void{ //sayfa çalıştığı anda getMovies çalışsın. constructor dan sonra çalışır.
        this.getMovies();
    }
    onSelect(movie: Movie): void{
        this.selectedMovie= movie;
    }
    getMovies():void{
          this.movieService.getMovies().subscribe(movies=>{ // subscribe ile asenkron metotu ile çalışması sağlanıldı
            this.movies= movies;
          }); //componentin içerisindeki movies i movieService üzerinden gelen getMovies()  e doldurmak
        
    }
}

//Oluşturmuş olduğumuz component app.module.ts içerisine import edilir.