<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{
        //Category List
        public function getCategories() {
            return response()->json(Category::all(), 200);
        }
        //Category Details
        public function getCategoryById($id) {
            $category = Category::find($id);
            if(is_null($category)) {
                return response()->json(['message' => 'Employee Not Found'], 404);
            }
            return response()->json($category::find($id), 200);
        }
        //ADD New Category
        public function addCategory(Request $request) {

            //check if category exists
            $category = Category::where ('name',$request['name'])->first();
            if($category) {
                $response['status'] = 0;
                $response['message'] = 'Category already exists';
                $response['code'] =409;
            }
            else {

                //create category
                $category = Category::create ([
                    'name' => $request->name,
                    'color' => $request->color,
                    'icon' => $request -> icon,
                ]);
                $response['status'] = 1;
                $response['message'] = 'Category created Successfully';
                $response['data'] = $category;
                $response['code'] =200;
            }
            return response()->json($response);
        }

        //Update Category
        public function updateCategory(Request $request, $id) {
            $category = Category::find($id);
            if(is_null($category)) {
                return response()->json(['message' => 'Category Not Found'], 404);
            }
            $category->update($request->all());
            return response($category, 200);
        }
        //Delete Category
        public function deleteCategory(Request $request, $id) {
            $category = Category::find($id);
            if(is_null($category)) {
                return response()->json(['message' => 'Category Not Found'], 404);
            }
            $category->delete();
            $response['message'] = 'Category Deleted Successfully';
            $response['code'] =204;
            return response()->json($response);
        }
}

