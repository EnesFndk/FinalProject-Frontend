import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

//routes [] içine ne yazarsak app.component.html içindeki router-outlet içinde değişiklik gösterecektir.
//path = ana sayfada birşey verilmez ise ne olsun bizde hiç bir şey yazılmazsa product component olsun diyoruz.
//pathMatch:"full" = bizim ana sayfamızla eşit olacak sonradan eklenecek şeyler için full dediğimiz için hata veriyormuş önceki sürümlerde bu sürümde vermiyor istersen silebilirsin.
//path:"products = yazarsa productComponent'i aç
//Özetle http://localhost:4200/products yazarsak bilgileri bize gösteriyor.
const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products" , component:ProductComponent},
  {path:"categories" , component:CategoryComponent},
  //Burda category.component.html içinde routerLink= "/products/category/{{category.categoryId}}" çalışması için kod yazıyoruz peki ne bu?
  //Component'in çalışması için bir link yazıyoruz ve :=parametre vermek için sonrasında sürekli değişen bir yapıdaki categoryId veriyoruz çünkü backend'den geliyor
  //yani products/category/ sabit sonrası değişkenlik gösteriyor.
  //****Ayrıca backend'de ProductController'da getbycategory yazıyoruz.
  {path:"products/category/:categoryId" , component:ProductComponent},
  //product-add için route ekliyoruz.
  {path:"products/add", component:ProductAddComponent}
];


@NgModule({
  //bizim için root kombinasyonunu yapıyor zaten uygulamamız için routları devreye alıyor.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
