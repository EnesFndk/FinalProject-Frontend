//bu c# daki using microsoft.dependensy falan yazıyorduk ya ordakiyle aynı aslında.
//HttpClient ile backend'e ulaşıyoruz.
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


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
//***** getProducts içindeki kodları product.service içine yazdık ki ilerde yazacağımız kodlarla birlikte orası çorba olmasın diye orayı yazdıktan sonra enjecte etmek için constructor'a private productService:ProductService yazıyoruz ve angular otomatik onu import ediyor.
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService:ProductService) {}

  //javascript'de normalde void diye birşey yok bunu bize sağlayan typescript.
  //bir fonksiyonun dışındakine ulaşmak istediğimizde this yazıyoruz.
  ngOnInit(): void {
    this.getProducts();
  }
  //Subscribe olduğumuz zaman gelen response(product.service.ts'deki apiurl'den gelen ProductResponseModel tipi) için(=>) this.products eşittir response'dan gelen data. 
  //{}=başka kodlar da yazmak için
  //Bana gelen productResponseModel olarak geldiği için eşitlemem gerekiyor. onuda productResponseModel:ProductResponceModel= olarak eşitliyoruz ve içine data,success ve message yazıyoruz.
  //Subscribe eklediğimizde kodlar asenkron çalışıyor yani şöyle düşün Asenkronda herkes kendi işiyle meşgul kimse bi işi yapmak için başkasının o işi bitirmesini beklemiyor yani 
  //subsribe dışına yazarsak düzensiz çalışır fakat subsribe içine yazarsak senkronize olarak çalışır sırayla bir düzen içinde.
  //şimdi dataloaded yukarda false'ken aşağıda neden true, çünkü yüklendiği anda true yapıyorum.
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    })
  }
}
