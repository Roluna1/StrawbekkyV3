import { cart, deletingCheckout } from "../data/cart";
import { products, FormatProduct } from "../data/products";
import { addingQuantity, deductingQuantity, renderingTotalPrice } from "../utils/editingProduct"
import { cartCountQuantity } from "../utils/added-to-cart";
let inCartHTML: string = '';
cart.forEach((inCart) => {
  const productId = inCart.id;
  let gettingProduct: FormatProduct | undefined;
  products.forEach((product) => {
    if(product.id === productId) {
      gettingProduct = product
    }
  });
  if (gettingProduct) {
    inCartHTML += `
    <div class="checkout-content checkout-content-${gettingProduct.id}">
      <div class="checkout-img-container">
        <img class="checkout-img" src="${gettingProduct.productImg()}">
      </div>
      <div class="checkout-details-container">
        <p class="checkout-name">${gettingProduct.name}</p>
        <p class="checkout-price">₱ ${gettingProduct.price} (<span class="total-price-span data-checkout-${gettingProduct.id}">${gettingProduct.price * inCart.quantity}</span>)</p>
      </div>

      <div class="checkout-quantity-container">
        <div class="checkout-quantity-content">
          <p>Quantity</p>
          <div class="total-quantity-container">
            <button class="adding-quantity" data-checkout=${gettingProduct.id}>+</button>
            <p class="total-quantity data-quantity-${gettingProduct.id}">${inCart.quantity}</p>
            <button class="deducting-quantity" data-checkout=${gettingProduct.id}>-</button>
          </div>
        </div>
      </div>

      <div class="edit-delete-button-container">
        <div class="edit-delete-button-content">
          <button class="delete-button" data-checkout=${gettingProduct.id}><img class="delete-icon" src="./src/assets/img/delete.png"></button>
        </div>
      </div>
    </div>
`
  }
  const checkoutDisplay = document.querySelector(".checkout-container");
  if (checkoutDisplay) {
    checkoutDisplay.innerHTML = inCartHTML
  }
  const addQuantity = document.querySelectorAll<HTMLButtonElement>(".adding-quantity");
  addQuantity.forEach(add => {
    add.addEventListener('click', (event) => {
      const targetButton = event.currentTarget as HTMLElement
      const addButtonTarget = targetButton.getAttribute("data-checkout");
      if(addButtonTarget) {
        //console.log(addButtonTarget);
        addingQuantity(addButtonTarget);
        renderingTotalPrice(addButtonTarget)  
      }
    });
  });
  const deductQuantity = document.querySelectorAll<HTMLButtonElement>(".deducting-quantity");
  deductQuantity.forEach(add => {
    add.addEventListener('click', (event) => {
      const targetButton = event.currentTarget as HTMLElement
      const deductButtonTarget = targetButton.getAttribute("data-checkout");
      if(deductButtonTarget) {
        //console.log(deductButtonTarget);
        deductingQuantity(deductButtonTarget);
        renderingTotalPrice(deductButtonTarget)  
      }
    });
  });
  const deletingCart = document.querySelectorAll<HTMLButtonElement>(".delete-button");
  deletingCart.forEach(add => {
    add.addEventListener('click', (event) => {
      const targetButton = event.currentTarget as HTMLElement
      const deductButtonTarget = targetButton.getAttribute("data-checkout");
      const checkoutContent = document.querySelector<HTMLDivElement>(`.checkout-content-${deductButtonTarget}`)
      if (checkoutContent) {
        checkoutContent.remove();
      }
      if(deductButtonTarget) {
        deletingCheckout(deductButtonTarget)
        renderingTotalPrice(deductButtonTarget)
        cartCountQuantity(); 
      }
    });
  });
});
cartCountQuantity();