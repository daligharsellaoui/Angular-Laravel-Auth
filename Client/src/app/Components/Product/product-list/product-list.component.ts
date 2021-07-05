import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/Products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  data: any;
  loading = true;
  category: Array<Object> = [];
  cat: any;
  page: any;
  pages: any;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.cat = this.route.snapshot.queryParams.category || null;
    this.page = this.route.snapshot.queryParams.page || 1;
    this.getProducts(this.cat, this.page);
  }

  getProducts(cat, page) {
    this.productService.productList(cat, page).subscribe(res => {
      this.products = res;
      console.log(this.products)
      this.loading = false;
      this.pages = new Array(this.products.last_page);
    });
  }


  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      this.cat = this.route.snapshot.queryParams.category || null;
      this.page = this.route.snapshot.queryParams.page || 1;
      this.getProducts(this.cat, this.page)
      return false;
    }
  }

  delete(id) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.data = res;
      this.getProducts(this.cat, this.page);
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
