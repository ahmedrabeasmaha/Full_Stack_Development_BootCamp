<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::paginate(5);
        return response()->view('categories.categories', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->view('categories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(Category::$validate, ['name.required' => 'Name is required', 'image.required' => 'Image is required']);
        $imageUrl = $request->file('image')->store('categories', ['disk' => 'public']);
        $request['image'] = $imageUrl;
        Category::create($request->post());
        $request->session()->flash('alert-success', 'Category was successful added!');
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::findOrFail(['id' => $id]);
        return response()->view('categories.show', ['category' => $category]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::findOrFail(['id' => $id]);
        return response()->view('categories.edit', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        Validator::make(Category::$validate, ['name.required' => 'Name is required']);
        $category = Category::findOrFail($id);
        $category->fill($request->post());
        if ($request->file('image')) {
            $imageUrl = $request->file('image')->store('categories', ['disk' => 'public']);
            $category['image'] = $imageUrl;
        }
        $category->save();
        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::destroy(['id' => $id]);
        session()->flash('alert-success', 'Category was successful removed!');
        return redirect()->route('categories.index');
    }
}