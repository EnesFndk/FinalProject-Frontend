import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];

  //oluşturduğumuz cartService burda enjecte edip aşağıda getCart yazıyoruz.
  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }
  //list oluşturduğumuz cartService'den geliyor.
  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Sepetten silindi.", product.productName + " Silindi.")
  }
}
