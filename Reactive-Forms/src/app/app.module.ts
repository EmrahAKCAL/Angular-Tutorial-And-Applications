import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //FormControl için 
    FormsModule //html'de formu çalıştırmak
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
