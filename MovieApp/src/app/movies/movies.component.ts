import { Component } from "@angular/core";

@Component({
    selector: 'movies', //<movies> </movies> şeklinde çağrılır. class veya id şeklinde de tanımlanılabilir. css mantığı
    template: '<h2> Hello </h2>' //içerik olarak çıkacak olan 

})
export class MoviesComponent {

}

//Oluşturmuş olduğumuz component app.module.ts içerisine import edilir.