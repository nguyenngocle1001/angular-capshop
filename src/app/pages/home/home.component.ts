import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public limitedProduct : any;
  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.limitedProduct = this.database.getLimitProducts;
  }

}
