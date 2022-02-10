import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ //oluşturmuş olduğumuz component
    ProductComponent
  ],
  imports: [ //angulardan gelen modüller
    BrowserModule,
    FormsModule //ngmodel tanımlamak için 
  ],
  providers: [],
  bootstrap: [ProductComponent] //modülün çalıştıracağı ilk component
})
export class AppModule { }
