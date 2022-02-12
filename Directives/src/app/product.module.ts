export class Product{ 
    constructor( //değişkenleri bir kalıp içerisinde tanımlandı ve bu değişşkenler public ile dışa aktarmasına verildi.
        public id?: number,
        public name?: string,
        public description?: string,
        public imageUrl?: string,
        public price?: number
    ){}
}