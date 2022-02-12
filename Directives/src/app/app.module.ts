import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';
import { InputEmailDirective } from './input-email.directive';


@NgModule({
  declarations: [
    DirectivesComponent,
    InputEmailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
