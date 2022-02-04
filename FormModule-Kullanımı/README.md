<h1>FormModule</h1>
Giriş formları, iletişim formları ve hemen hemen tüm iş formları gibi Angular şablonuyla hemen hemen her tür form oluşturabilirsiniz. Kontrolleri yaratıcı bir şekilde düzenleyebilir ve bunları nesne modelinizdeki verilere bağlayabilirsiniz. Doğrulama kuralları belirleyebilir ve doğrulama hatalarını görüntüleyebilir, belirli kontrolleri koşullu olarak etkinleştirebilir veya devre dışı bırakabilir, yerleşik görsel geri bildirimi tetikleyebilir ve çok daha fazlasını yapabilirsiniz.<br>
Şablon temelli formlar için gerekli sağlayıcıları ve yönergeleri dışa aktarır ve bu modülü içe aktaran <b><i>NgModules</i></b> tarafından içe aktarılabilir hale getirir.
Bir input kısmı oluşturmak için ilk önce <b><i>app.module.ts </i></b> dosyasında import { FormsModule } from '@angular/forms'; şeklinde import edilir ve <b><i>imports</i></b> içerisine FormsModule şeklinde export edilir.  < input type="text" [(ngModel)]='name'> şeklinde [(ngModel)]='name' şeklinde form yapısı çağrılır. 


<a href="https://angular.io/guide/forms">Formlar hakkında daha fazla bilgi</a>