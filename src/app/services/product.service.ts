import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponceModel } from 'src/app/models/productResponseModel';

//böyle bir şey görürsek bu service diyebiliriz.
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:45495/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  //ürünleri getirmek için httpclient.get yazıyoruz.
  //Sadece apiUrl yazdığımızda kabul etmiyor. This de ekleniyor otomatik. This class'a denk geliyor.
  //**Burda getproduct() parantez içindekileri this'siz tanımlayabiliriz ama class'dan gelenleri this ile tanımlamak zorunlu.Yoksa kabul etmiyor zaten.
  //***Gelen data default olarak any geliyor ama biz tip güvenliği için ProductResponseModel'de tanımladığımızdan onu buraya yazıyoruz.
  //ÖZET = getProducts bir method. httpClient ile istek yapıyoruz. bir get isteği yapıyoruz apiUrl'ye. Gelen data ProductResponseModel tipinde olsun. 
  //Observable<ProductResponceModel> = subscribe olunabilir bir responsemodule döneceksin demek. o yüzden return de ekliyoruz.
  //Dönüş tipim observable çünkü get üstünde durunca observable yazıyor. Veri tipim ise ProductResponseModel
  getProducts():Observable<ProductResponceModel> {
    return this.httpClient.get<ProductResponceModel>(this.apiUrl)
  }
}
