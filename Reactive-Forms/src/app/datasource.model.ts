//product.model.ts dosyasındaki değişkenleri kullanılarak ürün listesi oluşturulacak
import { Product } from "./product.model";

export class SimpleDataSource{
    private products: Product[]; // products adında yeni bir değişken oluşturuldu ve private ile bu değişken sadece bu sınıfa özgü yapıldı. Tanımlanılan bu değişken product.model.ts içerisinde tanımlanılan değişkenleri barındıran bir tipte olacak ve bu tüm değişkenleri(id, name, description, imageUrl, price) barındırması için dizi şeklinde bu değişkenler çağrıldı.
    constructor( //product.model.ts içerisindeki değişkenler bu kısımda da tanımlanabilirdik. Ancak çalışmayı daha anlaşır olması için başka bir ts dosyası içerisine aktarıldı.
        ){ // Liste elemanları oluşturulan kısım
            this.products = new Array<Product>( //products içerisine aktarılan Product dizisi içeriğini birden fazla elemanla doldurulacağımız için bir dizi tipi(Array<Product>) olarak tanımladık.
                new Product(1, 'Samsung Galaxy S21 Ultra 5G', 'iyi telefon', 's21.png', 16993),
                new Product(2, 'Samsung Galaxy S20 Ultra', 'iyi telefon', 's20.png', 14000),
                new Product(3, 'Samsung Galaxy Note 10+(Plus)', 'iyi telefon', 'note10.png', 9999),
                new Product(4, 'Samsung Galaxy A72', 'iyi telefon', 'a72.png', 7200),
                new Product(5, 'Samsung Galaxy S5', 'iyi telefon', 's5.png', 2400),
                new Product(6, 'Samsung Galaxy S6', 'iyi telefon', 's6.png', 3000),
                new Product(7, 'Samsung Galaxy S7', 'iyi telefon', 's7.png', 3990),
                new Product(8, 'Samsung Galaxy S8', 'iyi telefon', 's8.png', 5300),
                new Product(9, 'Samsung Galaxy S9', 'iyi telefon', 's9.png', 7000),
                new Product(10, 'Samsung Galaxy S10', 'iyi telefon', 's10.png', 9200)
            )
        }
        //oluşturulan bu ürünleri bir metot içerisine ekleyerek dışarıda bu metot üzerinden liste elemanlarına ulaşması sağlanıldı ve bu metot bir liste elemanlarını barındıran Product dizisi tipindedir. 
        getProduct(): Product[]{
            return this.products;
        }
}
