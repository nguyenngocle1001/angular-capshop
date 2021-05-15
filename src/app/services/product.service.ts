import { Injectable } from '@angular/core';
import { ProductCart } from '../models/product-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:ProductCart[]= [];
  constructor() { }
  getProducts():ProductCart[] {
    return this.products;
  }
  addProducts(product:ProductCart){
    console.log(product);
    let isAdd = false;
    this.products = this.products.map(item=>{
      if(item.id === product.id){
        item.quantity += product.quantity;
        isAdd = true;
      }
      return item;
    })
    if(!isAdd){
      this.products = [...this.products, product];
    }
  }

  removeProduct(id: any){
    this.products = this.products.filter(item=>{
      return item.id != id;
    })
  }
}
