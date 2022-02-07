import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';

@Injectable({
  providedIn: 'root' //uygulamanın herhangi bir yerinde bu service ulaşılabilir.
})
export class MovieService {
  constructor() { }

  getMovies(): Movie[]{ //geri dönüşü Movie listedi olan bir metot 
    return Movies; //datasource içerisindeki bilgileri geri gönderir.
  }
}
