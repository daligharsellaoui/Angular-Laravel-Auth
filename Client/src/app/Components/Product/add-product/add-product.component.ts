import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/Categories/category.service';
import { ProductService } from 'src/app/services/Products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = new Product;
  data: any;
  categories: any;
  loading = true;
  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.categoryList().subscribe(res => {
      this.categories = res;
      this.loading = false;
    });
  }
  submit() {
    this.productService.addProduct(this.product).subscribe(res => {

      this.data = res;

      if (this.data.status === 1) {
        this.router.navigate(['/products']);
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
