import { cart } from "../data/cart";
import { products, FormatProduct } from "../data/products";
import { savingData } from "../data/cart";
interface TotalArray {
  price: number;
}
let totalArray: TotalArray[] = [];
const totalCountCheckout = document.querySelector<HTMLParagraphElement>('.bottom-total-price');
export function cartCountQuantity() {
  const cartCount = document.querySelector<HTMLParagraphElement>('.cart-count');
  const totalQuantity: number = cart.reduce((total, item) => total + item.quantity, 0);
  totalArray = [];
  cart.forEach(productGet => {
    const productId = productGet.id;
    const matchingProduct: FormatProduct | undefined = products.find(product => product.id === productId);
    if (matchingProduct) {
      totalArray.push({
        price: matchingProduct.price * productGet.quantity
      });
    }
  });
  const allTotal = totalArray.reduce((total, item) => total += item.price, 0);
  if (totalCountCheckout) {
    totalCountCheckout.innerHTML = `Total: (item: ${totalQuantity}) = <span>₱${allTotal}</span>`;
  }
  if (cartCount) {
    cartCount.innerText = `${totalQuantity}`;
  }
  savingData();
}
