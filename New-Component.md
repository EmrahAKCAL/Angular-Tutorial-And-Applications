<h1>Yeni Component Oluşturma</h1>
Bir terminal penceresinden uygulamanıyı içeren dizine gidilir. Terminalde <b><i>ng generate component new-component</i></b> komutu ile yeni bir component oluşturulur.<br>
Varsayılan olarak, bu komut aşağıdakileri oluşturur:<br>
<ul><li>Bileşenin adını taşıyan bir klasör</li>
<li><b><i>new-component.component.ts</b> Bir bileşen dosyası</li>
<li><b>new-component.component.html</b> Bir şablon dosyası</li>
<li><b>new-component.component.css</b> Bir CSS dosyası</li>
<li><b>new-component.component.spec.ts </b>Bir test spesifikasyon dosyası</i></li></ul>Aşagıda yeni oluşturulan new-component.ts dosyası verilmiştir.

![newComponent](https://user-images.githubusercontent.com/48285856/152842889-41d43481-36b7-434b-9369-44115b4fe066.png)

<br><br>
<ul>
  <li><b><i>import { Component } from '@angular/core'; </b> Tüm component.ts dosyalarında sayfanın ilk çalıştıracağı AppComponent import edilir.</li>
  <li><b><i> @Component({</b> //bir dekoratör kısmıdır. Yani Sayfaların tanıtıldığı kısım.<br>
    <b><i>selector: 'app-new-component', </b> Bu componentin etiketidir. <br>  
    <b><i>templateUrl: './new-component.component.html', </b> Component bilgileri görüntülendiği HTML sayfasıdır. <br>
    <b><i>styleUrls: ['./new-component.component.css'] </b> Bu componentin stil özellikleri verildiği CSS dosyasıdır.<br>
    })</li>
  <li><b><i>export class NewComponentComponent implements OnInit  </b> Component kodunu içeren sınıf </li>
</ul>
