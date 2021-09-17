import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//guard kurarken ng g guard login dedikten sonra karşımıza 4 seçenek çıkıyor
//CanActivate= bir component'i açabilir mi 
//CanActivateChild = başka bir child'ı cagirabilir mi
//CanDeactive= ilgili component'i kapatabilir mi? örn= kullanıcı formu doldururken yanlışlıkla çarpıya basınca formu kapatmak istediğinize emin misiniz ? diye söylememize yarayan.
//CanLoad = yükleyebilir mi?

//şimdi biz login olmadığında ürün ekleme sayfasına girememesini istediğimiz için guard kullanıyoruz.

export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService, private toastrService:ToastrService, private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //burda eğer token'i var ise girebilsin.
      if(this.authService.isAuthenticated()){
        return true;
      }
      //token'i yok ise sistem toastr ile uyarı veriyor ve router ile app-routing.module'de bulunan login ekranına yönlendiriyor.
      //Bunu yaptıktan sonra app-routing.module.ts'ye gidip orda ürün eklemek için giriş yapmak gerekli ya o yüzden product/add içine canActivate yazdık.
      else {
        this.router.navigate(["login"])
        this.toastrService.info("Sisteme giriş yapmalısınız")
        return false;
      }
  }
}



