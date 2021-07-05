import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoryListComponent } from './Components/Category/category-list/category-list.component';
import { CategoryDetailsComponent } from './Components/Category/category-details/category-details.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { AddCategoryComponent } from './Components/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Components/Category/edit-category/edit-category.component';
import { EditProductComponent } from './Components/Product/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
