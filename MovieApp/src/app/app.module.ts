import { BrowserModule } from '@angular/platform-browser'; //bir tarayıcıda çalışma yapılacağı 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    LoggingComponent,
    NavbarComponent,
    DashboardComponent //detail component oluşturuldu
  ],
  imports: [ //module export edilmesi
    BrowserModule,
    FormsModule,
    AppRoutingModule //ngModule(çift taraflı etkileşim) kullanmak için
  ],
  providers: [],
  bootstrap: [AppComponent] //ilk çalışacak component yapısı
})
export class AppModule { }
