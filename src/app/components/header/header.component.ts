import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/product-cart';
import { MessengerService } from 'src/app/services/messenger.service';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  public cartSize = 0;
  constructor(private productService:ProductService, private msgService:MessengerService) {
  }

  ngOnInit(): void {
    this.msgService.getMsg().subscribe(product=>{
      this.productService.addProducts(product as ProductCart);
      this.cartSize = this.productService.products.length;
    })
    this.msgService.getMsg2().subscribe(id=>{
      this.productService.removeProduct(id);
      this.cartSize = this.productService.products.length;
    })
  }

}
