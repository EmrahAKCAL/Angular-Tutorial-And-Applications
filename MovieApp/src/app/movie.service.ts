import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' //uygulamanın herhangi bir yerinde bu service ulaşılabilir.
})
export class MovieService {
  constructor() { }

  getMovies(): Observable<Movie[]>{ //geri dönüşü Movie listedi olan bir metot 
    return of(Movies); //Movies dizileri observable ile çevrilip datasource içerisindeki bilgileri geri gönderir.
  }
}
