
export class Model{
    user;
    items;
    constructor(){ //içerik doldurma
        this.user= 'Emrah Akçal';
        this.items=[ //TodoItem sınıfının içeriğine değer gondermek
            new TodoItem('Spor', true),
            new TodoItem('Kahvaltı', false),
            new TodoItem('Ders Çalışma', false),
            new TodoItem('Fatura Ödeme', false),
            new TodoItem('Sinema', false),
        ];
    }
}

export class TodoItem{ //dışarıya export edildi
    description;
    action;
    constructor(description, acrtion){
        this.description=description; //dışardan gelecek ilk değer
        this.action=acrtion; //dışardan gelen ikinci değer
    }
}