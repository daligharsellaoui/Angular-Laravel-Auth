import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/Categories/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any;
  data: any;
  loading = true;
  constructor(private categoryService: CategoryService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.categoryList().subscribe(res => {
      this.categories = res;
      this.loading = false;
    });
  }

  delete(id) {
    this.categoryService.deleteCategory(id).subscribe(res => {
      this.data = res;
      this.getCategories();
      if (this.data.status === 1) {
        this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      } else if (this.data.status === 0) {
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
    })
  }

}
