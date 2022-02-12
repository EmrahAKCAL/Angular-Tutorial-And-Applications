import { Directive, ElementRef, HostListener } from '@angular/core';

//HostListener: blur ve focus olaylar için gibi  olayları yakalamak için
//ElementRef ile inputun referandı alınır.
@Directive({
  selector: '[appInputEmail]' //ilgili input'a verilir.
})
export class InputEmailDirective {

  constructor(private element: ElementRef) { }
  @HostListener('focus') onFocus(){
    this.element.nativeElement.classList.add('bg-input');
    
  }
  @HostListener('blur') onBlur(){ //HostListener yakalayacağı olay belirtilir ve çalıştırak metot
    this.element.nativeElement.classList.remove('bg-input');
    let value: string= this.element.nativeElement.value;
    if(!value.includes('@')){ //eğer value içerisinde @ karakteri yoksa
      this.element.nativeElement.value=value.toLowerCase()+'@gmail.com'; //value değerini küçük harfe çevir ve sonuna @gmail.com ekler
    }
  }

}
