import { BrowserModule } from '@angular/platform-browser'; //bir tarayıcıda çalışma yapılacağı 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent 
  ],
  imports: [ //module export edilmesi
    BrowserModule,
    FormsModule //ngModule(çift taraflı etkileşim) kullanmak için
  ],
  providers: [],
  bootstrap: [AppComponent] //ilk çalışacak component yapısı
})
export class AppModule { }
