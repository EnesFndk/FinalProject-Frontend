import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

//routes [] içine ne yazarsak app.component.html içindeki router-outlet içinde değişiklik gösterecektir.
//path = ana sayfada birşey verilmez ise ne olsun bizde hiç bir şey yazılmazsa product component olsun diyoruz.
//pathMatch:"full" = bizim ana sayfamızla eşit olacak sonradan eklenecek şeyler için full dediğimiz için hata veriyormuş önceki sürümlerde bu sürümde vermiyor istersen silebilirsin.
//path:"products = yazarsa productComponent'i aç
//Özetle http://localhost:4200/products yazarsak bilgileri bize gösteriyor.
const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products" , component:ProductComponent},
  {path:"categories" , component:CategoryComponent}
];


@NgModule({
  //bizim için root kombinasyonunu yapıyor zaten uygulamamız için routları devreye alıyor.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
