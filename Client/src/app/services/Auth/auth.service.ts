import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  payload: any;
  auth: any;
  token: any;
  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post(environment.API_URL + '/api/register', data);
  }

  login(data) {
    return this.http.post(environment.API_URL + '/api/login', data);
  }

}

