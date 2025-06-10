import {cart, addToCart} from './cart.js';
import{products} from './products.js';

let productsHTML='';

    products.forEach((products) =>{
        productsHTML += `
        <div class="product-card js-product-card" >
            <div class="product-card-container ">
                <div class="card-image">
                    <img src="${products.image}">
                </div>
                <div class="card-name">${products.name} </div>
                <div class="card-price">UGX.${products.price}</div>
                <button class="add-to-cart js-add-to-cart" data-product-id="${products.id}">
                Add to Cart</button>
            </div>
        </div>
         `;
    });
    console.log(productsHTML);
    document.querySelector('.js-product-card').innerHTML= productsHTML;

        // add functionality to cart quantity

        function updateCartQuantity() {
            let cartQuantity = 0;
            cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
            });
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        }

        document.querySelectorAll('.js-add-to-cart').forEach((button) => {
            button.addEventListener('click', () => {
                
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });
