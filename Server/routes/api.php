<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| Authentification Routes
|--------------------------------------------------------------------------
*/
Route::post('register' , [UserController::class, 'register']);
Route::post('login' , [UserController::class, 'login']);


/*
|--------------------------------------------------------------------------
| Category Routes
|--------------------------------------------------------------------------
*/
// Get all categories
Route::get('categories',[CategoryController::class, 'getCategories'] );
// Get category detail
Route::get('category/{id}', [CategoryController::class, 'getCategoryById']);
// Add category
Route::post('addcategory', [CategoryController::class, 'addCategory']);
// Update category
Route::put('category/{id}', [CategoryController::class, 'updateCategory']);
// Delete category
Route::delete('category/{id}', [CategoryController::class, 'deleteCategory']);


/*
|--------------------------------------------------------------------------
| Product Routes
|--------------------------------------------------------------------------
*/
// Get all products
Route::get('products',[ProductController::class, 'getProducts'] );
// Get all products by category
Route::get('products/category/{id}',[ProductController::class, 'getProductsByCategory'] );
// Get product detail
Route::get('product/{id}', [ProductController::class, 'getProductById']);
// Add category
Route::post('addproduct', [ProductController::class, 'addProduct']);
// Update category
Route::put('product/{id}', [ProductController::class, 'updateProduct']);
// Delete category
Route::delete('product/{id}', [ProductController::class, 'deleteProduct']);
