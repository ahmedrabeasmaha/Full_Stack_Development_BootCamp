<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function index()
    {
        return view('index');
    }
    function category()
    {
        $categories = Category::all();
        return view('category')->with('categories', $categories);
    }
}