import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
//bu yapı bize token'ıda içine atarak paket yollucak ve yetkilendirme işlemini tek tek yapmaktansa angular ile bu yapıda sadece 1 kez yazıp burdan yönlendirme yapacağız.
//backend'de errormiddleware yazdık ya onu buraya da yazabiliriz. Hata yakalamayı buraya da yazıp burdan yönetebiliriz.
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //bizim yaptığımız istek request olarak geçiyor.
  //next ise bizim request'imize paket koyup onu göndermemize yarıyor.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>
    //burda yeni bir request yapıyoruz. Request'i clone'luyor ayrıca içine ekleme de yapabiliyoruz.
    newRequest = request.clone({
      //burda içine eklediğimiz elemanlar yer alıyor. ***** Bearer yazdıktan sonra bir boşluk yazmayı unutma.
      headers: request.headers.set("Authorization", "Bearer " + token)
    })
    //burda da newRequest'i handle ediyoruz.
    return next.handle(newRequest);
  }
}
