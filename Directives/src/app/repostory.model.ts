//liste üzerinde işlem yapacak olan metotları barındıran 

//Bu sayfaya çağrılan yapılar
import { SimpleDataSource } from "./datasource.model"; 
import { Product } from "./product.model";

export class ProductRepository{
    private dataSource: SimpleDataSource; //datasource.model deki SimpleDataSoruce sınıfı çağrıldı ve dataSource aktarılarak private yapıldı.
    private products: Product []; //product.model deki Product sınıfı çağrılarak products içerisine aktarıp private yapıldı
    constructor(){ //dışardan gelen değişkenleri barındıran kalıp
        this.dataSource = new SimpleDataSource();
        this.products= new Array<Product>();
        this.dataSource.getProducts().forEach(product=>this.products.push(product)); //getProducts metotundan gelen her bir elemanı foreach ile üzerinden gezer ve her gelen bir product elemanı products üzerine ekler.
    }
    getProductsById(id: number): Product{
        return this.products.find(p=> p.id==id); //dışardan gelen bir id değeri liste içerisindeki her bir elemanın id değerini kontrol edecek ve eşleşme söz konusu ise Product geri döndürecek
    }

    getProducts(): Product[]{ //repository üzerinde tanımlanılmış olan products ları alıp html üzerine taşıyoruz.
        return this.products;
    }

    getProductCount():number{
        return this.products.length;
    }
    addProduct(product: Product){ //gelen verini türü Product olacak.
        this.products.push(product); //gönderilen product push metodu ile products üzerine ekler.
    }
    deleteProduct(dlt: Product){
        let index= this.products.indexOf(dlt);
        this.products.splice(index, 1);
    }
}

