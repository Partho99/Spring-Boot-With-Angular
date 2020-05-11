import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any

  constructor(private sevice: ProductService) {
    //this.products = sevice.getProducts();
   }

  ngOnInit(): void {
    this.products = this.sevice.getProducts();
  }

}
