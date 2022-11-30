class Cart {
    products;
    constructor () {
        this.products = [];
        if (localStorage.getItem('products')) {
            this.products = JSON.parse(localStorage.getItem('products'));
        }
        this.RenderHTML ();
    };

    RenderHTML () {
        document.getElementById('products').innerHTML = '';
        this.products.forEach(function (value, idx) {
            document.getElementById('products').innerHTML += HTMLItem(value, idx);
        });
        document.getElementById('subTotal').innerHTML = `$${this.subTotal()}`;
        document.getElementById('shipping').innerHTML = `$${this.shipping()}`;
        document.getElementById('total').innerHTML = `$${this.total()}`;
    }

    subTotal () {
        if (this.products.length > 0) {
            return this.products.map(function (product) {
                return product.price * product.quantity;
            }).reduce(function (acum, curr) {
                return acum + curr;
            });
        }
        return 0;
    };
    
    shipping () {
        return this.products.length * 10;
    };
    
    total () {
        return this.subTotal() + this.shipping();
    };
    
    minusProduct (idx) {
        if (this.products[idx].quantity > 1) {
            this.products[idx].quantity--;
            this.updateLocalStorage();
        }
        this.RenderHTML();
    };
    
    plusProduct (idx) {
        this.products[idx].quantity++;
        this.updateLocalStorage();
        this.RenderHTML();
    };
    
    removeProduct (idx) {
        this.products.splice(idx, 1);
        this.updateLocalStorage();
        this.RenderHTML();
    };
    
    updateLocalStorage () {
        localStorage.setItem('products', JSON.stringify(this.products));
    };
}

const HTMLItem = function (product, idx) {
    return `<tr>
    <td class="align-middle"><img src="img/${product.name}.jpg" alt="" style="width: 50px;"> ${product.name}</td>
    <td class="align-middle">${product.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-minus" onclick="new Cart().minusProduct(${idx})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${product.quantity}">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-plus" onclick="new Cart().plusProduct(${idx})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">${product.price * product.quantity}</td>
    <td class="align-middle"><button class="btn btn-sm btn-danger" onclick="new Cart().removeProduct(${idx})"><i class="fa fa-times"></i></button></td>
</tr>`;
};

new Cart();
