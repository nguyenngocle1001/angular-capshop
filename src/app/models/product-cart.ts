export class ProductCart {
    id?: number;
    name?:string;
    price?: number;
    image?:string;
    quantity:number|0;
    constructor(id: number, name:string, price: number, image:string, quantity:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }
}
