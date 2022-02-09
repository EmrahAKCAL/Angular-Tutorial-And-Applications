//liste üzerinde işlem yapacak olan metotları barındıran 

import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private dataSource: SimpleDataSource; //data kaynağı
    private products: Product[]; 
    constructor(){
        this.dataSource= new SimpleDataSource();
        this.products= new Array<Product>();
        this.dataSource.getProducts().forEach(product => this.products.push(product)); //datasource den gelen getProducts metotundan gelen her bir elemanı foreach ile üzerinden gezer ve her gelen bir product elemanı products üzerine ekler.
    }

    getProducts(): Product[]{
        return this.products;
    }
    getProductById(id: number): Product{
        return this.products.find(p=> p.id==id); //dışardan gelen bir id değeri liste içerisindeki her bir elemanın id değerini kontrol edecek ve eşleşme söz konusu ise Product geri döndürecek
    }
}