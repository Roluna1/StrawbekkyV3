interface cart {
  id: string
  quantity: number
}
export let cart: cart[] = loadData()

export function savingData() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function loadData() {
  const cartData = localStorage.getItem("cart")

  if (cartData == null) return[]
  return JSON.parse(cartData)
}

export function addToCarts(addingToCart: string) {
  let matchingItem: cart | undefined;

  cart.forEach((carts) => {
    if(addingToCart == carts.id){
      matchingItem = carts
    }
  });
  if(matchingItem) {
    matchingItem.quantity += 1
  } else {
    cart.push({
      id: addingToCart,
      quantity: 1
    });
  };
  //console.log(cart)
  savingData();
};
export function deletingCheckout(id: string) {
  const checkoutContent = document.querySelector(`.checkout-content-${id}`)
  checkoutContent?.remove()
  const newCart: cart[] = []
  cart.forEach((cartItem) => {
    if (cartItem.id !== id) {
      newCart.push(cartItem)
    }
  });
  //console.log("deleted")
  cart = newCart
  savingData();
  //console.log(cart);

};