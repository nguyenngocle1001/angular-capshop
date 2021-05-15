import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : any;
  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.products = this.database.products;
  }
}
