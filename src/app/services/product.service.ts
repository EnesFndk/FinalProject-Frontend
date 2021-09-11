import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responsemodel';

//böyle bir şey görürsek bu service diyebiliriz.
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //bu zaten sabit adres olduğu için onu buraya yazdıktan sonra geri kalan url yi method içerisinde kullanıyoruz.
  apiUrl = 'http://localhost:45495/api/';

  constructor(private httpClient: HttpClient) { }

  //ürünleri getirmek için httpclient.get yazıyoruz.
  //Sadece apiUrl yazdığımızda kabul etmiyor. This de ekleniyor otomatik. This class'a denk geliyor.
  //**Burda getproduct() parantez içindekileri this'siz tanımlayabiliriz ama class'dan gelenleri this ile tanımlamak zorunlu.Yoksa kabul etmiyor zaten.
  //***Gelen data default olarak any geliyor ama biz tip güvenliği için ProductResponseModel'de tanımladığımızdan onu buraya yazıyoruz.
  //ÖZET = getProducts bir method. httpClient ile istek yapıyoruz. bir get isteği yapıyoruz apiUrl'ye. Gelen data ProductResponseModel tipinde olsun. 
  //Observable<ProductResponceModel> = subscribe olunabilir bir responsemodule döneceksin demek. o yüzden return de ekliyoruz.
  //Dönüş tipim observable çünkü get üstünde durunca observable yazıyor. Veri tipim ise ProductResponseModel
  //let = bir fonksiyon içerisinde değişken tanımlamak için 
  getProducts():Observable<ListResponseModel<Product>>{
    //yukarıdaki apiurl adresi bu şekilde tamamladık.
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  //category seçtiğimizde categoryId'lere göre listelenecek.
  //adresi tamamladıktan sonra + categoryId değişkenlik göstereceği için yazdık.
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  //this.apiUrl+"products/add" = hangi adrese , product = ne göndereyim diye özetleyebiliriz
  //product-add.component'de  toastr.success olunca response.message vermek istediğimiz için observable<ResponseModel> ekliyoruz.
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add", product)
  }
}
