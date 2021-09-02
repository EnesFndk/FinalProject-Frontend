import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //tip güvenli programlamayı önemsediğimiz için hiç bir nesnenin veri tipi boş kalmamalı.
  //AngularJS ile Angular aynı şey değildir.

  //Burda Product deyip çıkan pencereden seçersek product'ı yukarda kendi import eder. elle yazsaydık import'u biz yazmak zorunda kalıcaktık.
  products:Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
