import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public brands : any;
  public categorys : any;
  constructor(private router:Router, private database: DatabaseService) { }

  ngOnInit(): void {
    this.brands = this.database.brands;
    this.categorys = this.database.categorys;
  }
}
