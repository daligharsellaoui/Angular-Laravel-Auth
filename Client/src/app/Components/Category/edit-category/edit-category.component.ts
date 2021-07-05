import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Categories/category.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category = new Category;
  data: any;
  id: any;
  loading = true;
  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData() {
    this.categoryService.categoryDetails(this.id).subscribe(res => {
      this.data = res;
      this.category = this.data;
      this.loading = false;
    });
  }

  edit() {
    this.categoryService.updateCategory(this.id, this.category).subscribe(res => {
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
