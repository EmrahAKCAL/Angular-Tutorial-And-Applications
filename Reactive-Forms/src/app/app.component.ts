import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productForm= new FormGroup({
    name: new FormControl('', [
      Validators.required, //zorunlu alan
      Validators.minLength(5) //minimum karakter sayısı
    ]), 
    decoration: new FormControl('',[
      Validators.email,
      Validators.required
    ]),
    price: new FormControl(''),
    imageUrl: new FormControl('')
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
