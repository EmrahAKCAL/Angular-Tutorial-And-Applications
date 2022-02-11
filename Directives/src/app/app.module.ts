import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';


@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
