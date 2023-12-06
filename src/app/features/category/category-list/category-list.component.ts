import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
//[x: string]: any;

  //categories?: Category[];
  categories$!: Observable<Category[]>;
  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {
   // this.categoryService.getAllCategories()
    //.subscribe({
      //next: (response) => {
        this.categories$ = this.categoryService.getAllCategories();

     // }
    //})
  }
}
