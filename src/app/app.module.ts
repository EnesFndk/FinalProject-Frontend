//Module = bir veriyle ilişkili componentleri, directive'leri topladığımız yer.
//Componentleri kullanabilmek için hem declarations'da themde import kısmında tanımlı olması lazım.
//NullInjectorError hatası alırsak bunu burdakileri yazmadığımızda alırız. = Apiye istekte bulunmak için burda http'yi ekliyoruz. c# 'da AutofacBusinessModule'de injection yazdık ya onun gibi.
//***EĞER CORS HATASI ALIRSAN backend'e gidip webapi'de startup'da services.AddCors ve app.UseCors eklemen gerekli.Frontend'deki host'a güveniyoruz demek.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//burda FormsModule import ediyoruz. pipe için. Aşağıda imports yapıcaz.
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//burda oluşturduğumuz componentleri importladı otomatik olarak. bu c# daki using.
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  //Kendi ve daha sonra kullanacağımız directive'leri buraya koyuyoruz.
  declarations: [
    AppComponent,
    //burda da eklemiş oluşturduğumuz componentleri görüyoruz.
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  //dışardan bizim yazmadığımız module'leri buraya koyuyoruz.
  //o sebeple HttpClientModule ekliyoruz.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    //ekranın neresinde çıkmasını söylüyoruz. ngx-toastr sitesinde farklı kombinasyonlarda var.
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
