import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productForm= new FormGroup({
    name: new FormControl('Samsun S5'), 
    decoration: new FormControl('iyi bir telefon'),
    price: new FormControl('2000'),
    imageUrl: new FormControl('1.jpg')
  })

  onSubmit(){
    console.log(this.productForm.value);
  }

  updateProduct(){
    this.productForm.patchValue({ //patchValue: Sadece belli yerler üzerinden güncelleme yapmak için kullanılır. 
      name:'IPhone X',
      price: 4000
    });
  }
}
