const featured = fetch("http://localhost:3000/api/products/getRecent");
(async () => {
    let response = await featured;
    let data = await response.json();
    let show = data.data;
    show.forEach(element => {
        document.getElementById('featured').innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div class="product-item bg-light mb-4">
            <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="${element.image}" alt="">
                <div class="product-action">
                    <a class="btn btn-outline-dark btn-square" href="" onclick="addSingleProductToCart({id:'${element._id}',name:'${element.name}',price:${element.price - (element.price * element.discount)},image:'${element.image}'})"><i class="fa fa-shopping-cart"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                </div>
            </div>
            <div class="text-center py-4">
                <a class="h6 text-decoration-none text-truncate" href="">${element.name}</a>
                <div class="d-flex align-items-center justify-content-center mt-2">
                    <h5>${element.price - (element.price * element.discount)}</h5><h6 class="text-muted ml-2"><del>${element.price}</del></h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small>(${element.rating_count})</small>
                </div>
            </div>
        </div>
    </div>`
    });
})();

const addSingleProductToCart = (product) => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};