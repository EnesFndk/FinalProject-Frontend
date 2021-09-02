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
  //Webapi'den (Backend) bize data geliyor. Postman'de baktığımızda data var data'nın içinde array var ve array içinde nesneler var. Success bilgisi ve message bilgisi var.

  //Burda Product deyip çıkan pencereden seçersek product'ı yukarda kendi import eder. elle yazsaydık import'u biz yazmak zorunda kalıcaktık.
  products:Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
