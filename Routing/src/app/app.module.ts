import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes=[
  { path: '',component: HomeComponent }, //kullanıcı herhangi bir url girmezse(localhost:4200)
  { path: 'home',component: HomeComponent },
  { path: 'products',component: ProductsComponent },
  { path: 'users',component: UsersComponent },
  { path: '**',component: NotfoundComponent } //kullanıcı bunlar haricinde bir url girdiğinde
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
