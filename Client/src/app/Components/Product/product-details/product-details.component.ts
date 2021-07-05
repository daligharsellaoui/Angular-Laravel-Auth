import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Categories/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  id: any;
  loading = true;
  category: any;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProduct(this.id)
  }
  getProduct(id) {
    this.productService.productDetails(id).subscribe(res => {
      this.product = res;
      this.categoryService.categoryDetails(this.product.cat_id).subscribe(res => {
        this.category = res;
      })
      this.loading = false;
    })
  }
}
