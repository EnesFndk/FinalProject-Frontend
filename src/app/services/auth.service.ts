import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:45495/api/auth/'

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login" , loginModel)
  }

  //bu kişi authenticate mi değil mi onu yazıyoruz.
  isAuthenticated(){
    //biz kullanıcının login olduğunda aldığımız token'ları tarayıcının hatırlaması gerekiyor.
    //http uygulamaları unutkan bir service'dir.Tarayıcı'yı yenilediğimizde bilgiler gittiği için localStorage'de tutuyoruz tokenları. özetle bilgiler gitmesin kaybolmasın diye yazıyoruz. 
    //eğer localstroge'de token var ise return true . yoksa false.
    //bunu nasıl görebiliriz? = giriş yaptıktan sonra projede incele dersek, ordan application sekmesinde solda storage kısmında local storage kısmının altında localhost seçersek orda yer alıyor. key ve value olarak.
    if(localStorage.getItem("token")){
      return true;
    }
    else {
      return false;
    }
  }
}
