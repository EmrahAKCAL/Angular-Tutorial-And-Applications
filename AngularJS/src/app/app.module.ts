import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //componentlerin tanımlaması yapıldığı yer
    AppComponent //vasayılan
  ],
  imports: [  //angular içerisinde gelen modüllerin tanımlaması yapıldığı yer
    BrowserModule, //varsayılan
    FormsModule 
  ],
  providers: [],
  bootstrap: [ //uygulama çalıştırıldığında hangi component çalışacağı belirtilir.
    AppComponent //varsayılan
  ] 
})
export class AppModule { }

//bu modül bir birleşim dosyasıdır.
//Buraya rootmodule denilir
//appcomponent(html)e de rootcomponent denilir.
