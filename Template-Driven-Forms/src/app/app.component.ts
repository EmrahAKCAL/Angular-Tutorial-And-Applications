import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { ProductRepository } from './responsive.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-driven-forms';
  model: ProductRepository= new ProductRepository();
  newProduct: Product= new Product();


  get jsonProduct(){ //product objesini json formatına dönüştüren metot
    return JSON.stringify(this.newProduct);
  }

  addProduct(prd: Product){ //kayıt ekleme metotu
    console.log('New Product: '+this.jsonProduct);
  }
  formSubmitted: boolean=false;
  submitForm(form: NgForm){
    this.formSubmitted=true;
    if(form.valid){
      this.addProduct(this.newProduct);
      this.newProduct= new Product();
      form.reset();
      this.formSubmitted=false;
    }
  }
  getFormValidationErrors(form: NgForm): string[]{
    let messages: string[]= [];
    Object.keys(form.controls).forEach(k=> { //gelen form objesini diziye çevirir.
      this.getValidationErrors(form.controls[k], k).forEach(message=> messages.push(message));
      
    })
    return messages;
  }
  getValidationErrors(state: any, key: string){
    let ctrlName: string= state.name || key;
    let messages: string[]= []; //messages değişkeni string tipinde bir dizidir ve ilk başta içi boştur.
    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
          case 'required': messages.push(`You must enter a ${ctrlName}`); break;
          case 'minlength': messages.push(`Min. 3 character for ${ctrlName}`); break;
          case 'pattern': messages.push(`${ctrlName} contains illegal characters.`); break;
        }
      }
    }
    return messages;
  }
}
