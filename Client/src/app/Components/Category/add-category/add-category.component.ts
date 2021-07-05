import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/Categories/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category = new Category;
  data: any;

  constructor(private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.categoryService.addCategory(this.category).subscribe(res => {
      this.data = res;

      if (this.data.status === 1) {
        this.router.navigate(['/categories']);
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
