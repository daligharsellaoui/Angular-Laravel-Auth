import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';

import { HomeComponent } from './Components/home/home.component';

import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';

import { DashboardComponent } from './Components/Dashboard/dashboard.component';

import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { EditProductComponent } from './Components/Product/edit-product/edit-product.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';

import { CategoryListComponent } from './Components/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Components/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Components/Category/edit-category/edit-category.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: 'products/add', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: EditProductComponent, canActivate: [AuthGuard] },

  { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'categories/add', component: AddCategoryComponent, canActivate: [AuthGuard] },
  { path: 'categories/edit/:id', component: EditCategoryComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
