import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [ //oluşturmuş olduğumuz component
    ProductComponent
  ],
  imports: [ //angulardan gelen modüller
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent] //modülün çalıştıracağı ilk component
})
export class AppModule { }
