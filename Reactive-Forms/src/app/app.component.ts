import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= new FormControl('Samsun S5'); 
  decoration= new FormControl('iyi bir telefon');
  price= new FormControl('2000');
  imageUrl= new FormControl('1.jpg');

  updateName(){
    this.name.setValue('Samsun S11');
  }

}
