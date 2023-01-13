<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// $admin = Route::prefix('/admin');
// $admin->group(function () {
//     Route::get('', [AdminController::class, 'index'])->name('index');
//     Route::get('/categories', [AdminController::class, 'category'])->name('categories');
// });
Route::prefix('admin')->group(
    function () {
        Route::get('', [AdminController::class, 'index'])->name('admin');
    }
);

Route::resources(['categories' => CategoryController::class, 'products' => ProductController::class]);