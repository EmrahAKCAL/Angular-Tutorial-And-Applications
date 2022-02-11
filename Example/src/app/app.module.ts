import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [ //oluşturmuş olduğumuz component
    ProductComponent,
    SummaryPipe
  ],
  imports: [ //angulardan gelen modüller
    BrowserModule,
    FormsModule //ngmodel tanımlamak için 
  ],
  providers: [],
  bootstrap: [ProductComponent] //modülün çalıştıracağı ilk component
})
export class AppModule { }
