import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productList(cat, page) {
    if (cat == null) {
      return this.http.get(environment.API_URL + '/api/products?page=' + page);
    }
    else {
      return this.http.get(environment.API_URL + '/api/products?category=' + cat + 'page=' + page);
    }
  }

  //TODO
  productDetails(id) {
    return this.http.get(environment.API_URL + '/api/product/' + id);
  }

  addProduct(data) {
    return this.http.post(environment.API_URL + '/api/addproduct/', data);
  }

  updateProduct(id, data) {
    return this.http.put(environment.API_URL + '/api/product/' + id, data);
  }

  deleteProduct(id) {
    return this.http.delete(environment.API_URL + '/api/product/' + id);
  }

}
