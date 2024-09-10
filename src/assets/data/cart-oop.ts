function Cart(localDataKey: string) {
  interface Cart {
    id: string
    quantity: number
  }
  const cart = {
    cartItems: [] as Cart[],
  
    /* export function */
    savingData() /* function() */{
      localStorage.setItem(localDataKey, JSON.stringify(this.cartItems));
    },
  
    loadData() {
      const data = localStorage.getItem(localDataKey);
      if (data == null) {
        this.cartItems = [];
      } else {
        this.cartItems = JSON.parse(data) as Cart[];
      }
    },
  
    addToCarts(addingToCart: string) {
      let matchingItem: Cart | undefined;
      this.cartItems.forEach((carts) => {
        if(addingToCart == carts.id){
          matchingItem = carts
        }
      });
      if(matchingItem) {
        matchingItem.quantity += 1
      } else {
        this.cartItems.push({
          id: addingToCart,
          quantity: 1
        });
      };
      this.savingData();
      //console.log(cart)
    },
  
    deletingCheckout(id: string) {
      const checkoutContent = document.querySelector(`.checkout-content-${id}`)
      checkoutContent?.remove()
      const newCart: Cart[] = []
      this.cartItems.forEach((cartItem) => {
        if (cartItem.id !== id) {
          newCart.push(cartItem)
        }
      });
      this.cartItems = newCart
      this.savingData();
      //console.log("deleted")
      //console.log(cart);
    }
  };
  return cart;
}

//const cart = Cart('cart-oop');
//const bussinessCart = Cart('cart-bussiness');

console.log(Cart);
//console.log(bussinessCart)






