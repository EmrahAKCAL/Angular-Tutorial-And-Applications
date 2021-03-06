import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductRepository} from './repository.model'
@Component({
    selector: 'app', //dışarda nasıl çağrılacağı
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent{
    //component içerisinde hazırlayacağımız içerikler, datalar burada hazırlarız ve burada hazırlamış olduklarımız model yapısı component.html üzerinden ulaşabilir olacak

    model: ProductRepository = new ProductRepository(); //tipi ProductRepository olan ProductRepository metotuduna ulaşıldı.
    getClasses(id: number): string{
        let product= this.model.getProductById(id);
        return (product.price <=1000? 'bg-blue': 'bg-red')+ ' pdg-10 mgn-5'; //Eğer price <=1000 ise class ='bg-blue' aktif et, eğer değilse class='bg-red' aktif et Ve her iki durum için class='pdg-10 mgn-5' aktif olsun.
    }
    getClassMap(id: number): object{
        let product=this.model.getProductById(id);
        return{
            "bg-blue": product.price<=1000, //price<=1000 olan elemana ekle
            "bg-red":product.price>1000,
            "text-center text-color": product.name=='Samsung S8'
        }//Var olan class özelliklerini ezmeden class ekleme
    }
    //color: string= 'red';
    fontSize: string= '25px';
    color: string=this.model.getProductById(4).price<=1000? 'green': 'yellow'; //eğer price<=1000 ise color: green, eğer değilse color: 'yellow'

    getStyles(id: number){ //birden fazla style özelliğini uygulamak
        let product=this.model.getProductById(id);
        return{
            fontSize: '25px',
            color: product.price<=5000? 'blue': 'purple',
            border: '1px solid grey',
            backgroundColor: product.price>3000? 'aqua': 'pink'
        }
    }
    //Event Binding
    onSubmit($event){
        $event.stopPropagation(); //click olayı sadece butonda olsun dışarı aktarı olmasın.
        console.log('Button was clicked');
        console.log($event);
    }
    onDivClicked(){
        console.log('Div was clicked');
        
    }
    //keyup: Kullanıcı bir tuşa basmasıyla olur
    onKeyUp($event){
        if($event.keyCode=== 13){ //13=enter tuşu(herhangi bir tuşun keycode ile ilişkilendirilebilir.)
            console.log($event.target.value);
            
        }
    }
    onKeyUpEnter(){ //sadece enter tuşu
        alert('Enter')
    }
    onKeyUpEmail(email){ //alternatif
        console.log(email);
        
    }
    Email='emrahakcl02@gmail.com';
    oneWay(){
        console.log(this.Email); 
    }
    TwoWay(){
        alert(this.Email);
    }

    //Pipes kullanımı
    today: number= Date.now();
    title: string= 'Angular kursu';
    students: number= 21536;
    price: number= 368.667;
    completed: number= 1.275;


    //Custom pipes kullanımı
    text= 'Rich system for driving animations based on application state.'
} 