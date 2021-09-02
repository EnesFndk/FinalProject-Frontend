//Module = bir veriyle ilişkili componentleri, directive'leri topladığımız yer.
//Componentleri kullanabilmek için hem declarations'da themde import kısmında tanımlı olması lazım.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//burda oluşturduğumuz componentleri importladı otomatik olarak. bu c# daki using.
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    //burda da eklemiş oluşturduğumuz componentleri.
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
