import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    //cartıtems'i tek tek dolaşıyor find ile. (find js'den gelen fonksiyon) sonra lambda yapıyoruz. 
    let item = CartItems.find(c=>c.product.productId===product.productId);
    //eğer var ise item'i 1 arttır
    if(item){
      item.quantity +=1;
      //yok ise
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      //js de array'e elemen eklemek için push kullanıyoruz. push() içinde cartItem istediği için let ile cart item'i new'liyoruz. Newledikten sonra class olarak oluşturmamız gerekiyor zaten cartItem'i class olarak oluşturduğumuz için sorun yok.
      CartItems.push(cartItem)
    }
  }
  
  removeFromCart(product:Product){
    //silme işlemini gerçekleştirmek için elemanı bulmak lazım elemanı bulmak için addtoCart' da yazdığımız kodu yazıyoruz çünkü tek tek dolaşıcak,özetle sepette var mı diye bulucaz
    //burda item kızıyor ts ayarlarını değiştiricez. tsconfig.json'da "strict":true altına "strictNullChecks" : false, yazmamız gerekiyor.
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    //js de remove yok. bu array olduğu için splice ile kaç eleman silceksek o kadar silmeye yarıyor.
    //cartitems'deki index numarasını verip onu 1 siliyor. 
    CartItems.splice(CartItems.indexOf(item),1);
  }
 
  //sepeti çekmek için:
  list():CartItem[]{
    return CartItems;
  }
}
