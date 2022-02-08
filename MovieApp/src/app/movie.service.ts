import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root' //uygulamanın herhangi bir yerinde bu service ulaşılabilir.
})
export class MovieService {
  constructor(private loggingService: LoggingService) { }

  getMovies(): Observable<Movie[]>{ //geri dönüşü Movie listedi olan bir metot 
    this.loggingService.add('MovieService: listing movies');
    return of(Movies); //Movies dizileri observable ile çevrilip datasource içerisindeki bilgileri geri gönderir.
  }

  getMovie(id): Observable<Movie>{//tek bir movie gelir
    this.loggingService.add('MovieService: get detail by id: '+id);
    return of(Movies.find(movie=> movie.id===id));
  }
}
