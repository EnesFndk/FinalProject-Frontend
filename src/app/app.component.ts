//Component'i kullanmak için angular/core'u import etmek lazım bu kod gibi. c# daki using gibi.
import { Component } from '@angular/core';

//component'i c# daki attribute olarak söyleyebiliriz.
//{} demek js.'de obje demek. Obje içerisinde birsürü özelliği verebiliyoruz aşağıdaki gibi.
// ./ = aynı klasörde bulunma durumu.
//burda biz selector olarak app-root belirttik ya app.component.html'de yada index.html 'de kullanmamıza yarıyor. Eğer burda yazmasaydık bu 2 yerde de kullanamazdık.
//@Component'i veren yapı TypeScript  bunu kaydettiğimiz zaman aslında bu bir javascript oluyor.
//styleUrls: ['./app.component.css'] = bu html'in css'lerini koyduğumuz yer. [] bu bildiğimiz array " , " ile ayırıp birden fazla yazabiliyoruz.
//COMPONENTLERİ ŞÖYLE DÜŞÜN BİR ANA COMPONENT VAR SONRA BAŞKA COMPONENT'LERDE KOYABİLİYORSUN. ANA COMPONENT APP.COMPONENT OLARAK DÜŞÜNEBİLİRİZ.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Component basit bir class iken yukarıda @Component ile onu süslüyoruz aslında.
//kimin component'isin onunda cevabı templateUrl: './app.component.html', bunun datasını yönetecek componentsin. çünkü app.component.html ile app.component.ts kardeş gibi birbirleriyle bağlantılı.
//typescript'de veri tipi böyle veriliyor title = 'northwind'; de yazabiliriz ama veri güvenliği için belirtmek en iyisi. "" da versek bir problem olmaz.
//Any = her veri tüpü olabilir demek.
//Burda ilk harf küçük diğer kelimenin ilk harfi büyük olarak yazıyoruz.
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Enes Fındık';
}
