import { products } from "../data/products"
import { addToCarts } from "../data/cart";
import { cartCountQuantity } from "../utils/added-to-cart";
//import { loadData } from "./savingData.ts";
let productHTML: string = '';

products.forEach((product) => {
  productHTML += `
      <div class="product-content">
        <div class="product-img-container">
          <img class="product-img" src="${product.productImg()}">
          </div>
           <div class="product-details">
             <p class="product-name">${product.name}</p>
             <p class="product-price">₱ ${product.price}</p>
           </div>
        <div class="product-add-to-cart-button">
          <button class="add-to-cart-button" data-product-id=${product.id}>Add to cart</button>
        </div>
      </div>
  `;
  const productDisplay = document.querySelector<HTMLDivElement>(".product-container");

  if (productDisplay) {
    productDisplay.innerHTML = productHTML
  }
});

const addToCart = document.querySelectorAll<HTMLButtonElement>(".add-to-cart-button");

addToCart.forEach((add) => {
  add.addEventListener("click", () => {
    const addingToCart = add.dataset.productId
    if (addingToCart) {
      addToCarts(addingToCart);
      cartCountQuantity();
    }
  });
});


