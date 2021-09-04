import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
//Javascript ve typescript'de constructor'da bir değişken tanımladığımızda onu sanki public'miş gibi yapar.
//Dışardan category Component'e erişen birinin service'lerede ulaşmasını istemediğimiz için private yapıyoruz.
//currentCategory oluşturduk fakat onu initializer etmemiz gerekiyor. 3 şekilde yapabiliriz. bir currentCategory : Category={categoryId:0, categoryName:""}; böyle fake bir data veriyoruz.  2.ise tsconfig.json da strict altına "strictPropertyInitialization": false, yazmamız yeterli. ondan sonra currentCategory : Category; yazsakda hata vermez. 3. de class oluşturup newlemek en mantıklısı 2. yöntem.
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory : Category;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategries().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentCategory(category:Category) {
  this.currentCategory = category;
  }

  //burda hangi kategoriyi seçtiysek onun görseli mavi olsun istiyoruz. aynı zamanda category.component.html'de de değişiklikler yaptık.
  //burda yaptığımız şey "dönerken ki kategoryi benim currentCategory'ime eşit ise onun currentCategoryClass'ını değiştir."
  //Özet mantık şu ben category'leri dönerken currentCategory yazdık ya hani hangi categoryName'e tıkladığımızda onu seçtiniz diyordu ona eşit olursa onun css'ini o zaman aktif edicem
  getCurrentCategoryClass(category:Category) {
    if(category ==this.currentCategory) {
      //eşitse mavi olacak.
      return "list-group-item active"
    }
    else{
      //değilse normal kalacak.
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    //currentcategory yok ise return "list-group-item active" 
      if(!this.currentCategory) {
        return "list-group-item active"
      }
    //currentcategory var ise return "list-group-item" aslında getCurrentCategoryClass'ın tam tersi.
     else{
        return "list-group-item"
      }
  }
}
