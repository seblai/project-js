const products = [
    {
        barCode: "A111",
        title: "shampoo",
        description: "the best shampoo ever",
        price: 12,
        quantity: 0,
        img: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwD3KnrTzS6JSFmEFymEG3nxpE9Ktm_nU-Q&s",
            alt: "shampoo",
        },
    },
    {
        barCode: "A112",
        title: "tea",
        description: "the best tea ever",
        price: 20,
        quantity: 0,
        img: {
            src: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5fa4cbffd5c9e117f785d6a9_0076950450110-front.jpg",
        },
    },
    {
        barCode: "A113",
        title: "sugar",
        description: "the best sugar ever",
        price: 5,
        quantity: 0,
        img: {
            src: "https://peotraco.com/wp-content/uploads/2021/02/Refined-Sugar-1kilo.jpg",
        },
    },
    {
        barCode: "A114",
        title: "brush",
        description: "the best brush ever",
        price: 8,
        quantity: 0,
        img: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBl1acSLaR2TVNf3agM2J4Pf3C4TF7lRnCg&s",
        },
    },
    {
        barCode: "A115",
        title: "toothpaste",
        description: "the best toothpaste ever",
        price: 3,
        quantity: 0,
        img: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PKZ8kHo7hYfDNL1FDUsM3b4SaN3vW7pPlQ&s",
        },
    },
    {
        barCode: "A116",
        title: "salt",
        description: "the best salt ever",
        price: 7,
        quantity: 0,
        img: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5IrY_qgcAN43M5UkmyKHq3dCvEYFemWNAQ&s",
        },
    },
];

const shoppingCart = [];
function findProduct(barCode) {
    return products.find((product) => product.barCode === barCode);
}
function findProductInShoppingCart(barCode) {
    return shoppingCart.find((product) => product.barCode === barCode);
}

function addToCart(barCode) {
    findProduct(barCode);
}


function getShoppingCart() {
    return { cartItems: shoppingCart, count: products.length };
}
const productCards = document.getElementById("productCards");
products.forEach((element) => {
    productCards.innerHTML += getProductCard(element);
})

function getProductCard(product) {
    return `<div class="card d-flex align-items-center p-2" style="width: 200px">
                    <img style="width: 100px" src="${product.img.src}"
                        class="card-img-top image-fluid" alt="${product.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">
                            <span class="fw-bold">Price:</span> <span>${product.price}$</span>
                        </p>
                        <a  href="#" data-barcode='${product.barCode}' class="btn btn-primary addToCartBtn">Add To Cart</a>
                    </div>
                </div>`
}
const addToCartBtns = document.querySelectorAll('.addToCartBtn')

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const barCode = e.target.getAttribute('data-barcode');
        const copiedProduct = structuredClone(findProduct(barCode))
        const tmpProduct = findProductInShoppingCart(barCode)
        if (tmpProduct) {
            tmpProduct.quantity++;
        }
        else {
            copiedProduct.quantity++;
            shoppingCart.push(copiedProduct)
        }

        updateShoppingCart()
    })
});


function removeFromCart(barCode) {
    const product = shoppingCart.find((item) => item.barCode === barCode);
    if (product) {
        if (product.quantity > 1) {
            product.quantity--;
            console.log(product.quantity);

        } else {
            const productIndex = shoppingCart.findIndex((item) => item.barCode === barCode);
            shoppingCart.splice(productIndex, 1);
        }
        updateShoppingCart();
    }
}

function updateRemoveBtns() {

    const removeFromCartBtns = document.querySelectorAll('.removeBtn');
    removeFromCartBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const barCode = e.currentTarget.getAttribute('data-barcode');
            console.log(barCode);

            removeFromCart(barCode);
        });
    });
}

function updateShoppingCart() {
    const shoppingCartDiv = document.getElementById("shopping-cart");
    shoppingCartDiv.innerHTML = "";

    shoppingCart.forEach((product) => {
        shoppingCartDiv.innerHTML += getShoppingCartRow(product);
    });

    shoppingCartDiv.innerHTML += getCartSum();

    updateRemoveBtns();


}

const cartSum = document.getElementById("cartSum")

let totalPrice = 0;
let totalProducts = 0;

function getCartSum() {
    totalPrice = 0;
    totalProducts = 0;

    shoppingCart.forEach(element => {
        totalPrice += element.price * element.quantity;
        totalProducts += element.quantity;

    })
    return (`<div id="cartSum" class="d-flex justify-content-between border-top border-3 border-primary mt-4 py-2 fs-5">
        <div>
            <span class="fw-bold">Total: ${totalPrice}</span >
        <span>$</span>
        </div >
        <div>
            <span class="fw-bold">${totalProducts}</span>
            <span>items</span>
        </div>
    </div > `)
}

function getShoppingCartRow(product) {
    return `<div div class="d-flex align-items-center border-top py-2" >
                            <img style="height: 50px; width: 50px"
                                src="${product.img.src}"
                                class="card-img-top" alt="${product.title}" />
                            <div class="px-2 flex-fill">
                                <p class="m-0 fw-bold">${product.title}</p>
                                <p class="m-0">${product.price}$</p>
                                <h6 class="m-0">Quantity:${product.quantity}</h6>
                            </div>
                            <div>
                                <button class="btn btn-sm btn-outline-danger removeBtn" data-barcode="${product.barCode}">
                                    <i class="bi bi-dash"></i>
                                </button>
                            </div>
                        </div > `
}