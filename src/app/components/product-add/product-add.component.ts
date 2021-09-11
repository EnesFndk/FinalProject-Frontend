import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm :FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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

}
