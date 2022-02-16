import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private datasource: SimpleDataSource; //datasource adında yeni bir değişken oluşturuldu ve private ile bu değişken sadece bu sınıfa özgü yapıldı. Tanımlanılan bu değişken datasource.model.ts içerisinde tanımlanılan SimpleDataSource sınıfı çağrıldı. SimpleDataSource içerisindeki tüm yapılara bu değişken üzerinden ulaşacağız.
    private products: Product[]; //products adında yeni bir değişken tanımlanıldı ve private ile sadece bu sınıf içerisinde kullanılmasına onay verildi. Bu değişken üzerinden product.model.ts içerisindeki Product sınıfa ulaşacağız.
    constructor(){
        this.datasource= new SimpleDataSource();
        this.products= new Array<Product>(); //products içerisinde tanımlanılan Product dizisi içerisine bir dizi ile içerisine eleman eklenilecek
        this.datasource.getProduct().forEach(prd=> this.products.push(prd)); //datasource.model.ts içerinde tanımlanılan getProduct() metoduna ulaşıp bu metot üzerinden her bir liste ürün üzerinden gezerek her bir elemanı products ile tanımlanılan Product[] dizisine aktarılır.
    }
    getProductsById(id: number): Product{
        return this.products.find(prd=> prd.id==id);
        //bu metot içerisine number tipinde bir değer gelecek. bu metot Product tipindedir. products üzerinden Product dizisine ulaşacak ve bu dizi içerisinki her bir elemanın id değeri ile gelen number değeriyle karşılaştıracak. eğer gelen değer liste elemanlarından id değerine sahip bir eleman varsa bunu bir dizi şeklinde tüm bilgilerini(name, image...) bize verir. 
    }

    getProducts():Product[]{
        return this.products; //bu sınıfta tanımlanılan products a dışarıdan ulaşacağımız metot.
    }

}
