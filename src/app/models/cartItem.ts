import { Product } from "./product";

//quantity = adet
  //Bi eticaret sitesinde ürünü sepete eklediğimizde sepet bilgisini veri tabanından alınıyor ki belirli bir süre sonra kullanıcı girdiğinde sepetindeki malzeme dursun diye.ufak bilgi
export class CartItem{
    product:Product;
    quantity:number;
}