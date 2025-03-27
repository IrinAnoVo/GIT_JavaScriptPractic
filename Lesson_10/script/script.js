const state = {
    products: [],
    isLoading: false,
    error: null
}

{/* <div class="item">
    <img src="https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/4/2/422300_2.jpg" alt="">
    <h3>Apple Macbook</h3>
    <p>$ 3500</p>
    <button class="btn">Add to Cart</button>
</div> */}

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
            <button class="btn">Add to Cart</button>
        </div>
    `));
}

async function render() {
    state.products = await getProducts();

    createProductItems();
}

render();