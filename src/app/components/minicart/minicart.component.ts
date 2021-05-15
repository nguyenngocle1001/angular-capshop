import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/product-cart';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.scss']
})
export class MinicartComponent implements OnInit {

  public products:ProductCart[] = [];
  constructor(private productService:ProductService, private msgService:MessengerService) { }

  ngOnInit(): void {
    this.msgService.getMsg().subscribe(product=>{
      this.products = this.productService.products;
    })
    this.msgService.getMsg2().subscribe(id=>{
      this.products = this.productService.products;
    })
  }

  public handleRemoveProduct(id: any){
    if(confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng')){
      window.setTimeout(() => {
        this.msgService.sendMsgId(id);
        setTimeout(() => {
          <HTMLElement><unknown>document.querySelector('.alert')?.classList.remove('active');
        }, 2000);
        <HTMLElement><unknown>document.querySelector('.alert')?.classList.add('active');
      }, 500);
      <HTMLElement><unknown>document.querySelector(`#productcart${id}`)?.classList.add('animation--leftRemove');
      
    }
   
  }

  public disableMiniCart(){
    let element= <HTMLInputElement>document.getElementById("minicart");
    element.checked = false;
  }

}
