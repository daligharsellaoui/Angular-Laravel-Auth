import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/Products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product = new Product;
  data: any;
  id: any;
  loading = true;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData() {
    this.productService.productDetails(this.id).subscribe(res => {
      this.data = res;
      this.product = this.data;
      this.loading = false;
    });
  }

  edit() {
    this.productService.updateProduct(this.id, this.product).subscribe(res => {
      this.data = res;
      if (this.data.status === 1) {
        this.router.navigate(['/products/', this.id]);
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
