import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //html sayfasında form kullanmak için formsModule import edilmelidir.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //tarayıcı ile çalışabileceğimizi belirtir.
    FormsModule //export edilecek 
  ],
  providers: [],
  bootstrap: [AppComponent //çalıştırılabilir ilk component
  ]
})
export class AppModule { }
//angular içerisinde gelen modüllerin ve bizim hazırlamış olduğumuz componentlerin birleşim alanıdır. Burada bir paket oluşturup dışaarıya export ediyoruz. Yani main.ts dosyası içerisinde AppModule çalıştırabilir hale getiriyoruz.
//component: kendi başına çalışan uygulamanın herhangi bir bölümünü icra eden bir parçadır.