const addToCart = function (product) {
    if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'));
        const product_idx = products.findIndex(function (saved_product) {
            return saved_product.id === product.id;
        });
        if (product_idx >= 0) {
            products[product_idx].quantity += 1;
        }
        else {
            products.push({...product, quantity: 1});
        }
        localStorage.setItem('products', JSON.stringify(products));
    }
    else {
        localStorage.setItem('products', JSON.stringify([{...product, quantity: 1}]));
    }
};