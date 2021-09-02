//bu c# daki using microsoft.dependensy falan yazıyorduk ya ordakiyle aynı aslında.
//HttpClient ile backend'e ulaşıyoruz.
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponceModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//JAVASCRIPT'DE class yok herşey fonksiyon. (tabi bu sadece javascript özünde eklentilerle birlikte class var.)
//ONInit = productComponent açıldığında çalışan kod.
//tip güvenli programlamayı önemsediğimiz için hiç bir nesnenin veri tipi boş kalmamalı.
//AngularJS ile Angular aynı şey değildir.
//Webapi'den (Backend) bize data geliyor. Postman'de baktığımızda data var data'nın içinde array var ve array içinde nesneler var. Success bilgisi ve message bilgisi var
//Burda Product deyip çıkan pencereden seçersek product'ı yukarda kendi import eder. elle yazsaydık import'u biz yazmak zorunda kalıcaktık.

//Constructor'ın amacı ProductComponent'i bellekte oluşturmaktır.Yani instance'i yaratıyor c# daki new'liyoduk ya o .
//console.log("Init çalıştı"); kodunu constructor'a da yazsak çalışır ama constructor'ı sürekli kullanmak yanlış. Suistimal etmemek gerekiyor.
//Yukardaki HttpClient'ı enjecte etmek için constructor'a yazıyoruz.
//private httpClient:HttpClient = httpclient türünde bir nesne istiyorum diyoruz. :=tür demek
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'http://localhost:45495/api/products/getall';

  
  constructor(private httpClient: HttpClient) {}

  //javascript'de normalde void diye birşey yok bunu bize sağlayan typescript.
  //bir fonksiyonun dışındakine ulaşmak istediğimizde this yazıyoruz.
  ngOnInit(): void {
    this.getProducts();
  }
  //ürünleri getirmek için httpclient.get yazıyoruz.
  //Sadece apiUrl yazdığımızda kabul etmiyor. This de ekleniyor otomatik. This class'a denk geliyor.
  //**Burda getproduct() parantez içindekileri this'siz tanımlayabiliriz ama class'dan gelenleri this ile tanımlamak zorunlu.Yoksa kabul etmiyor zaten.
  //***Gelen data default olarak any geliyor ama biz tip güvenliği için ProductResponseModel'de tanımladığımızdan onu buraya yazıyoruz.
  //ÖZET = getProducts bir method. httpClient ile istek yapıyoruz. bir get isteği yapıyoruz apiUrl'ye. Gelen data ProductResponseModel tipinde olsun. Subscribe olduğumuz zaman gelen response(apiurl'den gelen ProductResponseModel tipi) için(=>) this.products eşittir response'dan gelen data. 
  //{}=başka kodlar da yazmak için
  //Bana gelen productResponseModel olarak geldiği için eşitlemem gerekiyor. onuda productResponseModel:ProductResponceModel= olarak eşitliyoruz ve içine data,success ve message yazıyoruz.
  getProducts() {
    this.httpClient
      .get<ProductResponceModel>(this.apiUrl)
      .subscribe((response) => {
        this.products = response.data
      });
  }
}
