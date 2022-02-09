import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes=[
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}, //herhangi bir değer girilmediğinde dashboard sayfasına yönlendirilecek
  {path: 'dashboard', component: DashboardComponent}, 
  {path: 'movies', component: MoviesComponent} //kullanıcı ulaşacağı likler
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
