import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm :FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService, private toastrService:ToastrService) { }

  //***reactive form entegrasyonunun yapılabilmesi için FormModule olması gerekiyor.app.module.ts de reactiveModule eklemeyi unutma.
  //Burda formlar ile ilgili yapıları import ediyoruz. FormBuilder= reactive form'un servisi.yani burda yazdığımız controlleri birbirleriyle ilişkilendirdiğimiz nokta. Adı üstünde bir form oluşturmaya yarıyor.
  ngOnInit(): void {
    this.createProductAddForm();
  }

  //burda da validation işlemi yapıyoruz. Frontend'de validation kullanıcıyla daha rahat iletişim kurabilmek için, backend'de zorunlu zaten.
  //neden "" yapıyoruz çünkü default değer olarak değer vermek istemiyoruz.
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName:["", Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
      categoryId:["",Validators.required]
    })
  }

  //value diye özellik var productaddForm'un , productaddForm'daki productName,unitPrice ve diğerlerinin karşılığını verir. Bir obje şeklinde çalışır. 
  //biz bunu product haline getirmek için let productModel yazıyoruz. Şimdi bunu nasıl productAddForm'a atamak için ise js içinde Object.assign({}) diyerek ekleyebiliyoruz.
  //add metodunu product.service içinde ekliyoruz.
  add() {
    //eğer productaddFarm geçerli ise
    if(this.productAddForm.valid) {
      //bu hareketleri yap.
      let productModel = Object.assign({},this.productAddForm.value) 
      //add observable olduğu için subscribe olması gerekiyor. Düzensiz çalıştığı için bunu bir düzene oturtmak için toastrService.success'i subscribe içine koyuyoruz.
      this.productService.add(productModel).subscribe(response=> {
        console.log(response)
        this.toastrService.success(response.message, "Başarılı")
      },responseError=> {
        console.log(responseError)
        //responseError.error = bizim http://localhost:4200/products/add 'de product eklediğimizde f12 ile aldığımız error.
        this.toastrService.error(responseError.error)
      })
    }
    else {
      this.toastrService.error("Formunuz eksik", "Dikkat!")
    }
  }
}
