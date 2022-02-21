import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidators } from './image.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productForm= new FormGroup({
    name: new FormControl('', [
      Validators.required, //zorunlu alan
      Validators.minLength(3), //minimum karakter sayısı
      Validators.maxLength(20)
    ]), 
    decoration: new FormControl('',[
      Validators.email,
      Validators.required
    ]),
    price: new FormControl(''),
    imageUrl: new FormControl('', [
      Validators.required,
      ImageValidators.isValidExtension
    ])
  })

  onSubmit(){
    console.log(this.productForm.value);
  }
  get name(){
    return this.productForm.get('name');
  }
  get imageUrl(){
    return this.productForm.get('imageUrl');
  }

  updateProduct(){
    this.productForm.patchValue({ //patchValue: Sadece belli yerler üzerinden güncelleme yapmak için kullanılır. 
      name:'IPhone X',
      price: 4000
    });
  }
}
