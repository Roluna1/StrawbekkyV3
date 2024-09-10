import { cart } from "../data/cart";
import { products, FormatProduct } from "../data/products";
import { cartCountQuantity } from "./added-to-cart";
let matchingItem: FormatProduct;
export function addingQuantity(productID: string) {
  
  products.forEach(product => {
      if (product.id === productID) {
        matchingItem = product
      }
  });
  cart.forEach(carts => {
    if(carts.id === matchingItem.id) {
      carts.quantity += 1
    }
  cartCountQuantity();
  })

  //console.log(cart)
};
export function deductingQuantity(productID: string) {
  products.forEach(product => {
      if (product.id === productID) {
        matchingItem = product
      }
  });
  cart.forEach(carts => {
    if(carts.id === matchingItem.id) {
      if (carts.quantity <= 1) {
        return;
      } else {
        carts.quantity -= 1
      }
    }
  })
  cartCountQuantity();
};
export function renderingTotalPrice(productID: string) {
  products.forEach(product => {
    if (product.id === productID) {
      matchingItem = product;
    }
  });
  const targetSpan = document.querySelector<HTMLSpanElement>(`.data-checkout-${productID}`);
  const targetQuantity = document.querySelector<HTMLSpanElement>(`.data-quantity-${productID}`);
  cart.forEach(carts => {
    if (carts.id === matchingItem.id) {
      const totalPrice = matchingItem.price * carts.quantity;
      if (targetSpan) {
        targetSpan.textContent = `${totalPrice}`;
      }
      if (targetQuantity) {
        targetQuantity.textContent = `${carts.quantity}`
      }
    }
  });
}




