<h1>Proje Yapısı</h1>
<ul>
  <li><b><i>package.json</i></b>: Uygulama bilgilerini ve paket bilgilerini yönetebildiğimiz paket dosyasıdır. İçerisinde terminalde uygulamayı çalıştırmak için kullandığımız bazı komutlar içermektedir.
    <ul>
      <li> <b><i> "dependencies":</i></b> kısmı npm ile kurduğumuz modül metotları yer alır ve bu metotların modül karşılığı ise <b><i>node_module</i></b> klasördedir.</li>
      <li> <b><i> "devDependencies": </i></b> kısmında kullandığımız araçlar (TypeScript compailer, node ..) içerir ve uygulama geliştirme aşamasında yardımcı olacak kütüphaneler tanımlanılmıştır.</li>
    </ul>
  </li>
  <li><b><i>src</i></b> klasörün uygulama klasörüdür.
  <ul>
    <li> <b><i>app</i></b> App modül tanımlamasını içermektedir ve app componentler vardır.
    <ul>
      <li> <b><i>app.component.css</i></b> Css kodlarımızı yazacağımız dostadır. Normal bir css dosyasıdır.</li>
    <li> <b><i>app.component.html</i></b> root componenttir. Tarayıcı arayüzüdür.</li>
    <li> <b><i>app.component.spec.ts</i></b> kaynak dosyalarımız için birim testleridir.</li>
    <li> <b><i>app.component.ts</i></b>burada modülü, özellikleri vb. tanımlayabiliriz.</li>
    <li> <b><i>app.module.ts</i></b> Javascript'e dönüştürülebilen bir TypeScript bileşen(component) yapısıdır. dosyaların import edildiği dosyadır. Root module dir.
      <ul>
        <li><b><i>declarations:</i></b> Componentlerin tanımlaması yapıldığı yer(Appcomponent varsayılan olarak gelir.)</li>
        <li><b><i>imports: </i></b> Angular içerisinde gelen modüllerin tanımlaması yapıldığı yer. Örneğin bir form eklemek istediğimizde forms dosyasında bulunan FormsModule şeklinde ekleme yapılmalı ve import edilmeli.(BrowserModule varsayılandır.)</li>
        <li><b><i>bootstrap: </i></b> Uygulama çalıştırıldığında hangi component çalışacağı belirtilir. (AppComponent varsayılandır.)</li>
        <li><b><i> export class AppModule { }</i></b> şeklinde AppModule sınıfı dışarıya export edilir.</li>
      </ul></li>
      </ul></li>
    </ul></li>
</ul>
  <a href="https://www.tutorialspoint.com/angular4/angular4_components.htm">Daha fazla bilgi</a>
