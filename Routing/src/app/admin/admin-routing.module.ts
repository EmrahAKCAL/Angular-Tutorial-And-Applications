import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [ //linkleri buraya ekleyebiliriz.

  {path: 'admin', component: AdminComponent, children: [
    {path: 'products', component: AdminProductsComponent },
    {path: 'categories', component: AdminCategoriesComponent}
  ]}
]; 

@NgModule({
  imports: [
    RouterModule.forChild(routes) //Ana modüle dışarıdan dahil ettiğimiz modül. Tek fark forRoot yerine forChild kullanılmasıdır.
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
