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
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategries().subscribe(response => {
      this.categories = response.data
    })
  }

}
