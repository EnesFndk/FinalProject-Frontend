//bu c# daki using microsoft.dependensy falan yazıyorduk ya ordakiyle aynı aslında.
//HttpClient ile backend'e ulaşıyoruz.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
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
  filterText="";

  //ActivatedRoute = Route aktif hale getiriyor. bu aktifroute ise http://localhost:4200/products/category/categoryId budur
  //toastr'ı service olarak yazmışlar yazanlar o yüzden service olarak kullanıyoruz.
  //oluşturduğumuz cartService burda enjecte ediyoruz.
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private cartService:CartService) {}

  //javascript'de normalde void diye birşey yok bunu bize sağlayan typescript.
  //bir fonksiyonun dışındakine ulaşmak istediğimizde this yazıyoruz.
  ngOnInit(): void {
    //Burdaki getProduct(); 'ı siliyoruz.
    //params observable döndürdüğü için subscribe yapıyoruz.
    //params =parametrelerim ve parametrelerim şuanlık 1 tane, app-routing.module içerisine yazdığımız {path:"products/category/:categoryId" içerisindeki categoryId bizim params'ımız. o sebeple onu ekliyoruz.
    this.activatedRoute.params.subscribe(params => {
      //eğer parametrelerimden categoryId var ise getProductsByCategory çalıştır.
      if(params["categoryId"] ){
        this.getProductsByCategory(params["categoryId"])
      }
      //yoksa getProducts'ı çalıştır .
      else{
        this.getProducts()
      }
    })
    
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
  //productservice'de yaptığımız getProductsByCategory component içerisine de ekliyoruz.
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    })
  }
  //Bi eticaret sitesinde ürünü sepete eklediğimizde sepet bilgisini veri tabanından alınıyor ki belirli bir süre sonra kullanıcı girdiğinde sepetindeki malzeme dursun diye.ufak bilgi

  //npm install ngx-toastr yüklüyoruz bununla kullanıcılarımızı yönlendirebileceğim kullandığımız notifikasyon. angular.json'da styles altına "./node_modules/ngx-toastr/toastr.css", yazıyoruz. daha sonra app.module.ts 'de ToastrModule import ediyoruz.
  //bir de npm install @angular/animations yüklüyoruz. app.module.ts'ye animation'u import ediyoruz.

  //error olarak vermek istersek şöyle yapabiliriz. neden === yaptık. js de böyle yapmak daha mantıklı == yerine ===
  //addToCart(product:Product){ if(product.productId===1){ this.toastrService.error("Hata","Bu ürün sepete eklenemez")} else{this.toastrService.success("Sepete eklendi", product.productName)}

  addToCart(product:Product) {
    this.toastrService.success("Sepete eklendi", product.productName)
    //cartService yazdığımızdan artık rahatlıkla ekleyebiliriz.
    this.cartService.addToCart(product);
  }
}
