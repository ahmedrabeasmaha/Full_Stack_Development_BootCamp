function validate() {
    let x = document.getElementById('quantity').value;
    if (x > 0 && Number(x)) {
        let product = document.getElementById('product-name').value;
        let price = document.getElementById('price').value;
        let quantity = document.getElementById('quantity').value;
        let total = price * quantity;
        document.getElementById('products').innerHTML += `<tr><td>${product}</td><td>${price}</td><td>${quantity}</td><td>${total}</td><td>Remove<t/d></tr>`
    }
    else {
        alert("quantity must be number");
    }
}