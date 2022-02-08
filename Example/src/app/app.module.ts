import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //oluşturmuş olduğumuz component
    AppComponent
  ],
  imports: [ //angulardan gelen modüller
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //modülün çalıştıracağı ilk component
})
export class AppModule { }
