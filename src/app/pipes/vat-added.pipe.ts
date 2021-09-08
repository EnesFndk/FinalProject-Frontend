import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//burda value: unknown geliyor default olarak biz unitPrice'ı vatAdded:18 olarak girdiğimiz için number yazıyoruz. : number { bu dönüş tipi. args = parametreler anlamına geliyor. bizim gönderdiğimiz parametreler args olarak tutuluyor. bu ... = c# daki params vardı ya istediğimiz kadar değer atadığımız onun gibi. o sebeple düzeltiyoruz onu.
//yani şu halden "...args: unknown" bu hale değiştirdik. "rate:number"
//value:number = ilk değer bizim pipe'ımızın değiştirmek istediği değer, rate:number ise ilk parametremiz , böyle 2. parametreyi de yazabiliriz. Örn= rate:number, x:number gibi.
  transform(value: number, rate:number): number {
    //kdv yi böyle hesapladığımız için kısacası value=unitprice'ın kendisi datadan gelen , rate ise product.component.html'de yazdığımız vatAdded:18 yazdık ya o 18.
    return value + (value*rate/100);
  }

}

//pipe = elimizdeki datayı görsel olarak farklı bir şekilde göstermek istiyor isek pipe kullanıyoruz. Pipe'ı kendimizde yazabiliyoruz.
//pipe yüklemek için app de pipes klasörü oluşturduktan sonra pipes klasörü için "ng g pipe vatAdded" kodunu yazıyoruz.