import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCart } from 'src/app/models/product-cart';
import { DatabaseService } from 'src/app/services/database.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public product : any;
  public images : any;

  public activeURL : any;
  public isFavourite = false;
  public quantity = 1;
  constructor(private _Activatedroute:ActivatedRoute, private database: DatabaseService, private msgService:MessengerService) {
   }

  ngOnInit(): void {
    let id : any;
    this._Activatedroute.paramMap.subscribe(params => { 
      id = params.get('id'); 
    });
    this.product = this.database.getProduct(id);
    this.images = [`../../../assets/images/products/${this.product.id}/${this.product.img1}`, `../../../assets/images/products/${this.product.id}/${this.product.img2}`]
    this.activeURL =this.images[0];
  }

  public inputChange(){
    this.quantity = Math.floor(this.quantity);
    if(this.quantity<=0){
      this.quantity = 1;
    }
    console.log(this.quantity);
  }

  public changeActive(url: string){
   this.activeURL= url;
  }

  public changeFavourite(){
    this.isFavourite = !this.isFavourite;
  }

  public handleAddToCart(){
    let productCart:ProductCart= {
      ...this.product, quantity : this.quantity, image: this.product.img1
    };
    setTimeout(() => {
      <HTMLElement><unknown>document.querySelector('.alert')?.classList.remove('active');
    }, 2000);
    <HTMLElement><unknown>document.querySelector('.alert')?.classList.add('active');
    this.msgService.sendMsg(productCart);
  }

}
