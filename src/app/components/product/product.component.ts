import { Component, Input, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/product-cart';
import { MessengerService } from 'src/app/services/messenger.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() product?: any;
  
  constructor(private msgService:MessengerService) { 
  }

  ngOnInit(): void {
  }
  
  public getImage(){
    return `../../../assets/images/products/${this.product?.id}/${this.product?.img1}`;
  }

  public rating(){
    let result = '';
    var rating : any;
    let count = 0;
    rating = this.product?.rating;
    while(Math.floor(rating) > 0){
      result += '<i class="fas fa-star"></i> ';
      rating --;
      count ++;
    }
    if(rating - Math.floor(rating) != 0){
      result += '<i class="fas fa-star-half-alt"></i> ';
      count ++;
    }
    if(count!=5){
      for(let i=count; i<5; i++){
        result += ' <i class="far fa-star"></i>';
      }
    }
    return result;
  }

  public handleAddToCart(){
    let productCart:ProductCart= {
      ...this.product, quantity : 1, image: this.product.img1
    };
    setTimeout(() => {
      <HTMLElement><unknown>document.querySelector('.alert')?.classList.remove('active');
    }, 2000);
    <HTMLElement><unknown>document.querySelector('.alert')?.classList.add('active');
    this.msgService.sendMsg(productCart);
  }

}