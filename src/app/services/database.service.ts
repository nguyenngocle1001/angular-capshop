import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  products = [
    {id:1, name: "Mitchell & Ness Chicago Bulls NBA 50 Fitted Snapback", img1: 'non1.jpg', img2: 'non1-1.jpg', price: 450000, rating: 5.0, limited: true, brand: 'Mitchell & Ness' },
    {id:2, name: "Mitchell & Ness Chicago Bulls NBA Triple Stack Metallic Snapback Full Black", img1: 'non2.jpg', img2: 'non2-1.jpg', price: 400000, rating: 4, limited: false, brand: 'Mitchell & Ness' },
    {id:3, name: "Mitchell & Ness Golden State Warriors Game Day Snapback 2Tone - Freesize - Logo thêu nổi – Thân nón thêu viền - Full tem - Giá 380k", img1: 'non3.jpg', img2: 'non3-1.jpg', price: 380000, rating: 3, limited: false, brand: 'Mitchell & Ness' },
    {id:4, name: "Mitchell & Ness Pittsburgh Penguins Snapback - Freesize ", img1: 'non4.jpg', img2: 'non4-1.jpg', price: 320000, rating: 3, limited: false, brand: 'Mitchell & Ness' },
    {id:5, name: "Snapback Puma Cat Youth - Freesize - Chât kaki mượt mịn - Phối màu thời trang - Logo thêu nổi ", img1: 'non5.jpg', img2: 'non5-1.jpg', price: 400000, rating: 3.5, limited: false, brand: 'Puma' },
    {id:6, name: "Puma Suede 110 Snapback Full Black", img1: 'non6.jpg', img2: 'non6-1.jpg', price: 850000, rating: 5, limited: true, brand: 'Puma' },
    {id:7, name: "Nón Snapback Puma Cat Patch Camo Cobra - Freesize", img1: 'non7.jpg', img2: 'non7-1.jpg', price: 450000, rating: 4.6, limited: false, brand: 'Puma' },
    {id:8, name: "Puma Script Cool Cell Snapback - Freesize", img1: 'non8.jpg', img2: 'non8-1.jpg', price: 350000, rating: 4, limited: false, brand: 'Puma' },
    {id:9, name: "Puma Script Cool Cell Snapback - Freesize", img1: 'non9.jpg', img2: 'non9-1.jpg', price: 360000, rating: 4.5, limited: false, brand: 'Puma' },
    {id:10, name: "Nón Snapback Nike Golf True Statement Flat Bill Fitted Grey ", img1: 'non10.jpg', img2: 'non10-1.jpg', price: 400000, rating: 4.6, limited: false, brand: 'Nike' },
    {id:11, name: "Nón Snapback Nike VRZ - RZN Golf 2Tone Fitted", img1: 'non11.jpg', img2: 'non11-1.jpg', price: 400000, rating: 4.5, limited: false, brand: 'Nike' },
    {id:12, name: "Nón Snapback Nike VRZ - RZN Golf Fitted Gray", img1: 'non12.jpg', img2: 'non12-1.jpg', price: 400000, rating: 3.5, limited: false, brand: 'Nike' },
    {id:13, name: "Nike Logo 5 Panel  Trucker Snapback White - Freesize ", img1: 'non13.jpg', img2: 'non13-1.jpg', price: 290000, rating: 4.6, limited: false, brand: 'Nike' },
    {id:14, name: "Nike Logo 5 Panel Trucker Snapback Black - Freesize ", img1: 'non14.jpg', img2: 'non14-1.jpg', price: 290000, rating: 5, limited: true, brand: 'Nike' },
    {id:15, name: "Nike Air Jordan 7 Retro Snapback", img1: 'non15.jpg', img2: 'non15-1.jpg', price: 500000, rating: 5, limited: true, brand: 'Nike' },
    {id:16, name: "Jordab Air Stripe Snapback", img1: 'non16.jpg', img2: 'non16-1.jpg', price: 480000, rating: 4.6, limited: false, brand: 'Nike' },
    {id:17, name: "Snapback The Classic Yupoong Adidas Logo Black", img1: 'non17.jpg', img2: 'non17-1.jpg', price: 300000, rating: 5, limited: false, brand: 'adidas' },
    {id:18, name: "Adidas Logo Black Snapback", img1: 'non18.jpg', img2: 'non18-1.jpg', price: 300000, rating: 4.5, limited: false, brand: 'adidas' },
    {id:19, name: "HOOey Roughy Trucker Snapback", img1: 'non19.jpg', img2: 'non19-1', price: 340000, rating: 4.5, limited: false, brand: 'HOOey' },
    {id:20, name: "HOOey Spring Branch Texas Trucker Snapback", img1: 'non20.jpg', img2: 'non20-1.jpg', price: 340000, rating: 4.8, limited: false, brand: 'HOOey' },
];

  brands = [
     {id: 1, name: 'Mitchell & Ness '},
      {id: 2, name: 'Puma '},
     {id: 3, name: 'Nike '},
      {id: 4, name: ' adidas '},
       {id: 5, name: 'HOOey'},
];

  categorys = [
    {id: 1, name: 'Nón kết'},
    {id: 2, name: 'Nón da'},
    {id: 3, name: 'Nón snapback'},
    {id: 4, name: 'Nón phớt'},
    {id: 5, name: 'Nón bảo hiểm'},
    {id: 6, name: 'Nón vành'},
  ];
  getLimitProducts = this.products.filter(item=>{
    return item.limited;
  })

  getProduct(id: any){
    let temp;
    this.products.forEach(product => {
      if(product.id == id){
        temp = product;
        return;
      }
     
    });
    return temp;
  }
}

