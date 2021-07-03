<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
            //Product List
            public function getProducts() {
                return response()->json(Product::all(), 200);
            }
            //Product List
            //TODO
            public function getProductsByCategory($id) {
                $category = Category::find($id);
                if(is_null($category)) {
                    return response()->json(['message' => 'Category Not Found'], 404);
                }
                return response()->json(Product::all(), 200);
            }
            //Product Details
            public function getProductById($id) {
                $product = Product::find($id);
                if(is_null($product)) {
                    return response()->json(['message' => 'Product Not Found'], 404);
                }
                return response()->json($product::find($id), 200);
            }
            //ADD New Product
            public function addProduct(Request $request) {

                //check if product exists
                $product = Product::where ('name',$request['name'])->first();
                if($product) {
                    $response['status'] = 0;
                    $response['message'] = 'Product already exists';
                    $response['code'] =409;
                }
                else {

                    //create product
                    $product = Product::create ([
                        'name' => $request->name,
                        'image' => $request->image,
                        'price' => $request -> price,
                        'cat_id' => $request -> cat_id,
                    ]);
                    $response['status'] = 1;
                    $response['message'] = 'Product created Successfully';
                    $response['data'] = $product;
                    $response['code'] =200;
                }
                return response()->json($response);
            }
            //Update Product
            public function updateProduct(Request $request, $id) {
                $product = Product::find($id);
                if(is_null($product)) {
                    return response()->json(['message' => 'Product Not Found'], 404);
                }
                $product->update($request->all());
                return response($product, 200);
            }
            //Delete Product
            public function deleteProduct(Request $request, $id) {
                $product = Product::find($id);
                if(is_null($product)) {
                    return response()->json(['message' => 'Product Not Found'], 404);
                }
                $product->delete();
                $response['message'] = 'Product Deleted Successfully';
                $response['code'] =204;
                return response()->json($response);
            }
}
