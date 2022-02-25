import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

const appRoutes: Routes=[
  { path: '',component: HomeComponent }, //kullanıcı herhangi bir url girmezse(localhost:4200)
  { path: 'home',component: HomeComponent },
  { path: 'products',component: ProductsComponent, children:[
    { path: ':id',component: ProductComponent },
    { path: ':id/edit',component: EditProductComponent },
  ]},
  { path: 'users',component: UsersComponent, children: [
    {path: ':name', component: UserComponent}
  ]},
  { path: '**',component: NotfoundComponent } //kullanıcı bunlar haricinde bir url girdiğinde
];

//localhost:4200/products?page=1&order=price 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
