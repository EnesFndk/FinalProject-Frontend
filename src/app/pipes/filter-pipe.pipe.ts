import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  //ben burda değiştirmek istediğim data Product çünkü arama yaptığımda benim product'ı filtrelemem lazım ki aradığım malzeme direk karşıma çıksın.
  //aradığımız da parametreye göre filtreleme işlemi string yapıda olur. Bize tekrardan product içinde datayı vereceği için tekrar Product[] yapıyoruz.
  transform(value: Product[], filterText: string): Product[] {
    //filterText? = filterText var mı , gönderilmiş mi demek. 
    //Özetle filterText var ise onu küçük harfe çevir yoksa zaten yok null. null olduğunu nasıl anlıyoruz = "" var. null olarak yazamıyoruz çünkü filterText string değerde.
    filterText = filterText?filterText.toLocaleLowerCase():""
    //filterText? = filterText var mı. value olan Product'ı filtreliyor. filter nerden geliyor js den geliyor. Şart olarak p türündeki Product için tek tek dolaşıyor filtreliyor. 
    //Ürünleri filtreledikten sonra p:Product(her bir ürün için) ismi küçük harfe çevir. indexOf(filterText)=(bir string'in içinde filterText var mı). !==-1 = -1 var ise onları yeni bir liste yapıp döndürüyor. Yok ise :value ile product'ı liste halinde dön. 
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
