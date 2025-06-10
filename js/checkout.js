import {cart} from './cart.js';
import {products as product} from './products.js';

let cartSummaryHTML = ''

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;
    
    product.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    cartSummaryHTML += `
    <div class="date-and-order-item">
    <p class="delivery-date">Delivery Date: Thursday, 8th June</p>
        <div class="order-item">
            <img class="order-item-image" src="images/bags2.jfif">
        <div class="order-item-details">
            <div class="order-item-name">${matchingProduct.name}</div>
            <div class="order-item-price">UGX.${matchingProduct.price}</div>
            <div class="order-item-quantity">Quantity:
                <span class="quantity-label">${cartItem.quantity}</span>
                <span class="update-quantity">Update</span>
                <span class="delete-quantity">Delete</span>
            </div>
        </div>

        <div class="delivery-options-container">
        <div class="delivery-options-title">
            Choose a delivery option:
        </div>
        <div class="delivery-options">
            <input type="radio" name="delivery-option-1" checked class="delivery-option-input">
            <div class="delivery-option-date">Thursday, 8th June</div>
            <div class="delivery-option-price">FREE </div>
        </div>

        <div class="delivery-options">
            <input type="radio" name="delivery-option-1" class="delivery-option-input">
            <div class="delivery-option-date">Friday, 9th June</div>
            <div class="delivery-option-price">UGX.2000</div>
        </div>
        </div>
        </div>
    </div>
    `;
});

console.log(cartSummaryHTML);