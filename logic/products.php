<?php
function getProducts()
{
    $products = [];
    $file = fopen('data/products.csv', 'r') or die();
    while (!feof($file)) {
        $line = fgets($file);
        $arr = explode(',', $line);
        $product = [
            'id' => $arr[0],
            'name' => $arr[1],
            'image' => $arr[2],
            'price' => (float) $arr[3],
            'discount' => (float) $arr[4],
            'ratig' => (float) $arr[5],
            'is_featured' => (bool) $arr[6],
            'rating_count' => (float) $arr[7],
            'is_recent' => (bool) $arr[8],
        ];
        array_push($products, $product);
    }
    return $products;
}