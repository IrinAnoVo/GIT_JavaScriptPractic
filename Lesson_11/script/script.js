const state = {
    products: [],
    cart: [],
    isLoading: false,
    error: null
}

function loader(){
    if(state.isLoading){
        document.body.insertAdjacentHTML('beforeend', `
            <div class="loader">
                <div class="loader-animation"></div>
            </div>    
        `)
    }else {
        document.querySelector('.loader').remove();
    }
}

async function getProducts() {
    try {
        state.isLoading = true;
        loader();

        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        return data.products;
    } catch (error) {
        state.error = error;
    } finally {
        state.isLoading = false;
        loader();
    }
}


function createProductItems() {
    const productsContainer = document.querySelector('.product-list');

    productsContainer.innerHTML = '';

    state.products.forEach(product => productsContainer.insertAdjacentHTML('beforeend', `
        <div class="item">
            <img src="${product.thumbnail}" alt="">
            <h3>${product.title}</h3>
            <p>$ ${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `));
}

// 1. Написать функцию, которая будет добавлять товар в корзину +
// 2. Получение товара по id +
// 3. Найти товар в state.products по id +
// 4. Добавить товар в корзину state.cart +
// 5. Отрисовать корзину

// function createProductCart() {
//     const cartContainer = document.querySelector('.cart-list');

//     cartContainer.innerHTML = '';

//     state.cart.forEach(product => createProductItemInCart(product));
// }

function createProductItemInCart(product) {
    document.querySelector('.cart-list').insertAdjacentHTML('beforeend', `
        <div class="cart-item" cart-item-id="${product.id}">
            <div class="cart-item__image">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="cart-item__info">
                <h3>${product.title}</h3>
               <p>$ ${product.price}</p>

                <div class="quantity">
                    <button class="btn">-</button>
                    <span>1</span>
                    <button class="btn">+</button>
                </div>

                 <button class="btn" onclick="removeFromCart(${product.id})">Удалить</button>
            </div>
        </div>
    `)
}

function addToCart(productId){
    let foundProduct = state.products.find(product => product.id === productId);
    
    state.cart.push(foundProduct);

    localStorage.setItem('cart', JSON.stringify(state.cart));
    // console.log("cart", state.cart); // [{}]
    // createProductCart();
    // console.log("cart", state.cart); // [{}, {}]
    createProductItemInCart(foundProduct);
  
}

// 1. Написать функцию, которая будет удалять товар из корзины +
// 2. Получение товара по id +

function removeFromCart(productId){
    state.cart = state.cart.filter(product => product.id !== productId);

    localStorage.setItem('cart', JSON.stringify(state.cart));
    // createProductCart();
    document.querySelector(`[cart-item-id="${productId}"]`).remove();
}

async function render() {
    state.products = await getProducts();

    let cart = localStorage.getItem('cart');

    if(cart){
        state.cart = JSON.parse(cart);

        state.cart.forEach(product => createProductItemInCart(product));
    }

    createProductItems();
}

render();