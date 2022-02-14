//Her eleman sahip olacağı yapı constructor içerisinde tanımlanılır. Ve bu yapı karmaşıklığın önüne geçmek için bu ts dosaysında tanımlanıldı.
export class Product{
    constructor( 
        public id?: number, 
        public name?: string, 
        public description?: string,
        public imageUrl?: string,
        public price?: number
    ){}
}
//Product sınıfı export edilerek başka bir dosyada kullanılmasına onay verildi.
//Değişkenleri tekrar tekrar tanımlamak yerine değişkenleri bir kalıp içerisinde tanımlanılarak bir çok kez kullanılması sağlanıldı.
//Burada her değişkeni public ile dışarıda kullanılmasına izin verildi.
//Her değişken sonunda ? karakteri kullanılarak elemanlar bu değişkene sahip olması kullanıcıya bırakıldı. Yani kullanıcı bu değişkeni boş bırakabilir.
