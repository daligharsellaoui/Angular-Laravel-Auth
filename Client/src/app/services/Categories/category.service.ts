import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  categoryList() {
    return this.http.get(environment.API_URL + '/api/categories');
  }

  //TODO
  categoryDetails(id) {
    return this.http.get(environment.API_URL + '/api/category/' + id);
  }

  addCategory(data) {
    return this.http.post(environment.API_URL + '/api/addcategory/', data);
  }

  updateCategory(id, data) {
    return this.http.put(environment.API_URL + '/api/category/' + id, data);
  }

  deleteCategory(id) {
    return this.http.delete(environment.API_URL + '/api/category/' + id);
  }

}
