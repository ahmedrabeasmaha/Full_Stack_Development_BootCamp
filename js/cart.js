const subTotal = function () {
    if (products.length > 0) {
        return products.map(function (product) {
            return product.price * product.quantity;
        }).reduce(function (acum, curr) {
            return acum + curr;
        });
    }
    return 0;
};

const shipping = function () {
    return products.length * 10;
};

const total = function () {
    return subTotal() + shipping();
};

const minusProduct = function (idx) {
    if (products[idx].quantity > 1) {
        products[idx].quantity--;
        updateLocalStorage();
    }
    RenderHTML();
};

const plusProduct = function (idx) {
    products[idx].quantity++;
    updateLocalStorage();
    RenderHTML();
};

const removeProduct = function (idx) {
    products.splice(idx, 1);
    updateLocalStorage();
    RenderHTML();
};

const updateLocalStorage = function () {
    localStorage.setItem('products', JSON.stringify(products));
};

const RenderHTML = function () {
    document.getElementById('products').innerHTML = '';
    products.forEach(function (value, idx) {
        document.getElementById('products').innerHTML += HTMLItem(value, idx);
    });
    document.getElementById('subTotal').innerHTML = `$${subTotal()}`;
    document.getElementById('shipping').innerHTML = `$${shipping()}`;
    document.getElementById('total').innerHTML = `$${total()}`;
};

const HTMLItem = function (product, idx) {
    return `<tr>
    <td class="align-middle"><img src="img/${product.name}.jpg" alt="" style="width: 50px;"> ${product.name}</td>
    <td class="align-middle">${product.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-minus" onclick="minusProduct(${idx})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${product.quantity}">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-plus" onclick="plusProduct(${idx})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">${product.price * product.quantity}</td>
    <td class="align-middle"><button class="btn btn-sm btn-danger" onclick="removeProduct(${idx})"><i class="fa fa-times"></i></button></td>
</tr>`;
};

let products = [];

if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
}

RenderHTML();
